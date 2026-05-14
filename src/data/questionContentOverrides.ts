import type { AnswerChoice, Question } from "../types";

type QuestionContentOverride = Partial<Omit<Question, "choices">> & {
  choices?: AnswerChoice[];
};

// Fresh reimport baseline: no imported QCM receives legacy text corrections.
// Imported questions must be corrected during the new LLM review pass.
export const questionContentOverrides: Record<string, QuestionContentOverride> = {};

export function applyQuestionContentOverrides(question: Question): Question {
  return { ...question, ...(questionContentOverrides[question.id] ?? {}) };
}
