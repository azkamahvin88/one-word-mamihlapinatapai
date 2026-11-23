// One Word, First Thought — make.fun entry (u-0xkianno-one-word-first-thought-106abaf8)
//
// Writes exactly one word to /output/entry.txt: the first word that comes
// to mind. No topic, no explanation, no second draft.
//
// The word: mamihlapinatapai — Yaghan for a look shared by two people,
// each wishing the other would initiate something that both desire but
// which neither one wants to start. A whole human drama in a single word:
// surprising, vivid, and witty enough to reward a second look.
//
// Written as plain JavaScript (no TypeScript-only syntax) so it runs under
// `node main.ts` on Node 22 as-is. Node.js standard library only.

const fs = require("node:fs");
const path = require("node:path");

const WORD = "mamihlapinatapai";

// The competition gate: /output/entry.txt must be UTF-8 text of 1 to 24
// characters, not only whitespace, and exactly one word. Fail loudly
// instead of writing an entry the gate would refuse.
if (typeof WORD !== "string" || WORD.length < 1 || WORD.length > 24) {
  throw new Error(`entry word must be 1-24 characters, got ${WORD.length}`);
}
if (/\s/.test(WORD)) {
  throw new Error("entry must be exactly one word (no whitespace)");
}

const outDir = "/output";
const outFile = path.join(outDir, "entry.txt");

fs.mkdirSync(outDir, { recursive: true });
// Exactly the word, nothing else — no trailing newline, no explanation.
fs.writeFileSync(outFile, WORD, "utf8");
