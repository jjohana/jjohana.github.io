import { describe, expect, it } from "vitest";
import { sampleQuestions } from "../data/questions";
import { parseDisplayText } from "./displayText";

describe("display text parser", () => {
  it("turns tab-separated question content into a table block", () => {
    const blocks = parseDisplayText(
      "Based on the following table:\n\nFuture\tCall strike price\tPut strike price\tFutures price\nApril\t52\t52\t52.66\nJuly\t53\t53\t53.20"
    );

    expect(blocks).toEqual([
      { type: "paragraph", text: "Based on the following table:" },
      {
        type: "table",
        rows: [
          ["Future", "Call strike price", "Put strike price", "Futures price"],
          ["April", "52", "52", "52.66"],
          ["July", "53", "53", "53.20"]
        ]
      }
    ]);
  });

  it("keeps tabular question fields complete and rectangular", () => {
    const tabularFields = sampleQuestions.flatMap((question) => [
      { id: `${question.id}.stem`, text: question.stem },
      { id: `${question.id}.explanation`, text: question.explanation },
      { id: `${question.id}.qualityNotes`, text: question.qualityNotes },
      ...question.choices.flatMap((choice) => [
        { id: `${question.id}.${choice.id}.text`, text: choice.text },
        { id: `${question.id}.${choice.id}.rationale`, text: choice.rationale }
      ])
    ]).filter((field) => field.text?.includes("\t"));

    for (const field of tabularFields) {
      const tableBlocks = parseDisplayText(field.text).filter((block) => block.type === "table");
      expect(tableBlocks.length, field.id).toBeGreaterThan(0);

      for (const table of tableBlocks) {
        const expectedWidth = table.rows[0]?.length ?? 0;
        expect(expectedWidth, field.id).toBeGreaterThan(1);
        for (const row of table.rows) {
          expect(row, field.id).toHaveLength(expectedWidth);
          expect(row.every((cell) => cell.trim().length > 0), field.id).toBe(true);
        }
      }
    }
  });

  it("poses the hog intrinsic-value questions without collapsed table columns", () => {
    const question59 = sampleQuestions.find((question) => question.id === "s3-market-docx-131");
    const question60 = sampleQuestions.find((question) => question.id === "s3-market-docx-410");

    expect(question59?.stem).toContain("April contract: call strike 52; put strike 52; futures price 52.66.");
    expect(question59?.stem).toContain("Which answer choice has intrinsic value?");
    expect(question59?.stem).not.toContain("\t");

    expect(question60?.stem).toContain("October contract: call strike 54; put strike 54; futures price 53.80.");
    expect(question60?.stem).toContain("Which answer choice has the largest intrinsic value?");
    expect(question60?.stem).not.toContain("\t");
  });
});
