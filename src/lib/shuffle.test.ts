import { describe, expect, it } from "vitest";
import { sampleQuestions } from "../data/questions";
import { selectMockQuestions } from "./selection";
import { auditCorrectPositionDistribution, buildSessionQuestions } from "./shuffle";

describe("shuffle engine", () => {
  it("produces deterministic choice orders for the same seed", () => {
    const first = buildSessionQuestions(sampleQuestions.slice(0, 8), "fixed-seed").map((question) => question.choiceOrder);
    const second = buildSessionQuestions(sampleQuestions.slice(0, 8), "fixed-seed").map((question) => question.choiceOrder);

    expect(second).toEqual(first);
  });

  it("balances correct answer positions across a full mock", () => {
    const mockQuestions = selectMockQuestions(sampleQuestions, "mock-seed", 120);
    const sessionQuestions = buildSessionQuestions(mockQuestions, "mock-seed");
    const audit = auditCorrectPositionDistribution(sessionQuestions.filter((question) => question.choiceOrder.length === 4));

    expect(audit.total).toBeGreaterThan(100);
    expect(audit.passed).toBe(true);
  });
});
