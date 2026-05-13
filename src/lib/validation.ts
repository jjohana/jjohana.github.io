import { allSubtopics, getTopic, syllabus } from "../data/syllabus";
import { DIFFICULTIES, SECTION_IDS, type ImportValidationReport, type Question, type ValidationIssue } from "../types";

const bannedChoicePattern = /\b(all of the above|none of the above)\b/i;
const answerLetterReferencePattern =
  /\b(both|either|neither)\s+[ABCDE]\b|\b[ABCDE]\s*(and|or|&)\s*[ABCDE]\b|\banswers?\s+[ABCDE]\b/i;

export function validateQuestion(question: Question): ValidationIssue[] {
  const issues: ValidationIssue[] = [];
  const add = (severity: ValidationIssue["severity"], field: string, message: string) =>
    issues.push({ severity, field, message, questionId: question.id });

  if (!question.id?.trim()) add("error", "id", "Question id is required.");
  if (!question.stem?.trim()) add("error", "stem", "Question stem is required.");
  if (!SECTION_IDS.includes(question.sectionId)) add("error", "sectionId", "Unknown section.");
  if (!DIFFICULTIES.includes(question.difficulty)) add("error", "difficulty", "Difficulty must be easy, medium, or hard.");
  if (!["multiple_choice", "true_false"].includes(question.questionType)) {
    add("error", "questionType", "Question type must be multiple_choice or true_false.");
  }

  const topic = getTopic(question.topicId);
  if (!topic) {
    add("error", "topicId", "Unknown topic.");
  } else if (topic.sectionId !== question.sectionId) {
    add("error", "topicId", "Topic does not belong to the selected section.");
  }

  const validSubtopic = allSubtopics.some(
    (subtopic) =>
      subtopic.sectionId === question.sectionId &&
      subtopic.topicId === question.topicId &&
      subtopic.id === question.subtopicId
  );
  if (!validSubtopic) add("error", "subtopicId", "Subtopic does not belong to the selected section/topic.");

  if (!Array.isArray(question.choices)) {
    add("error", "choices", "Choices must be an array.");
    return issues;
  }

  if (question.questionType === "true_false" && question.choices.length !== 2) {
    add("error", "choices", "True/false questions must have exactly two answer choices.");
  }
  if (question.questionType === "multiple_choice" && question.choices.length < 3) {
    add("error", "choices", "Multiple-choice questions must have at least three choices.");
  }

  const correctCount = question.choices.filter((choice) => choice.isCorrect).length;
  if (correctCount !== 1) add("error", "choices", "Each question must have exactly one correct answer.");

  const choiceIds = new Set<string>();
  question.choices.forEach((choice, index) => {
    if (!choice.id?.trim()) add("error", `choices.${index}.id`, "Choice id is required.");
    if (choiceIds.has(choice.id)) add("error", `choices.${index}.id`, "Choice ids must be unique.");
    choiceIds.add(choice.id);
    if (!choice.text?.trim()) add("error", `choices.${index}.text`, "Choice text is required.");
    if (!choice.rationale?.trim()) add("error", `choices.${index}.rationale`, "Each choice must include a rationale.");
    if (bannedChoicePattern.test(choice.text)) {
      add(
        question.shuffleDisabled ? "warning" : "error",
        `choices.${index}.text`,
        question.shuffleDisabled
          ? "This all-of-the-above or none-of-the-above answer choice requires fixed answer order."
          : "Avoid all-of-the-above and none-of-the-above answer choices."
      );
    }
    if (answerLetterReferencePattern.test(choice.text)) {
      add(
        question.shuffleDisabled ? "warning" : "error",
        `choices.${index}.text`,
        question.shuffleDisabled
          ? "This answer-letter-dependent choice requires fixed answer order."
          : "Avoid answer text that depends on displayed letters."
      );
    }
  });

  if (!question.explanation?.trim()) add("error", "explanation", "Detailed explanation is required.");
  if (!["sample", "rewritten", "imported", "user-authored"].includes(question.sourceType)) {
    add("error", "sourceType", "Source type must be sample, rewritten, imported, or user-authored.");
  }

  return issues;
}

export function validateQuestionBank(questions: Question[]): ImportValidationReport {
  const issues = questions.flatMap(validateQuestion);
  const questionsWithErrors = new Set(issues.filter((issue) => issue.severity === "error").map((issue) => issue.questionId));
  return {
    totalRows: questions.length,
    validRows: questions.length - questionsWithErrors.size,
    importedRows: 0,
    issues
  };
}

export function validateTaxonomyCoverage() {
  return syllabus.flatMap((section) =>
    section.topics.flatMap((topic) =>
      topic.subtopics.map((subtopic) => ({
        sectionId: section.id,
        topicId: topic.id,
        subtopicId: subtopic.id,
        title: subtopic.title
      }))
    )
  );
}
