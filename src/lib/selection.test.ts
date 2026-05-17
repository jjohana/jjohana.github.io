import { describe, expect, it } from "vitest";
import { sampleQuestions } from "../data/questions";
import { filterQuestionPool, isS3ImportedQuestion, selectCoverageQuestions, selectMockQuestions, selectPracticeQuestions } from "./selection";

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

    expect(selected.length).toBe(465);
    expect(selected.every((question) => question.id.startsWith("s3-market-docx-"))).toBe(true);
  });

  it("filters directly to the S3-Regulatory PDF bank", () => {
    const selected = filterQuestionPool(sampleQuestions, {
      sectionId: "us_regulations",
      sourceBank: "s3-regulatory-pdf",
      difficulty: "mixed",
      qualityStatus: "usable"
    });

    expect(selected.length).toBe(250);
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

  it("varies mock selections by seed while drawing only from the eligible pool", () => {
    const filters = { difficulty: "mixed", sourceBank: "all", qualityStatus: "verified" } as const;
    const eligibleQuestionIds = new Set(filterQuestionPool(sampleQuestions, filters).map((question) => question.id));
    const firstMock = selectMockQuestions(sampleQuestions, "mock-run-a", 120, filters);
    const secondMock = selectMockQuestions(sampleQuestions, "mock-run-b", 120, filters);

    expect(firstMock).toHaveLength(120);
    expect(secondMock).toHaveLength(120);
    expect(firstMock.every((question) => eligibleQuestionIds.has(question.id))).toBe(true);
    expect(secondMock.every((question) => eligibleQuestionIds.has(question.id))).toBe(true);
    expect(firstMock.map((question) => question.id)).not.toEqual(secondMock.map((question) => question.id));
  });

  it("prioritizes unseen questions inside the selected coverage scope", () => {
    const filters = { sourceBank: "s3-imported", qualityStatus: "verified", difficulty: "mixed", questionCount: 8 } as const;
    const eligible = filterQuestionPool(sampleQuestions, filters);
    const alreadyAnswered = new Set(eligible.slice(0, 20).map((question) => question.id));
    const sessions = [
      {
        id: "coverage-history",
        type: "practice" as const,
        title: "Coverage history",
        createdAt: "2026-05-17T00:00:00.000Z",
        seed: "history",
        status: "completed" as const,
        feedbackMode: "immediate" as const,
        questions: [],
        answers: [...alreadyAnswered].map((questionId, index) => ({
          sessionQuestionId: `sq-${index}`,
          questionId,
          selectedChoiceId: "a",
          isCorrect: true,
          answeredAt: "2026-05-17T00:00:00.000Z",
          elapsedSeconds: 1
        }))
      }
    ];

    const selected = selectCoverageQuestions(sampleQuestions, filters, "coverage-seed", sessions);

    expect(selected).toHaveLength(8);
    expect(selected.every(isS3ImportedQuestion)).toBe(true);
    expect(selected.every((question) => !alreadyAnswered.has(question.id))).toBe(true);
  });

  it("fills coverage drills with seen questions only after unseen questions run out", () => {
    const filters = { sourceBank: "s3-regulatory-pdf", qualityStatus: "verified", difficulty: "mixed", questionCount: 5 } as const;
    const eligible = filterQuestionPool(sampleQuestions, filters);
    const unseen = eligible[0];
    const alreadyAnswered = new Set(eligible.slice(1).map((question) => question.id));
    const sessions = [
      {
        id: "coverage-history",
        type: "practice" as const,
        title: "Coverage history",
        createdAt: "2026-05-17T00:00:00.000Z",
        seed: "history",
        status: "completed" as const,
        feedbackMode: "immediate" as const,
        questions: [],
        answers: [...alreadyAnswered].map((questionId, index) => ({
          sessionQuestionId: `sq-${index}`,
          questionId,
          selectedChoiceId: "a",
          isCorrect: true,
          answeredAt: "2026-05-17T00:00:00.000Z",
          elapsedSeconds: 1
        }))
      }
    ];

    const selected = selectCoverageQuestions(sampleQuestions, filters, "coverage-seed", sessions);

    expect(selected).toHaveLength(5);
    expect(selected[0].id).toBe(unseen.id);
    expect(selected.slice(1).every((question) => alreadyAnswered.has(question.id))).toBe(true);
  });
});
