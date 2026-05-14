# Market Calculation Audit Report

Imported Market questions containing calculation-heavy signals are marked `needs_review` unless they have been manually recomputed and corrected. This is intentional: futures P&L, basis, margin, Treasury pricing, Eurodollar/T-bill, options, and spread calculations are high-risk content.

| Metric | Count |
| --- | --- |
| Imported Market QCMs | 469 |
| Calculation-risk imported Market QCMs | 1 |
| Verified Market QCMs | 715 |
| Needs-review Market QCMs | 0 |

## Calculation-Risk Questions
| ID | Topic | Subtopic | Issues |
| --- | --- | --- | --- |
| s3-market-docx-373-2 | futures-speculation | return-on-margin-equity | Calculation check needed, Ambiguous, Duplicate |
