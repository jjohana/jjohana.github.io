import { describe, expect, it } from "vitest";
import { parseCsvQuestions, parseJsonlQuestions, questionBankTemplateJsonl, questionsToCsv } from "./importExport";
import { sampleQuestions } from "../data/questions";

describe("question import and export", () => {
  it("parses valid JSONL questions", () => {
    const parsed = parseJsonlQuestions(questionBankTemplateJsonl());

    expect(parsed.report.validRows).toBe(1);
    expect(parsed.questions[0].sourceType).toBe("imported");
  });

  it("round-trips exported CSV rows through the CSV parser", () => {
    const csv = questionsToCsv(sampleQuestions.slice(0, 2));
    const parsed = parseCsvQuestions(csv);

    expect(parsed.report.validRows).toBe(2);
  });
});
