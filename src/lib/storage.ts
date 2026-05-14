import { sampleQuestions } from "../data/questions";
import type { AccountId, AppState, Question, UserAccount, UserSettings } from "../types";
import { cleanQuestionContent } from "./contentSanitizer";
import { applyQuestionQualityDefaults } from "./quality";

export const LEGACY_STORAGE_KEYS = ["series3-qcm-state-v1"];
export const LEGACY_GLOBAL_STORAGE_KEY = "series3-qcm-state-v2";
export const ACTIVE_ACCOUNT_KEY = "series3-qcm-active-account-v1";
export const ACCOUNT_STORAGE_PREFIX = "series3-qcm-account-state-v1";
export const ACCOUNT_BACKUP_PREFIX = "series3-qcm-account-backup-v1";
export const INITIAL_ACCOUNT_ID: AccountId = "jj";

export const USER_ACCOUNTS: UserAccount[] = [
  { id: "jj", displayName: "JJ" },
  { id: "eric", displayName: "Eric" },
  { id: "beatrice", displayName: "Béatrice" },
  { id: "thomas", displayName: "Thomas" }
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

export function accountBackupKey(accountId: AccountId): string {
  return `${ACCOUNT_BACKUP_PREFIX}:${accountId}`;
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

function stateMemoryScore(state: AppState | undefined): number {
  if (!state) return -1;
  const sessions = Array.isArray(state.sessions) ? state.sessions : [];
  const answerCount = sessions.reduce((sum, session) => sum + (Array.isArray(session.answers) ? session.answers.length : 0), 0);
  const importedQuestionCount = Math.max(0, state.questions.length - canonicalSampleQuestions.length);
  return answerCount * 1000 + sessions.length * 100 + importedQuestionCount;
}

function bestState(states: Array<AppState | undefined>): AppState | undefined {
  return states.reduce<AppState | undefined>((best, state) =>
    stateMemoryScore(state) > stateMemoryScore(best) ? state : best
  , undefined);
}

function serializedState(state: AppState, includeQuestions: boolean): string {
  return JSON.stringify({
    ...state,
    questions: includeQuestions ? mergeQuestions(state.questions) : undefined
  });
}

function setLocalStorageItem(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    // Browser storage can be quota-limited; failing to write a backup must not block the app.
  }
}

export function loadState(accountId: AccountId = loadActiveAccount()): AppState {
  if (typeof localStorage === "undefined") return defaultState();
  const current = parseState(localStorage.getItem(accountStorageKey(accountId)));
  const backup = parseState(localStorage.getItem(accountBackupKey(accountId)));

  if (accountId === INITIAL_ACCOUNT_ID) {
    const legacyStates = [
      parseState(localStorage.getItem(LEGACY_GLOBAL_STORAGE_KEY)),
      ...LEGACY_STORAGE_KEYS.map((legacyKey) => parseState(localStorage.getItem(legacyKey)))
    ];
    const recovered = bestState([current, backup, ...legacyStates]);
    if (recovered) return recovered;
  }

  const recovered = bestState([current, backup]);
  if (recovered) return recovered;
  if (current) return current;

  return defaultState();
}

export function saveState(state: AppState, accountId: AccountId = loadActiveAccount()): void {
  if (typeof localStorage === "undefined") return;
  const existing = parseState(localStorage.getItem(accountStorageKey(accountId)));
  const existingBackup = parseState(localStorage.getItem(accountBackupKey(accountId)));
  const bestExisting = bestState([existing, existingBackup]);
  if (stateMemoryScore(bestExisting) > stateMemoryScore(state)) {
    setLocalStorageItem(accountBackupKey(accountId), serializedState(bestExisting!, false));
  } else if (stateMemoryScore(state) > stateMemoryScore(existingBackup)) {
    setLocalStorageItem(accountBackupKey(accountId), serializedState(state, false));
  }
  try {
    localStorage.setItem(accountStorageKey(accountId), serializedState(state, true));
  } catch {
    localStorage.setItem(accountStorageKey(accountId), serializedState(state, false));
  }
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
