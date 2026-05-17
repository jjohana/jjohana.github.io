import { useEffect, useMemo, useState } from "react";
import {
  AlertTriangle,
  BarChart3,
  BookOpen,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ClipboardList,
  Database,
  Download,
  Flag,
  Maximize2,
  Play,
  RotateCcw,
  Search,
  Settings,
  ShieldCheck,
  Target,
  Timer,
  Upload,
  Users,
  X,
  XCircle
} from "lucide-react";
import { syllabus, topicLabel, subtopicLabel, getSection, getTopic } from "./data/syllabus";
import { glossaryCategoryLabels, glossaryEntries, searchGlossaryEntries } from "./data/glossary";
import { buildCoverageReport, getMistakeQuestionIds, getSecondOrderMistakeQuestionIds, getWeakSubtopics } from "./lib/analytics";
import { normalizeDisplayText } from "./lib/contentSanitizer";
import { parseDisplayText } from "./lib/displayText";
import { buildCourse, courseProgress, firstCourseSubchapter, searchCourse } from "./lib/course";
import {
  parseCsvQuestions,
  parseJsonlQuestions,
  questionBankTemplateJsonl,
  questionsToCsv,
  questionsToJsonl
} from "./lib/importExport";
import { makeId } from "./lib/prng";
import { inferredQualityStatus, ISSUE_TYPE_LABELS, ISSUE_TYPE_OPTIONS, QUALITY_FILTER_OPTIONS, qualitySummary } from "./lib/quality";
import { scoreSession, buildTopicBreakdown } from "./lib/scoring";
import {
  filterQuestionPool,
  normalizeDifficultyFilter,
  questionSourceBank,
  questionSourceBankLabel,
  questionSourcePriority,
  SOURCE_BANK_OPTIONS,
  selectCoverageQuestions,
  selectMockQuestions,
  selectPracticeQuestions
} from "./lib/selection";
import { auditCorrectPositionDistribution, buildSessionQuestions } from "./lib/shuffle";
import {
  DEFAULT_SETTINGS,
  USER_ACCOUNTS,
  defaultState,
  downloadText,
  getAccount,
  loadActiveAccount,
  loadState,
  saveActiveAccount,
  saveState
} from "./lib/storage";
import { validateQuestionBank } from "./lib/validation";
import type {
  AccountId,
  AppState,
  CourseChapter,
  CourseSubchapter,
  DifficultyFilter,
  FeedbackMode,
  GlossaryCategory,
  ImportValidationReport,
  IssueType,
  QualityFilter,
  Question,
  SectionId,
  Session,
  SessionFilters,
  SessionQuestion,
  SourceBankFilter,
  UserAccount,
  UserAnswer,
  ValidationIssue
} from "./types";

type View =
  | "dashboard"
  | "course"
  | "glossary"
  | "bank"
  | "practice"
  | "mock"
  | "mistakes"
  | "session"
  | "results"
  | "settings"
  | "examRules"
  | "about";

const DISCLAIMER =
  "This is an independent Series 3 study tool. It uses original practice questions and syllabus-based topic mapping. It is not affiliated with, endorsed by, or provided by FINRA, NFA, CFTC, or Prometric. It does not contain real exam questions.";

const EXAM_SOURCE_CHECKED = "May 13, 2026";
const FUTURES_ROLES_VISUAL_SUBCHAPTER_ID = "general-regulatory__cftc-registration";
const FUTURES_ROLES_VISUAL_SUBTOPICS = new Set([
  "cftc-registration",
  "nfa-membership",
  "associated-person",
  "commodity-pool-operator",
  "commodity-trading-advisor",
  "introducing-broker",
  "futures-commission-merchant"
]);
const ORDER_TYPES_VISUAL_SUBTOPICS = new Set([
  "market-orders",
  "stop-orders",
  "stop-limit-orders",
  "market-if-touched",
  "gtc-orders",
  "fok-orders",
  "moc-orders",
  "oco-orders",
  "protective-orders"
]);
const OPTION_STRATEGIES_VISUAL_SUBTOPICS = new Set([
  "option-premiums",
  "intrinsic-value",
  "time-value",
  "delta",
  "exercise-assignment",
  "long-calls",
  "long-puts",
  "short-calls",
  "short-puts",
  "premium-risk",
  "short-option-risk",
  "long-put-hedge",
  "long-call-hedge",
  "option-breakevens",
  "option-profit",
  "option-return-equity",
  "protective-calls",
  "protective-puts",
  "covered-calls",
  "bull-call-spreads",
  "bear-call-spreads",
  "bull-put-spreads",
  "bear-put-spreads",
  "calendar-spreads",
  "arbitrage-spreads",
  "max-profit-loss"
]);

const OFFICIAL_EXAM_LINKS = [
  {
    label: "FINRA Series 3 exam page",
    url: "https://www.finra.org/registration-exams-ce/qualification-exams/series3"
  },
  {
    label: "FINRA test center appointment rules",
    url: "https://www.finra.org/registration-exams-ce/qualification-exam/testcenter"
  },
  {
    label: "FINRA on exam day",
    url: "https://www.finra.org/registration-exams-ce/qualification-exams/exam-day"
  },
  {
    label: "NFA futures exam study outline and logistics",
    url: "https://www.nfa.futures.org/registration-membership/study-outlines/index.html"
  },
  {
    label: "NFA futures and forex proficiency exam FAQ",
    url: "https://www.nfa.futures.org/faqs/registrants-membership-app/futures-forex-proficiency-examinations.html"
  }
];

const REGULATORY_FOCUS_OPTIONS = [
  { value: "all", label: "All regulatory focus areas" },
  { value: "registration", label: "Registration and roles" },
  { value: "account-rules", label: "Account rules" },
  { value: "fcm-ib", label: "FCM / IB" },
  { value: "cpo-cta", label: "CPO / CTA" },
  { value: "supervision", label: "Supervision" },
  { value: "communications", label: "Promotional material" },
  { value: "arbitration", label: "Arbitration" },
  { value: "discipline", label: "Discipline and enforcement" },
  { value: "aml", label: "AML / SAR" },
  { value: "high-yield", label: "High-yield rules" }
];

const NAV_ITEMS: Array<{ view: View; label: string; icon: typeof BarChart3 }> = [
  { view: "dashboard", label: "Dashboard", icon: BarChart3 },
  { view: "course", label: "Course", icon: BookOpen },
  { view: "glossary", label: "Glossary", icon: ClipboardList },
  { view: "bank", label: "QCM Bank", icon: Database },
  { view: "practice", label: "Practice", icon: Target },
  { view: "mock", label: "Mock Exam", icon: Timer },
  { view: "mistakes", label: "Mistakes", icon: RotateCcw },
  { view: "results", label: "Results", icon: ClipboardList },
  { view: "examRules", label: "Exam Rules", icon: ShieldCheck },
  { view: "settings", label: "Settings", icon: Settings },
  { view: "about", label: "About", icon: ShieldCheck }
];

const DEFAULT_SECTION: SectionId = "market_knowledge";
const DEFAULT_TOPIC = "hedging-basis";

function defaultTopicForSection(sectionId: SectionId): string {
  return syllabus.find((section) => section.id === sectionId)?.topics[0]?.id ?? DEFAULT_TOPIC;
}

function filtersForSourceBank(filters: SessionFilters, sourceBank: SourceBankFilter): SessionFilters {
  if (sourceBank === "s3-market-docx") {
    return { ...filters, sourceBank, sectionId: "market_knowledge", topicId: "", subtopicId: "", regulatoryFocus: "all" };
  }
  if (sourceBank === "s3-regulatory-pdf") {
    return { ...filters, sourceBank, sectionId: "us_regulations", topicId: "", subtopicId: "", regulatoryFocus: "all" };
  }
  if (sourceBank === "s3-imported" || sourceBank === "authored" || sourceBank === "all") {
    return { ...filters, sourceBank, sectionId: undefined, topicId: "", subtopicId: "", regulatoryFocus: "all" };
  }
  return { ...filters, sourceBank };
}

function sourceBankForSectionChange(filters: SessionFilters, nextSection?: SectionId): SourceBankFilter | undefined {
  if (!nextSection) return filters.sourceBank;
  if (filters.sourceBank === "s3-market-docx" && nextSection === "us_regulations") return "s3-imported";
  if (filters.sourceBank === "s3-regulatory-pdf" && nextSection === "market_knowledge") return "s3-imported";
  return filters.sourceBank;
}

function App() {
  const [activeAccountId, setActiveAccountId] = useState<AccountId>(() => loadActiveAccount());
  const [state, setState] = useState<AppState>(() => loadState(loadActiveAccount()));
  const [view, setView] = useState<View>("dashboard");
  const [message, setMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | undefined>();
  const [practiceFilters, setPracticeFilters] = useState<SessionFilters>({
    sectionId: undefined,
    topicId: "",
    subtopicId: "",
    difficulty: "mixed",
    questionCount: DEFAULT_SETTINGS.defaultDrillSize,
    prioritizeWeak: false,
    regulatoryFocus: "all",
    sourceBank: "all",
    qualityStatus: "verified"
  });
  const [bankFilters, setBankFilters] = useState<SessionFilters>({
    sectionId: undefined,
    topicId: "",
    subtopicId: "",
    difficulty: "mixed",
    regulatoryFocus: "all",
    sourceBank: "all",
    qualityStatus: "usable"
  });
  const [mockFilters, setMockFilters] = useState<SessionFilters>({
    difficulty: "mixed",
    sourceBank: "all",
    qualityStatus: "verified"
  });
  const [bankSearch, setBankSearch] = useState("");
  const [bankStatus, setBankStatus] = useState("all");
  const [bankIssueType, setBankIssueType] = useState<IssueType | "all">("all");
  const [importText, setImportText] = useState("");
  const [importFormat, setImportFormat] = useState<"jsonl" | "csv">("jsonl");
  const [importReport, setImportReport] = useState<ImportValidationReport | null>(null);
  const [courseSearch, setCourseSearch] = useState("");
  const [selectedCourseSubchapterId, setSelectedCourseSubchapterId] = useState<string | undefined>();
  const [glossarySearch, setGlossarySearch] = useState("");
  const [glossaryCategory, setGlossaryCategory] = useState<GlossaryCategory | "all">("all");

  useEffect(() => {
    saveActiveAccount(activeAccountId);
    saveState(state, activeAccountId);
  }, [activeAccountId, state]);

  useEffect(() => {
    const active = state.sessions.find((session) => session.id === state.activeSessionId);
    if (!active || active.status !== "in_progress" || active.type !== "mock" || !state.settings.timerEnabled) return;
    if ((active.remainingSeconds ?? 0) <= 0) return;

    const interval = window.setInterval(() => {
      setState((current) => ({
        ...current,
        sessions: current.sessions.map((session) => {
          if (session.id !== active.id || session.status !== "in_progress") return session;
          const remainingSeconds = Math.max(0, (session.remainingSeconds ?? 0) - 1);
          return {
            ...session,
            remainingSeconds,
            status: remainingSeconds === 0 ? "completed" : session.status,
            completedAt: remainingSeconds === 0 ? new Date().toISOString() : session.completedAt
          };
        })
      }));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [state.activeSessionId, state.sessions, state.settings.timerEnabled]);

  const coverage = useMemo(() => buildCoverageReport(state.questions, state.sessions), [state.questions, state.sessions]);
  const weakSubtopics = useMemo(() => getWeakSubtopics(state), [state]);
  const dismissedMistakeIds = useMemo(() => new Set(state.dismissedMistakeQuestionIds ?? []), [state.dismissedMistakeQuestionIds]);
  const mistakeIds = useMemo(() => getMistakeQuestionIds(state.sessions, dismissedMistakeIds), [dismissedMistakeIds, state.sessions]);
  const secondOrderMistakeIds = useMemo(
    () => getSecondOrderMistakeQuestionIds(state.sessions, dismissedMistakeIds),
    [dismissedMistakeIds, state.sessions]
  );
  const course = useMemo(() => buildCourse(state.questions), [state.questions]);
  const activeSession = state.sessions.find((session) => session.id === state.activeSessionId);
  const latestCompletedSession = [...state.sessions].reverse().find((session) => session.status === "completed");
  const resultSession = view === "results" ? latestCompletedSession ?? activeSession : activeSession;
  const activeAccount = getAccount(activeAccountId);

  function updateState(updater: (current: AppState) => AppState) {
    setState((current) => updater(current));
  }

  function switchAccount(accountId: AccountId) {
    if (accountId === activeAccountId) return;
    saveState(state, activeAccountId);
    saveActiveAccount(accountId);
    const nextAccount = getAccount(accountId);
    setActiveAccountId(accountId);
    setState(loadState(accountId));
    setCurrentIndex(0);
    setSelectedChoiceId(undefined);
    setView("dashboard");
    setMessage(`Account ${nextAccount.displayName} loaded. Its progress, imports, and settings are separate.`);
  }

  function getQuestion(questionId: string): Question | undefined {
    return state.questions.find((question) => question.id === questionId);
  }

  function startSession(type: "practice" | "mock" | "mistakes", questions: Question[], filters?: SessionFilters, titleOverride?: string) {
    if (questions.length === 0) {
      setMessage("No questions match this selection. Import more questions or broaden the filters.");
      return;
    }

    const seed = `${state.settings.shuffleSeed}-${type}-${Date.now()}`;
    const sessionQuestions = buildSessionQuestions(questions, seed);
    const experimentalCount = type === "mock" && state.settings.enableExperimentalQuestions ? 5 : 0;
    const markedQuestions = sessionQuestions.map((sessionQuestion, index) => ({
      ...sessionQuestion,
      isExperimental: experimentalCount > 0 && index >= sessionQuestions.length - experimentalCount
    }));
    const session: Session = {
      id: makeId("session"),
      type,
      title:
        titleOverride ??
        (type === "mock"
          ? "Full Series 3 Mock Exam"
          : type === "mistakes"
            ? "Mistake Review"
            : buildPracticeTitle(filters)),
      createdAt: new Date().toISOString(),
      seed,
      status: "in_progress",
      feedbackMode: type === "mock" ? "delayed" : state.settings.feedbackMode,
      durationSeconds: type === "mock" ? 150 * 60 : undefined,
      remainingSeconds: type === "mock" ? 150 * 60 : undefined,
      filters,
      questions: markedQuestions,
      answers: []
    };

    updateState((current) => ({
      ...current,
      sessions: [...current.sessions, session],
      activeSessionId: session.id
    }));
    setCurrentIndex(0);
    setSelectedChoiceId(undefined);
    setView("session");
    setMessage("");
  }

  function buildPracticeTitle(filters?: SessionFilters) {
    const section = filters?.sectionId ? getSection(filters.sectionId).shortTitle : "Mixed";
    const topic = filters?.topicId ? topicLabel(filters.topicId) : "All topics";
    const subtopic = filters?.topicId && filters.subtopicId ? ` / ${subtopicLabel(filters.topicId, filters.subtopicId)}` : "";
    return `${section}: ${topic}${subtopic}`;
  }

  function startPractice() {
    const count = Number(practiceFilters.questionCount ?? state.settings.defaultDrillSize);
    const filters = { ...practiceFilters, questionCount: count, difficulty: practiceFilters.difficulty ?? "mixed" };
    const questions = selectPracticeQuestions(state.questions, filters, `${state.settings.shuffleSeed}-practice`, state.sessions);
    startSession("practice", questions, filters);
  }

  function startCoveragePractice() {
    const count = Number(practiceFilters.questionCount ?? state.settings.defaultDrillSize);
    const filters = { ...practiceFilters, questionCount: count, difficulty: practiceFilters.difficulty ?? "mixed" };
    const seed = `${state.settings.shuffleSeed}-coverage-${makeId("selection")}`;
    const questions = selectCoverageQuestions(state.questions, filters, seed, state.sessions);
    startSession("practice", questions, filters, `Coverage: ${buildPracticeTitle(filters)}`);
  }

  function startMock() {
    const desired = state.settings.enableExperimentalQuestions ? 125 : 120;
    const filters = { ...mockFilters, questionCount: desired, difficulty: "mixed" as const };
    const seed = `${state.settings.shuffleSeed}-mock-${makeId("selection")}`;
    const questions = selectMockQuestions(state.questions, seed, desired, filters);
    const sections = new Set(questions.map((question) => question.sectionId));
    if (new Set(questions.map((question) => question.id)).size < 120) {
      setMessage("This source filter has fewer than 120 unique questions. The mock exam starts now, but broaden the source filter for a fully unique exam.");
    }
    if (!sections.has("market_knowledge") || !sections.has("us_regulations")) {
      setMessage("This source filter does not cover both Market Knowledge and U.S. Regulations. Use All question banks for a full Series 3 mock.");
    }
    startSession("mock", questions, filters);
  }

  function startMistakeReview() {
    const questions = state.questions.filter((question) => mistakeIds.has(question.id) && inferredQualityStatus(question) !== "rejected");
    startSession("mistakes", questions, { questionCount: questions.length, prioritizeWeak: true });
  }

  function startSecondOrderMistakeReview(sourceIds: Iterable<string> = secondOrderMistakeIds) {
    const ids = new Set(sourceIds);
    const questions = state.questions.filter((question) => ids.has(question.id) && inferredQualityStatus(question) !== "rejected");
    startSession(
      "mistakes",
      questions,
      { questionCount: questions.length, prioritizeWeak: true },
      "Second-order Mistake Drill"
    );
  }

  function dismissMistakeQuestion(questionId: string) {
    const question = getQuestion(questionId);
    updateState((current) => {
      const dismissed = new Set(current.dismissedMistakeQuestionIds ?? []);
      dismissed.add(questionId);
      return { ...current, dismissedMistakeQuestionIds: [...dismissed] };
    });
    setMessage(`${question ? normalizeDisplayText(question.stem).split("\n")[0] : "Question"} was removed from Mistakes. If it is missed again later, it will return.`);
  }

  function restoreDismissedMistakes() {
    updateState((current) => ({ ...current, dismissedMistakeQuestionIds: [] }));
    setMessage("Removed mistakes were restored.");
  }

  function answerCurrentQuestion(session: Session, sessionQuestion: SessionQuestion, choiceId: string) {
    const question = getQuestion(sessionQuestion.questionId);
    const choice = question?.choices.find((item) => item.id === choiceId);
    if (!question || !choice) return;

    const answer: UserAnswer = {
      sessionQuestionId: sessionQuestion.id,
      questionId: question.id,
      selectedChoiceId: choiceId,
      isCorrect: choice.isCorrect,
      answeredAt: new Date().toISOString(),
      elapsedSeconds: session.durationSeconds
        ? session.durationSeconds - (session.remainingSeconds ?? session.durationSeconds)
        : 0
    };

    updateState((current) => ({
      ...current,
      dismissedMistakeQuestionIds: choice.isCorrect
        ? current.dismissedMistakeQuestionIds
        : (current.dismissedMistakeQuestionIds ?? []).filter((dismissedQuestionId) => dismissedQuestionId !== question.id),
      sessions: current.sessions.map((item) =>
        item.id === session.id
          ? {
              ...item,
              answers: [
                ...item.answers.filter((existing) => existing.sessionQuestionId !== sessionQuestion.id),
                answer
              ]
            }
          : item
      )
    }));
  }

  function completeSession(session: Session) {
    updateState((current) => ({
      ...current,
      sessions: current.sessions.map((item) =>
        item.id === session.id
          ? { ...item, status: "completed", completedAt: new Date().toISOString(), remainingSeconds: item.remainingSeconds ?? 0 }
          : item
      )
    }));
    setView("results");
  }

  function toggleFlag(session: Session, sessionQuestion: SessionQuestion) {
    updateState((current) => ({
      ...current,
      sessions: current.sessions.map((item) =>
        item.id === session.id
          ? {
              ...item,
              questions: item.questions.map((question) =>
                question.id === sessionQuestion.id ? { ...question, flagged: !question.flagged } : question
              )
            }
          : item
      )
    }));
  }

  function validateImportText(): { questions: Question[]; report: ImportValidationReport } {
    const parsed = importFormat === "jsonl" ? parseJsonlQuestions(importText) : parseCsvQuestions(importText);
    setImportReport(parsed.report);
    return parsed;
  }

  function importQuestions() {
    const parsed = validateImportText();
    if (parsed.questions.length === 0) return;
    updateState((current) => {
      const byId = new Map(current.questions.map((question) => [question.id, question]));
      for (const question of parsed.questions) byId.set(question.id, question);
      return { ...current, questions: [...byId.values()] };
    });
    setMessage(`${parsed.questions.length} question(s) imported into ${activeAccount.displayName}'s browser question bank.`);
  }

  function handleImportFile(file?: File) {
    if (!file) return;
    setImportFormat(file.name.toLowerCase().endsWith(".csv") ? "csv" : "jsonl");
    const reader = new FileReader();
    reader.onload = () => setImportText(String(reader.result ?? ""));
    reader.readAsText(file);
  }

  function resetProgress() {
    updateState((current) => ({ ...current, sessions: [], dismissedMistakeQuestionIds: [], activeSessionId: undefined }));
    setMessage(`Progress and sessions were reset for ${activeAccount.displayName}. The question bank was kept.`);
  }

  function resetAllData() {
    setState(defaultState());
    setMessage(`All local browser data for ${activeAccount.displayName} was reset to the seeded sample bank.`);
  }

  function setSettings(next: Partial<AppState["settings"]>) {
    updateState((current) => ({ ...current, settings: { ...current.settings, ...next } }));
  }

  function openCoursePractice(subchapter: CourseSubchapter, prioritizeWeak = false) {
    setPracticeFilters({
      sectionId: subchapter.sectionId,
      topicId: subchapter.topicId,
      subtopicId: subchapter.subtopicId,
      difficulty: "mixed",
      questionCount: state.settings.defaultDrillSize,
      prioritizeWeak,
      regulatoryFocus: "all",
      sourceBank: "all",
      qualityStatus: "verified"
    });
    setView("practice");
    setMessage("");
  }

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <BookOpen size={28} aria-hidden="true" />
          <div>
            <strong>Series 3 QCM</strong>
            <span>Section to subtopic drills</span>
          </div>
        </div>
        <AccountSwitcher
          activeAccountId={activeAccountId}
          onSwitch={switchAccount}
        />
        <nav aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.view}
                className={view === item.view ? "nav-item active" : "nav-item"}
                onClick={() => {
                  setView(item.view);
                  setMessage("");
                }}
              >
                <Icon size={18} aria-hidden="true" />
                {item.label}
              </button>
            );
          })}
        </nav>
        <div className="sidebar-footer">
          <span>Active account: {activeAccount.displayName}</span>
          <span>{state.questions.filter((question) => question.active).length} active QCMs</span>
          <span>{state.sessions.length} sessions</span>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">Independent study tool - {activeAccount.displayName}</p>
            <h1>{pageTitle(view)}</h1>
          </div>
          <div className="topbar-actions">
            {activeSession?.status === "in_progress" && (
              <button className="secondary-button" onClick={() => setView("session")}>
                <Play size={16} aria-hidden="true" />
                Resume
              </button>
            )}
            <button className="primary-button" onClick={startPractice}>
              <Target size={16} aria-hidden="true" />
              Quick drill
            </button>
          </div>
        </header>

        {message && (
          <div className="notice" role="status">
            <AlertTriangle size={18} aria-hidden="true" />
            {message}
          </div>
        )}

        {view === "dashboard" && (
          <Dashboard
            state={state}
            coverage={coverage}
            weakSubtopics={weakSubtopics}
            onStartPractice={() => setView("practice")}
            onStartMock={startMock}
            onOpenBank={() => setView("bank")}
          />
        )}
        {view === "course" && (
          <CoursePage
            chapters={course}
            sessions={state.sessions}
            search={courseSearch}
            setSearch={setCourseSearch}
            selectedSubchapterId={selectedCourseSubchapterId}
            setSelectedSubchapterId={setSelectedCourseSubchapterId}
            onPractice={(subchapter) => openCoursePractice(subchapter)}
            onWeakPractice={(subchapter) => openCoursePractice(subchapter, true)}
          />
        )}
        {view === "glossary" && (
          <GlossaryPage
            search={glossarySearch}
            setSearch={setGlossarySearch}
            category={glossaryCategory}
            setCategory={setGlossaryCategory}
          />
        )}
        {view === "bank" && (
          <QcmBank
            state={state}
            filters={bankFilters}
            setFilters={setBankFilters}
            search={bankSearch}
            setSearch={setBankSearch}
            status={bankStatus}
            setStatus={setBankStatus}
            issueType={bankIssueType}
            setIssueType={setBankIssueType}
            mistakeIds={mistakeIds}
            importText={importText}
            setImportText={setImportText}
            importFormat={importFormat}
            setImportFormat={setImportFormat}
            importReport={importReport}
            onValidate={validateImportText}
            onImport={importQuestions}
            onFile={handleImportFile}
          />
        )}
        {view === "practice" && (
          <Practice
            state={state}
            filters={practiceFilters}
            setFilters={setPracticeFilters}
            onStart={startPractice}
            onStartCoverage={startCoveragePractice}
          />
        )}
        {view === "mock" && (
          <MockExam
            state={state}
            filters={mockFilters}
            setFilters={setMockFilters}
            onStart={startMock}
          />
        )}
        {view === "mistakes" && (
          <Mistakes
            state={state}
            mistakeIds={mistakeIds}
            secondOrderMistakeIds={secondOrderMistakeIds}
            dismissedMistakeCount={dismissedMistakeIds.size}
            onStart={startMistakeReview}
            onStartSecondOrder={startSecondOrderMistakeReview}
            onDismiss={dismissMistakeQuestion}
            onRestoreDismissed={restoreDismissedMistakes}
            setBankFilters={setBankFilters}
            setView={setView}
          />
        )}
        {view === "session" && activeSession && (
          <SessionScreen
            session={activeSession}
            questions={state.questions}
            currentIndex={currentIndex}
            setCurrentIndex={(index) => {
              setCurrentIndex(index);
              setSelectedChoiceId(undefined);
            }}
            selectedChoiceId={selectedChoiceId}
            setSelectedChoiceId={setSelectedChoiceId}
            onAnswer={answerCurrentQuestion}
            onComplete={completeSession}
            onFlag={toggleFlag}
            onDismissMistake={dismissMistakeQuestion}
            dismissedMistakeIds={dismissedMistakeIds}
          />
        )}
        {view === "session" && !activeSession && <EmptyState title="No active session" body="Start a drill, mock exam, or mistake review." />}
        {view === "results" && resultSession && (
          <Results
            session={resultSession}
            questions={state.questions}
            onStartSecondOrderMistakes={startSecondOrderMistakeReview}
          />
        )}
        {view === "results" && !resultSession && <EmptyState title="No results yet" body="Complete a drill or mock exam to see section, topic, and subtopic results." />}
        {view === "examRules" && <ExamRules />}
        {view === "settings" && (
          <SettingsPage
            state={state}
            activeAccount={activeAccount}
            setSettings={setSettings}
            onExportState={() =>
              downloadText(`series3-qcm-${activeAccount.id}-state.json`, JSON.stringify(state, null, 2), "application/json")
            }
            onResetProgress={resetProgress}
            onResetAll={resetAllData}
          />
        )}
        {view === "about" && <About />}
      </main>
    </div>
  );
}

function pageTitle(view: View) {
  const titles: Record<View, string> = {
    dashboard: "Study Dashboard",
    course: "Series 3 Course",
    glossary: "Acronyms & Definitions",
    bank: "QCM Bank",
    practice: "Practice by Topic",
    mock: "Mock Exam",
    mistakes: "Review Mistakes",
    session: "Question Session",
    results: "Results",
    settings: "Settings",
    examRules: "Exam Rules",
    about: "About / Compliance"
  };
  return titles[view];
}

function formatQcmCount(count: number) {
  return `${count} ${count === 1 ? "QCM" : "QCMs"}`;
}

function AccountSwitcher({
  activeAccountId,
  onSwitch
}: {
  activeAccountId: AccountId;
  onSwitch: (accountId: AccountId) => void;
}) {
  return (
    <section className="account-switcher" aria-label="Account switcher">
      <div className="account-switcher-heading">
        <Users size={17} aria-hidden="true" />
        <span>Active account</span>
      </div>
      <label>
        <span className="sr-only">Active account</span>
        <select value={activeAccountId} onChange={(event) => onSwitch(event.target.value as AccountId)}>
          {USER_ACCOUNTS.map((account) => (
            <option key={account.id} value={account.id}>
              {account.displayName}
            </option>
          ))}
        </select>
      </label>
    </section>
  );
}

function Dashboard({
  state,
  coverage,
  weakSubtopics,
  onStartPractice,
  onStartMock,
  onOpenBank
}: {
  state: AppState;
  coverage: ReturnType<typeof buildCoverageReport>;
  weakSubtopics: ReturnType<typeof getWeakSubtopics>;
  onStartPractice: () => void;
  onStartMock: () => void;
  onOpenBank: () => void;
}) {
  const totalAnswers = state.sessions.reduce((sum, session) => sum + session.answers.length, 0);
  const completed = state.sessions.filter((session) => session.status === "completed").length;
  const activeQuestions = state.questions.filter((question) => question.active).length;
  const quality = qualitySummary(state.questions);
  const sectionRows = coverage.sections;

  return (
    <section className="content-grid">
      <div className="stats-grid full">
        <Metric label="Active QCMs" value={activeQuestions} detail="sample + imported" />
        <Metric label="Answered" value={totalAnswers} detail="all sessions" />
        <Metric label="Completed sessions" value={completed} detail="drills and exams" />
        <Metric label="Coverage gaps" value={coverage.gaps.length} detail="empty subtopics" />
      </div>

      <div className="stats-grid full">
        <Metric label="Verified" value={quality.verified} detail="default drill/mock pool" />
        <Metric label="Needs review" value={quality.needs_review} detail="optional study pool" />
        <Metric label="Rejected" value={quality.rejected} detail="blocked from sessions" />
        <Metric label="Quality coverage" value={`${Math.round((quality.verified / Math.max(1, activeQuestions)) * 100)}%`} detail="active bank verified" />
      </div>

      <div className="panel span-7">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Progress by section</p>
            <h2>Market Knowledge and U.S. Regulations</h2>
          </div>
          <button className="secondary-button" onClick={onOpenBank}>
            <Database size={16} aria-hidden="true" />
            Open bank
          </button>
        </div>
        <div className="section-bars">
          {sectionRows.map((node) => (
            <div className="section-row" key={node.sectionId}>
              <div>
                <strong>{node.title}</strong>
                <span>{node.total} questions, {node.answered} answers</span>
              </div>
              <ProgressBar value={node.accuracy ?? 0} muted={node.accuracy === null} />
              <strong>{node.accuracy === null ? "No data" : `${node.accuracy}%`}</strong>
            </div>
          ))}
        </div>
      </div>

      <div className="panel span-5">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Weak-topic priority</p>
            <h2>Next drills</h2>
          </div>
        </div>
        <div className="weak-list">
          {weakSubtopics.map((node) => (
            <div className="weak-item" key={`${node.topicId}-${node.subtopicId}`}>
              <span>{node.label}</span>
              <strong>{node.accuracy === null ? "new" : `${node.accuracy}%`}</strong>
            </div>
          ))}
          {weakSubtopics.length === 0 && <p className="muted">Answer questions to generate weak-topic detection.</p>}
        </div>
      </div>

      <div className="panel span-7">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Recent sessions</p>
            <h2>Activity</h2>
          </div>
        </div>
        <div className="table">
          {[...state.sessions].reverse().slice(0, 6).map((session) => (
            <div className="table-row" key={session.id}>
              <span>{session.title}</span>
              <span>{session.type}</span>
              <span>{session.answers.length}/{session.questions.length}</span>
              <span>{session.status.replace("_", " ")}</span>
            </div>
          ))}
          {state.sessions.length === 0 && <p className="muted">No sessions yet.</p>}
        </div>
      </div>

      <div className="panel span-5">
        <div className="action-stack">
          <button className="primary-button large" onClick={onStartPractice}>
            <Target size={18} aria-hidden="true" />
            Practice by topic
          </button>
          <button className="secondary-button large" onClick={onStartMock}>
            <Timer size={18} aria-hidden="true" />
            Start 120-question mock
          </button>
        </div>
      </div>
    </section>
  );
}

function DisplayText({ value, className }: { value?: string; className?: string }) {
  const blocks = parseDisplayText(value);
  if (blocks.length === 0) return null;

  return (
    <div className={["display-text", className].filter(Boolean).join(" ")}>
      {blocks.map((block, index) => {
        if (block.type === "paragraph") {
          return (
            <p className="display-text-paragraph" key={`paragraph-${index}`}>
              {block.text}
            </p>
          );
        }

        const [header, ...rows] = block.rows;
        return (
          <div className="display-table-wrap" key={`table-${index}`}>
            <table className="display-table">
              <thead>
                <tr>
                  {header.map((cell, cellIndex) => (
                    <th key={`${cell}-${cellIndex}`}>{cell}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={`row-${rowIndex}`}>
                    {row.map((cell, cellIndex) => (
                      <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

function CoursePage({
  chapters,
  sessions,
  search,
  setSearch,
  selectedSubchapterId,
  setSelectedSubchapterId,
  onPractice,
  onWeakPractice
}: {
  chapters: CourseChapter[];
  sessions: Session[];
  search: string;
  setSearch: (search: string) => void;
  selectedSubchapterId?: string;
  setSelectedSubchapterId: (id: string) => void;
  onPractice: (subchapter: CourseSubchapter) => void;
  onWeakPractice: (subchapter: CourseSubchapter) => void;
}) {
  const [expandedCourseVisual, setExpandedCourseVisual] = useState<string | null>(null);
  const matchingSubchapters = useMemo(() => searchCourse(chapters, search), [chapters, search]);
  const allSubchapters = useMemo(() => searchCourse(chapters, ""), [chapters]);
  const selected =
    allSubchapters.find((subchapter) => subchapter.id === selectedSubchapterId) ??
    matchingSubchapters[0] ??
    firstCourseSubchapter(chapters);
  const selectedProgress = selected ? courseProgress(selected, sessions) : undefined;
  const totalLinked = allSubchapters.reduce((sum, subchapter) => sum + subchapter.linkedQuestions.length, 0);
  const gapCount = allSubchapters.filter((subchapter) => subchapter.linkedQuestions.length === 0).length;
  const rolesVisualSubchapter =
    allSubchapters.find((subchapter) => subchapter.id === FUTURES_ROLES_VISUAL_SUBCHAPTER_ID) ??
    allSubchapters.find((subchapter) => subchapter.sectionId === "us_regulations");
  const shouldShowCourseVisuals =
    Boolean(selected) &&
    ((selected.sectionId === "us_regulations" &&
      (selected.id === FUTURES_ROLES_VISUAL_SUBCHAPTER_ID || FUTURES_ROLES_VISUAL_SUBTOPICS.has(selected.subtopicId))) ||
      (selected.topicId === "orders-accounts-analysis" && ORDER_TYPES_VISUAL_SUBTOPICS.has(selected.subtopicId)) ||
      (selected.topicId === "options-futures" && OPTION_STRATEGIES_VISUAL_SUBTOPICS.has(selected.subtopicId)) ||
      (selected.topicId === "margins-settlement-delivery" && OPTION_STRATEGIES_VISUAL_SUBTOPICS.has(selected.subtopicId)));
  const courseVisualLibrary = [
    {
      id: "roles",
      title: "Key roles in the futures industry",
      src: "course/futures-industry-roles.png",
      alt: "Key roles in the futures industry: customer, AP, IB, FCM, CTA, CPO, principal, exchange, CFTC, and NFA relationships.",
      caption: "Use this visual before drilling AP, IB, FCM, CTA, CPO, principal, exchange, CFTC, and NFA questions.",
      notesTitle: "What it represents",
      notes: [
        "Customer routes: directly through an FCM, or through an IB that introduces the account to an FCM.",
        "Advisory routes: a CTA gives trading advice; a CPO pools investor money and operates a commodity pool.",
        "Oversight routes: CFTC is the federal regulator; NFA is the industry self-regulatory organization."
      ]
    },
    {
      id: "day-count",
      title: "Series 3 day-count rules cheat sheet",
      src: "course/day-count-rules-cheat-sheet.png",
      alt: "Series 3 day-count rules cheat sheet for U.S. regulations, NFA, and CFTC timing rules.",
      caption: "Use this sheet to separate calendar-day, business-day, filing, disclosure, reporting, and exam timing rules.",
      notesTitle: "How to use it",
      notes: [
        "Memorize the exact day count first, then check whether the rule uses calendar days or business days.",
        "Pay special attention to 17 business days, 21 calendar days, 30 calendar days, 60 days, and 90 days.",
        "Tie each deadline to its context: registration, disclosure, reporting, disciplinary procedure, or exam rules."
      ]
    },
    {
      id: "order-types",
      title: "Series 3 types of orders cheat sheet",
      src: "course/types-of-orders-cheat-sheet.png",
      alt: "Series 3 types of orders cheat sheet for futures and options on futures.",
      caption: "Use this sheet to compare execution orders, trigger orders, time instructions, linked orders, and common order traps.",
      notesTitle: "Order logic anchors",
      notes: [
        "Market orders prioritize execution; limit orders prioritize price.",
        "Buy stops and sell limits sit above the market; buy limits and sell stops sit below the market.",
        "IOC can partially fill; FOK must be filled immediately in full or canceled."
      ]
    },
    {
      id: "options-strategies",
      title: "Series 3 options strategies and calculations cheat sheet",
      src: "course/options-strategies-calculations-cheat-sheet.png",
      alt: "Series 3 options strategies and calculations cheat sheet for futures options.",
      caption: "Use this sheet to review calls, puts, breakevens, profit/loss formulas, spreads, straddles, strangles, and risk logic.",
      notesTitle: "Options formula anchors",
      notes: [
        "Call breakeven is strike plus premium; put breakeven is strike minus premium.",
        "Long-option risk is limited to premium paid; naked short-option risk can be substantial or unlimited.",
        "Debit strategies pay net premium; credit strategies receive net premium."
      ]
    }
  ];
  const courseVisuals = shouldShowCourseVisuals ? courseVisualLibrary : [];
  const expandedVisual = courseVisuals.find((visual) => visual.id === expandedCourseVisual);
  const displayedByChapter = chapters
    .map((chapter) => ({
      ...chapter,
      subchapters: chapter.subchapters.filter((subchapter) => matchingSubchapters.some((match) => match.id === subchapter.id))
    }))
    .filter((chapter) => chapter.subchapters.length > 0);

  useEffect(() => {
    if (!expandedCourseVisual) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setExpandedCourseVisual(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("modal-open");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [expandedCourseVisual]);

  if (!selected || !selectedProgress) {
    return <EmptyState title="No course content" body="The course could not be generated from the current taxonomy." />;
  }

  return (
    <section className="course-layout">
      <aside className="course-sidebar panel">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Course library</p>
            <h2>Chapters</h2>
          </div>
        </div>
        <label className="course-search">
          Search course
          <span className="input-with-icon">
            <Search size={16} aria-hidden="true" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="basis, margin, CTA..." />
          </span>
        </label>
        <div className="course-summary">
          <Metric label="Subchapters" value={allSubchapters.length} detail="section/topic/subtopic" />
          <Metric label="Verified QCM links" value={totalLinked} detail="rejected excluded" />
          <Metric label="Coverage gaps" value={gapCount} detail="need more QCMs" />
        </div>
        {rolesVisualSubchapter && (
          <button
            className="course-feature-card"
            type="button"
            onClick={() => {
              setSearch("");
              setSelectedSubchapterId(rolesVisualSubchapter.id);
            }}
            aria-label="Open course visuals: key roles, day-count rules, order types, and options strategies"
          >
            <span className="course-feature-icon">
              <BookOpen size={17} aria-hidden="true" />
            </span>
            <span className="course-feature-card-content">
              <span className="course-feature-copy">
                <strong>Course visuals</strong>
                <small>Key roles, day counts, orders, and options</small>
              </span>
              <span className="course-feature-thumbnails" aria-hidden="true">
                {courseVisualLibrary.map((visual) => (
                  <img key={visual.id} src={visual.src} alt="" />
                ))}
              </span>
            </span>
          </button>
        )}
        {search && <p className="muted">{matchingSubchapters.length} matching subchapters</p>}
        <nav className="course-tree" aria-label="Course chapter navigation">
          {displayedByChapter.map((chapter) => (
            <details key={chapter.id} open={Boolean(search) || chapter.subchapters.some((subchapter) => subchapter.id === selected.id)}>
              <summary>
                <span>{getSection(chapter.sectionId).shortTitle}</span>
                {chapter.title}
              </summary>
              <div className="course-subchapter-list">
                {chapter.subchapters.map((subchapter) => {
                  const progress = courseProgress(subchapter, sessions);
                  return (
                    <button
                      key={subchapter.id}
                      className={selected.id === subchapter.id ? "course-subchapter-button active" : "course-subchapter-button"}
                      onClick={() => setSelectedSubchapterId(subchapter.id)}
                    >
                      <span>{subchapter.title}</span>
                      <small>
                        {progress.linkedCount} QCMs
                        {progress.accuracy === null ? "" : `, ${progress.accuracy}%`}
                      </small>
                    </button>
                  );
                })}
              </div>
            </details>
          ))}
        </nav>
      </aside>

      <article className="course-reader panel">
        <div className="course-hero">
          <div>
            <p className="eyebrow">
              {getSection(selected.sectionId).title} / {topicLabel(selected.topicId)}
            </p>
            <h2>{selected.title}</h2>
            <p>{selected.overview}</p>
          </div>
          <div className="course-progress-card">
            <strong>{selectedProgress.linkedCount}</strong>
            <span>verified supporting QCMs</span>
            <ProgressBar
              value={selectedProgress.linkedCount === 0 ? 0 : (selectedProgress.answeredCount / selectedProgress.linkedCount) * 100}
              muted={selectedProgress.answeredCount === 0}
            />
            <small>
              {selectedProgress.answeredCount}/{selectedProgress.linkedCount} practiced
              {selectedProgress.accuracy === null ? "" : `, ${selectedProgress.accuracy}% latest accuracy`}
            </small>
          </div>
        </div>

        <div className="course-actions">
          <button className="primary-button" onClick={() => onPractice(selected)} disabled={selectedProgress.linkedCount === 0}>
            <Target size={16} aria-hidden="true" />
            Practice this topic
          </button>
          <button className="secondary-button" onClick={() => onWeakPractice(selected)} disabled={selectedProgress.answeredCount === 0}>
            <RotateCcw size={16} aria-hidden="true" />
            Review weak questions for this topic
          </button>
        </div>

        {courseVisuals.length > 0 && (
          <section className="course-section course-visual-section" aria-labelledby="course-visuals-title">
            <div>
              <p className="eyebrow">Course visuals</p>
              <h3 id="course-visuals-title">Course memory sheets</h3>
              <p>
                These visuals sit together for fast review: roles in the futures ecosystem, high-yield day-count
                deadlines, order instructions, and options strategies tested in market-knowledge questions.
              </p>
            </div>
            <div className="course-visual-grid">
              {courseVisuals.map((visual) => (
                <figure className="course-visual" key={visual.id}>
                  <div className="course-visual-toolbar">
                    <button
                      className="secondary-button"
                      type="button"
                      onClick={() => setExpandedCourseVisual(visual.id)}
                      aria-label={`Enlarge ${visual.title}`}
                    >
                      <Maximize2 size={16} aria-hidden="true" />
                      Enlarge
                    </button>
                  </div>
                  <img src={visual.src} alt={visual.alt} />
                  <figcaption>{visual.caption}</figcaption>
                </figure>
              ))}
            </div>
            <div className="course-visual-notes-grid">
              {courseVisuals.map((visual) => (
                <div className="course-visual-notes" key={`${visual.id}-notes`}>
                  <strong>{visual.notesTitle}</strong>
                  <ul>
                    {visual.notes.map((note) => (
                      <li key={note}>{note}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {expandedVisual && (
              <div
                className="image-lightbox"
                role="dialog"
                aria-modal="true"
                aria-label={`${expandedVisual.title} enlarged`}
                onClick={() => setExpandedCourseVisual(null)}
              >
                <div className="image-lightbox-content" onClick={(event) => event.stopPropagation()}>
                  <div className="image-lightbox-toolbar">
                    <strong>{expandedVisual.title}</strong>
                    <button
                      className="secondary-button"
                      type="button"
                      onClick={() => setExpandedCourseVisual(null)}
                      aria-label="Close enlarged visual"
                    >
                      <X size={16} aria-hidden="true" />
                      Close
                    </button>
                  </div>
                  <div className="image-lightbox-scroll">
                    <img src={expandedVisual.src} alt={expandedVisual.alt} />
                  </div>
                </div>
              </div>
            )}
          </section>
        )}

        {selected.coverageNote && (
          <div className="course-callout amber">
            <AlertTriangle size={18} aria-hidden="true" />
            <span>{selected.coverageNote}</span>
          </div>
        )}

        <div className="course-section">
          <h3>Key Concepts</h3>
          <ul className="course-list">
            {selected.keyPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        </div>

        <div className="course-section">
          <h3>Definitions to Memorize</h3>
          <div className="definition-grid">
            {selected.definitions.map((definition) => (
              <div className="definition-card" key={definition.term}>
                <strong>{definition.term}</strong>
                <span>{definition.definition}</span>
              </div>
            ))}
          </div>
        </div>

        {selected.formulas.length > 0 && (
          <div className="course-section">
            <h3>Formulas</h3>
            <div className="course-card-grid">
              {selected.formulas.map((formula) => (
                <div className="formula-card" key={`${formula.label}-${formula.expression}`}>
                  <strong>{formula.label}</strong>
                  <code>{formula.expression}</code>
                  <span>{formula.explanation}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="course-section">
          <h3>Worked Examples</h3>
          <div className="course-card-grid">
            {selected.examples.map((example) => (
              <div className="example-card" key={example.title}>
                <strong>{example.title}</strong>
                <p>{example.scenario}</p>
                <ol>
                  {example.steps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
                <span className="example-answer">{example.answer}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="course-section">
          <h3>Common QCM Traps</h3>
          <div className="course-card-grid">
            {selected.traps.map((trap) => (
              <div className="trap-card" key={trap.title}>
                <strong>{trap.title}</strong>
                <span>{trap.explanation}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="course-section recap">
          <h3>What to Remember for the Exam</h3>
          <ul className="course-list">
            {selected.examTakeaways.map((takeaway) => (
              <li key={takeaway}>{takeaway}</li>
            ))}
          </ul>
        </div>

        <div className="course-section">
          <h3>Linked Verified QCMs</h3>
          <div className="tag-row">
            {selected.linkedQuestions.slice(0, 12).map((reference) => (
              <span className="pill blue" key={reference.questionId}>
                {reference.questionId}
              </span>
            ))}
            {selected.linkedQuestions.length > 12 && <span className="pill">+{selected.linkedQuestions.length - 12} more</span>}
            {selected.linkedQuestions.length === 0 && <span className="muted">No verified QCM linked yet.</span>}
          </div>
        </div>
      </article>
    </section>
  );
}

function GlossaryPage({
  search,
  setSearch,
  category,
  setCategory
}: {
  search: string;
  setSearch: (search: string) => void;
  category: GlossaryCategory | "all";
  setCategory: (category: GlossaryCategory | "all") => void;
}) {
  const entries = useMemo(() => searchGlossaryEntries(glossaryEntries, search, category), [category, search]);
  const acronymCount = glossaryEntries.filter((entry) => entry.category === "acronym").length;
  const marketCount = glossaryEntries.filter((entry) => entry.sectionId === "market_knowledge").length;
  const regulatoryCount = glossaryEntries.filter((entry) => entry.sectionId === "us_regulations").length;
  const categoryOptions = Object.entries(glossaryCategoryLabels) as Array<[GlossaryCategory | "all", string]>;

  return (
    <section className="content-grid">
      <div className="panel full glossary-hero">
        <div>
          <p className="eyebrow">Reference</p>
          <h2>Acronyms and key definitions</h2>
          <p className="panel-explainer">
            A concise glossary for the Series 3 app: each entry states what the term represents, how to interpret it,
            and the exam trap to remember while studying.
          </p>
        </div>
        <div className="stats-grid glossary-stats">
          <Metric label="Glossary entries" value={glossaryEntries.length} detail="acronyms + definitions" />
          <Metric label="Acronyms" value={acronymCount} detail="quick decoding" />
          <Metric label="Market terms" value={marketCount} detail="Market Knowledge" />
          <Metric label="Regulatory terms" value={regulatoryCount} detail="U.S. Regulations" />
        </div>
      </div>

      <div className="panel span-4 glossary-controls">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Find a term</p>
            <h2>Search and filter</h2>
          </div>
        </div>
        <label className="course-search">
          Search glossary
          <span className="input-with-icon">
            <Search size={16} aria-hidden="true" />
            <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="CFTC, basis, margin..." />
          </span>
        </label>
        <label>
          Category
          <select value={category} onChange={(event) => setCategory(event.target.value as GlossaryCategory | "all")}>
            {categoryOptions.map(([value, label]) => (
              <option value={value} key={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
        <div className="glossary-chip-grid" aria-label="Glossary shortcuts">
          {categoryOptions.map(([value, label]) => (
            <button
              key={value}
              className={category === value ? "glossary-chip active" : "glossary-chip"}
              onClick={() => setCategory(value)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div className="panel span-8">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Current scope</p>
            <h2>{entries.length} matching entries</h2>
          </div>
        </div>
        <div className="glossary-list">
          {entries.map((entry) => (
            <article className="glossary-entry" key={entry.id}>
              <div className="glossary-entry-header">
                <div>
                  <h3>{entry.term}</h3>
                  {entry.expanded && <span>{entry.expanded}</span>}
                </div>
                <div className="tag-row">
                  <span className="pill blue">{glossaryCategoryLabels[entry.category]}</span>
                  {entry.sectionId && <span className="pill">{getSection(entry.sectionId).shortTitle}</span>}
                </div>
              </div>
              <dl className="glossary-definition">
                <div>
                  <dt>Represents</dt>
                  <dd>{entry.represents}</dd>
                </div>
                <div>
                  <dt>Concise explanation</dt>
                  <dd>{entry.conciseExplanation}</dd>
                </div>
                {entry.examTip && (
                  <div>
                    <dt>Exam note</dt>
                    <dd>{entry.examTip}</dd>
                  </div>
                )}
              </dl>
            </article>
          ))}
          {entries.length === 0 && <EmptyState title="No glossary match" body="Try a different term or switch back to all categories." />}
        </div>
      </div>
    </section>
  );
}

function QcmBank({
  state,
  filters,
  setFilters,
  search,
  setSearch,
  status,
  setStatus,
  issueType,
  setIssueType,
  mistakeIds,
  importText,
  setImportText,
  importFormat,
  setImportFormat,
  importReport,
  onValidate,
  onImport,
  onFile
}: {
  state: AppState;
  filters: SessionFilters;
  setFilters: (filters: SessionFilters) => void;
  search: string;
  setSearch: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
  issueType: IssueType | "all";
  setIssueType: (value: IssueType | "all") => void;
  mistakeIds: Set<string>;
  importText: string;
  setImportText: (value: string) => void;
  importFormat: "jsonl" | "csv";
  setImportFormat: (value: "jsonl" | "csv") => void;
  importReport: ImportValidationReport | null;
  onValidate: () => void;
  onImport: () => void;
  onFile: (file?: File) => void;
}) {
  const scopedQuestions = useMemo(
    () => filterQuestionPool(state.questions, filters).sort((a, b) => questionSourcePriority(b) - questionSourcePriority(a)),
    [filters, state.questions]
  );

  const questions = useMemo(() => {
    return scopedQuestions.filter((question) => {
        const text = `${normalizeDisplayText(question.stem)} ${topicLabel(question.topicId)} ${subtopicLabel(question.topicId, question.subtopicId)}`.toLowerCase();
        if (search && !text.includes(search.toLowerCase())) return false;
        if (status === "mistakes" && !mistakeIds.has(question.id)) return false;
        if (status === "unanswered") {
          const answered = state.sessions.some((session) => session.answers.some((answer) => answer.questionId === question.id));
          if (answered) return false;
        }
        if (issueType !== "all" && !question.issueTypes?.includes(issueType)) return false;
        return true;
      });
  }, [issueType, mistakeIds, scopedQuestions, search, state.sessions, status]);

  const scopedCoverage = useMemo(() => buildCoverageReport(scopedQuestions, state.sessions), [scopedQuestions, state.sessions]);
  const scopedQuestionIds = useMemo(() => new Set(scopedQuestions.map((question) => question.id)), [scopedQuestions]);
  const distribution = auditCorrectPositionDistribution(
    state.sessions.flatMap((session) => session.questions.filter((question) => scopedQuestionIds.has(question.questionId)))
  );
  const bankValidation = validateQuestionBank(scopedQuestions);

  return (
    <section className="content-grid">
      <div className="panel span-4">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Browse</p>
            <h2>Section to subtopic</h2>
          </div>
        </div>
        <ScopeSelector filters={filters} setFilters={setFilters} includeAllSections includeAllTopics includeAllSubtopics />
        <div className="filter-stack">
          <SourceBankSelector filters={filters} setFilters={setFilters} />
          <QualitySelector filters={filters} setFilters={setFilters} allowRejected />
          <label>
            Difficulty
            <select
              value={filters.difficulty ?? "mixed"}
              onChange={(event) => setFilters({ ...filters, difficulty: normalizeDifficultyFilter(event.target.value) })}
            >
              <option value="mixed">Mixed</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
          <label>
            Status
            <select value={status} onChange={(event) => setStatus(event.target.value)}>
              <option value="all">All active questions</option>
              <option value="mistakes">Mistakes</option>
              <option value="unanswered">Never answered</option>
            </select>
          </label>
          <label>
            Issue type
            <select value={issueType} onChange={(event) => setIssueType(event.target.value as IssueType | "all")}>
              <option value="all">All issue types</option>
              {ISSUE_TYPE_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {ISSUE_TYPE_LABELS[option]}
                </option>
              ))}
            </select>
          </label>
          {filters.sectionId === "us_regulations" && (
            <label>
              Regulatory focus
              <select
                value={filters.regulatoryFocus ?? "all"}
                onChange={(event) => setFilters({ ...filters, regulatoryFocus: event.target.value })}
              >
                {REGULATORY_FOCUS_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          )}
          <label>
            Search
            <div className="input-with-icon">
              <Search size={16} aria-hidden="true" />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="basis, CTA, margin..." />
            </div>
          </label>
        </div>
      </div>

      {filters.sectionId === "us_regulations" && (
        <RegulatoryOverview coverage={scopedCoverage} questions={scopedQuestions} visibleQuestions={questions} />
      )}

      <div className="panel span-8">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Question bank</p>
            <h2>{questions.length} QCMs in current scope</h2>
          </div>
          <div className="button-row">
            <button className="secondary-button" onClick={() => downloadText("series3-current-scope.jsonl", questionsToJsonl(questions), "application/x-ndjson")}>
              <Download size={16} aria-hidden="true" />
              JSONL
            </button>
            <button className="secondary-button" onClick={() => downloadText("series3-current-scope.csv", questionsToCsv(questions), "text/csv")}>
              <Download size={16} aria-hidden="true" />
              CSV
            </button>
          </div>
        </div>
        <div className="question-list">
          {questions.map((question) => (
            <article className="question-card" key={question.id}>
              <div className="question-card-header">
                <span className={`pill ${question.sectionId === "market_knowledge" ? "blue" : "green"}`}>{getSection(question.sectionId).shortTitle}</span>
                <span className="pill">{question.difficulty}</span>
                <span className="pill">{questionSourceBankLabel(question)}</span>
                <span className={`pill ${inferredQualityStatus(question) === "verified" ? "green" : inferredQualityStatus(question) === "rejected" ? "red" : "amber"}`}>
                  {inferredQualityStatus(question).replace("_", " ")}
                </span>
                {question.shuffleDisabled && <span className="pill amber">fixed order</span>}
                {question.sourceQuestionNumber && <span className="pill">PDF #{question.sourceQuestionNumber}</span>}
                {question.issueTypes?.map((issue) => (
                  <span className="pill amber" key={issue}>{ISSUE_TYPE_LABELS[issue]}</span>
                ))}
              </div>
              <DisplayText value={question.stem} className="question-title" />
              <p className="muted">{topicLabel(question.topicId)} / {subtopicLabel(question.topicId, question.subtopicId)}</p>
              {question.qualityNotes && <DisplayText value={question.qualityNotes} className="muted" />}
              <details>
                <summary>Show answer and rationales</summary>
                <ul className="rationale-list">
                  {question.choices.map((choice) => (
                    <li key={choice.id}>
                      <strong>{choice.isCorrect ? "Correct" : "Wrong"}: {normalizeDisplayText(choice.text)}</strong>
                      <DisplayText value={choice.rationale} />
                    </li>
                  ))}
                </ul>
                <DisplayText value={question.explanation} />
              </details>
            </article>
          ))}
          {questions.length === 0 && <EmptyState title="No QCMs in this scope" body="Change filters or import a question bank." />}
        </div>
      </div>

      <div className="panel span-8">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Coverage matrix</p>
            <h2>Section, topic, and subtopic counts</h2>
          </div>
        </div>
        <CoverageMatrix coverage={scopedCoverage} />
      </div>

      <div className="panel span-4">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Validation</p>
            <h2>Quality checks</h2>
          </div>
        </div>
        <Metric label="Valid questions" value={bankValidation.validRows} detail={`${bankValidation.issues.length} issue(s)`} />
        <Metric label="Answer distribution" value={distribution.passed ? "Pass" : "Review"} detail={`${Math.round(distribution.maxDeviationPercentagePoints * 10) / 10} pp max deviation`} />
        <div className="mini-bars">
          {Object.entries(distribution.counts).map(([label, count]) => (
            <span key={label}>{label}: {count}</span>
          ))}
        </div>
        <IssueList issues={bankValidation.issues.slice(0, 6)} />
      </div>

      <div className="panel full">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Import</p>
            <h2>JSONL or CSV question bank</h2>
          </div>
          <div className="button-row">
            <button className="secondary-button" onClick={() => setImportText(questionBankTemplateJsonl())}>
              Template
            </button>
            <label className="file-button">
              <Upload size={16} aria-hidden="true" />
              File
              <input type="file" accept=".jsonl,.csv,.txt" onChange={(event) => onFile(event.target.files?.[0])} />
            </label>
          </div>
        </div>
        <div className="import-grid">
          <div className="filter-stack">
            <label>
              Format
              <select value={importFormat} onChange={(event) => setImportFormat(event.target.value as "jsonl" | "csv")}>
                <option value="jsonl">JSONL</option>
                <option value="csv">CSV</option>
              </select>
            </label>
            <div className="button-row">
              <button className="secondary-button" onClick={onValidate}>Validate</button>
              <button className="primary-button" onClick={onImport}>Import valid rows</button>
            </div>
            {importReport && (
              <div className="report-box">
                <strong>{importReport.validRows}/{importReport.totalRows} valid rows</strong>
                <IssueList issues={importReport.issues.slice(0, 10)} />
              </div>
            )}
          </div>
          <textarea
            value={importText}
            onChange={(event) => setImportText(event.target.value)}
            spellCheck={false}
            placeholder="Paste JSONL or CSV here."
          />
        </div>
      </div>
    </section>
  );
}

function RegulatoryOverview({
  coverage,
  questions,
  visibleQuestions
}: {
  coverage: ReturnType<typeof buildCoverageReport>;
  questions: Question[];
  visibleQuestions: Question[];
}) {
  const regulatoryQuestions = questions.filter((question) => question.sectionId === "us_regulations" && question.active);
  const rewritten = regulatoryQuestions.filter((question) => question.sourceType === "rewritten").length;
  const unanswered = coverage.subtopics.filter(
    (node) => node.sectionId === "us_regulations" && node.total > 0 && node.answered === 0
  ).length;
  const needsReview = regulatoryQuestions.filter((question) => inferredQualityStatus(question) === "needs_review").length;
  const focusCounts = REGULATORY_FOCUS_OPTIONS.filter((option) => option.value !== "all").map((option) => ({
    ...option,
    count: regulatoryQuestions.filter((question) => question.regulatoryFocus?.includes(option.value)).length
  }));

  return (
    <div className="panel full regulatory-overview">
      <div className="panel-heading">
        <div>
          <p className="eyebrow">Regulatory overview</p>
          <h2>Rebuilt U.S. Regulations bank</h2>
        </div>
      </div>
      <p className="panel-explainer">
        The regulatory bank now separates the original seeded QCMs from rewritten study questions derived
        from the concepts observed in the scanned S3-Regulatory PDF. It does not publish OCR verbatim
        questions; each rewritten item has shuffling-safe answer choices and per-option rationales.
      </p>
      <div className="stats-grid regulatory-stats">
        <Metric label="Regulatory QCMs" value={regulatoryQuestions.length} detail={`${visibleQuestions.length} visible after search/status`} />
        <Metric label="Rewritten" value={rewritten} detail="public-safe originals" />
        <Metric label="Unanswered subtopics" value={unanswered} detail="with available QCMs" />
        <Metric label="Needs review" value={needsReview} detail="OCR/import status" />
      </div>
      <div className="focus-chip-grid">
        {focusCounts.map((focus) => (
          <span key={focus.value}>
            <strong>{focus.count}</strong>
            {focus.label}
          </span>
        ))}
      </div>
    </div>
  );
}

function Practice({
  state,
  filters,
  setFilters,
  onStart,
  onStartCoverage
}: {
  state: AppState;
  filters: SessionFilters;
  setFilters: (filters: SessionFilters) => void;
  onStart: () => void;
  onStartCoverage: () => void;
}) {
  const matching = useMemo(
    () => filterQuestionPool(state.questions, filters).sort((a, b) => questionSourcePriority(b) - questionSourcePriority(a)),
    [filters, state.questions]
  );
  const answeredQuestionIds = useMemo(
    () => new Set(state.sessions.flatMap((session) => session.answers.map((answer) => answer.questionId))),
    [state.sessions]
  );
  const unseenMatching = useMemo(
    () => matching.filter((question) => !answeredQuestionIds.has(question.id) && inferredQualityStatus(question) !== "rejected"),
    [answeredQuestionIds, matching]
  );

  return (
    <section className="content-grid">
      <div className="panel span-5">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Drill builder</p>
            <h2>Practice by section, topic, subtopic</h2>
          </div>
        </div>
        <ScopeSelector filters={filters} setFilters={setFilters} includeAllSections includeAllTopics includeAllSubtopics />
        <div className="filter-stack">
          <SourceBankSelector filters={filters} setFilters={setFilters} />
          <QualitySelector filters={filters} setFilters={setFilters} />
          <label>
            Difficulty
            <select
              value={filters.difficulty ?? "mixed"}
              onChange={(event) => setFilters({ ...filters, difficulty: normalizeDifficultyFilter(event.target.value) })}
            >
              <option value="mixed">Mixed</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
          {filters.sectionId === "us_regulations" && (
            <label>
              Regulatory drill focus
              <select
                value={filters.regulatoryFocus ?? "all"}
                onChange={(event) => setFilters({ ...filters, regulatoryFocus: event.target.value })}
              >
                {REGULATORY_FOCUS_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
          )}
          <label>
            Question count
            <input
              type="number"
              min="1"
              max="60"
              value={filters.questionCount ?? state.settings.defaultDrillSize}
              onChange={(event) => setFilters({ ...filters, questionCount: Number(event.target.value) })}
            />
          </label>
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={Boolean(filters.prioritizeWeak)}
              onChange={(event) => setFilters({ ...filters, prioritizeWeak: event.target.checked })}
            />
            Prioritize weak subtopics
          </label>
        </div>
        {filters.sectionId === "us_regulations" && (
          <div className="quick-focus-grid" aria-label="Regulatory quick drill presets">
            <button className="secondary-button" onClick={() => setFilters({ ...filters, regulatoryFocus: "high-yield", prioritizeWeak: true })}>
              High-yield rules
            </button>
            <button className="secondary-button" onClick={() => setFilters({ ...filters, regulatoryFocus: "registration" })}>
              Registration
            </button>
            <button className="secondary-button" onClick={() => setFilters({ ...filters, regulatoryFocus: "communications" })}>
              Promotional material
            </button>
            <button className="secondary-button" onClick={() => setFilters({ ...filters, regulatoryFocus: "arbitration" })}>
              Arbitration
            </button>
          </div>
        )}
        <button className="primary-button large" onClick={onStart}>
          <Play size={18} aria-hidden="true" />
          Start drill
        </button>
        <button className="secondary-button large" onClick={onStartCoverage}>
          <Target size={18} aria-hidden="true" />
          Start coverage drill
        </button>
      </div>
      <div className="panel span-7">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Current scope</p>
            <h2>{matching.length} matching QCMs</h2>
          </div>
          <span className="pill green">{unseenMatching.length} unseen</span>
        </div>
        <div className="question-list compact">
          {matching.slice(0, 8).map((question) => (
            <article className="question-card" key={question.id}>
              <span className="pill">{question.difficulty}</span>
              <span className="pill">{questionSourceBankLabel(question)}</span>
              <span className={`pill ${inferredQualityStatus(question) === "verified" ? "green" : "amber"}`}>
                {inferredQualityStatus(question).replace("_", " ")}
              </span>
              <DisplayText value={question.stem} className="question-title" />
              <p className="muted">{topicLabel(question.topicId)} / {subtopicLabel(question.topicId, question.subtopicId)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MockExam({
  state,
  filters,
  setFilters,
  onStart
}: {
  state: AppState;
  filters: SessionFilters;
  setFilters: (filters: SessionFilters) => void;
  onStart: () => void;
}) {
  const mockPool = useMemo(() => filterQuestionPool(state.questions, filters), [filters, state.questions]);
  const coverage = useMemo(() => buildCoverageReport(mockPool, state.sessions), [mockPool, state.sessions]);
  const unique = new Set(mockPool.map((question) => question.id)).size;
  const sections = new Set(mockPool.map((question) => question.sectionId));
  const fullMockReady = sections.has("market_knowledge") && sections.has("us_regulations");
  const sourceLabel = SOURCE_BANK_OPTIONS.find((option) => option.value === (filters.sourceBank ?? "s3-imported"))?.label ?? "Selected bank";

  return (
    <section className="content-grid">
      <div className="panel span-5">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Exam simulation</p>
            <h2>120 scored questions, 150 minutes</h2>
          </div>
        </div>
        <div className="filter-stack mock-filter-stack">
          <SourceBankSelector filters={filters} setFilters={setFilters} scopeOnSpecificBank={false} />
          <QualitySelector filters={filters} setFilters={setFilters} />
        </div>
        <div className={fullMockReady ? "report-box mock-source-ready" : "report-box mock-source-warning"}>
          <strong>{sourceLabel}</strong>
          <span>{unique} matching active QCMs will be used for mock selection.</span>
          {filters.qualityStatus === "verified" && unique < 120 && (
            <span>There are fewer than 120 verified questions in this exact source filter. Include needs-review questions only if you accept audit risk.</span>
          )}
          {!fullMockReady && <span>For a full Series 3 mock, choose a source with both Market Knowledge and U.S. Regulations.</span>}
        </div>
        <div className="check-list">
          <span><CheckCircle2 size={16} /> Separate Market Knowledge score</span>
          <span><CheckCircle2 size={16} /> Separate U.S. Regulations score</span>
          <span><CheckCircle2 size={16} /> Explanations hidden until submission</span>
          <span><CheckCircle2 size={16} /> Flagged-for-review navigation</span>
          <span><CheckCircle2 size={16} /> Seeded balanced answer shuffling</span>
        </div>
        <button className="primary-button large" onClick={onStart}>
          <Timer size={18} aria-hidden="true" />
          Start mock exam
        </button>
        <p className="muted">
          {unique < 120
            ? `${unique} unique active QCMs are available in this source filter. Broaden the filter for a fully unique 120-question mock.`
            : `${unique} unique active QCMs are available in this source filter.`}
        </p>
      </div>
      <div className="panel span-7">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Configured distribution</p>
            <h2>Syllabus-weighted selection</h2>
          </div>
        </div>
        <p className="panel-explainer">
          This table is the target mix used when generating a 120-question mock exam. The target column
          stays fixed because it is the exam-weighted mix. Available, sample, imported, current bank,
          and accuracy update from the selected question-bank priority, so gaps are easy to spot before
          you rely on a full mock.
        </p>
        <MockDistributionTable coverage={coverage} />
      </div>
    </section>
  );
}

function Mistakes({
  state,
  mistakeIds,
  secondOrderMistakeIds,
  dismissedMistakeCount,
  onStart,
  onStartSecondOrder,
  onDismiss,
  onRestoreDismissed,
  setBankFilters,
  setView
}: {
  state: AppState;
  mistakeIds: Set<string>;
  secondOrderMistakeIds: Set<string>;
  dismissedMistakeCount: number;
  onStart: () => void;
  onStartSecondOrder: () => void;
  onDismiss: (questionId: string) => void;
  onRestoreDismissed: () => void;
  setBankFilters: (filters: SessionFilters) => void;
  setView: (view: View) => void;
}) {
  const [scope, setScope] = useState<"all" | "secondOrder">("all");
  const questions = state.questions.filter((question) => mistakeIds.has(question.id) && inferredQualityStatus(question) !== "rejected");
  const secondOrderQuestions = questions.filter((question) => secondOrderMistakeIds.has(question.id));
  const visibleQuestions = scope === "secondOrder" ? secondOrderQuestions : questions;
  const isSecondOrderScope = scope === "secondOrder";

  return (
    <section className="content-grid">
      <div className="panel span-4">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Mistake review</p>
            <h2>{formatQcmCount(questions.length)} missed</h2>
          </div>
        </div>
        <button className="primary-button large" onClick={onStart} disabled={questions.length === 0}>
          <RotateCcw size={18} aria-hidden="true" />
          Practice all mistakes
        </button>
        <button className="secondary-button large" onClick={() => onStartSecondOrder()} disabled={secondOrderQuestions.length === 0}>
          <Target size={18} aria-hidden="true" />
          Practice second-order mistakes
        </button>
        {dismissedMistakeCount > 0 && (
          <button className="secondary-button large" onClick={onRestoreDismissed}>
            <RotateCcw size={18} aria-hidden="true" />
            Restore removed mistakes
          </button>
        )}
        <div className="mistake-summary">
          <span><strong>{secondOrderQuestions.length}</strong> second-order {secondOrderQuestions.length === 1 ? "miss" : "misses"}</span>
          <span>Questions missed again during Mistake Review.</span>
        </div>
        <p className="muted">Mistakes are grouped by section, topic, and subtopic for focused repetition.</p>
      </div>
      <div className="panel span-8">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Mistake screening</p>
            <h2>{isSecondOrderScope ? "Second-order mistakes" : "All mistakes"}</h2>
          </div>
          <span className={isSecondOrderScope ? "pill red" : "pill blue"}>{formatQcmCount(visibleQuestions.length)}</span>
        </div>
        <div className="button-row mistake-scope-controls" role="group" aria-label="Mistake screening scope">
          <button className={scope === "all" ? "primary-button" : "secondary-button"} onClick={() => setScope("all")}>
            All mistakes
          </button>
          <button
            className={scope === "secondOrder" ? "primary-button" : "secondary-button"}
            onClick={() => setScope("secondOrder")}
            disabled={secondOrderQuestions.length === 0}
          >
            Second-order only
          </button>
        </div>
        <div className="question-list">
          {visibleQuestions.map((question) => (
            <article className="question-card" key={question.id}>
              <div className="question-card-header">
                <span className="pill">{getSection(question.sectionId).shortTitle}</span>
                <span className="pill">{question.difficulty}</span>
                {secondOrderMistakeIds.has(question.id) && <span className="pill red">second-order</span>}
              </div>
              <DisplayText value={question.stem} className="question-title" />
              <p className="muted">{topicLabel(question.topicId)} / {subtopicLabel(question.topicId, question.subtopicId)}</p>
              <div className="button-row">
                <button
                  className="secondary-button"
                  onClick={() => {
                    setBankFilters({
                      sectionId: question.sectionId,
                      topicId: question.topicId,
                      subtopicId: question.subtopicId,
                      difficulty: "mixed",
                      sourceBank: questionSourceBank(question)
                    });
                    setView("bank");
                  }}
                >
                  Open subtopic
                </button>
                <button className="secondary-button" onClick={() => onDismiss(question.id)}>
                  <X size={16} aria-hidden="true" />
                  Remove from mistakes
                </button>
              </div>
            </article>
          ))}
          {visibleQuestions.length === 0 && (
            <EmptyState
              title={isSecondOrderScope ? "No second-order mistakes yet" : "No mistakes yet"}
              body={
                isSecondOrderScope
                  ? "Miss a question during Mistake Review to add it to this focused queue."
                  : "Answer some questions to build a mistake queue."
              }
            />
          )}
        </div>
      </div>
    </section>
  );
}

function SessionScreen({
  session,
  questions,
  currentIndex,
  setCurrentIndex,
  selectedChoiceId,
  setSelectedChoiceId,
  onAnswer,
  onComplete,
  onFlag,
  onDismissMistake,
  dismissedMistakeIds
}: {
  session: Session;
  questions: Question[];
  currentIndex: number;
  setCurrentIndex: (index: number) => void;
  selectedChoiceId?: string;
  setSelectedChoiceId: (choiceId?: string) => void;
  onAnswer: (session: Session, sessionQuestion: SessionQuestion, choiceId: string) => void;
  onComplete: (session: Session) => void;
  onFlag: (session: Session, sessionQuestion: SessionQuestion) => void;
  onDismissMistake?: (questionId: string) => void;
  dismissedMistakeIds?: Set<string>;
}) {
  const sessionQuestion = session.questions[currentIndex] ?? session.questions[0];
  const question = questions.find((item) => item.id === sessionQuestion?.questionId);
  const answer = session.answers.find((item) => item.sessionQuestionId === sessionQuestion?.id);
  const selected = selectedChoiceId ?? answer?.selectedChoiceId;
  const showFeedback = session.status === "completed" || (session.feedbackMode === "immediate" && Boolean(answer));
  const answeredCount = session.answers.length;

  if (!sessionQuestion || !question) return <EmptyState title="Question unavailable" body="The current session references a missing question." />;
  const isDismissedMistake = dismissedMistakeIds?.has(question.id) ?? false;

  const orderedChoices = sessionQuestion.choiceOrder
    .map((choiceId) => question.choices.find((choice) => choice.id === choiceId))
    .filter(Boolean) as Question["choices"];

  function submitAnswer() {
    if (!selected) return;
    onAnswer(session, sessionQuestion, selected);
  }

  return (
    <section className="session-layout">
      <div className="session-main">
        <div className="session-toolbar">
          <div>
            <p className="eyebrow">{getSection(question.sectionId).title}</p>
            <h2>Question {currentIndex + 1} of {session.questions.length}</h2>
          </div>
          <div className="button-row">
            {session.remainingSeconds !== undefined && <span className="timer">{formatSeconds(session.remainingSeconds)}</span>}
            {session.type === "mistakes" && onDismissMistake && (
              <button className="secondary-button" onClick={() => onDismissMistake(question.id)} disabled={isDismissedMistake}>
                <X size={16} aria-hidden="true" />
                {isDismissedMistake ? "Removed from mistakes" : "Remove from mistakes"}
              </button>
            )}
            <button className={sessionQuestion.flagged ? "secondary-button flagged" : "secondary-button"} onClick={() => onFlag(session, sessionQuestion)}>
              <Flag size={16} aria-hidden="true" />
              Flag
            </button>
          </div>
        </div>

        <div className="tag-row">
          <span className="pill">{topicLabel(question.topicId)}</span>
          <span className="pill">{subtopicLabel(question.topicId, question.subtopicId)}</span>
          <span className="pill">{question.difficulty}</span>
          <span className="pill">{questionSourceBankLabel(question)}</span>
          <span className={`pill ${inferredQualityStatus(question) === "verified" ? "green" : "amber"}`}>
            {inferredQualityStatus(question).replace("_", " ")}
          </span>
          {sessionQuestion.isExperimental && <span className="pill amber">experimental</span>}
        </div>

        <article className="question-workspace">
          <DisplayText value={question.stem} className="question-title" />
          <div className="answer-grid">
            {orderedChoices.map((choice, index) => {
              const isSelected = selected === choice.id;
              const isCorrect = choice.isCorrect;
              const className = [
                "answer-choice",
                isSelected ? "selected" : "",
                showFeedback && isCorrect ? "correct" : "",
                showFeedback && isSelected && !isCorrect ? "incorrect" : ""
              ]
                .filter(Boolean)
                .join(" ");
              return (
                <button
                  key={choice.id}
                  className={className}
                  onClick={() => {
                    setSelectedChoiceId(choice.id);
                    if (session.feedbackMode === "delayed") onAnswer(session, sessionQuestion, choice.id);
                  }}
                  disabled={showFeedback && session.feedbackMode === "immediate"}
                >
                  <span className="answer-letter">{String.fromCharCode(65 + index)}</span>
                  <span>{normalizeDisplayText(choice.text)}</span>
                </button>
              );
            })}
          </div>

          {session.feedbackMode === "immediate" && !answer && (
            <button className="primary-button" onClick={submitAnswer} disabled={!selected}>
              Submit answer
            </button>
          )}

          {showFeedback && (
            <div className="feedback-box">
              <div className={answer?.isCorrect ? "feedback-status correct-text" : "feedback-status incorrect-text"}>
                {answer?.isCorrect ? <CheckCircle2 size={18} /> : <XCircle size={18} />}
                {answer?.isCorrect ? "Correct" : "Incorrect"}
              </div>
              <DisplayText value={question.explanation} />
              <ul className="rationale-list">
                {orderedChoices.map((choice, index) => (
                  <li key={choice.id}>
                    <strong>{String.fromCharCode(65 + index)}. {normalizeDisplayText(choice.text)}</strong>
                    <DisplayText value={choice.rationale} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </article>

        <div className="session-footer">
          <button className="secondary-button" onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))} disabled={currentIndex === 0}>
            <ChevronLeft size={16} aria-hidden="true" />
            Previous
          </button>
          <button
            className="secondary-button"
            onClick={() => setCurrentIndex(Math.min(session.questions.length - 1, currentIndex + 1))}
            disabled={currentIndex === session.questions.length - 1}
          >
            Next
            <ChevronRight size={16} aria-hidden="true" />
          </button>
          <button className="primary-button" onClick={() => onComplete(session)}>
            Submit session
          </button>
        </div>
      </div>

      <aside className="session-side">
        <Metric label="Answered" value={`${answeredCount}/${session.questions.length}`} detail={session.feedbackMode} />
        <div className="question-nav">
          {session.questions.map((item, index) => {
            const hasAnswer = session.answers.some((answerItem) => answerItem.sessionQuestionId === item.id);
            return (
              <button
                key={item.id}
                className={[
                  "question-dot",
                  index === currentIndex ? "active" : "",
                  hasAnswer ? "answered" : "",
                  item.flagged ? "flagged" : ""
                ]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Question ${index + 1}`}
              >
                {index + 1}
              </button>
            );
          })}
        </div>
      </aside>
    </section>
  );
}

function Results({
  session,
  questions,
  onStartSecondOrderMistakes
}: {
  session: Session;
  questions: Question[];
  onStartSecondOrderMistakes?: (questionIds: Iterable<string>) => void;
}) {
  const score = scoreSession(session, questions);
  const breakdown = buildTopicBreakdown(session, questions);
  const questionById = new Map(questions.map((question) => [question.id, question]));
  const answerBySessionQuestionId = new Map(session.answers.map((answer) => [answer.sessionQuestionId, answer]));

  const rows = session.questions.map((sessionQuestion) => {
    const question = questionById.get(sessionQuestion.questionId);
    const answer = answerBySessionQuestionId.get(sessionQuestion.id);
    return { sessionQuestion, question, answer };
  });
  const missedQuestionIds = new Set(
    rows
      .filter(({ question, answer }) => Boolean(question) && Boolean(answer) && !answer?.isCorrect)
      .map(({ question }) => question?.id)
      .filter((questionId): questionId is string => Boolean(questionId))
  );

  const csv = [
    "sessionId,questionId,section,topic,subtopic,correct,selectedChoice",
    ...rows.map(({ question, answer }) =>
      [
        session.id,
        question?.id ?? "",
        question?.sectionId ?? "",
        question?.topicId ?? "",
        question?.subtopicId ?? "",
        answer?.isCorrect ?? false,
        answer?.selectedChoiceId ?? ""
      ].join(",")
    )
  ].join("\n");

  return (
    <section className="content-grid">
      <div className="stats-grid full">
        <Metric label="Total" value={`${score.total.percentage}%`} detail={`${score.total.correct}/${score.total.total}`} />
        <Metric label="Market Knowledge" value={`${score.marketKnowledge.percentage}%`} detail={score.marketKnowledge.passed ? "pass" : "below 70%"} />
        <Metric label="U.S. Regulations" value={`${score.usRegulations.percentage}%`} detail={score.usRegulations.passed ? "pass" : "below 70%"} />
        <Metric label="Mock result" value={score.passed ? "Pass" : "Review"} detail="both sections must pass" />
      </div>

      {session.type === "mistakes" && missedQuestionIds.size > 0 && onStartSecondOrderMistakes && (
        <div className="panel full second-order-callout">
          <div>
            <p className="eyebrow">Second-order mistakes</p>
            <h2>{formatQcmCount(missedQuestionIds.size)} missed again during Mistake Review</h2>
            <p className="panel-explainer">Drill only these repeated misses before returning to the full mistake queue.</p>
          </div>
          <button className="primary-button" onClick={() => onStartSecondOrderMistakes(missedQuestionIds)}>
            <Target size={16} aria-hidden="true" />
            Drill second-order mistakes
          </button>
        </div>
      )}

      <div className="panel span-5">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Topic breakdown</p>
            <h2>Subtopic accuracy</h2>
          </div>
          <button className="secondary-button" onClick={() => downloadText("series3-session-results.csv", csv, "text/csv")}>
            <Download size={16} aria-hidden="true" />
            Export CSV
          </button>
        </div>
        <div className="table">
          {breakdown.map((row) => (
            <div className="table-row" key={`${row.topicId}-${row.subtopicId}`}>
              <span>{subtopicLabel(row.topicId, row.subtopicId)}</span>
              <span>{getSection(row.sectionId).shortTitle}</span>
              <span>{row.correct}/{row.total}</span>
              <span>{row.accuracy}%</span>
            </div>
          ))}
        </div>
      </div>

      <div className="panel span-7">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Review</p>
            <h2>Question-by-question rationales</h2>
          </div>
        </div>
        <div className="question-list compact">
          {rows.map(({ sessionQuestion, question, answer }, index) => {
            if (!question) return null;
            const orderedChoices = sessionQuestion.choiceOrder
              .map((choiceId) => question.choices.find((choice) => choice.id === choiceId))
              .filter(Boolean) as Question["choices"];
            const correct = orderedChoices.find((choice) => choice.isCorrect);
            const selected = orderedChoices.find((choice) => choice.id === answer?.selectedChoiceId);
            return (
              <article className="question-card" key={sessionQuestion.id}>
                <div className="question-card-header">
                  <span className={answer?.isCorrect ? "pill green" : "pill red"}>{answer?.isCorrect ? "correct" : "missed"}</span>
                  <span className="pill">Q{index + 1}</span>
                  <span className="pill">{getSection(question.sectionId).shortTitle}</span>
                </div>
                <DisplayText value={question.stem} className="question-title" />
                <p><strong>Selected:</strong> {selected ? normalizeDisplayText(selected.text) : "No answer"}</p>
                <p><strong>Correct:</strong> {correct ? normalizeDisplayText(correct.text) : ""}</p>
                <DisplayText value={question.explanation} />
                <details>
                  <summary>Per-option rationales</summary>
                  <ul className="rationale-list">
                    {orderedChoices.map((choice, choiceIndex) => (
                      <li key={choice.id}>
                        <strong>{String.fromCharCode(65 + choiceIndex)}. {normalizeDisplayText(choice.text)}</strong>
                        <DisplayText value={choice.rationale} />
                      </li>
                    ))}
                  </ul>
                </details>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ExamRules() {
  return (
    <section className="content-grid">
      <div className="panel full">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Official rules reminder</p>
            <h2>Series 3 exam day checklist</h2>
          </div>
          <span className="pill blue">Checked {EXAM_SOURCE_CHECKED}</span>
        </div>
        <p className="panel-explainer">
          Use this as a practical reminder inside the app. Before the real exam, verify your appointment email and the official FINRA/NFA pages because testing procedures can change.
        </p>
      </div>

      <div className="stats-grid full">
        <Metric label="Scored questions" value="120" detail="multiple choice" />
        <Metric label="Time allowed" value="150 min" detail="2 hours 30 minutes" />
        <Metric label="Passing rule" value="70%" detail="on each part" />
        <Metric label="Exam fee" value="$140" detail="FINRA listed cost" />
      </div>

      <div className="panel span-6">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Format</p>
            <h2>What the exam represents</h2>
          </div>
        </div>
        <ul className="exam-rule-list">
          <li>The Series 3 is the National Commodity Futures Examination, an NFA exam administered by FINRA.</li>
          <li>It has two scored parts: Market Knowledge and U.S. Regulations.</li>
          <li>You must score at least 70% on each part; a strong total score does not offset a failed part.</li>
          <li>There is no listed corequisite for the exam, and NFA says a sponsor is not required for futures industry exams.</li>
          <li>NFA exams are generally required to be taken at a test center; limited remote exceptions may apply under FINRA policy.</li>
        </ul>
      </div>

      <div className="panel span-6">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Before arrival</p>
            <h2>Scheduling and timing</h2>
          </div>
        </div>
        <ul className="exam-rule-list">
          <li>After enrollment confirmation, NFA states that candidates have 120 days to schedule and take the exam.</li>
          <li>Plan to arrive 30 minutes before your appointment for check-in.</li>
          <li>If you arrive more than 30 minutes late and the center cannot seat you for the full testing time, you may not be allowed to test.</li>
          <li>Remember the email address used to schedule the appointment; test center staff may ask for it.</li>
          <li>Fees are not refundable under NFA's general sign-up information.</li>
        </ul>
      </div>

      <div className="panel span-6">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Bring</p>
            <h2>Admission checklist</h2>
          </div>
        </div>
        <ul className="exam-rule-list">
          <li>Bring one valid, government-issued ID with your photo and signature, such as an unexpired driver's license, passport, or military ID.</li>
          <li>Your ID name must exactly match the name under which the exam is scheduled.</li>
          <li>Electronic IDs, photocopies, faxes, and expired government-issued IDs are not accepted.</li>
          <li>Bring only what you need for admission; personal items must be stored in the assigned locker.</li>
          <li>Do not bring study materials to the test center.</li>
        </ul>
      </div>

      <div className="panel span-6">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Provided</p>
            <h2>What the center gives you</h2>
          </div>
        </div>
        <ul className="exam-rule-list">
          <li>Four-function calculator.</li>
          <li>Erasable note boards.</li>
          <li>Dry-erase markers.</li>
          <li>Noise-cancelling headphones at each testing station.</li>
          <li>Tissues upon request.</li>
        </ul>
      </div>

      <div className="panel span-6">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Inside the room</p>
            <h2>Conduct rules</h2>
          </div>
        </div>
        <ul className="exam-rule-list">
          <li>The exam is closed-book; reference materials are not permitted during the appointment.</li>
          <li>You may be asked to empty pockets, pull up pant legs, and pull back sleeves during check-in.</li>
          <li>Your photo will be taken and your ID inspected.</li>
          <li>The testing center is video- and audio-monitored.</li>
          <li>Breaks are for restroom use only; you cannot leave the center or access your locker, and the exam timer does not pause.</li>
        </ul>
      </div>

      <div className="panel span-6">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">After submission</p>
            <h2>Results and retakes</h2>
          </div>
        </div>
        <ul className="exam-rule-list">
          <li>Computer-delivered exams display results shortly after completion and provide a printed pass/fail report.</li>
          <li>If you pass, FINRA says no additional scoring details are provided.</li>
          <li>If you fail, the report includes the overall score and topic-section performance details.</li>
          <li>NFA waiting periods are 30 days after the first failed attempt, 30 days after the second, and 180 days after the third and subsequent failed attempts.</li>
          <li>NFA states that passed Series 3 evidence is generally valid for two years to register, unless continuous registration rules preserve it.</li>
        </ul>
      </div>

      <div className="panel full">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Official sources</p>
            <h2>Verify before the real appointment</h2>
          </div>
        </div>
        <div className="source-link-grid">
          {OFFICIAL_EXAM_LINKS.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function SettingsPage({
  state,
  activeAccount,
  setSettings,
  onExportState,
  onResetProgress,
  onResetAll
}: {
  state: AppState;
  activeAccount: UserAccount;
  setSettings: (settings: Partial<AppState["settings"]>) => void;
  onExportState: () => void;
  onResetProgress: () => void;
  onResetAll: () => void;
}) {
  return (
    <section className="content-grid">
      <div className="panel span-6">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Defaults</p>
            <h2>Session behavior</h2>
          </div>
        </div>
        <div className="filter-stack">
          <label>
            Shuffle seed
            <input value={state.settings.shuffleSeed} onChange={(event) => setSettings({ shuffleSeed: event.target.value })} />
          </label>
          <label>
            Feedback mode
            <select value={state.settings.feedbackMode} onChange={(event) => setSettings({ feedbackMode: event.target.value as FeedbackMode })}>
              <option value="immediate">Immediate feedback</option>
              <option value="delayed">End-of-session review</option>
            </select>
          </label>
          <label>
            Default drill size
            <input
              type="number"
              min="1"
              max="60"
              value={state.settings.defaultDrillSize}
              onChange={(event) => setSettings({ defaultDrillSize: Number(event.target.value) })}
            />
          </label>
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={state.settings.enableExperimentalQuestions}
              onChange={(event) => setSettings({ enableExperimentalQuestions: event.target.checked })}
            />
            Add 5 optional experimental questions to mock exams
          </label>
          <label className="checkbox-row">
            <input
              type="checkbox"
              checked={state.settings.timerEnabled}
              onChange={(event) => setSettings({ timerEnabled: event.target.checked })}
            />
            Enable mock exam timer
          </label>
        </div>
      </div>

      <div className="panel span-6">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Local data</p>
            <h2>{activeAccount.displayName} browser storage</h2>
          </div>
        </div>
        <div className="action-stack">
          <button className="secondary-button large" onClick={onExportState}>
            <Download size={18} aria-hidden="true" />
            Export full local state
          </button>
          <button className="secondary-button large" onClick={onResetProgress}>
            <RotateCcw size={18} aria-hidden="true" />
            Reset progress only
          </button>
          <button className="danger-button large" onClick={onResetAll}>
            Reset all local data
          </button>
        </div>
        <p className="muted">
          Data is stored in this browser under the active account. Switching to another account loads its own progress,
          imports, and settings.
        </p>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="content-grid">
      <div className="panel span-7">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Compliance</p>
            <h2>Independent original-question practice</h2>
          </div>
        </div>
        <p>{DISCLAIMER}</p>
        <p>
          The app uses original sample questions, user-authored imports, and public syllabus mapping. It does not include confidential or actual exam questions.
        </p>
      </div>
      <div className="panel span-5">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Sources</p>
            <h2>Local resources used</h2>
          </div>
        </div>
        <ul className="plain-list">
          <li>Series3 Qcm App Codex Spec.pdf</li>
          <li>Series3_Exam_Study_Guide_English.pdf</li>
          <li>Public syllabus topic labels and original rationales</li>
        </ul>
      </div>
    </section>
  );
}

function ScopeSelector({
  filters,
  setFilters,
  includeAllSections,
  includeAllTopics,
  includeAllSubtopics
}: {
  filters: SessionFilters;
  setFilters: (filters: SessionFilters) => void;
  includeAllSections?: boolean;
  includeAllTopics?: boolean;
  includeAllSubtopics?: boolean;
}) {
  const sectionId = filters.sectionId ?? (includeAllSections ? undefined : DEFAULT_SECTION);
  const topics = sectionId ? syllabus.find((section) => section.id === sectionId)?.topics ?? [] : [];
  const topicId =
    sectionId && filters.topicId && topics.some((topic) => topic.id === filters.topicId)
      ? filters.topicId
      : sectionId
        ? includeAllTopics
          ? ""
          : topics[0]?.id ?? ""
        : "";
  const subtopics = topicId ? getTopic(topicId)?.subtopics ?? [] : [];

  return (
    <div className="filter-stack">
      <label>
        Section
        <select
          value={sectionId ?? ""}
          onChange={(event) => {
            const nextSection = event.target.value ? (event.target.value as SectionId) : undefined;
            const nextTopic = nextSection && !includeAllTopics ? defaultTopicForSection(nextSection) : "";
            setFilters({
              ...filters,
              sectionId: nextSection,
              topicId: nextTopic,
              subtopicId: "",
              regulatoryFocus: nextSection === "us_regulations" ? filters.regulatoryFocus ?? "all" : "all",
              sourceBank: sourceBankForSectionChange(filters, nextSection)
            });
          }}
        >
          {includeAllSections && <option value="">All sections</option>}
          {syllabus.map((section) => (
            <option key={section.id} value={section.id}>
              {section.title}
            </option>
          ))}
        </select>
      </label>
      <label>
        Topic
        <select
          value={topicId}
          disabled={!sectionId}
          onChange={(event) => setFilters({ ...filters, topicId: event.target.value, subtopicId: "" })}
        >
          {includeAllTopics && <option value="">All topics</option>}
          {topics.map((topic) => (
            <option key={topic.id} value={topic.id}>
              {topic.title}
            </option>
          ))}
        </select>
      </label>
      <label>
        Subtopic
        <select
          value={filters.subtopicId ?? ""}
          disabled={!topicId}
          onChange={(event) => setFilters({ ...filters, topicId, subtopicId: event.target.value })}
        >
          {includeAllSubtopics && <option value="">All subtopics</option>}
          {subtopics.map((subtopic) => (
            <option key={subtopic.id} value={subtopic.id}>
              {subtopic.title}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

function SourceBankSelector({
  filters,
  setFilters,
  scopeOnSpecificBank = true
}: {
  filters: SessionFilters;
  setFilters: (filters: SessionFilters) => void;
  scopeOnSpecificBank?: boolean;
}) {
  return (
    <label>
      Question bank priority
      <select
        value={filters.sourceBank ?? "s3-imported"}
        onChange={(event) => {
          const sourceBank = event.target.value as SourceBankFilter;
          setFilters(scopeOnSpecificBank ? filtersForSourceBank(filters, sourceBank) : { ...filters, sourceBank });
        }}
      >
        {SOURCE_BANK_OPTIONS.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function QualitySelector({
  filters,
  setFilters,
  allowRejected = false
}: {
  filters: SessionFilters;
  setFilters: (filters: SessionFilters) => void;
  allowRejected?: boolean;
}) {
  const options = allowRejected
    ? QUALITY_FILTER_OPTIONS
    : QUALITY_FILTER_OPTIONS.filter((option) => option.value !== "rejected" && option.value !== "all");
  return (
    <label>
      Quality status
      <select
        value={filters.qualityStatus ?? "verified"}
        onChange={(event) => setFilters({ ...filters, qualityStatus: event.target.value as QualityFilter })}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
}

function CoverageMatrix({
  coverage,
  compact
}: {
  coverage: ReturnType<typeof buildCoverageReport>;
  compact?: boolean;
}) {
  const rows = compact ? coverage.topics : coverage.subtopics;
  return (
    <div className={compact ? "coverage-list compact" : "coverage-list"}>
      {rows.slice(0, compact ? 12 : 80).map((node) => (
        <div className={node.total === 0 ? "coverage-row gap" : "coverage-row"} key={`${node.sectionId}-${node.topicId}-${node.subtopicId ?? ""}`}>
          <div>
            <strong>{node.title}</strong>
            <span>{getSection(node.sectionId).shortTitle}{node.topicId && !compact ? ` / ${topicLabel(node.topicId)}` : ""}</span>
          </div>
          <div className="coverage-counts">
            <span>{node.total} QCMs</span>
            <span>{node.sample} sample</span>
            <span>{node.rewritten} rewritten</span>
            <span>{node.imported} imported</span>
            <span>{node.verified} verified</span>
            <span>{node.needsReview} review</span>
            <span>{node.accuracy === null ? "no accuracy" : `${node.accuracy}%`}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function MockDistributionTable({ coverage }: { coverage: ReturnType<typeof buildCoverageReport> }) {
  const rows = syllabus.flatMap((section) =>
    section.topics.map((topic) => {
      const coverageNode = coverage.topics.find((node) => node.topicId === topic.id);
      return {
        section: section.shortTitle,
        topic: topic.title,
        target: topic.approxMockQuestions,
        available: coverageNode?.total ?? 0,
        sample: coverageNode?.sample ?? 0,
        imported: coverageNode?.imported ?? 0,
        accuracy: coverageNode?.accuracy ?? null
      };
    })
  );
  const targetTotal = rows.reduce((sum, row) => sum + row.target, 0);

  return (
    <div className="distribution-table" aria-label="Mock exam configured topic distribution">
      <div className="distribution-summary">
        <Metric label="Target mix" value={targetTotal} detail="scored questions" />
        <Metric
          label="Current bank"
          value={rows.reduce((sum, row) => sum + row.available, 0)}
          detail="available QCMs in these topics"
        />
      </div>
      <div className="distribution-header">
        <span>Topic</span>
        <span>Section</span>
        <span>Target</span>
        <span>Available</span>
        <span>Sample</span>
        <span>Imported</span>
        <span>Accuracy</span>
      </div>
      <div className="distribution-body">
        {rows.map((row) => (
          <div className={row.available === 0 ? "distribution-row gap" : "distribution-row"} key={row.topic}>
            <strong>{row.topic}</strong>
            <span>{row.section}</span>
            <span>{row.target}</span>
            <span>{row.available}</span>
            <span>{row.sample}</span>
            <span>{row.imported}</span>
            <span>{row.accuracy === null ? "Not practiced" : `${row.accuracy}%`}</span>
          </div>
        ))}
      </div>
      <p className="muted distribution-note">
        If a topic has fewer available QCMs than its target, the mock exam can reuse questions. Import more
        QCMs in under-covered topics to make mocks more realistic.
      </p>
    </div>
  );
}

function Metric({ label, value, detail }: { label: string; value: string | number; detail: string }) {
  return (
    <div className="metric">
      <span>{label}</span>
      <strong>{value}</strong>
      <small>{detail}</small>
    </div>
  );
}

function ProgressBar({ value, muted }: { value: number; muted?: boolean }) {
  return (
    <div className={muted ? "progress muted-progress" : "progress"} aria-label={`${value}%`}>
      <span style={{ width: `${Math.min(100, Math.max(0, value))}%` }} />
    </div>
  );
}

function IssueList({ issues }: { issues: ValidationIssue[] }) {
  if (issues.length === 0) return <p className="muted">No issues found.</p>;
  return (
    <ul className="issue-list">
      {issues.map((issue, index) => (
        <li key={`${issue.questionId}-${issue.field}-${index}`}>
          <strong>{issue.severity}</strong> {issue.questionId ? `${issue.questionId}: ` : ""}
          {issue.message}
        </li>
      ))}
    </ul>
  );
}

function EmptyState({ title, body }: { title: string; body: string }) {
  return (
    <div className="empty-state">
      <AlertTriangle size={24} aria-hidden="true" />
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  );
}

function formatSeconds(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return `${minutes}:${String(remainder).padStart(2, "0")}`;
}

export default App;
