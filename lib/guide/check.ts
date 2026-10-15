// The output check (Spec §6.2 rule 10, T3 §3.4 step 4): every reply is checked before the convert sees it.
// A reply fails if it cites scripture that isn't in the Citation Bank, cites a collection outside the
// six, or puts words in the mouth of Allah or the Prophet ﷺ without an approved reference nearby.
import { findRefs, refKeys } from "../content/citations";

export type CheckResult = { ok: true; citations: string[] } | { ok: false; reasons: string[] };

const OTHER_COLLECTIONS =
  /\b(?:musnad\s+)?ahmad\s*\d|\bmuwatta|\bbayhaqi|\btabarani|\bhakim\s*\d|\bdarimi|\bibn\s+hibban|\bdaraqutni|\briyad(?:h)?\s+as-salihin|\badab\s+al-mufrad|\bbulugh/i;
const ATTRIBUTION =
  /\b(?:allah|god)\s+(?:says|said|tells us|told|declares|revealed)\b|\bthe\s+(?:prophet|messenger)(?:\s*ﷺ|\s*\(pbuh\)|\s*\(saw\)|\s+muhammad)?\s+(?:says|said|told|taught|stated|declared)\b|\bthe\s+qur'?an\s+(?:says|states|tells)\b|\b(?:a|the|one|in a)\s+hadith\s+(?:says|states|tells)\b/gi;

export function checkReply(text: string, approved: Set<string>): CheckResult {
  const reasons: string[] = [];
  const visible = text.replace(/\[\[ASK_IMAM:[\s\S]*?\]\]/g, "");
  const refs = findRefs(visible);
  const cited: string[] = [];
  for (const r of refs) {
    for (const k of refKeys(r)) {
      if (!approved.has(k)) reasons.push(`cites ${k}, which is not in the Citation Bank`);
      else cited.push(k);
    }
  }
  if (OTHER_COLLECTIONS.test(visible)) reasons.push("cites a hadith collection outside the six");
  // Bare verse numbers without the Q prefix, e.g. "(2:286)" or "Surah 2, verse 286".
  if (/\(\s*\d{1,3}\s*:\s*\d{1,3}\s*\)|\bsurah\s+\d{1,3},?\s+(?:verse|ayah)\s+\d{1,3}/i.test(visible.replace(/\[Q[^\]]*\]/g, "")))
    reasons.push("uses a verse number outside the [Q s:v] format");

  // Attribution needs an approved reference in the same sentence (or right after it).
  for (const m of visible.matchAll(ATTRIBUTION)) {
    const start = m.index!;
    const end = visible.slice(start).search(/[.!?](\s|$)/);
    const window = visible.slice(start, start + (end === -1 ? 400 : end + 120));
    const nearby = findRefs(window).flatMap(refKeys);
    if (!nearby.some((k) => approved.has(k))) reasons.push(`"${m[0]}" without an approved reference`);
  }
  return reasons.length ? { ok: false, reasons: [...new Set(reasons)] } : { ok: true, citations: [...new Set(cited)] };
}

/** Pulls the optional "Ask my imam" draft off the end of a reply. */
export function splitAskImam(text: string): { reply: string; askImam: string | null } {
  const m = text.match(/\[\[ASK_IMAM:\s*([\s\S]*?)\]\]\s*$/);
  if (!m) return { reply: text.replace(/\[\[ASK_IMAM:[\s\S]*?\]\]/g, "").trim(), askImam: null };
  return { reply: text.slice(0, m.index).trim(), askImam: m[1].trim().slice(0, 1000) || null };
}

export const FALLBACK_REPLY =
  "That's a good question, and I want to make sure you get a reliable answer rather than my best guess. Your imam is the right person for this one. Want me to help you send it?";
