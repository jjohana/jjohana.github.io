import { describe, expect, it } from "vitest";
import { sampleQuestions } from "../data/questions";
import type { Question } from "../types";
import { UNSAFE_DISPLAY_PATTERNS } from "./contentSanitizer";
import { applyQuestionQualityDefaults, inferredQualityStatus } from "./quality";
import { filterQuestionPool } from "./selection";
import { validateQuestionBank } from "./validation";

const visibleQuestionFields = (question: Question) => [
  ["stem", question.stem],
  ["explanation", question.explanation],
  ["concept", question.concept ?? ""],
  ...question.choices.flatMap((choice, index) => [
    [`choices.${index}.text`, choice.text],
    [`choices.${index}.rationale`, choice.rationale]
  ])
];

const ocrArtifactPatterns = [
  ...UNSAFE_DISPLAY_PATTERNS,
  /[\x80-\xFF]/,
  /[\uFFFD\u20AC\u2022_{}]/,
  /source-indicated|not parsed from OCR|Review the explanation/i,
  /\b(?:fritures|fttures|underlymg|dellvery|clellvery|speclfied|volatillty|speculatlon)\b/i,
  /\b(?:knoum|classlfy|cmdes|mstmment|mstmt|exerctsmg|vatymg|prevallmg)\b/i,
  /\b(?:wofth|wolth|wotth|wofih|penod|carnes|dissimilant\w*|commodlty|instmment\w*)\b/i,
  /\b(?:benveen|Marein|intermet|feference\w*|ofthe|ofthese|Treasuty|addltlonal)\b/i,
  /\b(?:margm|margtn|mamtam|clifference|clifferent|posltlon|positlon|retum|equlty)\b/i,
  /\b(?:paymg|buymg|increasmg|resultmg|tradmg|Excludmg|Ignormg|concemed|frarlc|Suriss|delwers)\b/i,
  /\b(?:clearmghouse\w*|derlvatlves|fonvards|invefled|reivard|canying|Tme)\b/i,
  /\b(?:requrrements|shofs|ctrcumstances|Iules|perlocl|immedlately|andtor|tivo|gam|arld|betueen)\b/i,
  /\b(?:Ofa|arl|arlswer|Ifthe|louer|dimmishes|commg|decreasmg|Retums|knoxum|rtsk)\b/i,
  /\b(?:intrmsic|intrinslc|optlon|speci.r|counterpafty|havmg|insefts|allowmg|Mith|origmated)\b/i,
  /\b(?:allgned|hlgher|demarld|fulther|bemg|collectmg|Treasuly|Infommation|infommation|Tvo|cvery)\b/i,
  /\b(?:fepresent|Ssrd|urad|umo|pvaould|M,ould|M,hen|M,hat|u,hen|pvhen|pvhat)\b/i,
  /\bS(?:\d|I\b|O\.)/,
  /\$[0-9]+\.so\b/i,
  /\b(?:43\.so|17\.50\.0|C\.only|1\.000\.000|v\.Titer|M\.-hen|and\.'or)\b/i,
  /\b(?:93\.SO|93\.so|x\.0001|s\.38|3\.9S|p\.heat|bu\.under|for\.22)\b/i,
  /\b(?:000\.0630X250|is\.5334|at\.5441|then\.5228)\b/i,
  /375\.10-\$37000|5\.10peroz/i,
  /\b(?:DDecember|pvheat|round-tum|deposlt|Shoft|begmning|pald|defaultmg)\b/i,
  /\b(?:ofrisk|discretionaly|typewnters|decldes|typexvriter|attomey|alltimes)\b/i,
  /\b(?:Wisible|Wiable|Wien|Wiew|ftnction|commodlt\w*|integrlty|exchmge)\b/i,
  /\b(?:Naticnal|fegistered|noticed registered|Wertical|Weltical|exerctsed|ivhose)\b/i,
  /Allile|dlfference|strikez|future' s|custom er|inventoty|bearlsh|profit'loss/i
];

describe("published question quality", () => {
  const activeQuestions = sampleQuestions.filter((question) => question.active);
  const importedQuestions = activeQuestions.filter((question) => question.sourceType === "imported");

  it("has no visible OCR placeholders or known transcript artifacts in verified questions", () => {
    const verifiedQuestions = activeQuestions.filter((question) => inferredQualityStatus(question) === "verified");
    const findings = verifiedQuestions.flatMap((question) =>
      visibleQuestionFields(question)
        .map(([field, value]) => {
          const patternIndex = ocrArtifactPatterns.findIndex((pattern) => pattern.test(value));
          return patternIndex === -1 ? undefined : `${question.id} ${field} pattern#${patternIndex}: ${value}`;
        })
        .filter(Boolean)
    );

    expect(findings).toEqual([]);
  });

  it("requires embedded LLM audit metadata before certifying imported questions", () => {
    const verifiedImportedQuestions = importedQuestions.filter((question) => inferredQualityStatus(question) === "verified");
    const findings = verifiedImportedQuestions
      .filter(
        (question) =>
          !/OpenAI gpt-5\.5/i.test(question.verifiedBy ?? "") ||
          !question.verifiedAt ||
          !/LLM vision import/i.test(question.sourceNote ?? "") ||
          question.reviewStatus !== "reviewed"
      )
      .map((question) => `${question.id}: ${question.verifiedBy ?? "missing verifier"} / ${question.sourceNote ?? "missing source note"}`);

    expect(findings).toEqual([]);
    expect(verifiedImportedQuestions.length).toBeGreaterThan(0);
  });

  it("assigns a quality status to every active question", () => {
    const findings = activeQuestions
      .filter((question) => !["verified", "needs_review", "rejected"].includes(inferredQualityStatus(question)))
      .map((question) => question.id);

    expect(findings).toEqual([]);
  });

  it("does not certify imported questions with unresolved OCR or shuffle-safety issues", () => {
    const findings = activeQuestions
      .filter((question) => inferredQualityStatus(question) === "verified")
      .filter((question) => question.issueTypes?.some((issue) => issue === "OCR/transcription" || issue === "bad_distractors"))
      .map((question) => `${question.id}: ${question.issueTypes?.join(", ")}`);

    expect(findings).toEqual([]);
  });

  it("formats embedded futures/options information instead of publishing flattened row text", () => {
    const compressedTablePatterns = [
      /FUTURE CALL STRIKE PRICE PUT STRIKE PRICE FUTURES PRICE/i,
      /Future Call Strike Price Put Strike Price Futures Price/i,
      /HOG FUTURES AND OPTIONS FUTURE CALL/i
    ];
    const findings = activeQuestions
      .filter((question) => inferredQualityStatus(question) === "verified")
      .flatMap((question) =>
        visibleQuestionFields(question)
          .filter(([field]) => field === "stem")
          .filter(([, value]) => compressedTablePatterns.some((pattern) => pattern.test(value)))
          .map(([field, value]) => `${question.id} ${field}: ${value}`)
      );

    expect(findings).toEqual([]);

    const tableQuestions = ["s3-market-docx-131", "s3-market-docx-133", "s3-market-docx-410"];
    for (const questionId of tableQuestions) {
      const question = activeQuestions.find((item) => item.id === questionId);
      expect(question?.stem).toContain("For each month, the call and the put use the same strike shown.");
      expect(question?.stem).toContain("- April contract: call strike");
      expect(question?.stem).toContain("- October contract: call strike");
      expect(question?.stem).not.toContain("\t");
    }

    const question94 = activeQuestions.find((item) => item.id === "s3-market-docx-133");
    expect(question94?.stem).toContain("No July option is listed among the answer choices.");
    expect(question94?.stem).toContain("Among the answer choices, which option has the largest intrinsic value?");
  });

  it("does not trust a legacy imported verified status without LLM audit metadata", () => {
    const verifiedImportedQuestion = importedQuestions.find((question) => inferredQualityStatus(question) === "verified");
    expect(verifiedImportedQuestion).toBeDefined();

    const legacyImportedQuestion = {
      ...verifiedImportedQuestion!,
      id: "legacy-imported-without-llm-audit",
      sourceNote: "Legacy imported OCR question.",
      verifiedAt: undefined,
      verifiedBy: undefined,
      qualityStatus: "verified" as const,
      qualityNotes: "Legacy status only."
    };

    expect(applyQuestionQualityDefaults(legacyImportedQuestion).qualityStatus).toBe("needs_review");
  });

  it("excludes rejected questions from the default session pool", () => {
    const pool = filterQuestionPool(activeQuestions, { difficulty: "mixed" });
    const rejectedIds = pool.filter((question) => inferredQualityStatus(question) === "rejected").map((question) => question.id);

    expect(rejectedIds).toEqual([]);
  });

  it("publishes only structurally valid active questions", () => {
    const report = validateQuestionBank(activeQuestions.filter((question) => inferredQualityStatus(question) !== "rejected"));
    const errors = report.issues.filter((issue) => issue.severity === "error");

    expect(errors).toEqual([]);
  });
});
