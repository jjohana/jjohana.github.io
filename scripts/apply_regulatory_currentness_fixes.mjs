import fs from "node:fs/promises";
import path from "node:path";

const root = process.cwd();
const verifiedAt = "2026-05-14T00:00:00.000Z";
const verifiedBy = "OpenAI gpt-5.5 vision import + Codex regulatory currentness audit";

function extractArray(source) {
  const start = source.indexOf("= [");
  const end = source.lastIndexOf("];");
  if (start === -1 || end === -1) throw new Error("Could not locate exported question array");
  return JSON.parse(source.slice(start + 2, end + 1));
}

function tsContent(exportName, questions) {
  return `import type { Question } from "../types";\n\nexport const ${exportName}: Question[] = ${JSON.stringify(questions, null, 2)};\n`;
}

function appendSourceNote(question, note) {
  const current = question.sourceNote ?? "";
  const cleaned = current
    .split(note)
    .join("")
    .replace(/\s+\./g, ".")
    .replace(/\s+/g, " ")
    .trim();
  const separator = cleaned.endsWith(".") ? " " : ". ";
  return `${cleaned}${separator}${note}`;
}

function c(id, text, isCorrect, rationale) {
  return { id, text, isCorrect, rationale };
}

const sourceNote =
  "Regulatory currentness checked against official NFA materials and eCFR Title 17 current through 2026-05-12, reviewed 2026-05-14.";

const fixes = {
  "s3-regulatory-pdf-014": {
    topicId: "cpo-cta",
    subtopicId: "cta-regulations",
    difficulty: "medium",
    stem:
      "A person, other than the pool's CPO, is given authority to allocate a commodity pool's assets among CTAs or investee pools. What is the key registration issue?",
    choices: [
      c("a", "The authority may make the person a commodity trading advisor or otherwise require registration or an available exemption.", true, "Allocating pool assets among trading advisers or investee pools is advisory/allocation authority over commodity interest trading and can trigger CTA-style registration analysis."),
      c("b", "The person is automatically exempt because only the CPO can ever need commodity-interest registration.", false, "Other persons can have registration obligations depending on their advisory, solicitation, trading, or management role."),
      c("c", "The person registers with the SEC only because commodity pools are treated solely as securities funds.", false, "Commodity pool activity can create CFTC/NFA registration obligations even if other securities-law obligations also apply."),
      c("d", "The person is treated as a floor broker because asset allocation is the same as exchange-floor execution.", false, "Asset allocation authority is not floor brokerage or floor-trading execution activity.")
    ],
    explanation:
      "The reliable concept is not the legacy label itself but the registration consequence of authority over commodity pool assets. A person who selects CTAs or investee pools or otherwise directs commodity-interest exposure may be performing advisory or management functions that require CFTC/NFA registration unless an exclusion or exemption applies."
  },
  "s3-regulatory-pdf-019": {
    topicId: "general-regulatory",
    subtopicId: "risk-disclosure",
    difficulty: "easy",
    stem: "Before opening a commodity futures account for a non-exempt customer, what must an FCM or introducing broker do under CFTC risk-disclosure rules?",
    choices: [
      c("a", "Provide the prescribed futures risk disclosure statement and obtain the customer's signed and dated acknowledgment.", true, "CFTC Regulation 1.55 requires the disclosure statement before opening the account and requires an acknowledgment from the customer."),
      c("b", "Give only the firm's marketing brochure because risk disclosure is optional if the customer asks to trade.", false, "The prescribed risk disclosure is a regulatory requirement, not optional marketing material."),
      c("c", "Wait until after the first trade so the disclosure can be tailored to the customer's actual positions.", false, "The disclosure must be provided before the futures account is opened."),
      c("d", "Replace the CFTC statement with oral disclosure by the associated person.", false, "Oral disclosure is not a substitute for the prescribed written disclosure and acknowledgment.")
    ],
    explanation:
      "CFTC Regulation 1.55 is the current reliable anchor: before opening a commodity futures account for an ordinary customer, the FCM or, for an introduced account, the IB must furnish the prescribed risk disclosure and receive the customer's signed and dated acknowledgment."
  },
  "s3-regulatory-pdf-021": {
    topicId: "cpo-cta",
    subtopicId: "performance-records",
    difficulty: "medium",
    stem: "A CTA or CPO presents simulated or hypothetical performance in promotional material. What must accompany that presentation?",
    choices: [
      c("a", "A prominent caution explaining that the results are simulated or hypothetical and do not represent actual trading.", true, "CFTC Regulation 4.41 requires prescribed cautionary disclosure when simulated or hypothetical performance is presented."),
      c("b", "A statement that hypothetical results are equivalent to actual customer trading results.", false, "That would be misleading; hypothetical performance has inherent limitations."),
      c("c", "No disclosure, provided the back-test shows a profit.", false, "Profitability does not remove the cautionary disclosure requirement."),
      c("d", "A guarantee that future customers will achieve similar results.", false, "Guarantees of similar future results are improper and contrary to the purpose of the caution.")
    ],
    explanation:
      "The older source item used a narrow three-month actual-results rule. The current app-ready rule is broader and safer: under CFTC Regulation 4.41, simulated or hypothetical performance must be accompanied by a prominent prescribed caution because it is not actual trading and may benefit from hindsight."
  },
  "s3-regulatory-pdf-048": {
    topicId: "general-regulatory",
    subtopicId: "just-equitable-principles",
    difficulty: "medium",
    stem: "A designated contract market wants to amend an exchange trading rule such as a price-limit rule. Which statement best describes the CFTC role?",
    choices: [
      c("a", "Exchange rule changes are subject to CFTC filing, self-certification, or approval procedures under the Commodity Exchange Act framework.", true, "DCM rule changes are not purely private changes; they are subject to the CFTC rule-submission framework."),
      c("b", "The exchange may change the rule privately without any CFTC filing or oversight.", false, "Exchange rules remain subject to CFTC oversight and filing procedures."),
      c("c", "Only NFA approves exchange trading rules; the CFTC has no role.", false, "NFA is important for member regulation, but DCM rule submissions are part of the CFTC oversight framework."),
      c("d", "A rule change is valid only after each customer gives written consent.", false, "Customer consent is not the mechanism for exchange rule certification or approval.")
    ],
    explanation:
      "The source's absolute 'must be approved' wording is too crude for current rules. The current exam-useful point is that DCM rule changes are subject to the CFTC rule-submission framework, which may involve self-certification, prior approval, or review depending on the rule and procedure used."
  },
  "s3-regulatory-pdf-057": {
    topicId: "general-regulatory",
    subtopicId: "just-equitable-principles",
    difficulty: "easy",
    stem: "Which statement best reflects the current regulatory treatment of ethics training for futures registrants?",
    choices: [
      c("a", "Ethics training is part of a firm's supervision and fitness culture, and CFTC guidance allows flexible firm-specific programs rather than one universal fixed-hour schedule.", true, "CFTC Part 3 Appendix B treats ethics training as relevant to supervision and fitness and allows flexibility in method and timing."),
      c("b", "Ethics training is prohibited because only technical proficiency exams may be used.", false, "Ethics training is not prohibited; it is an important compliance and supervision tool."),
      c("c", "Ethics training is required only for customers, not registrants or associated persons.", false, "The guidance is directed at registrants and personnel, not customer education."),
      c("d", "A firm can ignore ethics training because supervision rules do not cover conduct standards.", false, "Supervision and ethical conduct are closely linked under the regulatory framework.")
    ],
    explanation:
      "The old fixed-hour ethics-training formulation is not the best current study point. Current CFTC guidance treats ethics training as a flexible supervision and fitness practice. A firm should maintain a culture and program that keeps relevant personnel aware of ethical duties and regulatory changes."
  },
  "s3-regulatory-pdf-109": {
    topicId: "general-regulatory",
    subtopicId: "cftc-registration",
    difficulty: "medium",
    stem: "For Series 3 regulatory purposes after Dodd-Frank, which group best reflects the broad set of commodity-interest products regulated by the CFTC framework?",
    choices: [
      c("a", "Futures contracts, options on futures, retail forex where covered, and swaps.", true, "The CFTC framework covers futures, options on futures, swaps, and certain retail forex activity."),
      c("b", "Only exchange-traded equity securities.", false, "Equity securities are primarily securities-law products, not the full CFTC commodity-interest scope."),
      c("c", "Only agricultural futures contracts traded by floor brokers.", false, "The CFTC framework is much broader than agricultural futures and floor trading."),
      c("d", "Only cash commodity transactions with immediate delivery.", false, "Ordinary cash transactions with immediate delivery are not the broad derivatives scope tested here.")
    ],
    explanation:
      "The source item was moved out of risk disclosure because it tests regulatory scope. After Dodd-Frank, swaps joined futures and options on futures as central CFTC-regulated commodity-interest products, with retail forex also covered in specific circumstances."
  },
  "s3-regulatory-pdf-112": {
    topicId: "general-regulatory",
    subtopicId: "just-equitable-principles",
    difficulty: "medium",
    stem: "Under the CFTC conflict-of-interest framework for FCMs and IBs, which statement about research analysts and trading personnel is most accurate?",
    choices: [
      c("a", "The firm must maintain policies and procedures designed to separate research from business trading influence that could compromise independence.", true, "CFTC Regulation 1.71 requires conflict-of-interest policies and controls around research and business trading units."),
      c("b", "Research analysts may be placed directly under trading-desk supervision if NFA approves it informally.", false, "The current rule focuses on written conflicts policies and controls; direct trading-desk control is not the safe answer."),
      c("c", "Research rules apply only to securities broker-dealers and never to FCMs or IBs.", false, "CFTC Regulation 1.71 applies to FCMs and IBs."),
      c("d", "Research independence is irrelevant if the report is distributed only online.", false, "Distribution channel does not remove the conflict-of-interest concern.")
    ],
    explanation:
      "CFTC Regulation 1.71 addresses conflicts of interest for FCMs and IBs, including research-related safeguards. The exam-useful point is that firms need policies and procedures to protect research integrity from improper business trading influence."
  },
  "s3-regulatory-pdf-117": {
    topicId: "arbitration-discipline",
    subtopicId: "arbitration-procedures",
    difficulty: "medium",
    stem: "Under current NFA customer arbitration guidance, when is a case generally handled through written submissions instead of an oral hearing?",
    choices: [
      c("a", "Claims of $25,000 or less are resolved through summary proceedings, and claims over $25,000 up to $50,000 are also written unless an oral hearing is timely requested.", true, "Current NFA customer arbitration guidance describes summary/written proceedings for these claim ranges."),
      c("b", "Only claims of $5,000 or less can ever be handled through written submissions.", false, "That old threshold is too low under current NFA guidance."),
      c("c", "Every arbitration claim requires a live oral hearing regardless of amount.", false, "NFA summary proceedings can be based on written submissions."),
      c("d", "Written submissions are used only if the respondent defaults.", false, "Claim amount and procedural rules, not only default, determine summary proceedings.")
    ],
    explanation:
      "The source's $5,000 threshold was outdated. Current NFA customer arbitration guidance says claims involving $25,000 or less are resolved through summary proceedings, and claims over $25,000 but not more than $50,000 are also handled through written submissions unless an oral hearing is timely requested with the required fee."
  },
  "s3-regulatory-pdf-121": {
    topicId: "general-regulatory",
    subtopicId: "registration-exemptions",
    difficulty: "medium",
    stem: "A foreign futures-related product is proposed to be offered to U.S. persons. What is the safest regulatory conclusion?",
    choices: [
      c("a", "The offer may require CFTC or other U.S. regulatory relief, recognition, registration, or other permission before it is made to U.S. persons.", true, "Foreign trading status does not automatically make a product freely offerable to U.S. persons."),
      c("b", "Foreign futures products are never subject to U.S. regulatory restrictions.", false, "U.S. persons can trigger U.S. regulatory requirements even for foreign products."),
      c("c", "The SEC is always the only regulator because the product is foreign.", false, "Depending on the product, CFTC jurisdiction or relief can be central."),
      c("d", "NFA approval alone always replaces any CFTC requirement.", false, "NFA membership or oversight does not automatically replace CFTC requirements.")
    ],
    explanation:
      "The older source referred to specific no-action practices. The current reliable concept is broader: offering foreign futures-related products to U.S. persons can require CFTC recognition, relief, registration, or other regulatory analysis. Do not assume foreign products are freely offerable in the United States."
  },
  "s3-regulatory-pdf-148": {
    topicId: "cpo-cta",
    subtopicId: "disclosure-documents",
    difficulty: "medium",
    stem: "Before a registered CTA enters into an advisory agreement for a trading program with a prospective client, what must generally happen?",
    choices: [
      c("a", "The CTA must deliver the required Disclosure Document and obtain the client's acknowledgment of receipt.", true, "CFTC Regulation 4.31 requires delivery before the advisory agreement is accepted and requires an acknowledgment."),
      c("b", "The CTA can wait until after the first month of trading to deliver the Disclosure Document.", false, "Disclosure must come before the advisory relationship is accepted."),
      c("c", "The CTA needs only oral disclosure if the client is experienced.", false, "The rule requires a Disclosure Document and acknowledgment unless an exemption applies."),
      c("d", "The exchange clearing the trades prepares and delivers the CTA Disclosure Document.", false, "The CTA, not the exchange, is responsible for CTA disclosure obligations.")
    ],
    explanation:
      "The source's filing-timing formulation was dated. The current app-ready point is the core requirement in CFTC Regulation 4.31: a registered CTA must deliver a Disclosure Document for the trading program before entering into the advisory agreement and must obtain an acknowledgment of receipt."
  },
  "s3-regulatory-pdf-158": {
    topicId: "general-regulatory",
    subtopicId: "risk-disclosure",
    difficulty: "easy",
    stem: "Who prescribes the standard futures risk-disclosure language that must be given to customers before a commodity futures account is opened?",
    choices: [
      c("a", "The CFTC.", true, "CFTC Regulation 1.55 contains the prescribed futures risk disclosure statement."),
      c("b", "The customer's bank.", false, "A bank does not prescribe the CFTC futures risk disclosure language."),
      c("c", "The customer's tax adviser.", false, "Tax advisers do not prescribe futures risk disclosure language."),
      c("d", "The exchange member's marketing department.", false, "Marketing departments cannot replace the prescribed CFTC disclosure language.")
    ],
    explanation:
      "CFTC Regulation 1.55 contains the prescribed risk disclosure statement for commodity futures accounts. The key study point is that required futures risk-disclosure language is regulatory, not firm-written marketing language."
  },
  "s3-regulatory-pdf-176": {
    topicId: "general-regulatory",
    subtopicId: "associated-person",
    difficulty: "medium",
    stem: "An associated person's registration terminated within the preceding 60 days and the person becomes associated with a new sponsor. What may NFA grant if the required filings and certifications are made?",
    choices: [
      c("a", "A temporary AP license for the new sponsor, subject to the conditions in the registration rules.", true, "CFTC Regulation 3.40 includes special temporary licensing procedures for APs whose registration terminated within the preceding 60 days."),
      c("b", "A permanent license with no new Form 8-R or sponsor certification.", false, "Required filings and certifications still matter."),
      c("c", "An automatic exemption from AP registration for one year.", false, "The rule concerns temporary licensing, not a one-year exemption."),
      c("d", "A floor-trader registration because changing sponsors converts the AP role into floor trading.", false, "AP status and floor-trader status are different registration categories.")
    ],
    explanation:
      "CFTC Regulation 3.40 contains temporary licensing procedures. For an AP whose registration terminated within the preceding 60 days, NFA may grant a temporary license with the new sponsor when the required Form 8-R and sponsor certifications are filed and the regulatory conditions are satisfied."
  },
  "s3-regulatory-pdf-179": {
    topicId: "cpo-cta",
    subtopicId: "disclosure-documents",
    difficulty: "easy",
    stem: "Which statement about principal-protected commodity pools is accurate under current CFTC Part 4 terminology?",
    choices: [
      c("a", "A principal-protected pool is a recognized disclosure category; it is not automatically prohibited merely because it is designed to limit initial-investment losses.", true, "CFTC Regulation 4.10 defines principal-protected pools, which confirms that the category exists."),
      c("b", "All principal-protected pools are categorically banned by CFTC regulation.", false, "The category is defined in CFTC Part 4 and is not categorically banned on that basis alone."),
      c("c", "A pool may call itself principal-protected without explaining costs, risks, or conditions.", false, "Disclosure must not be misleading and must explain material terms and risks."),
      c("d", "Principal-protected status eliminates CPO disclosure obligations.", false, "Being principal-protected does not by itself eliminate disclosure obligations.")
    ],
    explanation:
      "The source asked whether principal-protected pools are no longer permitted. Current CFTC Part 4 uses the defined term 'principal-protected pool,' so the safe answer is that the category exists, but claims about protection must be disclosed accurately and must not be misleading."
  },
  "s3-regulatory-pdf-181": {
    topicId: "cpo-cta",
    subtopicId: "performance-records",
    difficulty: "hard",
    stem: "A CPO or CTA includes extracted, pro forma, simulated, or hypothetical performance in a Disclosure Document. Where should that supplemental performance information generally appear?",
    choices: [
      c("a", "After the required disclosures, with appropriate caution and support so the presentation is not misleading.", true, "CFTC Part 4 requires supplemental and hypothetical/extracted performance to be presented with care and after required information."),
      c("b", "Before all required performance disclosures so it receives the most emphasis.", false, "Required performance information should not be displaced by supplemental performance."),
      c("c", "Only in oral sales presentations so it is not part of the Disclosure Document.", false, "Oral use does not avoid anti-fraud and disclosure concerns."),
      c("d", "Without explanation if the extracted component performed better than the whole program.", false, "Selective performance without explanation can be misleading.")
    ],
    explanation:
      "CFTC Part 4 treats extracted, pro forma, simulated, and hypothetical performance as high-risk supplemental information. The current study point is not a legacy mechanical condition, but that such performance must be supported, placed after required information, accompanied by required cautions where applicable, and not be misleading."
  },
  "s3-regulatory-pdf-185": {
    topicId: "fcm-ib",
    subtopicId: "net-capital-requirements",
    difficulty: "hard",
    stem: "Under current CFTC minimum financial rules, how is the basic adjusted-net-capital requirement for an FCM determined?",
    choices: [
      c("a", "The FCM must maintain adjusted net capital at least equal to the greatest applicable required amount, including the fixed-dollar minimum, risk-based requirement, RFA requirement, and any applicable SEC broker-dealer requirement.", true, "CFTC Regulation 1.17 uses a greatest-of structure for FCM adjusted net capital."),
      c("b", "The FCM always needs only $45,000 in adjusted net capital.", false, "$45,000 is associated with IB minimum capital, not the general FCM requirement."),
      c("c", "The FCM may choose the lowest applicable capital formula.", false, "The rule uses the greatest applicable amount, not the lowest."),
      c("d", "The FCM has no minimum capital requirement if it carries only customer accounts.", false, "Customer-account activity does not eliminate FCM financial requirements.")
    ],
    explanation:
      "CFTC Regulation 1.17 currently requires an FCM to maintain adjusted net capital equal to or above the greatest applicable amount. The fixed-dollar minimum is one component, but risk-based, registered futures association, SEC broker-dealer, and swap-dealer-related requirements can also matter."
  },
  "s3-regulatory-pdf-191": {
    topicId: "fcm-ib",
    subtopicId: "promotional-material",
    difficulty: "medium",
    stem: "A Member uses foreign-language promotional material or disclosure material for U.S. customers. What is the key recordkeeping requirement?",
    choices: [
      c("a", "Maintain an English translation and keep promotional-material records for the required retention period.", true, "NFA promotional-material guidance requires English translations of foreign-language material and record retention."),
      c("b", "Translate only the profitable examples and not the risk disclosure.", false, "The translation requirement is not limited to favorable portions."),
      c("c", "Destroy the English version after the material is first used.", false, "Records must be retained; destruction after first use would defeat examination access."),
      c("d", "Avoid review because foreign-language material is outside NFA communications rules.", false, "Foreign-language material for U.S. customers remains subject to communications and recordkeeping requirements.")
    ],
    explanation:
      "NFA promotional-material guidance requires Members to retain promotional material and, where material is in another language for U.S. customers, maintain English translations so the material can be reviewed and examined."
  },
  "s3-regulatory-pdf-203": {
    topicId: "general-regulatory",
    subtopicId: "just-equitable-principles",
    difficulty: "medium",
    stem: "Which statement is most accurate about ethics training under current CFTC guidance?",
    choices: [
      c("a", "CFTC guidance allows firms flexibility to design ethics training appropriate to their business, personnel, and supervision needs.", true, "CFTC Part 3 Appendix B is a Statement of Acceptable Practices and recognizes flexible approaches."),
      c("b", "Every registrant must complete exactly one hour every three years, regardless of the firm's program.", false, "The old fixed-hour formulation is not the current safe statement."),
      c("c", "Ethics training is unrelated to supervision.", false, "The guidance links ethics training to fitness and adequate supervision."),
      c("d", "Only exchange floor personnel may receive ethics training.", false, "The guidance can apply across registrants and associated personnel.")
    ],
    explanation:
      "The legacy item stated fixed timing and duration. Current CFTC guidance is more flexible: firms may design ethics training appropriate to their activities, and the program is relevant to fitness and supervision."
  },
  "s3-regulatory-pdf-205": {
    topicId: "cpo-cta",
    subtopicId: "cpo-regulations",
    difficulty: "medium",
    stem: "A registered CPO operates a pool with net assets of $500,000 or less at the beginning of the pool's fiscal year. How often must the CPO generally distribute account statements?",
    choices: [
      c("a", "At least quarterly, within the applicable regulatory timing rules.", true, "CFTC Regulation 4.22 requires at least monthly statements for pools over $500,000 and otherwise at least quarterly."),
      c("b", "Only once every five years.", false, "CPO account statements are periodic, not five-year reports."),
      c("c", "Daily, regardless of pool size.", false, "Daily distribution is not the general Part 4 account-statement rule."),
      c("d", "Never, if the pool has fewer than 100 participants.", false, "Participant count alone does not remove the periodic account-statement requirement.")
    ],
    explanation:
      "CFTC Regulation 4.22 provides that account statements are distributed at least monthly for pools with net assets of more than $500,000 at the beginning of the fiscal year, and otherwise at least quarterly, subject to the rule's details and annual-report exception."
  },
  "s3-regulatory-pdf-210": {
    topicId: "cpo-cta",
    subtopicId: "performance-records",
    difficulty: "hard",
    stem: "For a CTA Disclosure Document, what is the general current performance-disclosure period for the offered trading program when performance exists?",
    choices: [
      c("a", "The five most recent calendar years and year-to-date, or the life of the program if shorter, with monthly rates for the offered program.", true, "CFTC Regulation 4.35 requires recent five-year and year-to-date performance disclosure, subject to life-of-program limits."),
      c("b", "Only the single best month in the program's history.", false, "Selective best-month disclosure would be misleading and incomplete."),
      c("c", "Only proprietary trading results, even when customer-account performance exists.", false, "Required performance disclosure focuses on the offered program and other required account/program information."),
      c("d", "No performance disclosure unless every trade was profitable.", false, "The rules require performance disclosure even when results include losses.")
    ],
    explanation:
      "The source used a narrow proprietary-results formulation. The current reliable CTA point is CFTC Regulation 4.35: required past performance generally covers the five most recent calendar years and year-to-date, or the life of the program if shorter, with monthly rates for the offered program."
  },
  "s3-regulatory-pdf-211": {
    topicId: "cpo-cta",
    subtopicId: "cpo-cta-promotional-material",
    difficulty: "medium",
    stem: "A CPO or CTA publishes an online video or audio message that refers to past or possible future trading profits. What is the safest compliance treatment?",
    choices: [
      c("a", "Treat it as promotional material subject to NFA/CFTC communications standards, supervisory review, required disclaimers, and recordkeeping; pre-use filing may be required when a specific NFA rule category applies.", true, "Online audio/video profit claims are promotional communications and must comply with communications, review, disclaimer, and recordkeeping rules."),
      c("b", "Treat it as exempt from all rules because it is online rather than printed.", false, "Online format does not remove communications obligations."),
      c("c", "Permit profit claims without risk disclosure if the speaker is a principal.", false, "A principal's status does not remove anti-fraud, disclaimer, or supervision requirements."),
      c("d", "Delete all records after posting because the public can view the video.", false, "Public availability is not a substitute for required records.")
    ],
    explanation:
      "The old item used a narrow pre-use approval formulation. The current, exam-safe point is broader: online audio and video communications that make recommendations or refer to profits are promotional material and must satisfy NFA/CFTC communications standards, including review, required disclaimers, and record retention."
  },
  "s3-regulatory-pdf-214": {
    topicId: "cpo-cta",
    subtopicId: "disclosure-documents",
    difficulty: "medium",
    stem: "Which statement best describes current CTA Disclosure Document obligations before accepting a prospective client's advisory agreement?",
    choices: [
      c("a", "The CTA must deliver the required Disclosure Document and receive an acknowledgment of receipt, unless an exemption applies.", true, "CFTC Regulation 4.31 requires delivery and acknowledgment before the advisory agreement is accepted."),
      c("b", "The CTA files the document only with a futures exchange and need not deliver it to the client.", false, "Client delivery and acknowledgment are core requirements."),
      c("c", "The CTA can rely solely on an oral explanation by the AP.", false, "Oral explanation does not replace the required Disclosure Document."),
      c("d", "The CTA has no disclosure obligation if the trading program uses only exchange-traded futures.", false, "Exchange-traded futures do not eliminate CTA disclosure obligations.")
    ],
    explanation:
      "The legacy source focused on filing destination. For current app use, the core rule is more reliable: a registered CTA must deliver a Disclosure Document containing required information and obtain acknowledgment before accepting the advisory agreement, unless valid relief applies."
  },
  "s3-regulatory-pdf-218": {
    topicId: "cpo-cta",
    subtopicId: "disclosure-documents",
    difficulty: "medium",
    stem: "How current must performance information in a CPO or CTA Disclosure Document generally be?",
    choices: [
      c("a", "Current as of a date not more than three months before the date of the Disclosure Document.", true, "CFTC Part 4 performance rules require performance information to be current within this three-month window."),
      c("b", "Current as of any date within the last ten years.", false, "Ten years is too stale for required performance information."),
      c("c", "Current only as of the pool's original launch date.", false, "Performance information must be updated; launch-date-only information is not sufficient."),
      c("d", "Current only if the program had losses.", false, "The currency requirement applies to performance information generally.")
    ],
    explanation:
      "CFTC Part 4 provides that performance information presented in a Disclosure Document must be current as of a date not more than three months before the date of the document. This applies to required performance information, subject to the specific CPO/CTA rules."
  },
  "s3-regulatory-pdf-219": {
    topicId: "cpo-cta",
    subtopicId: "disclosure-documents",
    difficulty: "hard",
    stem: "A commodity pool is also subject to securities-law disclosure obligations. What is the safest CPO compliance conclusion?",
    choices: [
      c("a", "The CPO must analyze and satisfy both CFTC/NFA and applicable securities-law disclosure requirements, using harmonized or exemptive relief only when available.", true, "Dual regulatory status can require compliance with both regimes unless valid relief applies."),
      c("b", "SEC registration automatically cancels all CFTC Part 4 obligations.", false, "Securities-law status does not automatically eliminate CFTC/NFA obligations."),
      c("c", "CFTC disclosure rules always cancel SEC disclosure obligations.", false, "CFTC rules do not automatically eliminate securities-law obligations."),
      c("d", "The pool may omit material disclosure because another regulator also reviews it.", false, "Material disclosure obligations remain central.")
    ],
    explanation:
      "The source's specific Statement of Additional Information wording is too context-dependent for a verified Series 3 QCM. The reliable current concept is dual compliance: if a pool is subject to both CFTC/NFA and securities-law disclosure regimes, the CPO must analyze both and rely on harmonized or exemptive relief only when it actually applies."
  },
  "s3-regulatory-pdf-221": {
    topicId: "cpo-cta",
    subtopicId: "cpo-regulations",
    difficulty: "medium",
    stem: "Which condition is part of the small-pool CPO registration exemption in CFTC Regulation 4.13(a)(2)?",
    choices: [
      c("a", "No pool operated by the person has more than 15 participants, and aggregate gross capital contributions for all pools do not exceed $400,000, subject to the rule's exclusions.", true, "CFTC Regulation 4.13(a)(2) contains the 15-participant and $400,000 aggregate-contribution conditions."),
      c("b", "The operator may run unlimited pools with unlimited outside capital.", false, "The exemption has participant and contribution limits."),
      c("c", "The exemption is available only if every participant is a retail forex dealer.", false, "Retail forex dealer status is not the condition tested by 4.13(a)(2)."),
      c("d", "The pool must trade only securities and no commodity interests.", false, "The exemption is a CPO registration exemption for commodity pools meeting specified limits.")
    ],
    explanation:
      "CFTC Regulation 4.13(a)(2) remains the current source for the small-pool exemption: none of the pools operated has more than 15 participants, and total gross capital contributions for units of participation in all pools do not exceed $400,000, subject to participant/contribution exclusions in the rule."
  },
  "s3-regulatory-pdf-224": {
    topicId: "cpo-cta",
    subtopicId: "cpo-regulations",
    difficulty: "medium",
    stem: "Which statement is safest regarding offering commodity pool interests across U.S. states?",
    choices: [
      c("a", "A pool interest may raise federal and state securities-law issues, so availability in every state cannot be assumed without legal/regulatory analysis.", true, "Commodity pool interests can implicate securities offering rules and state-law considerations."),
      c("b", "Every U.S. commodity pool interest is automatically available in all states regardless of state law.", false, "State-law and securities-law issues can affect offerings."),
      c("c", "State law controls futures exchange contract terms but never pool interests.", false, "State securities or offering laws can be relevant to pool interests."),
      c("d", "Only agricultural pools are subject to any state-law restrictions.", false, "The issue is not limited to agricultural pools.")
    ],
    explanation:
      "The source's false answer remains directionally correct, but the current app-ready wording is broader and safer: commodity pool interests can involve federal and state securities-law analysis, so a CPO should not assume nationwide offering availability without checking applicable law and exemptions."
  },
  "s3-regulatory-pdf-226": {
    topicId: "general-regulatory",
    subtopicId: "registration-exemptions",
    difficulty: "medium",
    stem: "Which statement best describes offering foreign futures-related products to U.S. persons?",
    choices: [
      c("a", "The analysis can depend on product type, foreign board access, CFTC relief or recognition, and other U.S. regulatory conditions.", true, "Foreign product access for U.S. persons is fact-specific and can require CFTC or other regulatory treatment."),
      c("b", "Foreign futures and foreign government-debt futures may always be sold to U.S. persons without any U.S. review.", false, "U.S. regulatory conditions can apply."),
      c("c", "Only the foreign exchange's home regulator has any authority over U.S. customer access.", false, "U.S. regulators may also have authority when U.S. persons are solicited or given access."),
      c("d", "NFA membership automatically approves every foreign product.", false, "NFA membership does not automatically approve all foreign products for U.S. customers.")
    ],
    explanation:
      "The source listed legacy categories requiring approval. The current reliable study concept is that foreign futures-related products offered to U.S. persons require regulatory analysis based on the product, trading venue, CFTC relief or recognition, and other applicable U.S. conditions."
  },
  "s3-regulatory-pdf-227": {
    topicId: "cpo-cta",
    subtopicId: "cpo-regulations",
    difficulty: "medium",
    stem: "Under CFTC Part 4 definitions, what is a major investee pool?",
    choices: [
      c("a", "An investee pool allocated or intended to be allocated at least 10 percent of the net asset value of the investing pool.", true, "CFTC Regulation 4.10 defines a major investee pool using a 10 percent net asset value threshold."),
      c("b", "Any pool in which another pool invests at least 20 percent of the investee pool's own net asset value.", false, "The current definition uses at least 10 percent of the investing pool's net asset value."),
      c("c", "Only a pool guaranteed by the federal government.", false, "Guarantee status is unrelated to the major investee pool definition."),
      c("d", "Any account managed by an associated person for one customer.", false, "A major investee pool is a pool-to-pool allocation concept, not a single-customer account.")
    ],
    explanation:
      "The source's 20 percent formulation is not current. CFTC Regulation 4.10 defines a major investee pool, with respect to a pool, as any investee pool allocated or intended to be allocated at least 10 percent of the net asset value of the pool."
  },
  "s3-regulatory-pdf-231": {
    topicId: "cpo-cta",
    subtopicId: "performance-records",
    difficulty: "medium",
    stem: "For a CPO Disclosure Document, what period does required past-performance disclosure generally cover when the pool has sufficient history?",
    choices: [
      c("a", "The most recent five calendar years and year-to-date, with life-of-pool treatment if the history is shorter.", true, "CFTC Regulation 4.25 uses the most recent five calendar years and year-to-date framework for pool performance disclosure."),
      c("b", "Only the pool's first year of trading.", false, "Required performance disclosure is not limited to the first year."),
      c("c", "Only profitable years.", false, "Required disclosure cannot omit losing years because they are unfavorable."),
      c("d", "Only years selected by the CPO's marketing department.", false, "The disclosure period is rule-based, not a marketing choice.")
    ],
    explanation:
      "CFTC Regulation 4.25 requires capsule past-performance information including the annual and year-to-date rate of return for the pool for the most recent five calendar years and year-to-date, or the life of the pool if shorter."
  },
  "s3-regulatory-pdf-237": {
    topicId: "fcm-ib",
    subtopicId: "net-capital-requirements",
    difficulty: "medium",
    stem: "Under current CFTC minimum financial rules, what is the baseline adjusted-net-capital test for an independent introducing broker?",
    choices: [
      c("a", "The IB must maintain adjusted net capital at least equal to the greatest applicable amount, including $45,000, any RFA requirement, and any applicable SEC broker-dealer requirement.", true, "CFTC Regulation 1.17 contains a greatest-of test for IB adjusted net capital, including the $45,000 baseline."),
      c("b", "The IB needs no capital if it introduces accounts to an FCM.", false, "Independent IBs have minimum financial requirements."),
      c("c", "The IB always uses the smallest listed amount.", false, "The rule uses the greatest applicable amount."),
      c("d", "The IB uses the FCM capital rule of $1,000,000 in every case.", false, "The FCM and IB capital rules are different.")
    ],
    explanation:
      "CFTC Regulation 1.17 currently states that each registered IB must maintain adjusted net capital equal to or above the greatest applicable amount, including $45,000, the amount required by its registered futures association, or any applicable SEC broker-dealer requirement."
  },
  "s3-regulatory-pdf-238": {
    topicId: "cpo-cta",
    subtopicId: "cpo-regulations",
    difficulty: "medium",
    stem: "A person wants to rely on the CFTC Regulation 4.13(a)(2) small-pool CPO exemption. Which fact would generally prevent reliance on that exemption?",
    choices: [
      c("a", "One of the pools operated by the person has more than 15 participants.", true, "The exemption requires that none of the pools operated has more than 15 participants, subject to exclusions."),
      c("b", "The operator keeps records of the pool's activity.", false, "Recordkeeping does not by itself prevent the exemption."),
      c("c", "The operator has read the CFTC rules before forming the pool.", false, "Regulatory awareness does not prevent the exemption."),
      c("d", "The pool has fewer than 15 participants and total gross capital contributions within the rule's limit.", false, "Those facts are consistent with the exemption rather than preventing it.")
    ],
    explanation:
      "CFTC Regulation 4.13(a)(2) includes two core limits: no pool operated by the person has more than 15 participants, and total gross capital contributions for all pools do not exceed $400,000, subject to stated exclusions. Exceeding the participant limit would generally defeat that exemption."
  },
  "s3-regulatory-pdf-243": {
    topicId: "cpo-cta",
    subtopicId: "disclosure-documents",
    difficulty: "medium",
    stem: "What is the core effect of CFTC Regulation 4.7 for CPOs and CTAs dealing only with qualified eligible persons?",
    choices: [
      c("a", "It can provide exemptions from specified Part 4 disclosure, reporting, and recordkeeping requirements when the rule's conditions are satisfied.", true, "Regulation 4.7 provides targeted relief for CPOs and CTAs operating with qualified eligible persons."),
      c("b", "It automatically exempts the firm from all CFTC and NFA rules.", false, "The relief is specific and conditional, not a blanket exemption from all regulation."),
      c("c", "It applies to any retail customer who signs a waiver.", false, "The rule is tied to qualified eligible persons and specified conditions."),
      c("d", "It eliminates anti-fraud obligations.", false, "Anti-fraud obligations remain.")
    ],
    explanation:
      "CFTC Regulation 4.7 gives qualifying CPOs and CTAs relief from specified Part 4 requirements for pools or accounts limited to qualified eligible persons. It is conditional relief, not a blanket exemption from all CFTC/NFA obligations."
  }
};

async function main() {
  const regulatoryPath = path.join(root, "src", "data", "s3RegulatoryPdfQuestions.ts");
  const regulatory = extractArray(await fs.readFile(regulatoryPath, "utf8"));
  const changed = [];

  for (const question of regulatory) {
    const fix = fixes[question.id];
    if (!fix) continue;

    Object.assign(question, {
      ...fix,
      sectionId: "us_regulations",
      questionType: "multiple_choice",
      sourceType: "imported",
      active: true,
      reviewStatus: "reviewed",
      qualityStatus: "verified",
      qualityNotes: "Regulatory currentness fix: legacy or source-specific wording was rewritten into a current, app-ready Series 3 study question with one unambiguous correct answer.",
      issueTypes: [],
      extractionConfidence: "high",
      sourceNote: appendSourceNote(question, sourceNote),
      verifiedAt,
      verifiedBy,
      updatedAt: verifiedAt
    });
    changed.push(question.id);
  }

  await fs.writeFile(regulatoryPath, tsContent("regulatoryPdfQuestions", regulatory), "utf8");
  console.log(JSON.stringify({ changed: changed.length, ids: changed }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
