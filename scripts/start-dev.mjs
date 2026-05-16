/**
 * Reliable local dev launcher: clears stale Turbopack lock and prints the URL to open.
 * Usage: npm run dev  |  npm run dev -- --webpack  (if Turbopack fails on your machine)
 */
import { spawn } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
process.chdir(root);

const lockPath = path.join(root, ".next", "dev", "lock");
try {
  fs.unlinkSync(lockPath);
} catch {
  /* ignore missing lock */
}

const port = process.env.PORT || "3000";
const useWebpack = process.argv.includes("--webpack");

const nextBin = path.join(root, "node_modules", ".bin", "next");
const args = ["dev", "--hostname", "0.0.0.0", "--port", port];
if (useWebpack) args.push("--webpack");

const url = `http://127.0.0.1:${port}/`;

console.log(`
Porten Doors — Next.js development server
------------------------------------------
Wait until you see:  ✓ Ready

Then open this exact URL:
  ${url}

If the page does not load: use Chrome or Safari (not an embedded preview),
keep this terminal window open, and run  npm run dev:webpack  if dev crashes.
------------------------------------------
`);

const child = spawn(nextBin, args, {
  cwd: root,
  stdio: "inherit",
  shell: process.platform === "win32",
  env: { ...process.env },
});

child.on("exit", (code) => process.exit(code ?? 0));
