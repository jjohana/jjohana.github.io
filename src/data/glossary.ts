import type { GlossaryCategory, GlossaryEntry } from "../types";

export const glossaryCategoryLabels: Record<GlossaryCategory | "all", string> = {
  all: "All terms",
  acronym: "Acronyms",
  market: "Market concepts",
  regulatory: "Regulatory concepts",
  order: "Order types",
  formula: "Formulas",
  exam: "Exam logistics"
};

export const glossaryEntries: GlossaryEntry[] = [
  {
    id: "ap",
    term: "AP",
    expanded: "Associated Person",
    category: "acronym",
    sectionId: "us_regulations",
    represents: "A salesperson or supervisor associated with an FCM, IB, CTA, CPO, or related registrant.",
    conciseExplanation: "An AP solicits orders, customers, or customer funds, or supervises people who do so.",
    examTip: "Look for solicitation or supervisory-chain facts."
  },
  {
    id: "aml",
    term: "AML",
    expanded: "Anti-Money Laundering",
    category: "acronym",
    sectionId: "us_regulations",
    represents: "Controls designed to detect and prevent money laundering and suspicious financial activity.",
    conciseExplanation: "AML questions usually test firm procedures, customer due diligence, escalation, and records.",
    examTip: "Suspicious activity should be escalated through firm procedures, not ignored by an AP."
  },
  {
    id: "sar",
    term: "SAR",
    expanded: "Suspicious Activity Report",
    category: "acronym",
    sectionId: "us_regulations",
    represents: "A report used when suspicious activity meets reporting criteria.",
    conciseExplanation: "SAR logic is tied to AML controls and suspicious activity handling.",
    examTip: "Do not tip off the customer about a SAR-related concern."
  },
  {
    id: "cea",
    term: "CEA",
    expanded: "Commodity Exchange Act",
    category: "acronym",
    sectionId: "us_regulations",
    represents: "The federal statute underlying much of U.S. commodity futures regulation.",
    conciseExplanation: "CEA enforcement covers fraud, manipulation, registration, reporting, records, and market-integrity violations.",
    examTip: "Statutory enforcement is broader than a private customer dispute."
  },
  {
    id: "cftc",
    term: "CFTC",
    expanded: "Commodity Futures Trading Commission",
    category: "acronym",
    sectionId: "us_regulations",
    represents: "The U.S. federal regulator for commodity futures, options on futures, swaps, and related derivatives markets.",
    conciseExplanation: "The CFTC has statutory authority; NFA handles many registration and self-regulatory functions under that framework.",
    examTip: "Separate federal regulator authority from NFA self-regulatory duties."
  },
  {
    id: "nfa",
    term: "NFA",
    expanded: "National Futures Association",
    category: "acronym",
    sectionId: "us_regulations",
    represents: "The self-regulatory organization for U.S. derivatives industry participants.",
    conciseExplanation: "NFA administers membership, registration processes delegated by the CFTC, proficiency requirements, and member conduct rules.",
    examTip: "NFA rules often test supervision, disclosures, promotional material, and member responsibility."
  },
  {
    id: "finra",
    term: "FINRA",
    expanded: "Financial Industry Regulatory Authority",
    category: "acronym",
    sectionId: "us_regulations",
    represents: "The organization that administers the Series 3 exam for NFA.",
    conciseExplanation: "Series 3 is an NFA exam administered through FINRA testing logistics.",
    examTip: "For the exam itself, remember the two separately scored parts."
  },
  {
    id: "fcm",
    term: "FCM",
    expanded: "Futures Commission Merchant",
    category: "acronym",
    sectionId: "us_regulations",
    represents: "A firm that solicits or accepts futures orders and accepts customer funds to margin or secure those trades.",
    conciseExplanation: "The key FCM marker is accepting money or property for futures margin or security.",
    examTip: "If the firm accepts customer funds, think FCM rather than ordinary IB."
  },
  {
    id: "ib",
    term: "IB",
    expanded: "Introducing Broker",
    category: "acronym",
    sectionId: "us_regulations",
    represents: "A firm or person that solicits or accepts orders but does not accept customer funds for futures margin.",
    conciseExplanation: "IB questions often turn on the absence of customer-fund handling.",
    examTip: "Guaranteed IB vs independent IB is a recurring distinction."
  },
  {
    id: "gib",
    term: "Guaranteed IB",
    category: "regulatory",
    sectionId: "us_regulations",
    represents: "An introducing broker whose obligations are guaranteed by an FCM under a guarantee agreement.",
    conciseExplanation: "The guarantor FCM stands behind the guaranteed IB's obligations under the arrangement.",
    examTip: "The guarantee changes financial responsibility, not the need for fair conduct."
  },
  {
    id: "iib",
    term: "Independent IB",
    category: "regulatory",
    sectionId: "us_regulations",
    represents: "An introducing broker that is not guaranteed by an FCM.",
    conciseExplanation: "An independent IB must meet its own applicable financial requirements.",
    examTip: "Independence does not mean exemption from supervision or registration duties."
  },
  {
    id: "cpo",
    term: "CPO",
    expanded: "Commodity Pool Operator",
    category: "acronym",
    sectionId: "us_regulations",
    represents: "A person or organization that operates or solicits for a pooled vehicle trading commodity interests.",
    conciseExplanation: "CPO status is tied to pooled funds, pool operation, disclosure, records, and participant protections.",
    examTip: "Pool operation points to CPO; individualized advice points toward CTA."
  },
  {
    id: "cta",
    term: "CTA",
    expanded: "Commodity Trading Advisor",
    category: "acronym",
    sectionId: "us_regulations",
    represents: "A person or organization that advises others, for compensation, about commodity interest trading.",
    conciseExplanation: "CTA status turns on paid trading advice, not on accepting customer margin funds.",
    examTip: "Compensated advice is the central trigger."
  },
  {
    id: "rfed",
    term: "RFED",
    expanded: "Retail Foreign Exchange Dealer",
    category: "acronym",
    sectionId: "us_regulations",
    represents: "A registrant category for certain retail forex dealer activities.",
    conciseExplanation: "RFED appears in registration contexts alongside FCM, IB, CPO, CTA, and AP roles.",
    examTip: "Do not confuse RFED with futures-only FCM customer fund handling."
  },
  {
    id: "sro",
    term: "SRO",
    expanded: "Self-Regulatory Organization",
    category: "acronym",
    sectionId: "us_regulations",
    represents: "An industry regulator with rulemaking and enforcement responsibilities under a statutory framework.",
    conciseExplanation: "NFA is the central SRO reference for Series 3 futures regulation.",
    examTip: "SRO rules can coexist with CFTC authority."
  },
  {
    id: "qep",
    term: "QEP",
    expanded: "Qualified Eligible Person",
    category: "acronym",
    sectionId: "us_regulations",
    represents: "A sophisticated participant category used in certain CPO/CTA disclosure and offering contexts.",
    conciseExplanation: "QEP status may affect disclosure or offering treatment but does not permit misleading conduct.",
    examTip: "Even sophisticated-participant communications must avoid deception."
  },
  {
    id: "dco",
    term: "DCO",
    expanded: "Derivatives Clearing Organization",
    category: "acronym",
    sectionId: "us_regulations",
    represents: "A clearing organization for derivatives contracts.",
    conciseExplanation: "A DCO manages clearing, margining, and performance-risk mechanics for cleared derivatives.",
    examTip: "Think clearing function, not customer-facing solicitation."
  },
  {
    id: "efp",
    term: "EFP",
    expanded: "Exchange for Physical",
    category: "acronym",
    sectionId: "market_knowledge",
    represents: "A transaction linking a futures position with an opposite related cash-market transaction.",
    conciseExplanation: "An EFP is not a normal futures offset; it includes a related cash or physical leg.",
    examTip: "Look for the cash-market component."
  },
  {
    id: "fnd",
    term: "FND",
    expanded: "First Notice Day",
    category: "acronym",
    sectionId: "market_knowledge",
    represents: "The first day on which delivery notice may be issued for a deliverable futures contract.",
    conciseExplanation: "Speculators usually exit before delivery-notice risk becomes active.",
    examTip: "FND is about delivery notice, not the final trading day."
  },
  {
    id: "ltd",
    term: "LTD",
    expanded: "Last Trading Day",
    category: "acronym",
    sectionId: "market_knowledge",
    represents: "The last day on which a futures or option contract can trade.",
    conciseExplanation: "After the last trading day, open positions follow settlement, delivery, exercise, or expiration rules.",
    examTip: "Do not confuse LTD with first notice day."
  },
  {
    id: "fok",
    term: "FOK",
    expanded: "Fill or Kill",
    category: "acronym",
    sectionId: "market_knowledge",
    represents: "An order that must be filled immediately in full or canceled.",
    conciseExplanation: "FOK emphasizes complete immediate execution.",
    examTip: "FOK is stricter than a normal day or GTC order."
  },
  {
    id: "gtc",
    term: "GTC",
    expanded: "Good Till Canceled",
    category: "acronym",
    sectionId: "market_knowledge",
    represents: "An order that remains active until executed, canceled, or expired under firm/exchange rules.",
    conciseExplanation: "GTC orders are not automatically canceled at the end of the trading session.",
    examTip: "Know the duration feature."
  },
  {
    id: "mit",
    term: "MIT",
    expanded: "Market If Touched",
    category: "acronym",
    sectionId: "market_knowledge",
    represents: "An order that becomes a market order when a specified price is touched.",
    conciseExplanation: "MIT is generally triggered by a favorable price level, unlike many stop orders.",
    examTip: "Contrast MIT with stop orders."
  },
  {
    id: "moc",
    term: "MOC",
    expanded: "Market On Close",
    category: "acronym",
    sectionId: "market_knowledge",
    represents: "An order seeking execution at or near the closing price.",
    conciseExplanation: "The closing period is the defining feature.",
    examTip: "MOC is about timing, not a guaranteed limit price."
  },
  {
    id: "oco",
    term: "OCO",
    expanded: "One Cancels the Other",
    category: "acronym",
    sectionId: "market_knowledge",
    represents: "Linked orders where execution of one cancels the other.",
    conciseExplanation: "Often used to bracket a position with profit-taking and protective instructions.",
    examTip: "The cancellation link is the tested feature."
  },
  {
    id: "cot",
    term: "COT",
    expanded: "Commitments of Traders",
    category: "acronym",
    sectionId: "market_knowledge",
    represents: "CFTC reports showing categories of reportable market positions and open interest.",
    conciseExplanation: "COT data is a market-information tool, not a customer account document.",
    examTip: "Useful for market analysis context."
  },
  {
    id: "qcm",
    term: "QCM",
    expanded: "Question à Choix Multiples",
    category: "acronym",
    represents: "A multiple-choice practice question.",
    conciseExplanation: "In this app, QCM means one stem with answer choices, exactly one correct answer, explanations, and rationales.",
    examTip: "Use QCM review to identify weak subtopics."
  },
  {
    id: "basis",
    term: "Basis",
    category: "formula",
    sectionId: "market_knowledge",
    represents: "The relationship between the cash price and the futures price.",
    conciseExplanation: "Basis = cash price - futures price.",
    examTip: "Short hedgers generally prefer strengthening basis; long hedgers generally prefer weakening basis."
  },
  {
    id: "basis-risk",
    term: "Basis risk",
    category: "market",
    sectionId: "market_knowledge",
    represents: "The risk that cash and futures prices do not move together as expected.",
    conciseExplanation: "Basis risk explains why a hedge can be imperfect even if the futures position is directionally correct.",
    examTip: "Hedge QCMs often test the final effective price after basis changes."
  },
  {
    id: "cash-price",
    term: "Cash price",
    category: "market",
    sectionId: "market_knowledge",
    represents: "The local spot price for the commodity or instrument in the cash market.",
    conciseExplanation: "Cash price is the real-world purchase or sale price used in hedge calculations.",
    examTip: "Do not replace it with the futures settlement price."
  },
  {
    id: "futures-contract",
    term: "Futures contract",
    category: "market",
    sectionId: "market_knowledge",
    represents: "A standardized exchange-traded agreement for future delivery or cash settlement.",
    conciseExplanation: "Futures are standardized, cleared, margined, and usually offset before delivery.",
    examTip: "Contrast with a customized forward contract."
  },
  {
    id: "forward-contract",
    term: "Forward contract",
    category: "market",
    sectionId: "market_knowledge",
    represents: "A privately negotiated agreement for a future transaction.",
    conciseExplanation: "Forwards are customized and carry bilateral counterparty exposure.",
    examTip: "Forwards are not normally exchange-standardized or cleared like futures."
  },
  {
    id: "clearinghouse",
    term: "Clearinghouse",
    category: "market",
    sectionId: "market_knowledge",
    represents: "The central counterparty to cleared futures trades.",
    conciseExplanation: "It becomes buyer to every seller and seller to every buyer, supporting performance and daily settlement.",
    examTip: "It reduces counterparty risk, not market risk."
  },
  {
    id: "open-interest",
    term: "Open interest",
    category: "market",
    sectionId: "market_knowledge",
    represents: "The number of outstanding contracts that remain open.",
    conciseExplanation: "Open interest rises when new long and short positions are created and falls when existing positions are offset.",
    examTip: "Do not confuse open interest with trading volume."
  },
  {
    id: "volume",
    term: "Volume",
    category: "market",
    sectionId: "market_knowledge",
    represents: "The number of contracts traded during a period.",
    conciseExplanation: "Volume measures activity, not how many contracts remain open.",
    examTip: "A day can have high volume without a matching rise in open interest."
  },
  {
    id: "long",
    term: "Long",
    category: "market",
    sectionId: "market_knowledge",
    represents: "A position that benefits from a price increase.",
    conciseExplanation: "A long futures trader buys first and profits if the futures price rises.",
    examTip: "Long futures gains = price increase x contract size x contracts."
  },
  {
    id: "short",
    term: "Short",
    category: "market",
    sectionId: "market_knowledge",
    represents: "A position that benefits from a price decrease.",
    conciseExplanation: "A short futures trader sells first and profits if the futures price falls.",
    examTip: "Short futures gains = price decrease x contract size x contracts."
  },
  {
    id: "hedger",
    term: "Hedger",
    category: "market",
    sectionId: "market_knowledge",
    represents: "A market participant using futures or options to reduce price risk in a cash-market exposure.",
    conciseExplanation: "Hedgers use derivatives to protect a purchase price, sale price, portfolio value, or rate exposure.",
    examTip: "Start by identifying the underlying business risk."
  },
  {
    id: "speculator",
    term: "Speculator",
    category: "market",
    sectionId: "market_knowledge",
    represents: "A trader seeking profit from market movement rather than reducing a cash exposure.",
    conciseExplanation: "Speculators accept risk for expected price movement.",
    examTip: "Speculation QCMs often focus on P&L, tick value, and return on margin."
  },
  {
    id: "short-hedge",
    term: "Short hedge",
    category: "market",
    sectionId: "market_knowledge",
    represents: "Selling futures to protect an owned inventory or expected sale price.",
    conciseExplanation: "A producer or inventory holder uses a short hedge against falling prices.",
    examTip: "Short hedgers generally benefit from strengthening basis."
  },
  {
    id: "long-hedge",
    term: "Long hedge",
    category: "market",
    sectionId: "market_knowledge",
    represents: "Buying futures to protect an expected purchase price.",
    conciseExplanation: "A user or processor uses a long hedge against rising prices.",
    examTip: "Long hedgers generally benefit from weakening basis."
  },
  {
    id: "strengthening-basis",
    term: "Strengthening basis",
    category: "formula",
    sectionId: "market_knowledge",
    represents: "A basis that becomes more positive or less negative.",
    conciseExplanation: "Cash improves relative to futures.",
    examTip: "Usually good for short hedgers and bad for long hedgers."
  },
  {
    id: "weakening-basis",
    term: "Weakening basis",
    category: "formula",
    sectionId: "market_knowledge",
    represents: "A basis that becomes less positive or more negative.",
    conciseExplanation: "Cash deteriorates relative to futures.",
    examTip: "Usually good for long hedgers and bad for short hedgers."
  },
  {
    id: "normal-market",
    term: "Normal market",
    category: "market",
    sectionId: "market_knowledge",
    represents: "A futures price structure where deferred prices are above nearby prices.",
    conciseExplanation: "Often reflects carrying charges such as storage, insurance, and financing.",
    examTip: "Normal market is the common carrying-charge structure."
  },
  {
    id: "inverted-market",
    term: "Inverted market",
    category: "market",
    sectionId: "market_knowledge",
    represents: "A futures price structure where nearby prices are above deferred prices.",
    conciseExplanation: "Often reflects tight nearby supply or strong immediate demand.",
    examTip: "Nearby over deferred is the key clue."
  },
  {
    id: "carrying-charges",
    term: "Carrying charges",
    category: "market",
    sectionId: "market_knowledge",
    represents: "Costs of holding a commodity over time.",
    conciseExplanation: "Storage, insurance, financing, and handling can explain deferred futures premiums.",
    examTip: "Carrying charges support normal market relationships."
  },
  {
    id: "initial-margin",
    term: "Initial margin",
    category: "market",
    sectionId: "market_knowledge",
    represents: "The performance bond deposited to open a futures position.",
    conciseExplanation: "It is not a down payment on the full commodity value.",
    examTip: "Futures margin differs from securities margin."
  },
  {
    id: "maintenance-margin",
    term: "Maintenance margin",
    category: "market",
    sectionId: "market_knowledge",
    represents: "The minimum equity level that must be maintained in a futures account.",
    conciseExplanation: "Falling below maintenance can trigger a margin call.",
    examTip: "Margin calls commonly restore equity to initial margin."
  },
  {
    id: "variation-margin",
    term: "Variation margin",
    category: "market",
    sectionId: "market_knowledge",
    represents: "Daily settlement debit or credit from futures price changes.",
    conciseExplanation: "Variation margin reflects mark-to-market gains and losses.",
    examTip: "Daily settlement is central to futures mechanics."
  },
  {
    id: "margin-call",
    term: "Margin call",
    category: "formula",
    sectionId: "market_knowledge",
    represents: "A demand for additional funds when account equity falls below required levels.",
    conciseExplanation: "Call amount is often the funds needed to restore the account to initial margin.",
    examTip: "Do not use maintenance margin as the target unless the question says so."
  },
  {
    id: "settlement-price",
    term: "Settlement price",
    category: "market",
    sectionId: "market_knowledge",
    represents: "The official price used for daily mark-to-market settlement.",
    conciseExplanation: "Open futures positions are marked to settlement to compute gains and losses.",
    examTip: "Settlement is accounting for gains/losses, not necessarily physical delivery."
  },
  {
    id: "price-limit",
    term: "Price limit",
    category: "market",
    sectionId: "market_knowledge",
    represents: "A rule limiting how far a futures price may move during a session.",
    conciseExplanation: "Price limits can affect execution and create lock-limit conditions.",
    examTip: "Limits do not eliminate loss risk."
  },
  {
    id: "lock-limit",
    term: "Lock limit",
    category: "market",
    sectionId: "market_knowledge",
    represents: "A market condition where trading is constrained at the price limit.",
    conciseExplanation: "Orders may not execute beyond the permitted limit range.",
    examTip: "A protective order may fail to execute as expected in a locked market."
  },
  {
    id: "tick",
    term: "Tick",
    category: "formula",
    sectionId: "market_knowledge",
    represents: "The minimum price fluctuation of a futures contract.",
    conciseExplanation: "Tick value converts a minimum price move into dollars.",
    examTip: "P&L = ticks moved x tick value x contracts."
  },
  {
    id: "contract-size",
    term: "Contract size",
    category: "formula",
    sectionId: "market_knowledge",
    represents: "The quantity of the underlying commodity or instrument represented by one contract.",
    conciseExplanation: "Contract size turns a price movement into total dollar P&L.",
    examTip: "Many wrong answers forget to multiply by contract size or contracts."
  },
  {
    id: "notional-value",
    term: "Notional value",
    category: "formula",
    sectionId: "market_knowledge",
    represents: "The contract's face exposure before margin or P&L effects.",
    conciseExplanation: "Notional value is price times contract size, often much larger than margin posted.",
    examTip: "Do not confuse notional value with margin deposit."
  },
  {
    id: "call",
    term: "Call option",
    category: "market",
    sectionId: "market_knowledge",
    represents: "The right, but not the obligation, to buy the underlying futures contract at the strike price.",
    conciseExplanation: "Calls benefit from rising futures prices.",
    examTip: "Long call breakeven = strike + premium."
  },
  {
    id: "put",
    term: "Put option",
    category: "market",
    sectionId: "market_knowledge",
    represents: "The right, but not the obligation, to sell the underlying futures contract at the strike price.",
    conciseExplanation: "Puts benefit from falling futures prices.",
    examTip: "Long put breakeven = strike - premium."
  },
  {
    id: "strike-price",
    term: "Strike price",
    category: "market",
    sectionId: "market_knowledge",
    represents: "The exercise price of an option.",
    conciseExplanation: "The strike is compared with the futures price to calculate intrinsic value.",
    examTip: "Always identify call or put before using the strike."
  },
  {
    id: "premium",
    term: "Option premium",
    category: "market",
    sectionId: "market_knowledge",
    represents: "The price paid by the option buyer and received by the option writer.",
    conciseExplanation: "For buyers, premium is the maximum loss before transaction costs.",
    examTip: "Writers receive premium but may face substantial risk."
  },
  {
    id: "intrinsic-value",
    term: "Intrinsic value",
    category: "formula",
    sectionId: "market_knowledge",
    represents: "The amount by which an option is in the money.",
    conciseExplanation: "Call intrinsic value = max(0, futures - strike); put intrinsic value = max(0, strike - futures).",
    examTip: "Intrinsic value cannot be negative."
  },
  {
    id: "time-value",
    term: "Time value",
    category: "formula",
    sectionId: "market_knowledge",
    represents: "The portion of premium above intrinsic value.",
    conciseExplanation: "Time value = premium - intrinsic value.",
    examTip: "Out-of-the-money options have no intrinsic value but can still have time value."
  },
  {
    id: "breakeven",
    term: "Breakeven",
    category: "formula",
    sectionId: "market_knowledge",
    represents: "The futures price at which an option position has no net profit or loss before costs.",
    conciseExplanation: "Long call breakeven = strike + premium; long put breakeven = strike - premium.",
    examTip: "Use premium in the same quote unit as the strike."
  },
  {
    id: "exercise",
    term: "Exercise",
    category: "market",
    sectionId: "market_knowledge",
    represents: "The option holder's use of the option right.",
    conciseExplanation: "Exercising a call or put creates the related futures position under contract rules.",
    examTip: "Exercise is a holder action; assignment affects the writer."
  },
  {
    id: "assignment",
    term: "Assignment",
    category: "market",
    sectionId: "market_knowledge",
    represents: "The option writer's obligation after the holder exercises.",
    conciseExplanation: "Assigned writers must perform according to the option contract terms.",
    examTip: "Writers receive premium but accept assignment risk."
  },
  {
    id: "spread",
    term: "Spread",
    category: "market",
    sectionId: "market_knowledge",
    represents: "A position involving two related legs where the price difference is the main focus.",
    conciseExplanation: "Spread questions ask whether the relationship widens or narrows, not only whether one price rises.",
    examTip: "Use the same spread convention from open to close."
  },
  {
    id: "bull-spread",
    term: "Bull spread",
    category: "market",
    sectionId: "market_knowledge",
    represents: "A spread strategy designed to benefit from a bullish relative price move.",
    conciseExplanation: "In futures, this often means the nearby contract strengthens relative to the deferred contract.",
    examTip: "Identify which leg is bought and which is sold."
  },
  {
    id: "bear-spread",
    term: "Bear spread",
    category: "market",
    sectionId: "market_knowledge",
    represents: "A spread strategy designed to benefit from a bearish relative price move.",
    conciseExplanation: "In futures, this often means the nearby contract weakens relative to the deferred contract.",
    examTip: "Do not judge spread direction from one leg alone."
  },
  {
    id: "market-order",
    term: "Market order",
    category: "order",
    sectionId: "market_knowledge",
    represents: "An order to trade promptly at the best available price.",
    conciseExplanation: "It prioritizes execution certainty over price certainty.",
    examTip: "A market order does not guarantee a specific fill price."
  },
  {
    id: "limit-order",
    term: "Limit order",
    category: "order",
    sectionId: "market_knowledge",
    represents: "An order to buy at or below, or sell at or above, a specified price.",
    conciseExplanation: "It controls price but may not execute.",
    examTip: "Price certainty comes with execution risk."
  },
  {
    id: "stop-order",
    term: "Stop order",
    category: "order",
    sectionId: "market_knowledge",
    represents: "An order that becomes a market order when the stop price is reached.",
    conciseExplanation: "Stops can be used for protection or entry but do not guarantee the stop price.",
    examTip: "Gaps can cause fills beyond the stop price."
  },
  {
    id: "stop-limit-order",
    term: "Stop-limit order",
    category: "order",
    sectionId: "market_knowledge",
    represents: "An order that becomes a limit order after the stop price is reached.",
    conciseExplanation: "It controls price after activation but may not execute.",
    examTip: "Stop-limit has more price control and more non-execution risk than a stop order."
  },
  {
    id: "discretionary-account",
    term: "Discretionary account",
    category: "regulatory",
    sectionId: "us_regulations",
    represents: "An account where someone other than the customer can decide trade details.",
    conciseExplanation: "Discretion requires proper written authorization and supervision.",
    examTip: "Time, price, or administrative discretion is not the same as full trading discretion."
  },
  {
    id: "risk-disclosure",
    term: "Risk disclosure",
    category: "regulatory",
    sectionId: "us_regulations",
    represents: "Required communication of material futures and options risks to customers.",
    conciseExplanation: "Risk disclosure helps ensure customers understand leverage, losses, volatility, and obligations before trading.",
    examTip: "Disclosure is not optional just because the customer is enthusiastic."
  },
  {
    id: "promotional-material",
    term: "Promotional material",
    category: "regulatory",
    sectionId: "us_regulations",
    represents: "Public communication used to solicit, market, or discuss futures-related services.",
    conciseExplanation: "It must be fair, balanced, supervised, and not misleading.",
    examTip: "Performance claims and hypothetical results need particular care."
  },
  {
    id: "supervision",
    term: "Supervision",
    category: "regulatory",
    sectionId: "us_regulations",
    represents: "A firm's duty to oversee people, accounts, communications, branches, records, and trading activity.",
    conciseExplanation: "Supervision is an active duty; it cannot be delegated away casually.",
    examTip: "When a rogue AP appears in a question, look for supervisory failures too."
  },
  {
    id: "customer-funds",
    term: "Customer funds",
    category: "regulatory",
    sectionId: "us_regulations",
    represents: "Money or property received to margin, guarantee, or secure customer futures trading.",
    conciseExplanation: "Handling customer funds is central to FCM responsibilities and customer protection.",
    examTip: "IBs generally do not accept customer funds for margin."
  },
  {
    id: "segregation",
    term: "Segregation",
    category: "regulatory",
    sectionId: "us_regulations",
    represents: "The required separation of customer funds from firm assets.",
    conciseExplanation: "Segregation protects customer property from being treated as firm money.",
    examTip: "Customer protection, not trading profit, is the policy goal."
  },
  {
    id: "customer-complaint",
    term: "Customer complaint",
    category: "regulatory",
    sectionId: "us_regulations",
    represents: "A customer allegation or grievance that must be handled under firm procedures.",
    conciseExplanation: "Complaints can reveal account-handling, communication, or supervision issues.",
    examTip: "Do not treat complaint records as optional."
  },
  {
    id: "bunched-order",
    term: "Bunched order",
    category: "regulatory",
    sectionId: "us_regulations",
    represents: "An order placed for multiple accounts and allocated afterward under fair procedures.",
    conciseExplanation: "The allocation process must prevent cherry-picking and favoritism.",
    examTip: "Best fills cannot be assigned after the fact to preferred accounts."
  },
  {
    id: "disclosure-document",
    term: "Disclosure document",
    category: "regulatory",
    sectionId: "us_regulations",
    represents: "A required CPO/CTA document describing program risks, fees, conflicts, principals, and performance information.",
    conciseExplanation: "It helps prospective customers or pool participants understand the program before committing.",
    examTip: "Disclosure must be timely and materially complete."
  },
  {
    id: "principal",
    term: "Principal",
    category: "regulatory",
    sectionId: "us_regulations",
    represents: "A person with control, ownership, management, or policy influence over a registrant.",
    conciseExplanation: "Principal status matters for registration, background disclosure, and responsibility analysis.",
    examTip: "Principal background facts can be tested in CPO/CTA disclosure questions."
  },
  {
    id: "bylaw-1101",
    term: "Bylaw 1101",
    category: "regulatory",
    sectionId: "us_regulations",
    represents: "An NFA bylaw concept restricting members from doing futures business with required registrants that are not properly registered.",
    conciseExplanation: "The rule reinforces checking counterparty or business-partner registration status.",
    examTip: "This is a classic high-yield regulatory trap."
  },
  {
    id: "nfa-basic",
    term: "NFA BASIC",
    expanded: "Background Affiliation Status Information Center",
    category: "acronym",
    sectionId: "us_regulations",
    represents: "NFA's public registration and background information system.",
    conciseExplanation: "BASIC helps check registration, membership, and disciplinary history.",
    examTip: "Use it as a registration-status tool, not as a trading system."
  },
  {
    id: "arbitration",
    term: "Arbitration",
    category: "regulatory",
    sectionId: "us_regulations",
    represents: "A dispute-resolution process for certain customer-member disputes.",
    conciseExplanation: "Arbitration is different from regulatory enforcement, though both may involve misconduct facts.",
    examTip: "Identify whether the question is about customer dispute resolution or discipline."
  },
  {
    id: "reparations",
    term: "Reparations",
    category: "regulatory",
    sectionId: "us_regulations",
    represents: "A CFTC customer-claim process for damages under the Commodity Exchange Act.",
    conciseExplanation: "Reparations are a customer remedy process, not a futures trading strategy.",
    examTip: "Do not confuse reparations with NFA arbitration."
  },
  {
    id: "disciplinary-procedure",
    term: "Disciplinary procedure",
    category: "regulatory",
    sectionId: "us_regulations",
    represents: "A regulatory process to investigate, charge, settle, hear, appeal, and sanction rule violations.",
    conciseExplanation: "It focuses on member or associate misconduct and market/customer protection.",
    examTip: "Allegations are not the same as final findings."
  },
  {
    id: "mra",
    term: "MRA",
    expanded: "Member Responsibility Action",
    category: "acronym",
    sectionId: "us_regulations",
    represents: "A protective NFA action used when serious risk requires prompt restrictions.",
    conciseExplanation: "An MRA is an emergency-style regulatory protection tool.",
    examTip: "Think risk control, not routine customer service."
  },
  {
    id: "subpoena",
    term: "Subpoena",
    category: "regulatory",
    sectionId: "us_regulations",
    represents: "A formal demand for documents, testimony, or evidence.",
    conciseExplanation: "Subpoenas are used in enforcement or investigation contexts.",
    examTip: "Do not ignore formal regulatory requests."
  },
  {
    id: "position-limit",
    term: "Position limit",
    category: "regulatory",
    sectionId: "us_regulations",
    represents: "A limit on the size of a speculative position.",
    conciseExplanation: "Position limits help manage market concentration and excessive speculation.",
    examTip: "Separate speculative positions from bona fide hedge treatment."
  },
  {
    id: "series-3",
    term: "Series 3",
    expanded: "National Commodity Futures Examination",
    category: "exam",
    represents: "The NFA futures exam administered by FINRA.",
    conciseExplanation: "It has 120 scored questions over 150 minutes and requires passing both scored parts.",
    examTip: "Passing total alone is not enough if one part is below the threshold."
  }
];

export function searchGlossaryEntries(entries: GlossaryEntry[], query: string, category: GlossaryCategory | "all") {
  const normalizedQuery = query.trim().toLowerCase();
  return entries
    .filter((entry) => category === "all" || entry.category === category)
    .filter((entry) => {
      if (!normalizedQuery) return true;
      return [entry.term, entry.expanded ?? "", entry.represents, entry.conciseExplanation, entry.examTip ?? ""]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
    })
    .sort((a, b) => a.term.localeCompare(b.term));
}
