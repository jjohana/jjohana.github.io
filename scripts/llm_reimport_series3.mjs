import fs from "node:fs/promises";
import fsSync from "node:fs";
import path from "node:path";
import { createServer } from "vite";

const root = process.cwd();
const cacheDir = path.join(root, "private", "llm-reimport");
const manifestPath = path.join(cacheDir, "source-manifest.json");
const responseDir = path.join(cacheDir, "responses");
const reportDir = path.join(cacheDir, "reports");
const ledgerPath = path.join(cacheDir, "cost-ledger.json");
const docsDir = path.join(root, "docs");

const createdAt = "2026-05-14T00:00:00.000Z";
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
    maxBudget: Number(process.env.OPENAI_MAX_BUDGET_USD || 100),
    parallelism: Number(process.env.OPENAI_PARALLELISM || 4),
    limit: undefined,
    source: "all",
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
    else if (arg === "--source") args.source = argv[++index];
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
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
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

function responsePath(itemId) {
  return path.join(responseDir, `${itemId}.json`);
}

function normalizeStem(text) {
  return String(text || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
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

async function loadTaxonomy() {
  const server = await createServer({ root, appType: "custom", server: { middlewareMode: true }, logLevel: "error" });
  try {
    const { syllabus } = await server.ssrLoadModule("/src/data/syllabus.ts");
    const sections = new Map();
    const topics = new Map();
    const subtopics = new Map();
    const lines = [];
    for (const section of syllabus) {
      sections.set(section.id, section);
      lines.push(`${section.id}: ${section.title}`);
      for (const topic of section.topics) {
        topics.set(topic.id, topic);
        lines.push(`- ${topic.id}: ${topic.title}`);
        for (const subtopic of topic.subtopics) {
          subtopics.set(`${topic.id}/${subtopic.id}`, subtopic);
          lines.push(`  - ${subtopic.id}: ${subtopic.title}`);
        }
      }
    }
    return { syllabus, sections, topics, subtopics, promptText: lines.join("\n") };
  } finally {
    await server.close();
  }
}

function buildSchema() {
  const choiceSchema = {
    type: "object",
    additionalProperties: false,
    properties: {
      label: { type: "string" },
      text: { type: "string" },
      isCorrect: { type: "boolean" },
      rationale: { type: "string" }
    },
    required: ["label", "text", "isCorrect", "rationale"]
  };
  return {
    type: "object",
    additionalProperties: false,
    properties: {
      sourceHasQuestion: { type: "boolean" },
      transcript: {
        type: "object",
        additionalProperties: false,
        properties: {
          visibleQuestionNumber: { type: ["integer", "null"] },
          visibleSourceCode: { type: ["string", "null"] },
          visibleStem: { type: "string" },
          visibleChoices: { type: "array", items: choiceSchema },
          visibleAnswer: { type: ["string", "null"] },
          visibleExplanation: { type: "string" },
          uncertaintyNotes: { type: "array", items: { type: "string" } }
        },
        required: [
          "visibleQuestionNumber",
          "visibleSourceCode",
          "visibleStem",
          "visibleChoices",
          "visibleAnswer",
          "visibleExplanation",
          "uncertaintyNotes"
        ]
      },
      question: {
        type: ["object", "null"],
        additionalProperties: false,
        properties: {
          stem: { type: "string" },
          choices: { type: "array", minItems: 2, maxItems: 6, items: choiceSchema },
          explanation: { type: "string" },
          sectionId: { enum: ["market_knowledge", "us_regulations"] },
          topicId: { type: "string" },
          subtopicId: { type: "string" },
          difficulty: { enum: ["easy", "medium", "hard"] },
          questionType: { enum: ["multiple_choice", "true_false"] },
          sourceQuestionNumber: { type: ["integer", "null"] },
          sourceCode: { type: ["string", "null"] },
          extractionConfidence: { enum: ["high", "medium", "low"] },
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
          "sourceQuestionNumber",
          "sourceCode",
          "extractionConfidence",
          "qualityStatus",
          "issueTypes",
          "qualityNotes",
          "calculationCheck",
          "regulatoryCheck",
          "taxonomyRationale"
        ]
      }
    },
    required: ["sourceHasQuestion", "transcript", "question"]
  };
}

function buildPrompt(item, taxonomyText) {
  const sourceInstruction =
    item.source === "s3-market-docx"
      ? "This is a Series 3 Market Knowledge QCM screenshot from S3-Market.docx."
      : "This is a Series 3 U.S. Regulations QCM screenshot/page from S3-Regulatory.pdf.";
  return [
    sourceInstruction,
    "",
    "Task: produce a faithful transcript and an app-ready QCM audit record from the image.",
    "",
    "Rules:",
    "- Do not invent missing text. If text is not visible, mark uncertainty and use needs_review or rejected.",
    "- Correct obvious visual transcription errors only when the image makes the intended text clear.",
    "- Preserve question number and source code if visible.",
    "- Exactly one answer choice may be correct. If more than one is correct or the correct answer is not clear, do not mark verified.",
    "- True/False questions must use answer choices with text True and False.",
    "- Avoid answer choices such as all/none of the above or references like A and C. If the source uses them and cannot be safely rewritten semantically, mark needs_review or rejected.",
    "- For Market calculations, recompute the result. Mark verified only if formula, direction, contract size, tick/point value, commissions, and answer are coherent.",
    "- For Regulations, verify terminology and concept consistency. If the rule appears outdated or uncertain, mark needs_review.",
    "- Use verified only when the QCM is readable, unambiguous, educationally useful, and the explanation supports the answer.",
    "- Prefer needs_review over verified whenever there is meaningful uncertainty.",
    "",
    "Allowed taxonomy:",
    taxonomyText,
    "",
    `Source item: ${item.id}, sequence ${item.sequence}, document ${item.sourceDocument}.`,
    "Return only the JSON object requested by the schema."
  ].join("\n");
}

function estimateReservedCost(item) {
  const inputTokens = Number(item.estimatedImageTokensHigh || 1200) + 1800;
  const outputTokens = 3000;
  return (inputTokens * inputPricePerToken + outputTokens * outputPricePerToken) * 1.15;
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

async function callOpenAi(item, taxonomyText, args) {
  const imagePath = path.join(root, item.imagePath);
  const imageBase64 = await fs.readFile(imagePath, "base64");
  const ext = path.extname(imagePath).toLowerCase();
  const mime = ext === ".jpg" || ext === ".jpeg" ? "image/jpeg" : "image/png";
  const body = {
    model: args.model,
    reasoning: { effort: args.reasoningEffort },
    max_output_tokens: 4096,
    text: {
      format: {
        type: "json_schema",
        name: "series3_qcm_vision_audit",
        strict: true,
        schema: buildSchema()
      }
    },
    input: [
      {
        role: "user",
        content: [
          { type: "input_text", text: buildPrompt(item, taxonomyText) },
          {
            type: "input_image",
            image_url: `data:${mime};base64,${imageBase64}`,
            detail: args.detail
          }
        ]
      }
    ]
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
    if (response.ok) return json;
    const retryable = response.status === 429 || response.status >= 500;
    if (!retryable || attempt === 5) {
      throw new Error(`OpenAI request failed for ${item.id}: HTTP ${response.status} ${JSON.stringify(json).slice(0, 500)}`);
    }
    const delay = Math.min(60_000, 1500 * 2 ** (attempt - 1)) + Math.floor(Math.random() * 500);
    await new Promise((resolve) => setTimeout(resolve, delay));
  }
  throw new Error(`OpenAI request failed for ${item.id}`);
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

function validDifficulty(value) {
  return value === "easy" || value === "medium" || value === "hard" ? value : "medium";
}

function validQualityStatus(value) {
  return value === "verified" || value === "needs_review" || value === "rejected" ? value : "needs_review";
}

function validQuestionType(value, choices) {
  if (value === "true_false") return "true_false";
  const choiceTexts = choices.map((choice) => sanitizeText(choice.text).toLowerCase());
  return choiceTexts.length === 2 && choiceTexts.includes("true") && choiceTexts.includes("false")
    ? "true_false"
    : "multiple_choice";
}

function defaultTaxonomy(source) {
  return source === "s3-market-docx"
    ? { sectionId: "market_knowledge", topicId: "futures-theory", subtopicId: "general-futures-terminology" }
    : { sectionId: "us_regulations", topicId: "general-regulatory", subtopicId: "risk-disclosure" };
}

function normalizeQuestion(item, result, taxonomy) {
  if (!result?.sourceHasQuestion || !result.question) return null;
  const question = result.question;
  const choices = (question.choices ?? [])
    .map((choice, index) => ({
      id: String.fromCharCode(97 + index),
      text: sanitizeText(choice.text),
      isCorrect: Boolean(choice.isCorrect),
      rationale: sanitizeText(choice.rationale || (choice.isCorrect ? "Correct." : "Incorrect."))
    }))
    .filter((choice) => choice.text);
  const correctCount = choices.filter((choice) => choice.isCorrect).length;
  let qualityStatus = validQualityStatus(question.qualityStatus);
  const issueTypes = new Set(Array.isArray(question.issueTypes) ? question.issueTypes : []);
  if (choices.length < 2 || correctCount !== 1) {
    qualityStatus = qualityStatus === "rejected" ? "rejected" : "needs_review";
    issueTypes.add(correctCount === 0 ? "wrong_answer" : "ambiguous");
  }
  const fallbackTaxonomy = defaultTaxonomy(item.source);
  const sectionId = question.sectionId === fallbackTaxonomy.sectionId ? question.sectionId : fallbackTaxonomy.sectionId;
  const topicId = taxonomy.topics.has(question.topicId) && taxonomy.topics.get(question.topicId).sectionId === sectionId
    ? question.topicId
    : fallbackTaxonomy.topicId;
  const subtopicId = taxonomy.subtopics.has(`${topicId}/${question.subtopicId}`)
    ? question.subtopicId
    : fallbackTaxonomy.subtopicId;
  if (topicId !== question.topicId || subtopicId !== question.subtopicId) issueTypes.add("wrong_taxonomy");

  const sourceQuestionNumber = Number.isInteger(question.sourceQuestionNumber)
    ? question.sourceQuestionNumber
    : Number.isInteger(result.transcript?.visibleQuestionNumber)
      ? result.transcript.visibleQuestionNumber
      : item.sequence;
  const sourceCode = sanitizeText(question.sourceCode || result.transcript?.visibleSourceCode || "");
  const id =
    item.source === "s3-regulatory-pdf"
      ? `s3-regulatory-pdf-${String(sourceQuestionNumber).padStart(3, "0")}`
      : `s3-market-docx-${sourceQuestionNumber}`;
  const verified = qualityStatus === "verified" && issueTypes.size === 0;
  return {
    id,
    sectionId,
    topicId,
    subtopicId,
    difficulty: validDifficulty(question.difficulty),
    questionType: validQuestionType(question.questionType, choices),
    stem: sanitizeText(question.stem),
    choices,
    explanation: sanitizeText(question.explanation),
    sourceType: "imported",
    active: true,
    concept: taxonomy.topics.get(topicId)?.title ?? "",
    sourceNote: `User-provided ${item.sourceDocument} LLM vision import; source item ${item.id}; sequence ${item.sequence}${sourceCode ? `; source code ${sourceCode}` : ""}.`,
    reviewStatus: verified || qualityStatus === "rejected" ? "reviewed" : "needs_review",
    qualityStatus,
    qualityNotes: sanitizeText(question.qualityNotes || (verified ? "Verified by OpenAI gpt-5.5 vision transcript and content audit." : "Needs review after OpenAI gpt-5.5 vision transcript.")),
    verifiedAt: verified ? createdAt : undefined,
    verifiedBy: verified ? "OpenAI gpt-5.5 vision transcript + content audit, reasoning low" : undefined,
    issueTypes: [...issueTypes],
    extractionConfidence: question.extractionConfidence === "high" || question.extractionConfidence === "medium" || question.extractionConfidence === "low"
      ? question.extractionConfidence
      : "medium",
    sourcePageRange: String(item.sequence),
    sourceQuestionNumber,
    sourceCode: sourceCode || undefined,
    createdAt,
    updatedAt: createdAt,
    llmAudit: {
      sourceItemId: item.id,
      calculationCheck: sanitizeText(question.calculationCheck || ""),
      regulatoryCheck: sanitizeText(question.regulatoryCheck || ""),
      taxonomyRationale: sanitizeText(question.taxonomyRationale || "")
    }
  };
}

function stripInternalFields(question) {
  const { llmAudit: _llmAudit, ...publicQuestion } = question;
  return Object.fromEntries(Object.entries(publicQuestion).filter(([, value]) => value !== undefined));
}

function applyDuplicateReview(questions) {
  const review = [];
  const byStem = new Map();
  for (const question of questions) {
    const key = normalizeStem(question.stem);
    const rows = byStem.get(key) ?? [];
    rows.push(question);
    byStem.set(key, rows);
  }
  for (const rows of byStem.values()) {
    if (rows.length < 2) continue;
    rows.sort((a, b) => qualityRank(b) - qualityRank(a) || b.explanation.length - a.explanation.length);
    for (const duplicate of rows.slice(1)) {
      markDuplicate(duplicate, `Exact duplicate of ${rows[0].id}.`);
      review.push([rows[0].id, duplicate.id, "exact", "1.00"]);
    }
  }

  const activeCandidates = questions.filter((question) => question.qualityStatus !== "rejected");
  const stemSets = activeCandidates.map((question) => ({ question, words: wordSet(question.stem) }));
  for (let i = 0; i < stemSets.length; i += 1) {
    for (let j = i + 1; j < stemSets.length; j += 1) {
      const a = stemSets[i].question;
      const b = stemSets[j].question;
      if (a.qualityStatus === "rejected" || b.qualityStatus === "rejected") continue;
      if (a.topicId !== b.topicId) continue;
      const score = jaccard(stemSets[i].words, stemSets[j].words);
      if (score < 0.94) continue;
      const keep = qualityRank(a) >= qualityRank(b) ? a : b;
      const reject = keep === a ? b : a;
      markDuplicate(reject, `Near-duplicate of ${keep.id}.`);
      review.push([keep.id, reject.id, "near", score.toFixed(2)]);
    }
  }
  return review;
}

function qualityRank(question) {
  if (question.qualityStatus === "verified") return 3;
  if (question.qualityStatus === "needs_review") return 2;
  return 1;
}

function markDuplicate(question, note) {
  question.qualityStatus = "rejected";
  question.reviewStatus = "reviewed";
  question.verifiedAt = undefined;
  question.verifiedBy = undefined;
  question.issueTypes = [...new Set([...(question.issueTypes ?? []), "duplicate"])];
  question.qualityNotes = `${question.qualityNotes} Duplicate review: ${note}`;
}

function table(headers, rows) {
  return [
    `| ${headers.join(" | ")} |`,
    `| ${headers.map(() => "---").join(" | ")} |`,
    ...rows.map((row) => `| ${row.map((cell) => String(cell ?? "").replace(/\|/g, "\\|")).join(" | ")} |`)
  ].join("\n");
}

function countBy(items, fn) {
  const map = new Map();
  for (const item of items) {
    const key = fn(item);
    map.set(key, (map.get(key) ?? 0) + 1);
  }
  return map;
}

async function writeTs(file, exportName, questions) {
  const publicQuestions = questions.map(stripInternalFields);
  const content = `import type { Question } from "../types";\n\nexport const ${exportName}: Question[] = ${JSON.stringify(publicQuestions, null, 2)};\n`;
  await fs.writeFile(path.join(root, file), content, "utf8");
}

async function writeReports({ manifest, responses, questions, duplicateRows, ledger, args }) {
  await fs.mkdir(docsDir, { recursive: true });
  await fs.mkdir(reportDir, { recursive: true });
  const processed = responses.filter((entry) => entry.status === "ok");
  const errors = responses.filter((entry) => entry.status === "error");
  const noQuestion = processed.filter((entry) => !entry.result?.sourceHasQuestion);
  const byStatus = countBy(questions, (question) => question.qualityStatus);
  const bySource = countBy(questions, (question) => question.id.startsWith("s3-market-docx-") ? "S3-Market DOCX" : "S3-Regulatory PDF");
  const spent = (ledger.calls ?? []).reduce((sum, call) => sum + (call.costUsd ?? 0), 0);

  const costReport = [
    "# LLM Reimport Cost Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    table(["Metric", "Value"], [
      ["Model", args.model],
      ["Reasoning effort", args.reasoningEffort],
      ["Image detail", args.detail],
      ["Budget cap", `$${args.maxBudget.toFixed(2)}`],
      ["Actual tracked API cost", `$${spent.toFixed(4)}`],
      ["API calls", ledger.calls?.length ?? 0],
      ["Input tokens", (ledger.calls ?? []).reduce((sum, call) => sum + (call.inputTokens ?? 0), 0)],
      ["Output tokens", (ledger.calls ?? []).reduce((sum, call) => sum + (call.outputTokens ?? 0), 0)]
    ]),
    "",
    "## Calls",
    table(["Item", "Input tokens", "Output tokens", "Cost USD"], (ledger.calls ?? []).slice(-1000).map((call) => [
      call.itemId,
      call.inputTokens,
      call.outputTokens,
      Number(call.costUsd ?? 0).toFixed(4)
    ]))
  ].join("\n");

  const transcriptReport = [
    "# LLM Transcript Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    table(["Metric", "Count"], [
      ["Manifest items", manifest.items.length],
      ["Processed OK", processed.length],
      ["No question detected", noQuestion.length],
      ["Errors", errors.length],
      ["Questions extracted", questions.length],
      ["Verified", byStatus.get("verified") ?? 0],
      ["Needs review", byStatus.get("needs_review") ?? 0],
      ["Rejected", byStatus.get("rejected") ?? 0],
      ["Duplicate rejects", duplicateRows.length]
    ]),
    "",
    "## Source Sets",
    table(["Source", "Questions"], [...bySource.entries()]),
    "",
    "## Errors",
    errors.length
      ? table(["Item", "Error"], errors.map((entry) => [entry.itemId, entry.error]))
      : "No processing errors.",
    "",
    "## No Question Detected",
    noQuestion.length
      ? table(["Item"], noQuestion.map((entry) => [entry.itemId]))
      : "No empty pages/images detected."
  ].join("\n");

  const qualityReport = [
    "# Question Quality Audit Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "This report reflects the OpenAI gpt-5.5 vision reimport and audit pass.",
    "",
    table(["Metric", "Count"], [
      ["Imported questions rebuilt", questions.length],
      ["Verified imported questions", byStatus.get("verified") ?? 0],
      ["Needs-review imported questions", byStatus.get("needs_review") ?? 0],
      ["Rejected imported questions", byStatus.get("rejected") ?? 0],
      ["Duplicate decisions", duplicateRows.length]
    ]),
    "",
    "## Needs Review",
    table(["ID", "Topic", "Subtopic", "Issues", "Notes"], questions
      .filter((question) => question.qualityStatus === "needs_review")
      .slice(0, 250)
      .map((question) => [question.id, question.topicId, question.subtopicId, (question.issueTypes ?? []).join(", "), question.qualityNotes])),
    "",
    "## Rejected",
    table(["ID", "Issues", "Notes"], questions
      .filter((question) => question.qualityStatus === "rejected")
      .slice(0, 250)
      .map((question) => [question.id, (question.issueTypes ?? []).join(", "), question.qualityNotes]))
  ].join("\n");

  const marketQuestions = questions.filter((question) => question.id.startsWith("s3-market-docx-"));
  const regQuestions = questions.filter((question) => question.id.startsWith("s3-regulatory-pdf-"));
  const marketCalc = marketQuestions.filter((question) => /basis|margin|profit|loss|gain|return|breakeven|intrinsic|spread|hedge|tick|contract size|T-bond|T-note|T-bill|Eurodollar/i.test(`${question.stem} ${question.explanation}`));
  const marketReport = [
    "# Market Calculation Audit Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    table(["Metric", "Count"], [
      ["S3-Market DOCX questions", marketQuestions.length],
      ["Calculation-signal questions", marketCalc.length],
      ["Verified Market imports", marketQuestions.filter((question) => question.qualityStatus === "verified").length],
      ["Needs-review Market imports", marketQuestions.filter((question) => question.qualityStatus === "needs_review").length],
      ["Rejected Market imports", marketQuestions.filter((question) => question.qualityStatus === "rejected").length]
    ]),
    "",
    "## Calculation Checks",
    table(["ID", "Status", "Check"], marketCalc.slice(0, 250).map((question) => [
      question.id,
      question.qualityStatus,
      question.llmAudit?.calculationCheck ?? ""
    ]))
  ].join("\n");

  const regulatoryReport = [
    "# Regulatory Audit Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    table(["Metric", "Count"], [
      ["S3-Regulatory PDF questions", regQuestions.length],
      ["Verified Regulatory imports", regQuestions.filter((question) => question.qualityStatus === "verified").length],
      ["Needs-review Regulatory imports", regQuestions.filter((question) => question.qualityStatus === "needs_review").length],
      ["Rejected Regulatory imports", regQuestions.filter((question) => question.qualityStatus === "rejected").length]
    ]),
    "",
    "## Regulatory Checks",
    table(["ID", "Status", "Check"], regQuestions.slice(0, 250).map((question) => [
      question.id,
      question.qualityStatus,
      question.llmAudit?.regulatoryCheck ?? ""
    ]))
  ].join("\n");

  const duplicateReport = [
    "# Duplicate Review Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    table(["Metric", "Count"], [
      ["Duplicate decisions", duplicateRows.length],
      ["Rejected duplicates", questions.filter((question) => question.issueTypes?.includes("duplicate")).length]
    ]),
    "",
    duplicateRows.length
      ? table(["Kept", "Rejected", "Type", "Similarity"], duplicateRows)
      : "No duplicates detected by the current local duplicate pass."
  ].join("\n");

  const taxonomyRows = [...countBy(questions, (question) => `${question.sectionId}|${question.topicId}`).entries()]
    .map(([key, total]) => {
      const [sectionId, topicId] = key.split("|");
      const scoped = questions.filter((question) => question.sectionId === sectionId && question.topicId === topicId);
      return [
        sectionId,
        topicId,
        total,
        scoped.filter((question) => question.qualityStatus === "verified").length,
        scoped.filter((question) => question.qualityStatus === "needs_review").length,
        scoped.filter((question) => question.qualityStatus === "rejected").length
      ];
    })
    .sort((a, b) => String(a[0]).localeCompare(String(b[0])) || String(a[1]).localeCompare(String(b[1])));
  const taxonomyReport = [
    "# Taxonomy Coverage Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    table(["Section", "Topic", "Total", "Verified", "Needs review", "Rejected"], taxonomyRows)
  ].join("\n");

  const resetReport = [
    "# Fresh Import Reset / LLM Reimport Report",
    "",
    `Generated: ${new Date().toISOString()}`,
    "",
    "The imported S3 source banks have been rebuilt from OpenAI gpt-5.5 vision transcripts.",
    "",
    table(["Source", "Questions", "Verified", "Needs review", "Rejected"], [
      ["S3-Market DOCX", marketQuestions.length, marketQuestions.filter((q) => q.qualityStatus === "verified").length, marketQuestions.filter((q) => q.qualityStatus === "needs_review").length, marketQuestions.filter((q) => q.qualityStatus === "rejected").length],
      ["S3-Regulatory PDF", regQuestions.length, regQuestions.filter((q) => q.qualityStatus === "verified").length, regQuestions.filter((q) => q.qualityStatus === "needs_review").length, regQuestions.filter((q) => q.qualityStatus === "rejected").length]
    ]),
    "",
    `Tracked API cost: $${spent.toFixed(4)} under a $${args.maxBudget.toFixed(2)} cap.`
  ].join("\n");

  const files = {
    "llm-reimport-cost-report.md": costReport,
    "llm-transcript-report.md": transcriptReport,
    "question-quality-audit-report.md": qualityReport,
    "market-calculation-audit-report.md": marketReport,
    "regulatory-audit-report.md": regulatoryReport,
    "duplicate-review-report.md": duplicateReport,
    "taxonomy-coverage-report.md": taxonomyReport,
    "import-reset-report.md": resetReport
  };
  for (const [name, content] of Object.entries(files)) {
    await fs.writeFile(path.join(docsDir, name), `${content}\n`, "utf8");
  }
  await writeJson(path.join(reportDir, "llm-reimport-summary.json"), {
    generatedAt: new Date().toISOString(),
    spent,
    processed: processed.length,
    errors: errors.length,
    questions: questions.length,
    byStatus: Object.fromEntries(byStatus),
    duplicateRows
  });
}

async function processItems(items, taxonomy, args) {
  await fs.mkdir(responseDir, { recursive: true });
  const ledger = await readJson(ledgerPath, { calls: [], errors: [] });
  const selected = args.limit ? items.slice(0, args.limit) : items;
  let reserved = 0;
  let completed = 0;
  let stoppedForBudget = false;

  async function worker(workerId) {
    while (selected.length && !stoppedForBudget) {
      const item = selected.shift();
      if (!item) return;
      const cacheFile = responsePath(item.id);
      if (!args.force && fsSync.existsSync(cacheFile)) {
        completed += 1;
        if (completed % 25 === 0) console.log(`cached/processed ${completed}`);
        continue;
      }
      const spent = (ledger.calls ?? []).reduce((sum, call) => sum + (call.costUsd ?? 0), 0);
      const reserve = estimateReservedCost(item);
      if (spent + reserved + reserve > args.maxBudget) {
        stoppedForBudget = true;
        await writeJson(cacheFile, {
          itemId: item.id,
          status: "skipped_budget",
          error: `Skipped to keep budget under $${args.maxBudget}.`,
          createdAt: new Date().toISOString()
        });
        return;
      }
      reserved += reserve;
      try {
        const raw = await callOpenAi(item, taxonomy.promptText, args);
        const text = outputText(raw);
        let result;
        try {
          result = JSON.parse(text);
        } catch (error) {
          throw new Error(`Could not parse model JSON: ${String(error)}; output=${text.slice(0, 500)}`);
        }
        const cost = usageCost(raw.usage);
        ledger.calls.push({
          itemId: item.id,
          model: args.model,
          reasoningEffort: args.reasoningEffort,
          detail: args.detail,
          inputTokens: cost.inputTokens,
          outputTokens: cost.outputTokens,
          costUsd: cost.costUsd,
          createdAt: new Date().toISOString()
        });
        await writeJson(ledgerPath, ledger);
        await writeJson(cacheFile, {
          itemId: item.id,
          item,
          status: "ok",
          usage: raw.usage ?? {},
          cost,
          result,
          createdAt: new Date().toISOString()
        });
      } catch (error) {
        const message = error instanceof Error ? error.message : String(error);
        ledger.errors.push({ itemId: item.id, error: message, createdAt: new Date().toISOString() });
        await writeJson(ledgerPath, ledger);
        await writeJson(cacheFile, {
          itemId: item.id,
          item,
          status: "error",
          error: message,
          createdAt: new Date().toISOString()
        });
      } finally {
        reserved -= reserve;
        completed += 1;
        if (completed % 10 === 0) {
          const spentNow = (ledger.calls ?? []).reduce((sum, call) => sum + (call.costUsd ?? 0), 0);
          console.log(`processed ${completed}; spent=$${spentNow.toFixed(4)}; worker=${workerId}`);
        }
      }
    }
  }

  await Promise.all(Array.from({ length: Math.max(1, args.parallelism) }, (_, index) => worker(index + 1)));
  return ledger;
}

async function collectResponses(items) {
  const responses = [];
  for (const item of items) {
    const cache = await readJson(responsePath(item.id), null);
    if (cache) responses.push(cache);
  }
  return responses;
}

async function generateOutputs(manifest, taxonomy, args, ledger) {
  const responses = await collectResponses(manifest.items);
  const itemById = new Map(manifest.items.map((item) => [item.id, item]));
  const questions = [];
  for (const response of responses) {
    if (response.status !== "ok") continue;
    const item = response.item ?? itemById.get(response.itemId);
    const normalized = normalizeQuestion(item, response.result, taxonomy);
    if (normalized) questions.push(normalized);
  }
  const seenIds = new Map();
  for (const question of questions) {
    const count = seenIds.get(question.id) ?? 0;
    seenIds.set(question.id, count + 1);
    if (count > 0) question.id = `${question.id}-${count + 1}`;
  }
  const duplicateRows = applyDuplicateReview(questions);
  const market = questions
    .filter((question) => question.id.startsWith("s3-market-docx-"))
    .sort((a, b) => a.sourceQuestionNumber - b.sourceQuestionNumber || a.id.localeCompare(b.id));
  const regulatory = questions
    .filter((question) => question.id.startsWith("s3-regulatory-pdf-"))
    .sort((a, b) => a.sourceQuestionNumber - b.sourceQuestionNumber || a.id.localeCompare(b.id));

  await writeTs("src/data/s3MarketDocxQuestions.ts", "s3MarketDocxQuestions", market);
  await writeTs("src/data/s3RegulatoryPdfQuestions.ts", "regulatoryPdfQuestions", regulatory);
  await writeReports({ manifest, responses, questions, duplicateRows, ledger, args });
  return { responses, questions, duplicateRows };
}

async function main() {
  const args = parseArgs(process.argv.slice(2));
  if (!args.generateOnly) ensureOpenAiKey();
  await fs.mkdir(cacheDir, { recursive: true });
  await fs.mkdir(responseDir, { recursive: true });
  if (!fsSync.existsSync(manifestPath)) {
    throw new Error(`Missing source manifest. Run scripts/prepare_llm_sources.py first: ${manifestPath}`);
  }
  const manifest = await readJson(manifestPath, null);
  const taxonomy = await loadTaxonomy();
  let items = manifest.items;
  if (args.source !== "all") items = items.filter((item) => item.source === args.source);
  const ledger = args.generateOnly ? await readJson(ledgerPath, { calls: [], errors: [] }) : await processItems([...items], taxonomy, args);
  const output = await generateOutputs(manifest, taxonomy, args, ledger);
  const spent = (ledger.calls ?? []).reduce((sum, call) => sum + (call.costUsd ?? 0), 0);
  console.log(
    JSON.stringify(
      {
        processedCaches: output.responses.length,
        questions: output.questions.length,
        verified: output.questions.filter((question) => question.qualityStatus === "verified").length,
        needsReview: output.questions.filter((question) => question.qualityStatus === "needs_review").length,
        rejected: output.questions.filter((question) => question.qualityStatus === "rejected").length,
        duplicates: output.duplicateRows.length,
        spentUsd: Number(spent.toFixed(4))
      },
      null,
      2
    )
  );
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : String(error));
  process.exitCode = 1;
});
