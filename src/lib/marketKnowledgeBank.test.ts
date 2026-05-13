import { describe, expect, it } from "vitest";
import { syllabus } from "../data/syllabus";
import { sampleQuestions } from "../data/questions";
import { validateQuestion } from "./validation";

describe("market knowledge question bank", () => {
  const marketQuestions = sampleQuestions.filter((question) => question.sectionId === "market_knowledge" && question.active);

  it("contains exactly 205 active Market Knowledge QCMs", () => {
    expect(marketQuestions).toHaveLength(205);
  });

  it("covers every Market Knowledge topic", () => {
    const expectedTopicIds = syllabus.find((section) => section.id === "market_knowledge")?.topics.map((topic) => topic.id) ?? [];
    const coveredTopicIds = new Set(marketQuestions.map((question) => question.topicId));

    expectedTopicIds.forEach((topicId) => expect(coveredTopicIds.has(topicId)).toBe(true));
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
