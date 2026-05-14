import { questionQualityOverrides } from "../data/questionQualityOverrides";
import { allSubtopics } from "../data/syllabus";
import type { IssueType, QualityFilter, QualityStatus, Question } from "../types";
import { cleanQuestionContent, UNSAFE_DISPLAY_PATTERNS } from "./contentSanitizer";

export const QUALITY_FILTER_OPTIONS: { value: QualityFilter; label: string }[] = [
  { value: "verified", label: "Verified only" },
  { value: "usable", label: "Verified + needs review" },
  { value: "needs_review", label: "Needs review only" },
  { value: "rejected", label: "Rejected only" },
  { value: "all", label: "All quality statuses" }
];

export const ISSUE_TYPE_OPTIONS: IssueType[] = [
  "OCR/transcription",
  "wrong_answer",
  "ambiguous",
  "outdated_rule",
  "weak_explanation",
  "bad_distractors",
  "duplicate",
  "wrong_taxonomy",
  "calculation_error"
];

export const ISSUE_TYPE_LABELS: Record<IssueType, string> = {
  "OCR/transcription": "OCR / transcription",
  wrong_answer: "Wrong answer",
  ambiguous: "Ambiguous",
  outdated_rule: "Outdated rule check",
  weak_explanation: "Weak explanation",
  bad_distractors: "Distractor issue",
  duplicate: "Duplicate",
  wrong_taxonomy: "Taxonomy check",
  calculation_error: "Calculation check needed"
};

const visibleFields = (question: Question) => [
  question.stem,
  question.explanation,
  question.concept ?? "",
  ...question.choices.flatMap((choice) => [choice.text, choice.rationale])
];

const ocrPatterns = [
  /[\x80-\xFF]/,
  /[\uFFFD\u20AC\u2022_{}]/,
  ...UNSAFE_DISPLAY_PATTERNS,
  /\b(?:DDecember|pvheat|round-tum|deposlt|Shoft|begmning|pald|defaultmg)\b/i,
  /\b(?:ofrisk|discretionaly|typewnters|decldes|typexvriter|attomey|alltimes)\b/i,
  /\b(?:Wisible|Wiable|Wien|Wiew|ftnction|commodlt\w*|integrlty|exchmge)\b/i,
  /\b(?:Naticnal|fegistered|noticed registered|Wertical|Weltical|exerctsed|ivhose)\b/i,
  /Allile|dlfference|strikez|future' s|custom er|inventoty|bearlsh|profit'loss/i,
  /\b(?:knoum|classlfy|cmdes|mstmment|mstmt|exerctsmg|vatymg|prevallmg)\b/i
];

const answerLetterReferencePattern =
  /\b(both|either|neither)\s+[ABCDE]\b|\b[ABCDE]\s*(and|or|&)\s*[ABCDE]\b|\banswers?\s+[ABCDE]\b/i;
const bannedChoicePattern = /\b(all of the above|none of the above)\b/i;
const rawTranscriptionPatterns = [
  ...UNSAFE_DISPLAY_PATTERNS,
  /_/,
  /\b(?:Truc|Falsc|Wolume|Wery|NTA|NTA\s+ml\s+es|ivhere|Janualy|Februaly|ugust|ovember)\b/i,
  /\b(?:requrrements|mcreases|ivhenever|ullile|ml\s+es|gm\s+requrrements)\b/i,
  /\b[Ss]\s+\d[\d,:.]*\b/,
  /\b\d{2,3}:000\b/,
  /\b(?:A,\s*B\s+and\s+C|A\s+and\s+B\s+only|C\s+only)\b/i
];

const importedCalculationPattern =
  /(?:\$|\b\d+(?:\.\d+)?\b|\b\d+\/\d+\b|\b\d+-\d+\b)/;

const importedCalculationQuestionPattern =
  /(?:what (?:is|was|will|would|price|amount|percentage|percent)|how (?:much|many|did)|calculate|maximum (?:profit|loss|gain)|minimum|breakeven|break-even|point value|tick value|margin call|called for additional margin|must .*remit|effective price|profit or loss|gain or loss|return on|intrinsic value)/i;

const importedCalculationConceptPattern =
  /\b(?:basis|margin|profit|loss|gain|return|breakeven|intrinsic|spread|hedge|effective price|cash price|futures price|premium|T-bond|T-note|T-bill|Eurodollar|contract size|point value|tick value|bushels?|pounds?|ounces?|cents?|calls?|puts?|commissions?)\b/i;

const outdatedRegulatoryPattern =
  /\b(?:as of the first quarter of 1998|noticed registered)\b/i;

function explicitQualityOverride(questionId: string): QualityStatus | undefined {
  const status = questionQualityOverrides[questionId]?.qualityStatus;
  return status === "verified" || status === "needs_review" || status === "rejected" ? status : undefined;
}

function hasEmbeddedLlmAudit(question: Question): boolean {
  if (question.sourceType !== "imported") return false;
  const sourceNote = question.sourceNote ?? "";
  const verifiedBy = question.verifiedBy ?? "";
  const hasLlmImportMarker = /LLM vision import/i.test(sourceNote);
  const hasVerifier = /OpenAI gpt-5\.5/i.test(verifiedBy);

  if (!hasLlmImportMarker) return false;
  if (question.qualityStatus === "verified") return hasVerifier && Boolean(question.verifiedAt);
  return true;
}

function structuralRejectIssues(question: Question): IssueType[] {
  const issues = new Set<IssueType>();
  const validSubtopic = allSubtopics.some(
    (subtopic) =>
      subtopic.sectionId === question.sectionId &&
      subtopic.topicId === question.topicId &&
      subtopic.id === question.subtopicId
  );

  if (!validSubtopic) issues.add("wrong_taxonomy");
  if (!Array.isArray(question.choices)) {
    issues.add("bad_distractors");
    return [...issues];
  }

  if (question.questionType === "true_false" && question.choices.length !== 2) issues.add("bad_distractors");
  if (question.questionType === "multiple_choice" && question.choices.length < 3) issues.add("bad_distractors");
  if (question.choices.filter((choice) => choice.isCorrect).length !== 1) issues.add("wrong_answer");
  if (question.choices.some((choice) => bannedChoicePattern.test(choice.text) || answerLetterReferencePattern.test(choice.text))) {
    issues.add("bad_distractors");
  }

  return [...issues];
}

export function inferIssueTypes(question: Question): IssueType[] {
  const issues = new Set<IssueType>();
  const cleaned = cleanQuestionContent(question);
  const text = visibleFields(cleaned).join(" ");
  const rawText = visibleFields(question).join(" ");

  if (ocrPatterns.some((pattern) => pattern.test(text)) || rawTranscriptionPatterns.some((pattern) => pattern.test(rawText))) {
    issues.add("OCR/transcription");
  }
  if (question.sourceType === "imported" && !question.sourceCode) {
    issues.add("OCR/transcription");
  }
  if (question.choices.some((choice) => bannedChoicePattern.test(choice.text) || answerLetterReferencePattern.test(choice.text))) {
    issues.add("bad_distractors");
  }
  if (!question.explanation || question.explanation.length < 50) issues.add("weak_explanation");
  if (
    question.sourceType === "imported" &&
    question.sectionId === "market_knowledge" &&
    importedCalculationPattern.test(text) &&
    importedCalculationQuestionPattern.test(question.stem) &&
    importedCalculationConceptPattern.test(text)
  ) {
    issues.add("calculation_error");
  }
  if (question.sourceType === "imported" && question.sectionId === "us_regulations" && outdatedRegulatoryPattern.test(text)) {
    issues.add("outdated_rule");
  }

  return [...issues];
}

export function inferredQualityStatus(question: Question): QualityStatus {
  if (question.qualityStatus) return question.qualityStatus;
  const issues = question.issueTypes ?? inferIssueTypes(question);
  if (issues.includes("duplicate")) return "rejected";
  if (issues.length > 0) return "needs_review";
  if (question.reviewStatus === "needs_review" || question.extractionConfidence === "low") return "needs_review";
  return "verified";
}

export function applyQuestionQualityDefaults(question: Question): Question {
  const override = questionQualityOverrides[question.id] ?? {};
  const explicitStatus = explicitQualityOverride(question.id);
  const rawWithOverride = { ...question, ...override };
  const withOverride = cleanQuestionContent(rawWithOverride);
  const inferredIssues = inferIssueTypes(withOverride);
  const rawIssues = inferIssueTypes(rawWithOverride);
  const embeddedLlmAudit = hasEmbeddedLlmAudit(withOverride);
  const uncertifiedImportedQuestion = withOverride.sourceType === "imported" && !explicitStatus && !embeddedLlmAudit;
  const structuralIssues = structuralRejectIssues(withOverride);
  const rawBlockingIssues = rawIssues.filter((issue) => issue === "OCR/transcription" || issue === "bad_distractors");
  const blockingIssues = [
    ...inferredIssues.filter((issue) => issue === "OCR/transcription" || issue === "bad_distractors"),
    ...rawBlockingIssues,
    ...(uncertifiedImportedQuestion ? (["OCR/transcription"] as IssueType[]) : [])
  ];
  const issueTypes = [...new Set([...(withOverride.issueTypes ?? inferredIssues), ...blockingIssues, ...rawBlockingIssues, ...structuralIssues])];
  const requestedQualityStatus =
    structuralIssues.length > 0
      ? "rejected"
      : explicitStatus ?? (uncertifiedImportedQuestion ? "needs_review" : withOverride.qualityStatus ?? inferredQualityStatus({ ...withOverride, issueTypes }));
  const qualityStatus: QualityStatus =
    requestedQualityStatus === "verified" && blockingIssues.length > 0 ? "needs_review" : requestedQualityStatus;
  const qualityNotes =
    uncertifiedImportedQuestion
      ? "Imported OCR/transcribed question is not certified. It is excluded from verified-only practice/mock exams until explicitly reviewed and promoted."
      :
    (requestedQualityStatus === "verified" && blockingIssues.length > 0
      ? "Visible OCR or shuffle-safety artifacts were detected after normalization; excluded from verified-only practice until reviewed."
      : withOverride.qualityNotes) ??
    (qualityStatus === "verified"
      ? "Passed structural, taxonomy, OCR, distractor, and automated content-risk checks."
      : qualityStatus === "rejected"
        ? "Rejected by quality audit and excluded from practice/mock selection."
        : "Needs manual content review before certification; available only when needs-review questions are included.");

  return {
    ...withOverride,
    issueTypes,
    qualityStatus,
    qualityNotes,
    verifiedAt: qualityStatus === "verified" ? withOverride.verifiedAt ?? "2026-05-13T00:00:00.000Z" : withOverride.verifiedAt,
    verifiedBy: qualityStatus === "verified" ? withOverride.verifiedBy ?? "Codex automated + targeted audit" : withOverride.verifiedBy
  };
}

export function questionMatchesQualityFilter(question: Question, filter: QualityFilter | undefined): boolean {
  const status = inferredQualityStatus(question);
  const normalized = filter ?? "verified";
  if (normalized === "all") return true;
  if (normalized === "usable") return status === "verified" || status === "needs_review";
  return status === normalized;
}

export function qualitySummary(questions: Question[]) {
  return questions.reduce(
    (summary, question) => {
      if (!question.active) return summary;
      const status = inferredQualityStatus(question);
      summary[status] += 1;
      return summary;
    },
    { verified: 0, needs_review: 0, rejected: 0 } satisfies Record<QualityStatus, number>
  );
}
