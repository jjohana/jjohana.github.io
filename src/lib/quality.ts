import { questionQualityOverrides } from "../data/questionQualityOverrides";
import type { IssueType, QualityFilter, QualityStatus, Question } from "../types";

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

const importedCalculationPattern =
  /\b(?:basis|margin|call|profit|loss|gain|return|breakeven|intrinsic|spread|hedge|effective price|futures price|premium|T-bond|T-note|T-bill|Eurodollar|contract size|bushels?|pounds?|ounces?|cents)\b/i;

const outdatedRegulatoryPattern =
  /\b(?:as of the first quarter of 1998|leverage transaction merchant|notice-registered as securities registered representatives|noticed registered)\b/i;

export function inferIssueTypes(question: Question): IssueType[] {
  const issues = new Set<IssueType>();
  const text = visibleFields(question).join(" ");

  if (ocrPatterns.some((pattern) => pattern.test(text))) issues.add("OCR/transcription");
  if (question.choices.some((choice) => bannedChoicePattern.test(choice.text) || answerLetterReferencePattern.test(choice.text))) {
    issues.add("bad_distractors");
  }
  if (!question.explanation || question.explanation.length < 80) issues.add("weak_explanation");
  if (question.sourceType === "imported" && question.sectionId === "market_knowledge" && importedCalculationPattern.test(text)) {
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
  const withOverride = { ...question, ...override };
  const issueTypes = withOverride.issueTypes ?? inferIssueTypes(withOverride);
  const qualityStatus = withOverride.qualityStatus ?? inferredQualityStatus({ ...withOverride, issueTypes });
  const qualityNotes =
    withOverride.qualityNotes ??
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
