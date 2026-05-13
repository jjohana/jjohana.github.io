import type { AnswerChoice, Question } from "../types";

type QuestionContentOverride = Partial<Omit<Question, "choices">> & {
  choices?: AnswerChoice[];
};

const reviewedAt = "2026-05-13T00:00:00.000Z";

const calculationChoices = (choices: AnswerChoice[]): AnswerChoice[] => choices;

export const questionContentOverrides: Record<string, QuestionContentOverride> = {
  "s3-market-docx-145": {
    choices: calculationChoices([
      { id: "a", text: "42.5%", isCorrect: true, rationale: "Correct. The futures gain is ($2.915 - $2.740) x 5,000 = $875; after $25 commission, net gain is $850. $850 / $2,000 margin = 42.5%." },
      { id: "b", text: "48.5%", isCorrect: false, rationale: "Incorrect. This overstates the return by not matching the net gain to the $2,000 margin deposit." },
      { id: "c", text: "45.0%", isCorrect: false, rationale: "Incorrect. The net gain after commission is $850, not $900." }
    ]),
    explanation: "The futures gain is ($2.915 - $2.740) x 5,000 bushels = $875. After the $25 round-turn commission, net gain is $850. Return on the $2,000 margin deposit is $850 / $2,000 = 42.5%.",
    updatedAt: reviewedAt
  },
  "s3-market-docx-160": {
    stem: "In expectation that interest rates will rise, a client sells four Eurodollar futures contracts at 96.50. The customer enters a stop order at 96.10 that is executed at that price. What is the customer's gain or loss, excluding commissions?",
    explanation: "A short Eurodollar futures position gains when the futures price falls. The price move is 96.50 - 96.10 = 40 basis points. Each basis point is $25 per contract, so profit is 4 contracts x 40 x $25 = $4,000.",
    updatedAt: reviewedAt
  },
  "s3-market-docx-169": {
    choices: calculationChoices([
      { id: "a", text: "$1,005 profit", isCorrect: true, rationale: "Correct. The short hedge gains 48.10 - 47.20 = 0.90 cents/lb. On three 40,000-lb. contracts, gross gain is $1,080; less $75 commissions gives $1,005." },
      { id: "b", text: "$1,005 loss", isCorrect: false, rationale: "Incorrect. The short futures hedge gained because the offset price was below the original sale price." },
      { id: "c", text: "$1,155 loss", isCorrect: false, rationale: "Incorrect. This has the wrong direction and does not match the commission-adjusted hedge result." },
      { id: "d", text: "$1,155 profit", isCorrect: false, rationale: "Incorrect. This overstates the profit; commissions reduce the gross $1,080 gain to $1,005." }
    ]),
    explanation: "The farmer sold three futures contracts at 48.10 and bought them back at 47.20, gaining 0.90 cents/lb. Gross gain is 0.0090 x 40,000 x 3 = $1,080. Subtracting three $25 commissions gives a $1,005 futures-hedge profit.",
    updatedAt: reviewedAt
  },
  "s3-market-docx-179": {
    stem: "If a customer enters the order \"Cancel Buy 10 April Platinum Order #145 entered today,\" what will happen?",
    choices: calculationChoices([
      { id: "a", text: "The order will not be executed but will be held for further instructions.", isCorrect: false, rationale: "Incorrect. A cancel order seeks to cancel the prior order, not hold it for further instructions." },
      { id: "b", text: "The floor broker will be liable for the order if it has already been executed.", isCorrect: false, rationale: "Incorrect. If the order was already filled, it is too late to cancel and the customer remains responsible for the trade." },
      { id: "c", text: "The order will be canceled if it has not already been executed.", isCorrect: true, rationale: "Correct. A cancellation is effective only if the original order has not already been filled." },
      { id: "d", text: "The broker will sell 10 April platinum contracts at the market.", isCorrect: false, rationale: "Incorrect. The instruction is to cancel a previous buy order, not enter a new sell order." }
    ]),
    updatedAt: reviewedAt
  },
  "s3-market-docx-182": {
    choices: calculationChoices([
      { id: "a", text: "$2,578.75", isCorrect: false, rationale: "Incorrect. The price move is 12/32, not a larger multi-point move." },
      { id: "b", text: "$1,375.00", isCorrect: false, rationale: "Incorrect. This overstates the 12/32 move on a $100,000 T-bond futures contract." },
      { id: "c", text: "$375.00", isCorrect: true, rationale: "Correct. The loss is 12/32 x $1,000 = 12 x $31.25 = $375." },
      { id: "d", text: "$750.00", isCorrect: false, rationale: "Incorrect. This doubles the one-contract loss." }
    ]),
    explanation: "The short position was sold at 63-21 and bought back at 64-01, a 12/32 adverse move. Each 1/32 on a $100,000 T-bond futures contract is $31.25, so the loss is 12 x $31.25 = $375 before commissions.",
    updatedAt: reviewedAt
  },
  "s3-market-docx-204": {
    stem: "Which type of market would you anticipate seeing when there is a current shortage of a physical commodity?",
    choices: calculationChoices([
      { id: "a", text: "Inverted market", isCorrect: true, rationale: "Correct. A shortage in the nearby cash commodity can push spot or nearby prices above deferred futures prices, creating an inverted market, also called backwardation." },
      { id: "b", text: "Contango market", isCorrect: false, rationale: "Incorrect. Contango normally describes deferred futures prices above nearby prices, often reflecting carrying charges rather than a nearby shortage premium." },
      { id: "c", text: "Carrying-charge market", isCorrect: false, rationale: "Incorrect. A carrying-charge market is associated with deferred prices reflecting storage, insurance, financing, and other carrying costs." },
      { id: "d", text: "Short market", isCorrect: false, rationale: "Incorrect. This is not the standard term for a futures price structure caused by a nearby commodity shortage." }
    ]),
    explanation: "An inverted market, or backwardation, occurs when the spot or nearby delivery month is priced above more distant delivery months. It can occur when there is a current shortage of the physical commodity and buyers bid nearby supplies to a premium.",
    sourceCode: "04_EZ_12",
    updatedAt: reviewedAt
  },
  "s3-market-docx-208": {
    subtopicId: "commodity-hedges",
    stem: "On August 1, a copper pipe fabricator contracts to sell pipe that it will fabricate in December at a fixed price. It will require 200,000 pounds of copper in late November. To hedge its copper purchase risk, with a copper futures contract size of 25,000 pounds, what should the fabricator do?",
    choices: calculationChoices([
      { id: "a", text: "Buy 2 copper futures contracts.", isCorrect: false, rationale: "Incorrect. The hedge should be long, but 2 contracts cover only 50,000 pounds." },
      { id: "b", text: "Sell 2 copper futures contracts.", isCorrect: false, rationale: "Incorrect. The fabricator needs to buy copper later, so it is exposed to rising prices and should not use a short hedge." },
      { id: "c", text: "Buy 8 copper futures contracts.", isCorrect: true, rationale: "Correct. The fabricator needs copper later and fears higher prices, so it uses a long hedge. 200,000 / 25,000 = 8 contracts." },
      { id: "d", text: "Sell 8 copper futures contracts.", isCorrect: false, rationale: "Incorrect. Eight contracts is the right size, but selling futures would hedge a future sale, not a future purchase." }
    ]),
    explanation: "The fabricator has committed to a fixed sale price but still needs to buy copper later. If copper prices rise, its input cost rises. A long hedge offsets that risk. The hedge size is 200,000 pounds / 25,000 pounds per contract = 8 contracts, so the correct action is to buy 8 copper futures contracts.",
    sourceCode: "04_IM_9",
    updatedAt: reviewedAt
  },
  "s3-market-docx-234": {
    stem: "It is January. A farmer expects to harvest 11,000 bushels of soft red winter wheat in May. Cash wheat is $3.12 and May wheat futures are $3.23. He hedges by selling two May wheat futures contracts of 5,000 bushels each. In May, he sells 11,000 bushels of cash wheat at $2.98 and covers the short futures position at $3.00. With commission costs of $0.01 per bushel on the futures hedge, what effective price did the farmer receive per bushel?",
    updatedAt: reviewedAt
  },
  "s3-market-docx-236": {
    subtopicId: "commodity-hedges",
    updatedAt: reviewedAt
  },
  "s3-market-docx-241": {
    subtopicId: "currency-hedges",
    updatedAt: reviewedAt
  },
  "s3-market-docx-251": {
    subtopicId: "currency-hedges",
    updatedAt: reviewedAt
  },
  "s3-market-docx-270": {
    stem: "In March, a United States company has contracted to pay 375,000 euro for German doll houses from a German firm in June. The current cash euro price is $1.07. The firm hedges by buying euro futures at $1.06. In June, the cash euro price is $1.09 and the futures price is $1.07. Had the company not hedged, how many more or fewer U.S. dollars would it have paid?",
    choices: calculationChoices([
      { id: "a", text: "$1,250 more", isCorrect: false, rationale: "Incorrect. The hedge gain is $0.01 per euro on 375,000 euro, not $1,250." },
      { id: "b", text: "$3,750 less", isCorrect: false, rationale: "Incorrect. Without the hedge, the company would have paid more, not less." },
      { id: "c", text: "$1,250 less", isCorrect: false, rationale: "Incorrect. This has the wrong direction and amount." },
      { id: "d", text: "$3,750 more", isCorrect: true, rationale: "Correct. The futures hedge gained $0.01 per euro on 375,000 euro, reducing the cost by $3,750 versus being unhedged." }
    ]),
    explanation: "The long euro futures hedge gains $1.07 - $1.06 = $0.01 per euro. On 375,000 euro, that is $3,750. Without the hedge, the company would have paid $3,750 more.",
    updatedAt: reviewedAt
  },
  "s3-market-docx-279": {
    stem: "Margin requirements for spreads are usually:",
    choices: calculationChoices([
      { id: "a", text: "Lower than for outright positions.", isCorrect: true, rationale: "Correct. Exchanges and clearing firms usually set lower margin for recognized spreads because the legs partly offset each other's price risk." },
      { id: "b", text: "Higher than for outright positions.", isCorrect: false, rationale: "Incorrect. Recognized spreads usually receive reduced margin compared with outright positions." },
      { id: "c", text: "The same as for outright positions.", isCorrect: false, rationale: "Incorrect. Spread margin is commonly lower, although requirements depend on the exchange, product, and firm." },
      { id: "d", text: "Lower than for outright positions only when the spread was established via a single transaction.", isCorrect: false, rationale: "Incorrect. Margin treatment depends on the recognized spread risk, not only on whether it was entered as one order." }
    ]),
    explanation: "A recognized spread combines related long and short futures positions. Because the legs partially offset, the risk is usually lower than an outright long or short position, so margin requirements are generally lower. The exact requirement still depends on exchange and firm rules.",
    sourceCode: "manual-review-2026-05-14",
    updatedAt: reviewedAt
  },
  "s3-market-docx-292": {
    choices: calculationChoices([
      { id: "a", text: "No profit or loss", isCorrect: false, rationale: "Incorrect. The spread changed favorably for the long March/short December position." },
      { id: "b", text: "$20,000 profit", isCorrect: false, rationale: "Incorrect. The spread widened by $0.02 across 10 contracts of 125,000 euro." },
      { id: "c", text: "$25,000 profit", isCorrect: true, rationale: "Correct. Profit = 10 x $0.02 x 125,000 = $25,000." },
      { id: "d", text: "$25,000 loss", isCorrect: false, rationale: "Incorrect. The spread moved in the trader's favor." }
    ]),
    updatedAt: reviewedAt
  },
  "s3-market-docx-302": {
    stem: "Gold futures are quoted as follows: January $253.90/oz., February $255.00/oz., April $255.60/oz., August $257.00/oz., and October $257.50/oz. If a trader wants the spread with the largest annualized price differential, which spread should be executed?",
    choices: calculationChoices([
      { id: "a", text: "Short January, long February", isCorrect: false, rationale: "Incorrect. This is the opposite of the relative-value spread indicated by the annualized differential." },
      { id: "b", text: "Long August, short October", isCorrect: false, rationale: "Incorrect. The August-October differential is smaller on an annualized basis than the January-February differential." },
      { id: "c", text: "Long January, short February", isCorrect: true, rationale: "Correct. January is low relative to February. The one-month $1.10 difference annualizes to about 5.2%, the largest differential in the list." },
      { id: "d", text: "Long April, short August", isCorrect: false, rationale: "Incorrect. The April-August differential is spread over a longer interval and is lower on an annualized basis." }
    ]),
    explanation: "Compare the price differences on an annualized basis. January to February differs by $1.10 over roughly one month, or about ($1.10 / $253.90) x 12 = 5.2% annualized. That is the largest relative differential shown, so the spread is to buy the lower relative month, January, and sell the higher relative month, February.",
    sourceCode: "08_IM_1",
    updatedAt: reviewedAt
  },
  "s3-market-docx-319": {
    stem: "A speculator purchases 12 October RBOB gasoline futures contracts, each covering 42,000 gallons, at $2.7646 per gallon. If gasoline futures rise by 5%, what is the speculator's approximate profit?",
    choices: calculationChoices([
      { id: "a", text: "$6,965.28 profit", isCorrect: false, rationale: "Incorrect. This is off by a factor of 10." },
      { id: "b", text: "$58,056.60 profit", isCorrect: false, rationale: "Incorrect. This is one contract short of the full 12-contract position." },
      { id: "c", text: "$6,652.00 profit", isCorrect: false, rationale: "Incorrect. This does not apply the 5% price increase across all gallons and contracts." },
      { id: "d", text: "$69,652.80 profit", isCorrect: true, rationale: "Correct. Rounded to four decimals, the price rises from 2.7646 to 2.9028, a $0.1382 gain per gallon. Profit = $0.1382 x 42,000 x 12 = $69,652.80." }
    ]),
    explanation: "A 5% rise from $2.7646 is approximately $2.9028, a gain of $0.1382 per gallon when rounded to four decimals. Profit is $0.1382 x 42,000 gallons x 12 contracts = $69,652.80.",
    updatedAt: reviewedAt
  },
  "s3-market-docx-320": {
    stem: "A customer buys two live cattle futures contracts, each covering 40,000 pounds, at 65.85 cents/lb. Commission is $25 per contract. The position is liquidated after the market advances to 66.15 cents/lb. What is the profit?",
    choices: calculationChoices([
      { id: "a", text: "$1,400", isCorrect: false, rationale: "Incorrect. This overstates the 0.30-cent move." },
      { id: "b", text: "$215", isCorrect: false, rationale: "Incorrect. This does not subtract the commission amount used in the question." },
      { id: "c", text: "$190", isCorrect: true, rationale: "Correct. Gross profit is $0.0030 x 80,000 pounds = $240; subtracting $50 commissions gives $190." },
      { id: "d", text: "$140", isCorrect: false, rationale: "Incorrect. This subtracts too much commission." }
    ]),
    explanation: "The price gain is 0.30 cents/lb., or $0.0030. On two 40,000-pound contracts, gross profit is $0.0030 x 80,000 = $240. Subtracting $50 total commissions gives $190.",
    updatedAt: reviewedAt
  },
  "s3-market-docx-321": {
    choices: calculationChoices([
      { id: "a", text: "$496 profit", isCorrect: true, rationale: "Correct. Per contract profit is ($0.5890 - $0.5760) x 42,000 - $50 = $496." },
      { id: "b", text: "$1,488 profit", isCorrect: false, rationale: "Incorrect. That is the total profit across three contracts, but the question asks per contract." },
      { id: "c", text: "$546 loss", isCorrect: false, rationale: "Incorrect. $546 is the gross gain per contract before commissions, not a loss." },
      { id: "d", text: "$1,638 profit", isCorrect: false, rationale: "Incorrect. This uses gross profit across the position without the commission adjustment." }
    ]),
    explanation: "The short position gains because the offset price is lower. Per contract gross profit is ($0.5890 - $0.5760) x 42,000 = $546. Subtracting $50 commission gives $496 profit per contract.",
    updatedAt: reviewedAt
  },
  "s3-market-docx-324": {
    choices: calculationChoices([
      { id: "a", text: "$125 gain", isCorrect: false, rationale: "Incorrect. $125 is the gross gain before commissions." },
      { id: "b", text: "$375 gain", isCorrect: false, rationale: "Incorrect. This overstates the half-cent move." },
      { id: "c", text: "$125 loss", isCorrect: false, rationale: "Incorrect. The commission-adjusted loss is smaller." },
      { id: "d", text: "$25 loss", isCorrect: true, rationale: "Correct. Gross gain is 0.5 cent x 5,000 x 5 = $125; commissions are 5 x $30 = $150, leaving a $25 loss." }
    ]),
    explanation: "The price gain is 0.5 cent/bushel. Gross gain is $0.005 x 5,000 bushels x 5 contracts = $125. Commissions are 5 x $30 = $150, so the net result is a $25 loss.",
    updatedAt: reviewedAt
  },
  "s3-market-docx-328": {
    stem: "A speculator initiates a long position in two sugar contracts at 8.40 cents/lb. and liquidates at 9.40 cents/lb. The commission is $30 per contract. What is his net profit? The contract size is 112,000 lbs.",
    explanation: "The price gain is 1.00 cent/lb., or $0.01. Gross profit is 2 x 112,000 x $0.01 = $2,240. Subtracting $60 commissions gives a $2,180 net profit.",
    updatedAt: reviewedAt
  },
  "s3-market-docx-329": {
    stem: "A customer buys five pork belly futures contracts, each covering 40,000 lbs., at 45.70 cents/lb. Commission is $15 per contract. The position is liquidated after the market falls to 44.95 cents/lb. What is the loss on this transaction?",
    choices: calculationChoices([
      { id: "a", text: "$1,130", isCorrect: false, rationale: "Incorrect. This understates the price move and commission effect." },
      { id: "b", text: "$1,575", isCorrect: true, rationale: "Correct. Price loss is 0.75 cent/lb. x 40,000 x 5 = $1,500; commissions add $75, for a $1,575 loss." },
      { id: "c", text: "$1,425", isCorrect: false, rationale: "Incorrect. Commissions increase, not reduce, the loss." }
    ]),
    explanation: "The long position loses 45.70 - 44.95 = 0.75 cents/lb. Gross loss is $0.0075 x 40,000 x 5 = $1,500. Adding $75 commissions gives a total loss of $1,575.",
    updatedAt: reviewedAt
  },
  "s3-market-docx-335": {
    stem: "Orange juice prices have fallen substantially. Expecting a correction, a trader buys 10 FCOJ contracts at 91.75 cents/lb. After prices increase, the trader buys 15 more FCOJ contracts at 92.50 cents/lb. Three months later, the trader closes the entire position at 93.25 cents/lb. Commissions are $25 per contract, the contract size is 15,000 lbs., and prices are quoted in cents/lb. What is the trader's total gain or loss?",
    choices: calculationChoices([
      { id: "a", text: "$2,000 gain", isCorrect: false, rationale: "Incorrect. This only reflects the first group of contracts after commissions." },
      { id: "b", text: "$3,312.50 loss", isCorrect: false, rationale: "Incorrect. Both groups of long contracts were closed above their purchase prices." },
      { id: "c", text: "$3,312.50 gain", isCorrect: true, rationale: "Correct. The first group nets $2,000 and the second group nets $1,312.50, for a total gain of $3,312.50." },
      { id: "d", text: "$3,687.50 gain", isCorrect: false, rationale: "Incorrect. This omits commissions." }
    ]),
    explanation: "The first 10 contracts gain (93.25 - 91.75) cents x 15,000 x 10 = $2,250 gross, less $250 commissions = $2,000. The next 15 contracts gain (93.25 - 92.50) cents x 15,000 x 15 = $1,687.50 gross, less $375 commissions = $1,312.50. Total gain is $3,312.50.",
    updatedAt: reviewedAt
  },
  "s3-market-docx-337": {
    stem: "A speculator buys a December wheat futures contract, 5,000 bushels per contract, at $2.74. His initial margin is $2,000. Wheat rises and he offsets a week later at $2.91 1/2. His round-turn commission cost is $25. What percent return did the speculator earn on his margin deposit?",
    choices: calculationChoices([
      { id: "a", text: "43.75%", isCorrect: false, rationale: "Incorrect. This is the gross return before subtracting commission." },
      { id: "b", text: "42.5%", isCorrect: true, rationale: "Correct. Net gain is $850, and $850 / $2,000 = 42.5%." },
      { id: "c", text: "45.0%", isCorrect: false, rationale: "Incorrect. This overstates the net gain." }
    ]),
    explanation: "The futures gain is ($2.915 - $2.740) x 5,000 = $875. After the $25 commission, net gain is $850. Return on margin is $850 / $2,000 = 42.5%.",
    updatedAt: reviewedAt
  },
  "s3-market-docx-352": {
    stem: "Your customer is bearish on the stock market and sells 5 S&P 500 e-mini contracts, multiplier $50, at 1589.75. The customer offsets the position at 1531.25. What is the gain or loss before commissions?",
    choices: calculationChoices([
      { id: "a", text: "$2,925", isCorrect: false, rationale: "Incorrect. This is one contract's point gain times $50, not all five contracts." },
      { id: "b", text: "$73,125", isCorrect: false, rationale: "Incorrect. This does not use the index-point difference correctly." },
      { id: "c", text: "$14,625", isCorrect: true, rationale: "Correct. Profit is (1589.75 - 1531.25) x $50 x 5 = $14,625." },
      { id: "d", text: "$29,250", isCorrect: false, rationale: "Incorrect. This doubles the correct gain." }
    ]),
    updatedAt: reviewedAt
  },
  "s3-market-docx-353": {
    choices: calculationChoices([
      { id: "a", text: "$1,150", isCorrect: false, rationale: "Incorrect. This is the trading loss before commissions." },
      { id: "b", text: "$500", isCorrect: false, rationale: "Incorrect. This does not reflect the 1.15 index-point adverse move on two contracts." },
      { id: "c", text: "$1,000", isCorrect: false, rationale: "Incorrect. This omits part of the adverse price move and commissions." },
      { id: "d", text: "$1,250", isCorrect: true, rationale: "Correct. Trading loss is 2 x (643.25 - 642.10) x $500 = $1,150; adding $100 commissions gives $1,250." }
    ]),
    explanation: "The short index futures position loses when the offset price is higher. Trading loss is 2 x (643.25 - 642.10) x $500 = $1,150. Adding $50 commission per contract gives a total loss of $1,250.",
    updatedAt: reviewedAt
  },
  "s3-market-docx-355": {
    stem: "A speculator sells one September Eurodollar futures contract at 93.41 and later buys it back at 94.80. Each basis point is worth $25 per contract. Excluding transaction costs, what is the loss per contract?",
    choices: calculationChoices([
      { id: "a", text: "$9,750", isCorrect: false, rationale: "Incorrect. This overstates the loss. The adverse move is 139 basis points, not 390 basis points." },
      { id: "b", text: "$6,950", isCorrect: false, rationale: "Incorrect. This doubles the correct loss." },
      { id: "c", text: "$13,900", isCorrect: false, rationale: "Incorrect. This uses an incorrect dollar value for the price move." },
      { id: "d", text: "$3,475 loss", isCorrect: true, rationale: "Correct. The short position loses when the contract is bought back at a higher price: 94.80 - 93.41 = 1.39, or 139 basis points. 139 x $25 = $3,475." }
    ]),
    explanation: "A short Eurodollar futures position loses when the offset price is higher than the sale price. The move from 93.41 to 94.80 is 1.39, or 139 basis points. At $25 per basis point, the loss is 139 x $25 = $3,475 per contract.",
    sourceCode: "08_IM_14",
    updatedAt: reviewedAt
  },
  "s3-market-docx-360": {
    stem: "A speculator goes long 5 June Value Line Index futures at 1050.00. The contract multiplier is $250. What is the speculator's loss if the position is closed out at 1025.00?",
    choices: calculationChoices([
      { id: "a", text: "$12,500", isCorrect: false, rationale: "Incorrect. This uses too small a contract count or multiplier." },
      { id: "b", text: "$62,500", isCorrect: false, rationale: "Incorrect. This doubles the correct loss." },
      { id: "c", text: "$31,250", isCorrect: true, rationale: "Correct. Loss is (1050 - 1025) x $250 x 5 = $31,250." },
      { id: "d", text: "$15,500", isCorrect: false, rationale: "Incorrect. This does not match the index move and multiplier." }
    ]),
    explanation: "The long position loses 25 index points per contract. Loss is 25 x $250 x 5 contracts = $31,250.",
    updatedAt: reviewedAt
  },
  "s3-market-docx-370": {
    stem: "T-bond futures prices have fallen substantially. Expecting a correction, a trader buys 12 T-bond contracts at 115-04, then buys 15 more at 115-28. Three months later, the trader closes the entire position at 116-12. Commissions are $30 per contract, and each 1/32 is worth $31.25. What is the trader's total gain or loss?",
    choices: calculationChoices([
      { id: "a", text: "$14,640 gain", isCorrect: false, rationale: "Incorrect. This only reflects the first 12 contracts after commissions." },
      { id: "b", text: "$23,250 loss", isCorrect: false, rationale: "Incorrect. Both long entries were closed at a higher price." },
      { id: "c", text: "$23,250 gain", isCorrect: false, rationale: "Incorrect. This omits commissions and overstates the result." },
      { id: "d", text: "$21,690 gain", isCorrect: true, rationale: "Correct. The first group nets $14,640 and the second group nets $7,050, for total gain of $21,690." }
    ]),
    explanation: "The first 12 contracts gain 40/32 each: 12 x 40 x $31.25 = $15,000, less $360 commissions = $14,640. The next 15 contracts gain 16/32 each: 15 x 16 x $31.25 = $7,500, less $450 commissions = $7,050. Total gain is $21,690.",
    updatedAt: reviewedAt
  },
  "s3-market-docx-431": {
    stem: "A customer who expects interest rates to fall sells four March 104 T-bond calls at 3-40 and buys four March 100 T-bond calls at 6-24. What is the maximum loss, including commissions of $35 per option spread, given a $100,000 contract value and T-bond options priced in 64ths of a percent?",
    choices: calculationChoices([
      { id: "a", text: "$2,785 loss", isCorrect: false, rationale: "Incorrect. This is approximately one spread, not all four spreads." },
      { id: "b", text: "$5,570 loss", isCorrect: false, rationale: "Incorrect. This is roughly two spreads, not all four." },
      { id: "c", text: "$11,000 loss", isCorrect: false, rationale: "Incorrect. This omits $140 total commissions." },
      { id: "d", text: "$11,140 loss", isCorrect: true, rationale: "Correct. Net debit is 6-24 minus 3-40 = 2-48, or 2.75 points = $2,750 per spread. Four spreads cost $11,000 plus $140 commissions." }
    ]),
    explanation: "The customer bought the lower-strike call and sold the higher-strike call, creating a debit vertical call spread. Net premium is 6-24 minus 3-40 = 2-48, or 2.75 points. At $1,000 per point, that is $2,750 per spread. Four spreads cost $11,000, plus $140 commissions, so maximum loss is $11,140.",
    updatedAt: reviewedAt
  }
};

export function applyQuestionContentOverrides(question: Question): Question {
  const override = questionContentOverrides[question.id];
  if (!override) return question;
  return {
    ...question,
    ...override,
    choices: override.choices ?? question.choices
  };
}
