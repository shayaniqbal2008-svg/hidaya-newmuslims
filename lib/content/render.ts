// Turns a compiled lesson into what one convert sees: their masjid's school, their names, their
// gender's guidance, teen lines. Runs on the server, so the browser never receives the other
// variants, the other gender's lines or the AI guide context.
// Rules: Curriculum Spec §4.3 (variants), §4.5 (placeholders), §5 (teen lines), T3 §3.1.
import type { CheckItem, Lesson, Madhab, PhraseData, Screen } from "./types";

export type Gender = "male" | "female";

export type RenderContext = {
  masjidName: string;
  madhab: Madhab | null;
  jumuahTime: string | null;
  mentorName: string | null;
  firstName: string;
  isMinor: boolean;
  /** null: unknown or the convert preferred not to say; both versions are shown, labelled. */
  gender: Gender | null;
};

type RenderedOf<T> = T extends { type: "learn" } ? { n: number; type: "learn"; text: string; pic?: string; bubbles?: string[] } : T;
/** A screen after rendering: learn screens are plain text (plus picture and bubbles), the rest as compiled. */
export type RenderedScreen = RenderedOf<Screen>;

export type RenderedLesson = Omit<Lesson, "screens" | "aiContext" | "check" | "prayerPhrase" | "madhabNote"> & {
  screens: RenderedScreen[];
  check: CheckItem[];
  prayerPhrase: PhraseData | null;
  /** The closing line, shown on the celebration screen rather than as its own screen. */
  closing: string | null;
  madhab: Madhab | null;
  gender: Gender | null;
};

const MADHAB_NAMES: Record<Madhab, string> = {
  hanafi: "Hanafi",
  maliki: "Maliki",
  shafii: "Shafi'i",
  hanbali: "Hanbali",
};

export function fillPlaceholders(text: string, ctx: RenderContext): string {
  return text
    .replace(/\{\{\s*masjid\.name\s*\}\}/g, ctx.masjidName)
    .replace(/\{\{\s*masjid\.madhab\s*\}\}/g, ctx.madhab ? MADHAB_NAMES[ctx.madhab] : "your masjid's")
    .replace(/\{\{\s*masjid\.jumuah_time\s*\}\}/g, ctx.jumuahTime ?? "the Friday prayer time your masjid posts")
    .replace(/\{\{\s*mentor\.name\s*\}\}/g, ctx.mentorName ?? "your mentor or imam")
    .replace(/\{\{\s*convert\.first_name\s*\}\}/g, ctx.firstName)
    .replace(/\{\{[^}]*\}\}/g, ""); // an unknown placeholder never shows raw braces
}

const TAG = /\{(men|women|teen)\}([\s\S]*?)\{\/\1\}/g;

/**
 * Inline audience tags. A convert sees only their own gender's text; with no gender on file, both
 * show with a short label. Teen text shows only to converts under 18.
 */
export function resolveTags(text: string, ctx: Pick<RenderContext, "gender" | "isMinor">): string {
  return text
    .replace(TAG, (_, who: string, inner: string) => {
      if (who === "teen") return ctx.isMinor ? inner : "";
      if (ctx.gender === null) return `${who === "men" ? "For men" : "For women"}: ${inner.trim()} `;
      return (who === "men") === (ctx.gender === "male") ? inner : "";
    })
    .replace(/[ \t]{2,}/g, " ")
    .replace(/ +([.,;:!?])/g, "$1")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

/** Last-line defense: scholar markers are stripped at compile time, but never let one through. */
export function stripScholarTags(text: string): string {
  return text.replace(/\s*`?\[SCHOLAR:[^\]]*\]`?/g, "");
}

function deepMap<T>(v: T, f: (s: string) => string): T {
  if (typeof v === "string") return f(v) as T;
  if (Array.isArray(v)) {
    // A list item that was only the other gender's text disappears, rather than leaving an empty row.
    return v
      .map((x) => deepMap(x, f))
      .filter((x) => !(typeof x === "string" && x === "") && !(x && typeof x === "object" && "text" in x && (x as { text: unknown }).text === "")) as T;
  }
  if (v && typeof v === "object")
    return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, deepMap(x, f)])) as T;
  return v;
}

/** Apply a `variants: { hanafi: {...} }` override (prayer phrases may carry one too) and drop the table. */
function withVariant<T extends object>(v: T, madhab: Madhab | null): T {
  const { variants, ...base } = v as T & { variants?: Record<string, Partial<T>> };
  return (madhab && variants?.[madhab] ? { ...base, ...variants[madhab] } : base) as T;
}

export function renderLesson(lesson: Lesson, ctx: RenderContext): RenderedLesson {
  const fix = (s: string) => resolveTags(stripScholarTags(fillPlaceholders(s, ctx)), ctx);
  let closing: string | null = null;
  const screens: RenderedScreen[] = [];
  for (const raw of lesson.screens) {
    // School overrides, then drop the override table so other schools' text never leaves the server.
    const { variants, ...base } = raw as Screen & { variants?: Record<string, Record<string, unknown>> };
    const s = (ctx.madhab && variants?.[ctx.madhab] ? { ...base, ...variants[ctx.madhab] } : base) as Screen;
    if (s.audience && ctx.gender && (s.audience === "men") !== (ctx.gender === "male")) continue;
    if (s.school && s.school !== ctx.madhab) continue;
    if (s.type === "closing") {
      closing = fix(s.text);
      continue;
    }
    if (s.type !== "learn") {
      screens.push(deepMap(s, fix) as RenderedScreen);
      continue;
    }
    let text = s.text ?? "";
    const bubbles = (ctx.madhab && s.variant?.[`${ctx.madhab}_bubbles`]) || s.bubbles;
    if (s.variant) {
      text = (ctx.madhab && s.variant[ctx.madhab]) || s.variant.default;
      if (ctx.isMinor && s.variant.teen) text += `\n\n${s.variant.teen}`;
    }
    screens.push({
      n: s.n,
      type: "learn",
      text: fix(text),
      ...(s.pic ? { pic: s.pic } : {}),
      ...(bubbles ? { bubbles: deepMap(bubbles, fix) } : {}),
    });
  }
  // Drop the AI guide context and the other-schools note: they're for the guide only (Checkpoint 4, U6).
  const { aiContext: _ai, madhabNote: _note, ...rest } = lesson;
  return {
    ...rest,
    title: fix(lesson.title),
    hook: fix(lesson.hook),
    screens,
    closing,
    check: deepMap(lesson.check, fix),
    prayerPhrase: lesson.prayerPhrase ? deepMap(withVariant(lesson.prayerPhrase, ctx.madhab), fix) : null,
    sourcesMd: fix(lesson.sourcesMd),
    madhab: ctx.madhab,
    gender: ctx.gender,
  };
}
