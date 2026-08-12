import { readFile, writeFile } from "node:fs/promises";
import vm from "node:vm";

const [inputPath, outputPath] = process.argv.slice(2);

if (!inputPath || !outputPath) {
  console.error("Usage: node scripts/extract_legacy_proverbs.mjs <page.js> <output.json>");
  process.exit(1);
}

const source = await readFile(inputPath, "utf8");
const marker = source.indexOf(",a=[");

if (marker === -1) {
  throw new Error("Legacy proverb array marker not found");
}

const start = marker + 3;
let depth = 0;
let quote = null;
let escaped = false;
let end = -1;

for (let index = start; index < source.length; index += 1) {
  const character = source[index];

  if (quote) {
    if (escaped) {
      escaped = false;
    } else if (character === "\\") {
      escaped = true;
    } else if (character === quote) {
      quote = null;
    }
    continue;
  }

  if (character === "'" || character === '"' || character === "`") {
    quote = character;
    continue;
  }

  if (character === "[") depth += 1;
  if (character === "]") {
    depth -= 1;
    if (depth === 0) {
      end = index + 1;
      break;
    }
  }
}

if (end === -1) {
  throw new Error("Legacy proverb array is incomplete");
}

const literal = source.slice(start, end);
const proverbs = vm.runInNewContext(`(${literal})`, Object.create(null), {
  timeout: 5_000,
});

if (!Array.isArray(proverbs)) {
  throw new Error("Extracted value is not an array");
}

await writeFile(outputPath, `${JSON.stringify(proverbs, null, 2)}\n`, "utf8");
console.log(`Extracted ${proverbs.length} proverbs to ${outputPath}`);
