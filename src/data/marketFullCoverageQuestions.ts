import type { Difficulty, Question } from "../types";

const createdAt = "2026-05-13T00:00:00.000Z";

type CoverageSpec = {
  id: string;
  topicId: string;
  subtopicId: string;
  difficulty: Difficulty;
  stem: string;
  correct: string;
  distractors: [string, string, string];
  explanation: string;
};

function q(spec: CoverageSpec): Question {
  const choices = [spec.correct, ...spec.distractors].map((text, index) => ({
    id: String.fromCharCode(97 + index),
    text,
    isCorrect: index === 0,
    rationale:
      index === 0
        ? `Correct. ${spec.explanation}`
        : `Incorrect. This choice does not match the rule or calculation tested: ${spec.explanation}`
  }));

  return {
    id: spec.id,
    sectionId: "market_knowledge",
    topicId: spec.topicId,
    subtopicId: spec.subtopicId,
    difficulty: spec.difficulty,
    questionType: "multiple_choice",
    stem: spec.stem,
    choices,
    explanation: spec.explanation,
    sourceType: "user-authored",
    active: true,
    createdAt
  };
}

const specs: CoverageSpec[] = [
  {
    id: "mk-full-futures-vs-forwards-001",
    topicId: "futures-theory",
    subtopicId: "futures-vs-forwards",
    difficulty: "easy",
    stem: "Which feature is most typical of an exchange-traded futures contract rather than a forward contract?",
    correct: "Standardized contract terms supported by clearinghouse performance",
    distractors: ["Fully customized bilateral terms", "No margin or settlement process", "A contract that cannot be offset"],
    explanation: "Futures are standardized and cleared; forwards are privately negotiated and customized."
  },
  {
    id: "mk-full-clearinghouse-001",
    topicId: "futures-theory",
    subtopicId: "clearinghouse",
    difficulty: "easy",
    stem: "What is the clearinghouse's key role after a futures trade is cleared?",
    correct: "It stands between the buyer and seller and supports contract performance",
    distractors: ["It forecasts the cash price", "It sets each customer's tax rate", "It removes all trading risk"],
    explanation: "The clearinghouse reduces counterparty risk by becoming central to cleared trade performance."
  },
  {
    id: "mk-full-offsetting-positions-001",
    topicId: "futures-theory",
    subtopicId: "offsetting-positions",
    difficulty: "easy",
    stem: "A trader who is short one September futures contract buys one September contract in the same market. What is the usual result?",
    correct: "The short position is offset",
    distractors: ["The trader doubles the short position", "The trader receives automatic delivery", "The position becomes an option"],
    explanation: "An equal and opposite trade in the same contract normally closes the existing futures position."
  },
  {
    id: "mk-full-delivery-provisions-001",
    topicId: "futures-theory",
    subtopicId: "delivery-provisions",
    difficulty: "medium",
    stem: "Why do physical-delivery futures contracts specify delivery locations, grades, and timing?",
    correct: "To define what satisfies delivery if a position remains open into the delivery process",
    distractors: ["To guarantee speculative profits", "To eliminate the need for margin", "To prevent all offsetting trades"],
    explanation: "Delivery provisions define acceptable delivery performance under the contract."
  },
  {
    id: "mk-full-basis-grade-premiums-discounts-001",
    topicId: "futures-theory",
    subtopicId: "basis-grade-premiums-discounts",
    difficulty: "medium",
    stem: "A deliverable commodity grade is superior to the par grade. How may the contract account for that quality difference?",
    correct: "Through a stated premium or adjustment",
    distractors: ["By cancelling delivery", "By eliminating basis risk", "By converting the trade to a stock transaction"],
    explanation: "Delivery terms can specify premiums and discounts for grades that differ from par."
  },
  {
    id: "mk-full-normal-vs-inverted-markets-001",
    topicId: "futures-theory",
    subtopicId: "normal-vs-inverted-markets",
    difficulty: "easy",
    stem: "Nearby futures trade above deferred futures. What market structure does this describe?",
    correct: "An inverted market",
    distractors: ["A normal carrying-charge market", "A flat commission schedule", "An option calendar spread"],
    explanation: "An inverted market has nearby prices above deferred prices, often reflecting nearby supply pressure."
  },
  {
    id: "mk-full-carrying-charges-001",
    topicId: "futures-theory",
    subtopicId: "carrying-charges",
    difficulty: "medium",
    stem: "Which items are most associated with carrying charges for a storable commodity?",
    correct: "Storage, insurance, and financing costs",
    distractors: ["Arbitration fees only", "Option strike selection only", "Customer account approval forms"],
    explanation: "Carrying charges are costs of holding a commodity over time."
  },
  {
    id: "mk-full-hedging-theory-001",
    topicId: "futures-theory",
    subtopicId: "hedging-theory",
    difficulty: "easy",
    stem: "A commercial firm uses futures to offset risk in a related cash-market exposure. What is this activity?",
    correct: "Hedging",
    distractors: ["Pure speculation", "Exchange discipline", "Cash settlement pricing"],
    explanation: "Hedging uses futures to reduce adverse price risk in an existing or anticipated cash position."
  },
  {
    id: "mk-full-speculative-theory-001",
    topicId: "futures-theory",
    subtopicId: "speculative-theory",
    difficulty: "easy",
    stem: "A trader takes a futures position solely because of a price forecast and has no offsetting cash exposure. What is the trader doing?",
    correct: "Speculating",
    distractors: ["Making delivery", "Reducing cash inventory risk", "Filing a delivery notice"],
    explanation: "Speculators assume price risk for possible profit without a matching cash-market exposure."
  },
  {
    id: "mk-full-general-futures-terminology-001",
    topicId: "futures-theory",
    subtopicId: "general-futures-terminology",
    difficulty: "easy",
    stem: "What does a short futures position generally profit from?",
    correct: "A decline in the futures price",
    distractors: ["A rise in the futures price", "No price movement ever", "The option premium increasing automatically"],
    explanation: "A short futures position sells first and benefits if it can be bought back lower."
  },
  {
    id: "mk-full-general-options-terminology-001",
    topicId: "futures-theory",
    subtopicId: "general-options-terminology",
    difficulty: "easy",
    stem: "What right does a futures put option give its buyer?",
    correct: "The right to sell the underlying futures contract at the strike price",
    distractors: ["The obligation to buy the futures contract", "The right to collect storage fees", "The right to cancel exchange margin"],
    explanation: "A put gives the buyer the right to sell the underlying futures contract at the strike."
  },
  {
    id: "mk-full-initial-margin-001",
    topicId: "margins-settlement-delivery",
    subtopicId: "initial-margin",
    difficulty: "easy",
    stem: "What is initial margin in futures trading?",
    correct: "The performance bond deposit required to establish a position",
    distractors: ["The option's intrinsic value", "The final delivery invoice", "A guaranteed maximum loss"],
    explanation: "Initial margin is a performance bond posted when a futures position is opened."
  },
  {
    id: "mk-full-maintenance-margin-001",
    topicId: "margins-settlement-delivery",
    subtopicId: "maintenance-margin",
    difficulty: "easy",
    stem: "When does a futures account generally trigger a margin call?",
    correct: "When equity falls below the maintenance margin level",
    distractors: ["When equity rises above initial margin", "Only when delivery is completed", "Only when an option expires worthless"],
    explanation: "Maintenance margin is the minimum equity level before additional funds are required."
  },
  {
    id: "mk-full-variation-margin-001",
    topicId: "margins-settlement-delivery",
    subtopicId: "variation-margin",
    difficulty: "medium",
    stem: "A futures position loses $450 after daily settlement. What is the account effect?",
    correct: "The account is debited $450 through variation settlement",
    distractors: ["The loss is ignored until contract expiration", "The loss becomes option time value", "The account receives a delivery premium"],
    explanation: "Futures are marked to market daily, so daily losses are debited and gains are credited."
  },
  {
    id: "mk-full-margin-calls-001",
    topicId: "margins-settlement-delivery",
    subtopicId: "margin-calls",
    difficulty: "medium",
    stem: "Initial margin is $4,800 and account equity is $4,100 after falling below maintenance. What deposit restores equity to initial margin?",
    correct: "$700",
    distractors: ["$100", "$4,100", "$4,800"],
    explanation: "The deposit equals initial margin minus current equity: $4,800 - $4,100 = $700."
  },
  {
    id: "mk-full-performance-bond-001",
    topicId: "margins-settlement-delivery",
    subtopicId: "performance-bond",
    difficulty: "easy",
    stem: "Why is futures margin commonly called a performance bond?",
    correct: "It helps secure the trader's performance on the futures obligation",
    distractors: ["It buys partial ownership of the commodity", "It pays the customer's commissions", "It guarantees trading profits"],
    explanation: "Futures margin secures performance rather than serving as a securities-style down payment."
  },
  {
    id: "mk-full-futures-vs-securities-margin-001",
    topicId: "margins-settlement-delivery",
    subtopicId: "futures-vs-securities-margin",
    difficulty: "medium",
    stem: "How does futures margin differ from securities margin in the Series 3 context?",
    correct: "Futures margin is a performance bond rather than a loan down payment",
    distractors: ["Futures margin is always interest on borrowed money", "Futures margin means buying stock on credit", "Futures margin eliminates daily settlement"],
    explanation: "Futures margin supports contract performance; securities margin often involves credit to purchase securities."
  },
  {
    id: "mk-full-option-premiums-001",
    topicId: "margins-settlement-delivery",
    subtopicId: "option-premiums",
    difficulty: "easy",
    stem: "Who pays the premium in a futures option transaction?",
    correct: "The option buyer pays the premium to obtain the option right",
    distractors: ["The exchange pays the premium to both parties", "The seller pays premium to receive the right", "The clearinghouse pays premium only after expiration"],
    explanation: "The buyer pays premium; the seller receives premium and assumes option obligations."
  },
  {
    id: "mk-full-intrinsic-value-001",
    topicId: "margins-settlement-delivery",
    subtopicId: "intrinsic-value",
    difficulty: "medium",
    stem: "A 58 call is evaluated when futures trade at 62. What is the call's intrinsic value?",
    correct: "4",
    distractors: ["0", "58", "120"],
    explanation: "Call intrinsic value is futures price minus strike when positive: 62 - 58 = 4."
  },
  {
    id: "mk-full-time-value-001",
    topicId: "margins-settlement-delivery",
    subtopicId: "time-value",
    difficulty: "medium",
    stem: "An option premium is 5.75 and intrinsic value is 3.25. What is the time value?",
    correct: "2.50",
    distractors: ["3.25", "5.75", "9.00"],
    explanation: "Time value equals total premium minus intrinsic value: 5.75 - 3.25 = 2.50."
  },
  {
    id: "mk-full-delta-001",
    topicId: "margins-settlement-delivery",
    subtopicId: "delta",
    difficulty: "medium",
    stem: "An option delta of 0.60 most directly estimates what?",
    correct: "The option's price sensitivity to a 1.00 move in the underlying futures",
    distractors: ["The guaranteed probability of exercise", "The daily storage charge", "The initial margin requirement"],
    explanation: "Delta estimates how much an option premium changes when the underlying futures price changes."
  },
  {
    id: "mk-full-price-limits-001",
    topicId: "margins-settlement-delivery",
    subtopicId: "price-limits",
    difficulty: "easy",
    stem: "What do daily price limits restrict?",
    correct: "The maximum permitted price move during a trading session",
    distractors: ["The number of customer accounts at a firm", "The total amount of option premium", "The maturity of Treasury instruments"],
    explanation: "Daily price limits are exchange rules restricting price movement for a contract during a session."
  },
  {
    id: "mk-full-expanded-limits-001",
    topicId: "margins-settlement-delivery",
    subtopicId: "expanded-limits",
    difficulty: "medium",
    stem: "When can expanded limits become relevant?",
    correct: "After prior limit moves when exchange rules allow a wider trading range",
    distractors: ["Only when an option has no intrinsic value", "Only when all spreads are prohibited", "Only when the clearinghouse closes"],
    explanation: "Some contracts expand permitted daily price movement after limit conditions."
  },
  {
    id: "mk-full-lock-limits-001",
    topicId: "margins-settlement-delivery",
    subtopicId: "lock-limits",
    difficulty: "medium",
    stem: "A futures contract is offered at limit-down with no buyers willing to trade. What is this market condition?",
    correct: "Locked limit-down",
    distractors: ["A normal carrying-charge market", "A filled market order", "A long call hedge"],
    explanation: "A locked limit market occurs when price reaches the limit and trading cannot continue beyond that limit."
  },
  {
    id: "mk-full-circuit-breakers-001",
    topicId: "margins-settlement-delivery",
    subtopicId: "circuit-breakers",
    difficulty: "medium",
    stem: "What is the purpose of a circuit breaker in a futures or index-related market?",
    correct: "To pause or limit trading during extreme market moves under exchange rules",
    distractors: ["To guarantee execution of every stop order", "To calculate basis", "To replace customer margin deposits"],
    explanation: "Circuit breakers are market controls designed to slow trading during extreme volatility."
  },
  {
    id: "mk-full-first-notice-day-001",
    topicId: "margins-settlement-delivery",
    subtopicId: "first-notice-day",
    difficulty: "medium",
    stem: "Why is first notice day important to a long futures trader in a physical-delivery contract?",
    correct: "The trader may become exposed to delivery notice procedures if still long",
    distractors: ["It is the last day to open any futures account", "It determines option time value", "It cancels all short positions"],
    explanation: "First notice day is tied to the start of delivery notice risk in many physical contracts."
  },
  {
    id: "mk-full-delivery-notices-001",
    topicId: "margins-settlement-delivery",
    subtopicId: "delivery-notices",
    difficulty: "medium",
    stem: "A delivery notice in a futures contract is most directly connected with what process?",
    correct: "Making or assigning delivery under the contract",
    distractors: ["Submitting a market-if-touched order", "Calculating option delta", "Opening an arbitration claim"],
    explanation: "Delivery notices are part of the mechanics for fulfilling physical delivery obligations."
  },
  {
    id: "mk-full-physical-delivery-001",
    topicId: "margins-settlement-delivery",
    subtopicId: "physical-delivery",
    difficulty: "easy",
    stem: "What does physical delivery mean in a futures contract?",
    correct: "The contract can be fulfilled by delivering the specified commodity or instrument",
    distractors: ["The contract can only be closed by cash profit", "The option premium is refunded automatically", "The order must be filled immediately or cancelled"],
    explanation: "Physical delivery contracts permit delivery of the specified commodity or instrument under contract terms."
  },
  {
    id: "mk-full-warehouse-receipts-001",
    topicId: "margins-settlement-delivery",
    subtopicId: "warehouse-receipts",
    difficulty: "medium",
    stem: "In grain delivery, what does a warehouse receipt typically evidence?",
    correct: "Deliverable commodity stored in an approved warehouse",
    distractors: ["A customer's option approval form", "A stop-limit trigger price", "A speculative position limit"],
    explanation: "Warehouse receipts are delivery documents representing stored deliverable commodities."
  },
  {
    id: "mk-full-efps-001",
    topicId: "margins-settlement-delivery",
    subtopicId: "efps",
    difficulty: "hard",
    stem: "What is an exchange of futures for physicals?",
    correct: "A transaction combining a futures position with a related cash or physical transaction",
    distractors: ["A type of customer complaint", "A spread between two option strikes only", "A mandatory margin call"],
    explanation: "An EFP links futures and related cash-market positions under exchange rules."
  },
  {
    id: "mk-full-exercise-assignment-001",
    topicId: "margins-settlement-delivery",
    subtopicId: "exercise-assignment",
    difficulty: "medium",
    stem: "What happens to an option writer when assigned on a futures option?",
    correct: "The writer receives the opposite futures position created by the option exercise",
    distractors: ["The writer's account is automatically closed with no position", "The option premium is always returned", "The writer becomes the exchange clearinghouse"],
    explanation: "Exercise creates a futures position for the holder and an opposite assigned position for the writer."
  },
  {
    id: "mk-full-market-orders-001",
    topicId: "orders-accounts-analysis",
    subtopicId: "market-orders",
    difficulty: "easy",
    stem: "What is the main tradeoff of a market order?",
    correct: "It seeks immediate execution but does not guarantee a specific price",
    distractors: ["It guarantees a fixed price but not execution", "It remains open until cancelled only", "It can execute only at the closing price"],
    explanation: "Market orders prioritize execution speed over price certainty."
  },
  {
    id: "mk-full-stop-orders-001",
    topicId: "orders-accounts-analysis",
    subtopicId: "stop-orders",
    difficulty: "medium",
    stem: "A sell stop is generally placed where relative to the current market?",
    correct: "Below the current market",
    distractors: ["Above the current market", "At any price with no trigger", "Only at the settlement price"],
    explanation: "Sell stops are commonly placed below the market to trigger if prices fall."
  },
  {
    id: "mk-full-stop-limit-orders-001",
    topicId: "orders-accounts-analysis",
    subtopicId: "stop-limit-orders",
    difficulty: "medium",
    stem: "What risk is specific to a stop-limit order compared with a stop market order?",
    correct: "The order may not be filled if the market moves beyond the limit price",
    distractors: ["It has no stop trigger", "It must be executed at any available price", "It cannot be used in futures markets"],
    explanation: "A stop-limit order becomes a limit order after the stop is triggered, so execution is not guaranteed."
  },
  {
    id: "mk-full-market-if-touched-001",
    topicId: "orders-accounts-analysis",
    subtopicId: "market-if-touched",
    difficulty: "medium",
    stem: "A sell order above the current market that becomes a market order if touched is what order type?",
    correct: "Sell market-if-touched",
    distractors: ["Sell stop", "Buy stop-limit", "Fill-or-kill"],
    explanation: "A sell MIT is commonly placed above the market and triggers when the favorable price is touched."
  },
  {
    id: "mk-full-gtc-orders-001",
    topicId: "orders-accounts-analysis",
    subtopicId: "gtc-orders",
    difficulty: "easy",
    stem: "What does a good-till-canceled instruction control?",
    correct: "How long the order remains working",
    distractors: ["The option's intrinsic value", "The futures contract size", "The customer risk disclosure text"],
    explanation: "GTC is a time-in-force instruction; it does not guarantee execution."
  },
  {
    id: "mk-full-fok-orders-001",
    topicId: "orders-accounts-analysis",
    subtopicId: "fok-orders",
    difficulty: "medium",
    stem: "What must happen for a fill-or-kill order to execute?",
    correct: "It must be filled immediately and completely",
    distractors: ["It may be partially filled over several days", "It must wait for the closing range", "It becomes a delivery notice"],
    explanation: "FOK orders require immediate full execution or cancellation."
  },
  {
    id: "mk-full-moc-orders-001",
    topicId: "orders-accounts-analysis",
    subtopicId: "moc-orders",
    difficulty: "easy",
    stem: "What is a market-on-close order designed to do?",
    correct: "Execute at or near the market close",
    distractors: ["Execute only if the entire order fills immediately", "Remain open until the customer cancels", "Trigger only below the market"],
    explanation: "MOC orders target execution during the closing period."
  },
  {
    id: "mk-full-oco-orders-001",
    topicId: "orders-accounts-analysis",
    subtopicId: "oco-orders",
    difficulty: "medium",
    stem: "How does a one-cancels-the-other instruction work?",
    correct: "Execution of one linked order cancels the other linked order",
    distractors: ["Both linked orders must execute together", "The order remains open forever", "It can only be used for delivery notices"],
    explanation: "OCO instructions link orders so that one execution cancels the alternate order."
  },
  {
    id: "mk-full-technical-analysis-001",
    topicId: "orders-accounts-analysis",
    subtopicId: "technical-analysis",
    difficulty: "easy",
    stem: "Technical analysis relies most on which information?",
    correct: "Market action such as price, volume, and chart behavior",
    distractors: ["Only crop acreage forecasts", "Only customer account forms", "Only exchange membership data"],
    explanation: "Technical analysis studies market-generated data rather than only supply-demand fundamentals."
  },
  {
    id: "mk-full-support-resistance-001",
    topicId: "orders-accounts-analysis",
    subtopicId: "support-resistance",
    difficulty: "medium",
    stem: "A price level where rallies have repeatedly stalled is commonly called what?",
    correct: "Resistance",
    distractors: ["Support", "Variation margin", "Delivery grade"],
    explanation: "Resistance is a technical level where selling has tended to stop advances."
  },
  {
    id: "mk-full-gaps-001",
    topicId: "orders-accounts-analysis",
    subtopicId: "gaps",
    difficulty: "medium",
    stem: "What is a gap on a price chart?",
    correct: "An untraded price area between two trading ranges",
    distractors: ["A margin call below maintenance", "A warehouse receipt premium", "A futures delivery notice"],
    explanation: "A gap appears when prices move from one range to another without trading through the intervening prices."
  },
  {
    id: "mk-full-volume-001",
    topicId: "orders-accounts-analysis",
    subtopicId: "volume",
    difficulty: "easy",
    stem: "What does daily volume show?",
    correct: "How many contracts traded during the day",
    distractors: ["How many contracts remain open after the close", "How much time value an option has", "How much storage cost is embedded in carry"],
    explanation: "Volume measures trading activity during a period; open interest measures outstanding contracts."
  },
  {
    id: "mk-full-open-interest-001",
    topicId: "orders-accounts-analysis",
    subtopicId: "open-interest",
    difficulty: "easy",
    stem: "What does open interest count?",
    correct: "Outstanding contracts that have not been offset or closed",
    distractors: ["Only contracts traded today", "Only contracts that made delivery", "Only profitable contracts"],
    explanation: "Open interest is the number of open contracts remaining in the market."
  },
  {
    id: "mk-full-fundamental-analysis-001",
    topicId: "orders-accounts-analysis",
    subtopicId: "fundamental-analysis",
    difficulty: "easy",
    stem: "Fundamental analysis of commodity prices focuses primarily on what?",
    correct: "Supply and demand conditions",
    distractors: ["Only chart gaps", "Only order duration codes", "Only arbitration awards"],
    explanation: "Fundamental analysis examines economic factors such as production, consumption, inventories, and demand."
  },
  {
    id: "mk-full-supply-demand-001",
    topicId: "orders-accounts-analysis",
    subtopicId: "supply-demand",
    difficulty: "medium",
    stem: "If demand rises while supply stays constant, what is the general price implication?",
    correct: "Upward price pressure",
    distractors: ["Downward price pressure", "No possible price effect", "Automatic limit-down trading"],
    explanation: "Higher demand with unchanged supply generally creates upward pressure on price."
  },
  {
    id: "mk-full-interest-rate-analysis-001",
    topicId: "orders-accounts-analysis",
    subtopicId: "interest-rate-analysis",
    difficulty: "medium",
    stem: "When interest rates rise, what generally happens to existing fixed-rate bond prices?",
    correct: "They tend to fall",
    distractors: ["They tend to rise because coupons are fixed", "They become unrelated to rates", "They convert into commodity options"],
    explanation: "Bond prices generally move inversely to interest rates."
  },
  {
    id: "mk-full-yield-curves-001",
    topicId: "orders-accounts-analysis",
    subtopicId: "yield-curves",
    difficulty: "medium",
    stem: "A steepening yield curve means what has generally increased?",
    correct: "The yield difference between longer and shorter maturities",
    distractors: ["The number of warehouse receipts", "The strike width of every option spread", "The number of filled market orders"],
    explanation: "Yield curve shape compares rates across maturities; steepening means a wider maturity yield spread."
  },
  {
    id: "mk-full-short-hedges-001",
    topicId: "hedging-basis",
    subtopicId: "short-hedges",
    difficulty: "easy",
    stem: "Who is the classic user of a short hedge?",
    correct: "A producer or inventory holder worried about falling prices",
    distractors: ["A buyer worried about rising prices", "A trader with no cash exposure buying futures", "An option buyer seeking only premium risk"],
    explanation: "Short hedges protect sellers or inventory owners against price declines."
  },
  {
    id: "mk-full-long-hedges-001",
    topicId: "hedging-basis",
    subtopicId: "long-hedges",
    difficulty: "easy",
    stem: "Who is the classic user of a long hedge?",
    correct: "A future buyer worried about rising prices",
    distractors: ["A producer worried about falling prices", "A short call writer only", "A warehouse issuing receipts"],
    explanation: "Long hedges protect anticipated buyers against higher future purchase prices."
  },
  {
    id: "mk-full-anticipatory-hedges-001",
    topicId: "hedging-basis",
    subtopicId: "anticipatory-hedges",
    difficulty: "medium",
    stem: "What makes a hedge anticipatory?",
    correct: "The futures hedge is placed before the related cash transaction occurs",
    distractors: ["The hedge is placed after delivery is completed", "The hedge uses no cash-market exposure", "The hedge is always an option spread"],
    explanation: "An anticipatory hedge protects an expected future cash purchase or sale."
  },
  {
    id: "mk-full-long-the-basis-001",
    topicId: "hedging-basis",
    subtopicId: "long-the-basis",
    difficulty: "hard",
    stem: "A trader is long cash grain and short futures. What basis position is this?",
    correct: "Long the basis",
    distractors: ["Short the basis", "Flat the basis", "Short gamma"],
    explanation: "Long cash and short futures generally benefits from strengthening basis."
  },
  {
    id: "mk-full-short-the-basis-001",
    topicId: "hedging-basis",
    subtopicId: "short-the-basis",
    difficulty: "hard",
    stem: "A trader is short cash exposure and long futures. What basis position is this?",
    correct: "Short the basis",
    distractors: ["Long the basis", "Covered call", "Intermarket spread"],
    explanation: "Short cash and long futures generally benefits from weakening basis."
  },
  {
    id: "mk-full-basis-calculation-001",
    topicId: "hedging-basis",
    subtopicId: "basis-calculation",
    difficulty: "easy",
    stem: "Cash soybeans are 12.18 and futures are 12.05. What is the basis?",
    correct: "+0.13",
    distractors: ["-0.13", "24.23", "-24.23"],
    explanation: "Basis equals cash minus futures: 12.18 - 12.05 = +0.13."
  },
  {
    id: "mk-full-strengthening-basis-001",
    topicId: "hedging-basis",
    subtopicId: "strengthening-basis",
    difficulty: "medium",
    stem: "Basis moves from -0.20 to -0.05. How is the move described?",
    correct: "Strengthening basis",
    distractors: ["Weakening basis", "No basis change", "Expanded limit"],
    explanation: "Basis strengthens when cash improves relative to futures or becomes less negative."
  },
  {
    id: "mk-full-weakening-basis-001",
    topicId: "hedging-basis",
    subtopicId: "weakening-basis",
    difficulty: "medium",
    stem: "Basis moves from +0.08 to -0.04. How is this move described?",
    correct: "Weakening basis",
    distractors: ["Strengthening basis", "No change", "A bull call spread"],
    explanation: "Basis weakens when cash declines relative to futures."
  },
  {
    id: "mk-full-transportation-costs-001",
    topicId: "hedging-basis",
    subtopicId: "transportation-costs",
    difficulty: "medium",
    stem: "Why do transportation costs matter in basis analysis?",
    correct: "They affect local cash values relative to futures delivery locations",
    distractors: ["They determine option delta", "They eliminate contract specifications", "They set every customer's commission rate"],
    explanation: "Location and transportation economics are key reasons local cash prices differ from futures prices."
  },
  {
    id: "mk-full-deliverable-grade-differences-001",
    topicId: "hedging-basis",
    subtopicId: "deliverable-grade-differences",
    difficulty: "medium",
    stem: "A hedger's cash commodity is a different quality than the futures deliverable grade. What risk is most relevant?",
    correct: "Basis risk from grade differences",
    distractors: ["No possible basis risk", "Automatic option assignment", "A guaranteed cash premium"],
    explanation: "Quality differences can cause the cash commodity to move differently from the futures contract."
  },
  {
    id: "mk-full-financial-futures-basis-001",
    topicId: "hedging-basis",
    subtopicId: "financial-futures-basis",
    difficulty: "hard",
    stem: "In financial futures, basis compares futures prices with what?",
    correct: "The related cash financial instrument or portfolio value",
    distractors: ["Only warehouse storage charges", "Only grain grade discounts", "Only option premium paid"],
    explanation: "Financial futures basis is still a cash-versus-futures relationship, applied to financial instruments."
  },
  {
    id: "mk-full-net-price-received-paid-001",
    topicId: "hedging-basis",
    subtopicId: "net-price-received-paid",
    difficulty: "hard",
    stem: "A long hedger buys cash at 7.40 and gains 0.16 on the futures hedge. What net price is effectively paid?",
    correct: "7.24",
    distractors: ["7.56", "0.16", "7.40"],
    explanation: "For a long hedger, a futures gain reduces the effective cash purchase price: 7.40 - 0.16 = 7.24."
  },
  {
    id: "mk-full-commodity-hedges-001",
    topicId: "hedging-basis",
    subtopicId: "commodity-hedges",
    difficulty: "medium",
    stem: "A cattle feeder will need corn feed later and fears higher corn prices. Which commodity hedge is most direct?",
    correct: "Buy corn futures",
    distractors: ["Sell corn futures", "Sell stock index futures", "Buy a warehouse receipt for copper"],
    explanation: "A future commodity buyer uses a long futures hedge to protect against rising prices."
  },
  {
    id: "mk-full-interest-rate-hedges-001",
    topicId: "hedging-basis",
    subtopicId: "interest-rate-hedges",
    difficulty: "medium",
    stem: "A lender expects rates to fall and wants to hedge reinvestment at lower yields. Which futures direction often benefits from falling rates?",
    correct: "Buy interest rate futures",
    distractors: ["Sell interest rate futures", "Sell grain futures", "Buy a put on livestock only"],
    explanation: "Interest rate futures prices generally rise when rates fall, so buying futures can hedge falling-rate exposure."
  },
  {
    id: "mk-full-currency-hedges-001",
    topicId: "hedging-basis",
    subtopicId: "currency-hedges",
    difficulty: "medium",
    stem: "A U.S. exporter will receive euros and fears the euro will fall. Which hedge is most direct?",
    correct: "Sell euro futures",
    distractors: ["Buy euro futures", "Buy corn futures", "Sell Treasury futures only"],
    explanation: "A future receiver of foreign currency can sell currency futures to hedge a decline in that currency."
  },
  {
    id: "mk-full-stock-index-hedges-001",
    topicId: "hedging-basis",
    subtopicId: "stock-index-hedges",
    difficulty: "medium",
    stem: "A fund manager wants to temporarily reduce broad equity exposure without selling the stock portfolio. What futures action fits?",
    correct: "Sell stock index futures",
    distractors: ["Buy stock index futures", "Buy grain futures", "Exercise a warehouse receipt"],
    explanation: "Selling stock index futures can hedge broad market downside exposure."
  },
  {
    id: "mk-full-spread-execution-001",
    topicId: "spreading",
    subtopicId: "spread-execution",
    difficulty: "easy",
    stem: "What does spread execution attempt to trade?",
    correct: "The price difference between related legs",
    distractors: ["Only the outright price of one leg", "Only an option's expiration notice", "Only a customer's margin equity"],
    explanation: "Spreads focus on relative price movement between two related contracts or legs."
  },
  {
    id: "mk-full-narrowing-spread-001",
    topicId: "spreading",
    subtopicId: "narrowing-spread",
    difficulty: "easy",
    stem: "A spread moves from 32 to 20. What happened?",
    correct: "The spread narrowed",
    distractors: ["The spread widened", "The spread became an option premium", "The spread triggered delivery"],
    explanation: "A spread narrows when the price difference between legs decreases."
  },
  {
    id: "mk-full-widening-spread-001",
    topicId: "spreading",
    subtopicId: "widening-spread",
    difficulty: "easy",
    stem: "A spread moves from 14 to 27. What happened?",
    correct: "The spread widened",
    distractors: ["The spread narrowed", "The spread became flat", "The spread became a stop order"],
    explanation: "A spread widens when the price difference between legs increases."
  },
  {
    id: "mk-full-normal-market-strategies-001",
    topicId: "spreading",
    subtopicId: "normal-market-strategies",
    difficulty: "medium",
    stem: "In a normal carrying-charge market, which relationship usually exists?",
    correct: "Deferred months trade above nearby months",
    distractors: ["Nearby months always trade above deferred months", "All months must trade at the same price", "Delivery terms no longer matter"],
    explanation: "Normal markets often reflect carrying charges in deferred contract prices."
  },
  {
    id: "mk-full-inverted-market-strategies-001",
    topicId: "spreading",
    subtopicId: "inverted-market-strategies",
    difficulty: "medium",
    stem: "What does an inverted futures market often indicate?",
    correct: "Nearby supply is tight or nearby demand is strong",
    distractors: ["Storage costs fully explain higher deferred prices", "No futures trading is possible", "All hedges become riskless"],
    explanation: "Inversions often show that the nearby commodity is valued more highly than later delivery."
  },
  {
    id: "mk-full-carrying-charge-spreads-001",
    topicId: "spreading",
    subtopicId: "carrying-charge-spreads",
    difficulty: "medium",
    stem: "A carrying-charge spread is most directly influenced by what?",
    correct: "Costs of holding the commodity between delivery months",
    distractors: ["The customer's account number", "The option writer's strike selection only", "The arbitration filing deadline"],
    explanation: "Carrying-charge spreads reflect storage, financing, insurance, and related holding costs."
  },
  {
    id: "mk-full-intramarket-spreads-001",
    topicId: "spreading",
    subtopicId: "intramarket-spreads",
    difficulty: "easy",
    stem: "Buying March wheat and selling July wheat is what type of spread?",
    correct: "Intramarket spread",
    distractors: ["Intermarket spread", "Currency hedge", "Covered call"],
    explanation: "An intramarket spread uses different months of the same futures market."
  },
  {
    id: "mk-full-interdelivery-spreads-001",
    topicId: "spreading",
    subtopicId: "interdelivery-spreads",
    difficulty: "easy",
    stem: "What is another common name for a spread between different delivery months of the same commodity?",
    correct: "Interdelivery spread",
    distractors: ["Intermarket spread", "Cash-only hedge", "Short option straddle"],
    explanation: "Interdelivery spreads trade different delivery months of the same futures market."
  },
  {
    id: "mk-full-bull-spreads-001",
    topicId: "spreading",
    subtopicId: "bull-spreads",
    difficulty: "medium",
    stem: "A bull spread generally expects which relative move?",
    correct: "Nearby futures strengthen relative to deferred futures",
    distractors: ["Nearby futures weaken relative to deferred futures", "Both legs become unrelated", "The spread cannot change"],
    explanation: "Bull spreads are commonly structured to benefit from nearby strength."
  },
  {
    id: "mk-full-bear-spreads-001",
    topicId: "spreading",
    subtopicId: "bear-spreads",
    difficulty: "medium",
    stem: "A bear spread generally expects which relative move?",
    correct: "Nearby futures weaken relative to deferred futures",
    distractors: ["Nearby futures strengthen relative to deferred futures", "The contract becomes an option", "The cash price is ignored entirely"],
    explanation: "Bear spreads are commonly structured to benefit from nearby weakness."
  },
  {
    id: "mk-full-intermarket-spreads-001",
    topicId: "spreading",
    subtopicId: "intermarket-spreads",
    difficulty: "medium",
    stem: "Buying soybean futures and selling soybean meal futures is most likely what type of spread?",
    correct: "Intermarket spread",
    distractors: ["Interdelivery spread", "Market-on-close order", "Variation margin entry"],
    explanation: "Intermarket spreads use related but different futures markets."
  },
  {
    id: "mk-full-gross-profit-loss-001",
    topicId: "futures-speculation",
    subtopicId: "gross-profit-loss",
    difficulty: "medium",
    stem: "A trader buys at 51.20 and sells at 52.00. Each point is $1,000. What is the gross result?",
    correct: "$800 profit",
    distractors: ["$800 loss", "$80 profit", "$103,200 profit"],
    explanation: "The long gains 0.80 points; 0.80 x $1,000 = $800."
  },
  {
    id: "mk-full-tick-value-001",
    topicId: "futures-speculation",
    subtopicId: "tick-value",
    difficulty: "medium",
    stem: "A tick is 0.01 and each full point is worth $1,000. What is one tick worth?",
    correct: "$10",
    distractors: ["$1", "$100", "$1,000"],
    explanation: "Tick value equals tick size times point value: 0.01 x $1,000 = $10."
  },
  {
    id: "mk-full-contract-size-001",
    topicId: "futures-speculation",
    subtopicId: "contract-size",
    difficulty: "easy",
    stem: "What does contract size determine in a futures P&L calculation?",
    correct: "How much a price move is worth in dollars",
    distractors: ["Whether the order is GTC", "Whether the customer passed an exam", "Whether a chart has resistance"],
    explanation: "Contract size or point value converts price changes into dollar gains or losses."
  },
  {
    id: "mk-full-commissions-001",
    topicId: "futures-speculation",
    subtopicId: "commissions",
    difficulty: "easy",
    stem: "How are commissions treated when moving from gross to net trading result?",
    correct: "They reduce the gross trading result",
    distractors: ["They are added to profits and subtracted from losses only", "They are ignored in net result", "They become delivery grades"],
    explanation: "Net result equals gross result minus commissions and fees."
  },
  {
    id: "mk-full-single-contract-positions-001",
    topicId: "futures-speculation",
    subtopicId: "single-contract-positions",
    difficulty: "medium",
    stem: "A trader sells one contract at 88.40 and buys it back at 89.10. Each point is $500. What is the gross result?",
    correct: "$350 loss",
    distractors: ["$350 profit", "$700 loss", "$88.75 profit"],
    explanation: "A short loses when the buy-back price is higher: 88.40 - 89.10 = -0.70; -0.70 x $500 = -$350."
  },
  {
    id: "mk-full-multiple-contract-positions-001",
    topicId: "futures-speculation",
    subtopicId: "multiple-contract-positions",
    difficulty: "medium",
    stem: "A trader buys four contracts and gains $225 per contract. What is the total gross result?",
    correct: "$900 profit",
    distractors: ["$225 profit", "$450 profit", "$900 loss"],
    explanation: "Total gross result equals per-contract result times number of contracts: $225 x 4 = $900."
  },
  {
    id: "mk-full-return-on-margin-equity-001",
    topicId: "futures-speculation",
    subtopicId: "return-on-margin-equity",
    difficulty: "hard",
    stem: "A trade earns $1,200 on $8,000 of margin. What is return on margin equity?",
    correct: "15%",
    distractors: ["6.67%", "120%", "8%"],
    explanation: "Return on margin equity equals profit divided by margin: $1,200 / $8,000 = 15%."
  },
  {
    id: "mk-full-selecting-speculative-trades-001",
    topicId: "futures-speculation",
    subtopicId: "selecting-speculative-trades",
    difficulty: "medium",
    stem: "Which factor should be considered before selecting a speculative futures trade?",
    correct: "Risk, liquidity, volatility, and planned exit",
    distractors: ["Only the contract name", "Only the trader's preferred letter choice", "Only whether the market moved yesterday"],
    explanation: "Speculative trade selection should include risk controls, liquidity, volatility, and exit planning."
  },
  {
    id: "mk-full-protective-orders-001",
    topicId: "futures-speculation",
    subtopicId: "protective-orders",
    difficulty: "easy",
    stem: "Why might a trader use a protective stop?",
    correct: "To help limit loss if the market moves adversely",
    distractors: ["To guarantee the exact execution price", "To eliminate all market risk", "To create a warehouse receipt"],
    explanation: "Protective stops can help manage risk but do not guarantee execution price in fast markets."
  },
  {
    id: "mk-full-long-calls-001",
    topicId: "options-futures",
    subtopicId: "long-calls",
    difficulty: "easy",
    stem: "A long call option on futures benefits most directly from what move?",
    correct: "A rise in the underlying futures price",
    distractors: ["A fall in the underlying futures price", "A decrease in intrinsic value", "A delivery notice only"],
    explanation: "Long calls provide upside exposure to the underlying futures."
  },
  {
    id: "mk-full-long-puts-001",
    topicId: "options-futures",
    subtopicId: "long-puts",
    difficulty: "easy",
    stem: "A long put option on futures benefits most directly from what move?",
    correct: "A fall in the underlying futures price",
    distractors: ["A rise in the underlying futures price", "An increase in carrying charges only", "A forced offset of all futures"],
    explanation: "Long puts provide downside exposure to the underlying futures."
  },
  {
    id: "mk-full-short-calls-001",
    topicId: "options-futures",
    subtopicId: "short-calls",
    difficulty: "medium",
    stem: "What is the main risk of an uncovered short call on futures?",
    correct: "Large losses if the underlying futures price rises sharply",
    distractors: ["Loss limited to zero in every case", "No risk after premium is received", "Only basis risk from transportation"],
    explanation: "Short calls receive premium but face substantial risk from rising futures prices."
  },
  {
    id: "mk-full-short-puts-001",
    topicId: "options-futures",
    subtopicId: "short-puts",
    difficulty: "medium",
    stem: "What is the main risk of a short put on futures?",
    correct: "Large losses if the underlying futures price falls sharply",
    distractors: ["Large losses only if the futures price rises", "No loss beyond exchange membership dues", "Only delivery-grade premium risk"],
    explanation: "Short puts receive premium but lose when futures fall below the strike by more than the premium received."
  },
  {
    id: "mk-full-premium-risk-001",
    topicId: "options-futures",
    subtopicId: "premium-risk",
    difficulty: "easy",
    stem: "What is the buyer's maximum loss on a futures option before commissions?",
    correct: "The premium paid",
    distractors: ["Unlimited loss", "The full futures contract value", "The exchange's daily volume"],
    explanation: "A long option buyer can lose the premium paid if the option expires worthless."
  },
  {
    id: "mk-full-short-option-risk-001",
    topicId: "options-futures",
    subtopicId: "short-option-risk",
    difficulty: "medium",
    stem: "Why can short option positions be risky?",
    correct: "The premium received may be small relative to potential losses",
    distractors: ["The writer cannot ever lose money", "The writer owns the clearinghouse", "Short options always expire worthless"],
    explanation: "Option writers receive premium but can face losses that exceed that premium."
  },
  {
    id: "mk-full-long-put-hedge-001",
    topicId: "options-futures",
    subtopicId: "long-put-hedge",
    difficulty: "medium",
    stem: "A producer wants a price floor but wants to benefit if cash prices rise. Which hedge is most suitable?",
    correct: "Buy a put option",
    distractors: ["Sell futures only", "Sell an uncovered call only", "Buy a market order"],
    explanation: "A long put can protect downside while preserving upside after paying premium."
  },
  {
    id: "mk-full-long-call-hedge-001",
    topicId: "options-futures",
    subtopicId: "long-call-hedge",
    difficulty: "medium",
    stem: "A buyer wants a ceiling price while preserving benefit if prices fall. Which hedge is most suitable?",
    correct: "Buy a call option",
    distractors: ["Sell futures only", "Sell an uncovered put only", "Buy a warehouse receipt"],
    explanation: "A long call can protect against rising prices while leaving downside price benefit open."
  },
  {
    id: "mk-full-option-breakevens-001",
    topicId: "options-futures",
    subtopicId: "option-breakevens",
    difficulty: "medium",
    stem: "A 64 call costs 2.25. What is the long call breakeven at expiration?",
    correct: "66.25",
    distractors: ["61.75", "64.00", "2.25"],
    explanation: "Long call breakeven equals strike plus premium: 64.00 + 2.25 = 66.25."
  },
  {
    id: "mk-full-option-profit-001",
    topicId: "options-futures",
    subtopicId: "option-profit",
    difficulty: "hard",
    stem: "A 50 put bought for 1.80 expires when futures are 46.70. What is the profit before commissions?",
    correct: "1.50",
    distractors: ["3.30", "1.80", "0.00"],
    explanation: "Put intrinsic value is 50.00 - 46.70 = 3.30; profit is 3.30 - 1.80 = 1.50."
  },
  {
    id: "mk-full-option-return-equity-001",
    topicId: "options-futures",
    subtopicId: "option-return-equity",
    difficulty: "hard",
    stem: "An option bought for 0.80 is sold for 1.20. What is the return on premium paid?",
    correct: "50%",
    distractors: ["33.3%", "20%", "150%"],
    explanation: "Profit is 0.40; return on premium paid is 0.40 / 0.80 = 50%."
  },
  {
    id: "mk-full-protective-calls-001",
    topicId: "options-futures",
    subtopicId: "protective-calls",
    difficulty: "medium",
    stem: "A trader is short futures and wants protection against rising prices. Which option can provide protection?",
    correct: "Buy a call",
    distractors: ["Sell a call", "Sell a put", "Buy a delivery notice"],
    explanation: "A long call can offset losses on a short futures position if futures prices rise."
  },
  {
    id: "mk-full-protective-puts-001",
    topicId: "options-futures",
    subtopicId: "protective-puts",
    difficulty: "medium",
    stem: "A trader is long futures and wants protection against falling prices. Which option can provide protection?",
    correct: "Buy a put",
    distractors: ["Sell a put", "Buy a call only", "Sell a warehouse receipt"],
    explanation: "A long put can offset losses on a long futures position if futures prices fall."
  },
  {
    id: "mk-full-covered-calls-001",
    topicId: "options-futures",
    subtopicId: "covered-calls",
    difficulty: "medium",
    stem: "A covered call combines a short call with what position?",
    correct: "A long position in the underlying futures or equivalent exposure",
    distractors: ["A short position in the underlying only", "No underlying exposure", "A customer complaint filing"],
    explanation: "The long underlying exposure covers some risk of the short call."
  },
  {
    id: "mk-full-bull-call-spreads-001",
    topicId: "options-futures",
    subtopicId: "bull-call-spreads",
    difficulty: "medium",
    stem: "What is the typical construction of a bull call spread?",
    correct: "Buy a lower-strike call and sell a higher-strike call",
    distractors: ["Sell a lower-strike call and buy a higher-strike call", "Buy two puts with no short leg", "Sell futures and buy cash grain"],
    explanation: "A bull call spread is a debit spread with limited risk and limited upside."
  },
  {
    id: "mk-full-bear-call-spreads-001",
    topicId: "options-futures",
    subtopicId: "bear-call-spreads",
    difficulty: "medium",
    stem: "What is the typical construction of a bear call spread?",
    correct: "Sell a lower-strike call and buy a higher-strike call",
    distractors: ["Buy a lower-strike call and sell a higher-strike call", "Buy a lower-strike put and sell a higher-strike put", "Buy futures and sell cash"],
    explanation: "A bear call spread is a credit spread that benefits if the market stays below the short call strike."
  },
  {
    id: "mk-full-bull-put-spreads-001",
    topicId: "options-futures",
    subtopicId: "bull-put-spreads",
    difficulty: "medium",
    stem: "What is a common bull put spread structure?",
    correct: "Sell a higher-strike put and buy a lower-strike put",
    distractors: ["Buy a higher-strike put and sell a lower-strike put", "Buy a lower-strike call and sell a higher-strike call", "Sell two futures contracts only"],
    explanation: "A bull put spread is a credit spread that benefits from stable or rising prices."
  },
  {
    id: "mk-full-bear-put-spreads-001",
    topicId: "options-futures",
    subtopicId: "bear-put-spreads",
    difficulty: "medium",
    stem: "What is a common bear put spread structure?",
    correct: "Buy a higher-strike put and sell a lower-strike put",
    distractors: ["Sell a higher-strike put and buy a lower-strike put", "Sell a lower-strike call and buy a higher-strike call", "Buy two futures months only"],
    explanation: "A bear put spread is a debit spread that benefits from a decline down toward the lower strike."
  },
  {
    id: "mk-full-calendar-spreads-001",
    topicId: "options-futures",
    subtopicId: "calendar-spreads",
    difficulty: "hard",
    stem: "What distinguishes an options calendar spread?",
    correct: "The options have different expiration months",
    distractors: ["The options must have different underlying commodities", "The spread uses no options", "The spread is always a futures delivery notice"],
    explanation: "Calendar spreads, or time spreads, use different expirations."
  },
  {
    id: "mk-full-arbitrage-spreads-001",
    topicId: "options-futures",
    subtopicId: "arbitrage-spreads",
    difficulty: "hard",
    stem: "What is the goal of an arbitrage spread?",
    correct: "To exploit a pricing relationship that appears misaligned",
    distractors: ["To accept unlimited risk without analysis", "To create a customer risk disclosure form", "To guarantee every leg fills at any price"],
    explanation: "Arbitrage spreads seek to profit from relative mispricing, but execution and model risks can remain."
  },
  {
    id: "mk-full-max-profit-loss-001",
    topicId: "options-futures",
    subtopicId: "max-profit-loss",
    difficulty: "hard",
    stem: "A debit option spread costs 2.00 and has a strike width of 8.00. What is the maximum profit before commissions?",
    correct: "6.00",
    distractors: ["2.00", "8.00", "10.00"],
    explanation: "For a debit spread, maximum profit equals strike width minus net debit: 8.00 - 2.00 = 6.00."
  }
];

export const marketFullCoverageQuestions: Question[] = specs.map(q);
