import { describe, expect, it } from "vitest";
import type { Session } from "../types";
import { getMistakeQuestionIds, getSecondOrderMistakeQuestionIds } from "./analytics";

describe("mistake analytics", () => {
  const sessions: Session[] = [
    {
      id: "session-1",
      type: "practice",
      title: "Practice",
      createdAt: "2026-05-16T00:00:00.000Z",
      seed: "seed",
      status: "completed",
      feedbackMode: "immediate",
      questions: [],
      answers: [
        {
          sessionQuestionId: "sq-1",
          questionId: "q-arbitrage",
          selectedChoiceId: "a",
          isCorrect: false,
          answeredAt: "2026-05-16T00:01:00.000Z",
          elapsedSeconds: 12
        },
        {
          sessionQuestionId: "sq-2",
          questionId: "q-clearinghouse",
          selectedChoiceId: "b",
          isCorrect: true,
          answeredAt: "2026-05-16T00:02:00.000Z",
          elapsedSeconds: 10
        },
        {
          sessionQuestionId: "sq-3",
          questionId: "q-margin",
          selectedChoiceId: "c",
          isCorrect: false,
          answeredAt: "2026-05-16T00:03:00.000Z",
          elapsedSeconds: 14
        }
      ]
    }
  ];

  it("excludes manually removed questions from the mistake queue", () => {
    expect([...getMistakeQuestionIds(sessions)].sort()).toEqual(["q-arbitrage", "q-margin"]);
    expect([...getMistakeQuestionIds(sessions, ["q-arbitrage"])]).toEqual(["q-margin"]);
  });

  it("tracks questions missed again during mistake review", () => {
    const mistakeReviewSession: Session = {
      id: "session-2",
      type: "mistakes",
      title: "Mistake Review",
      createdAt: "2026-05-16T00:05:00.000Z",
      seed: "seed-mistakes",
      status: "completed",
      feedbackMode: "immediate",
      questions: [],
      answers: [
        {
          sessionQuestionId: "sq-4",
          questionId: "q-arbitrage",
          selectedChoiceId: "c",
          isCorrect: false,
          answeredAt: "2026-05-16T00:06:00.000Z",
          elapsedSeconds: 9
        },
        {
          sessionQuestionId: "sq-5",
          questionId: "q-margin",
          selectedChoiceId: "d",
          isCorrect: true,
          answeredAt: "2026-05-16T00:07:00.000Z",
          elapsedSeconds: 8
        }
      ]
    };

    expect([...getSecondOrderMistakeQuestionIds([...sessions, mistakeReviewSession])]).toEqual(["q-arbitrage"]);
    expect([...getSecondOrderMistakeQuestionIds([...sessions, mistakeReviewSession], ["q-arbitrage"])]).toEqual([]);
  });
});
