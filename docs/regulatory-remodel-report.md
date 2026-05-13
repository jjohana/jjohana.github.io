# Regulatory QCM Remodel Report

Source document:

`C:\Users\Jean-JacquesOhana\Documents\Ai For Alpha\2026\Series 3\S3-Regulatory.pdf`

## Source Handling

The PDF is image-based. Standard text extraction returned no usable embedded text, so the document was assessed with rendered page images and local OCR.

Because the source appears to be a PassMaster-style regulatory QCM tutorial and may be licensed/proprietary, the public GitHub Pages app does **not** publish verbatim OCR questions, answer choices, or explanations. The public app uses original rewritten study questions based on the regulatory concepts observed in the OCR pass and on the existing Series 3 regulatory syllabus taxonomy.

## OCR Summary

| Item | Result |
| --- | ---: |
| PDF pages | 250 |
| Visible question sequence | approximately 249 questions |
| Embedded text extraction | unavailable / empty |
| OCR pages processed before timeout | 81 |
| Question numbers detected in processed OCR | 80 |
| OCR method | `pdftoppm` render + cropped page image + RapidOCR local OCR |
| Public verbatim imports | 0 |
| Public rewritten questions added | 47 |

The first OCR pass was stopped after 81 pages because full-document OCR exceeded the local execution window. The extracted concepts were sufficient to identify the main regulatory coverage families and rebuild a public-safe original question bank. Full exact extraction remains a private/local follow-up if the user confirms publication rights or wants a private import file.

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

## Public-Safe Question Conversion

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

## Manual Review Queue

The following remain manual/private follow-ups:

- OCR and parse pages 82-250 if a full private extraction is needed.
- Confirm publication rights before adding any exact source questions to the public site.
- Review any source questions with answer-letter-dependent choices and rewrite them semantically before import.
- Review OCR lines with visually dense explanations or low confidence before using them.

## App Changes

- Added a larger rewritten U.S. Regulations bank.
- Added regulatory focus tags for drill filtering.
- Added a regulatory overview panel in QCM Bank.
- Added dedicated regulatory focus filters in QCM Bank and Practice.
- Added quick regulatory drill presets for high-yield rules, registration, promotional material, and arbitration.
- Added tests for rewritten regulatory validation, focus filtering, and answer-letter safety.

## Compliance Position

The deployed public site uses original study questions. The source PDF was used only to identify regulatory coverage and learning concepts. The app continues to state that it is independent and does not contain real FINRA/NFA exam questions.
