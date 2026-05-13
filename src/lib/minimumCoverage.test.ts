import { describe, expect, it } from "vitest";
import { minimumCoverageQuestions } from "../data/minimumCoverageQuestions";
import { sampleQuestions } from "../data/questions";
import { syllabus } from "../data/syllabus";
import { inferredQualityStatus } from "./quality";
import { validateQuestion } from "./validation";

describe("minimum subtopic coverage", () => {
  it("adds the expected minimum-coverage question set", () => {
    expect(minimumCoverageQuestions).toHaveLength(108);
    const issues = minimumCoverageQuestions.flatMap(validateQuestion);
    expect(issues.filter((issue) => issue.severity === "error")).toEqual([]);
    expect(minimumCoverageQuestions.every((question) => question.qualityStatus === "verified")).toBe(true);
  });

  it("has at least three active verified QCMs for every subtopic", () => {
    const activeVerified = sampleQuestions.filter((question) => question.active && inferredQualityStatus(question) === "verified");
    const underCovered = syllabus.flatMap((section) =>
      section.topics.flatMap((topic) =>
        topic.subtopics
          .map((subtopic) => ({
            id: `${section.id}/${topic.id}/${subtopic.id}`,
            count: activeVerified.filter(
              (question) =>
                question.sectionId === section.id &&
                question.topicId === topic.id &&
                question.subtopicId === subtopic.id
            ).length
          }))
          .filter((row) => row.count < 3)
      )
    );

    expect(underCovered).toEqual([]);
  });
});
