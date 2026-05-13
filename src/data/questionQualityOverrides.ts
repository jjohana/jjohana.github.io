import type { Question } from "../types";

export const questionQualityOverrides: Record<string, Partial<Question>> = {
  "s3-market-docx-250": {
    qualityStatus: "rejected",
    issueTypes: ["duplicate"],
    qualityNotes: "Rejected by duplicate audit: exact duplicate of s3-market-docx-239."
  },
  "s3-market-docx-300": {
    qualityStatus: "rejected",
    issueTypes: ["duplicate"],
    qualityNotes: "Rejected by duplicate audit: exact duplicate of s3-market-docx-283."
  },
  "s3-market-docx-443": {
    qualityStatus: "rejected",
    issueTypes: ["duplicate"],
    qualityNotes: "Rejected by duplicate audit: near-duplicate of s3-market-docx-378."
  }
};
