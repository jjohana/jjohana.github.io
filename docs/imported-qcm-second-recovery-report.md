# Imported QCM Second Recovery Report

Generated: 2026-05-14

## Summary

The second recovery pass reviewed the remaining imported Series 3 QCMs after the first OpenAI gpt-5.5 vision reimport and repair workflow.

| Stage | Verified | Needs review | Rejected | Non-verified |
| --- | ---: | ---: | ---: | ---: |
| Start of second recovery | 580 | 109 | 30 | 139 |
| After correcting the OCR/display quality gate | 654 | 36 | 29 | 65 |
| Final after targeted repairs | 659 | 31 | 29 | 60 |

## Final Imported Bank State

| Source | Total | Verified | Needs review | Rejected |
| --- | ---: | ---: | ---: | ---: |
| S3-Market DOCX | 469 | 446 | 0 | 23 |
| S3-Regulatory PDF | 250 | 213 | 31 | 6 |
| Total imported | 719 | 659 | 31 | 29 |

## What Was Recovered

- 74 imported QCMs were recovered by fixing an overly broad automated OCR rule that treated normal financial symbols such as multiplication signs, cent signs, pound signs, and euro signs as OCR failures.
- 1 imported QCM was recovered by tightening the answer-letter detector so normal wording such as "both a buyer and a seller" is not treated like a banned "Both A and B" answer choice.
- 5 additional QCMs were manually repaired or rewritten and promoted to verified:
  - `s3-market-docx-23`: rewritten from outdated exchange-seat wording into a modern direct-access / FCM-routing concept.
  - `s3-market-docx-332`: sugar futures loss recomputed; commission is now added as a cost, not subtracted from the loss.
  - `s3-regulatory-pdf-085`: promotional-material recordkeeping corrected to the current five-year / first-two-years-ready-accessible standard.
  - `s3-regulatory-pdf-097`: NFA arbitration timing verified and explanation narrowed to NFA arbitration only.
  - `s3-regulatory-pdf-119`: discretionary-account written authorization item narrowed and verified against current CFTC/NFA text.

## Official Sources Checked

- NFA Promotional Material FAQ: https://www.nfa.futures.org/faqs/members/promotional-material.html
- NFA Compliance Rule 2-29(f): https://www.nfa.futures.org/rulebooksql/rules.aspx?RuleID=RULE+2-29&Section=4
- NFA Code of Arbitration Section 5: https://www.nfa.futures.org/rulebooksql/rules.aspx?RuleID=SECTION+5&Section=5
- NFA Customer Arbitration Guide: https://www.nfa.futures.org/arbitration/arbitration-resources/files/customer-arbitration-guide.html
- CFTC Regulation 166.2 via eCFR: https://www.ecfr.gov/current/title-17/chapter-I/part-166/section-166.2
- NFA Compliance Rule 2-8: https://www.nfa.futures.org/rulebooksql/rules.aspx?RuleID=RULE+2-8&Section=4

## Remaining Queue

60 imported QCMs remain non-verified:

| Status | Count | Main reason |
| --- | ---: | --- |
| Needs review | 31 | Regulatory-currentness items that should not be promoted without a specific current-rule check |
| Rejected | 29 | Mostly deliberate duplicate rejects; weaker duplicates remain excluded |

No S3-Market DOCX imported QCM remains in `needs_review`. Remaining rejected Market QCMs are audit-only duplicates or weaker duplicate versions.

## Cost

The second recovery pass used cached LLM repair outputs plus manual and official-source checks. No new OpenAI API spend was added during this pass. The existing repair ledger remains at $9.6009 for the prior repair workflow, below the second-pass budget cap of $25.00.

## App Impact

- Default drills and mock exams now see 659 verified imported QCMs.
- Needs-review imported QCMs remain optional.
- Rejected imported QCMs remain excluded from practice and mock selection.
- Course links can now use 659 imported verified QCMs as supporting material.
