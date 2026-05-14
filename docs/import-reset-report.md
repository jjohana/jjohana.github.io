# Fresh Import Reset Report

Generated: 2026-05-14

## Scope

The imported S3 source banks were reset so that no old OCR corrections, duplicate decisions, or certification claims survive.

| Source | Current imported QCMs | Current status |
| --- | ---: | --- |
| S3-Market DOCX | 444 | `needs_review` |
| S3-Regulatory PDF | 242 | `needs_review` |
| Total imported | 686 | `needs_review` |

## What was cleared

- Legacy imported content overrides.
- Legacy imported quality overrides.
- Imported `verified` certifications.
- Imported `rejected` duplicate/calculation decisions.
- Temporary OCR work folders from incomplete extraction attempts.

## Source document condition

- `S3-Market.docx` is image-based: the document body has no usable text extraction and contains hundreds of embedded screenshots/images.
- `S3-Regulatory.pdf` is image-based: the PDF pages have little or no embedded text.

The extraction scripts were updated so future OCR imports default to `needs_review` and carry an OCR/transcription issue marker until reviewed.

## Current app behavior

- `Verified only` excludes both imported source banks.
- `Verified + needs review` includes imported QCMs so they can be inspected.
- Default drills and mock exams use the 394 verified non-imported QCMs.
- The user can still filter specifically to `S3-Market DOCX` or `S3-Regulatory PDF`; with `Verified only`, those filters correctly show `0`.

## Next step

Run a real LLM/manual certification pass on the imported source documents in batches. Promote an imported QCM to `verified` only after confirming:

- readable stem;
- clean answer choices;
- one unambiguous correct answer;
- recomputed calculations where relevant;
- reliable regulatory statement where relevant;
- useful explanation and rationales;
- correct section/topic/subtopic mapping;
- no duplicate conflict.
