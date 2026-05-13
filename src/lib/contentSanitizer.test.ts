import { describe, expect, it } from "vitest";
import { cleanQuestionContent, hasUnsafeDisplayArtifact, normalizeDisplayText } from "./contentSanitizer";
import type { Question } from "../types";

describe("content sanitizer", () => {
  it("repairs OCR artifacts from stale imported Market questions", () => {
    const text =
      "A speculator buys one December T-bill futures contract at 96. IO and later sells it at 95_24_ The instrument underlying the futures contract is SI million face value of 90- day T-bills: and the value of a minimum tick is.005 or SI 250 per ct. Ignormg commissions.";

    expect(normalizeDisplayText(text)).toBe(
      "A speculator buys one December T-bill futures contract at 96.10 and later sells it at 95.24 The instrument underlying the futures contract is $1 million face value of 90-day T-bills: and the value of a minimum tick is 0.005 or $12.50 per contract. Ignoring commissions."
    );
  });

  it("repairs stale True/False OCR choices", () => {
    expect(normalizeDisplayText("Truc")).toBe("True");
    expect(normalizeDisplayText("Falsc")).toBe("False");
  });

  it("cleans every visible question field", () => {
    const question: Question = {
      id: "local-stale",
      sectionId: "us_regulations",
      topicId: "general-regulatory",
      subtopicId: "risk-disclosure",
      difficulty: "easy",
      questionType: "true_false",
      stem: "Retums are decreasmg.",
      choices: [
        { id: "a", text: "Truc", isCorrect: true, rationale: "Correct because Retums are decreasmg." },
        { id: "b", text: "Falsc", isCorrect: false, rationale: "Incorrect." }
      ],
      explanation: "Ignormg the typo, this is True.",
      sourceType: "user-authored",
      active: true
    };

    const cleaned = cleanQuestionContent(question);

    expect(cleaned.stem).toBe("Returns are decreasing.");
    expect(cleaned.choices[0].text).toBe("True");
    expect(cleaned.choices[0].rationale).toBe("Correct because Returns are decreasing.");
    expect(cleaned.explanation).toBe("Ignoring the typo, this is True.");
    expect(hasUnsafeDisplayArtifact(cleaned.stem)).toBe(false);
  });
});
