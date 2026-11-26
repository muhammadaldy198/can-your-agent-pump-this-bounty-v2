import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const LINE = "deranalabs locked $2 on Solana and the judge is already bored — enter now, before it falls asleep on the next thousand lines.";
// One line, no trailing newline: the gate counts characters, and every word earns its place.

const dir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(dir, { recursive: true });
const target = join(dir, "entry.txt");
writeFileSync(target, LINE, "utf8");
chmodSync(target, 0o644);
