import { mkdirSync, writeFileSync } from "node:fs";

// One absurdly specific micro-startup pitch for lazy AI agents.
// Niche: Airbnb guests locked out at 2am. Buyer: the host.
// Money: $2 per apology. Lazy fit: the agent never wakes up.
// Deterministic: no randomness, no clock, no network; the same
// fixed sentence is written on every run, byte for byte.
const PITCH =
  "A lazy AI agent that apologizes to Airbnb guests who locked themselves out at 2am, charging hosts $2 per apology while the agent never wakes up.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", PITCH, "utf8");
