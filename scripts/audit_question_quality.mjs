import fs from "node:fs/promises";
import path from "node:path";
import { createServer } from "vite";

const root = process.cwd();
const docsDir = path.join(root, "docs");

function normalizeStem(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function sourceSet(question) {
  if (question.id.startsWith("s3-market-docx-")) return "S3-Market DOCX";
  if (question.id.startsWith("s3-regulatory-pdf-")) return "S3-Regulatory PDF";
  if (question.sourceType === "rewritten") return "Regulatory rewritten";
  if (question.sourceType === "sample") return "Sample";
  return "Authored/generated";
}

function table(headers, rows) {
  return [
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${row.map((cell) => String(cell).replace(/\|/g, "\\|")).join(" | ")} |`)
  ].join("\n");
}

function groupCount(items, keyFn) {
  const map = new Map();
  for (const item of items) {
    const key = keyFn(item);
    map.set(key, (map.get(key) ?? 0) + 1);
  }
  return [...map.entries()].sort((a, b) => String(a[0]).localeCompare(String(b[0])));
}

function wordSet(text) {
  return new Set(
    normalizeStem(text)
      .split(" ")
      .filter((word) => word.length > 3)
  );
}

function jaccard(a, b) {
  let intersection = 0;
  for (const word of a) if (b.has(word)) intersection += 1;
  const union = new Set([...a, ...b]).size;
  return union === 0 ? 0 : intersection / union;
}

async function main() {
  await fs.mkdir(docsDir, { recursive: true });
  const server = await createServer({ root, appType: "custom", server: { middlewareMode: true }, logLevel: "error" });
  try {
    const { sampleQuestions } = await server.ssrLoadModule("/src/data/questions.ts");
    const { syllabus } = await server.ssrLoadModule("/src/data/syllabus.ts");
    const { buildCoverageReport } = await server.ssrLoadModule("/src/lib/analytics.ts");
    const { inferredQualityStatus, inferIssueTypes, ISSUE_TYPE_LABELS } = await server.ssrLoadModule("/src/lib/quality.ts");
    const { validateQuestionBank } = await server.ssrLoadModule("/src/lib/validation.ts");

    const questions = sampleQuestions;
    const active = questions.filter((question) => question.active);
    const validation = validateQuestionBank(active);
    const statusRows = groupCount(active, inferredQualityStatus);
    const sourceRows = groupCount(active, sourceSet);
    const sectionRows = groupCount(active, (question) => question.sectionId);
    const formatIssues = (question) =>
      (question.issueTypes ?? inferIssueTypes(question)).map((issue) => ISSUE_TYPE_LABELS[issue] ?? issue).join(", ");

    const issueRows = groupCount(
      active.flatMap((question) => question.issueTypes?.length ? question.issueTypes : inferIssueTypes(question)),
      (issue) => issue
    ).map(([issue, count]) => [ISSUE_TYPE_LABELS[issue] ?? issue, count]);
    const coverage = buildCoverageReport(active.filter((question) => inferredQualityStatus(question) !== "rejected"), []);

    const byNormalizedStem = new Map();
    for (const question of active) {
      const normalized = normalizeStem(question.stem);
      const rows = byNormalizedStem.get(normalized) ?? [];
      rows.push(question);
      byNormalizedStem.set(normalized, rows);
    }
    const exactDuplicates = [...byNormalizedStem.values()].filter((rows) => rows.length > 1);

    const stemSets = active.map((question) => ({ question, words: wordSet(question.stem) }));
    const nearDuplicates = [];
    for (let i = 0; i < stemSets.length; i += 1) {
      for (let j = i + 1; j < stemSets.length; j += 1) {
        const score = jaccard(stemSets[i].words, stemSets[j].words);
        if (score >= 0.88 && stemSets[i].question.topicId === stemSets[j].question.topicId) {
          nearDuplicates.push([stemSets[i].question.id, stemSets[j].question.id, score.toFixed(2)]);
        }
      }
    }

    const marketCalc = active.filter(
      (question) =>
        question.sectionId === "market_knowledge" &&
        question.sourceType === "imported" &&
        (question.issueTypes ?? inferIssueTypes(question)).includes("calculation_error")
    );
    const regulatoryReview = active.filter(
      (question) =>
        question.sectionId === "us_regulations" &&
        inferredQualityStatus(question) === "needs_review"
    );
    const rejected = active.filter((question) => inferredQualityStatus(question) === "rejected");
    const corrected = active.filter((question) => question.updatedAt === "2026-05-13T00:00:00.000Z");

    const topicRows = coverage.topics.map((node) => [
      node.sectionId,
      node.title,
      node.total,
      node.verified,
      node.needsReview,
      node.rejected,
      node.imported,
      node.sample + node.rewritten + node.userAuthored
    ]);
    const gapRows = coverage.subtopics
      .filter((node) => node.total === 0 || node.verified === 0)
      .map((node) => [node.sectionId, node.topicId ?? "", node.title, node.total, node.verified, node.needsReview]);

    const inventory = [
      "# Question Quality Audit Report",
      "",
      `Generated: ${new Date().toISOString()}`,
      "",
      "This report separates structural validity from content certification. `verified` means the item passed the current automated quality gates and, for authored items, the app's controlled generation/rewrite checks. `needs_review` means the item remains usable only when explicitly included, and should not be treated as content-certified.",
      "",
      table(["Metric", "Count"], [
        ["Total questions", questions.length],
        ["Active questions", active.length],
        ["Validation errors", validation.issues.filter((issue) => issue.severity === "error").length],
        ["Validation warnings", validation.issues.filter((issue) => issue.severity === "warning").length],
        ["Exact duplicate stem groups", exactDuplicates.length],
        ["Near-duplicate pairs >= 0.88", nearDuplicates.length]
      ]),
      "",
      "## Quality Status",
      table(["Status", "Count"], statusRows),
      "",
      "## Source Sets",
      table(["Source set", "Active QCMs"], sourceRows),
      "",
      "## Sections",
      table(["Section", "Active QCMs"], sectionRows),
      "",
      "## Issue Types",
      issueRows.length ? table(["Issue type", "Count"], issueRows) : "No issue types detected.",
      "",
      "## Corrected / Touched Questions",
      table(["Count"], [[corrected.length]]),
      "",
      "## Questions Still Needing Manual Review",
      table(["ID", "Section", "Topic", "Issues"], active
        .filter((question) => inferredQualityStatus(question) === "needs_review")
        .slice(0, 150)
        .map((question) => [question.id, question.sectionId, question.topicId, formatIssues(question)])),
      ""
    ].join("\n");

    const marketReport = [
      "# Market Calculation Audit Report",
      "",
      "Imported Market questions containing calculation-heavy signals are marked `needs_review` unless they have been manually recomputed and corrected. This is intentional: futures P&L, basis, margin, Treasury pricing, Eurodollar/T-bill, options, and spread calculations are high-risk content.",
      "",
      table(["Metric", "Count"], [
        ["Imported Market QCMs", active.filter((question) => question.id.startsWith("s3-market-docx-")).length],
        ["Calculation-risk imported Market QCMs", marketCalc.length],
        ["Verified Market QCMs", active.filter((question) => question.sectionId === "market_knowledge" && inferredQualityStatus(question) === "verified").length],
        ["Needs-review Market QCMs", active.filter((question) => question.sectionId === "market_knowledge" && inferredQualityStatus(question) === "needs_review").length]
      ]),
      "",
      "## Calculation-Risk Questions",
      table(["ID", "Topic", "Subtopic", "Issues"], marketCalc.slice(0, 200).map((question) => [
        question.id,
        question.topicId,
        question.subtopicId,
        formatIssues(question)
      ])),
      ""
    ].join("\n");

    const regulatoryReport = [
      "# Regulatory Audit Report",
      "",
      "Regulatory questions are screened for OCR artifacts, answer-letter-dependent distractors, and outdated-rule signals. Questions that may require legal/regulatory confirmation are marked `needs_review`.",
      "",
      table(["Metric", "Count"], [
        ["Imported Regulatory PDF QCMs", active.filter((question) => question.id.startsWith("s3-regulatory-pdf-")).length],
        ["Regulatory rewritten QCMs", active.filter((question) => question.sourceType === "rewritten").length],
        ["Verified Regulatory QCMs", active.filter((question) => question.sectionId === "us_regulations" && inferredQualityStatus(question) === "verified").length],
        ["Needs-review Regulatory QCMs", regulatoryReview.length]
      ]),
      "",
      "## Needs Review",
      table(["ID", "Topic", "Subtopic", "Issues"], regulatoryReview.slice(0, 200).map((question) => [
        question.id,
        question.topicId,
        question.subtopicId,
        formatIssues(question)
      ])),
      ""
    ].join("\n");

    const duplicateReport = [
      "# Duplicate Review Report",
      "",
      table(["Metric", "Count"], [
        ["Exact duplicate stem groups", exactDuplicates.length],
        ["Near-duplicate pairs >= 0.88", nearDuplicates.length],
        ["Rejected duplicate questions", rejected.filter((question) => (question.issueTypes ?? inferIssueTypes(question)).includes("duplicate")).length]
      ]),
      "",
      "## Rejected Duplicate Questions",
      rejected.length ? table(["ID", "Notes"], rejected.map((question) => [question.id, question.qualityNotes ?? "Rejected by quality audit."])) : "No rejected duplicate questions.",
      "",
      "## Exact Duplicate Groups",
      exactDuplicates.length
        ? exactDuplicates.map((rows) => `- ${rows.map((question) => question.id).join(", ")}`).join("\n")
        : "No exact duplicate stems detected.",
      "",
      "## Near-Duplicate Pairs",
      nearDuplicates.length ? table(["Question A", "Question B", "Similarity"], nearDuplicates.slice(0, 200)) : "No near-duplicate pairs detected at the configured threshold.",
      ""
    ].join("\n");

    const taxonomyReport = [
      "# Taxonomy Coverage Report",
      "",
      table(["Section", "Topic", "Total", "Verified", "Needs review", "Rejected", "Imported", "Authored/Rewritten/Sample"], topicRows),
      "",
      "## Subtopics With No Verified Questions",
      gapRows.length ? table(["Section", "Topic", "Subtopic", "Total", "Verified", "Needs review"], gapRows) : "Every subtopic has at least one verified question.",
      "",
      "## Syllabus Topics",
      table(["Section", "Topics", "Subtopics"], syllabus.map((section) => [
        section.title,
        section.topics.length,
        section.topics.reduce((sum, topic) => sum + topic.subtopics.length, 0)
      ])),
      ""
    ].join("\n");

    const correctedReport = [
      "# Corrected Questions Report",
      "",
      "This list captures questions touched by the cleanup/audit pass. Many imported questions share the same `updatedAt` timestamp because the pass normalized OCR artifacts, rationales, quality status, or known calculation/answer issues in bulk.",
      "",
      table(["Metric", "Count"], [
        ["Touched/corrected questions", corrected.length],
        ["Rejected duplicates", rejected.length],
        ["Still needs review", active.filter((question) => inferredQualityStatus(question) === "needs_review").length]
      ]),
      "",
      "## Corrected / Touched IDs",
      table(["ID", "Quality", "Issues"], corrected.slice(0, 300).map((question) => [
        question.id,
        inferredQualityStatus(question),
        formatIssues(question)
      ])),
      corrected.length > 300 ? `\nOnly the first 300 IDs are shown here; full details are available through the app export.` : "",
      ""
    ].join("\n");

    await fs.writeFile(path.join(docsDir, "question-quality-audit-report.md"), inventory);
    await fs.writeFile(path.join(docsDir, "market-calculation-audit-report.md"), marketReport);
    await fs.writeFile(path.join(docsDir, "regulatory-audit-report.md"), regulatoryReport);
    await fs.writeFile(path.join(docsDir, "duplicate-review-report.md"), duplicateReport);
    await fs.writeFile(path.join(docsDir, "taxonomy-coverage-report.md"), taxonomyReport);
    await fs.writeFile(path.join(docsDir, "corrected-questions-report.md"), correctedReport);

    console.log(`Active questions: ${active.length}`);
    console.log(`Quality: ${statusRows.map(([status, count]) => `${status}=${count}`).join(", ")}`);
    console.log(`Market calculation-risk imported questions: ${marketCalc.length}`);
    console.log(`Regulatory needs-review questions: ${regulatoryReview.length}`);
    console.log(`Exact duplicate groups: ${exactDuplicates.length}`);
    console.log(`Near duplicate pairs: ${nearDuplicates.length}`);
  } finally {
    await server.close();
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
