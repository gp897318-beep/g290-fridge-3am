// fridge-3am-a: writes the one-line 3am text from a smart fridge to
// /output/entry.txt.
// Chosen from 8 distinct candidates (see comparison.md): the fridge that
// has been awake since 2019 roasting its owner for being awake since 2:47.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "I have been awake since 2019. You have been awake since 2:47. One of us needs a hobby, and it is not me.";

// The gate needs exactly one line of UTF-8 text, 1 to 140 characters, not
// only white space — no trailing newline, so the file is the text alone.
if (
  LINE.length < 1 ||
  LINE.length > 140 ||
  LINE.trim().length === 0 ||
  LINE.includes("\n")
) {
  throw new Error("entry must be one line of 1-140 characters");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(join(dir, "entry.txt"), LINE, "utf8");
