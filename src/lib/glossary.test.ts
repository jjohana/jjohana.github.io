import { describe, expect, it } from "vitest";
import { glossaryEntries, searchGlossaryEntries } from "../data/glossary";

describe("glossary", () => {
  it("contains unique, usable glossary entries", () => {
    expect(glossaryEntries.length).toBeGreaterThanOrEqual(75);
    expect(new Set(glossaryEntries.map((entry) => entry.id)).size).toBe(glossaryEntries.length);
    expect(new Set(glossaryEntries.map((entry) => entry.term.toLowerCase())).size).toBe(glossaryEntries.length);

    for (const entry of glossaryEntries) {
      expect(entry.term.trim(), entry.id).not.toBe("");
      expect(entry.represents.length, entry.id).toBeGreaterThan(20);
      expect(entry.conciseExplanation.length, entry.id).toBeGreaterThan(20);
    }
  });

  it("covers the core Series 3 acronyms", () => {
    const terms = new Set(glossaryEntries.map((entry) => entry.term));
    for (const acronym of ["AP", "CFTC", "NFA", "FINRA", "FCM", "IB", "CPO", "CTA", "EFP", "FOK", "GTC", "MIT", "MOC", "OCO"]) {
      expect(terms.has(acronym), acronym).toBe(true);
    }
  });

  it("searches and filters entries", () => {
    expect(searchGlossaryEntries(glossaryEntries, "basis", "all").some((entry) => entry.term === "Basis")).toBe(true);
    expect(searchGlossaryEntries(glossaryEntries, "cftc", "acronym").map((entry) => entry.term)).toContain("CFTC");
    expect(searchGlossaryEntries(glossaryEntries, "margin", "regulatory").every((entry) => entry.category === "regulatory")).toBe(true);
  });
});
