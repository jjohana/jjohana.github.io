import { describe, expect, it } from "vitest";
import { sampleQuestions } from "../data/questions";
import { validateQuestion } from "./validation";

describe("validateQuestion", () => {
  it("accepts the seeded original sample questions", () => {
    const issues = sampleQuestions.flatMap(validateQuestion);
    expect(issues.filter((issue) => issue.severity === "error")).toEqual([]);
  });

  it("rejects banned answer choices and multiple correct answers", () => {
    const invalid = structuredClone(sampleQuestions[0]);
    invalid.id = "invalid-all-above";
    invalid.choices[0].text = "All of the above";
    invalid.choices[0].isCorrect = true;

    const issues = validateQuestion(invalid);

    expect(issues.some((issue) => issue.message.includes("all-of-the-above"))).toBe(true);
    expect(issues.some((issue) => issue.message.includes("exactly one correct"))).toBe(true);
  });
});
