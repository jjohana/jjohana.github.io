import type { Question, ScoreBreakdown, SectionId, Session, SessionScore } from "../types";

const PASSING_PERCENTAGE = 70;

function breakdown(correct: number, total: number): ScoreBreakdown {
  const percentage = total === 0 ? 0 : Math.round((correct / total) * 1000) / 10;
  return {
    total,
    correct,
    percentage,
    passed: total > 0 && percentage >= PASSING_PERCENTAGE
  };
}

export function scoreSession(session: Session, questions: Question[]): SessionScore {
  const questionById = new Map(questions.map((question) => [question.id, question]));
  const answerBySessionQuestionId = new Map(session.answers.map((answer) => [answer.sessionQuestionId, answer]));
  const totals: Record<SectionId, { total: number; correct: number }> = {
    market_knowledge: { total: 0, correct: 0 },
    us_regulations: { total: 0, correct: 0 }
  };

  for (const sessionQuestion of session.questions) {
    if (sessionQuestion.isExperimental) continue;
    const question = questionById.get(sessionQuestion.questionId);
    if (!question) continue;
    const answer = answerBySessionQuestionId.get(sessionQuestion.id);
    totals[question.sectionId].total += 1;
    if (answer?.isCorrect) totals[question.sectionId].correct += 1;
  }

  const marketKnowledge = breakdown(totals.market_knowledge.correct, totals.market_knowledge.total);
  const usRegulations = breakdown(totals.us_regulations.correct, totals.us_regulations.total);
  const total = breakdown(
    totals.market_knowledge.correct + totals.us_regulations.correct,
    totals.market_knowledge.total + totals.us_regulations.total
  );

  return {
    total,
    marketKnowledge,
    usRegulations,
    passed: marketKnowledge.passed && usRegulations.passed
  };
}

export function buildTopicBreakdown(session: Session, questions: Question[]) {
  const questionById = new Map(questions.map((question) => [question.id, question]));
  const answerBySessionQuestionId = new Map(session.answers.map((answer) => [answer.sessionQuestionId, answer]));
  const rows = new Map<string, { sectionId: SectionId; topicId: string; subtopicId: string; total: number; correct: number }>();

  for (const sessionQuestion of session.questions) {
    const question = questionById.get(sessionQuestion.questionId);
    if (!question || sessionQuestion.isExperimental) continue;
    const key = `${question.sectionId}/${question.topicId}/${question.subtopicId}`;
    const row =
      rows.get(key) ??
      {
        sectionId: question.sectionId,
        topicId: question.topicId,
        subtopicId: question.subtopicId,
        total: 0,
        correct: 0
      };
    row.total += 1;
    if (answerBySessionQuestionId.get(sessionQuestion.id)?.isCorrect) row.correct += 1;
    rows.set(key, row);
  }

  return [...rows.values()].map((row) => ({
    ...row,
    accuracy: row.total === 0 ? null : Math.round((row.correct / row.total) * 1000) / 10
  }));
}
