# QCM Certification Hardening Report

Date: 2026-05-14

## What changed

This report records the certification-hardening pass. It has been updated after the OpenAI gpt-5.5 vision reimport, the subsequent repair pass, and the second recovery pass.

An imported question is now `verified` only when it carries embedded LLM audit metadata or an explicit audit override. Imported questions with unsafe answer-choice formats, invalid taxonomy, wrong answer counts, duplicate issues, or visible OCR/display artifacts are demoted or rejected by the app safety gate.

## Current certified source-bank state

| Scope | Verified-only QCMs |
| --- | ---: |
| All question banks | 1053 |
| S3-Market DOCX | 446 |
| S3-Regulatory PDF | 213 |
| Authored / rewritten / sample | 394 |

## Import reset state

| Imported source | Active QCMs | Quality status |
| --- | ---: | --- |
| S3-Market DOCX | 469 | 446 `verified`, 0 `needs_review`, 23 `rejected` |
| S3-Regulatory PDF | 250 | 213 `verified`, 31 `needs_review`, 6 `rejected` |
| Total imported | 719 | 659 `verified`, 31 `needs_review`, 29 `rejected` |

Needs-review imported QCMs are visible only when explicitly included. Rejected QCMs are excluded from drills and mock exams.

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
- Selecting `S3-Market DOCX` or `S3-Regulatory PDF` with `Verified only` now uses only the imported QCMs that passed the repair/audit gate.
- Selecting `Verified + needs review` is possible, but it means deliberately including questions that still need manual or current-rule confirmation.

## Remaining work

Remaining non-verified imported QCMs are deliberately held back because they still carry OCR/transcription uncertainty, duplicate status, ambiguous wording, calculation uncertainty, or regulatory-currentness concerns.
