# Market Calculation Audit Report

Generated: 2026-05-14

All imported Market questions have been reset to `needs_review`.

This is intentional. Futures P&L, basis, hedge effective price, margin, Treasury/T-note/T-bond pricing, Eurodollar/T-bill pricing, options, and spread calculations are high-risk content. They must be recomputed before any imported Market QCM can be certified.

| Metric | Count |
| --- | ---: |
| Imported S3-Market DOCX QCMs | 444 |
| Imported Market QCMs certified after reset | 0 |
| Imported Market QCMs needing calculation/content review | 444 |
| Authored / rewritten / sample Market QCMs still verified | 337 |

## Required next pass

For each imported Market QCM:

- clean OCR/transcription artifacts;
- recompute every calculation;
- verify the correct answer;
- rewrite ambiguous distractors;
- confirm the topic/subtopic mapping;
- certify only if the question is readable, useful, and unambiguous.
