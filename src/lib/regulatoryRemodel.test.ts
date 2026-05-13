import { describe, expect, it } from "vitest";
import { regulatoryRemodelQuestions } from "../data/regulatoryQuestions";
import { filterQuestionPool } from "./selection";
import { validateQuestion } from "./validation";

describe("regulatory remodel bank", () => {
  it("contains validated rewritten regulatory questions", () => {
    expect(regulatoryRemodelQuestions.length).toBeGreaterThanOrEqual(35);
    expect(regulatoryRemodelQuestions.every((question) => question.sourceType === "rewritten")).toBe(true);

    const errors = regulatoryRemodelQuestions
      .flatMap(validateQuestion)
      .filter((issue) => issue.severity === "error");

    expect(errors).toEqual([]);
  });

  it("filters dedicated regulatory drills by focus tag", () => {
    const registration = filterQuestionPool(regulatoryRemodelQuestions, {
      sectionId: "us_regulations",
      difficulty: "mixed",
      regulatoryFocus: "registration"
    });

    expect(registration.length).toBeGreaterThan(4);
    expect(registration.every((question) => question.regulatoryFocus?.includes("registration"))).toBe(true);
  });

  it("does not publish answer-letter-dependent rewritten choices", () => {
    const forbidden = /\b(all of the above|none of the above|both [ABCD]|[ABCD] and [ABCD])\b/i;
    const offending = regulatoryRemodelQuestions.flatMap((question) =>
      question.choices
        .filter((choice) => forbidden.test(choice.text))
        .map((choice) => `${question.id}: ${choice.text}`)
    );

    expect(offending).toEqual([]);
  });
});
