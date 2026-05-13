import { getSection, getTopic, syllabus } from "../data/syllabus";
import type { ImportValidationReport, IssueType, QualityStatus, Question, SectionId, ValidationIssue } from "../types";
import { makeId } from "./prng";
import { applyQuestionQualityDefaults } from "./quality";
import { validateQuestion } from "./validation";

function normalizeSectionId(value: string): SectionId {
  const normalized = value.trim().toLowerCase().replace(/[\s.-]+/g, "_");
  if (normalized === "market" || normalized === "market_knowledge") return "market_knowledge";
  if (normalized === "regulations" || normalized === "u_s_regulations" || normalized === "us_regulations") return "us_regulations";
  const match = syllabus.find((section) => section.title.toLowerCase() === value.trim().toLowerCase());
  return match?.id ?? (normalized as SectionId);
}

function normalizeQuestion(raw: Record<string, unknown>, rowNumber: number): Question {
  const sectionId = normalizeSectionId(String(raw.sectionId ?? raw.section ?? ""));
  const choicesRaw = (raw.choices ?? raw.answers ?? []) as unknown[];
  const choices = choicesRaw.map((item, index) => {
    const choice = item as Record<string, unknown>;
    return {
      id: String(choice.id ?? `c${index + 1}`),
      text: String(choice.text ?? ""),
      isCorrect: Boolean(choice.isCorrect ?? choice.is_correct),
      rationale: String(choice.rationale ?? "")
    };
  });
  const regulatoryFocusRaw = raw.regulatoryFocus ?? raw.regulatory_focus;
  const reviewStatus = String(raw.reviewStatus ?? raw.review_status ?? "");
  const extractionConfidence = String(raw.extractionConfidence ?? raw.extraction_confidence ?? "");
  const qualityStatus = String(raw.qualityStatus ?? raw.quality_status ?? "");
  const issueTypesRaw = raw.issueTypes ?? raw.issue_types;

  return applyQuestionQualityDefaults({
    id: String(raw.id ?? makeId(`import-row-${rowNumber}`)),
    sectionId,
    topicId: String(raw.topicId ?? raw.topic ?? ""),
    subtopicId: String(raw.subtopicId ?? raw.subtopic ?? ""),
    difficulty: String(raw.difficulty ?? "medium") as Question["difficulty"],
    questionType: String(raw.questionType ?? raw.question_type ?? "multiple_choice") as Question["questionType"],
    stem: String(raw.stem ?? raw.question ?? ""),
    choices,
    explanation: String(raw.explanation ?? ""),
    sourceType: "imported",
    active: raw.active === undefined ? true : Boolean(raw.active),
    regulatoryFocus: Array.isArray(regulatoryFocusRaw) ? regulatoryFocusRaw.map(String) : undefined,
    concept: raw.concept === undefined ? undefined : String(raw.concept),
    sourceNote: raw.sourceNote === undefined && raw.source_note === undefined ? undefined : String(raw.sourceNote ?? raw.source_note),
    reviewStatus: reviewStatus === "reviewed" || reviewStatus === "needs_review" ? reviewStatus : undefined,
    qualityStatus:
      qualityStatus === "verified" || qualityStatus === "needs_review" || qualityStatus === "rejected"
        ? (qualityStatus as QualityStatus)
        : "needs_review",
    qualityNotes:
      raw.qualityNotes === undefined && raw.quality_notes === undefined
        ? "User-imported question; requires manual content review before certification."
        : String(raw.qualityNotes ?? raw.quality_notes),
    verifiedAt: raw.verifiedAt === undefined && raw.verified_at === undefined ? undefined : String(raw.verifiedAt ?? raw.verified_at),
    verifiedBy: raw.verifiedBy === undefined && raw.verified_by === undefined ? undefined : String(raw.verifiedBy ?? raw.verified_by),
    issueTypes: Array.isArray(issueTypesRaw) ? issueTypesRaw.map(String) as IssueType[] : undefined,
    extractionConfidence:
      extractionConfidence === "high" || extractionConfidence === "medium" || extractionConfidence === "low"
        ? extractionConfidence
        : undefined,
    sourcePageRange:
      raw.sourcePageRange === undefined && raw.source_page_range === undefined
        ? undefined
        : String(raw.sourcePageRange ?? raw.source_page_range),
    sourceQuestionNumber:
      raw.sourceQuestionNumber === undefined && raw.source_question_number === undefined
        ? undefined
        : Number(raw.sourceQuestionNumber ?? raw.source_question_number),
    sourceCode: raw.sourceCode === undefined && raw.source_code === undefined ? undefined : String(raw.sourceCode ?? raw.source_code),
    shuffleDisabled: Boolean(raw.shuffleDisabled ?? raw.shuffle_disabled),
    createdAt: new Date().toISOString()
  });
}

export function parseJsonlQuestions(text: string): { questions: Question[]; report: ImportValidationReport } {
  const questions: Question[] = [];
  const issues: ValidationIssue[] = [];
  const rows = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  rows.forEach((line, index) => {
    try {
      const raw = JSON.parse(line) as Record<string, unknown>;
      const question = normalizeQuestion(raw, index + 1);
      const questionIssues = validateQuestion(question);
      issues.push(...questionIssues);
      if (!questionIssues.some((issue) => issue.severity === "error")) questions.push(question);
    } catch (error) {
      issues.push({
        severity: "error",
        field: "json",
        message: `Row ${index + 1} is not valid JSON: ${(error as Error).message}`
      });
    }
  });

  return {
    questions,
    report: {
      totalRows: rows.length,
      validRows: questions.length,
      importedRows: questions.length,
      issues
    }
  };
}

function parseCsvRows(text: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = "";
  let inQuotes = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];
    if (char === '"' && inQuotes && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === "," && !inQuotes) {
      row.push(cell);
      cell = "";
    } else if ((char === "\n" || char === "\r") && !inQuotes) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell);
      if (row.some((value) => value.trim())) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  row.push(cell);
  if (row.some((value) => value.trim())) rows.push(row);
  return rows;
}

export function parseCsvQuestions(text: string): { questions: Question[]; report: ImportValidationReport } {
  const rows = parseCsvRows(text);
  const [header = [], ...dataRows] = rows;
  const keys = header.map((cell) => cell.trim());
  const issues: ValidationIssue[] = [];
  const questions: Question[] = [];

  dataRows.forEach((row, rowIndex) => {
    const record = Object.fromEntries(keys.map((key, index) => [key, row[index] ?? ""]));
    const choices = [1, 2, 3, 4]
      .map((index) => ({
        id: `c${index}`,
        text: record[`choice${index}`],
        isCorrect: ["true", "1", "yes", "y"].includes(String(record[`choice${index}Correct`]).toLowerCase()),
        rationale: record[`choice${index}Rationale`]
      }))
      .filter((choice) => choice.text);

    const question = normalizeQuestion({ ...record, choices }, rowIndex + 1);
    const questionIssues = validateQuestion(question);
    issues.push(...questionIssues);
    if (!questionIssues.some((issue) => issue.severity === "error")) questions.push(question);
  });

  return {
    questions,
    report: {
      totalRows: dataRows.length,
      validRows: questions.length,
      importedRows: questions.length,
      issues
    }
  };
}

function csvEscape(value: unknown): string {
  const text = String(value ?? "");
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

export function questionsToJsonl(questions: Question[]): string {
  return questions.map((question) => JSON.stringify(question)).join("\n");
}

export function questionsToCsv(questions: Question[]): string {
  const headers = [
    "id",
    "sectionId",
    "topicId",
    "subtopicId",
    "difficulty",
    "questionType",
    "qualityStatus",
    "issueTypes",
    "stem",
    "explanation",
    "choice1",
    "choice1Correct",
    "choice1Rationale",
    "choice2",
    "choice2Correct",
    "choice2Rationale",
    "choice3",
    "choice3Correct",
    "choice3Rationale",
    "choice4",
    "choice4Correct",
    "choice4Rationale"
  ];
  const rows = questions.map((question) => {
    const choices = Array.from({ length: 4 }, (_, index) => question.choices[index]);
    return [
      question.id,
      question.sectionId,
      question.topicId,
      question.subtopicId,
      question.difficulty,
      question.questionType,
      question.qualityStatus ?? "",
      question.issueTypes?.join(";") ?? "",
      question.stem,
      question.explanation,
      ...choices.flatMap((choice) => [choice?.text ?? "", choice?.isCorrect ?? "", choice?.rationale ?? ""])
    ].map(csvEscape);
  });
  return [headers, ...rows].map((row) => row.join(",")).join("\n");
}

export function questionBankTemplateJsonl(): string {
  const section = getSection("market_knowledge");
  const topic = section.topics[3];
  const subtopic = topic.subtopics.find((item) => item.id === "basis-calculation") ?? topic.subtopics[0];
  return JSON.stringify({
    id: "user-basis-0001",
    sectionId: section.id,
    topicId: topic.id,
    subtopicId: subtopic.id,
    difficulty: "medium",
    questionType: "multiple_choice",
    stem: "Cash oats are 3.42 and nearby futures are 3.50. What is the basis?",
    choices: [
      { id: "a", text: "+0.08", isCorrect: false, rationale: "This reverses cash minus futures." },
      { id: "b", text: "-0.08", isCorrect: true, rationale: "Basis = 3.42 - 3.50 = -0.08." },
      { id: "c", text: "6.92", isCorrect: false, rationale: "Adding prices is not a basis calculation." },
      { id: "d", text: "-6.92", isCorrect: false, rationale: "This uses the sum, not the difference." }
    ],
    explanation: "Basis equals cash price minus futures price.",
    qualityStatus: "needs_review",
    qualityNotes: "Template import row; certify after review.",
    active: true
  });
}

export function resolveQuestionPath(question: Question): string {
  return `${getSection(question.sectionId).title} / ${getTopic(question.topicId)?.title ?? question.topicId} / ${question.subtopicId}`;
}
