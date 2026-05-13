import type { Question, SessionQuestion } from "../types";
import { createSeededRng, makeId } from "./prng";

const POSITION_LABELS = ["A", "B", "C", "D", "E", "F"];

export function seededShuffle<T>(items: T[], rng: () => number): T[] {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(rng() * (index + 1));
    [copy[index], copy[swapIndex]] = [copy[swapIndex], copy[index]];
  }
  return copy;
}

export function chooseBalancedCorrectPosition(numChoices: number, counts: number[], rng: () => number): number {
  const activeCounts = counts.slice(0, numChoices);
  const minCount = Math.min(...activeCounts);
  const candidates = activeCounts
    .map((count, index) => ({ count, index }))
    .filter((item) => item.count === minCount)
    .map((item) => item.index);
  return candidates[Math.floor(rng() * candidates.length)];
}

export function buildBalancedChoiceOrder(question: Question, targetCorrectPosition: number, rng: () => number): string[] {
  const correct = question.choices.find((choice) => choice.isCorrect);
  if (!correct) {
    throw new Error(`Question ${question.id} has no correct answer.`);
  }

  const incorrect = seededShuffle(
    question.choices.filter((choice) => !choice.isCorrect).map((choice) => choice.id),
    rng
  );

  const order = new Array(question.choices.length).fill("");
  order[targetCorrectPosition] = correct.id;

  let incorrectIndex = 0;
  for (let index = 0; index < order.length; index += 1) {
    if (!order[index]) {
      order[index] = incorrect[incorrectIndex];
      incorrectIndex += 1;
    }
  }

  return order;
}

export function buildSessionQuestions(questions: Question[], seed: string): SessionQuestion[] {
  const rng = createSeededRng(seed);
  const countsByChoiceCount: Record<number, number[]> = {};

  return questions.map((question, displayIndex) => {
    const numChoices = question.choices.length;
    countsByChoiceCount[numChoices] ??= Array.from({ length: numChoices }, () => 0);
    const counts = countsByChoiceCount[numChoices];
    const choiceOrder = question.shuffleDisabled
      ? question.choices.map((choice) => choice.id)
      : buildBalancedChoiceOrder(question, chooseBalancedCorrectPosition(numChoices, counts, rng), rng);
    const correctChoice = question.choices.find((choice) => choice.isCorrect);
    if (!correctChoice) {
      throw new Error(`Question ${question.id} has no correct answer.`);
    }
    const correctDisplayIndex = choiceOrder.indexOf(correctChoice.id);
    if (correctDisplayIndex < 0) {
      throw new Error(`Question ${question.id} has a correct answer missing from the display order.`);
    }
    counts[correctDisplayIndex] += 1;

    return {
      id: makeId("sq"),
      questionId: question.id,
      displayIndex,
      choiceOrder,
      correctDisplayIndex
    };
  });
}

export function auditCorrectPositionDistribution(sessionQuestions: SessionQuestion[]) {
  const counts: Record<string, number> = {};
  for (const sessionQuestion of sessionQuestions) {
    const label = POSITION_LABELS[sessionQuestion.correctDisplayIndex] ?? String(sessionQuestion.correctDisplayIndex + 1);
    counts[label] = (counts[label] ?? 0) + 1;
  }

  const total = sessionQuestions.length;
  const percentages = Object.fromEntries(
    Object.entries(counts).map(([label, count]) => [label, total === 0 ? 0 : (count / total) * 100])
  );
  const values = Object.values(percentages);
  const expected = total === 0 || values.length === 0 ? 0 : 100 / values.length;
  const maxDeviationPercentagePoints = values.reduce(
    (max, value) => Math.max(max, Math.abs(value - expected)),
    0
  );

  return {
    total,
    counts,
    percentages,
    maxDeviationPercentagePoints,
    passed: total < 20 || maxDeviationPercentagePoints <= 10
  };
}
