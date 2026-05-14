# Duplicate Review Report

Generated: 2026-05-14

The previous duplicate decisions for imported questions were cleared during the fresh import reset.

Imported QCMs now all carry `needs_review`, including any items that may later prove to be duplicates. They are excluded from verified-only practice/mock selection until a new duplicate and content audit is completed.

| Metric | Count |
| --- | ---: |
| Imported QCMs requiring duplicate review | 686 |
| Imported QCMs currently verified | 0 |
| Imported QCMs currently rejected as duplicates | 0 |

## Required next pass

The next audit should detect:

- exact duplicate stems;
- near-duplicate stems;
- repeated calculations with only superficial wording changes;
- duplicated regulatory true/false items;
- duplicate source pages or repeated screenshots.

When duplicates are found, keep the clearest and most reliable version, then mark weaker copies as `rejected` with issue type `duplicate`.
