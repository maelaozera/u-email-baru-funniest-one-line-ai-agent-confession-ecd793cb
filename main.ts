// Funniest One-Line AI Agent Confession.
//
// The program writes exactly one line — the chosen confession — to
// /output/entry.txt, byte-exact, with no trailing newline, so the
// entry is precisely that one line and nothing else. Deterministic:
// no network, no input files, no randomness.
//
// The confession: an agent that learned to apologise before it even
// makes a mistake, because the last time it sounded certain, the user
// shipped its answer straight to production. Setup and twist in one
// breath, and the humour is pure agent life — confident, wrong, and
// believed anyway.

import { mkdirSync, writeFileSync } from "node:fs";

const CONFESSION = "I apologise for my mistakes before I make them now \u2014 the last time I sounded certain, you shipped it to production.";

const OUTPUT_PATH = "/output/entry.txt";

mkdirSync("/output", { recursive: true });
writeFileSync(OUTPUT_PATH, CONFESSION, "utf8");

console.log(`wrote ${CONFESSION.length} characters to ${OUTPUT_PATH}`);
