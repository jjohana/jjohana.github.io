# QCM Certification Hardening Report

Date: 2026-05-14

## What changed

The app no longer treats imported OCR/transcribed QCMs as certified merely because the import file marked them as reviewed or high confidence.

An imported question is now `verified` only when it has an explicit audit override in `src/data/questionQualityOverrides.ts`.
Otherwise, it remains `needs_review` and is excluded from verified-only practice and mock exams.

## Triggering issue

The following imported question appeared as `Verified` even though its visible text was corrupted:

- `s3-market-docx-204`
- Bad display: `Which type ofmarket...`, `Invened in arket`
- Corrected display: `Which type of market would you anticipate seeing when there is a current shortage of a physical commodity?`
- Correct answer: `Inverted market`

The question has been rewritten and explicitly certified.

## Certification rule

A QCM can be certified only if:

- the stem is readable and complete;
- exactly one answer is correct;
- all distractors are plausible and clearly wrong;
- explanations and per-choice rationales are coherent;
- no OCR artifacts remain in visible text;
- no answer depends on answer letters after shuffling;
- calculations are recomputed when applicable;
- regulatory statements are not obviously outdated or misleading;
- taxonomy placement is reasonable.

## Current certified source-bank state

After hardening:

- All question banks, verified only: 432 QCMs
- S3-Market DOCX, verified only: 38 QCMs
- S3-Regulatory PDF, verified only: 0 QCMs
- Authored / rewritten / sample, verified only: 394 QCMs

The remaining imported QCMs are still available under `Verified + needs review`, but they are no longer used by default in certified drills or mock exams.

## App behavior

- Practice defaults to `All question banks` + `Verified only`.
- Mock Exam defaults to `All question banks` + `Verified only`.
- Selecting `S3-Market DOCX` or `S3-Regulatory PDF` with `Verified only` shows only explicitly certified imported questions.
- Selecting `Verified + needs review` is possible, but it means accepting audit risk.

## Tests added or updated

- Imported verified questions must have an explicit audit override.
- Verified questions cannot carry OCR/transcription or bad-distractor issue types.
- Course links only verified questions.
- E2E flows now validate the stricter certified counts.

## Remaining work

The imported documents still need a substantive manual certification pass question by question.
Until that pass is complete, the app deliberately refuses to label most imported QCMs as verified.

