# Regulatory QCM Remodel Report

Source document:

`C:\Users\Jean-JacquesOhana\Documents\Ai For Alpha\2026\Series 3\S3-Regulatory.pdf`

## Source Handling

The PDF is image-based. Standard text extraction returned no usable embedded text, so the document was first assessed with rendered page images and local OCR, then rebuilt through the OpenAI gpt-5.5 vision reimport workflow.

The PDF was first handled conservatively as a private/local extraction because it appears to be a PassMaster-style regulatory QCM tutorial. The user later confirmed they have the right to publish the QCMs, so the public GitHub Pages app now includes the LLM-transcribed regulatory bank in addition to the original rewritten study questions.

## OCR Summary

| Item | Result |
| --- | ---: |
| PDF pages | 250 |
| Visible question sequence | 249 questions |
| Embedded text extraction | unavailable / empty |
| Pages processed | 250 |
| Source question numbers detected | 249 |
| Active QCM records generated for the app | 250 |
| Transcription method | `pdftoppm` render + OpenAI gpt-5.5 vision transcript |
| Verified imported QCMs after app safety gate and repair | 210 |
| Needs-review imported QCMs after app safety gate and repair | 34 |
| Rejected audit-only imported QCMs after app safety gate and repair | 6 |
| Public rewritten questions added | 47 |

The PDF has 250 rendered pages and 249 detected question numbers. The current LLM reimport keeps source-page traceability and marks duplicate/unsafe records as rejected instead of silently dropping them.

## Regulatory Concepts Observed

The partial OCR pass and sampled rendered pages surfaced the following high-frequency areas:

| Concept family | Processed-page hits |
| --- | ---: |
| Registration roles and NFA membership | 56 |
| Customer/account opening rules | 41 |
| Order records, time-stamping, complaint records | 17 |
| Arbitration, reparations, discipline, enforcement | 12 |
| Promotional material and public communications | 9 |
| CPO/CTA disclosure and records | 9 |
| Funds, margin, and capital controls | 5 |
| Supervision | 3 |
| AML / suspicious activity reporting | 1 |

## Taxonomy Changes

The existing U.S. Regulations taxonomy was retained and refined. Two subtopics were added:

- `anti-money-laundering` under `FCM / IB Regulations`
- `reparations-procedures` under `Arbitration, Discipline and Enforcement`

The rewritten questions map into:

- General Regulatory Topics
- FCM / IB Regulations
- CPO / CTA Regulations
- Arbitration, Discipline and Enforcement

## Question Conversion

The app now includes rewritten regulatory questions marked with:

- `sourceType: "rewritten"`
- `reviewStatus: "reviewed"`
- `sourceNote` explaining that the item is original and not verbatim
- `regulatoryFocus` tags for dedicated drills
- `concept` metadata for rule-focused review

No rewritten item uses answer-letter-dependent choices such as:

- "both A and B"
- "A and C"
- "all of the above"
- "none of the above"

This keeps the existing answer-shuffling engine safe.

The app also includes OCR-derived source questions marked with:

- `sourceType: "imported"`
- `shuffleDisabled: true`
- source question number and page metadata
- extraction confidence metadata

These imported questions preserve answer order because many source choices refer to displayed answer letters.

## Manual Review Queue

The extraction report is written to:

- `private/s3-regulatory-extraction-report.json`
- `private/s3-regulatory-manual-review.csv`

The report currently flags 53 rows for review notes, mainly answer-letter-dependent source choices requiring fixed answer order. There are 0 inactive extracted questions.

## App Changes

- Added a larger rewritten U.S. Regulations bank.
- Added regulatory focus tags for drill filtering.
- Added a regulatory overview panel in QCM Bank.
- Added dedicated regulatory focus filters in QCM Bank and Practice.
- Added quick regulatory drill presets for high-yield rules, registration, promotional material, and arbitration.
- Added tests for rewritten regulatory validation, focus filtering, and answer-letter safety.
- Added full OCR extraction workflow for `S3-Regulatory.pdf`.
- Added fixed-order question support for source questions whose choices depend on displayed A/B/C/D labels.
- Added the extracted regulatory PDF bank as `src/data/s3RegulatoryPdfQuestions.ts`.

## Compliance Position

The deployed public site uses original rewritten study questions plus user-authorized source questions extracted from the provided regulatory PDF. The app continues to state that it is independent and does not contain real FINRA/NFA exam questions.
