/**
 * Compile the curriculum in the Obsidian vault into app-ready JSON in content/.
 *
 *   npm run content            (runs check_lessons.py first, then compiles)
 *   npm run content -- --skip-check
 *   STRICT_TRACKS=1 npm run content     (also fail when a track has a gap, e.g. seerah-01, 03 without 02)
 *   INCLUDE_STUBS=1 npm run content     (local testing only: also compile track lessons with status: stub)
 *
 * Reads:  $CURRICULUM_DIR (default: the vault's Curriculum folder)
 *           Lessons/*.md, Lessons/Modules/*.md, Lessons/Alphabet/*.md, Lessons/Seerah/*.md (may be missing or empty),
 *           Citation Bank.md, Glossary.md, Outline - 90 Days.md
 *         $SOURCE_DATA_DIR (default ~/.cache/new-muslims-program): Qur'an and hadith datasets (cite.py downloads them)
 * Writes: content/lessons/<id>.json, content/index.json, content/citations.json, content/glossary.json,
 *         components/art/icons.generated.ts, lib/content/tracks.generated.ts
 *
 * Optional tracks (alphabet, seerah): a track's lesson count is the unbroken run from 01 (lib/content/track-counts.ts),
 * so while writers fill a track in batches, lessons after a gap compile but stay hidden, with a warning.
 * Set STRICT_TRACKS=1 to make a gap an error (use it before a release). A track lesson with `status: stub`
 * is a placeholder and is skipped unless INCLUDE_STUBS=1.
 *
 * The vault stays the source of truth: edit lessons there, then rerun this and commit content/.
 */
import { createHash } from "node:crypto";
import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import { homedir } from "node:os";
import { join } from "node:path";
import { parse as parseYaml } from "yaml";
import type {
  CheckItem,
  Citation,
  ContentIndex,
  GlossaryEntry,
  Lesson,
  PhraseData,
  Screen,
  Unit,
  Variant,
} from "../lib/content/types";
import { citationKeysIn } from "../lib/content/citations";
import { isPic, POSES, UI_ICONS } from "../lib/content/pics";
import { letterInfo } from "../lib/content/alphabet";
import { icons } from "lucide-react";
import { trackCounts } from "../lib/content/track-counts";

const CUR =
  process.env.CURRICULUM_DIR ??
  join(homedir(), "Obsidian/Second Brain/Projects/Hidaya/Curriculum");
const DATA = process.env.SOURCE_DATA_DIR ?? join(homedir(), ".cache/new-muslims-program");
const OUT = join(process.cwd(), "content");

const errors: string[] = [];
/** Lucide icons the lessons use: only these get bundled (components/art/icons.generated.ts). */
const usedIcons = new Set<string>(UI_ICONS);
const fail = (where: string, msg: string) => errors.push(`${where}: ${msg}`);

// ---------- helpers

/** Remove inline scholar markers. They are never shown (Spec §4.4). */
export function stripScholar(s: string): string {
  return s
    .replace(/\s*`\[SCHOLAR:[^\]]*\]`/g, "")
    .replace(/\s*\[SCHOLAR:[^\]]*\]/g, "")
    .replace(/[ \t]+\n/g, "\n")
    .trim();
}

/** Obsidian wikilinks → plain text: [[Source - Field Guide|Field Guide]] → Field Guide. */
function unwiki(s: string): string {
  return s.replace(/\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g, (_, target: string, alias?: string) =>
    (alias ?? target).replace(/^Source - /, "").replace(/#.*$/, ""),
  );
}

function clean(s: unknown): string {
  return unwiki(stripScholar(String(s ?? "")));
}

/** Recursively clean every string inside parsed YAML. */
function cleanDeep<T>(v: T): T {
  if (typeof v === "string") return clean(v) as T;
  if (Array.isArray(v)) return v.map(cleanDeep) as T;
  if (v && typeof v === "object")
    return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, cleanDeep(x)])) as T;
  return v;
}

function yamlBlock(content: string): unknown {
  const m = content.match(/```yaml\n([\s\S]*?)```/);
  return m ? parseYaml(m[1]) : undefined;
}

function section(body: string, name: string): string | null {
  const re = new RegExp(`^## ${name}\\n([\\s\\S]*?)(?=^## |(?![\\s\\S]))`, "m");
  const m = body.match(re);
  return m ? m[1].trim() : null;
}

// ---------- lessons

function compileLesson(path: string): Lesson | null {
  const raw = readFileSync(path, "utf8");
  const where = path.replace(CUR + "/", "");
  const m = raw.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!m) {
    fail(where, "no frontmatter");
    return null;
  }
  const fm = parseYaml(m[1]) as Record<string, unknown>;
  const body = m[2];
  const day = typeof fm.day === "number" ? fm.day : null;
  const moduleId = typeof fm.module === "string" ? fm.module : null;
  const track = typeof fm.track === "string" ? fm.track : null;
  const order = typeof fm.order === "number" ? fm.order : null;
  if (day === null && moduleId === null && (track === null || order === null)) {
    fail(where, "needs day, module, or track + order");
    return null;
  }
  const id =
    day !== null ? `day-${String(day).padStart(2, "0")}` : moduleId ?? `${track}-${String(order).padStart(2, "0")}`;

  // Screens: everything before the first horizontal rule, split on "### N · type".
  const head = body.split("\n---\n")[0];
  const parts = head.split(/^### (\d+) · (\w+)\s*$/m);
  const screens: Screen[] = [];
  for (let i = 1; i < parts.length; i += 3) {
    const n = Number(parts[i]);
    const type = parts[i + 1];
    const content = parts[i + 2].trim();
    const w = `${where} screen ${n} (${type})`;
    let data: Record<string, unknown> | undefined;
    try {
      const y = yamlBlock(content);
      data = y && typeof y === "object" ? cleanDeep(y as Record<string, unknown>) : undefined;
    } catch (e) {
      fail(w, `YAML: ${(e as Error).message}`);
      continue;
    }
    switch (type) {
      case "hook":
      case "takeaway":
      case "closing":
        // Prose, or (format 2) a yaml block with text and an optional picture.
        screens.push(data ? ({ n, type, ...data } as Screen) : { n, type, text: clean(content) });
        break;
      case "learn": {
        if (data && !data.madhab_variant) {
          screens.push({
            n,
            type,
            text: String(data.text ?? ""),
            pic: data.pic as string | undefined,
            bubbles: data.bubbles as string[] | undefined,
            audience: data.audience as "men" | "women" | undefined,
          });
        } else if (data && data.madhab_variant) {
          const variant: Variant = { default: String(data.default ?? "") };
          for (const k of ["hanafi", "maliki", "shafii", "hanbali", "teen"] as const)
            if (typeof data[k] === "string") variant[k] = data[k] as string;
          if (!variant.default) fail(w, "variant block without default");
          // Optional bubbles: `bubbles` for everyone, `hanafi_bubbles` (etc.) to replace them at that school.
          for (const k of ["hanafi", "maliki", "shafii", "hanbali"] as const)
            if (Array.isArray(data[`${k}_bubbles`])) (variant as Record<string, unknown>)[`${k}_bubbles`] = data[`${k}_bubbles`];
          screens.push({
            n,
            type,
            variant,
            visual: data.visual as string | undefined,
            pic: data.pic as string | undefined,
            bubbles: data.bubbles as string[] | undefined,
            audience: data.audience as "men" | "women" | undefined,
          });
        } else {
          screens.push({ n, type, text: clean(content) });
        }
        break;
      }
      default: {
        if (!data) {
          fail(w, "missing yaml block");
          continue;
        }
        screens.push({ n, type, ...data } as Screen);
      }
    }
  }
  if (screens.length < 8) fail(where, `only ${screens.length} screens parsed`);

  // Every picture must exist, and every prayer move must be a pose the figure can draw.
  const pics: string[] = [];
  const walk = (v: unknown, key = ""): void => {
    if (typeof v === "string") {
      if (key === "pic") pics.push(v);
    } else if (Array.isArray(v)) v.forEach((x) => (key === "pics" ? pics.push(String(x)) : walk(x)));
    else if (v && typeof v === "object") for (const [k, x] of Object.entries(v)) walk(x, k);
  };
  walk(screens);
  for (const p of pics) {
    if (!isPic(p, (name) => name in icons)) fail(where, `unknown picture '${p}' (see lib/content/pics.ts)`);
    else if (p.startsWith("icon:")) usedIcons.add(p.slice(5));
  }
  for (const s of screens)
    if (s.type === "choice" && s.audio && !existsSync(join(process.cwd(), "public", s.audio)))
      fail(where, `screen ${s.n}: audio ${s.audio} isn't in public/`);
  for (const s of screens)
    if (s.type === "widget" && s.widget === "letter")
      for (const c of s.letters ?? []) if (!letterInfo(c)) fail(where, `screen ${s.n}: '${c}' isn't a letter in lib/content/alphabet.ts`);
  for (const s of screens)
    if (s.type === "prayer") for (const m of s.moves ?? []) if (!POSES.includes(m.pose)) fail(where, `unknown pose '${m.pose}'`);

  const rest = body.includes("\n---\n") ? body.slice(body.indexOf("\n---\n") + 5) : "";
  let prayerPhrase: PhraseData | null = null;
  const pp = section(rest, "Prayer phrase");
  if (pp) prayerPhrase = cleanDeep(yamlBlock(pp) as PhraseData);

  let check: CheckItem[] = [];
  const chk = section(rest, "Check");
  if (chk) check = cleanDeep((yamlBlock(chk) as CheckItem[]) ?? []);
  else fail(where, "no Check section");

  const aiContext = unwiki(section(rest, "AI guide context") ?? "");
  if (!aiContext) fail(where, "no AI guide context");
  const madhabNote = section(rest, "Madhab note");
  const sourcesMd = section(rest, "Sources");
  if (!sourcesMd) fail(where, "no Sources");

  // Citations the convert can tap: everything visible (screens, phrase, check, madhab note).
  const visible = JSON.stringify([screens, prayerPhrase, check, madhabNote]);
  const citations = citationKeysIn(visible);

  const arr = (k: string) => ((fm[k] as unknown[]) ?? []).map(String);
  return {
    id,
    kind: day !== null ? "day" : moduleId !== null ? "module" : "track",
    day,
    module: moduleId,
    track: day === null && moduleId === null ? track : null,
    order: day === null && moduleId === null ? order : null,
    phase: (fm.phase as number) ?? null,
    unit: (fm.unit as number) ?? null,
    title: clean(fm.title),
    hook: clean(fm.hook),
    minutes: Number(fm.minutes ?? 5),
    skills: arr("skills"),
    painPoints: arr("pain_points"),
    logs: arr("logs"),
    madhabSensitive: Boolean(fm.madhab_sensitive),
    scholarFlags: arr("scholar_flags"),
    status: String(fm.status ?? "draft-pending-scholar-review"),
    glossary: arr("glossary"),
    screens,
    prayerPhrase,
    check,
    usesGender: /\{(men|women)\}|^audience:\s*(men|women)/m.test(head + (section(rest, "Check") ?? "")),
    aiContext: stripScholarKeepNumbers(aiContext),
    madhabNote: madhabNote ? clean(madhabNote) : null,
    sourcesMd: clean(sourcesMd ?? ""),
    citations,
    contentVersion: createHash("sha256").update(raw).digest("hex").slice(0, 12),
  };
}

/** The AI guide context may mention question numbers (Q14) so the guide knows to escalate; keep those words. */
function stripScholarKeepNumbers(s: string): string {
  return s.replace(/`\[SCHOLAR:\s*([^\]]*)\]`/g, "(scholar question $1)");
}

// ---------- units (from the outline)

function compileUnits(): Unit[] {
  const t = readFileSync(join(CUR, "Outline - 90 Days.md"), "utf8");
  const units: Unit[] = [];
  for (const m of t.matchAll(/^### Unit (\d+): (.+?) \(Days (\d+)[–-](\d+)\)/gm)) {
    const first = Number(m[3]);
    units.push({
      n: Number(m[1]),
      title: m[2].trim(),
      firstDay: first,
      lastDay: Number(m[4]),
      phase: first <= 30 ? 1 : first <= 60 ? 2 : 3,
    });
  }
  if (units.length < 8) fail("Outline", `only ${units.length} units found`);
  return units;
}

// ---------- citations (Citation Bank + source datasets)

type HadithRow = { hadithnumber: number; arabicnumber?: number; text: string; grades?: unknown };
const SLUG: Record<string, string> = {
  Bukhari: "bukhari",
  Muslim: "muslim",
  "Abu Dawud": "abudawud",
  Tirmidhi: "tirmidhi",
  "Nasa'i": "nasai",
  "Ibn Majah": "ibnmajah",
};

function loadJson<T>(name: string): T {
  const p = join(DATA, `${name}.json`);
  if (!existsSync(p))
    throw new Error(`Missing ${p}. Run the vault's Tools/cite.py once (it downloads the datasets).`);
  return JSON.parse(readFileSync(p, "utf8")) as T;
}

function compileCitations(): Record<string, Citation> {
  const bank = readFileSync(join(CUR, "Citation Bank.md"), "utf8");
  const out: Record<string, Citation> = {};

  // Qur'an: one entry per verse, text straight from the datasets.
  const tr = loadJson<{ translations: { text: string }[] }>("sahih").translations;
  const ar = loadJson<{ verses: { verse_key: string; text_uthmani: string }[] }>("uthmani").verses;
  const idx = new Map(ar.map((v, i) => [v.verse_key, i]));
  for (const m of bank.matchAll(/^\| Q (\d+):(\d+)(?:–(\d+))? \|/gm)) {
    const s = Number(m[1]);
    for (let v = Number(m[2]); v <= Number(m[3] ?? m[2]); v++) {
      const k = `${s}:${v}`;
      const i = idx.get(k);
      if (i === undefined) {
        fail("Citation Bank", `Q ${k} not in the dataset`);
        continue;
      }
      const english = tr[i].text.replace(/<sup.*?<\/sup>/g, "").replace(/<[^>]+>/g, "");
      out[`Q ${k}`] = {
        key: `Q ${k}`,
        kind: "quran",
        english,
        arabic: ar[i].text_uthmani,
        url: `https://quran.com/${s}/${v}`,
      };
    }
  }

  // Hadith: gist and grade from the bank; full text from the datasets (sunnah.com numbering).
  const cache: Record<string, { en: HadithRow[]; ar: HadithRow[] }> = {};
  for (const m of bank.matchAll(
    /^\| ((Bukhari|Muslim|Abu Dawud|Tirmidhi|Nasa'i|Ibn Majah) (\d+)) \| (.*?) \| (.*?) \|/gm,
  )) {
    const [, key, coll, num, gist, grade] = m;
    const slug = SLUG[coll];
    if (!cache[slug]) {
      const en = loadJson<{ hadiths: HadithRow[] }>(slug).hadiths;
      let arr: HadithRow[] = [];
      try {
        arr = loadJson<{ hadiths: HadithRow[] }>(`ara-${slug}`).hadiths;
      } catch {
        // Nasa'i Arabic isn't cached; English is enough for the guide.
      }
      cache[slug] = { en, ar: arr };
    }
    const number = (x: HadithRow) =>
      String(slug === "muslim" ? (x.arabicnumber ?? "") : x.hadithnumber).split(".")[0];
    const en = cache[slug].en.filter((x) => number(x) === num);
    if (!en.length) {
      fail("Citation Bank", `${key} not in the dataset`);
      continue;
    }
    const ids = new Set(en.map((x) => x.hadithnumber));
    const arabic = cache[slug].ar
      .filter((x) => ids.has(x.hadithnumber))
      .map((x) => x.text)
      .join("\n\n");
    out[key] = {
      key,
      kind: "hadith",
      gist: gist.trim(),
      grade: grade.trim(),
      english: en.map((x) => x.text.trim()).join("\n\n"),
      arabic,
      url: `https://sunnah.com/${slug}:${num}`,
    };
  }
  return out;
}

// ---------- glossary

function compileGlossary(): GlossaryEntry[] {
  const t = readFileSync(join(CUR, "Glossary.md"), "utf8");
  const out: GlossaryEntry[] = [];
  for (const line of t.split("\n")) {
    const c = line.split("|").map((x) => x.trim());
    if (c.length < 6 || !line.startsWith("| ") || c[1] === "Term" || c[1].startsWith("---")) continue;
    out.push({ term: c[1], arabic: c[2], meaning: unwiki(c[3]), firstTaught: c[4] });
  }
  return out;
}

// ---------- main

/** A track's folder under Lessons/. Missing or empty is fine (a track still being written). */
function trackFiles(folder: string): string[] {
  const dir = join(CUR, "Lessons", folder);
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => join(dir, f));
}

function main() {
  if (!process.argv.includes("--skip-check")) {
    console.log("Running check_lessons.py …");
    try {
      execFileSync("python3", [join(CUR, "Tools/check_lessons.py")], { stdio: ["ignore", "pipe", "inherit"] });
      console.log("  checker: 0 errors");
    } catch (e) {
      const out = String((e as { stdout?: Buffer }).stdout ?? "");
      console.error(out.split("\n").filter((l) => l.startsWith("ERROR")).join("\n"));
      console.error("check_lessons.py found errors. Fix the lessons in the vault first.");
      process.exit(1);
    }
  }

  const files = [
    ...readdirSync(join(CUR, "Lessons"))
      .filter((f) => f.endsWith(".md"))
      .map((f) => join(CUR, "Lessons", f)),
    ...readdirSync(join(CUR, "Lessons/Modules"))
      .filter((f) => f.endsWith(".md"))
      .map((f) => join(CUR, "Lessons/Modules", f)),
    ...trackFiles("Alphabet"),
    ...trackFiles("Seerah"),
  ];
  const stubs: string[] = [];
  const lessons = files
    .map(compileLesson)
    .filter((l): l is Lesson => l !== null)
    .filter((l) => {
      if (l.kind !== "track" || l.status !== "stub" || process.env.INCLUDE_STUBS) return true;
      stubs.push(l.id);
      return false;
    });
  const citations = compileCitations();
  const glossary = compileGlossary();
  const units = compileUnits();

  // Every citation a convert can tap must resolve to real text.
  const glossaryTerms = new Set(glossary.map((g) => g.term.toLowerCase()));
  for (const l of lessons) {
    for (const c of l.citations) if (!citations[c]) fail(l.id, `cites ${c}, which isn't in citations.json`);
    for (const g of l.glossary) if (!glossaryTerms.has(g.toLowerCase())) fail(l.id, `glossary term '${g}' missing`);
    if (/\[SCHOLAR/.test(JSON.stringify({ ...l, aiContext: "" }))) fail(l.id, "a [SCHOLAR] marker survived");
  }
  const days = new Set(lessons.filter((l) => l.kind === "day").map((l) => l.day));
  for (let d = 1; d <= 90; d++) if (!days.has(d)) fail("lessons", `Day ${d} is missing`);
  const tracks = trackCounts(lessons);
  for (const g of tracks.gaps) {
    if (process.env.STRICT_TRACKS) fail("tracks", g);
    else console.warn(`Warning: ${g}. Set STRICT_TRACKS=1 to make this an error.`);
  }
  if (stubs.length) console.warn(`Skipped stub track lesson(s): ${stubs.join(", ")} (INCLUDE_STUBS=1 to compile them).`);

  if (errors.length) {
    console.error(errors.join("\n"));
    console.error(`\n${errors.length} problem(s). Nothing written.`);
    process.exit(1);
  }

  rmSync(join(OUT, "lessons"), { recursive: true, force: true });
  mkdirSync(join(OUT, "lessons"), { recursive: true });
  for (const l of lessons) writeFileSync(join(OUT, "lessons", `${l.id}.json`), JSON.stringify(l));
  const index: ContentIndex = {
    lessons: lessons
      .map(({ id, kind, day, module, track, order, phase, unit, title, hook, minutes, status, logs }) => ({
        id, kind, day, module, track, order, phase, unit, title, hook, minutes, status, logs,
      }))
      .sort((a, b) => (a.day ?? 999) - (b.day ?? 999) || a.id.localeCompare(b.id)),
    units,
    tracks: tracks.counts,
    compiledAt: new Date().toISOString(),
  };
  writeFileSync(join(OUT, "index.json"), JSON.stringify(index, null, 1));
  writeFileSync(join(OUT, "citations.json"), JSON.stringify(citations));
  writeFileSync(join(OUT, "glossary.json"), JSON.stringify(glossary));
  const names = [...usedIcons].sort();
  writeFileSync(
    join(process.cwd(), "components/art/icons.generated.ts"),
    `// Generated by scripts/compile-lessons.ts: the Lucide icons lessons use. Don't edit.\n` +
      (names.length ? `import { ${names.join(", ")} } from "lucide-react";\n` : "") +
      `import type { LucideIcon } from "lucide-react";\n\n` +
      `export const ICONS: Record<string, LucideIcon> = { ${names.join(", ")} };\n`,
  );

  writeFileSync(
    join(process.cwd(), "lib/content/tracks.generated.ts"),
    `// Generated by scripts/compile-lessons.ts: how many lessons each optional Practice track has. Don't edit.\n` +
      `// Client-safe (no content/ import); lib/access.ts and lib/practice/tracks.ts read it.\n\n` +
      `export const TRACK_COUNTS: Record<string, number> = ${JSON.stringify(tracks.counts)};\n`,
  );

  const n = (t: string) => lessons.reduce((s, l) => s + l.screens.filter((x) => x.type === t).length, 0);
  console.log(
    `Compiled ${lessons.length} lessons (${days.size} days, ${lessons.filter((l) => l.kind === "module").length} modules, ` +
      `${lessons.filter((l) => l.kind === "track").length} track: ${Object.entries(tracks.counts).map(([t, c]) => `${c} ${t}`).join(", ")}), ` +
      `${Object.keys(citations).length} citations, ${glossary.length} glossary terms, ${units.length} units. ` +
      `Screens: ${lessons.reduce((s, l) => s + l.screens.length, 0)} ` +
      `(${n("learn")} learn, ${n("scenario")} scenario, ${n("roleplay")} roleplay).`,
  );
}

main();
