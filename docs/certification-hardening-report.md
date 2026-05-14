# QCM Certification Hardening Report

Date: 2026-05-14

## What changed

The app no longer treats imported OCR/transcribed QCMs as certified merely because the import file marked them as reviewed, high confidence, or verified.

An imported question is now `verified` only when it has an explicit audit override in `src/data/questionQualityOverrides.ts`.
After the import reset, that override file is intentionally empty.

## Current certified source-bank state

| Scope | Verified-only QCMs |
| --- | ---: |
| All question banks | 394 |
| S3-Market DOCX | 0 |
| S3-Regulatory PDF | 0 |
| Authored / rewritten / sample | 394 |

## Import reset state

| Imported source | Active QCMs | Quality status |
| --- | ---: | --- |
| S3-Market DOCX | 444 | `needs_review` |
| S3-Regulatory PDF | 242 | `needs_review` |
| Total imported | 686 | `needs_review` |

The imported QCMs are still visible when the app is set to `Verified + needs review`, but they are deliberately excluded from default verified-only drills and mock exams.

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

## App behavior

- Practice defaults to `All question banks` + `Verified only`.
- Mock Exam defaults to `All question banks` + `Verified only`.
- Selecting `S3-Market DOCX` or `S3-Regulatory PDF` with `Verified only` now shows `0` questions.
- Selecting `Verified + needs review` is possible, but it means accepting unaudited imported content.

## Remaining work

The imported documents still need a substantive LLM/manual certification pass question by question. Until that pass is complete, the app refuses to label imported QCMs as verified.
