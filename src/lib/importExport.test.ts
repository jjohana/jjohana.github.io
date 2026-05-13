import { describe, expect, it } from "vitest";
import { parseCsvQuestions, parseJsonlQuestions, questionBankTemplateJsonl, questionsToCsv } from "./importExport";
import { sampleQuestions } from "../data/questions";

describe("question import and export", () => {
  it("parses valid JSONL questions", () => {
    const parsed = parseJsonlQuestions(questionBankTemplateJsonl());

    expect(parsed.report.validRows).toBe(1);
    expect(parsed.questions[0].sourceType).toBe("imported");
  });

  it("imports fixed-order source questions with answer-letter-dependent choices", () => {
    const source = structuredClone(sampleQuestions[0]);
    source.id = "import-fixed-order-001";
    source.shuffleDisabled = true;
    source.choices[0].text = "A and C only";
    source.choices[0].isCorrect = false;
    source.choices[1].isCorrect = true;
    source.sourcePageRange = "247";
    source.sourceQuestionNumber = 246;

    const parsed = parseJsonlQuestions(JSON.stringify(source));

    expect(parsed.report.validRows).toBe(1);
    expect(parsed.questions[0].shuffleDisabled).toBe(true);
    expect(parsed.questions[0].sourceQuestionNumber).toBe(246);
    expect(parsed.report.issues.some((issue) => issue.severity === "warning")).toBe(true);
  });

  it("round-trips exported CSV rows through the CSV parser", () => {
    const csv = questionsToCsv(sampleQuestions.slice(0, 2));
    const parsed = parseCsvQuestions(csv);

    expect(parsed.report.validRows).toBe(2);
  });
});
