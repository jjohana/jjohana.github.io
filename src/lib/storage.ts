import { sampleQuestions } from "../data/questions";
import type { AccountId, AppState, Question, UserAccount, UserSettings } from "../types";
import { cleanQuestionContent } from "./contentSanitizer";
import { applyQuestionQualityDefaults } from "./quality";

export const LEGACY_STORAGE_KEYS = ["series3-qcm-state-v1"];
export const LEGACY_GLOBAL_STORAGE_KEY = "series3-qcm-state-v2";
export const ACTIVE_ACCOUNT_KEY = "series3-qcm-active-account-v1";
export const ACCOUNT_STORAGE_PREFIX = "series3-qcm-account-state-v1";
export const INITIAL_ACCOUNT_ID: AccountId = "jj";

export const USER_ACCOUNTS: UserAccount[] = [
  { id: "jj", displayName: "JJ", description: "Compte individualisé" },
  { id: "eric", displayName: "Eric", description: "Compte individualisé" },
  { id: "beatrice", displayName: "Béatrice", description: "Compte individualisé" },
  { id: "thomas", displayName: "Thomas", description: "Compte individualisé" }
];

export const DEFAULT_SETTINGS: UserSettings = {
  shuffleSeed: "series3-default-seed",
  feedbackMode: "immediate",
  defaultDrillSize: 10,
  enableExperimentalQuestions: false,
  timerEnabled: true
};

const canonicalSampleQuestions = sampleQuestions.map((question) => applyQuestionQualityDefaults(cleanQuestionContent(question)));

export function defaultState(): AppState {
  return {
    questions: canonicalSampleQuestions,
    sessions: [],
    settings: DEFAULT_SETTINGS
  };
}

export function isAccountId(value: string | undefined | null): value is AccountId {
  return USER_ACCOUNTS.some((account) => account.id === value);
}

export function normalizeAccountId(value: string | undefined | null): AccountId {
  return isAccountId(value) ? value : INITIAL_ACCOUNT_ID;
}

export function accountStorageKey(accountId: AccountId): string {
  return `${ACCOUNT_STORAGE_PREFIX}:${accountId}`;
}

export function getAccount(accountId: AccountId): UserAccount {
  return USER_ACCOUNTS.find((account) => account.id === accountId) ?? USER_ACCOUNTS[0];
}

export function mergeQuestions(stored: Question[] | undefined): Question[] {
  const byId = new Map(canonicalSampleQuestions.map((question) => [question.id, question]));
  for (const question of stored ?? []) {
    if (byId.has(question.id)) continue;
    byId.set(question.id, applyQuestionQualityDefaults(cleanQuestionContent(question)));
  }
  return [...byId.values()];
}

export function loadActiveAccount(): AccountId {
  if (typeof localStorage === "undefined") return INITIAL_ACCOUNT_ID;
  return normalizeAccountId(localStorage.getItem(ACTIVE_ACCOUNT_KEY));
}

export function saveActiveAccount(accountId: AccountId): void {
  if (typeof localStorage === "undefined") return;
  localStorage.setItem(ACTIVE_ACCOUNT_KEY, accountId);
}

function parseState(raw: string | null): AppState | undefined {
  if (!raw) return undefined;
  try {
    const parsed = JSON.parse(raw) as Partial<AppState>;
    return {
      questions: mergeQuestions(parsed.questions),
      sessions: Array.isArray(parsed.sessions) ? parsed.sessions : [],
      settings: { ...DEFAULT_SETTINGS, ...(parsed.settings ?? {}) },
      activeSessionId: parsed.activeSessionId
    };
  } catch {
    return undefined;
  }
}

export function loadState(accountId: AccountId = loadActiveAccount()): AppState {
  if (typeof localStorage === "undefined") return defaultState();
  for (const legacyKey of LEGACY_STORAGE_KEYS) {
    localStorage.removeItem(legacyKey);
  }
  const current = parseState(localStorage.getItem(accountStorageKey(accountId)));
  if (current) return current;

  if (accountId === INITIAL_ACCOUNT_ID) {
    const legacyGlobal = parseState(localStorage.getItem(LEGACY_GLOBAL_STORAGE_KEY));
    if (legacyGlobal) return legacyGlobal;
  }

  return defaultState();
}

export function saveState(state: AppState, accountId: AccountId = loadActiveAccount()): void {
  if (typeof localStorage === "undefined") return;
  for (const legacyKey of LEGACY_STORAGE_KEYS) {
    localStorage.removeItem(legacyKey);
  }
  localStorage.setItem(accountStorageKey(accountId), JSON.stringify({ ...state, questions: mergeQuestions(state.questions) }));
  if (accountId === INITIAL_ACCOUNT_ID) localStorage.removeItem(LEGACY_GLOBAL_STORAGE_KEY);
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
