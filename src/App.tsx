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
  Play,
  RotateCcw,
  Search,
  Settings,
  ShieldCheck,
  Target,
  Timer,
  Upload,
  XCircle
} from "lucide-react";
import { syllabus, topicLabel, subtopicLabel, getSection, getTopic } from "./data/syllabus";
import { buildCoverageReport, getMistakeQuestionIds, getWeakSubtopics } from "./lib/analytics";
import {
  parseCsvQuestions,
  parseJsonlQuestions,
  questionBankTemplateJsonl,
  questionsToCsv,
  questionsToJsonl
} from "./lib/importExport";
import { makeId } from "./lib/prng";
import { scoreSession, buildTopicBreakdown } from "./lib/scoring";
import { filterQuestionPool, normalizeDifficultyFilter, selectMockQuestions, selectPracticeQuestions } from "./lib/selection";
import { auditCorrectPositionDistribution, buildSessionQuestions } from "./lib/shuffle";
import { DEFAULT_SETTINGS, defaultState, downloadText, loadState, saveState } from "./lib/storage";
import { validateQuestionBank } from "./lib/validation";
import type {
  AppState,
  DifficultyFilter,
  FeedbackMode,
  ImportValidationReport,
  Question,
  SectionId,
  Session,
  SessionFilters,
  SessionQuestion,
  UserAnswer,
  ValidationIssue
} from "./types";

type View = "dashboard" | "bank" | "practice" | "mock" | "mistakes" | "session" | "results" | "settings" | "about";

const DISCLAIMER =
  "This is an independent Series 3 study tool. It uses original practice questions and syllabus-based topic mapping. It is not affiliated with, endorsed by, or provided by FINRA, NFA, CFTC, or Prometric. It does not contain real exam questions.";

const NAV_ITEMS: Array<{ view: View; label: string; icon: typeof BarChart3 }> = [
  { view: "dashboard", label: "Dashboard", icon: BarChart3 },
  { view: "bank", label: "QCM Bank", icon: Database },
  { view: "practice", label: "Practice", icon: Target },
  { view: "mock", label: "Mock Exam", icon: Timer },
  { view: "mistakes", label: "Mistakes", icon: RotateCcw },
  { view: "results", label: "Results", icon: ClipboardList },
  { view: "settings", label: "Settings", icon: Settings },
  { view: "about", label: "About", icon: ShieldCheck }
];

const DEFAULT_SECTION: SectionId = "market_knowledge";
const DEFAULT_TOPIC = "hedging-basis";

function App() {
  const [state, setState] = useState<AppState>(() => loadState());
  const [view, setView] = useState<View>("dashboard");
  const [message, setMessage] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedChoiceId, setSelectedChoiceId] = useState<string | undefined>();
  const [practiceFilters, setPracticeFilters] = useState<SessionFilters>({
    sectionId: DEFAULT_SECTION,
    topicId: DEFAULT_TOPIC,
    subtopicId: "",
    difficulty: "mixed",
    questionCount: DEFAULT_SETTINGS.defaultDrillSize,
    prioritizeWeak: false
  });
  const [bankFilters, setBankFilters] = useState<SessionFilters>({
    sectionId: DEFAULT_SECTION,
    topicId: DEFAULT_TOPIC,
    subtopicId: "",
    difficulty: "mixed"
  });
  const [bankSearch, setBankSearch] = useState("");
  const [bankStatus, setBankStatus] = useState("all");
  const [importText, setImportText] = useState("");
  const [importFormat, setImportFormat] = useState<"jsonl" | "csv">("jsonl");
  const [importReport, setImportReport] = useState<ImportValidationReport | null>(null);

  useEffect(() => saveState(state), [state]);

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
  const mistakeIds = useMemo(() => getMistakeQuestionIds(state.sessions), [state.sessions]);
  const activeSession = state.sessions.find((session) => session.id === state.activeSessionId);
  const latestCompletedSession = [...state.sessions].reverse().find((session) => session.status === "completed");
  const resultSession = view === "results" ? latestCompletedSession ?? activeSession : activeSession;

  function updateState(updater: (current: AppState) => AppState) {
    setState((current) => updater(current));
  }

  function getQuestion(questionId: string): Question | undefined {
    return state.questions.find((question) => question.id === questionId);
  }

  function startSession(type: "practice" | "mock" | "mistakes", questions: Question[], filters?: SessionFilters) {
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
        type === "mock"
          ? "Full Series 3 Mock Exam"
          : type === "mistakes"
            ? "Mistake Review"
            : buildPracticeTitle(filters),
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

  function startMock() {
    const desired = state.settings.enableExperimentalQuestions ? 125 : 120;
    const questions = selectMockQuestions(state.questions, `${state.settings.shuffleSeed}-mock`, desired);
    if (new Set(questions.map((question) => question.id)).size < 120) {
      setMessage("The seeded sample bank has fewer than 120 unique questions. The mock exam starts now, but import a larger bank for a fully unique exam.");
    }
    startSession("mock", questions, { questionCount: desired, difficulty: "mixed" });
  }

  function startMistakeReview() {
    const questions = state.questions.filter((question) => mistakeIds.has(question.id));
    startSession("mistakes", questions, { questionCount: questions.length, prioritizeWeak: true });
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
    setMessage(`${parsed.questions.length} question(s) imported into the browser question bank.`);
  }

  function handleImportFile(file?: File) {
    if (!file) return;
    setImportFormat(file.name.toLowerCase().endsWith(".csv") ? "csv" : "jsonl");
    const reader = new FileReader();
    reader.onload = () => setImportText(String(reader.result ?? ""));
    reader.readAsText(file);
  }

  function resetProgress() {
    updateState((current) => ({ ...current, sessions: [], activeSessionId: undefined }));
    setMessage("Progress and sessions were reset. The question bank was kept.");
  }

  function resetAllData() {
    setState(defaultState());
    setMessage("All local browser data was reset to the seeded sample bank.");
  }

  function setSettings(next: Partial<AppState["settings"]>) {
    updateState((current) => ({ ...current, settings: { ...current.settings, ...next } }));
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
          <span>{state.questions.filter((question) => question.active).length} active QCMs</span>
          <span>{state.sessions.length} sessions</span>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <p className="eyebrow">Independent study tool</p>
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
        {view === "bank" && (
          <QcmBank
            state={state}
            coverage={coverage}
            filters={bankFilters}
            setFilters={setBankFilters}
            search={bankSearch}
            setSearch={setBankSearch}
            status={bankStatus}
            setStatus={setBankStatus}
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
          />
        )}
        {view === "mock" && <MockExam state={state} coverage={coverage} onStart={startMock} />}
        {view === "mistakes" && (
          <Mistakes state={state} mistakeIds={mistakeIds} onStart={startMistakeReview} setBankFilters={setBankFilters} setView={setView} />
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
          />
        )}
        {view === "session" && !activeSession && <EmptyState title="No active session" body="Start a drill, mock exam, or mistake review." />}
        {view === "results" && resultSession && <Results session={resultSession} questions={state.questions} />}
        {view === "results" && !resultSession && <EmptyState title="No results yet" body="Complete a drill or mock exam to see section, topic, and subtopic results." />}
        {view === "settings" && (
          <SettingsPage
            state={state}
            setSettings={setSettings}
            onExportState={() => downloadText("series3-qcm-state.json", JSON.stringify(state, null, 2), "application/json")}
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
    bank: "QCM Bank",
    practice: "Practice by Topic",
    mock: "Mock Exam",
    mistakes: "Review Mistakes",
    session: "Question Session",
    results: "Results",
    settings: "Settings",
    about: "About / Compliance"
  };
  return titles[view];
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
  const sectionRows = coverage.sections;

  return (
    <section className="content-grid">
      <div className="stats-grid full">
        <Metric label="Active QCMs" value={activeQuestions} detail="sample + imported" />
        <Metric label="Answered" value={totalAnswers} detail="all sessions" />
        <Metric label="Completed sessions" value={completed} detail="drills and exams" />
        <Metric label="Coverage gaps" value={coverage.gaps.length} detail="empty subtopics" />
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

function QcmBank({
  state,
  coverage,
  filters,
  setFilters,
  search,
  setSearch,
  status,
  setStatus,
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
  coverage: ReturnType<typeof buildCoverageReport>;
  filters: SessionFilters;
  setFilters: (filters: SessionFilters) => void;
  search: string;
  setSearch: (value: string) => void;
  status: string;
  setStatus: (value: string) => void;
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
  const questions = useMemo(() => {
    const scoped = filterQuestionPool(state.questions, filters);
    return scoped.filter((question) => {
      const text = `${question.stem} ${topicLabel(question.topicId)} ${subtopicLabel(question.topicId, question.subtopicId)}`.toLowerCase();
      if (search && !text.includes(search.toLowerCase())) return false;
      if (status === "mistakes" && !mistakeIds.has(question.id)) return false;
      if (status === "unanswered") {
        const answered = state.sessions.some((session) => session.answers.some((answer) => answer.questionId === question.id));
        if (answered) return false;
      }
      return true;
    });
  }, [filters, mistakeIds, search, state.questions, state.sessions, status]);

  const distribution = auditCorrectPositionDistribution(state.sessions.flatMap((session) => session.questions));
  const bankValidation = validateQuestionBank(state.questions);

  return (
    <section className="content-grid">
      <div className="panel span-4">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Browse</p>
            <h2>Section to subtopic</h2>
          </div>
        </div>
        <ScopeSelector filters={filters} setFilters={setFilters} includeAllSubtopics />
        <div className="filter-stack">
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
            Search
            <div className="input-with-icon">
              <Search size={16} aria-hidden="true" />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="basis, CTA, margin..." />
            </div>
          </label>
        </div>
      </div>

      <div className="panel span-8">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Question bank</p>
            <h2>{questions.length} QCMs in current scope</h2>
          </div>
          <div className="button-row">
            <button className="secondary-button" onClick={() => downloadText("series3-questions.jsonl", questionsToJsonl(state.questions), "application/x-ndjson")}>
              <Download size={16} aria-hidden="true" />
              JSONL
            </button>
            <button className="secondary-button" onClick={() => downloadText("series3-questions.csv", questionsToCsv(state.questions), "text/csv")}>
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
                <span className="pill">{question.sourceType}</span>
              </div>
              <h3>{question.stem}</h3>
              <p className="muted">{topicLabel(question.topicId)} / {subtopicLabel(question.topicId, question.subtopicId)}</p>
              <details>
                <summary>Show answer and rationales</summary>
                <ul className="rationale-list">
                  {question.choices.map((choice) => (
                    <li key={choice.id}>
                      <strong>{choice.isCorrect ? "Correct" : "Wrong"}:</strong> {choice.text} - {choice.rationale}
                    </li>
                  ))}
                </ul>
                <p>{question.explanation}</p>
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
        <CoverageMatrix coverage={coverage} />
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

function Practice({
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
  const matching = filterQuestionPool(state.questions, filters);

  return (
    <section className="content-grid">
      <div className="panel span-5">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Drill builder</p>
            <h2>Practice by section, topic, subtopic</h2>
          </div>
        </div>
        <ScopeSelector filters={filters} setFilters={setFilters} includeAllSubtopics />
        <div className="filter-stack">
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
        <button className="primary-button large" onClick={onStart}>
          <Play size={18} aria-hidden="true" />
          Start drill
        </button>
      </div>
      <div className="panel span-7">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Current scope</p>
            <h2>{matching.length} matching QCMs</h2>
          </div>
        </div>
        <div className="question-list compact">
          {matching.slice(0, 8).map((question) => (
            <article className="question-card" key={question.id}>
              <span className="pill">{question.difficulty}</span>
              <h3>{question.stem}</h3>
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
  coverage,
  onStart
}: {
  state: AppState;
  coverage: ReturnType<typeof buildCoverageReport>;
  onStart: () => void;
}) {
  const unique = new Set(state.questions.filter((question) => question.active).map((question) => question.id)).size;

  return (
    <section className="content-grid">
      <div className="panel span-5">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Exam simulation</p>
            <h2>120 scored questions, 150 minutes</h2>
          </div>
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
            ? `${unique} unique active QCMs are currently available. Import more questions for a fully unique 120-question mock.`
            : `${unique} unique active QCMs are available.`}
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
          shows how many scored questions the app tries to draw from each syllabus topic. Available,
          sample, imported, and accuracy show the current state of your question bank, so gaps are easy
          to spot before you rely on a full mock.
        </p>
        <MockDistributionTable coverage={coverage} />
      </div>
    </section>
  );
}

function Mistakes({
  state,
  mistakeIds,
  onStart,
  setBankFilters,
  setView
}: {
  state: AppState;
  mistakeIds: Set<string>;
  onStart: () => void;
  setBankFilters: (filters: SessionFilters) => void;
  setView: (view: View) => void;
}) {
  const questions = state.questions.filter((question) => mistakeIds.has(question.id));

  return (
    <section className="content-grid">
      <div className="panel span-4">
        <div className="panel-heading">
          <div>
            <p className="eyebrow">Mistake review</p>
            <h2>{questions.length} missed QCMs</h2>
          </div>
        </div>
        <button className="primary-button large" onClick={onStart} disabled={questions.length === 0}>
          <RotateCcw size={18} aria-hidden="true" />
          Practice mistakes
        </button>
        <p className="muted">Mistakes are grouped by section, topic, and subtopic for focused repetition.</p>
      </div>
      <div className="panel span-8">
        <div className="question-list">
          {questions.map((question) => (
            <article className="question-card" key={question.id}>
              <div className="question-card-header">
                <span className="pill">{getSection(question.sectionId).shortTitle}</span>
                <span className="pill">{question.difficulty}</span>
              </div>
              <h3>{question.stem}</h3>
              <p className="muted">{topicLabel(question.topicId)} / {subtopicLabel(question.topicId, question.subtopicId)}</p>
              <button
                className="secondary-button"
                onClick={() => {
                  setBankFilters({
                    sectionId: question.sectionId,
                    topicId: question.topicId,
                    subtopicId: question.subtopicId,
                    difficulty: "mixed"
                  });
                  setView("bank");
                }}
              >
                Open subtopic
              </button>
            </article>
          ))}
          {questions.length === 0 && <EmptyState title="No mistakes yet" body="Answer some questions to build a mistake queue." />}
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
  onFlag
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
}) {
  const sessionQuestion = session.questions[currentIndex] ?? session.questions[0];
  const question = questions.find((item) => item.id === sessionQuestion?.questionId);
  const answer = session.answers.find((item) => item.sessionQuestionId === sessionQuestion?.id);
  const selected = selectedChoiceId ?? answer?.selectedChoiceId;
  const showFeedback = session.status === "completed" || (session.feedbackMode === "immediate" && Boolean(answer));
  const answeredCount = session.answers.length;

  if (!sessionQuestion || !question) return <EmptyState title="Question unavailable" body="The current session references a missing question." />;

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
          {sessionQuestion.isExperimental && <span className="pill amber">experimental</span>}
        </div>

        <article className="question-workspace">
          <h3>{question.stem}</h3>
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
                  <span>{choice.text}</span>
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
              <p>{question.explanation}</p>
              <ul className="rationale-list">
                {orderedChoices.map((choice, index) => (
                  <li key={choice.id}>
                    <strong>{String.fromCharCode(65 + index)}. {choice.text}</strong> - {choice.rationale}
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

function Results({ session, questions }: { session: Session; questions: Question[] }) {
  const score = scoreSession(session, questions);
  const breakdown = buildTopicBreakdown(session, questions);
  const questionById = new Map(questions.map((question) => [question.id, question]));
  const answerBySessionQuestionId = new Map(session.answers.map((answer) => [answer.sessionQuestionId, answer]));

  const rows = session.questions.map((sessionQuestion) => {
    const question = questionById.get(sessionQuestion.questionId);
    const answer = answerBySessionQuestionId.get(sessionQuestion.id);
    return { sessionQuestion, question, answer };
  });

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
                <h3>{question.stem}</h3>
                <p><strong>Selected:</strong> {selected?.text ?? "No answer"}</p>
                <p><strong>Correct:</strong> {correct?.text}</p>
                <p>{question.explanation}</p>
                <details>
                  <summary>Per-option rationales</summary>
                  <ul className="rationale-list">
                    {orderedChoices.map((choice, choiceIndex) => (
                      <li key={choice.id}>
                        <strong>{String.fromCharCode(65 + choiceIndex)}. {choice.text}</strong> - {choice.rationale}
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

function SettingsPage({
  state,
  setSettings,
  onExportState,
  onResetProgress,
  onResetAll
}: {
  state: AppState;
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
            <h2>Browser storage</h2>
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
        <p className="muted">Data is stored in this browser. Export files before clearing browser storage or switching devices.</p>
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
  includeAllSubtopics
}: {
  filters: SessionFilters;
  setFilters: (filters: SessionFilters) => void;
  includeAllSubtopics?: boolean;
}) {
  const sectionId = filters.sectionId ?? DEFAULT_SECTION;
  const topics = syllabus.find((section) => section.id === sectionId)?.topics ?? [];
  const topicId = filters.topicId && topics.some((topic) => topic.id === filters.topicId) ? filters.topicId : topics[0]?.id;
  const subtopics = getTopic(topicId ?? "")?.subtopics ?? [];

  return (
    <div className="filter-stack">
      <label>
        Section
        <select
          value={sectionId}
          onChange={(event) => {
            const nextSection = event.target.value as SectionId;
            const nextTopic = syllabus.find((section) => section.id === nextSection)?.topics[0]?.id;
            setFilters({ ...filters, sectionId: nextSection, topicId: nextTopic, subtopicId: "" });
          }}
        >
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
          onChange={(event) => setFilters({ ...filters, topicId: event.target.value, subtopicId: "" })}
        >
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
            <span>{node.imported} imported</span>
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
