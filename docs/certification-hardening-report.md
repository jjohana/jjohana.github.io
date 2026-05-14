# QCM Certification Hardening Report

Date: 2026-05-14

## What changed

This report records the certification-hardening pass. It has been updated after the OpenAI gpt-5.5 vision reimport and the subsequent non-verified imported-QCM repair pass.

An imported question is now `verified` only when it carries embedded LLM audit metadata or an explicit audit override. Imported questions with unsafe answer-choice formats, invalid taxonomy, wrong answer counts, duplicate issues, or visible OCR/display artifacts are demoted or rejected by the app safety gate.

## Current certified source-bank state

| Scope | Verified-only QCMs |
| --- | ---: |
| All question banks | 974 |
| S3-Market DOCX | 370 |
| S3-Regulatory PDF | 210 |
| Authored / rewritten / sample | 394 |

## Import reset state

| Imported source | Active QCMs | Quality status |
| --- | ---: | --- |
| S3-Market DOCX | 469 | 370 `verified`, 75 `needs_review`, 24 `rejected` |
| S3-Regulatory PDF | 250 | 210 `verified`, 34 `needs_review`, 6 `rejected` |
| Total imported | 719 | 580 `verified`, 109 `needs_review`, 30 `rejected` |

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
