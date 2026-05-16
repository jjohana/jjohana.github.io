import { normalizeDisplayText } from "./contentSanitizer";

export type DisplayTextBlock =
  | { type: "paragraph"; text: string }
  | { type: "table"; rows: string[][] };

function parseTableLine(line: string): string[] | null {
  if (!line.includes("\t")) return null;
  const cells = line.split("\t").map((cell) => normalizeDisplayText(cell));
  return cells.filter(Boolean).length >= 2 ? cells : null;
}

export function parseDisplayText(value: string | undefined): DisplayTextBlock[] {
  const text = normalizeDisplayText(value);
  if (!text) return [];

  const blocks: DisplayTextBlock[] = [];
  const paragraphLines: string[] = [];
  const lines = text.split(/\r?\n/);

  const flushParagraph = () => {
    const paragraph = paragraphLines.join("\n").trim();
    if (paragraph) blocks.push({ type: "paragraph", text: paragraph });
    paragraphLines.length = 0;
  };

  for (let index = 0; index < lines.length; index += 1) {
    const tableStart = parseTableLine(lines[index]);
    if (!tableStart) {
      if (lines[index].trim()) paragraphLines.push(lines[index]);
      else flushParagraph();
      continue;
    }

    const rows = [tableStart];
    let cursor = index + 1;
    while (cursor < lines.length) {
      const row = parseTableLine(lines[cursor]);
      if (!row) break;
      rows.push(row);
      cursor += 1;
    }

    if (rows.length >= 2) {
      flushParagraph();
      const width = Math.max(...rows.map((row) => row.length));
      blocks.push({
        type: "table",
        rows: rows.map((row) => Array.from({ length: width }, (_, cellIndex) => row[cellIndex] ?? ""))
      });
      index = cursor - 1;
    } else {
      paragraphLines.push(rows[0].join(" "));
    }
  }

  flushParagraph();
  return blocks;
}
