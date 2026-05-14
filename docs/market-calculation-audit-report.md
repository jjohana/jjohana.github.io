# Market Calculation Audit Report

Generated: 2026-05-14T07:02:57.248Z
Updated after repair pass: 2026-05-14

| Metric | Count |
| --- | --- |
| S3-Market DOCX questions | 469 |
| Calculation-signal questions | 330 |
| App-verified S3-Market DOCX imports | 370 |
| App needs-review S3-Market DOCX imports | 75 |
| App rejected S3-Market DOCX imports | 24 |

Counts reflect the final app safety gate after the repair pass. The detailed rows below preserve the initial raw LLM audit status/check text for traceability; current repair decisions are summarized in `docs/imported-qcm-repair-report.md`.

## Calculation Checks
| ID | Status | Check |
| --- | --- | --- |
| s3-market-docx-2 | verified | No calculation required. |
| s3-market-docx-8 | verified | No calculation required. |
| s3-market-docx-13 | verified | No calculation required. |
| s3-market-docx-14 | verified | No calculation required. |
| s3-market-docx-15 | verified | No calculation required. |
| s3-market-docx-28 | verified | No calculation required. |
| s3-market-docx-29 | verified | No calculation required. |
| s3-market-docx-31 | needs_review | No calculation required. |
| s3-market-docx-36 | verified | No calculation required. |
| s3-market-docx-39 | verified | No calculation required. |
| s3-market-docx-45 | needs_review | No calculation required. |
| s3-market-docx-45-2 | rejected | No calculation required. |
| s3-market-docx-46 | needs_review | No calculation involved. |
| s3-market-docx-47 | verified | No calculation required. |
| s3-market-docx-54 | verified | No calculation required. Directional profit logic is correct: short futures profit when prices decline; long futures profit when prices rise. |
| s3-market-docx-56 | verified | No calculation required. |
| s3-market-docx-61 | verified | No calculation required. |
| s3-market-docx-63 | verified | No calculation required. |
| s3-market-docx-66 | verified | No calculation required. |
| s3-market-docx-69 | verified | No calculation required. |
| s3-market-docx-70 | verified | Minimum price fluctuation = 1/100 cent/lb = 0.01 cents/lb = $0.0001/lb. Contract size = 40,000 lb. Tick/point value = 40,000 × $0.0001 = $4.00. Source answer C is correct. |
| s3-market-docx-73 | verified | No calculation required. |
| s3-market-docx-74 | verified | No calculation required. |
| s3-market-docx-75 | verified | 94.28 - 94.18 = 0.10 = 10 basis points. Long position loses on price decline. 10 basis points × $25 per basis point = $250 debit, excluding commissions. |
| s3-market-docx-77 | verified | No calculation required. |
| s3-market-docx-79 | verified | No calculation required. |
| s3-market-docx-80 | verified | No calculation required. |
| s3-market-docx-81 | needs_review | No calculation required. |
| s3-market-docx-82 | verified | No calculation required. |
| s3-market-docx-85 | verified | No numerical calculation required. Intrinsic value formulas are coherent: call = max(futures price - strike, 0); put = max(strike - futures price, 0). |
| s3-market-docx-87 | verified | No calculation required. |
| s3-market-docx-88 | verified | No calculation required. |
| s3-market-docx-89 | verified | No numeric calculation required. Conceptual check: daily mark-to-market follows the full futures price change; with expanded limits in effect and a limit-up close, that change is the expanded limit. |
| s3-market-docx-90 | verified | No calculation required. |
| s3-market-docx-91 | needs_review | No calculation required. |
| s3-market-docx-92 | verified | No calculation required. |
| s3-market-docx-96 | verified | No calculation required. |
| s3-market-docx-97 | verified | No calculation required. |
| s3-market-docx-98 | verified | No calculation required. |
| s3-market-docx-99 | verified | No calculation required. |
| s3-market-docx-100 | verified | No calculation required. |
| s3-market-docx-101 | needs_review | No calculation required. |
| s3-market-docx-108 | needs_review | No calculation required. |
| s3-market-docx-109 | verified | No calculation required. |
| s3-market-docx-112 | verified | No calculation required. |
| s3-market-docx-113 | needs_review | No calculation required. |
| s3-market-docx-114 | verified | No calculation required. |
| s3-market-docx-115 | verified | No calculation required. |
| s3-market-docx-116 | verified | No calculation required. |
| s3-market-docx-117 | verified | No calculation required. |
| s3-market-docx-119 | verified | No calculation required. |
| s3-market-docx-120 | verified | No calculation required. |
| s3-market-docx-121 | verified | No calculation required. |
| s3-market-docx-122 | needs_review | No calculation required. |
| s3-market-docx-124 | verified | No calculation required. |
| s3-market-docx-126 | verified | No calculation required. |
| s3-market-docx-127 | verified | No calculation required. |
| s3-market-docx-129 | verified | No calculation required. |
| s3-market-docx-130 | verified | No calculation required. |
| s3-market-docx-131 | verified | Intrinsic value test for options on futures: calls are in-the-money if futures price > strike; puts are in-the-money if futures price < strike. April 52 put: 52.66 > 52, no put intrinsic value. July 53 put: 53.20 > 53, no put intrinsic value. October 54 call: 53.80 < 54, no call intrinsic value. Correct answer: no listed option has intrinsic value. |
| s3-market-docx-132 | verified | Short futures P/L = initial futures price - final futures price. If the price increases by 6 units, P/L = -6 units, a 6-unit loss. Margin deposit is irrelevant to the unit P/L. |
| s3-market-docx-133 | verified | April 42 put: max(42 - 42.66, 0) = 0. April 42 call: max(42.66 - 42, 0) = 0.66. October 44 call: max(43.80 - 44, 0) = 0. October 44 put: max(44 - 43.80, 0) = 0.20. Largest is 0.66, the April 42 call. |
| s3-market-docx-134 | verified | $0.20 per bushel margin divided by $3.50 per bushel price = 0.057142857 = 5.71%. If using a 5,000-bushel contract, margin deposit is $0.20 × 5,000 = $1,000 and notional value is $3.50 × 5,000 = $17,500; $1,000 ÷ $17,500 = 5.71%. |
| s3-market-docx-135 | verified | Initial margin $0.12/bu minus maintenance margin $0.10/bu = $0.02/bu = 2 cents/bu cushion. Long at 425.25 cents; at 423.25 cents the loss equals 2 cents and equity equals maintenance. One more minimum tick of 0.25 cent brings price to 423.00 cents, below maintenance, triggering a margin call. Number of contracts does not affect the price level because margin and loss are both stated per bushel. |
| s3-market-docx-136 | verified | Initial margin $2,000 - maintenance $1,500 = $500 cushion. T-bond point value is $1,000; 1/32 tick value is $31.25. 16 ticks = $500 and price 100-10 - 0-16 = 99-26. Falling below maintenance requires the next tick: 17 ticks = $531.25, price 100-10 - 0-17 = 99-25. Answer D is coherent under the below-maintenance trigger convention. |
| s3-market-docx-137 | verified | Initial margin $0.12/bu minus maintenance margin $0.11/bu = $0.01/bu allowable decline before falling below maintenance. Purchase price $2.53 1/4 minus $0.01 = $2.52 1/4; margin call occurs on a decline of more than $0.01, and the minimum tick is 1/4 cent, so the first triggering price is $2.52. Correct answer B. |
| s3-market-docx-138 | verified | T-bond quote arithmetic uses 32nds. Futures gain: 97-02 - 96-00 = 1-02. Effective cash price: 96-08 - 1-02 = 95-06. The five futures contracts match approximately $500,000 face value assuming $100,000 per T-bond futures contract, but the per-bond effective price calculation is independent of total notional and commissions are ignored. |
| s3-market-docx-139 | verified | Price decline for long silver futures: 375.5 - 362.5 = 13 cents/oz. Contract size 5,000 oz. Loss per contract = 13 cents × 5,000 = 65,000 cents = $650. Equity per contract after loss = $1,500 - $650 = $850, below $1,000 maintenance. Margin call restores to initial margin: $650 × 3 = $1,950. Correct answer D. |
| s3-market-docx-140 | verified | Price gain: $3.62 - $3.51 = $0.11/bu. Contract quantity: 2 × 5,000 = 10,000 bu. Gross gain: $0.11 × 10,000 = $1,100. Commission: $50 × 2 contracts = $100. Net gain: $1,000. Margin: $0.20 × 10,000 = $2,000. Return on equity: $1,000 / $2,000 = 50%. |
| s3-market-docx-141 | needs_review | Initial margin per contract $1,200; maintenance margin per contract $1,000; cushion $200. Silver contract size 5,000 oz. $200 = 20,000 cents; 20,000 / 5,000 = 4.0 cents/oz. Short entry 416.5; adverse move is upward: 416.5 + 4.0 = 420.5 cents/oz. Eight contracts do not change the per-ounce trigger because both margin and contract size scale equally. |
| s3-market-docx-141-2 | verified | Per contract: initial margin $1,200, maintenance $1,000, cushion $200. $200 / 5,000 oz. = $0.04/oz. = 4.0 cents/oz. Short loses on price increase from 416.5. At 420.5, equity reaches maintenance; next 0.5-cent tick to 421.0 puts equity below maintenance and triggers a call per the displayed explanation. D is coherent. |
| s3-market-docx-142 | verified | Price move: 97-00 - 96-00 = 1 point. T-bond contract multiplier $100,000, so 1 point = $1,000 per contract. Per contract net profit = $1,000 - $30 = $970. Per contract margin = $2,000. ROE = $970 / $2,000 = 48.5%. For two contracts: ($2,000 gross - $60 commissions) / $4,000 margin = $1,940 / $4,000 = 48.5%. |
| s3-market-docx-143 | verified | Original margin minus maintenance margin = 12 cents/bu. - 10 cents/bu. = 2 cents/bu. Short at 193 3/4; adverse move is upward. 193 3/4 + 2 = 195 3/4, maintenance threshold. Margin call occurs when price exceeds the maintenance threshold; with 1/4-cent increments, next price is 196. Contract size does not affect the price threshold because margins and price movement are both stated per bushel. |
| s3-market-docx-144 | verified | Put intrinsic value = max(strike - futures, 0) = max(430 - 420, 0) = 10 cents/bu. Time value = premium - intrinsic value = 38 - 10 = 28 cents/bu. Correct answer B is coherent. |
| s3-market-docx-145 | verified | Buy at $2.740, sell at $2.915, gain = $0.175/bu. Contract size 5,000 bu, gross gain = $875. Less $25 round-turn commission = $850 net. Return on initial margin = $850/$2,000 = 0.425 = 42.5%. |
| s3-market-docx-151 | verified | No calculation required. |
| s3-market-docx-157 | verified | Not applicable. |
| s3-market-docx-160 | verified | Short 4 Eurodollar futures at 96.50, offset/buy at 96.10. Price movement = 0.40 = 40 points. Eurodollar tick/point convention shown: $25 per point for this calculation. Per-contract gain = 40 x $25 = $1,000. Total gain = 4 x $1,000 = $4,000. Equivalent formula: 4 x 0.0040 x $1,000,000 x 90/360 = $4,000. |
| s3-market-docx-161 | verified | No calculation required. Price difference between 98-14 and 98-20 is not relevant to correctness because the issue is stop-order execution, not P/L. |
| s3-market-docx-162 | needs_review | No calculation required. |
| s3-market-docx-163 | verified | No numeric calculation required. Directional relationship checked: falling interest rates imply rising bond/T-bond futures prices, so the proper speculative position is long futures, not short. |
| s3-market-docx-164 | verified | No calculation required. |
| s3-market-docx-165 | verified | No calculation required. |
| s3-market-docx-167 | verified | No calculation required. Note: for Treasury note pricing, 97-02 to 96-31 is a 3/32 price difference, not literally 3 full points; the answer choice wording says '3-point difference,' but the educational point remains clear and the source answer is not dependent on the exact unit wording. |
| s3-market-docx-169 | verified | Contracts: 120,000 / 40,000 = 3. Short futures sold at 48.10 cents/lb and bought at 47.20 cents/lb. Price gain = 0.90 cents/lb = $0.009/lb. Gross gain = 3 × 40,000 × $0.009 = $1,080. Commission = 3 × $25 = $75. Net = $1,005 profit. |
| s3-market-docx-182 | verified | Entry short at 63-21/32; exit buy at 64-01/32. Price increase = 64 + 1/32 - (63 + 21/32) = 12/32 = 0.375 points. $100,000 contract: 1 point = $1,000; 0.375 × $1,000 = $375 loss. Direction is adverse for a short position. Commissions excluded as requested. |
| s3-market-docx-184 | verified | No calculation required. |
| s3-market-docx-185 | verified | No calculation required. The long entry at 1242.30 and current price 1249.20 show an unrealized profit; a sell stop at 1246 is below the current market but above the entry price, so it can protect part of that profit if triggered. |
| s3-market-docx-186 | verified | No calculation required. |
| s3-market-docx-188 | verified | No numerical calculation required. |
| s3-market-docx-189 | verified | No numerical profit calculation is required. Direction is coherent: long futures position; protective sell stop should be below current price 88-00 and above entry price 86-00. Only 87-00 satisfies both conditions. |
| s3-market-docx-190 | verified | Buy 2 wheat futures at 251.75 cents/bu.; sell at executed stop price 258.25 cents/bu. Difference = 6.5 cents/bu. = $0.065/bu. Contract size = 5,000 bushels. Gross P/L = 2 × 5,000 × $0.065 = $650 gain. Total commissions = $50. Net P/L = $650 - $50 = $600 gain. Correct answer B. |
| s3-market-docx-191 | verified | Entry 89.50, exit 89.00: adverse move of 0.50 index points. Eurodollar futures point value: $1,000,000 x 90/360 x 0.01 = $2,500 per full point; 0.50 point x $2,500 = $1,250. Equivalent formula: $1,000,000 x 90/360 x 0.005 = $1,250. Direction is coherent because the customer was long and price declined. |
| s3-market-docx-193 | verified | No calculation required. |
| s3-market-docx-194 | needs_review | No calculation required. |
| s3-market-docx-195 | verified | No calculation required. |
| s3-market-docx-196 | verified | No calculation required. |
| s3-market-docx-197 | verified | No calculation required. Contract size of 40,000 pounds does not affect the choice of a put hedge. |
| s3-market-docx-198 | needs_review | No calculation required. |
| s3-market-docx-199 | verified | No calculation required. |
| s3-market-docx-200 | verified | No calculation required. |
| s3-market-docx-201 | verified | No numerical calculation required. |
| s3-market-docx-202 | verified | No calculation required. |
| s3-market-docx-203 | needs_review | No calculation required. |
| s3-market-docx-205 | needs_review | No calculation required. |
| s3-market-docx-207 | verified | Basis = cash - futures = 63.75 cents/lb - 63.50 cents/lb = +0.25 cents/lb. Correct answer A is coherent. |
| s3-market-docx-208 | verified | 200,000 lbs. required / 25,000 lbs. per copper futures contract = 8 contracts. Since the exposure is a future purchase, the proper hedge direction is long futures. Answer C is correct. |
| s3-market-docx-209 | verified | Cash-and-carry cost = $285.45 + ($10 × 2 months) = $305.45 per ounce. December futures price = $289.90 per ounce. Since $289.90 is lower than $305.45, hedging with the December futures is preferable. |
| s3-market-docx-210 | verified | Farmington local cash price = $3.20. December futures = $3.33 1/4. Basis = cash - futures = $3.20 - $3.3325 = -$0.1325 = 13 1/4 cents under. Correct answer D. |
| s3-market-docx-211 | needs_review | 60,000 bushels / 5,000 bushels per contract = 12 futures contracts. Short futures entered June 20 at 224 3/4 and offset July 25 at 277, so loss = 52 1/4 cents/bushel. Cash sale July 25 = 263 3/4 cents/bushel. Effective net price = 263 3/4 - 52 1/4 = 211 1/2 cents/bushel. Margin is not part of the net price calculation. |
| s3-market-docx-211-2 | needs_review | 60,000 bushels / 5,000 bushels per contract = 12 contracts. Source calculation: short futures at 224 3/4, offset at 277, loss = 52 1/4 cents per bushel. Cash sale = 263 3/4 cents. Net/effective price = 263 3/4 - 52 1/4 = 211 1/2 cents per bushel. Margin amount is not needed for the effective price calculation. |
| s3-market-docx-212 | verified | No calculation required. |
| s3-market-docx-213 | verified | No numerical calculation required. |
| s3-market-docx-214 | verified | $2.29 1/4 = $2.2925. 8 1/4 cents = $0.0825. Basis under means cash = futures - basis amount = $2.2925 - $0.0825 = $2.2100, matching choice D. |
| s3-market-docx-215 | verified | No calculation required. |
| s3-market-docx-216 | verified | No calculation required. |
| s3-market-docx-217 | verified | Cash inventory purchased at $4.00 on Oct. 1. December futures at full carry = $4.00 + $0.10/month × 2 months = $4.20. Long cash inventory is hedged with a short futures position. Closing Dec. 1 futures at $4.00 gives a $0.20 futures gain. Carrying cost for two months is $0.20, so the futures gain covers carrying cost; cash price remains $4.00. Net combined gain/loss per bushel = $0.00. |
| s3-market-docx-218 | verified | No calculation required. |
| s3-market-docx-219 | verified | No calculation required. |
| s3-market-docx-220 | verified | Basis = cash - futures. With local basis = -$0.10 and futures = $3.3325, local cash = $3.3325 - $0.10 = $3.2325, quoted as $3.23 1/4. Answer A is correct. |
| s3-market-docx-221 | verified | Computed return on delivery: $38.00 - $0.50 transportation - $1.00 futures discount - $0.60 preparation/delivery cost = $35.90 per hundredweight. Since $35.90 < $37.10 cash price, the statement that the rancher would deliver against futures is false. |
| s3-market-docx-222 | needs_review | Using the stem values: cash 58.82¢/lb. minus futures 59.15¢/lb. = -0.33¢/lb. Therefore choice C is correct. The displayed explanation's apparent '55.82' value would yield -3.33, so it is internally inconsistent unless it is a visual/source typo. |
| s3-market-docx-223 | verified | No calculation required. |
| s3-market-docx-224 | verified | No calculation required. |
| s3-market-docx-225 | verified | Short hedge futures gain = initial futures sell price $5.00/bu. - offset futures buy price $4.45/bu. = $0.55/bu. Effective price received = September cash price $4.25/bu. + $0.55/bu. futures gain = $4.80/bu. Contract size 5,000 bushels; 15,000 bushels requires 3 contracts. Total futures gain would be 15,000 × $0.55 = $8,250, consistent with $0.55/bu.; no commissions stated. |
| s3-market-docx-226 | needs_review | No numerical calculation required. Concept check: basis = cash price - futures price. Long the basis benefits from strengthening basis, i.e., cash price increases relative to futures price. Choice C increases cash and decreases futures, so basis strengthens. |
| s3-market-docx-227 | rejected | May leg: 276 1/2 - 270 1/4 = 6 1/4 cents/bu. July roll cost: 284 3/4 - 280 1/2 = 4 1/4 cents/bu. Net rollover gain = 6 1/4 - 4 1/4 = 2 cents/bu. Five CBOT wheat contracts equal 25,000 bushels, but choices are per bushel, so contract count is not needed for the selected answer. |
| s3-market-docx-227-2 | verified | May leg: 276 1/2 - 270 1/4 = 6 1/4 cents/bu. July replacement cost increase: 284 3/4 - 280 1/2 = 4 1/4 cents/bu. Net rollover result: 6 1/4 - 4 1/4 = 2 cents/bu. Contract count and bushels do not affect the per-bushel answer. |
| s3-market-docx-228 | verified | Cattle: 0.10 × 40,000 × 1 = 4,000 gain. Corn: 0.20 × 5,000 × 3 = 3,000 loss. Net = 4,000 - 3,000 = 1,000 profit. Source answer A is correct. |
| s3-market-docx-229 | verified | Long futures hedge: buy futures at 29.95, sell at 30.45, futures gain = 0.50 per cwt. Cash purchase price = 30.35. Net price paid = 30.35 - 0.50 = 29.85 per cwt. Answer D is correct. |
| s3-market-docx-230 | verified | Initial basis = $6.05 cash - $6.15 futures = -$0.10. Later basis = +$0.15. Change in basis = +$0.15 - (-$0.10) = +$0.25. For long cash/short futures hedger, basis strengthening produces a gain of 25 cents per bushel. |
| s3-market-docx-231 | verified | Short futures hedge: sell at 64.05¢/lb., buy back at 62.95¢/lb. Futures gain = 64.05 - 62.95 = 1.10¢/lb. Effective price received = cash sale price 62.75¢/lb. + futures gain 1.10¢/lb. = 63.85¢/lb. Contract size 40,000 lb. matches cash quantity, so per-pound hedge result is coherent. Transaction costs disregarded. |
| s3-market-docx-232 | verified | April basis = cash $4.63 - futures $5.00 = -$0.37. September basis = cash $4.25 - futures $4.45 = -$0.20. Change = -$0.20 - (-$0.37) = +$0.17, so basis strengthened by $0.17. Contract size and hedge quantity are extraneous and do not affect the basis calculation. |
| s3-market-docx-233 | verified | Initial basis = 3.76 - 3.98 = -0.22. Final basis = 3.94 - 4.10 = -0.16. Change in basis = -0.16 - (-0.22) = +0.06, or 6 cents per bushel. Contract size and commissions are not relevant because the question asks per-bushel basis change rather than hedge profit/loss. |
| s3-market-docx-234 | verified | Cash sale: 11,000 × $2.98 = $32,780. Futures: short 10,000 bushels from $3.23 to $3.00 gains $0.23/bu.; less $0.01/bu. commission = $0.22/bu.; 10,000 × $0.22 = $2,200. Total $34,980 / 11,000 = $3.18 rounded to the nearest cent. |
| s3-market-docx-235 | needs_review | No numerical calculation required. Concept check: basis = cash minus futures; weakening means the basis decreases, which all listed scenarios produce. |
| s3-market-docx-236 | verified | Long hedge: buy futures at 87¢, sell at 89¢ = 2¢/lb gain. 200,000 lb ÷ 25,000 lb per contract = 8 contracts. Futures gain = $0.02 × 200,000 = $4,000. Cash cost = $0.842 × 200,000 = $168,400. Net cost = $168,400 - $4,000 = $164,400. |
| s3-market-docx-236-2 | rejected | Long hedge for anticipated purchase: buy futures at 87¢/lb., sell at 89¢/lb.; gain = 2¢/lb. × 200,000 lb. = $4,000. Cash purchase = 84.2¢/lb. × 200,000 lb. = $168,400. Net cost = $168,400 - $4,000 = $164,400. Contract size 25,000 lb. implies 8 contracts for 200,000 lb.; the per-pound hedge calculation is coherent. |
| s3-market-docx-237 | verified | No calculation required. |
| s3-market-docx-238 | verified | No numerical calculation is required. Directional hedge check: planned buyer is hurt by rising T-note prices/falling rates; buying T-note calls creates long exposure and is coherent. |
| s3-market-docx-239 | verified | No calculation is required to select the hedge. Directional check: existing long equity portfolio + expected market decline = sell stock-index futures as a short hedge. Shown index/futures prices later decline, which would produce a gain on the short futures hedge. |
| s3-market-docx-240 | verified | No calculation required. |
| s3-market-docx-241 | verified | Contract count = exposure ÷ contract size = 250,000 pounds ÷ 62,500 pounds per contract = 4 contracts. No commissions or tick values are involved. |
| s3-market-docx-242 | verified | No numerical calculation is required. Exposure: receive 1,000 × 100 = 100,000 British pounds in three months; risk is pound depreciation. Correct hedge direction is short pound futures. |
| s3-market-docx-243 | verified | No numerical calculation required. |
| s3-market-docx-244 | verified | No numerical calculation required. Directional relationship checked: interest rates fall -> T-bond prices/futures rise; anticipated buyer hedges by going long futures. |
| s3-market-docx-246 | verified | No numerical calculation required. Hedge direction check: future seller/long inventory exposure in bonds should sell interest-rate/bond futures to hedge against falling bond prices from rising rates. |
| s3-market-docx-247 | verified | No numerical calculation required. Direction check: interest rates down -> T-bond prices/futures up -> long T-bond call gains, protecting a future bond buyer. |
| s3-market-docx-248 | verified | Formula: number of futures = (portfolio value × beta) / (index level × multiplier). ($3,000,000 × 1.2) / (1440 × $250) = $3,600,000 / $360,000 = 10 contracts. Hedge direction is sell futures because the investor is long stocks and fears a decline. |
| s3-market-docx-249 | verified | Long stock portfolio hedge: sell futures. Contract value using cash index = 1250.00 × $250 = $312,500. Contracts = $130,000,000 × beta 1 ÷ $312,500 = 416. Correct choice D. |
| s3-market-docx-250 | verified | May 10 basis = cash index 669.25 - September NYSE futures 669.75 = -0.50, stated as 0.50 under. Correct answer B is coherent. |
| s3-market-docx-251 | verified | Exposure: 250,000 pounds / 62,500 = 4 contracts. Futures gain on long hedge: 1.9000 - 1.8370 = 0.0630 dollars per pound. Net cost: 1.8800 - 0.0630 = 1.8170 dollars per pound. Direction is correct for a buyer hedging with long futures. |
| s3-market-docx-252 | needs_review | Hedge direction: sell Swiss franc futures because the manufacturer will receive Swiss francs and fears depreciation. Futures gain =.5441 -.5335 =.0106 $/SF. Effective $/SF = later spot.5228 + futures gain.0106 =.5334. Per calculator = 1,250 SF x.5334 $/SF = $666.75. The number of calculators does not affect the per-calculator result. |
| s3-market-docx-253 | verified | No numerical calculation required. Directional hedge check: long pound-denominated asset exposure should be hedged by short sterling futures. |
| s3-market-docx-254 | verified | Exposure is 250,000 pounds. Contract size is 62,500 pounds, so 4 contracts would hedge the exposure exactly. Hedged price = $1.8370; unhedged delivery price = $1.9000. Difference = $0.0630 per pound. $0.0630 × 250,000 = $15,750. Answer B is coherent. |
| s3-market-docx-255 | verified | No numeric calculation is required. The 30 T-bond futures quantity is given but not tested arithmetically in the visible question. |
| s3-market-docx-256 | verified | No calculation required. |
| s3-market-docx-257 | verified | $10,000,000 face amount ÷ $1,000,000 face value per 90-day T-bill futures contract = 10 contracts. A borrower exposed to rising rates should sell interest-rate futures because rates up means futures prices down. |
| s3-market-docx-258 | verified | GBP 5,000,000 ÷ 62,500 = 80 contracts. Futures converge upward from $1.5200 to $1.5400, a $0.0200 move = 200 ticks at $0.0001. Tick value = 62,500 × $0.0001 = $6.25. Short futures loss = 200 × $6.25 × 80 = $100,000. |
| s3-market-docx-258-2 | rejected | GBP exposure = 5,000,000. Contract size = GBP 62,500, so 80 contracts. Long GBP exposure is hedged by selling GBP futures. Futures converge from $1.5200 to $1.5400, a rise of $0.0200/GBP. Short futures loss = $0.0200 x 5,000,000 = $100,000. Per contract loss = $0.0200 x 62,500 = $1,250; 80 x $1,250 = $100,000. No commissions stated. |
| s3-market-docx-259 | verified | No calculation required. |
| s3-market-docx-260 | verified | Hedge size = $5,000,000 expected T-bill investment / $1,000,000 T-bill futures face value = 5 contracts. Direction: rates down implies T-bill futures prices up, so buy futures for a future purchase hedge. |
| s3-market-docx-261 | verified | No numeric calculation is required. Exposure is 1,000 bicycles × 300 Swiss francs = 300,000 Swiss francs receivable; risk is a fall in CHF/USD value, hedged by selling Swiss franc futures. |
| s3-market-docx-262 | verified | Hedge ratio: $10,000,000 cash borrowing exposure / $1,000,000 Eurodollar contract size = 10 contracts. Future borrower is exposed to rising rates; Eurodollar futures prices fall as rates rise, so a short position is appropriate. September futures match the September borrowing and 90-day term stated in the question. |
| s3-market-docx-263 | verified | 115-10 minus 114-22 = 20/32. T-bond futures tick value for 1/32 = $31.25. Loss per contract = 20 × $31.25 = $625. For 10 contracts, total loss = $6,250. Long futures loss increases the effective bond purchase cost. |
| s3-market-docx-264 | needs_review | Sell futures at.5441 and buy at.5335 for a gain of.0106 $/SF. Later spot is.5228 $/SF. Effective exchange rate =.5228 +.0106 =.5334 $/SF. Per typewriter: 1,250 SF x.5334 = $666.75. The 100 typewriters do not change the per-typewriter result. |
| s3-market-docx-265 | verified | Contract value = 1200.00 x $250 = $300,000. Portfolio value / contract value = $1,800,000 / $300,000 = 6. Beta-adjusted contracts = 6 x.5 = 3. Long equity exposure is hedged by selling futures. Correct answer C. |
| s3-market-docx-266 | verified | Long September T-bill futures at 94.64, offset at 95.14, creates a futures profit of 0.50. Cash T-bills purchased at 95.02. Effective purchase price = 95.02 - 0.50 = 94.52. Contract size matches the $1 million cash exposure, so no hedge ratio adjustment is needed. Transaction costs are ignored. |
| s3-market-docx-267 | verified | Cash: buy 115-30, sell 115-26 = -4/32. Futures: sell 116-10, buy 116-01 = +9/32. Net = +5/32. Treasury bond tick value = $31.25 per 1/32 per $100,000 contract. 100 contracts × 5 ticks × $31.25 = $15,625 profit. Calculation is coherent with contract size and hedge direction. |
| s3-market-docx-268 | verified | Cash loss: $130,000,000 - $123,500,000 = $6,500,000. Short futures gain: (1300.00 - 1242.80) × $250 × 416 = 57.20 × $250 × 416 = $5,948,800. Net = $5,948,800 - $6,500,000 = -$551,200, matching choice C. |
| s3-market-docx-268-2 | rejected | Short futures gain: 1300.00 - 1242.80 = 57.20 points. Futures dollar gain: 416 × 57.20 × $250 = $5,948,800. Cash portfolio loss: $130,000,000 - $123,500,000 = $6,500,000. Net = $5,948,800 - $6,500,000 = -$551,200. Correct choice C. |
| s3-market-docx-269 | verified | Buy at 116-28 and sell at 118-20. Difference: 118 + 20/32 - (116 + 28/32) = 1 + 24/32 = 56/32 = 1.75 points. T-bond futures tick value is $31.25 per 1/32 on $100,000 face value. Gain = 56 x $31.25 x 10 = $17,500. |
| s3-market-docx-270 | verified | Exposure: 375,000 euros = 3 contracts of 125,000 euros. Long futures hedge gain: $1.07 - $1.06 = $0.01/euro. Total futures gain: $0.01 × 375,000 = $3,750. This offsets part of the cash euro cost increase; without the hedge, the firm would have paid $3,750 more than with the hedge. |
| s3-market-docx-271 | verified | Spot GBP = 1.5400 USD/GBP; futures GBP = 1.5200 USD/GBP. F/S = 1.5200/1.5400 = 0.9870 < 1. For USD per GBP, F/S = (1+r_USD)/(1+r_GBP), so r_USD < r_GBP. Correct answer B is coherent. Contract size and hedge quantity are not needed for the inference. |
| s3-market-docx-272 | verified | No calculation required. |
| s3-market-docx-274 | verified | No calculation required. |
| s3-market-docx-275 | verified | No calculation required. |
| s3-market-docx-276 | verified | No calculation required. |
| s3-market-docx-278 | verified | No calculation required. |
| s3-market-docx-279 | verified | No calculation required. |
| s3-market-docx-280 | verified | Spread change: $0.0227 - $0.0195 = $0.0032 per gallon. Heating oil contract size: 42,000 gallons. For 10 contracts, $0.0032 × 42,000 × 10 = $1,344. Direction: long July/short September profits when the September-over-July spread narrows. Correct answer B is coherent. |
| s3-market-docx-281 | verified | Spread change: 8 cents - 5 cents = 3 cents. Contract size: 5,000 bushels. Gross profit: $0.03 × 5,000 = $150. Commission: $35. Net profit: $150 - $35 = $115. Correct answer B. |
| s3-market-docx-282 | verified | No calculation required. |
| s3-market-docx-283 | rejected | No numerical calculation required. Directional spread check: in contango, March < June; a narrowing spread means March strengthens relative to June, so long March/short June profits. |
| s3-market-docx-284 | needs_review | Normal March-over-December spread: 2.90 - 2.82 = 0.08. Latter spread: 2.90 - 2.83 = 0.07. Expected move is widening from 7 cents to 8 cents. Buy the spread by buying March and selling December; if March rises relative to December, the position profits. |
| s3-market-docx-285 | verified | Long May/short July spread entered at May +3¢ and exited at May +10¢. Spread widened by 10¢ - 3¢ = 7¢. A long spread profits from widening, so gain = 7¢/bu. |
| s3-market-docx-286 | verified | No calculation required. |
| s3-market-docx-287 | verified | No calculation required. |
| s3-market-docx-288 | verified | Back month 127.4 cents/lb. minus front month 125.60 cents/lb. equals 1.80 cents/lb., i.e. $0.0180 per lb. For a narrowing positive spread, buy the front month and sell the back month. |
| s3-market-docx-289 | verified | No numerical profit calculation required. Directional spread logic checked: August is initially premium to October; a move from backwardation to contango means August weakens relative to October, so short August/long October is coherent. |
| s3-market-docx-290 | verified | No calculation required. |
| s3-market-docx-291 | verified | No calculation required. |
| s3-market-docx-292 | verified | December short: $1.15 - $1.14 = $0.01 gain per euro. March long: $1.17 - $1.16 = $0.01 gain per euro. Total = $0.02 × 125,000 euro × 10 contracts = $25,000 profit. Source answer C is coherent. |
| s3-market-docx-293 | verified | No calculation required. |
| s3-market-docx-294 | verified | No arithmetic calculation required. Spread relationship check: July currently is May - 5 cents; expected July is May - at least 15 cents. The May-July differential is expected to widen/strengthen in favor of May, so long May/short July is coherent. Equal 5,000-bushel quantities are appropriate for wheat futures spread legs. |
| s3-market-docx-295 | verified | No numerical calculation required. |
| s3-market-docx-296 | needs_review | 181⁄4 cents × $50 per cent per corn contract × 5 contracts = $4,562.50. Direction is profit for short front month/long back month if the spread narrows by 181⁄4 cents. |
| s3-market-docx-297 | needs_review | No calculation required. |
| s3-market-docx-298 | verified | No calculation required. |
| s3-market-docx-299 | verified | No numerical calculation involved. |
| s3-market-docx-300 | verified | No numerical calculation required. Directional spread check: in contango March < June; long March/short June benefits from narrowing because the nearby contract strengthens relative to the deferred contract. |
| s3-market-docx-301 | rejected | Long May: +$0.11/bu. Short July: -$0.02/bu. Net: +$0.09/bu × 5,000 bu. = $450 gross. Less $25 round-turn spread commission = $425 net gain. Answer A is correct. |
| s3-market-docx-301-2 | verified | May long: +$0.11/bu. July short: -$0.02/bu. Net: +$0.09/bu × 5,000 bu = $450 gross gain. Less $25 commission = $425 net gain. Correct answer A. |
| s3-market-docx-302 | rejected | January-February: (255.00 - 253.90) / 253.90 x 12 = 0.05199, or 5.20%. Other adjacent annualized differentials: February-April over 2 months = (0.60/255.00) x 6 = 1.41%; April-August over 4 months = (1.40/255.60) x 3 = 1.64%; August-October over 2 months = (0.80/257.00) x 6 = 1.87%. January-February is largest under these assumptions. |
| s3-market-docx-302-2 | verified | January-February: (255.00 - 253.90) / 253.90 × 12 = 0.05199, or about 5.20%. August-October: 0.80 / 257.00 × 6 ≈ 1.87%. April-August: 1.40 / 255.60 × 3 ≈ 1.64%. Thus C is coherent as the largest annualized spread. |
| s3-market-docx-303 | verified | No calculation required. |
| s3-market-docx-304 | needs_review | Initial spread December - March = -6 cents. Closing spread = -10 cents. Trader was short the spread, so sold at -6 and repurchased at -10. Profit = (-6) - (-10) = +4 cents per troy ounce. Key D is correct. |
| s3-market-docx-305 | needs_review | Sept leg: buy 94.30, sell 94.02 = -0.28. Dec leg: sell 94.09, buy 93.80 = +0.29. Net spread gain = +0.01. Standard Eurodollar tick value: 0.01 = $25 per contract, so 2 contracts × $25 = $50 gain. Source answer C is numerically correct. |
| s3-market-docx-307 | verified | No calculation required. |
| s3-market-docx-310 | verified | No calculation required. |
| s3-market-docx-313 | verified | Short 200 COMEX gold futures contracts at $1,642; current price $1,627. Gain = $15/oz. Contract size = 100 oz. Total profit = $15 × 100 × 200 = $300,000, before commissions. Direction, contract size, and answer are coherent. |
| s3-market-docx-314 | rejected | May long: 87.12 - 86.25 = 0.87 cents/lb. = $0.0087/lb.; $0.0087 x 40,000 x 50 = $17,400 gain. July short: 88.725 - 78.50 = 10.225 cents/lb. = $0.10225/lb.; $0.10225 x 40,000 x 50 = $204,500 gain. Total = $221,900 gain. Tick value check: $0.00025 x 40,000 = $10 per contract, coherent with stated tick value. |
| s3-market-docx-314-2 | verified | May entry value: $0.8625 × 40,000 × 50 = $1,725,000; May exit value: $0.8712 × 40,000 × 50 = $1,742,400; long May profit = $17,400. July entry value: $0.88725 × 40,000 × 50 = $1,774,500; July exit value: $0.7850 × 40,000 × 50 = $1,570,000; short July profit = $204,500. Total = $221,900 gain. Tick value check: $0.00025/lb × 40,000 lbs = $10 per contract. |
| s3-market-docx-317 | verified | No calculation required. |
| s3-market-docx-319 | verified | 5% rally: 2.7646 × 1.05 = 2.90283, rounded in the source to 2.9028. Price change = 0.1382 per gallon. Contract size = 42,000 gallons. Profit per contract = 0.1382 × 42,000 = $5,804.40. For 12 contracts = $69,652.80. Alternatively, 1,382 ticks × $4.20 × 12 = $69,652.80. |
| s3-market-docx-320 | verified | Buy 2 contracts at 65.85 cents/lb.; sell/liquidate at 66.15 cents/lb. Price gain = 0.30 cents/lb. = $0.0030/lb. Contract size = 40,000 lbs.; 2 contracts = 80,000 lbs. Gross profit = $0.0030 × 80,000 = $240. Commissions = $25 × 2 = $50. Net profit = $190. Choice C is correct. |
| s3-market-docx-321 | verified | Short 3 heating oil futures at $0.5890, offset at $0.5760. Per contract price change = $0.0130/gallon. Contract size = 42,000 gallons. Gross profit per contract = $0.0130 × 42,000 = $546. Commission per contract = $50. Net profit per contract = $546 - $50 = $496. Total net profit = 3 × $496 = $1,488. Answer A is coherent with the question asking per contract. |
| s3-market-docx-322 | verified | Spread change = -1.50 - (+1.75) = -3.25. Long front month/short back month is long the spread, so a decrease is a loss. Crude oil contract size = 1,000 barrels; $3.25 per barrel × 1,000 barrels × 10 contracts = $32,500 loss. The source explanation expresses this as 325 cents × $10 per cent × 10 contracts = $32,500. |
| s3-market-docx-323 | verified | No calculation required. |
| s3-market-docx-324 | verified | Price change = 512.5 - 512 = 0.5 cent/bu = $0.005/bu. Contract size = 5,000 bu.; number of contracts = 5. Gross gain = 5 x 5,000 x $0.005 = $125. Commissions = 5 x $30 = $150. Net = $125 - $150 = -$25, matching choice D. |
| s3-market-docx-325 | verified | No calculation required. |
| s3-market-docx-326 | verified | Sell short at $14.07 1/4 = $14.0725 and offset at $13.61. Profit per bu. = $0.4625. Gross profit = $0.4625 × 1,000 × 2 = $925. Commissions = $5 × 2 = $10. Net profit = $915. Margin = $0.25 × 1,000 × 2 = $500. Return on margin = $915 / $500 = 183%. |
| s3-market-docx-327 | verified | Purchase price 210.75 cents; sale/offset price 211.50 cents; increase = 0.75 cent = $0.0075 per bushel. Contract size = 5,000 bushels, so gain per contract = $37.50. Four contracts produce total gain = $150.00. Long position and rising price direction are coherent. Commissions are explicitly ignored. |
| s3-market-docx-328 | verified | Long 2 Sugar #11 contracts from 8.40¢ to 9.40¢/lb: price gain = 1.00¢ = $0.010/lb. Gross profit = 2 x 112,000 x $0.010 = $2,240. Commissions = 2 x $30 = $60. Net profit = $2,180. Choice C is correct. |
| s3-market-docx-329 | verified | Price decline: 45.70 cents - 44.95 cents = 0.75 cents = $0.0075 per lb. Per contract loss: $0.0075 x 40,000 = $300. Five contracts: $1,500. Commissions: 5 x $15 = $75. Total loss: $1,575. Answer B is correct. |
| s3-market-docx-330 | needs_review | Price change: 7.5025 - 6.9450 = 0.5575 per bushel. Total bushels: 5,000 x 2 = 10,000. Gross profit: 0.5575 x 10,000 = $5,575. Commissions: $6 x 2 = $12. Net profit: $5,563. Margin investment: $1 x 10,000 = $10,000. Net return: $5,563 / $10,000 = 0.5563 = 55.63%, which rounds to 55.6% to one decimal place, not 55.9%. |
| s3-market-docx-331 | verified | No calculation required. |
| s3-market-docx-332 | verified | Long 7 contracts; price dropped 100 points. For sugar, 100 points = $0.01/lb. Per contract loss = 112,000 lbs. × $0.01 = $1,120. Commission = $10 per contract. Net loss per contract = $1,130 if commission were charged per side, but the prompt/source states and explains $10/contract, producing $1,120 - $10 = $1,110 per contract and $7,770 total. Direction is coherent because a long position loses when price drops. |
| s3-market-docx-333 | verified | Long 6 June crude futures at $21.05, offset at $22.55: gain = $1.50/barrel. Contract size 1,000 barrels. Gross per contract = $1,500; commission = $50 round turn; net per contract = $1,450. Total gross = 6 x $1,500 = $9,000. Total net would be $8,700. Basis: initial cash - futures = $20.85 - $21.05 = -$0.20 ($0.20 under); final = $22.15 - $22.55 = -$0.40 ($0.40 under). |
| s3-market-docx-334 | verified | Buy 2 wheat futures at $3.51 and sell at $3.62: gain $0.11/bu. Contract quantity is 2 x 5,000 = 10,000 bu.; gross gain $1,100. Commissions $50 x 2 = $100; net gain $1,000. Margin $0.20/bu. x 10,000 bu. = $2,000. Return on equity = $1,000 / $2,000 = 50%. |
| s3-market-docx-334-2 | rejected | Price change: $3.62 - $3.51 = $0.11/bushel. Contract quantity: 2 × 5,000 = 10,000 bushels. Gross gain: $0.11 × 10,000 = $1,100. Commissions: $50 × 2 = $100. Net gain: $1,000. Margin: $0.20 × 10,000 = $2,000. Return on equity: $1,000 / $2,000 = 50%. |
| s3-market-docx-335 | verified | Long 10 at 91.75, sell at 93.25: 1.50 cents/lb = $0.015/lb; $0.015 x 15,000 x 10 = $2,250 gross, minus $250 commissions = $2,000. Long 15 at 92.50, sell at 93.25: 0.75 cents/lb = $0.0075/lb; $0.0075 x 15,000 x 15 = $1,687.50 gross, minus $375 commissions = $1,312.50. Total = $3,312.50 gain. |
| s3-market-docx-335-2 | rejected | Recomputed: First lot gain = 10 × 15,000 × $0.0150 = $2,250 minus $250 commissions = $2,000. Second lot gain = 15 × 15,000 × $0.0075 = $1,687.50 minus $375 commissions = $1,312.50. Total = $3,312.50 gain. Contract size, long direction, cents-per-pound quote, and commissions are coherent. |
| s3-market-docx-336 | verified | Cotton prices are quoted in cents per pound; contract size is 50,000 lb. Trade 1: long 2 May contracts from 61.63 to 61.36 cents = -0.27 cents = -$0.0027/lb; 2 × 50,000 × -$0.0027 = -$270. Trade 2: long 2 May contracts from 61.96 to 62.01 cents = +0.05 cents = +$0.0005/lb; 2 × 50,000 × $0.0005 = $50. Net = -$220, matching choice C. |
| s3-market-docx-337 | rejected | Buy at $2.740, sell at $2.915: gain $0.175/bushel. $0.175 x 5,000 = $875 gross gain. $875 - $25 commission = $850 net gain. $850 / $2,000 initial margin = 0.425 = 42.5%. |
| s3-market-docx-337-2 | rejected | Buy at $2.740; sell at $2.915; gain $0.175/bushel × 5,000 bushels = $875 gross. Less $25 commission = $850 net. $850 / $2,000 initial margin = 42.5%. |
| s3-market-docx-337-3 | verified | Long wheat futures bought at $2.740 and sold at $2.915: gain = $0.175/bushel x 5,000 = $875 gross. Less $25 commission = $850 net. Return on $2,000 margin = 0.425 = 42.5%. |
| s3-market-docx-338 | verified | Contract size 25,000 lbs. First purchase: 3 × (($0.8180 - $0.8020) × 25,000) = $1,200 gross; less 3 × $30 = $90 commissions gives $1,110. Second purchase: 2 × (($0.8180 - $0.8100) × 25,000) = $400 gross; less 2 × $30 = $60 commissions gives $340. Total = $1,450 gain. |
| s3-market-docx-339 | verified | Contract size: 5,000 bushels; 2 contracts = 10,000 bushels. Price change: $6.02 - $5.85 = $0.17 gain per bushel. Gross profit: $0.17 × 10,000 = $1,700. Commissions: $50 × 2 = $100. Net profit: $1,600. Margin: $0.30 × 10,000 = $3,000. ROE: $1,600 / $3,000 = 0.5333 = 53.3%. |
| s3-market-docx-339-2 | rejected | Buy 2 soybean contracts at $5.85 and sell at $6.02: gain $0.17/bu. Contract size 5,000 bu.; 2 contracts = 10,000 bu. Gross profit = $0.17 × 10,000 = $1,700. Commissions = $50 × 2 = $100. Net profit = $1,600. Margin = $0.30 × 10,000 = $3,000. ROE = $1,600 / $3,000 = 0.5333 = 53.3%. |
| s3-market-docx-341 | verified | No calculation required. |
| s3-market-docx-344 | verified | 94-28/32 = 94.875; 96-12/32 = 96.375; difference = 1.5 points. $100,000 x 0.015 = $1,500. Long position gains on rally, so answer B is correct. |
| s3-market-docx-346 | verified | 136-12 = 136 + 12/32 = 136.375; 135-29 = 135 + 29/32 = 135.90625. Price decline = 0.46875 = 15/32. T-bond futures tick value = $31.25 per 1/32. Gain per short contract = 15 x $31.25 = $468.75. For 175 contracts: $468.75 x 175 = $82,031.25 surplus. |
| s3-market-docx-347 | verified | 96-04 = 96 + 4/32 = 96.125; 94-12 = 94 + 12/32 = 94.375; difference = 1.750 points = 0.0175 of $100,000 = $1,750. The displayed answer B is coherent with the stated contract size and bond futures quotation convention. |
| s3-market-docx-348 | verified | No calculation required. |
| s3-market-docx-349 | needs_review | Spread change = $40 - $30 = 10 points. Position long nearby June and short deferred/back month benefits from widening nearby premium. Profit = 10 points × $10/point × 10 contracts = $1,000. |
| s3-market-docx-350 | needs_review | No numerical calculation is involved. |
| s3-market-docx-352 | verified | Short 5 E-mini S&P 500 futures at 1589.75; offset at 1531.25. Price decrease = 58.50 points. Short position profits from decrease. 58.50 × $50 per point = $2,925 per contract. $2,925 × 5 = $14,625 gain before commissions. |
| s3-market-docx-353 | verified | Short 2 contracts at 642.10, offset by buying at 643.25. Price increase = 1.15 points. Loss = 2 x 1.15 x $500 = $1,150. Commissions = 2 x $50 = $100. Total loss = $1,250. Direction, multiplier, contract count, commissions, and answer are coherent. |
| s3-market-docx-354 | verified | Price decrease: 96.10 - 95.24 = 0.86. Tick size: 0.005. Number of ticks: 0.86 / 0.005 = 172. Dollar loss: 172 × $12.50 = $2,150. Long futures loses when price falls; direction is coherent. Commissions are ignored as stated. |
