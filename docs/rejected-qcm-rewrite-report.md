# Rejected QCM Rewrite Report

Generated: 2026-05-14

## Objective

Recover the 29 imported QCMs that remained `rejected` after the reimport, repair, second recovery, and regulatory currentness passes.

The rejected items were not restored verbatim. They were mostly duplicate variants of already verified source questions. To avoid reintroducing duplicate practice items, each rejected object was rewritten into a distinct app-ready QCM that preserves the tested Series 3 concept while using a different scenario, angle, or wording.

## Result

| Metric | Count |
| --- | ---: |
| Starting rejected imported QCMs | 29 |
| Rewritten and promoted to verified | 29 |
| Remaining needs_review imported QCMs | 0 |
| Remaining rejected imported QCMs | 0 |
| Final verified imported QCMs | 719 |

## Source split

| Source | Rewritten from rejected | Final verified |
| --- | ---: | ---: |
| S3-Market DOCX | 23 | 469 |
| S3-Regulatory PDF | 6 | 250 |

## Rewrite rules

- Removed duplicate stems rather than certifying duplicate source variants.
- Replaced `all of the above`, `none of the above`, and answer-letter-dependent choices with standalone choices.
- Recomputed market calculations where a numerical scenario was used.
- Rewrote regulatory items as current, general, exam-useful concepts instead of relying on outdated wording.
- Added full explanations and per-choice rationales.
- Marked each recovered item `verified` only after it had one unambiguous correct answer and no OCR/display artifacts.

## Recovered IDs

| ID | Recovery theme |
| --- | --- |
| s3-market-docx-45-2 | Clearinghouse function |
| s3-market-docx-227 | Long commodity hedge |
| s3-market-docx-236-2 | Hedge contract count |
| s3-market-docx-258-2 | Currency futures hedge |
| s3-market-docx-268-2 | Stock-index futures hedge |
| s3-market-docx-283 | Narrowing spread |
| s3-market-docx-301 | Intramarket spread P&L |
| s3-market-docx-302 | Spread margin rationale |
| s3-market-docx-314 | Futures P&L |
| s3-market-docx-334-2 | Return on margin |
| s3-market-docx-335-2 | Short futures P&L |
| s3-market-docx-337 | Fractional grain pricing |
| s3-market-docx-337-2 | Short grain futures P&L |
| s3-market-docx-339-2 | Return on margin after commissions |
| s3-market-docx-356 | Treasury note futures P&L |
| s3-market-docx-361 | Natural gas futures P&L |
| s3-market-docx-366 | Eurodollar futures P&L |
| s3-market-docx-370 | Silver futures P&L |
| s3-market-docx-373-2 | Loss percentage on margin |
| s3-market-docx-398-2 | Calendar options spread |
| s3-market-docx-414-2 | Crack spread |
| s3-market-docx-436-2 | Long call butterfly |
| s3-market-docx-437 | Heating oil futures P&L |
| s3-regulatory-pdf-039 | Exchange execution rules |
| s3-regulatory-pdf-072 | Customer-funds segregation |
| s3-regulatory-pdf-073 | Just and equitable principles |
| s3-regulatory-pdf-130-2 | Performance disclosure |
| s3-regulatory-pdf-136 | Promotional material reprints |
| s3-regulatory-pdf-228 | Current recordkeeping framework |
