import { describe, expect, it } from "vitest";
import { makeGate, startPlay } from "./audio-play";

const abortErr = () => Object.assign(new Error("The play() request was interrupted by a call to pause()"), { name: "AbortError" });

describe("startPlay", () => {
  it("is true when play starts", async () => {
    expect(await startPlay(async () => {})).toBe(true);
  });
  it("is true when play was aborted by a newer play (not a load failure)", async () => {
    expect(await startPlay(() => Promise.reject(abortErr()))).toBe(true);
  });
  it("is false when the clip can't load or is blocked", async () => {
    const notSupported = Object.assign(new Error("no source"), { name: "NotSupportedError" });
    expect(await startPlay(() => Promise.reject(notSupported))).toBe(false);
    expect(await startPlay(() => Promise.reject(new Error("boom")))).toBe(false);
  });
  it("is false when play throws synchronously", async () => {
    expect(
      await startPlay(() => {
        throw new Error("sync");
      }),
    ).toBe(false);
  });
});

describe("makeGate", () => {
  it("only the latest request is current", () => {
    const gate = makeGate();
    const a = gate.begin();
    expect(a()).toBe(true);
    const b = gate.begin();
    expect(a()).toBe(false);
    expect(b()).toBe(true);
  });
  it("a superseded failure is ignored, the newer result shown", async () => {
    const gate = makeGate();
    const shown: boolean[] = [];
    let failA!: (e: unknown) => void;
    const reqA = gate.begin();
    const pA = startPlay(() => new Promise<void>((_, rej) => (failA = rej))).then((ok) => reqA() && shown.push(ok));
    const reqB = gate.begin(); // switched letters / tapped again
    const pB = startPlay(async () => {}).then((ok) => reqB() && shown.push(ok));
    failA(new Error("letter A failed to load"));
    await Promise.all([pA, pB]);
    expect(shown).toEqual([true]);
  });
  it("invalidate() drops every pending request", () => {
    const gate = makeGate();
    const a = gate.begin();
    gate.invalidate();
    expect(a()).toBe(false);
  });
});
