import { describe, expect, it } from "vitest";
import { sampleQuestions } from "../data/questions";
import type { Session } from "../types";
import { scoreSession } from "./scoring";

describe("scoreSession", () => {
  it("requires both sections to pass", () => {
    const marketQuestion = sampleQuestions.find((question) => question.sectionId === "market_knowledge")!;
    const regQuestion = sampleQuestions.find((question) => question.sectionId === "us_regulations")!;
    const session: Session = {
      id: "s1",
      type: "mock",
      title: "Mock",
      createdAt: "2026-05-13T00:00:00.000Z",
      seed: "seed",
      status: "completed",
      feedbackMode: "delayed",
      questions: [
        { id: "sq1", questionId: marketQuestion.id, displayIndex: 0, choiceOrder: marketQuestion.choices.map((choice) => choice.id), correctDisplayIndex: 0 },
        { id: "sq2", questionId: regQuestion.id, displayIndex: 1, choiceOrder: regQuestion.choices.map((choice) => choice.id), correctDisplayIndex: 0 }
      ],
      answers: [
        { sessionQuestionId: "sq1", questionId: marketQuestion.id, selectedChoiceId: marketQuestion.choices.find((choice) => choice.isCorrect)!.id, isCorrect: true, answeredAt: "2026-05-13T00:00:00.000Z", elapsedSeconds: 1 },
        { sessionQuestionId: "sq2", questionId: regQuestion.id, selectedChoiceId: regQuestion.choices.find((choice) => !choice.isCorrect)!.id, isCorrect: false, answeredAt: "2026-05-13T00:00:00.000Z", elapsedSeconds: 2 }
      ]
    };

    const score = scoreSession(session, sampleQuestions);

    expect(score.marketKnowledge.passed).toBe(true);
    expect(score.usRegulations.passed).toBe(false);
    expect(score.passed).toBe(false);
  });
});
