# Corrected Questions Report

Generated: 2026-05-14

This historical reset report has been superseded by the OpenAI gpt-5.5 vision reimport. Current authoritative reports are `docs/import-reset-report.md`, `docs/llm-transcript-report.md`, and `docs/question-quality-audit-report.md`.

Imported S3-Market DOCX and S3-Regulatory PDF QCMs are no longer all reset to `needs_review`. They now carry final app quality statuses from the LLM audit plus the app safety gate.

| Scope | Count |
| --- | ---: |
| Imported QCMs currently `verified` | 489 |
| Imported QCMs currently `needs_review` | 133 |
| Imported QCMs currently `rejected` | 97 |
| Non-imported verified QCMs retained | 394 |

## Next correction pass

Corrections should be added only after reading the source material and validating each QCM. Each corrected question should record:

- what was corrected;
- why the answer is unambiguous;
- calculation checks, if applicable;
- regulatory confirmation, if applicable;
- duplicate decision, if applicable;
- final quality status.
