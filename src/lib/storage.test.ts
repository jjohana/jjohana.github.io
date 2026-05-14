import { beforeEach, describe, expect, it } from "vitest";
import { sampleQuestions } from "../data/questions";
import type { Question } from "../types";
import { inferredQualityStatus } from "./quality";
import {
  ACTIVE_ACCOUNT_KEY,
  INITIAL_ACCOUNT_ID,
  LEGACY_GLOBAL_STORAGE_KEY,
  accountStorageKey,
  loadActiveAccount,
  loadState,
  mergeQuestions,
  saveActiveAccount
} from "./storage";

beforeEach(() => {
  localStorage.clear();
});

describe("storage question migration", () => {
  it("keeps seeded questions canonical when localStorage contains stale OCR copies", () => {
    const seeded = sampleQuestions.find((question) => question.id === "s3-market-docx-354");
    expect(seeded).toBeDefined();

    const stale: Question = {
      ...seeded!,
      stem:
        "A speculator buys one December T-bill futures contract at 96. IO and later sells it at 95_24_ The instrument underlying the futures contract is SI million face value of 90- day T-bills.",
      choices: [
        { id: "a", text: "ss:600", isCorrect: false, rationale: "Bad OCR" },
        { id: "b", text: "$2:150", isCorrect: true, rationale: "Bad OCR" },
        { id: "c", text: "$4:200 Loss _ $1:075", isCorrect: false, rationale: "Bad OCR" }
      ]
    };

    const merged = mergeQuestions([stale]);
    const migrated = merged.find((question) => question.id === seeded!.id);

    expect(migrated?.stem).toBe(seeded!.stem);
    expect(migrated?.choices.map((choice) => choice.text)).toEqual(seeded!.choices.map((choice) => choice.text));
    expect(inferredQualityStatus(migrated!)).toBe(inferredQualityStatus(seeded!));
  });

  it("sanitizes non-seeded local questions and prevents unsafe verified status", () => {
    const localQuestion: Question = {
      id: "user-imported-stale",
      sectionId: "us_regulations",
      topicId: "general-regulatory",
      subtopicId: "risk-disclosure",
      difficulty: "hard",
      questionType: "true_false",
      stem: "In regard to risk disclosure, this stale local copy has an unknown OCR token n7Q.",
      choices: [
        { id: "a", text: "Truc", isCorrect: true, rationale: "Correct." },
        { id: "b", text: "False", isCorrect: false, rationale: "Incorrect." }
      ],
      explanation: "The choice text must be cleaned and the remaining artifact must block verification.",
      sourceType: "user-authored",
      active: true,
      qualityStatus: "verified"
    };

    const merged = mergeQuestions([localQuestion]);
    const migrated = merged.find((question) => question.id === localQuestion.id);

    expect(migrated?.choices[0].text).toBe("True");
    expect(migrated?.issueTypes).toContain("OCR/transcription");
    expect(inferredQualityStatus(migrated!)).toBe("needs_review");
  });

  it("uses a stable initial account when none is selected", () => {
    expect(INITIAL_ACCOUNT_ID).toBe("jj");
    expect(loadActiveAccount()).toBe("jj");

    saveActiveAccount("thomas");
    expect(localStorage.getItem(ACTIVE_ACCOUNT_KEY)).toBe("thomas");
    expect(loadActiveAccount()).toBe("thomas");
  });

  it("keeps progress, imports, and settings separated by account", () => {
    localStorage.setItem(
      accountStorageKey("jj"),
      JSON.stringify({
        questions: [],
        sessions: [
          {
            id: "session-jj",
            type: "practice",
            title: "JJ drill",
            createdAt: "2026-05-14T00:00:00.000Z",
            seed: "jj",
            status: "completed",
            feedbackMode: "immediate",
            questions: [],
            answers: []
          }
        ],
        settings: { defaultDrillSize: 25 }
      })
    );
    localStorage.setItem(
      accountStorageKey("eric"),
      JSON.stringify({
        questions: [],
        sessions: [],
        settings: { defaultDrillSize: 5 }
      })
    );

    const jjState = loadState("jj");
    const ericState = loadState("eric");

    expect(jjState.sessions).toHaveLength(1);
    expect(jjState.settings.defaultDrillSize).toBe(25);
    expect(ericState.sessions).toHaveLength(0);
    expect(ericState.settings.defaultDrillSize).toBe(5);
    expect(localStorage.getItem(accountStorageKey("beatrice"))).toBeNull();
  });

  it("migrates the previous single browser state into JJ only", () => {
    localStorage.setItem(
      LEGACY_GLOBAL_STORAGE_KEY,
      JSON.stringify({
        questions: sampleQuestions,
        sessions: [
          {
            id: "legacy-session",
            type: "practice",
            title: "Legacy drill",
            createdAt: "2026-05-14T00:00:00.000Z",
            seed: "legacy",
            status: "completed",
            feedbackMode: "immediate",
            questions: [],
            answers: []
          }
        ],
        settings: { defaultDrillSize: 18 }
      })
    );

    expect(loadState("jj").sessions[0]?.id).toBe("legacy-session");
    expect(loadState("jj").settings.defaultDrillSize).toBe(18);
    expect(loadState("thomas").sessions).toHaveLength(0);
  });
});
