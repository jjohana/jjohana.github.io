export const SECTION_IDS = ["market_knowledge", "us_regulations"] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export const DIFFICULTIES = ["easy", "medium", "hard"] as const;
export type Difficulty = (typeof DIFFICULTIES)[number];
export type DifficultyFilter = Difficulty | "mixed";

export type QuestionType = "multiple_choice" | "true_false";
export type SourceType = "sample" | "rewritten" | "imported" | "user-authored";
export type SourceBankFilter = "all" | "s3-imported" | "s3-market-docx" | "s3-regulatory-pdf" | "authored";
export type QualityStatus = "verified" | "needs_review" | "rejected";
export type QualityFilter = "verified" | "usable" | "needs_review" | "rejected" | "all";
export type IssueType =
  | "OCR/transcription"
  | "wrong_answer"
  | "ambiguous"
  | "outdated_rule"
  | "weak_explanation"
  | "bad_distractors"
  | "duplicate"
  | "wrong_taxonomy"
  | "calculation_error";
export type FeedbackMode = "immediate" | "delayed";
export type SessionType = "practice" | "mock" | "mistakes";
export type SessionStatus = "in_progress" | "completed";

export interface Subtopic {
  id: string;
  title: string;
}

export interface Topic {
  id: string;
  sectionId: SectionId;
  title: string;
  approxMockQuestions: number;
  subtopics: Subtopic[];
}

export interface Section {
  id: SectionId;
  title: string;
  shortTitle: string;
  topics: Topic[];
}

export interface AnswerChoice {
  id: string;
  text: string;
  isCorrect: boolean;
  rationale: string;
}

export interface Question {
  id: string;
  sectionId: SectionId;
  topicId: string;
  subtopicId: string;
  difficulty: Difficulty;
  questionType: QuestionType;
  stem: string;
  choices: AnswerChoice[];
  explanation: string;
  sourceType: SourceType;
  active: boolean;
  regulatoryFocus?: string[];
  concept?: string;
  sourceNote?: string;
  reviewStatus?: "reviewed" | "needs_review";
  qualityStatus?: QualityStatus;
  qualityNotes?: string;
  verifiedAt?: string;
  verifiedBy?: string;
  issueTypes?: IssueType[];
  extractionConfidence?: "high" | "medium" | "low";
  sourcePageRange?: string;
  sourceQuestionNumber?: number;
  sourceCode?: string;
  shuffleDisabled?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface SessionQuestion {
  id: string;
  questionId: string;
  displayIndex: number;
  choiceOrder: string[];
  correctDisplayIndex: number;
  isExperimental?: boolean;
  flagged?: boolean;
}

export interface UserAnswer {
  sessionQuestionId: string;
  questionId: string;
  selectedChoiceId?: string;
  isCorrect: boolean;
  answeredAt: string;
  elapsedSeconds: number;
}

export interface SessionFilters {
  sectionId?: SectionId;
  topicId?: string;
  subtopicId?: string;
  difficulty?: DifficultyFilter;
  questionCount?: number;
  prioritizeWeak?: boolean;
  regulatoryFocus?: string;
  sourceBank?: SourceBankFilter;
  qualityStatus?: QualityFilter;
}

export interface Session {
  id: string;
  type: SessionType;
  title: string;
  createdAt: string;
  completedAt?: string;
  seed: string;
  status: SessionStatus;
  feedbackMode: FeedbackMode;
  durationSeconds?: number;
  remainingSeconds?: number;
  filters?: SessionFilters;
  questions: SessionQuestion[];
  answers: UserAnswer[];
}

export interface UserSettings {
  shuffleSeed: string;
  feedbackMode: FeedbackMode;
  defaultDrillSize: number;
  enableExperimentalQuestions: boolean;
  timerEnabled: boolean;
}

export interface AppState {
  questions: Question[];
  sessions: Session[];
  settings: UserSettings;
  activeSessionId?: string;
}

export interface ValidationIssue {
  severity: "error" | "warning";
  questionId?: string;
  field: string;
  message: string;
}

export interface ImportValidationReport {
  totalRows: number;
  validRows: number;
  importedRows: number;
  issues: ValidationIssue[];
}

export interface CoverageNode {
  sectionId: SectionId;
  topicId?: string;
  subtopicId?: string;
  title: string;
  total: number;
  sample: number;
  rewritten: number;
  imported: number;
  userAuthored: number;
  verified: number;
  needsReview: number;
  rejected: number;
  easy: number;
  medium: number;
  hard: number;
  answered: number;
  correct: number;
  accuracy: number | null;
}

export interface QuestionBankCoverageReport {
  sections: CoverageNode[];
  topics: CoverageNode[];
  subtopics: CoverageNode[];
  gaps: CoverageNode[];
}

export interface ScoreBreakdown {
  total: number;
  correct: number;
  percentage: number;
  passed: boolean;
}

export interface SessionScore {
  total: ScoreBreakdown;
  marketKnowledge: ScoreBreakdown;
  usRegulations: ScoreBreakdown;
  passed: boolean;
}
