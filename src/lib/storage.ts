import { sampleQuestions } from "../data/questions";
import type { AppState, Question, UserSettings } from "../types";

export const STORAGE_KEY = "series3-qcm-state-v1";

export const DEFAULT_SETTINGS: UserSettings = {
  shuffleSeed: "series3-default-seed",
  feedbackMode: "immediate",
  defaultDrillSize: 10,
  enableExperimentalQuestions: false,
  timerEnabled: true
};

export function defaultState(): AppState {
  return {
    questions: sampleQuestions,
    sessions: [],
    settings: DEFAULT_SETTINGS
  };
}

function mergeQuestions(stored: Question[] | undefined): Question[] {
  const byId = new Map(sampleQuestions.map((question) => [question.id, question]));
  for (const question of stored ?? []) {
    byId.set(question.id, question);
  }
  return [...byId.values()];
}

export function loadState(): AppState {
  if (typeof localStorage === "undefined") return defaultState();
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return defaultState();
  try {
    const parsed = JSON.parse(raw) as Partial<AppState>;
    return {
      questions: mergeQuestions(parsed.questions),
      sessions: Array.isArray(parsed.sessions) ? parsed.sessions : [],
      settings: { ...DEFAULT_SETTINGS, ...(parsed.settings ?? {}) },
      activeSessionId: parsed.activeSessionId
    };
  } catch {
    return defaultState();
  }
}

export function saveState(state: AppState): void {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function downloadText(filename: string, text: string, mime = "text/plain;charset=utf-8"): void {
  const blob = new Blob([text], { type: mime });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}
