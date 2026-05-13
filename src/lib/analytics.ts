import { syllabus, topicLabel, subtopicLabel } from "../data/syllabus";
import type { AppState, CoverageNode, Question, QuestionBankCoverageReport, SectionId, Session } from "../types";

function questionStats(sessions: Session[]) {
  const stats = new Map<string, { answered: number; correct: number }>();
  for (const session of sessions) {
    for (const answer of session.answers) {
      const row = stats.get(answer.questionId) ?? { answered: 0, correct: 0 };
      row.answered += 1;
      if (answer.isCorrect) row.correct += 1;
      stats.set(answer.questionId, row);
    }
  }
  return stats;
}

function createNode(
  questions: Question[],
  sessions: Session[],
  params: { sectionId: SectionId; topicId?: string; subtopicId?: string; title: string }
): CoverageNode {
  const stats = questionStats(sessions);
  const scoped = questions.filter((question) => {
    if (!question.active) return false;
    if (question.sectionId !== params.sectionId) return false;
    if (params.topicId && question.topicId !== params.topicId) return false;
    if (params.subtopicId && question.subtopicId !== params.subtopicId) return false;
    return true;
  });
  const answered = scoped.reduce((sum, question) => sum + (stats.get(question.id)?.answered ?? 0), 0);
  const correct = scoped.reduce((sum, question) => sum + (stats.get(question.id)?.correct ?? 0), 0);

  return {
    ...params,
    total: scoped.length,
    sample: scoped.filter((question) => question.sourceType === "sample").length,
    imported: scoped.filter((question) => question.sourceType === "imported").length,
    userAuthored: scoped.filter((question) => question.sourceType === "user-authored").length,
    easy: scoped.filter((question) => question.difficulty === "easy").length,
    medium: scoped.filter((question) => question.difficulty === "medium").length,
    hard: scoped.filter((question) => question.difficulty === "hard").length,
    answered,
    correct,
    accuracy: answered === 0 ? null : Math.round((correct / answered) * 1000) / 10
  };
}

export function buildCoverageReport(questions: Question[], sessions: Session[]): QuestionBankCoverageReport {
  const sections: CoverageNode[] = [];
  const topics: CoverageNode[] = [];
  const subtopics: CoverageNode[] = [];

  for (const section of syllabus) {
    sections.push(createNode(questions, sessions, { sectionId: section.id, title: section.title }));
    for (const topic of section.topics) {
      topics.push(createNode(questions, sessions, { sectionId: section.id, topicId: topic.id, title: topic.title }));
      for (const subtopic of topic.subtopics) {
        subtopics.push(
          createNode(questions, sessions, {
            sectionId: section.id,
            topicId: topic.id,
            subtopicId: subtopic.id,
            title: subtopic.title
          })
        );
      }
    }
  }

  return {
    sections,
    topics,
    subtopics,
    gaps: subtopics.filter((node) => node.total === 0)
  };
}

export function getMistakeQuestionIds(sessions: Session[]): Set<string> {
  const mistakes = new Set<string>();
  for (const session of sessions) {
    for (const answer of session.answers) {
      if (!answer.isCorrect) mistakes.add(answer.questionId);
    }
  }
  return mistakes;
}

export function getWeakSubtopics(state: AppState, limit = 8) {
  return buildCoverageReport(state.questions, state.sessions).subtopics
    .filter((node) => node.answered > 0 || node.total > 0)
    .map((node) => ({
      ...node,
      label: `${topicLabel(node.topicId ?? "")} / ${subtopicLabel(node.topicId ?? "", node.subtopicId ?? "")}`,
      weakness: (node.accuracy === null ? 40 : 100 - node.accuracy) + (node.total < 2 ? 20 : 0)
    }))
    .sort((a, b) => b.weakness - a.weakness)
    .slice(0, limit);
}
