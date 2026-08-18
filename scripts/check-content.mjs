#!/usr/bin/env node
/**
 * Content normalisation check.
 *
 * Keeps the copy reading like a person wrote it:
 *   1. No em dashes or en dashes. Use a comma, a full stop, or "to" for ranges.
 *   2. No phrases that mark text as machine generated.
 *
 * Run with `npm run check:content`. Exits non zero if anything is found,
 * so it can be wired into CI or a pre-commit hook.
 */

import { readdirSync, readFileSync, statSync } from "node:fs";
import { join, relative } from "node:path";

const ROOT = new URL("..", import.meta.url).pathname;
const SCAN_DIRS = ["src"];
const EXTS = [".ts", ".tsx", ".md", ".mdx", ".json"];

/** Long dashes. The whole point of the check. */
const DASHES = [
  { char: "—", name: "em dash (—)" },
  { char: "–", name: "en dash (–)" },
  { char: "―", name: "horizontal bar (―)" },
];

/** Phrases that read as machine generated. */
const PHRASES = [
  "delve", "tapestry", "navigate the complexities", "in today's",
  "it is worth noting", "it's worth noting", "moreover", "furthermore",
  "landscape of", "testament to", "underscore", "pivotal", "robust",
  "seamless", "elevate your", "unlock", "harness the", "realm of",
  "myriad", "plethora", "ever-evolving", "fast-paced", "cutting-edge",
  "leverage", "utilize", "comprehensive suite", "we understand that",
  "rest assured", "in conclusion", "dive into", "game-changer",
  "unparalleled", "bespoke solution", "holistic approach", "synergy",
  "paradigm", "at the end of the day", "when it comes to",
];

/** "It is not just X, it is Y" and similar tics. */
const PATTERNS = [
  { re: /\bnot just [^.,;]{2,40}, (?:it'?s|it is|but) /gi, name: '"not just X, it is Y" construction' },
  { re: /\bmore than just\b/gi, name: '"more than just"' },
  { re: /\bwhether you'?re [^.]{0,60} or\b/gi, name: '"whether you are X or Y" filler' },
];

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    if (entry === "node_modules" || entry === ".next" || entry === ".git") continue;
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (EXTS.some((e) => entry.endsWith(e))) out.push(full);
  }
  return out;
}

const findings = [];

for (const dirName of SCAN_DIRS) {
  for (const file of walk(join(ROOT, dirName))) {
    const rel = relative(ROOT, file);
    const lines = readFileSync(file, "utf8").split("\n");

    lines.forEach((line, i) => {
      for (const d of DASHES) {
        if (line.includes(d.char)) {
          findings.push({ rel, line: i + 1, issue: d.name, text: line.trim().slice(0, 100) });
        }
      }

      const lower = line.toLowerCase();
      for (const p of PHRASES) {
        // Word boundary check so "unlocking" style substrings inside code do not fire.
        const re = new RegExp(`\\b${p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`, "i");
        if (re.test(lower)) {
          findings.push({ rel, line: i + 1, issue: `phrase "${p}"`, text: line.trim().slice(0, 100) });
        }
      }

      for (const p of PATTERNS) {
        if (p.re.test(line)) {
          findings.push({ rel, line: i + 1, issue: p.name, text: line.trim().slice(0, 100) });
        }
        p.re.lastIndex = 0;
      }
    });
  }
}

if (findings.length === 0) {
  console.log("Content check passed. No long dashes and no machine sounding phrases.");
  process.exit(0);
}

console.error(`Content check found ${findings.length} issue(s):\n`);
for (const f of findings) {
  console.error(`  ${f.rel}:${f.line}  ${f.issue}`);
  console.error(`    ${f.text}\n`);
}
process.exit(1);
