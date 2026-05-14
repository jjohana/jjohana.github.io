# Fresh Import Reset / LLM Reimport Report

Generated: 2026-05-14T07:02:57.252Z
Updated after rejected-queue rewrite pass: 2026-05-14

The imported S3 source banks have been rebuilt from OpenAI gpt-5.5 vision transcripts.

The counts below are the final app-integrated counts after the display-safety and structural-quality gate. Items with unsafe answer-choice formats, invalid taxonomy, wrong answer counts, or duplicates are rejected and excluded from practice/mock exams.

| Source | Questions | Verified | Needs review | Rejected |
| --- | --- | --- | --- | --- |
| S3-Market DOCX | 469 | 469 | 0 | 0 |
| S3-Regulatory PDF | 250 | 250 | 0 | 0 |

The initial reimport gate produced 489 verified, 133 needs-review, and 97 rejected imported QCMs. The subsequent repair pass reviewed all 230 non-verified imported QCMs and moved the app-integrated state to 580 verified, 109 needs-review, and 30 rejected imported QCMs. The second recovery pass fixed an overly broad OCR/display gate, repaired five additional items, and moved the app-integrated state to 659 verified, 31 needs-review, and 29 rejected imported QCMs. The regulatory currentness pass then checked the remaining regulatory needs-review items against official NFA materials and eCFR Title 17 current through 2026-05-12, promoting 31 corrected regulatory QCMs. The rejected-queue rewrite pass then converted the 29 rejected duplicate variants into distinct app-ready verified QCMs, leaving 719 verified, 0 needs-review, and 0 rejected imported QCMs.

Tracked API cost: $30.2564 under a $100.00 cap.

Repair-pass API cost: $9.6009 under a $40.00 cap. Second recovery used cached results plus manual/official-source checks and added no new API spend.
