import { allTopics } from "../data/syllabus";
import type { DifficultyFilter, Question, Session, SessionFilters } from "../types";
import { createSeededRng } from "./prng";
import { seededShuffle } from "./shuffle";

export function filterQuestionPool(questions: Question[], filters: SessionFilters): Question[] {
  return questions.filter((question) => {
    if (!question.active) return false;
    if (filters.sectionId && question.sectionId !== filters.sectionId) return false;
    if (filters.topicId && question.topicId !== filters.topicId) return false;
    if (filters.subtopicId && question.subtopicId !== filters.subtopicId) return false;
    if (filters.difficulty && filters.difficulty !== "mixed" && question.difficulty !== filters.difficulty) return false;
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
  const pool = filterQuestionPool(questions, filters);
  const previousSession = sessions.length > 0 ? sessions[sessions.length - 1] : undefined;
  const previousQuestionIds = new Set(previousSession?.questions.map((question) => question.questionId) ?? []);
  const sorted = seededShuffle(pool, rng).sort((a, b) => {
    const repeatPenaltyA = previousQuestionIds.has(a.id) ? -0.5 : 0;
    const repeatPenaltyB = previousQuestionIds.has(b.id) ? -0.5 : 0;
    const weakA = filters.prioritizeWeak ? questionWeaknessWeight(a, sessions) : 1;
    const weakB = filters.prioritizeWeak ? questionWeaknessWeight(b, sessions) : 1;
    return weakB + repeatPenaltyB - (weakA + repeatPenaltyA);
  });
  return sorted.slice(0, filters.questionCount ?? 10);
}

export function selectMockQuestions(questions: Question[], seed: string, desiredCount = 120): Question[] {
  const rng = createSeededRng(seed);
  const active = questions.filter((question) => question.active);
  const selected: Question[] = [];

  for (const topic of allTopics) {
    const topicPool = active.filter((question) => question.topicId === topic.id);
    if (topicPool.length === 0) continue;
    const shuffled = seededShuffle(topicPool, rng);
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
