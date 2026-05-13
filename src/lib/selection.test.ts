import { describe, expect, it } from "vitest";
import { sampleQuestions } from "../data/questions";
import { filterQuestionPool, selectMockQuestions, selectPracticeQuestions } from "./selection";

describe("question selection", () => {
  it("filters by section, topic, and subtopic", () => {
    const selected = filterQuestionPool(sampleQuestions, {
      sectionId: "market_knowledge",
      topicId: "hedging-basis",
      subtopicId: "basis-calculation",
      difficulty: "mixed"
    });

    expect(selected.length).toBeGreaterThan(0);
    expect(selected.every((question) => question.topicId === "hedging-basis")).toBe(true);
    expect(selected.every((question) => question.subtopicId === "basis-calculation")).toBe(true);
  });

  it("creates a 120-question mock session selection even before a large import", () => {
    const selected = selectMockQuestions(sampleQuestions, "mock", 120);
    expect(selected).toHaveLength(120);
  });

  it("limits practice sessions to the requested count", () => {
    const selected = selectPracticeQuestions(
      sampleQuestions,
      { sectionId: "market_knowledge", difficulty: "mixed", questionCount: 5 },
      "practice"
    );

    expect(selected).toHaveLength(5);
  });
});
