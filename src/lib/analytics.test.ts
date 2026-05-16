import { describe, expect, it } from "vitest";
import type { Session } from "../types";
import { getMistakeQuestionIds } from "./analytics";

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
});
