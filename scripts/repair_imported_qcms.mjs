import fs from "node:fs/promises";
import fsSync from "node:fs";
import path from "node:path";
import { createServer } from "vite";

const root = process.cwd();
const reimportCacheDir = path.join(root, "private", "llm-reimport");
const repairCacheDir = path.join(root, "private", "llm-repair");
const repairResponseDir = path.join(repairCacheDir, "responses");
const reviewResponseDir = path.join(repairCacheDir, "reviews");
const ledgerPath = path.join(repairCacheDir, "cost-ledger.json");
const manifestPath = path.join(reimportCacheDir, "source-manifest.json");
const docsDir = path.join(root, "docs");

const repairedAt = "2026-05-14T00:00:00.000Z";
const inputPricePerToken = 5 / 1_000_000;
const outputPricePerToken = 30 / 1_000_000;
const defaultEnvFiles = [
  path.join("C:", "Users", "Jean-JacquesOhana", "Documents", "Python_Projects", "web-research", "env", "webapp.env"),
  path.join("C:", "Users", "Jean-JacquesOhana", "Documents", "Python_Projects", "web-research", "env", "app.env"),
  path.join("C:", "Users", "Jean-JacquesOhana", "Documents", "Python_Projects", "web-research", "webapp", ".env.local"),
  path.join("C:", "Users", "Jean-JacquesOhana", "Documents", "Python_Projects", "web-research", "webapp", ".env"),
  path.join("C:", "Users", "Jean-JacquesOhana", "Documents", "Python_Projects", "web-research", "app", ".env")
];

function parseArgs(argv) {
  const args = {
    model: process.env.OPENAI_MODEL || "gpt-5.5",
    reasoningEffort: process.env.OPENAI_REASONING_EFFORT || "low",
    detail: process.env.OPENAI_IMAGE_DETAIL || "high",
    maxBudget: Number(process.env.OPENAI_MAX_BUDGET_USD || 40),
    parallelism: Number(process.env.OPENAI_PARALLELISM || 4),
    limit: undefined,
    force: false,
    generateOnly: false
  };
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--model") args.model = argv[++index];
    else if (arg === "--reasoning-effort") args.reasoningEffort = argv[++index];
    else if (arg === "--detail") args.detail = argv[++index];
    else if (arg === "--max-budget") args.maxBudget = Number(argv[++index]);
    else if (arg === "--parallelism") args.parallelism = Number(argv[++index]);
    else if (arg === "--limit") args.limit = Number(argv[++index]);
    else if (arg === "--force") args.force = true;
    else if (arg === "--generate-only") args.generateOnly = true;
  }
  return args;
}

function readEnvValue(file, key) {
  if (!fsSync.existsSync(file)) return undefined;
  const lines = fsSync.readFileSync(file, "utf8").split(/\r?\n/);
  for (const line of lines) {
    const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
    if (!match || match[1] !== key) continue;
    let value = match[2].trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
    return value;
  }
  return undefined;
}

function ensureOpenAiKey() {
  if (process.env.OPENAI_API_KEY) return;
  for (const file of defaultEnvFiles) {
    const value = readEnvValue(file, "OPENAI_API_KEY");
    if (value) {
      process.env.OPENAI_API_KEY = value;
      return;
    }
  }
  throw new Error("OPENAI_API_KEY was not found in the web-research environment files.");
}

async function readJson(file, fallback) {
  try {
    return JSON.parse(await fs.readFile(file, "utf8"));
  } catch {
    return fallback;
  }
}

async function writeJson(file, value) {
  await fs.mkdir(path.dirname(file), { recursive: true });
  await fs.writeFile(file, JSON.stringify(value, null, 2), "utf8");
}

async function writeTextWithFallback(file, content) {
  try {
    await fs.writeFile(file, content, "utf8");
    return file;
  } catch (error) {
    if (error?.code !== "EBUSY" && error?.code !== "EPERM") throw error;
    const parsed = path.parse(file);
    const fallback = path.join(parsed.dir, `${parsed.name}.next${parsed.ext}`);
    await fs.writeFile(fallback, content, "utf8");
    return fallback;
  }
}

function usageCost(usage) {
  const inputTokens = usage?.input_tokens ?? usage?.prompt_tokens ?? 0;
  const outputTokens = usage?.output_tokens ?? usage?.completion_tokens ?? 0;
  return {
    inputTokens,
    outputTokens,
    costUsd: inputTokens * inputPricePerToken + outputTokens * outputPricePerToken
  };
}

function outputText(response) {
  if (typeof response.output_text === "string") return response.output_text;
  const chunks = [];
  for (const item of response.output ?? []) {
    for (const content of item.content ?? []) {
      if (typeof content.text === "string") chunks.push(content.text);
    }
  }
  return chunks.join("\n");
}

function sanitizeText(value) {
  return String(value ?? "")
    .normalize("NFKC")
    .replace(/[\u00A0\u2007\u202F]/g, " ")
    .replace(/[\u2010-\u2015\u2212]/g, "-")
    .replace(/[\u2018\u2019]/g, "'")
    .replace(/[\u201C\u201D]/g, '"')
    .replace(/\s+([,.;:?])/g, "$1")
    .replace(/\s+/g, " ")
    .trim();
}

function sourceItemId(question) {
  return question.sourceNote?.match(/source item ([^;]+)/)?.[1];
}

function sourceName(question) {
  return question.id.startsWith("s3-market-docx-") ? "S3-Market DOCX" : "S3-Regulatory PDF";
}

function repairPath(questionId) {
  return path.join(repairResponseDir, `${questionId}.json`);
}

function reviewPath(questionId) {
  return path.join(reviewResponseDir, `${questionId}.json`);
}

function buildRepairSchema() {
  const choiceSchema = {
    type: "object",
    additionalProperties: false,
    properties: {
      id: { type: "string" },
      text: { type: "string" },
      isCorrect: { type: "boolean" },
      rationale: { type: "string" }
    },
    required: ["id", "text", "isCorrect", "rationale"]
  };
  return {
    type: "object",
    additionalProperties: false,
    properties: {
      action: { enum: ["verify_repaired", "needs_review", "reject"] },
      repairedQuestion: {
        type: "object",
        additionalProperties: false,
        properties: {
          stem: { type: "string" },
          choices: { type: "array", minItems: 2, maxItems: 5, items: choiceSchema },
          explanation: { type: "string" },
          sectionId: { enum: ["market_knowledge", "us_regulations"] },
          topicId: { type: "string" },
          subtopicId: { type: "string" },
          difficulty: { enum: ["easy", "medium", "hard"] },
          questionType: { enum: ["multiple_choice", "true_false"] },
          qualityStatus: { enum: ["verified", "needs_review", "rejected"] },
          issueTypes: {
            type: "array",
            items: {
              enum: [
                "OCR/transcription",
                "wrong_answer",
                "ambiguous",
                "outdated_rule",
                "weak_explanation",
                "bad_distractors",
                "duplicate",
                "wrong_taxonomy",
                "calculation_error"
              ]
            }
          },
          qualityNotes: { type: "string" },
          calculationCheck: { type: "string" },
          regulatoryCheck: { type: "string" },
          taxonomyRationale: { type: "string" }
        },
        required: [
          "stem",
          "choices",
          "explanation",
          "sectionId",
          "topicId",
          "subtopicId",
          "difficulty",
          "questionType",
          "qualityStatus",
          "issueTypes",
          "qualityNotes",
          "calculationCheck",
          "regulatoryCheck",
          "taxonomyRationale"
        ]
      },
      repairSummary: { type: "string" },
      remainingRisk: { type: "string" }
    },
    required: ["action", "repairedQuestion", "repairSummary", "remainingRisk"]
  };
}

function buildReviewSchema() {
  return {
    type: "object",
    additionalProperties: false,
    properties: {
      approvedVerified: { type: "boolean" },
      finalQualityStatus: { enum: ["verified", "needs_review", "rejected"] },
      issueTypes: {
        type: "array",
        items: {
          enum: [
            "OCR/transcription",
            "wrong_answer",
            "ambiguous",
            "outdated_rule",
            "weak_explanation",
            "bad_distractors",
            "duplicate",
            "wrong_taxonomy",
            "calculation_error"
          ]
        }
      },
      reviewNotes: { type: "string" }
    },
    required: ["approvedVerified", "finalQualityStatus", "issueTypes", "reviewNotes"]
  };
}

function taxonomyText(syllabus) {
  return syllabus
    .flatMap((section) => [
      `${section.id}: ${section.title}`,
      ...section.topics.flatMap((topic) => [
        `- ${topic.id}: ${topic.title}`,
        ...topic.subtopics.map((subtopic) => `  - ${subtopic.id}: ${subtopic.title}`)
      ])
    ])
    .join("\n");
}

function isOutdatedOnly(question) {
  const issues = new Set(question.issueTypes ?? []);
  return issues.size === 1 && issues.has("outdated_rule");
}

function shouldUseRepairLlm(question) {
  if (question.issueTypes?.includes("duplicate")) return false;
  if (isOutdatedOnly(question)) return false;
  return true;
}

function buildRepairPrompt({ question, transcript, taxonomy }) {
  return [
    "You are repairing a Series 3 QCM for a static practice app.",
    "",
    "Current question object:",
    JSON.stringify(question, null, 2),
    "",
    "Prior source transcript from the previous vision pass:",
    JSON.stringify(transcript ?? {}, null, 2),
    "",
    "Allowed taxonomy:",
    taxonomy,
    "",
    "Repair rules:",
    "- Produce an app-ready QCM if, and only if, the source and concept are clear.",
    "- You may rewrite the question and answer choices into original educational wording while preserving the tested concept.",
    "- Remove all banned formats: all of the above, none of the above, both A and B, A and C only, either A or B, references to answer letters.",
    "- All answer choices must be standalone semantic answers.",
    "- Exactly one answer choice must be correct.",
    "- If multiple source propositions are true, rewrite the stem so there is one clear best answer, or leave needs_review/rejected.",
    "- For Market calculation items, recompute explicitly and put the calculation in calculationCheck and explanation.",
    "- For regulatory items, do not promote outdated or current-rule-uncertain questions to verified; leave needs_review unless the rule is timeless/general.",
    "- Duplicates should remain rejected unless this record is clearly better than the kept version; if so, still explain.",
    "- Final verified questions must have an empty issueTypes array.",
    "- If any meaningful uncertainty remains, use needs_review.",
    "",
    "Return strict JSON only."
  ].join("\n");
}

function buildReviewPrompt({ originalQuestion, repaired }) {
  return [
    "Second-pass audit for a repaired Series 3 QCM.",
    "",
    "Original non-verified question:",
    JSON.stringify(originalQuestion, null, 2),
    "",
    "Proposed repaired question:",
    JSON.stringify(repaired, null, 2),
    "",
    "Approve verified only if all are true:",
    "- stem is readable and meaningful",
    "- exactly one unambiguous correct answer",
    "- no all/none/both/A-and-B answer formats",
    "- choices are standalone and plausible",
    "- explanation and rationales support the answer",
    "- Market calculations are correct if present",
    "- regulatory statements are not obviously outdated or over-specific",
    "- taxonomy is valid and appropriate",
    "",
    "If not clean, downgrade to needs_review or rejected and list issueTypes.",
    "Return strict JSON only."
  ].join("\n");
}

async function callResponses({ model, reasoningEffort, schema, name, content, imagePath, detail }) {
  const inputContent = [{ type: "input_text", text: content }];
  if (imagePath) {
    const imageBase64 = await fs.readFile(imagePath, "base64");
    const ext = path.extname(imagePath).toLowerCase();
    const mime = ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" : "image/png";
    inputContent.push({ type: "input_image", image_url: `data:${mime};base64,${imageBase64}`, detail });
  }
  const body = {
    model,
    reasoning: { effort: reasoningEffort },
    max_output_tokens: 4096,
    text: { format: { type: "json_schema", name, strict: true, schema } },
    input: [{ role: "user", content: inputContent }]
  };

  for (let attempt = 1; attempt <= 5; attempt += 1) {
    const response = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      },
      body: JSON.stringify(body)
    });
    const text = await response.text();
    let json;
    try {
      json = JSON.parse(text);
    } catch {
      json = { raw: text };
    }
    if (response.ok) {
      const parsed = JSON.parse(outputText(json));
      return { raw: json, parsed };
    }
    const retryable = response.status === 429 || response.status >= 500;
    if (!retryable || attempt === 5) throw new Error(`OpenAI request failed: HTTP ${response.status} ${JSON.stringify(json).slice(0, 500)}`);
    const delay = Math.min(60_000, 1500 * 2 ** (attempt - 1)) + Math.floor(Math.random() * 500);
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
  throw new Error("OpenAI request failed");
}

function reserveCost(imageTokens = 1200, outputTokens = 2500) {
  return ((imageTokens + 2200) * inputPricePerToken + outputTokens * outputPricePerToken) * 1.2;
}

function currentSpend(ledger) {
  return (ledger.calls ?? []).reduce((sum, call) => sum + (call.costUsd ?? 0), 0);
}

function normalizedChoices(choices, questionType) {
  const cleaned = (choices ?? [])
    .map((choice, index) => ({
      id: String.fromCharCode(97 + index),
      text: sanitizeText(choice.text),
      isCorrect: Boolean(choice.isCorrect),
      rationale: sanitizeText(choice.rationale || (choice.isCorrect ? "Correct." : "Incorrect."))
    }))
    .filter((choice) => choice.text);
  if (questionType === "true_false") {
    return cleaned
      .filter((choice) => /^(true|false)$/i.test(choice.text))
      .sort((a, b) => (a.text.toLowerCase() === "true" ? -1 : 1) - (b.text.toLowerCase() === "true" ? -1 : 1))
      .map((choice, index) => ({ ...choice, id: index === 0 ? "true" : "false" }));
  }
  return cleaned;
}

function validSubtopic(taxonomy, sectionId, topicId, subtopicId) {
  return taxonomy.allSubtopics.some((subtopic) => subtopic.sectionId === sectionId && subtopic.topicId === topicId && subtopic.id === subtopicId);
}

function applyRepair(original, repair, secondReview, taxonomy) {
  const proposed = repair.repairedQuestion;
  const finalStatus = secondReview?.finalQualityStatus ?? proposed.qualityStatus;
  const approved = secondReview ? secondReview.approvedVerified && finalStatus === "verified" : finalStatus === "verified";
  const sectionId = proposed.sectionId === "market_knowledge" || proposed.sectionId === "us_regulations" ? proposed.sectionId : original.sectionId;
  const topic = taxonomy.allTopics.find((item) => item.id === proposed.topicId && item.sectionId === sectionId);
  const topicId = topic ? proposed.topicId : original.topicId;
  const subtopicId = validSubtopic(taxonomy, sectionId, topicId, proposed.subtopicId) ? proposed.subtopicId : original.subtopicId;
  const difficulty = ["easy", "medium", "hard"].includes(proposed.difficulty) ? proposed.difficulty : original.difficulty;
  const questionType = proposed.questionType === "true_false" ? "true_false" : "multiple_choice";
  const choices = normalizedChoices(proposed.choices, questionType);
  const correctCount = choices.filter((choice) => choice.isCorrect).length;
  let qualityStatus = approved ? "verified" : finalStatus;
  const issueTypes = new Set(approved ? [] : secondReview?.issueTypes ?? proposed.issueTypes ?? []);

  if (!validSubtopic(taxonomy, sectionId, topicId, subtopicId)) issueTypes.add("wrong_taxonomy");
  if (correctCount !== 1 || choices.length < (questionType === "true_false" ? 2 : 3)) issueTypes.add(correctCount === 1 ? "bad_distractors" : "wrong_answer");
  if (/\b(all of the above|none of the above)\b/i.test(choices.map((choice) => choice.text).join(" "))) issueTypes.add("bad_distractors");
  if (/\b(?:Both|Either|Neither)\s+[A-E]\s+(?:and|or|&)\s+[A-E]\b|\b[A-E]\s*(?:and|or|&)\s*[A-E]\s*(?:only)?\b|\banswers?\s+[A-E]\b/.test(choices.map((choice) => choice.text).join(" "))) {
    issueTypes.add("bad_distractors");
  }
  if (issueTypes.size > 0 && qualityStatus === "verified") qualityStatus = "needs_review";
  if (qualityStatus === "verified" && proposed.issueTypes?.length) qualityStatus = "needs_review";

  return {
    ...original,
    sectionId,
    topicId,
    subtopicId,
    difficulty,
    questionType,
    stem: sanitizeText(proposed.stem),
    choices,
    explanation: sanitizeText(proposed.explanation),
    reviewStatus: qualityStatus === "verified" || qualityStatus === "rejected" ? "reviewed" : "needs_review",
    qualityStatus,
    qualityNotes: sanitizeText(
      [
        proposed.qualityNotes,
        repair.repairSummary ? `Repair: ${repair.repairSummary}` : "",
        secondReview?.reviewNotes ? `Second-pass review: ${secondReview.reviewNotes}` : ""
      ]
        .filter(Boolean)
        .join(" ")
    ),
    issueTypes: [...issueTypes],
    extractionConfidence: qualityStatus === "verified" ? "high" : proposed.extractionConfidence ?? original.extractionConfidence,
    verifiedAt: qualityStatus === "verified" ? repairedAt : undefined,
    verifiedBy: qualityStatus === "verified" ? "OpenAI gpt-5.5 repair + second-pass audit, reasoning low" : undefined,
    updatedAt: repairedAt
  };
}

function markReviewedWithoutLlm(question, reason) {
  return {
    ...question,
    reviewStatus: question.qualityStatus === "rejected" ? "reviewed" : "needs_review",
    qualityNotes: `${question.qualityNotes ?? ""} Repair pass: ${reason}`.trim(),
    updatedAt: repairedAt
  };
}

function tsContent(exportName, questions) {
  return `import type { Question } from "../types";\n\nexport const ${exportName}: Question[] = ${JSON.stringify(questions, null, 2)};\n`;
}

function csv(value) {
  const text = String(value ?? "");
  return /[",\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function mdTable(headers, rows) {
  return [
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${row.map((cell) => String(cell ?? "").replace(/\|/g, "\\|")).join(" | ")} |`)
  ].join("\n");
}

async function loadAppData() {
  const server = await createServer({ root, appType: "custom", server: { middlewareMode: true }, logLevel: "error" });
  try {
    const { sampleQuestions } = await server.ssrLoadModule("/src/data/questions.ts");
    const { s3MarketDocxQuestions } = await server.ssrLoadModule("/src/data/s3MarketDocxQuestions.ts");
    const { regulatoryPdfQuestions } = await server.ssrLoadModule("/src/data/s3RegulatoryPdfQuestions.ts");
    const { inferredQualityStatus } = await server.ssrLoadModule("/src/lib/quality.ts");
    const { syllabus, allTopics, allSubtopics } = await server.ssrLoadModule("/src/data/syllabus.ts");
    return { sampleQuestions, s3MarketDocxQuestions, regulatoryPdfQuestions, inferredQualityStatus, syllabus, allTopics, allSubtopics };
  } finally {
    await server.close();
  }
}

async function processCandidate({ question, sourceItem, transcript, taxonomyPrompt, taxonomy, args, ledger }) {
  if (!shouldUseRepairLlm(question)) {
    const reason = question.issueTypes?.includes("duplicate")
      ? "duplicate retained as rejected unless manually selected as the keeper"
      : "outdated regulatory/currentness issue retained for manual review";
    return { question: markReviewedWithoutLlm(question, reason), mode: "local", repaired: false, reason };
  }

  const cacheFile = repairPath(question.id);
  let repairCache = !args.force ? await readJson(cacheFile, null) : null;
  if (!repairCache) {
    const reserve = reserveCost(sourceItem?.estimatedImageTokensHigh ?? 1200);
    if (currentSpend(ledger) + reserve > args.maxBudget) {
      return { question: markReviewedWithoutLlm(question, `budget cap reached before repair call`), mode: "skipped_budget", repaired: false };
    }
    const prompt = buildRepairPrompt({ question, transcript, taxonomy: taxonomyPrompt });
    const imagePath = sourceItem?.imagePath ? path.join(root, sourceItem.imagePath) : undefined;
    try {
      const response = await callResponses({
        model: args.model,
        reasoningEffort: args.reasoningEffort,
        schema: buildRepairSchema(),
        name: "series3_qcm_repair",
        content: prompt,
        imagePath,
        detail: args.detail
      });
      const cost = usageCost(response.raw.usage);
      ledger.calls.push({ itemId: question.id, phase: "repair", inputTokens: cost.inputTokens, outputTokens: cost.outputTokens, costUsd: cost.costUsd, createdAt: new Date().toISOString() });
      repairCache = { status: "ok", questionId: question.id, sourceItemId: sourceItem?.id, usage: response.raw.usage, cost, result: response.parsed, createdAt: new Date().toISOString() };
    } catch (error) {
      repairCache = { status: "error", questionId: question.id, error: error instanceof Error ? error.message : String(error), createdAt: new Date().toISOString() };
      ledger.errors.push({ itemId: question.id, phase: "repair", error: repairCache.error, createdAt: new Date().toISOString() });
    }
    await writeJson(cacheFile, repairCache);
    await writeJson(ledgerPath, ledger);
  }

  if (repairCache.status !== "ok") {
    return { question: markReviewedWithoutLlm(question, `repair call failed or unavailable: ${repairCache.error ?? repairCache.status}`), mode: "error", repaired: false };
  }

  const repair = repairCache.result;
  let secondReview;
  if (repair.repairedQuestion?.qualityStatus === "verified" || repair.action === "verify_repaired") {
    const reviewCacheFile = reviewPath(question.id);
    let reviewCache = !args.force ? await readJson(reviewCacheFile, null) : null;
    if (!reviewCache) {
      const reserve = reserveCost(0, 1200);
      if (currentSpend(ledger) + reserve > args.maxBudget) {
        secondReview = { approvedVerified: false, finalQualityStatus: "needs_review", issueTypes: ["weak_explanation"], reviewNotes: "Budget cap reached before second-pass review." };
      } else {
        try {
          const response = await callResponses({
            model: args.model,
            reasoningEffort: args.reasoningEffort,
            schema: buildReviewSchema(),
            name: "series3_qcm_second_review",
            content: buildReviewPrompt({ originalQuestion: question, repaired: repair.repairedQuestion }),
            detail: args.detail
          });
          const cost = usageCost(response.raw.usage);
          ledger.calls.push({ itemId: question.id, phase: "second_review", inputTokens: cost.inputTokens, outputTokens: cost.outputTokens, costUsd: cost.costUsd, createdAt: new Date().toISOString() });
          reviewCache = { status: "ok", questionId: question.id, usage: response.raw.usage, cost, result: response.parsed, createdAt: new Date().toISOString() };
        } catch (error) {
          reviewCache = { status: "error", questionId: question.id, error: error instanceof Error ? error.message : String(error), createdAt: new Date().toISOString() };
          ledger.errors.push({ itemId: question.id, phase: "second_review", error: reviewCache.error, createdAt: new Date().toISOString() });
        }
        await writeJson(reviewCacheFile, reviewCache);
        await writeJson(ledgerPath, ledger);
      }
    }
    if (!secondReview) {
      secondReview =
        reviewCache?.status === "ok"
          ? reviewCache.result
          : { approvedVerified: false, finalQualityStatus: "needs_review", issueTypes: ["weak_explanation"], reviewNotes: `Second-pass review unavailable: ${reviewCache?.error ?? "unknown error"}` };
    }
  }

  const updated = applyRepair(question, repair, secondReview, taxonomy);
  return { question: updated, mode: "llm", repaired: updated.qualityStatus === "verified", repair, secondReview };
}

async function writeReviewQueue(questions, inferredQualityStatus) {
  const rows = questions
    .filter((question) => question.active && question.sourceType === "imported")
    .map((question) => ({ question, status: inferredQualityStatus(question) }))
    .filter(({ status }) => status === "needs_review" || status === "rejected")
    .map(({ question, status }) => ({
      status,
      id: question.id,
      source: sourceName(question),
      sourceQuestionNumber: question.sourceQuestionNumber ?? "",
      sourceCode: question.sourceCode ?? "",
      topicId: question.topicId,
      subtopicId: question.subtopicId,
      issues: (question.issueTypes ?? []).join("; "),
      note: question.qualityNotes ?? "",
      stem: question.stem
    }))
    .sort((a, b) => a.source.localeCompare(b.source) || a.status.localeCompare(b.status) || String(a.sourceQuestionNumber).localeCompare(String(b.sourceQuestionNumber), undefined, { numeric: true }));

  const byStatus = new Map();
  const byIssue = new Map();
  const bySourceStatus = new Map();
  for (const row of rows) {
    byStatus.set(row.status, (byStatus.get(row.status) ?? 0) + 1);
    bySourceStatus.set(`${row.source} / ${row.status}`, (bySourceStatus.get(`${row.source} / ${row.status}`) ?? 0) + 1);
    for (const issue of row.issues.split("; ").filter(Boolean)) byIssue.set(issue, (byIssue.get(issue) ?? 0) + 1);
  }

  const md = [
    "# Imported QCM Review Queue",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "This file lists imported S3-Market DOCX and S3-Regulatory PDF questions that are not currently verified.",
    "",
    "## Summary",
    "",
    mdTable(["Metric", "Count"], [
      ["Total non-verified imported QCMs", rows.length],
      ["Needs review", byStatus.get("needs_review") ?? 0],
      ["Rejected", byStatus.get("rejected") ?? 0]
    ]),
    "",
    "## By Source And Status",
    "",
    mdTable(["Source / Status", "Count"], [...bySourceStatus.entries()].sort()),
    "",
    "## By Issue Type",
    "",
    mdTable(["Issue type", "Count"], [...byIssue.entries()].sort((a, b) => b[1] - a[1])),
    "",
    "## Review Queue",
    "",
    mdTable(["Status", "ID", "Source #", "Source code", "Topic", "Subtopic", "Issues", "Note"], rows.map((row) => [
      row.status,
      row.id,
      row.sourceQuestionNumber,
      row.sourceCode,
      row.topicId,
      row.subtopicId,
      row.issues,
      row.note
    ])),
    ""
  ].join("\n");
  await writeTextWithFallback(path.join(docsDir, "imported-qcm-review-queue.md"), md);
  await writeTextWithFallback(
    path.join(docsDir, "imported-qcm-review-queue.csv"),
    [
      ["status", "id", "source", "sourceQuestionNumber", "sourceCode", "topicId", "subtopicId", "issues", "note", "stem"].map(csv).join(","),
      ...rows.map((row) => [row.status, row.id, row.source, row.sourceQuestionNumber, row.sourceCode, row.topicId, row.subtopicId, row.issues, row.note, row.stem].map(csv).join(","))
    ].join("\n"),
    "utf8"
  );
  return rows;
}

async function writeReports({ starting, ending, repairResults, ledger, allImported, inferredQualityStatus, maxBudget }) {
  await fs.mkdir(docsDir, { recursive: true });
  const spent = currentSpend(ledger);
  const repairedToVerified = repairResults.filter((result) => result.repaired).length;
  const localReviewed = repairResults.filter((result) => result.mode === "local").length;
  const byEndingStatus = new Map();
  const bySourceStatus = new Map();
  const byIssue = new Map();
  for (const question of allImported) {
    const status = inferredQualityStatus(question);
    byEndingStatus.set(status, (byEndingStatus.get(status) ?? 0) + 1);
    bySourceStatus.set(`${sourceName(question)} / ${status}`, (bySourceStatus.get(`${sourceName(question)} / ${status}`) ?? 0) + 1);
    for (const issue of question.issueTypes ?? []) byIssue.set(issue, (byIssue.get(issue) ?? 0) + 1);
  }

  const repairReport = [
    "# Imported QCM Repair Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    mdTable(["Metric", "Count"], [
      ["Starting non-verified imported QCMs", starting.nonVerified],
      ["Starting needs_review", starting.needsReview],
      ["Starting rejected", starting.rejected],
      ["Ending verified imported QCMs", byEndingStatus.get("verified") ?? 0],
      ["Ending needs_review imported QCMs", byEndingStatus.get("needs_review") ?? 0],
      ["Ending rejected imported QCMs", byEndingStatus.get("rejected") ?? 0],
      ["Promoted to verified by repair pass", repairedToVerified],
      ["Reviewed locally without LLM", localReviewed],
      ["LLM repair/review API calls", ledger.calls?.length ?? 0],
      ["API cost used", `$${spent.toFixed(4)}`]
    ]),
    "",
    "## Ending Source / Status",
    "",
    mdTable(["Source / Status", "Count"], [...bySourceStatus.entries()].sort()),
    "",
    "## Remaining Issue Types",
    "",
    mdTable(["Issue type", "Count"], [...byIssue.entries()].sort((a, b) => b[1] - a[1])),
    "",
    "## Repair Decisions",
    "",
    mdTable(["ID", "Mode", "Repaired to verified", "Final status", "Notes"], repairResults.map((result) => [
      result.question.id,
      result.mode,
      result.repaired ? "yes" : "no",
      inferredQualityStatus(result.question),
      result.question.qualityNotes ?? result.reason ?? ""
    ]))
  ].join("\n");
  await writeTextWithFallback(path.join(docsDir, "imported-qcm-repair-report.md"), `${repairReport}\n`);

  const costReport = [
    "# LLM Repair Cost Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    mdTable(["Metric", "Value"], [
      ["Model", "gpt-5.5"],
      ["Budget cap", `$${maxBudget.toFixed(2)}`],
      ["Actual tracked API cost", `$${spent.toFixed(4)}`],
      ["API calls", ledger.calls?.length ?? 0],
      ["Input tokens", (ledger.calls ?? []).reduce((sum, call) => sum + (call.inputTokens ?? 0), 0)],
      ["Output tokens", (ledger.calls ?? []).reduce((sum, call) => sum + (call.outputTokens ?? 0), 0)]
    ]),
    "",
    "## Calls",
    "",
    mdTable(["ID", "Phase", "Input tokens", "Output tokens", "Cost USD"], (ledger.calls ?? []).map((call) => [
      call.itemId,
      call.phase,
      call.inputTokens,
      call.outputTokens,
      Number(call.costUsd ?? 0).toFixed(4)
    ]))
  ].join("\n");
  await writeTextWithFallback(path.join(docsDir, "llm-repair-cost-report.md"), `${costReport}\n`);
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.generateOnly) ensureOpenAiKey();
  await fs.mkdir(repairResponseDir, { recursive: true });
  await fs.mkdir(reviewResponseDir, { recursive: true });
  const manifest = await readJson(manifestPath, null);
  if (!manifest) throw new Error(`Missing source manifest at ${manifestPath}`);
  const sourceItems = new Map(manifest.items.map((item) => [item.id, item]));
  const data = await loadAppData();
  const taxonomyPrompt = taxonomyText(data.syllabus);
  const taxonomy = { allTopics: data.allTopics, allSubtopics: data.allSubtopics };
  const importedRaw = [...data.s3MarketDocxQuestions, ...data.regulatoryPdfQuestions];
  const rawById = new Map(importedRaw.map((question) => [question.id, question]));
  const candidates = data.sampleQuestions
    .filter((question) => question.active && question.sourceType === "imported" && data.inferredQualityStatus(question) !== "verified")
    .map((question) => rawById.get(question.id) ?? question);
  const selectedCandidates = args.limit ? candidates.slice(0, args.limit) : candidates;
  const starting = {
    nonVerified: candidates.length,
    needsReview: candidates.filter((question) => data.inferredQualityStatus(question) === "needs_review").length,
    rejected: candidates.filter((question) => data.inferredQualityStatus(question) === "rejected").length
  };
  const ledger = await readJson(ledgerPath, { calls: [], errors: [] });
  const updates = new Map();
  const repairResults = [];
  const queue = [...selectedCandidates];
  let processed = 0;

  async function worker(workerId) {
    while (queue.length) {
      const question = queue.shift();
      const itemId = sourceItemId(question);
      const sourceItem = itemId ? sourceItems.get(itemId) : undefined;
      const previousResponse = itemId ? await readJson(path.join(reimportCacheDir, "responses", `${itemId}.json`), null) : null;
      const result = await processCandidate({
        question,
        sourceItem,
        transcript: previousResponse?.result?.transcript,
        taxonomyPrompt,
        taxonomy,
        args,
        ledger
      });
      updates.set(question.id, result.question);
      repairResults.push(result);
      processed += 1;
      if (processed % 10 === 0) console.log(`repair processed ${processed}/${selectedCandidates.length}; spent=$${currentSpend(ledger).toFixed(4)}; worker=${workerId}`);
    }
  }

  if (!args.generateOnly) {
    await Promise.all(Array.from({ length: Math.max(1, args.parallelism) }, (_, index) => worker(index + 1)));
  } else {
    for (const question of selectedCandidates) {
      const repairCache = await readJson(repairPath(question.id), null);
      if (!repairCache?.result) continue;
      const reviewCache = await readJson(reviewPath(question.id), null);
      const updated = applyRepair(question, repairCache.result, reviewCache?.result, taxonomy);
      updates.set(question.id, updated);
      repairResults.push({ question: updated, mode: "cached", repaired: updated.qualityStatus === "verified" });
    }
  }

  const updatedMarket = data.s3MarketDocxQuestions.map((question) => updates.get(question.id) ?? question);
  const updatedReg = data.regulatoryPdfQuestions.map((question) => updates.get(question.id) ?? question);
  await fs.writeFile(path.join(root, "src", "data", "s3MarketDocxQuestions.ts"), tsContent("s3MarketDocxQuestions", updatedMarket), "utf8");
  await fs.writeFile(path.join(root, "src", "data", "s3RegulatoryPdfQuestions.ts"), tsContent("regulatoryPdfQuestions", updatedReg), "utf8");

  const refreshed = await loadAppData();
  const allImported = refreshed.sampleQuestions.filter((question) => question.sourceType === "imported");
  await writeReviewQueue(refreshed.sampleQuestions, refreshed.inferredQualityStatus);
  await writeReports({
    starting,
    ending: {},
    repairResults,
    ledger,
    allImported,
    inferredQualityStatus: refreshed.inferredQualityStatus,
    maxBudget: args.maxBudget
  });

  console.log(
    JSON.stringify(
      {
        starting,
        ending: {
          verified: allImported.filter((question) => refreshed.inferredQualityStatus(question) === "verified").length,
          needsReview: allImported.filter((question) => refreshed.inferredQualityStatus(question) === "needs_review").length,
          rejected: allImported.filter((question) => refreshed.inferredQualityStatus(question) === "rejected").length
        },
        processed: repairResults.length,
        promoted: repairResults.filter((result) => result.repaired).length,
        spentUsd: Number(currentSpend(ledger).toFixed(4))
      },
      null,
      2
    )
  );
}

main().catch((error) => {
  console.error(error instanceof Error ? error.stack ?? error.message : String(error));
  process.exitCode = 1;
});
