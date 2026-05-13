import { describe, expect, it } from "vitest";
import { sampleQuestions } from "../data/questions";
import { getSubtopic, getTopic } from "../data/syllabus";
import { buildCourse, flattenCourseSubchapters, searchCourse } from "./course";
import { inferredQualityStatus } from "./quality";

describe("course content", () => {
  const course = buildCourse(sampleQuestions);
  const subchapters = flattenCourseSubchapters(course);
  const questionById = new Map(sampleQuestions.map((question) => [question.id, question]));

  it("maps every course subchapter to a valid taxonomy node", () => {
    expect(course.length).toBeGreaterThan(0);
    expect(subchapters.length).toBeGreaterThan(0);

    for (const subchapter of subchapters) {
      expect(getTopic(subchapter.topicId)?.sectionId).toBe(subchapter.sectionId);
      expect(getSubtopic(subchapter.topicId, subchapter.subtopicId)?.id).toBe(subchapter.subtopicId);
      expect(subchapter.overview.length).toBeGreaterThan(40);
      expect(subchapter.keyPoints.length).toBeGreaterThan(0);
      expect(subchapter.definitions.length).toBeGreaterThan(0);
      expect(subchapter.examples.length).toBeGreaterThan(0);
      expect(subchapter.traps.length).toBeGreaterThan(0);
      expect(subchapter.examTakeaways.length).toBeGreaterThan(0);
    }
  });

  it("links only existing verified questions", () => {
    const linkedIds = subchapters.flatMap((subchapter) => subchapter.linkedQuestions.map((reference) => reference.questionId));
    expect(linkedIds.length).toBeGreaterThan(800);

    for (const id of linkedIds) {
      const question = questionById.get(id);
      expect(question, id).toBeDefined();
      expect(question?.active, id).toBe(true);
      expect(inferredQualityStatus(question!), id).toBe("verified");
    }
  });

  it("never links rejected questions", () => {
    const linkedIds = new Set(subchapters.flatMap((subchapter) => subchapter.linkedQuestions.map((reference) => reference.questionId)));
    const rejectedIds = sampleQuestions.filter((question) => inferredQualityStatus(question) === "rejected").map((question) => question.id);

    expect(rejectedIds.length).toBeGreaterThan(0);
    for (const id of rejectedIds) {
      expect(linkedIds.has(id), id).toBe(false);
    }
  });

  it("supports course search over key study concepts", () => {
    expect(searchCourse(course, "basis").some((subchapter) => subchapter.subtopicId === "basis-calculation")).toBe(true);
    expect(searchCourse(course, "promotional material").some((subchapter) => subchapter.subtopicId === "promotional-material")).toBe(true);
    expect(searchCourse(course, "breakeven").some((subchapter) => subchapter.topicId === "options-futures")).toBe(true);
  });
});
