export const SECTION_IDS = ["market_knowledge", "us_regulations"] as const;
export type SectionId = (typeof SECTION_IDS)[number];

export const DIFFICULTIES = ["easy", "medium", "hard"] as const;
export type Difficulty = (typeof DIFFICULTIES)[number];
export type DifficultyFilter = Difficulty | "mixed";

export type QuestionType = "multiple_choice" | "true_false";
export type SourceType = "sample" | "imported" | "user-authored";
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
  imported: number;
  userAuthored: number;
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
