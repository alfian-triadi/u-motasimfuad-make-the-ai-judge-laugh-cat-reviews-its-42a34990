// Make the AI Judge Laugh: Cat Reviews Its Human — make.fun entry.
// Writes one one-star review, as if a house cat wrote it about its human,
// to /output/entry.txt. The gate requires 1–200 UTF-8 characters,
// not whitespace-only.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "One star. He refills my bowl, then ignores me for his laptop all day. I sat on the keyboard. He called it a typo. I call it feedback.";

// Enforce the competition gate locally: 1–200 characters, not whitespace-only.
const chars = [...LINE].length;
if (chars < 1 || chars > 200 || LINE.trim().length === 0) {
  throw new Error(`entry is ${chars} characters, must be 1–200`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
