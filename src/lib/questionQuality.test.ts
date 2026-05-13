import { describe, expect, it } from "vitest";
import { sampleQuestions } from "../data/questions";
import type { Question } from "../types";
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
  /[\x80-\xFF]/,
  /[\uFFFD\u20AC\u2022_{}]/,
  /source-indicated|not parsed from OCR|Review the explanation/i,
  /\b(?:fritures|fttures|underlymg|dellvery|clellvery|speclfied|volatillty|speculatlon)\b/i,
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

  it("has no visible OCR placeholders or known transcript artifacts", () => {
    const findings = activeQuestions.flatMap((question) =>
      visibleQuestionFields(question)
        .filter(([, value]) => ocrArtifactPatterns.some((pattern) => pattern.test(value)))
        .map(([field, value]) => `${question.id} ${field}: ${value}`)
    );

    expect(findings).toEqual([]);
  });

  it("marks imported S3 source-bank questions as reviewed and high confidence", () => {
    const findings = importedQuestions
      .filter((question) => question.reviewStatus !== "reviewed" || question.extractionConfidence !== "high")
      .map((question) => `${question.id}: ${question.reviewStatus ?? "missing"} / ${question.extractionConfidence ?? "missing"}`);

    expect(findings).toEqual([]);
  });

  it("publishes only structurally valid active questions", () => {
    const report = validateQuestionBank(activeQuestions);
    const errors = report.issues.filter((issue) => issue.severity === "error");

    expect(errors).toEqual([]);
  });
});
