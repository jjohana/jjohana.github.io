import { allTopics } from "../data/syllabus";
import type { DifficultyFilter, Question, Session, SessionFilters, SourceBankFilter } from "../types";
import { createSeededRng } from "./prng";
import { inferredQualityStatus, questionMatchesQualityFilter } from "./quality";
import { seededShuffle } from "./shuffle";

export const SOURCE_BANK_OPTIONS: { value: SourceBankFilter; label: string }[] = [
  { value: "s3-imported", label: "S3 imported sets" },
  { value: "s3-market-docx", label: "S3-Market DOCX" },
  { value: "s3-regulatory-pdf", label: "S3-Regulatory PDF" },
  { value: "authored", label: "Authored / rewritten / sample" },
  { value: "all", label: "All question banks" }
];

export function questionSourceBank(question: Question): SourceBankFilter {
  if (question.id.startsWith("s3-market-docx-")) return "s3-market-docx";
  if (question.id.startsWith("s3-regulatory-pdf-")) return "s3-regulatory-pdf";
  return "authored";
}

export function isS3ImportedQuestion(question: Question): boolean {
  const bank = questionSourceBank(question);
  return bank === "s3-market-docx" || bank === "s3-regulatory-pdf";
}

export function questionSourceBankLabel(question: Question): string {
  const bank = questionSourceBank(question);
  return SOURCE_BANK_OPTIONS.find((option) => option.value === bank)?.label ?? question.sourceType;
}

function matchesSourceBank(question: Question, sourceBank: SourceBankFilter | undefined): boolean {
  if (!sourceBank || sourceBank === "all") return true;
  if (sourceBank === "s3-imported") return isS3ImportedQuestion(question);
  return questionSourceBank(question) === sourceBank;
}

export function questionSourcePriority(question: Question): number {
  if (isS3ImportedQuestion(question)) return 3;
  if (question.sourceType === "imported") return 2;
  return 1;
}

export function filterQuestionPool(questions: Question[], filters: SessionFilters): Question[] {
  return questions.filter((question) => {
    if (!question.active) return false;
    if (!questionMatchesQualityFilter(question, filters.qualityStatus)) return false;
    if (!matchesSourceBank(question, filters.sourceBank)) return false;
    if (filters.sectionId && question.sectionId !== filters.sectionId) return false;
    if (filters.topicId && question.topicId !== filters.topicId) return false;
    if (filters.subtopicId && question.subtopicId !== filters.subtopicId) return false;
    if (filters.difficulty && filters.difficulty !== "mixed" && question.difficulty !== filters.difficulty) return false;
    if (
      filters.regulatoryFocus &&
      filters.regulatoryFocus !== "all" &&
      question.sectionId === "us_regulations" &&
      !question.regulatoryFocus?.includes(filters.regulatoryFocus)
    ) {
      return false;
    }
    return true;
  });
}

function questionWeaknessWeight(question: Question, sessions: Session[]): number {
  let attempts = 0;
  let misses = 0;
  let lastAttempt = 0;
  for (const session of sessions) {
    const answerBySessionQuestionId = new Map(session.answers.map((answer) => [answer.sessionQuestionId, answer]));
    for (const sessionQuestion of session.questions) {
      if (sessionQuestion.questionId !== question.id) continue;
      const answer = answerBySessionQuestionId.get(sessionQuestion.id);
      if (!answer) continue;
      attempts += 1;
      if (!answer.isCorrect) misses += 1;
      lastAttempt = Math.max(lastAttempt, new Date(answer.answeredAt).getTime());
    }
  }
  const accuracyPenalty = attempts === 0 ? 0.2 : misses / attempts;
  const daysSince = lastAttempt === 0 ? 14 : Math.min(30, (Date.now() - lastAttempt) / 86_400_000);
  const recencyDecay = daysSince / 30;
  const difficultyWeight = question.difficulty === "hard" ? 1 : question.difficulty === "medium" ? 0.6 : 0.3;
  return 1 + accuracyPenalty * 0.6 + recencyDecay * 0.2 + difficultyWeight * 0.2;
}

export function selectPracticeQuestions(
  questions: Question[],
  filters: SessionFilters,
  seed: string,
  sessions: Session[] = []
): Question[] {
  const rng = createSeededRng(seed);
  const pool = filterQuestionPool(questions, filters).filter((question) => inferredQualityStatus(question) !== "rejected");
  const previousSession = sessions.length > 0 ? sessions[sessions.length - 1] : undefined;
  const previousQuestionIds = new Set(previousSession?.questions.map((question) => question.questionId) ?? []);
  const sorted = seededShuffle(pool, rng).sort((a, b) => {
    const repeatPenaltyA = previousQuestionIds.has(a.id) ? -0.5 : 0;
    const repeatPenaltyB = previousQuestionIds.has(b.id) ? -0.5 : 0;
    const weakA = filters.prioritizeWeak ? questionWeaknessWeight(a, sessions) : 1;
    const weakB = filters.prioritizeWeak ? questionWeaknessWeight(b, sessions) : 1;
    const sourceA = questionSourcePriority(a);
    const sourceB = questionSourcePriority(b);
    return sourceB + weakB + repeatPenaltyB - (sourceA + weakA + repeatPenaltyA);
  });
  return sorted.slice(0, filters.questionCount ?? 10);
}

export function selectMockQuestions(questions: Question[], seed: string, desiredCount = 120, filters: SessionFilters = {}): Question[] {
  const rng = createSeededRng(seed);
  const active = filterQuestionPool(questions, filters).filter((question) => inferredQualityStatus(question) !== "rejected");
  const selected: Question[] = [];

  for (const topic of allTopics) {
    const topicPool = active.filter((question) => question.topicId === topic.id);
    if (topicPool.length === 0) continue;

    const primary = topicPool.filter(isS3ImportedQuestion);
    const fallback = topicPool.filter((question) => !isS3ImportedQuestion(question));
    const shuffledPrimary = seededShuffle(primary, rng);
    const shuffledFallback = seededShuffle(fallback, rng);
    const shuffled = [...shuffledPrimary, ...shuffledFallback];

    for (let index = 0; index < topic.approxMockQuestions; index += 1) {
      selected.push(shuffled[index % shuffled.length]);
    }
  }

  if (selected.length < desiredCount && active.length > 0) {
    const fallback = seededShuffle(active, rng);
    let index = 0;
    while (selected.length < desiredCount) {
      selected.push(fallback[index % fallback.length]);
      index += 1;
    }
  }

  return seededShuffle(selected, rng).slice(0, desiredCount);
}

export function normalizeDifficultyFilter(value: string): DifficultyFilter {
  return value === "easy" || value === "medium" || value === "hard" ? value : "mixed";
}
