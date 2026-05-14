import type { Question } from "../types";

// Fresh reimport baseline: no imported QCM is certified by legacy metadata.
// The new LLM content-audit pass must add explicit verified/rejected decisions here.
export const questionQualityOverrides: Record<string, Partial<Question>> = {};
