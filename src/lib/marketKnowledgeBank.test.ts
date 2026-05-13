import { describe, expect, it } from "vitest";
import { syllabus } from "../data/syllabus";
import { sampleQuestions } from "../data/questions";
import { validateQuestion } from "./validation";

describe("market knowledge question bank", () => {
  const marketQuestions = sampleQuestions.filter((question) => question.sectionId === "market_knowledge" && question.active);

  it("contains at least 673 active Market Knowledge QCMs", () => {
    expect(marketQuestions.length).toBeGreaterThanOrEqual(673);
  });

  it("imports the identifiable S3-Market.docx QCMs", () => {
    const docxQuestions = marketQuestions.filter((question) => question.id.startsWith("s3-market-docx-"));
    const sourceNumbers = new Set(docxQuestions.map((question) => question.sourceQuestionNumber));

    expect(docxQuestions).toHaveLength(444);
    expect(sourceNumbers.size).toBe(444);
    expect(sourceNumbers.has(71)).toBe(false);
    expect(sourceNumbers.has(245)).toBe(false);
    expect(sourceNumbers.has(306)).toBe(false);
  });

  it("covers every Market Knowledge topic", () => {
    const expectedTopicIds = syllabus.find((section) => section.id === "market_knowledge")?.topics.map((topic) => topic.id) ?? [];
    const coveredTopicIds = new Set(marketQuestions.map((question) => question.topicId));

    expectedTopicIds.forEach((topicId) => expect(coveredTopicIds.has(topicId)).toBe(true));
  });

  it("has at least 30 active QCMs for every Market Knowledge topic", () => {
    const expectedTopicIds = syllabus.find((section) => section.id === "market_knowledge")?.topics.map((topic) => topic.id) ?? [];

    expectedTopicIds.forEach((topicId) => {
      expect(marketQuestions.filter((question) => question.topicId === topicId).length).toBeGreaterThanOrEqual(30);
    });
  });

  it("covers every Market Knowledge subtopic", () => {
    const expectedSubtopicKeys =
      syllabus
        .find((section) => section.id === "market_knowledge")
        ?.topics.flatMap((topic) => topic.subtopics.map((subtopic) => `${topic.id}/${subtopic.id}`)) ?? [];
    const coveredSubtopicKeys = new Set(marketQuestions.map((question) => `${question.topicId}/${question.subtopicId}`));

    expectedSubtopicKeys.forEach((subtopicKey) => expect(coveredSubtopicKeys.has(subtopicKey)).toBe(true));
  });

  it("passes question validation", () => {
    const errors = marketQuestions.flatMap(validateQuestion).filter((issue) => issue.severity === "error");

    expect(errors).toEqual([]);
  });
});
