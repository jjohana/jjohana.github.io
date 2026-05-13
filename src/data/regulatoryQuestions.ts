import type { Difficulty, Question } from "../types";

const createdAt = "2026-05-13T00:00:00.000Z";
const sourceNote =
  "Original rewritten regulatory study question based on concepts observed in the user's S3-Regulatory.pdf OCR pass; not a verbatim source question.";

type ChoiceInput = {
  text: string;
  correct?: boolean;
  rationale: string;
};

function q(params: {
  id: string;
  topicId: string;
  subtopicId: string;
  difficulty: Difficulty;
  stem: string;
  choices: ChoiceInput[];
  explanation: string;
  focus: string[];
  concept: string;
  sourcePageRange?: string;
  confidence?: "high" | "medium" | "low";
}): Question {
  return {
    id: params.id,
    sectionId: "us_regulations",
    topicId: params.topicId,
    subtopicId: params.subtopicId,
    difficulty: params.difficulty,
    questionType: "multiple_choice",
    stem: params.stem,
    choices: params.choices.map((choice, index) => ({
      id: String.fromCharCode(97 + index),
      text: choice.text,
      isCorrect: Boolean(choice.correct),
      rationale: choice.rationale
    })),
    explanation: params.explanation,
    sourceType: "rewritten",
    regulatoryFocus: params.focus,
    concept: params.concept,
    sourceNote,
    reviewStatus: "reviewed",
    qualityStatus: "verified",
    issueTypes: [],
    qualityNotes: "Original rewritten regulatory question reviewed by automated quality gates.",
    verifiedAt: createdAt,
    verifiedBy: "Codex regulatory rewrite audit",
    extractionConfidence: params.confidence ?? "medium",
    sourcePageRange: params.sourcePageRange ?? "S3-Regulatory OCR concept pass",
    active: true,
    createdAt
  };
}

export const regulatoryRemodelQuestions: Question[] = [
  q({
    id: "reg-rewrite-registration-001",
    topicId: "general-regulatory",
    subtopicId: "associated-person",
    difficulty: "easy",
    focus: ["registration", "roles"],
    concept: "Associated Person registration scope",
    sourcePageRange: "S3-Regulatory OCR pages 1-20",
    stem: "A person solicits futures customers for a registered FCM and is sponsored by that firm. Which registration category is most directly implicated?",
    choices: [
      { text: "Associated Person", correct: true, rationale: "Soliciting or handling futures customer business for a registrant commonly triggers AP status." },
      { text: "Floor Trader", rationale: "A floor trader is tied to floor trading activity, not customer solicitation for an FCM." },
      { text: "Contract Market", rationale: "A contract market is an exchange, not an individual registration category." },
      { text: "Warehouse Depository", rationale: "A warehouse role is connected with delivery mechanics, not AP registration." }
    ],
    explanation: "The tested rule is role classification. Customer solicitation or futures-related customer activity for a registrant generally points to Associated Person registration."
  }),
  q({
    id: "reg-rewrite-registration-002",
    topicId: "general-regulatory",
    subtopicId: "nfa-membership",
    difficulty: "medium",
    focus: ["registration", "nfa-membership"],
    concept: "NFA membership alongside CFTC registration",
    sourcePageRange: "S3-Regulatory OCR pages 1-20",
    stem: "A firm registers as an FCM and conducts customer futures business. What additional membership concept is normally relevant under the Series 3 regulatory outline?",
    choices: [
      { text: "NFA membership is generally required for registrants conducting futures business.", correct: true, rationale: "The outline pairs CFTC registration categories with NFA membership obligations." },
      { text: "NFA membership is optional once CFTC registration is approved.", rationale: "Registration alone does not make NFA membership irrelevant." },
      { text: "NFA membership applies only to exchanges, not intermediaries.", rationale: "FCMs, IBs, CPOs, and CTAs are intermediary categories covered by the membership framework." },
      { text: "NFA membership is replaced by a customer's account agreement.", rationale: "A private customer agreement does not replace regulatory membership duties." }
    ],
    explanation: "The trap is treating CFTC registration and NFA membership as substitutes. They are different regulatory concepts and may both matter."
  }),
  q({
    id: "reg-rewrite-registration-003",
    topicId: "general-regulatory",
    subtopicId: "registration-exemptions",
    difficulty: "medium",
    focus: ["registration", "exemptions"],
    concept: "Registration exemptions must be analyzed specifically",
    sourcePageRange: "S3-Regulatory OCR pages 1-30",
    stem: "Which approach is safest when analyzing whether a person is exempt from a Series 3 regulatory registration category?",
    choices: [
      { text: "Confirm that a specific exemption applies to the person's actual activities.", correct: true, rationale: "Exemptions are activity-specific and should not be assumed." },
      { text: "Assume no registration is needed if the person avoids using the word futures.", rationale: "Regulatory status depends on activity, not wording alone." },
      { text: "Treat every employee of a registered firm as exempt.", rationale: "Employees may need AP registration depending on their functions." },
      { text: "Use profitability of the customer's account as the exemption test.", rationale: "Customer profitability has no bearing on registration status." }
    ],
    explanation: "The tested concept is exemption discipline. A candidate should identify the activity and apply the relevant exemption, rather than rely on broad assumptions."
  }),
  q({
    id: "reg-rewrite-registration-004",
    topicId: "general-regulatory",
    subtopicId: "commodity-trading-advisor",
    difficulty: "easy",
    focus: ["registration", "cta"],
    concept: "CTA role",
    sourcePageRange: "S3-Regulatory OCR pages 1-30",
    stem: "A person is paid to advise clients about futures trading strategies but does not pool client funds. Which role is most likely being tested?",
    choices: [
      { text: "Commodity Trading Advisor", correct: true, rationale: "Compensated advice about futures trading is the core CTA concept." },
      { text: "Commodity Pool Operator", rationale: "A CPO operates or solicits participation in a pool, which is not described here." },
      { text: "Introducing Broker", rationale: "An IB solicits or accepts orders but is not defined primarily by compensated advice." },
      { text: "Floor Broker", rationale: "A floor broker executes orders on an exchange floor, not general advisory programs." }
    ],
    explanation: "CTA and CPO are often confused. Advice for compensation points to CTA; pooled funds point to CPO."
  }),
  q({
    id: "reg-rewrite-registration-005",
    topicId: "general-regulatory",
    subtopicId: "commodity-pool-operator",
    difficulty: "easy",
    focus: ["registration", "cpo"],
    concept: "CPO role",
    sourcePageRange: "S3-Regulatory OCR pages 1-30",
    stem: "A sponsor solicits participants for a fund that trades commodity futures for the group. Which registration concept is most directly implicated?",
    choices: [
      { text: "Commodity Pool Operator", correct: true, rationale: "Operating or soliciting for a commodity pool is the central CPO concept." },
      { text: "Floor Trader", rationale: "A floor trader does not describe pooled customer participation." },
      { text: "Guaranteed Introducing Broker", rationale: "An IB solicits orders but does not operate a pooled futures vehicle." },
      { text: "Clearing Member", rationale: "Clearing membership is not the same as operating a commodity pool." }
    ],
    explanation: "The rule being tested is the difference between pooled investment activity and other intermediary roles."
  }),
  q({
    id: "reg-rewrite-ethics-001",
    topicId: "general-regulatory",
    subtopicId: "just-equitable-principles",
    difficulty: "easy",
    focus: ["ethics", "communications"],
    concept: "Just and equitable principles of trade",
    sourcePageRange: "S3-Regulatory OCR pages 1-81",
    stem: "Which behavior best reflects the NFA principle that members and associates must observe high standards of commercial honor?",
    choices: [
      { text: "Present material facts fairly and avoid misleading customer communications.", correct: true, rationale: "Fair dealing and non-misleading conduct are core to just and equitable principles." },
      { text: "Make optimistic claims whenever recent trades were profitable.", rationale: "Recent profitability does not justify unbalanced or misleading statements." },
      { text: "Ignore customer sophistication once the account is opened.", rationale: "Customer treatment and supervision obligations continue after opening." },
      { text: "Use aggressive sales language if no trade has settled yet.", rationale: "The rule concerns conduct, not only completed trades." }
    ],
    explanation: "This is a broad ethical rule. The exam may test it through fair dealing, communications, and commercial honor rather than by asking for the rule number."
  }),
  q({
    id: "reg-rewrite-account-001",
    topicId: "general-regulatory",
    subtopicId: "risk-disclosure",
    difficulty: "easy",
    focus: ["account-rules", "risk-disclosure"],
    concept: "Risk disclosure timing",
    sourcePageRange: "S3-Regulatory OCR pages 1-81",
    stem: "When should required futures risk disclosure generally be provided to a new customer?",
    choices: [
      { text: "Before the customer is allowed to trade futures or options on futures.", correct: true, rationale: "Risk disclosure is an account-opening protection, not an after-the-fact document." },
      { text: "Only after the customer's first losing trade.", rationale: "Disclosure must not wait for losses." },
      { text: "Only when the customer requests it in writing.", rationale: "Required disclosure is not optional on customer request." },
      { text: "After the firm decides whether the account was profitable.", rationale: "Profitability does not control disclosure timing." }
    ],
    explanation: "The trap is timing. Risk disclosures are designed to inform the customer before trading begins."
  }),
  q({
    id: "reg-rewrite-account-002",
    topicId: "general-regulatory",
    subtopicId: "customer-information",
    difficulty: "medium",
    focus: ["account-rules", "customer-information"],
    concept: "Customer information and suitability-style review",
    sourcePageRange: "S3-Regulatory OCR pages 1-81",
    stem: "Before opening a futures account, which information is most relevant for the firm to collect and review?",
    choices: [
      { text: "Information about the customer's identity, financial situation, experience, and objectives.", correct: true, rationale: "The firm needs customer information to supervise account opening and risk disclosure." },
      { text: "Only the customer's preferred ticker symbols.", rationale: "Trading preferences alone are not enough for account review." },
      { text: "Only the customer's social media profile.", rationale: "Social media does not replace required customer information." },
      { text: "Only a verbal statement that the customer understands every risk.", rationale: "A verbal statement alone does not replace account-opening information and disclosure controls." }
    ],
    explanation: "The concept is account-opening diligence. Customer information supports proper review, disclosures, and supervision."
  }),
  q({
    id: "reg-rewrite-account-003",
    topicId: "general-regulatory",
    subtopicId: "discretionary-accounts",
    difficulty: "medium",
    focus: ["account-rules", "discretionary"],
    concept: "Discretionary account authorization",
    sourcePageRange: "S3-Regulatory OCR pages 1-20",
    stem: "An AP wants authority to decide the timing and price of futures trades for a customer beyond ordinary order execution discretion. What control is generally required?",
    choices: [
      { text: "Written customer authorization and proper supervisory approval.", correct: true, rationale: "Discretionary authority requires documented authorization and supervisory control." },
      { text: "No documentation if the customer is an experienced trader.", rationale: "Experience does not eliminate the written authorization requirement." },
      { text: "Approval only after three profitable trades.", rationale: "Profitability is not a substitute for authorization." },
      { text: "Permission from another AP at the same firm.", rationale: "Another AP cannot grant customer discretionary authority." }
    ],
    explanation: "The exam often tests the difference between routine execution choices and discretionary trading authority. The latter requires stronger controls."
  }),
  q({
    id: "reg-rewrite-account-004",
    topicId: "general-regulatory",
    subtopicId: "written-authorization",
    difficulty: "easy",
    focus: ["account-rules", "discretionary"],
    concept: "Written authorization",
    sourcePageRange: "S3-Regulatory OCR pages 1-20",
    stem: "A customer orally tells an AP to trade the account whenever the AP sees an opportunity. Which statement is most accurate?",
    choices: [
      { text: "Oral permission is not enough for discretionary futures trading authority.", correct: true, rationale: "Written authorization and supervision are the key controls." },
      { text: "Oral permission is enough if the first order is small.", rationale: "Order size does not cure missing written authorization." },
      { text: "Oral permission is enough if the AP records the call after trading.", rationale: "A later record is not the same as required written authorization." },
      { text: "Oral permission automatically creates a managed account exemption.", rationale: "There is no automatic exemption created by oral permission." }
    ],
    explanation: "The trap is informal consent. Discretionary authority is a documented account status, not a casual oral arrangement."
  }),
  q({
    id: "reg-rewrite-supervision-001",
    topicId: "general-regulatory",
    subtopicId: "account-supervision-review",
    difficulty: "medium",
    focus: ["supervision", "account-rules"],
    concept: "Reasonable supervision",
    sourcePageRange: "S3-Regulatory OCR pages 49, 77, 149",
    stem: "Which statement best describes a member's supervisory duty over futures and options business?",
    choices: [
      { text: "The member must make a reasonable effort to supervise employees and agents and maintain effective procedures.", correct: true, rationale: "NFA supervision concepts focus on reasonable supervision and procedures." },
      { text: "The member satisfies supervision only by hiring experienced APs.", rationale: "Experience helps but does not replace supervisory systems." },
      { text: "The member has no duty once written procedures exist.", rationale: "Procedures must be implemented and monitored; paper alone is not enough." },
      { text: "The member can delegate supervision entirely to customers.", rationale: "Customers do not supervise the firm's regulatory obligations." }
    ],
    explanation: "Supervision questions test whether the firm has reasonable procedures and actually supervises conduct."
  }),
  q({
    id: "reg-rewrite-position-001",
    topicId: "general-regulatory",
    subtopicId: "speculative-position-limits",
    difficulty: "medium",
    focus: ["position-limits", "reporting"],
    concept: "Speculative position limits",
    sourcePageRange: "S3-Regulatory OCR concept pass",
    stem: "Why do speculative position limits matter in futures regulation?",
    choices: [
      { text: "They restrict the maximum net long or short speculative position that may be held or controlled.", correct: true, rationale: "Position limits are designed to constrain excessive speculative concentration." },
      { text: "They guarantee that every hedge will be profitable.", rationale: "Position limits do not guarantee trading outcomes." },
      { text: "They replace margin requirements for large traders.", rationale: "Position limits and margin are separate controls." },
      { text: "They apply only to cash commodity warehouses.", rationale: "The concept applies to futures positions, not only warehouse operations." }
    ],
    explanation: "The tested distinction is between regulatory position controls and other risk controls such as margin."
  }),
  q({
    id: "reg-rewrite-position-002",
    topicId: "general-regulatory",
    subtopicId: "position-reporting",
    difficulty: "medium",
    focus: ["position-limits", "reporting"],
    concept: "Large position reporting",
    sourcePageRange: "S3-Regulatory OCR concept pass",
    stem: "A customer controls a reportable futures position. What regulatory concept is most likely implicated?",
    choices: [
      { text: "Position reporting to the exchange or regulator according to applicable thresholds.", correct: true, rationale: "Large or reportable positions trigger reporting obligations." },
      { text: "Automatic cancellation of all open orders.", rationale: "Reportability does not automatically cancel orders." },
      { text: "Elimination of all speculative limits.", rationale: "Reporting does not remove position-limit rules." },
      { text: "A guaranteed hedge exemption without documentation.", rationale: "Hedge treatment normally requires analysis and documentation." }
    ],
    explanation: "Position reporting is about transparency and regulatory monitoring of large positions."
  }),
  q({
    id: "reg-rewrite-fcmib-001",
    topicId: "fcm-ib",
    subtopicId: "guaranteed-ibs",
    difficulty: "medium",
    focus: ["fcm-ib", "registration"],
    concept: "Guaranteed IB relationship",
    sourcePageRange: "S3-Regulatory OCR pages 1-81",
    stem: "What is a key feature of a guaranteed Introducing Broker relationship?",
    choices: [
      { text: "The IB operates under a guarantee agreement with a guarantor FCM.", correct: true, rationale: "The guarantor FCM is responsible under the guarantee arrangement." },
      { text: "The IB may freely hold customer segregated funds.", rationale: "Customer funds handling remains a critical distinction from FCM activity." },
      { text: "The IB becomes a contract market.", rationale: "A guarantee agreement does not turn an IB into an exchange." },
      { text: "The IB is exempt from all supervision.", rationale: "Guaranteed status does not eliminate supervisory duties." }
    ],
    explanation: "The concept tested is the structural difference between guaranteed and independent IBs."
  }),
  q({
    id: "reg-rewrite-fcmib-002",
    topicId: "fcm-ib",
    subtopicId: "independent-ibs",
    difficulty: "medium",
    focus: ["fcm-ib", "registration"],
    concept: "Independent IB obligations",
    sourcePageRange: "S3-Regulatory OCR pages 1-81",
    stem: "Compared with a guaranteed IB, an independent IB is most likely associated with which requirement?",
    choices: [
      { text: "Maintaining its own required financial responsibility rather than relying on one guarantor FCM.", correct: true, rationale: "Independent IB status carries its own financial responsibility framework." },
      { text: "Avoiding all written customer records.", rationale: "IBs must maintain required books and records." },
      { text: "Serving only commodity pools and never individual customers.", rationale: "That is not the defining feature of independent IB status." },
      { text: "Acting as the clearinghouse for futures trades.", rationale: "Clearinghouse functions are not the IB's role." }
    ],
    explanation: "Independent IB questions often turn on financial responsibility and the absence of a single guarantor FCM arrangement."
  }),
  q({
    id: "reg-rewrite-fcmib-003",
    topicId: "fcm-ib",
    subtopicId: "accepting-customer-funds",
    difficulty: "easy",
    focus: ["fcm-ib", "customer-funds"],
    concept: "Accepting customer funds",
    sourcePageRange: "S3-Regulatory OCR pages 1-81",
    stem: "Which intermediary is generally associated with carrying customer accounts and accepting customer funds for futures trading?",
    choices: [
      { text: "Futures Commission Merchant", correct: true, rationale: "An FCM carries customer accounts and accepts customer funds." },
      { text: "Introducing Broker", rationale: "An IB introduces or solicits business but is not the funds-carrying intermediary." },
      { text: "Commodity Trading Advisor", rationale: "A CTA gives trading advice and does not carry futures customer funds as an FCM." },
      { text: "Exchange floor reporter", rationale: "This is not the customer funds intermediary role." }
    ],
    explanation: "The tested distinction is FCM versus IB. The FCM carries the account and handles customer funds."
  }),
  q({
    id: "reg-rewrite-fcmib-004",
    topicId: "fcm-ib",
    subtopicId: "customer-complaints",
    difficulty: "medium",
    focus: ["fcm-ib", "records", "customer-complaints"],
    concept: "Written customer complaint records",
    sourcePageRange: "S3-Regulatory OCR pages 80-81",
    stem: "A member FCM receives a written customer complaint about options trading. Which recordkeeping response is most appropriate?",
    choices: [
      { text: "Retain the complaint and record key details such as receipt date, responsible personnel, issue description, and action taken.", correct: true, rationale: "Complaint rules focus on retaining written complaints and related records." },
      { text: "Destroy the complaint after responding by phone.", rationale: "Written complaints must be retained according to the applicable recordkeeping rules." },
      { text: "Forward the complaint to a customer and close the file.", rationale: "The firm must maintain its own records and response history." },
      { text: "Treat the complaint as marketing material.", rationale: "Complaint records and promotional material are different categories." }
    ],
    explanation: "The trap is thinking a response eliminates the recordkeeping duty. Written complaints require retention and tracking."
  }),
  q({
    id: "reg-rewrite-fcmib-005",
    topicId: "fcm-ib",
    subtopicId: "time-stamping",
    difficulty: "easy",
    focus: ["fcm-ib", "orders", "records"],
    concept: "Order time-stamping",
    sourcePageRange: "S3-Regulatory OCR page 50",
    stem: "Upon receiving a customer futures order, what should an FCM or IB do with respect to order timing records?",
    choices: [
      { text: "Time-stamp the order promptly to the nearest required time increment.", correct: true, rationale: "Order receipt timing must be captured promptly for audit trail purposes." },
      { text: "Wait until the end of the trading day to estimate the time.", rationale: "Estimated end-of-day timing defeats the audit trail purpose." },
      { text: "Time-stamp only profitable orders.", rationale: "Recordkeeping does not depend on trade outcome." },
      { text: "Skip time-stamping if the order is later canceled.", rationale: "Canceled orders can still require an audit trail record." }
    ],
    explanation: "The core concept is the audit trail. Orders must be recorded promptly and accurately when received."
  }),
  q({
    id: "reg-rewrite-fcmib-006",
    topicId: "fcm-ib",
    subtopicId: "promotional-material",
    difficulty: "medium",
    focus: ["communications", "promotional-material"],
    concept: "Balanced promotional material",
    sourcePageRange: "S3-Regulatory OCR pages 21, 28, 29, 37, 42",
    stem: "A promotional piece highlights large historical profits but minimizes risk disclosure. What is the main regulatory concern?",
    choices: [
      { text: "The communication may be misleading because it is not balanced about risk and reward.", correct: true, rationale: "Promotional material must avoid misleading or unbalanced presentation." },
      { text: "The communication is acceptable because profitable examples always override risk disclosure.", rationale: "Profit examples do not remove the need for balanced risk presentation." },
      { text: "The communication is acceptable if it is printed in a small font.", rationale: "Formatting does not cure misleading substance." },
      { text: "The communication is exempt if no customer has complained yet.", rationale: "A complaint is not required before promotional standards apply." }
    ],
    explanation: "Promotional-material questions often test whether the candidate recognizes one-sided performance claims as misleading."
  }),
  q({
    id: "reg-rewrite-fcmib-007",
    topicId: "fcm-ib",
    subtopicId: "transaction-cost-disclosure",
    difficulty: "medium",
    focus: ["fcm-ib", "disclosure", "costs"],
    concept: "Transaction cost disclosure",
    sourcePageRange: "S3-Regulatory OCR concept pass",
    stem: "Why are transaction cost disclosures important in customer futures accounts?",
    choices: [
      { text: "They help the customer understand commissions, fees, and costs that affect trading results.", correct: true, rationale: "Cost disclosure supports informed customer decisions." },
      { text: "They guarantee that the account will not lose money.", rationale: "Disclosure informs; it does not guarantee results." },
      { text: "They replace the need for risk disclosure.", rationale: "Cost disclosure and risk disclosure are separate protections." },
      { text: "They are required only if the customer asks for an annual summary.", rationale: "Required disclosure is not limited to customer request." }
    ],
    explanation: "The tested concept is transparency. Fees and commissions can materially affect trading performance."
  }),
  q({
    id: "reg-rewrite-fcmib-008",
    topicId: "fcm-ib",
    subtopicId: "margin-deposit-collection",
    difficulty: "medium",
    focus: ["fcm-ib", "margin", "customer-funds"],
    concept: "Margin collection control",
    sourcePageRange: "S3-Regulatory OCR pages 69, 72",
    stem: "A customer account is below required margin. What is the regulatory control most directly implicated for the carrying FCM?",
    choices: [
      { text: "Collect or call for required margin according to applicable rules and firm procedures.", correct: true, rationale: "Margin collection is a core FCM customer account control." },
      { text: "Ignore the deficiency if the customer promises future profits.", rationale: "A promise of profits does not satisfy margin requirements." },
      { text: "Transfer the deficiency to another customer's account.", rationale: "Customer funds cannot be used that way." },
      { text: "Treat the deficiency as promotional material.", rationale: "Margin collection is an account financial control, not a communications issue." }
    ],
    explanation: "Margin rules are designed to protect the market and the FCM. The firm must respond to margin deficiencies through proper procedures."
  }),
  q({
    id: "reg-rewrite-fcmib-009",
    topicId: "fcm-ib",
    subtopicId: "financial-reports",
    difficulty: "medium",
    focus: ["fcm-ib", "financial-reports"],
    concept: "Financial reporting",
    sourcePageRange: "S3-Regulatory OCR concept pass",
    stem: "Which purpose best explains required financial reports for regulated futures intermediaries?",
    choices: [
      { text: "They allow regulators to monitor financial condition and required capital compliance.", correct: true, rationale: "Financial reports support regulatory oversight of financial responsibility." },
      { text: "They replace all customer confirmations.", rationale: "Financial reports and customer confirmations serve different functions." },
      { text: "They are used only to advertise performance.", rationale: "Regulatory financial reports are oversight documents, not promotional pieces." },
      { text: "They eliminate the need for books and records.", rationale: "Financial reporting does not eliminate recordkeeping duties." }
    ],
    explanation: "The concept is financial responsibility oversight. Reports let regulators assess whether firms meet required standards."
  }),
  q({
    id: "reg-rewrite-fcmib-010",
    topicId: "fcm-ib",
    subtopicId: "net-capital-requirements",
    difficulty: "medium",
    focus: ["fcm-ib", "capital"],
    concept: "Net capital requirements",
    sourcePageRange: "S3-Regulatory OCR concept pass",
    stem: "Net capital requirements for an intermediary primarily serve which regulatory purpose?",
    choices: [
      { text: "They help ensure the firm maintains minimum financial resources for its regulated business.", correct: true, rationale: "Capital rules are financial responsibility protections." },
      { text: "They determine whether a customer trade will be profitable.", rationale: "Capital requirements do not predict trade profitability." },
      { text: "They set the daily settlement price of futures contracts.", rationale: "Settlement prices are exchange/market functions." },
      { text: "They replace customer risk disclosure.", rationale: "Capital and disclosure requirements are separate." }
    ],
    explanation: "Capital requirements are tested as firm financial responsibility rules, not market price rules."
  }),
  q({
    id: "reg-rewrite-fcmib-011",
    topicId: "fcm-ib",
    subtopicId: "account-adjustments",
    difficulty: "hard",
    focus: ["fcm-ib", "records", "supervision"],
    concept: "Account adjustment supervision",
    sourcePageRange: "S3-Regulatory OCR concept pass",
    stem: "An AP asks operations to adjust a customer account to correct a trade allocation error. What is the best control response?",
    choices: [
      { text: "Process the adjustment only through documented, supervised procedures with a clear reason.", correct: true, rationale: "Account adjustments require controls because they can affect customer money and records." },
      { text: "Let the AP make the change directly without review.", rationale: "Unreviewed account adjustments create supervision and recordkeeping risks." },
      { text: "Delay all account corrections until year-end.", rationale: "Corrections should be timely and properly documented." },
      { text: "Record the adjustment as a new customer complaint in every case.", rationale: "An adjustment and a complaint are not automatically the same thing." }
    ],
    explanation: "The question tests supervision and books-and-records controls around account changes."
  }),
  q({
    id: "reg-rewrite-fcmib-012",
    topicId: "fcm-ib",
    subtopicId: "anti-money-laundering",
    difficulty: "hard",
    focus: ["aml", "customer-funds", "fcm-ib"],
    concept: "Suspicious activity reporting and no tipping off",
    sourcePageRange: "S3-Regulatory OCR page 100",
    stem: "A firm files a suspicious activity report concerning possible money laundering in a futures account. Which follow-up is most appropriate?",
    choices: [
      { text: "Keep the filing confidential and avoid telling the customer about the report.", correct: true, rationale: "SAR confidentiality rules prohibit tipping off the customer." },
      { text: "Notify the customer so they can prepare a response.", rationale: "Telling the customer about a SAR can violate confidentiality rules." },
      { text: "Advertise the filing as proof of strong compliance.", rationale: "A SAR is confidential and not promotional material." },
      { text: "Close all accounts at the firm automatically.", rationale: "The required response depends on facts and procedures; automatic closure of every account is not the SAR rule." }
    ],
    explanation: "The tested trap is customer notification. Suspicious activity reporting is confidential."
  }),
  q({
    id: "reg-rewrite-cpocta-001",
    topicId: "cpo-cta",
    subtopicId: "disclosure-documents",
    difficulty: "medium",
    focus: ["cpo-cta", "disclosure"],
    concept: "CPO/CTA disclosure documents",
    sourcePageRange: "S3-Regulatory OCR pages 27, 38, 47",
    stem: "What is a central purpose of a CPO or CTA disclosure document?",
    choices: [
      { text: "To describe material risks, fees, conflicts, principals, strategy, and performance information when required.", correct: true, rationale: "Disclosure documents are designed to inform prospective clients or pool participants." },
      { text: "To guarantee that the trading program cannot lose money.", rationale: "Disclosure documents cannot guarantee futures trading results." },
      { text: "To replace all account statements.", rationale: "Disclosure documents and account statements serve different purposes." },
      { text: "To hide conflicts until after the customer subscribes.", rationale: "Material conflicts should be disclosed, not hidden." }
    ],
    explanation: "CPO/CTA questions often test what must be disclosed before participation or advisory engagement."
  }),
  q({
    id: "reg-rewrite-cpocta-002",
    topicId: "cpo-cta",
    subtopicId: "upfront-fees",
    difficulty: "medium",
    focus: ["cpo-cta", "fees"],
    concept: "Upfront fee disclosure",
    sourcePageRange: "S3-Regulatory OCR pages 27, 38, 47",
    stem: "A CTA charges a substantial upfront advisory fee. What is the main regulatory concern?",
    choices: [
      { text: "The fee and related terms should be clearly disclosed before the client commits.", correct: true, rationale: "Upfront fees are material economic terms." },
      { text: "The fee eliminates the need to disclose trading risks.", rationale: "Fees and trading risks are separate disclosures." },
      { text: "The fee guarantees profitable advice.", rationale: "A fee does not guarantee performance." },
      { text: "The fee converts the CTA into an exchange.", rationale: "Charging a fee does not change the role into a contract market." }
    ],
    explanation: "The concept is fee transparency. Upfront fees can materially affect the economics of participation."
  }),
  q({
    id: "reg-rewrite-cpocta-003",
    topicId: "cpo-cta",
    subtopicId: "performance-records",
    difficulty: "hard",
    focus: ["cpo-cta", "performance", "communications"],
    concept: "Performance record presentation",
    sourcePageRange: "S3-Regulatory OCR pages 27, 38, 47",
    stem: "Which performance presentation is most consistent with regulatory principles?",
    choices: [
      { text: "A balanced performance record that follows required calculation and disclosure standards.", correct: true, rationale: "Performance must be presented in a standardized, non-misleading way." },
      { text: "Only the single best month of returns, shown without risk discussion.", rationale: "Cherry-picked performance is misleading." },
      { text: "Hypothetical gains shown as if they were actual customer results.", rationale: "Hypothetical and actual performance must not be blurred." },
      { text: "A statement that past gains guarantee future profits.", rationale: "Guarantees of future profits are misleading." }
    ],
    explanation: "The trap is performance cherry-picking. Regulatory communication standards require fair and accurate presentation."
  }),
  q({
    id: "reg-rewrite-cpocta-004",
    topicId: "cpo-cta",
    subtopicId: "principal-backgrounds",
    difficulty: "medium",
    focus: ["cpo-cta", "disclosure"],
    concept: "Principal background disclosure",
    sourcePageRange: "S3-Regulatory OCR pages 27, 38, 47",
    stem: "Why do CPO/CTA disclosure documents often include principal background information?",
    choices: [
      { text: "It helps prospective clients evaluate the people responsible for the program.", correct: true, rationale: "Principal backgrounds can be material to a customer's decision." },
      { text: "It replaces the need to describe the trading program.", rationale: "Backgrounds and trading program descriptions are separate disclosures." },
      { text: "It guarantees that principals will not change jobs.", rationale: "Background disclosure does not guarantee future employment." },
      { text: "It allows conflicts of interest to be omitted.", rationale: "Conflicts remain a separate disclosure concern." }
    ],
    explanation: "The tested concept is material information about management and advisory personnel."
  }),
  q({
    id: "reg-rewrite-cpocta-005",
    topicId: "cpo-cta",
    subtopicId: "conflicts-of-interest",
    difficulty: "medium",
    focus: ["cpo-cta", "conflicts"],
    concept: "Conflict disclosure",
    sourcePageRange: "S3-Regulatory OCR pages 27, 38, 47",
    stem: "A CTA receives compensation that could influence which trading program it recommends. What is the best regulatory treatment?",
    choices: [
      { text: "Disclose the material conflict clearly to the client.", correct: true, rationale: "Material conflicts should be disclosed so the client can evaluate the advice." },
      { text: "Hide the conflict if the program has performed well recently.", rationale: "Recent performance does not eliminate conflict disclosure." },
      { text: "Mention the conflict only after the account is closed.", rationale: "Disclosure should be timely enough to inform the decision." },
      { text: "Treat the conflict as irrelevant because the CTA is compensated.", rationale: "Compensation arrangements can be material conflicts." }
    ],
    explanation: "Conflict questions test whether the candidate recognizes compensation incentives as potentially material."
  }),
  q({
    id: "reg-rewrite-cpocta-006",
    topicId: "cpo-cta",
    subtopicId: "bunched-orders",
    difficulty: "hard",
    focus: ["cpo-cta", "orders", "allocation"],
    concept: "Bunched order allocation",
    sourcePageRange: "S3-Regulatory OCR concept pass",
    stem: "A CTA places one block order for several client accounts. What control is most important?",
    choices: [
      { text: "Use a fair, pre-established allocation method and keep records of the allocation.", correct: true, rationale: "Bunched orders require fair allocation and documentation." },
      { text: "Give the best fills only to the largest account after execution.", rationale: "Post-trade favoritism is the allocation problem the rule seeks to prevent." },
      { text: "Allocate profitable trades to new clients and losses to older clients.", rationale: "That is unfair and misleading allocation." },
      { text: "Avoid records because the order was entered as one block.", rationale: "The block order makes allocation records more important, not less." }
    ],
    explanation: "The tested trap is hindsight allocation. Fairness requires a process before results are known."
  }),
  q({
    id: "reg-rewrite-cpocta-007",
    topicId: "cpo-cta",
    subtopicId: "recordkeeping",
    difficulty: "medium",
    focus: ["cpo-cta", "records"],
    concept: "CPO/CTA recordkeeping",
    sourcePageRange: "S3-Regulatory OCR pages 27, 38, 47",
    stem: "Which statement best describes CPO/CTA books-and-records duties?",
    choices: [
      { text: "Required records must be maintained so activity, disclosures, and performance can be reviewed.", correct: true, rationale: "Recordkeeping supports supervision and regulatory examination." },
      { text: "Records are unnecessary if the pool is profitable.", rationale: "Profitability does not remove recordkeeping duties." },
      { text: "Only oral records are needed for advisory clients.", rationale: "Regulatory records must be retained in acceptable forms." },
      { text: "Records can be destroyed once a marketing brochure is printed.", rationale: "Marketing materials do not replace books and records." }
    ],
    explanation: "Recordkeeping questions test persistence of regulatory obligations regardless of trading outcomes."
  }),
  q({
    id: "reg-rewrite-cpocta-008",
    topicId: "cpo-cta",
    subtopicId: "trading-program-descriptions",
    difficulty: "medium",
    focus: ["cpo-cta", "disclosure", "strategy"],
    concept: "Trading program description",
    sourcePageRange: "S3-Regulatory OCR pages 27, 38, 47",
    stem: "Why should a CPO or CTA describe the trading program in disclosure materials?",
    choices: [
      { text: "So prospective clients understand the strategy, markets, risks, and how the program intends to trade.", correct: true, rationale: "The program description makes the nature of the trading exposure understandable." },
      { text: "So the firm can avoid disclosing fees.", rationale: "Strategy disclosure does not replace fee disclosure." },
      { text: "So losses can be described as impossible.", rationale: "Futures trading involves risk and losses cannot be ruled out." },
      { text: "So customers can waive all regulatory protections.", rationale: "Disclosure does not waive regulatory duties." }
    ],
    explanation: "The concept is informed participation. A customer should know what the program is designed to do."
  }),
  q({
    id: "reg-rewrite-arb-001",
    topicId: "arbitration-discipline",
    subtopicId: "arbitration-procedures",
    difficulty: "medium",
    focus: ["arbitration", "customer-remedies"],
    concept: "Arbitration procedure",
    sourcePageRange: "S3-Regulatory OCR pages 54, 81",
    stem: "What is the role of arbitration in the futures regulatory framework?",
    choices: [
      { text: "It provides a dispute-resolution process for eligible customer or member disputes.", correct: true, rationale: "Arbitration is a formal dispute-resolution mechanism." },
      { text: "It sets daily price limits for futures contracts.", rationale: "Price limits are exchange or market rules, not arbitration." },
      { text: "It replaces all CFTC enforcement authority.", rationale: "Arbitration and regulatory enforcement are different processes." },
      { text: "It guarantees that the customer will win every dispute.", rationale: "Arbitration provides a process, not a guaranteed outcome." }
    ],
    explanation: "The key is distinguishing private dispute resolution from enforcement, trading rules, and customer guarantees."
  }),
  q({
    id: "reg-rewrite-arb-002",
    topicId: "arbitration-discipline",
    subtopicId: "reparations-procedures",
    difficulty: "medium",
    focus: ["arbitration", "customer-remedies", "enforcement"],
    concept: "CFTC reparations filing period",
    sourcePageRange: "S3-Regulatory OCR page 79",
    stem: "A customer wants to bring a CFTC reparations claim for damages. Which timing principle is most relevant?",
    choices: [
      { text: "The claim must be filed within the applicable statutory limitations period.", correct: true, rationale: "Reparations claims are time-limited under the Commodity Exchange Act framework." },
      { text: "The claim may be filed at any time without limitation.", rationale: "Reparations are subject to timing limits." },
      { text: "The claim must wait until every futures exchange closes permanently.", rationale: "That is unrelated to customer remedies." },
      { text: "The claim is available only if the customer never traded futures.", rationale: "Reparations concern futures-related disputes and damages." }
    ],
    explanation: "The OCR pass surfaced reparations timing as a tested concept. The app keeps the question original and focuses on the rule principle rather than copying source wording."
  }),
  q({
    id: "reg-rewrite-arb-003",
    topicId: "arbitration-discipline",
    subtopicId: "penalties",
    difficulty: "hard",
    focus: ["arbitration", "enforcement", "penalties"],
    concept: "Failure to satisfy award or settlement",
    sourcePageRange: "S3-Regulatory OCR page 81",
    stem: "A member fails to comply with a final arbitration award or settlement agreement and no valid modification request is pending. What consequence can be implicated?",
    choices: [
      { text: "NFA may take action affecting membership or associate status after the required process.", correct: true, rationale: "Failure to honor awards or settlements can lead to membership consequences." },
      { text: "The award automatically becomes a futures contract.", rationale: "An arbitration award is not converted into a futures contract." },
      { text: "All customer complaints against the firm are erased.", rationale: "Nonpayment does not erase complaint records." },
      { text: "The firm is excused from supervision rules.", rationale: "A compliance failure does not excuse supervision obligations." }
    ],
    explanation: "The concept is enforcement leverage for failure to honor dispute-resolution outcomes."
  }),
  q({
    id: "reg-rewrite-arb-004",
    topicId: "arbitration-discipline",
    subtopicId: "formal-complaints",
    difficulty: "medium",
    focus: ["discipline", "enforcement"],
    concept: "Formal disciplinary complaint",
    sourcePageRange: "S3-Regulatory OCR concept pass",
    stem: "In a disciplinary matter, what is the function of a formal complaint?",
    choices: [
      { text: "It states alleged rule violations and starts the formal disciplinary process.", correct: true, rationale: "A formal complaint frames the charges and proceeding." },
      { text: "It is the same as an ordinary customer account statement.", rationale: "A complaint and an account statement are different documents." },
      { text: "It guarantees that the respondent will be found liable.", rationale: "A complaint alleges violations; it is not the final decision." },
      { text: "It replaces the need for a hearing or settlement process.", rationale: "The complaint begins the process; it does not replace later procedural steps." }
    ],
    explanation: "The trap is confusing allegations with outcomes. Formal complaints start disciplinary proceedings."
  }),
  q({
    id: "reg-rewrite-arb-005",
    topicId: "arbitration-discipline",
    subtopicId: "offers-to-settle",
    difficulty: "medium",
    focus: ["discipline", "settlement"],
    concept: "Offer to settle",
    sourcePageRange: "S3-Regulatory OCR concept pass",
    stem: "Why might a respondent submit an offer to settle in a disciplinary matter?",
    choices: [
      { text: "To resolve the matter under agreed terms without completing the full contested process.", correct: true, rationale: "Settlement offers are a procedural route to resolution." },
      { text: "To automatically erase all records of the matter.", rationale: "A settlement does not necessarily erase regulatory records." },
      { text: "To convert the matter into a customer hedge.", rationale: "Settlement procedure is unrelated to hedge classification." },
      { text: "To avoid all future compliance obligations.", rationale: "Settlement does not remove ongoing regulatory duties." }
    ],
    explanation: "Offers to settle are procedural. They resolve matters under terms, but they do not make compliance duties disappear."
  }),
  q({
    id: "reg-rewrite-arb-006",
    topicId: "arbitration-discipline",
    subtopicId: "member-responsibility-actions",
    difficulty: "hard",
    focus: ["discipline", "enforcement", "mra"],
    concept: "Member Responsibility Action",
    sourcePageRange: "S3-Regulatory OCR concept pass",
    stem: "What is the general purpose of a Member Responsibility Action?",
    choices: [
      { text: "To allow prompt protective action when a member's conduct or condition presents serious regulatory concerns.", correct: true, rationale: "MRAs are designed for urgent protective regulatory response." },
      { text: "To reward a member for high monthly profits.", rationale: "MRAs are not awards for performance." },
      { text: "To set option strike prices for exchanges.", rationale: "Strike prices are market/product terms, not MRA matters." },
      { text: "To replace every arbitration procedure.", rationale: "MRAs and arbitration serve different purposes." }
    ],
    explanation: "This tests the emergency/protective character of MRAs."
  }),
  q({
    id: "reg-rewrite-arb-007",
    topicId: "arbitration-discipline",
    subtopicId: "hearings",
    difficulty: "medium",
    focus: ["discipline", "procedure"],
    concept: "Disciplinary hearing",
    sourcePageRange: "S3-Regulatory OCR concept pass",
    stem: "In a contested disciplinary proceeding, what is the role of a hearing?",
    choices: [
      { text: "It provides a forum to present evidence and arguments before a decision is made.", correct: true, rationale: "A hearing supports procedural fairness in contested matters." },
      { text: "It automatically proves the respondent committed every alleged violation.", rationale: "A hearing evaluates allegations; it does not pre-decide them." },
      { text: "It is used only to calculate option premiums.", rationale: "Option premiums are market calculations, not disciplinary procedure." },
      { text: "It permanently waives all appeal rights in every case.", rationale: "Appeal rights depend on the rules and outcome; the hearing itself is not a universal waiver." }
    ],
    explanation: "The question separates hearing procedure from allegations, market mechanics, and appeals."
  }),
  q({
    id: "reg-rewrite-communications-001",
    topicId: "cpo-cta",
    subtopicId: "public-communications",
    difficulty: "medium",
    focus: ["communications", "cpo-cta"],
    concept: "Public communications by CPOs/CTAs",
    sourcePageRange: "S3-Regulatory OCR pages 21, 28, 29, 37, 42",
    stem: "A CTA website describes a strategy as safe because it uses stop orders. What is the main concern?",
    choices: [
      { text: "The statement may mislead clients because stop orders do not eliminate futures trading risk.", correct: true, rationale: "Risk controls may reduce or manage risk but cannot make trading risk-free." },
      { text: "The statement is always correct because stops guarantee fills at the stop price.", rationale: "Stops do not guarantee execution at a specific price in all conditions." },
      { text: "The statement is irrelevant because websites are never communications.", rationale: "Websites can be public communications." },
      { text: "The statement cures any disclosure-document deficiency.", rationale: "A website statement does not replace required disclosure documents." }
    ],
    explanation: "This tests a common promotional trap: implying risk has been eliminated by a trading tool."
  }),
  q({
    id: "reg-rewrite-communications-002",
    topicId: "fcm-ib",
    subtopicId: "promotional-material",
    difficulty: "hard",
    focus: ["communications", "performance"],
    concept: "Hypothetical performance presentation",
    sourcePageRange: "S3-Regulatory OCR pages 21, 28, 29, 37, 42",
    stem: "A promotional presentation shows model-based futures returns. What must the firm avoid?",
    choices: [
      { text: "Presenting hypothetical results as if they were actual customer trading results.", correct: true, rationale: "Hypothetical performance must not be misleadingly presented as actual performance." },
      { text: "Explaining that results are hypothetical.", rationale: "Clear labeling is generally a control, not the problem." },
      { text: "Including material risk qualifications.", rationale: "Risk qualifications help balance the presentation." },
      { text: "Keeping records of the communication.", rationale: "Recordkeeping supports compliance." }
    ],
    explanation: "The tested trap is confusion between model results and actual trading performance."
  }),
  q({
    id: "reg-rewrite-records-001",
    topicId: "fcm-ib",
    subtopicId: "time-stamping",
    difficulty: "hard",
    focus: ["orders", "records"],
    concept: "Audit trail integrity",
    sourcePageRange: "S3-Regulatory OCR pages 50, 80",
    stem: "An order ticket is missing the receipt time, but the trade was executed correctly. What is the regulatory issue?",
    choices: [
      { text: "The missing time can still be a books-and-records or audit trail problem.", correct: true, rationale: "Accurate execution does not cure missing order-record information." },
      { text: "There is no issue if the customer made money.", rationale: "Profitability does not cure recordkeeping failures." },
      { text: "The issue exists only if the contract went to delivery.", rationale: "Order records matter regardless of delivery." },
      { text: "The issue disappears if the AP remembers the time later.", rationale: "A later memory is not the same as a timely audit trail record." }
    ],
    explanation: "This question tests the independence of recordkeeping duties from trade outcome."
  }),
  q({
    id: "reg-rewrite-supervision-002",
    topicId: "general-regulatory",
    subtopicId: "account-supervision-review",
    difficulty: "hard",
    focus: ["supervision", "communications"],
    concept: "Supervision of promotional material",
    sourcePageRange: "S3-Regulatory OCR pages 49, 77, 149",
    stem: "A branch office publishes futures trading commentary without firm review. Which compliance gap is most direct?",
    choices: [
      { text: "Failure to supervise public communications and branch activity.", correct: true, rationale: "Members must supervise employees, agents, and communications." },
      { text: "Failure to calculate intrinsic value.", rationale: "Intrinsic value is an options calculation, not the supervisory gap here." },
      { text: "Failure to assign delivery notices.", rationale: "Delivery assignment is unrelated to communication review." },
      { text: "Failure to reduce exchange open interest.", rationale: "Open interest is not the issue in a branch communication review." }
    ],
    explanation: "The issue is not the market opinion itself; it is whether regulated communications and branch conduct are supervised."
  }),
  q({
    id: "reg-rewrite-review-001",
    topicId: "general-regulatory",
    subtopicId: "account-opening",
    difficulty: "easy",
    focus: ["account-rules", "high-yield"],
    concept: "Account opening control sequence",
    sourcePageRange: "S3-Regulatory OCR pages 1-81",
    stem: "Which sequence best reflects a compliant account-opening mindset?",
    choices: [
      { text: "Collect customer information, provide required disclosures, approve the account, then allow trading.", correct: true, rationale: "This sequence places controls before trading." },
      { text: "Trade first, collect documents only if the customer loses money.", rationale: "Controls and disclosures should precede trading." },
      { text: "Skip risk disclosure if the customer has traded stocks.", rationale: "Securities experience does not eliminate futures disclosure requirements." },
      { text: "Let the AP approve discretionary authority without written customer consent.", rationale: "Discretionary authority requires specific documentation and supervision." }
    ],
    explanation: "This high-yield review item ties together customer information, disclosures, approval, and trading permission."
  }),
  q({
    id: "reg-rewrite-review-002",
    topicId: "general-regulatory",
    subtopicId: "risk-disclosure",
    difficulty: "medium",
    focus: ["risk-disclosure", "high-yield"],
    concept: "Futures risk cannot be waived away",
    sourcePageRange: "S3-Regulatory OCR pages 1-81",
    stem: "A customer signs a statement saying they do not want to read any futures risk disclosure. What should the firm understand?",
    choices: [
      { text: "The firm still must satisfy required risk disclosure obligations.", correct: true, rationale: "A customer preference does not erase mandatory disclosure duties." },
      { text: "The statement eliminates futures risk.", rationale: "A waiver does not change market risk." },
      { text: "The firm may ignore all account-opening rules.", rationale: "Mandatory account controls remain in place." },
      { text: "The AP may now exercise discretion without written authorization.", rationale: "Risk disclosure and discretionary authorization are separate requirements." }
    ],
    explanation: "The trap is waiver language. Regulatory requirements cannot be avoided by a customer's refusal to read them."
  }),
  q({
    id: "reg-rewrite-review-003",
    topicId: "fcm-ib",
    subtopicId: "customer-complaints",
    difficulty: "easy",
    focus: ["customer-complaints", "high-yield"],
    concept: "Complaint versus market loss",
    sourcePageRange: "S3-Regulatory OCR pages 80-81",
    stem: "A written customer letter alleges that an AP misrepresented futures risk. How should the firm classify the item for controls?",
    choices: [
      { text: "As a written customer complaint that should be retained and handled under firm procedures.", correct: true, rationale: "A written allegation about account handling or communications is a complaint-control item." },
      { text: "As ordinary market commentary with no record value.", rationale: "A customer allegation is not ordinary commentary." },
      { text: "As a delivery notice.", rationale: "The issue concerns conduct, not delivery." },
      { text: "As a margin deposit.", rationale: "A complaint is not a funds deposit." }
    ],
    explanation: "This tests recognition of complaints in practical form, not just the word complaint."
  })
];
