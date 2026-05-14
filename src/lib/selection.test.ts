import { describe, expect, it } from "vitest";
import { sampleQuestions } from "../data/questions";
import { filterQuestionPool, isS3ImportedQuestion, selectMockQuestions, selectPracticeQuestions } from "./selection";

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

  it("filters directly to the S3-Market DOCX bank", () => {
    const selected = filterQuestionPool(sampleQuestions, {
      sectionId: "market_knowledge",
      sourceBank: "s3-market-docx",
      difficulty: "mixed",
      qualityStatus: "all"
    });

    expect(selected.length).toBe(469);
    expect(selected.every((question) => question.id.startsWith("s3-market-docx-"))).toBe(true);
  });

  it("filters directly to the S3-Regulatory PDF bank", () => {
    const selected = filterQuestionPool(sampleQuestions, {
      sectionId: "us_regulations",
      sourceBank: "s3-regulatory-pdf",
      difficulty: "mixed",
      qualityStatus: "usable"
    });

    expect(selected.length).toBe(220);
    expect(selected.every((question) => question.id.startsWith("s3-regulatory-pdf-"))).toBe(true);
  });

  it("prioritizes S3 imported questions for practice and mock selections", () => {
    const practice = selectPracticeQuestions(
      sampleQuestions,
      { sectionId: "market_knowledge", topicId: "hedging-basis", difficulty: "mixed", questionCount: 10, qualityStatus: "usable" },
      "practice"
    );
    const mock = selectMockQuestions(sampleQuestions, "mock", 120, { sourceBank: "s3-imported", qualityStatus: "usable" });

    expect(practice.every(isS3ImportedQuestion)).toBe(true);
    expect(mock.every(isS3ImportedQuestion)).toBe(true);
  });

  it("can generate a mock from authored and rewritten questions only", () => {
    const mock = selectMockQuestions(sampleQuestions, "mock", 120, { sourceBank: "authored", qualityStatus: "verified" });

    expect(mock).toHaveLength(120);
    expect(mock.every((question) => !isS3ImportedQuestion(question))).toBe(true);
  });

  it("excludes rejected questions from default practice and mock selection", () => {
    const rejected = {
      ...sampleQuestions[0],
      id: "rejected-selection-test",
      qualityStatus: "rejected" as const,
      issueTypes: ["duplicate" as const]
    };
    const pool = [rejected, ...sampleQuestions];
    const practice = selectPracticeQuestions(pool, { difficulty: "mixed", questionCount: 20 }, "practice");
    const mock = selectMockQuestions(pool, "mock", 120);
    const rejectedPractice = selectPracticeQuestions(pool, { difficulty: "mixed", questionCount: 20, qualityStatus: "rejected" }, "practice");
    const rejectedMock = selectMockQuestions(pool, "mock", 120, { qualityStatus: "rejected" });

    expect(practice.some((question) => question.id === rejected.id)).toBe(false);
    expect(mock.some((question) => question.id === rejected.id)).toBe(false);
    expect(rejectedPractice).toHaveLength(0);
    expect(rejectedMock).toHaveLength(0);
  });
});
