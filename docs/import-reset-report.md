# Fresh Import Reset / LLM Reimport Report

Generated: 2026-05-14T07:02:57.252Z
Updated after repair pass: 2026-05-14

The imported S3 source banks have been rebuilt from OpenAI gpt-5.5 vision transcripts.

The counts below are the final app-integrated counts after the display-safety and structural-quality gate. Items with unsafe answer-choice formats, invalid taxonomy, wrong answer counts, or duplicates are rejected and excluded from practice/mock exams.

| Source | Questions | Verified | Needs review | Rejected |
| --- | --- | --- | --- | --- |
| S3-Market DOCX | 469 | 370 | 75 | 24 |
| S3-Regulatory PDF | 250 | 210 | 34 | 6 |

The initial reimport gate produced 489 verified, 133 needs-review, and 97 rejected imported QCMs. The subsequent repair pass reviewed all 230 non-verified imported QCMs and moved the final app-integrated state to 580 verified, 109 needs-review, and 30 rejected imported QCMs.

Tracked API cost: $30.2564 under a $100.00 cap.

Repair-pass API cost: $9.6009 under a $40.00 cap.
