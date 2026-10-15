// An effect written as `useEffect(() => expr)` hands expr's value to React as its cleanup. Chrome 154 made
// scrollIntoView() return a Promise, so leaving the guide crashed the next page ("i is not a function").
// Effects must use a block body and return nothing or a function.
import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

function sources(dir: string): string[] {
  return readdirSync(dir, { withFileTypes: true }).flatMap((e) => {
    const p = join(dir, e.name);
    if (e.isDirectory()) return sources(p);
    return /\.tsx?$/.test(e.name) && !e.name.endsWith(".test.ts") ? [p] : [];
  });
}

describe("effects", () => {
  it("never use an expression body (its value would become the cleanup)", () => {
    const bad = ["app", "components", "lib"].flatMap(sources).flatMap((f) =>
      readFileSync(f, "utf8")
        .split("\n")
        .map((line, i) => (/use(Layout|Insertion)?Effect\(\s*(async\s*)?\(\)\s*=>\s*[^{\s]/.test(line) ? `${f}:${i + 1}` : null))
        .filter((x): x is string => x !== null),
    );
    expect(bad).toEqual([]);
  });
});
