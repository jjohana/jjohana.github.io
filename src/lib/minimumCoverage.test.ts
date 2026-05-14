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

  it("keeps certified coverage gaps explicit after uncertified imports are quarantined", () => {
    const activeVerified = sampleQuestions.filter((question) => question.active && inferredQualityStatus(question) === "verified");
    const coverageRows = syllabus.flatMap((section) =>
      section.topics.flatMap((topic) =>
        topic.subtopics.map((subtopic) => ({
          id: `${section.id}/${topic.id}/${subtopic.id}`,
          count: activeVerified.filter(
            (question) =>
              question.sectionId === section.id &&
              question.topicId === topic.id &&
              question.subtopicId === subtopic.id
          ).length
        }))
      )
    );
    const certifiedGaps = coverageRows.filter((row) => row.count < 3);

    expect(activeVerified.length).toBeGreaterThan(350);
    expect(certifiedGaps.length).toBeGreaterThan(0);
  });
});
