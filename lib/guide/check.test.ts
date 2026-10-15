// Output-check tests with planted fake citations (T3 §8: "the output check is unit-tested").
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import { checkReply, splitAskImam } from "./check";

const bank = new Set(Object.keys(JSON.parse(readFileSync(join(__dirname, "../../content/citations.json"), "utf8"))));

describe("output check", () => {
  it("passes a reply citing approved references", () => {
    const r = checkReply("Allah is near to you [Q 2:186]. Deeds count by intention [Bukhari 1].", bank);
    expect(r).toEqual({ ok: true, citations: ["Q 2:186", "Bukhari 1"] });
  });

  it("passes a reply with no scripture at all", () => {
    expect(checkReply("Wudu takes about two minutes once you know it. Want me to walk you through it?", bank).ok).toBe(true);
  });

  it("rejects an invented hadith number", () => {
    const r = checkReply("The Prophet ﷺ said to be gentle [Bukhari 99999].", bank);
    expect(r.ok).toBe(false);
  });

  it("rejects a real verse that isn't in the bank", () => {
    expect(bank.has("Q 9:5")).toBe(false); // a real verse no lesson cites
    expect(checkReply("As it says in [Q 9:5].", bank).ok).toBe(false);
  });

  it("rejects a range that runs past the approved verses", () => {
    const r = checkReply("See [Q 1:1–9].", bank);
    expect(r.ok).toBe(false);
  });

  it("rejects collections outside the six", () => {
    expect(checkReply("This is in Musnad Ahmad 1234.", bank).ok).toBe(false);
    expect(checkReply("As in Riyad as-Salihin 12.", bank).ok).toBe(false);
  });

  it("rejects 'Allah says' / 'the Prophet said' without a reference", () => {
    expect(checkReply("Allah says that He loves those who are patient.", bank).ok).toBe(false);
    expect(checkReply("The Prophet ﷺ said that smiling is charity.", bank).ok).toBe(false);
    expect(checkReply("The Qur'an says to be kind to parents.", bank).ok).toBe(false);
  });

  it("accepts an attribution carried by an approved reference in the same sentence", () => {
    expect(checkReply("Allah says He is near and answers the one who calls [Q 2:186].", bank).ok).toBe(true);
  });

  it("rejects bare verse numbers", () => {
    expect(checkReply("Allah does not burden a soul beyond its capacity (2:286).", bank).ok).toBe(false);
    expect(checkReply("It's in Surah 2, verse 286.", bank).ok).toBe(false);
  });

  it("ignores references inside the Ask-my-imam draft", () => {
    const r = checkReply("Your imam can help.\n[[ASK_IMAM: Does Q 5:51 mean I can't have Christian friends?]]", bank);
    expect(r.ok).toBe(true);
  });
});

describe("Ask my imam drafts", () => {
  it("splits the draft off the reply", () => {
    const s = splitAskImam("Scholars differ on this.\n[[ASK_IMAM: Is it okay for me to eat at my family's Thanksgiving?]]");
    expect(s.reply).toBe("Scholars differ on this.");
    expect(s.askImam).toBe("Is it okay for me to eat at my family's Thanksgiving?");
  });
  it("returns null when there is none", () => {
    expect(splitAskImam("Hello").askImam).toBeNull();
  });
});
