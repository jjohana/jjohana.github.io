# QCM Certification Hardening Report

Date: 2026-05-14

## What changed

This report records the first certification-hardening pass. It has been updated after the OpenAI gpt-5.5 vision reimport.

An imported question is now `verified` only when it carries embedded LLM audit metadata or an explicit audit override. Imported questions with unsafe answer-choice formats, invalid taxonomy, wrong answer counts, duplicate issues, or visible OCR/display artifacts are demoted or rejected by the app safety gate.

## Current certified source-bank state

| Scope | Verified-only QCMs |
| --- | ---: |
| All question banks | 883 |
| S3-Market DOCX | 306 |
| S3-Regulatory PDF | 183 |
| Authored / rewritten / sample | 394 |

## Import reset state

| Imported source | Active QCMs | Quality status |
| --- | ---: | --- |
| S3-Market DOCX | 469 | 306 `verified`, 96 `needs_review`, 67 `rejected` |
| S3-Regulatory PDF | 250 | 183 `verified`, 37 `needs_review`, 30 `rejected` |
| Total imported | 719 | 489 `verified`, 133 `needs_review`, 97 `rejected` |

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
- Selecting `S3-Market DOCX` or `S3-Regulatory PDF` with `Verified only` now shows `0` questions.
- Selecting `Verified + needs review` is possible, but it means accepting unaudited imported content.

## Remaining work

The imported documents still need a substantive LLM/manual certification pass question by question. Until that pass is complete, the app refuses to label imported QCMs as verified.
