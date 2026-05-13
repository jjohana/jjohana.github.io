import { baseCourseChapters } from "../data/courseContent";
import { getSubtopic, getTopic } from "../data/syllabus";
import type { CourseChapter, CourseProgress, CourseSubchapter, Question, Session } from "../types";
import { inferredQualityStatus } from "./quality";

function cloneSubchapter(subchapter: CourseSubchapter, questions: Question[]): CourseSubchapter {
  const linkedQuestions = questions
    .filter(
      (question) =>
        question.active &&
        inferredQualityStatus(question) === "verified" &&
        question.sectionId === subchapter.sectionId &&
        question.topicId === subchapter.topicId &&
        question.subtopicId === subchapter.subtopicId
    )
    .sort((a, b) => a.id.localeCompare(b.id))
    .map((question) => ({ questionId: question.id, note: question.sourceNote ?? question.concept }));

  const coverageNote =
    linkedQuestions.length === 0
      ? "Coverage gap: no active verified QCM currently supports this subchapter. Add verified questions before relying on it for drill coverage."
      : undefined;

  return {
    ...subchapter,
    linkedQuestions,
    coverageNote,
    examples: subchapter.examples.map((example) => ({
      ...example,
      linkedQuestionIds: example.linkedQuestionIds ?? linkedQuestions.slice(0, 3).map((reference) => reference.questionId)
    })),
    traps: subchapter.traps.map((trap) => ({
      ...trap,
      linkedQuestionIds: trap.linkedQuestionIds ?? linkedQuestions.slice(0, 3).map((reference) => reference.questionId)
    }))
  };
}

export function buildCourse(questions: Question[]): CourseChapter[] {
  return baseCourseChapters.map((chapter) => ({
    ...chapter,
    subchapters: chapter.subchapters.map((subchapter) => cloneSubchapter(subchapter, questions))
  }));
}

export function flattenCourseSubchapters(chapters: CourseChapter[]): CourseSubchapter[] {
  return chapters.flatMap((chapter) => chapter.subchapters);
}

export function searchCourse(chapters: CourseChapter[], query: string): CourseSubchapter[] {
  const normalized = query.trim().toLowerCase();
  const subchapters = flattenCourseSubchapters(chapters);
  if (!normalized) return subchapters;
  return subchapters.filter((subchapter) => {
    const haystack = [
      subchapter.title,
      getTopic(subchapter.topicId)?.title ?? "",
      getSubtopic(subchapter.topicId, subchapter.subtopicId)?.title ?? "",
      subchapter.overview,
      ...subchapter.keyPoints,
      ...subchapter.definitions.flatMap((definition) => [definition.term, definition.definition]),
      ...subchapter.formulas.flatMap((formula) => [formula.label, formula.expression, formula.explanation]),
      ...subchapter.examples.flatMap((example) => [example.title, example.scenario, example.answer, ...example.steps]),
      ...subchapter.traps.flatMap((trap) => [trap.title, trap.explanation]),
      ...subchapter.examTakeaways
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(normalized);
  });
}

export function courseProgress(subchapter: CourseSubchapter, sessions: Session[]): CourseProgress {
  const linkedIds = new Set(subchapter.linkedQuestions.map((reference) => reference.questionId));
  const latestByQuestionId = new Map<string, boolean>();

  for (const session of sessions) {
    for (const answer of session.answers) {
      if (!linkedIds.has(answer.questionId)) continue;
      latestByQuestionId.set(answer.questionId, answer.isCorrect);
    }
  }

  const answeredCount = latestByQuestionId.size;
  const correctCount = [...latestByQuestionId.values()].filter(Boolean).length;
  return {
    linkedCount: linkedIds.size,
    answeredCount,
    correctCount,
    accuracy: answeredCount === 0 ? null : Math.round((correctCount / Math.max(1, answeredCount)) * 100)
  };
}

export function firstCourseSubchapter(chapters: CourseChapter[]): CourseSubchapter | undefined {
  return chapters[0]?.subchapters[0];
}
