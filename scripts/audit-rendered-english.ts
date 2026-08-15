import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join, relative, resolve } from "node:path";
import ts from "typescript";

const outputRoot = resolve(".next/server/app");
const cjk = /[\p{Script=Han}]/gu;
const stockAiPhrases = [
  "as an ai",
  "delve into",
  "ever-evolving landscape",
  "it is important to note",
  "in conclusion",
  "in today's fast-paced",
  "unlock the potential",
  "game-changer",
  "navigate the complexities",
  "a testament to",
  "whether you're",
  "furthermore",
  "moreover",
] as const;

function htmlFiles(directory: string): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return htmlFiles(path);
    return entry.name.endsWith(".html") ? [path] : [];
  });
}

function sourceFiles(directory: string): string[] {
  if (!existsSync(directory)) return [];
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return sourceFiles(path);
    return /\.(?:ts|tsx)$/.test(entry.name) ? [path] : [];
  });
}

function cjkStringLiterals(file: string): string[] {
  const sourceText = readFileSync(file, "utf8");
  const sourceFile = ts.createSourceFile(
    file,
    sourceText,
    ts.ScriptTarget.Latest,
    true,
    file.endsWith(".tsx") ? ts.ScriptKind.TSX : ts.ScriptKind.TS,
  );
  const findings: string[] = [];
  function visit(node: ts.Node) {
    if (
      (ts.isStringLiteralLike(node) || ts.isJsxText(node)) &&
      /[\p{Script=Han}]/u.test(node.text)
    ) {
      const line = sourceFile.getLineAndCharacterOfPosition(node.getStart()).line + 1;
      findings.push(`${relative(resolve("."), file)}:${line}`);
    }
    ts.forEachChild(node, visit);
  }
  visit(sourceFile);
  return findings;
}

if (!existsSync(outputRoot)) {
  throw new Error("Rendered-language audit requires a completed Next.js build.");
}

const files = htmlFiles(outputRoot);
const apiFiles = sourceFiles(resolve("src/app/api"));
const clientFiles = sourceFiles(resolve("src")).filter((file) =>
  /^\s*["']use client["'];/m.test(readFileSync(file, "utf8")),
);
const dynamicLanguageViolations = [...apiFiles, ...clientFiles].flatMap(
  cjkStringLiterals,
);

if (dynamicLanguageViolations.length > 0) {
  console.error(
    "\nEnglish-only audit failed. API or client code contains Chinese runtime strings:\n",
  );
  for (const violation of dynamicLanguageViolations.slice(0, 100)) {
    console.error(`- ${violation}`);
  }
  process.exit(1);
}

const languageViolations = files.flatMap((file) => {
  const html = readFileSync(file, "utf8");
  const matches = [...html.matchAll(cjk)];
  if (matches.length === 0) return [];
  const first = matches[0]?.index ?? 0;
  const snippet = html
    .slice(Math.max(0, first - 80), first + 120)
    .replace(/\s+/g, " ");
  return [{ file: relative(outputRoot, file), count: matches.length, snippet }];
});

if (languageViolations.length > 0) {
  console.error("\nEnglish-only audit failed. Rendered pages contain Chinese text:\n");
  for (const violation of languageViolations.slice(0, 50)) {
    console.error(`- ${violation.file} (${violation.count} characters): ${violation.snippet}`);
  }
  process.exit(1);
}

const aiPhraseViolations = files.flatMap((file) => {
  const html = readFileSync(file, "utf8").toLowerCase();
  return stockAiPhrases
    .filter((phrase) => html.includes(phrase))
    .map((phrase) => ({ file: relative(outputRoot, file), phrase }));
});

if (aiPhraseViolations.length > 0) {
  console.error("\nAnti-AI audit failed. Rendered pages contain stock AI phrasing:\n");
  for (const violation of aiPhraseViolations.slice(0, 50)) {
    console.error(`- ${violation.file}: ${violation.phrase}`);
  }
  process.exit(1);
}

console.log(
  `English-only and anti-AI audits passed (${files.length} rendered HTML files).`,
);
