# Market Calculation Audit Report

Imported Market questions containing calculation-heavy signals are marked `needs_review` unless they have been manually recomputed and corrected. This is intentional: futures P&L, basis, margin, Treasury pricing, Eurodollar/T-bill, options, and spread calculations are high-risk content.

| Metric | Count |
| --- | --- |
| Imported Market QCMs | 444 |
| Calculation-risk imported Market QCMs | 313 |
| Verified Market QCMs | 330 |
| Needs-review Market QCMs | 340 |

## Calculation-Risk Questions
| ID | Topic | Subtopic | Issues |
| --- | --- | --- | --- |
| s3-market-docx-11 | futures-theory | general-options-terminology | Weak explanation, Calculation check needed |
| s3-market-docx-25 | futures-theory | clearinghouse | Calculation check needed |
| s3-market-docx-28 | futures-theory | general-futures-terminology | Distractor issue, Calculation check needed |
| s3-market-docx-36 | futures-theory | general-futures-terminology | Distractor issue, Calculation check needed |
| s3-market-docx-42 | futures-theory | general-futures-terminology | Calculation check needed |
| s3-market-docx-45 | futures-theory | general-futures-terminology | Distractor issue, Calculation check needed |
| s3-market-docx-54 | futures-theory | general-futures-terminology | Distractor issue, Calculation check needed |
| s3-market-docx-56 | futures-theory | general-options-terminology | Calculation check needed |
| s3-market-docx-57 | futures-theory | general-futures-terminology | Distractor issue, Calculation check needed |
| s3-market-docx-63 | futures-theory | general-futures-terminology | Calculation check needed |
| s3-market-docx-66 | futures-theory | general-options-terminology | Calculation check needed |
| s3-market-docx-67 | futures-theory | general-options-terminology | Calculation check needed |
| s3-market-docx-69 | futures-theory | general-futures-terminology | Calculation check needed |
| s3-market-docx-70 | futures-theory | general-futures-terminology | Distractor issue, Calculation check needed |
| s3-market-docx-74 | margins-settlement-delivery | variation-margin | Distractor issue, Calculation check needed |
| s3-market-docx-75 | margins-settlement-delivery | variation-margin | Calculation check needed |
| s3-market-docx-77 | margins-settlement-delivery | variation-margin | Calculation check needed |
| s3-market-docx-79 | margins-settlement-delivery | time-value | Calculation check needed |
| s3-market-docx-80 | margins-settlement-delivery | variation-margin | Calculation check needed |
| s3-market-docx-81 | margins-settlement-delivery | variation-margin | Distractor issue, Calculation check needed |
| s3-market-docx-82 | margins-settlement-delivery | variation-margin | Calculation check needed |
| s3-market-docx-84 | margins-settlement-delivery | option-premiums | Calculation check needed |
| s3-market-docx-85 | margins-settlement-delivery | intrinsic-value | Calculation check needed |
| s3-market-docx-87 | margins-settlement-delivery | performance-bond | Calculation check needed |
| s3-market-docx-88 | margins-settlement-delivery | intrinsic-value | Calculation check needed |
| s3-market-docx-89 | margins-settlement-delivery | expanded-limits | Calculation check needed |
| s3-market-docx-90 | margins-settlement-delivery | initial-margin | Calculation check needed |
| s3-market-docx-91 | margins-settlement-delivery | variation-margin | Calculation check needed |
| s3-market-docx-92 | margins-settlement-delivery | variation-margin | Calculation check needed |
| s3-market-docx-95 | margins-settlement-delivery | exercise-assignment | Distractor issue, Calculation check needed |
| s3-market-docx-96 | margins-settlement-delivery | option-premiums | Calculation check needed |
| s3-market-docx-98 | margins-settlement-delivery | variation-margin | Calculation check needed |
| s3-market-docx-99 | margins-settlement-delivery | variation-margin | Calculation check needed |
| s3-market-docx-100 | margins-settlement-delivery | lock-limits | Calculation check needed |
| s3-market-docx-101 | margins-settlement-delivery | variation-margin | Distractor issue, Calculation check needed |
| s3-market-docx-102 | margins-settlement-delivery | variation-margin | Calculation check needed |
| s3-market-docx-104 | margins-settlement-delivery | exercise-assignment | Distractor issue, Calculation check needed |
| s3-market-docx-109 | margins-settlement-delivery | initial-margin | Calculation check needed |
| s3-market-docx-112 | margins-settlement-delivery | variation-margin | Calculation check needed |
| s3-market-docx-113 | margins-settlement-delivery | variation-margin | Distractor issue, Calculation check needed |
| s3-market-docx-115 | margins-settlement-delivery | initial-margin | Calculation check needed |
| s3-market-docx-116 | margins-settlement-delivery | performance-bond | Calculation check needed |
| s3-market-docx-117 | margins-settlement-delivery | option-premiums | Calculation check needed |
| s3-market-docx-121 | margins-settlement-delivery | intrinsic-value | Calculation check needed |
| s3-market-docx-122 | margins-settlement-delivery | variation-margin | Distractor issue, Weak explanation, Calculation check needed |
| s3-market-docx-124 | margins-settlement-delivery | performance-bond | Calculation check needed |
| s3-market-docx-125 | margins-settlement-delivery | option-premiums | Calculation check needed |
| s3-market-docx-126 | margins-settlement-delivery | margin-calls | Calculation check needed |
| s3-market-docx-127 | margins-settlement-delivery | maintenance-margin | Calculation check needed |
| s3-market-docx-128 | margins-settlement-delivery | exercise-assignment | Calculation check needed |
| s3-market-docx-130 | margins-settlement-delivery | variation-margin | Calculation check needed |
| s3-market-docx-131 | margins-settlement-delivery | intrinsic-value | Distractor issue, Calculation check needed |
| s3-market-docx-132 | margins-settlement-delivery | variation-margin | Calculation check needed |
| s3-market-docx-133 | margins-settlement-delivery | intrinsic-value | Calculation check needed |
| s3-market-docx-134 | margins-settlement-delivery | variation-margin | Calculation check needed |
| s3-market-docx-135 | margins-settlement-delivery | initial-margin | Calculation check needed |
| s3-market-docx-136 | margins-settlement-delivery | initial-margin | Calculation check needed |
| s3-market-docx-137 | margins-settlement-delivery | initial-margin | Calculation check needed |
| s3-market-docx-138 | margins-settlement-delivery | variation-margin | Calculation check needed |
| s3-market-docx-139 | margins-settlement-delivery | initial-margin | Calculation check needed |
| s3-market-docx-140 | margins-settlement-delivery | variation-margin | Calculation check needed |
| s3-market-docx-141 | margins-settlement-delivery | initial-margin | Calculation check needed |
| s3-market-docx-142 | margins-settlement-delivery | variation-margin | Calculation check needed |
| s3-market-docx-143 | margins-settlement-delivery | initial-margin | Calculation check needed |
| s3-market-docx-144 | margins-settlement-delivery | intrinsic-value | Calculation check needed |
| s3-market-docx-145 | margins-settlement-delivery | initial-margin | Calculation check needed |
| s3-market-docx-151 | orders-accounts-analysis | interest-rate-analysis | Calculation check needed |
| s3-market-docx-157 | orders-accounts-analysis | fundamental-analysis | Calculation check needed |
| s3-market-docx-160 | orders-accounts-analysis | stop-orders | Calculation check needed |
| s3-market-docx-161 | orders-accounts-analysis | stop-orders | Calculation check needed |
| s3-market-docx-162 | orders-accounts-analysis | market-orders | Distractor issue, Calculation check needed |
| s3-market-docx-163 | orders-accounts-analysis | interest-rate-analysis | Calculation check needed |
| s3-market-docx-164 | orders-accounts-analysis | interest-rate-analysis | Calculation check needed |
| s3-market-docx-165 | orders-accounts-analysis | market-orders | Calculation check needed |
| s3-market-docx-167 | orders-accounts-analysis | stop-orders | Calculation check needed |
| s3-market-docx-169 | orders-accounts-analysis | stop-orders | Calculation check needed |
| s3-market-docx-182 | orders-accounts-analysis | stop-orders | Calculation check needed |
| s3-market-docx-183 | orders-accounts-analysis | stop-limit-orders | Calculation check needed |
| s3-market-docx-184 | orders-accounts-analysis | stop-orders | Calculation check needed |
| s3-market-docx-186 | orders-accounts-analysis | stop-orders | Calculation check needed |
| s3-market-docx-188 | orders-accounts-analysis | interest-rate-analysis | Calculation check needed |
| s3-market-docx-189 | orders-accounts-analysis | stop-orders | Calculation check needed |
| s3-market-docx-190 | orders-accounts-analysis | stop-orders | Calculation check needed |
| s3-market-docx-191 | orders-accounts-analysis | stop-orders | Calculation check needed |
| s3-market-docx-193 | orders-accounts-analysis | fundamental-analysis | Calculation check needed |
| s3-market-docx-194 | hedging-basis | commodity-hedges | Distractor issue, Calculation check needed |
| s3-market-docx-195 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-196 | hedging-basis | short-hedges | Calculation check needed |
| s3-market-docx-197 | hedging-basis | deliverable-grade-differences | Calculation check needed |
| s3-market-docx-198 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-199 | hedging-basis | short-hedges | Calculation check needed |
| s3-market-docx-200 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-201 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-202 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-203 | hedging-basis | basis-calculation | Distractor issue, Calculation check needed |
| s3-market-docx-204 | hedging-basis | deliverable-grade-differences | Calculation check needed |
| s3-market-docx-205 | hedging-basis | basis-calculation | Distractor issue, Calculation check needed |
| s3-market-docx-206 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-207 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-208 | hedging-basis | currency-hedges | Calculation check needed |
| s3-market-docx-209 | hedging-basis | short-hedges | Distractor issue, Calculation check needed |
| s3-market-docx-210 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-211 | hedging-basis | net-price-received-paid | Calculation check needed |
| s3-market-docx-212 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-213 | hedging-basis | short-hedges | Calculation check needed |
| s3-market-docx-214 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-215 | hedging-basis | short-hedges | Weak explanation, Calculation check needed |
| s3-market-docx-216 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-217 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-218 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-219 | hedging-basis | short-hedges | Calculation check needed |
| s3-market-docx-220 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-221 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-222 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-223 | hedging-basis | short-hedges | Calculation check needed |
| s3-market-docx-224 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-225 | hedging-basis | short-hedges | Calculation check needed |
| s3-market-docx-226 | hedging-basis | basis-calculation | Distractor issue, Calculation check needed |
| s3-market-docx-227 | hedging-basis | commodity-hedges | Calculation check needed |
| s3-market-docx-228 | hedging-basis | commodity-hedges | Calculation check needed |
| s3-market-docx-229 | hedging-basis | net-price-received-paid | Calculation check needed |
| s3-market-docx-230 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-231 | hedging-basis | net-price-received-paid | Calculation check needed |
| s3-market-docx-232 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-233 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-234 | hedging-basis | net-price-received-paid | Calculation check needed |
| s3-market-docx-235 | hedging-basis | basis-calculation | Distractor issue, Calculation check needed |
| s3-market-docx-236 | hedging-basis | currency-hedges | Calculation check needed |
| s3-market-docx-237 | hedging-basis | anticipatory-hedges | Calculation check needed |
| s3-market-docx-238 | hedging-basis | interest-rate-hedges | Distractor issue, Calculation check needed |
| s3-market-docx-239 | hedging-basis | short-hedges | Calculation check needed |
| s3-market-docx-240 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-241 | hedging-basis | net-price-received-paid | Calculation check needed |
| s3-market-docx-242 | hedging-basis | net-price-received-paid | Calculation check needed |
| s3-market-docx-243 | hedging-basis | interest-rate-hedges | Calculation check needed |
| s3-market-docx-244 | hedging-basis | interest-rate-hedges | Calculation check needed |
| s3-market-docx-246 | hedging-basis | short-hedges | Calculation check needed |
| s3-market-docx-247 | hedging-basis | interest-rate-hedges | Calculation check needed |
| s3-market-docx-248 | hedging-basis | stock-index-hedges | Calculation check needed |
| s3-market-docx-249 | hedging-basis | stock-index-hedges | Calculation check needed |
| s3-market-docx-251 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-252 | hedging-basis | net-price-received-paid | Calculation check needed |
| s3-market-docx-253 | hedging-basis | currency-hedges | Calculation check needed |
| s3-market-docx-254 | hedging-basis | currency-hedges | Calculation check needed |
| s3-market-docx-255 | hedging-basis | short-hedges | Calculation check needed |
| s3-market-docx-256 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-257 | hedging-basis | interest-rate-hedges | Calculation check needed |
| s3-market-docx-258 | hedging-basis | net-price-received-paid | Calculation check needed |
| s3-market-docx-259 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-260 | hedging-basis | interest-rate-hedges | Calculation check needed |
| s3-market-docx-261 | hedging-basis | net-price-received-paid | Calculation check needed |
| s3-market-docx-262 | hedging-basis | interest-rate-hedges | Calculation check needed |
| s3-market-docx-263 | hedging-basis | interest-rate-hedges | Calculation check needed |
| s3-market-docx-264 | hedging-basis | net-price-received-paid | Calculation check needed |
| s3-market-docx-265 | hedging-basis | stock-index-hedges | Calculation check needed |
| s3-market-docx-266 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-267 | hedging-basis | interest-rate-hedges | Distractor issue, Calculation check needed |
| s3-market-docx-268 | hedging-basis | stock-index-hedges | Calculation check needed |
| s3-market-docx-269 | hedging-basis | interest-rate-hedges | Calculation check needed |
| s3-market-docx-270 | hedging-basis | basis-calculation | Calculation check needed |
| s3-market-docx-271 | hedging-basis | currency-hedges | Calculation check needed |
| s3-market-docx-272 | spreading | intramarket-spreads | Calculation check needed |
| s3-market-docx-274 | spreading | intermarket-spreads | Calculation check needed |
| s3-market-docx-275 | spreading | spread-execution | Calculation check needed |
| s3-market-docx-276 | spreading | intramarket-spreads | Calculation check needed |
| s3-market-docx-277 | spreading | spread-execution | Calculation check needed |
| s3-market-docx-278 | spreading | intramarket-spreads | Calculation check needed |
| s3-market-docx-279 | spreading | spread-execution | Calculation check needed |
| s3-market-docx-280 | spreading | spread-execution | Calculation check needed |
| s3-market-docx-281 | spreading | spread-execution | Calculation check needed |
| s3-market-docx-282 | spreading | spread-execution | Calculation check needed |
| s3-market-docx-283 | spreading | narrowing-spread | Calculation check needed |
| s3-market-docx-284 | spreading | spread-execution | Distractor issue, Calculation check needed |
| s3-market-docx-285 | spreading | spread-execution | Calculation check needed |
| s3-market-docx-286 | spreading | spread-execution | Distractor issue, Calculation check needed |
| s3-market-docx-287 | spreading | spread-execution | Calculation check needed |
| s3-market-docx-288 | spreading | spread-execution | Calculation check needed |
| s3-market-docx-289 | spreading | intramarket-spreads | Calculation check needed |
| s3-market-docx-290 | spreading | interdelivery-spreads | Calculation check needed |
| s3-market-docx-291 | spreading | spread-execution | Calculation check needed |
| s3-market-docx-292 | spreading | spread-execution | Calculation check needed |
| s3-market-docx-293 | spreading | intramarket-spreads | Calculation check needed |
| s3-market-docx-294 | spreading | spread-execution | Calculation check needed |
| s3-market-docx-295 | spreading | interdelivery-spreads | Calculation check needed |
| s3-market-docx-296 | spreading | narrowing-spread | Calculation check needed |
| s3-market-docx-297 | spreading | spread-execution | Distractor issue, Calculation check needed |
| s3-market-docx-298 | spreading | interdelivery-spreads | Calculation check needed |
| s3-market-docx-299 | spreading | interdelivery-spreads | Calculation check needed |
| s3-market-docx-301 | spreading | spread-execution | Calculation check needed |
| s3-market-docx-302 | spreading | spread-execution | Calculation check needed |
| s3-market-docx-303 | spreading | interdelivery-spreads | Calculation check needed |
| s3-market-docx-304 | spreading | spread-execution | Calculation check needed |
| s3-market-docx-305 | spreading | spread-execution | Calculation check needed |
| s3-market-docx-313 | futures-speculation | gross-profit-loss | Calculation check needed |
| s3-market-docx-314 | futures-speculation | gross-profit-loss | Calculation check needed |
| s3-market-docx-316 | futures-speculation | gross-profit-loss | Calculation check needed |
| s3-market-docx-317 | futures-speculation | gross-profit-loss | Calculation check needed |
| s3-market-docx-319 | futures-speculation | gross-profit-loss | Calculation check needed |
| s3-market-docx-320 | futures-speculation | gross-profit-loss | Calculation check needed |
| s3-market-docx-321 | futures-speculation | gross-profit-loss | Calculation check needed |
