#!/usr/bin/env python3
"""Check lesson files against Curriculum Spec §12.

Usage: check_lessons.py [lesson files...]   (default: every file in ../Lessons, including Modules/)
Exit code 1 if any lesson has an ERROR (or if the book texts for the wording check are missing).
WARN lines are worth a look but don't fail.
Needs: pyyaml. Book texts for the wording check live in ~/.cache/new-muslims-program/books/*.txt;
the Qur'an translation used to exempt quoted verses lives in ~/.cache/new-muslims-program/sahih.json.
"""
import glob, json, os, re, sys, unicodedata
import yaml

HERE = os.path.dirname(os.path.abspath(__file__))
CUR = os.path.dirname(HERE)
CACHE = os.path.expanduser("~/.cache/new-muslims-program")
BOOKS = f"{CACHE}/books"

INTERACTIVE = {"choice", "multi", "order", "match", "reveal", "scenario", "phrase", "practice",
               "reflect", "ask_ai", "roleplay",
               # format 2 (Checkpoint 4): show, don't tell
               "steps", "prayer", "tap_words", "sort", "fill", "widget", "quiz"}
ALL_TYPES = INTERACTIVE | {"hook", "learn", "do_today", "takeaway", "closing"}
REQUIRED_FM = ["phase", "title", "hook", "minutes", "skills", "pain_points", "logs",
               "madhab_sensitive", "scholar_flags", "status", "glossary", "sources"]
REQUIRED_SECTIONS = ["## Check", "## AI guide context", "## Sources"]
SKILLS = {f"P{i}" for i in range(1, 9)} | {f"T{i}" for i in range(1, 6)} | \
         {f"S{i}" for i in range(1, 6)} | {f"B{i}" for i in range(1, 7)}
SCHOOLS = {"default", "hanafi", "maliki", "shafii", "hanbali"}
SHINGLE = 8
FEEDBACK_MAX, LEARN_SCREEN_MAX = 25, 70
# format 2 lessons (frontmatter `format: 2`): reading is capped hard, and every how-to is a picture list
V2_LEARN_MAX, V2_BUBBLE_MAX, V2_STEP_MAX, V2_LEARN_TOTAL = 45, 30, 30, 260
POSES = {"stand", "takbir", "qiyam", "ruku", "itidal", "sujud", "jalsa", "tashahhud", "salam-right", "salam-left", "dua"}
WIDGETS = {"prayer-times", "qibla", "rakahs", "fast-day", "moon", "tasbih", "timeline", "masjid-map", "rows", "zakat", "iman-graph", "letter"}
LETTERS = set("ابتثجحخدذرزسشصضطظعغفقكلمنهويء")   # lib/content/alphabet.ts
WUDU_PARTS = {"hands", "mouth", "nose", "face", "arms", "head", "ears", "feet"}
SCENES = {"ghusl", "kaaba", "masjid", "prayer-mat", "quran", "crescent", "qibla", "intention", "prayer-times", "family",
          "community", "dua", "water", "fresh-start", "conversation"}
_ICONS_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "lucide-icons.txt")
ICONS = set(open(_ICONS_FILE).read().split()) if os.path.exists(_ICONS_FILE) else set()

def pic_ok(p):
    """Same rules as the app's lib/content/pics.ts (icon names from Tools/lucide-icons.txt)."""
    p = str(p)
    if p.startswith("pose:"): return p[5:] in POSES
    if p.startswith("wudu:"): return p[5:] in WUDU_PARTS
    if p.startswith("icon:"): return p[5:] in ICONS
    return p in SCENES

MAP_AREAS = {"shoes", "wudu", "hall", "mihrab", "minbar", "women", "entrance"}
TAGS = ("men", "women", "teen")

# hadith collections we accept, mapped to the Citation Bank's spelling
COLLECTIONS = {
    "bukhari": "Bukhari", "sahih al-bukhari": "Bukhari", "sahih bukhari": "Bukhari",
    "muslim": "Muslim", "sahih muslim": "Muslim",
    "abu dawud": "Abu Dawud", "abu dawood": "Abu Dawud", "abudawud": "Abu Dawud",
    "tirmidhi": "Tirmidhi", "at-tirmidhi": "Tirmidhi", "jami at-tirmidhi": "Tirmidhi",
    "nasa'i": "Nasa'i", "nasai": "Nasa'i", "an-nasa'i": "Nasa'i",
    "ibn majah": "Ibn Majah", "ibnmajah": "Ibn Majah",
}
SUNNAH_SLUGS = {"bukhari": "Bukhari", "muslim": "Muslim", "abudawud": "Abu Dawud",
                "tirmidhi": "Tirmidhi", "nasai": "Nasa'i", "ibnmajah": "Ibn Majah"}
# collections outside the bank's six: never allowed
OTHER_COLLECTIONS = r"(?:musnad\s+)?ahmad|riyad(?:h)?\s+as-salihin|bayhaqi|tabarani|hakim|darimi|muwatta|malik|ibn\s+hibban|daraqutni|nawawi|bulugh|adab\s+al-mufrad"
COLL_RE = "|".join(sorted((re.escape(k) for k in COLLECTIONS), key=len, reverse=True))
HADITH_RE = re.compile(rf"\b({COLL_RE})\s*(?:#|no\.?\s*)?(\d+)([a-z])?\b", re.I)
OTHER_RE = re.compile(rf"\b({OTHER_COLLECTIONS})\s*(?:#|no\.?\s*)?\d+", re.I)
QREF_RE = re.compile(r"(?:\bQ\.?\s?|\bQur'?an\s+)(\d+):(\d+)(?:\s?[–-]\s?(\d+))?", re.I)
BRACKET_RE = re.compile(r"\[([^\[\]]*?(?:\bQ\.?\s?\d|Qur'?an\s+\d)[^\[\]]*)\]", re.I)
QURAN_LINK_RE = re.compile(r"quran\.com/(\d+)/(\d+)(?:-(\d+))?")
SUNNAH_LINK_RE = re.compile(r"sunnah\.com/(\w+):(\d+)([a-z])?")

def words(t):
    t = unicodedata.normalize("NFKD", t.replace("’", "'").replace("‘", "'"))
    t = "".join(c for c in t if not unicodedata.combining(c))   # Allāh -> allah
    return re.findall(r"[a-z0-9']+", t.lower())

def seen_words(t):
    """Words one reader sees: {men}/{women} text is counted for whichever audience reads more."""
    def keep(who):
        other = "women" if who == "men" else "men"
        x = re.sub(r"\{%s\}.*?\{/%s\}" % (other, other), "", t, flags=re.S)
        return re.sub(r"\{/?(men|women|teen)\}", "", x)
    return max(len(words(keep("men"))), len(words(keep("women"))))

def shingles(text):
    w = words(text)
    return {" ".join(w[i:i + SHINGLE]) for i in range(len(w) - SHINGLE + 1)}

def load_book_shingles():
    sh = {}
    for f in glob.glob(f"{BOOKS}/*.txt"):
        name = os.path.basename(f)[:-4]
        for g in shingles(open(f, errors="ignore").read()):
            sh.setdefault(g, name)
    return sh

def load_quran_shingles():
    """Shingles of the Saheeh translation, built per surah so quotes spanning verses match."""
    try:
        tr = json.load(open(f"{CACHE}/sahih.json"))["translations"]
        ar = json.load(open(f"{CACHE}/uthmani.json"))["verses"]
    except Exception:
        return set()
    by_surah = {}
    for v, a in zip(tr, ar):
        t = re.sub(r"<sup.*?</sup>", "", v["text"]); t = re.sub("<[^>]+>", "", t)
        by_surah.setdefault(a["verse_key"].split(":")[0], []).append(t)
    out = set()
    for texts in by_surah.values():
        out |= shingles(" ".join(texts))
    return out

def citation_bank():
    t = open(f"{CUR}/Citation Bank.md").read()
    hadith = set(re.findall(r"^\| ((?:Bukhari|Muslim|Abu Dawud|Tirmidhi|Nasa'i|Ibn Majah) \d+) \|", t, re.M))
    quran = set()
    for s, a, b in re.findall(r"^\| Q (\d+):(\d+)(?:–(\d+))? \|", t, re.M):
        for v in range(int(a), int(b or a) + 1):
            quran.add((int(s), v))
    return hadith, quran

def glossary_terms():
    t = open(f"{CUR}/Glossary.md").read()
    return {m.strip().lower() for m in re.findall(r"^\| ([^|]+?) \|", t, re.M)} - {"term", "---"}

def scholar_qs():
    t = open(f"{CUR}/Curriculum Spec.md").read()
    return set(re.findall(r"^\| (Q\d+) \|", t, re.M))

def quran_refs(text):
    """Every Qur'an reference: Q 2:186, Q2:186, Q. 2:186, Qur'an 2:186, ranges, extra refs inside one
    bracket ([Q 4:34, 5:33]), and quran.com links. Returns (refs, errors)."""
    refs, errs = [], []
    def add(s, a, b, raw):
        s, a = int(s), int(a)
        if b is None:
            refs.append((s, a, a)); return
        b = int(b)
        if b < a:
            errs.append(f"bad verse range '{raw}' (end before start; write it out in full)"); return
        refs.append((s, a, b))
    for m in QREF_RE.finditer(text):
        add(m.group(1), m.group(2), m.group(3), m.group(0))
    for m in BRACKET_RE.finditer(text):           # extra refs after the first in one bracket
        inner = m.group(1)
        for m2 in re.finditer(r"(?<![\w:])(\d+):(\d+)(?:\s?[–-]\s?(\d+))?", inner):
            add(m2.group(1), m2.group(2), m2.group(3), m2.group(0))
    for m in QURAN_LINK_RE.finditer(text):
        add(m.group(1), m.group(2), m.group(3), m.group(0))
    return refs, errs

def check(path, books, quran_sh, bank, gloss, qs):
    errs, warns = [], []
    E, W = errs.append, warns.append
    raw = open(path).read()
    m = re.match(r"^---\n(.*?)\n---\n(.*)$", raw, re.S)
    if not m:
        return ["no frontmatter"], []
    try:
        fm = yaml.safe_load(m.group(1)) or {}
    except Exception as e:
        return [f"frontmatter YAML: {e}"], []
    body = m.group(2)
    for k in REQUIRED_FM:
        if k not in fm: E(f"frontmatter missing '{k}'")
    if "day" not in fm and "module" not in fm and "track" not in fm: E("frontmatter needs 'day', 'module' or 'track'")
    if "track" in fm:                            # optional Practice tracks (alphabet, seerah): ids <track>-NN
        if fm["track"] not in ("alphabet", "seerah"): E(f"unknown track {fm['track']}")
        order = fm.get("order")
        if not isinstance(order, int) or isinstance(order, bool) or order < 1: E(f"a track lesson needs a positive integer 'order' (got {order!r})")
        elif os.path.basename(path) != f"{fm['track']}-{order:02d}.md": E(f"track lesson file must be named {fm['track']}-NN.md matching its order")
    for s in fm.get("skills") or []:
        if s not in SKILLS: E(f"unknown skill {s}")
    if fm.get("status") != "draft-pending-scholar-review": W(f"status is {fm.get('status')}")

    def fb_len(where, fb):
        if fb and len(words(fb)) > FEEDBACK_MAX: E(f"{where} feedback is {len(words(fb))} words (>{FEEDBACK_MAX})")

    def check_options(where, data, kind):
        opts = data.get("options") or []
        if not opts: E(f"{where} has no options"); return
        for o in opts: fb_len(where, o.get("feedback", ""))
        n_ok = sum(bool(o.get("correct")) for o in opts)
        if kind == "choice" and n_ok != 1: E(f"{where} needs exactly one correct option (has {n_ok})")
        if kind == "multi" and n_ok < 1: E(f"{where} needs at least one correct option")
        if kind == "scenario" and not any(o.get("best") for o in opts): E(f"{where} needs a best option")

    # ---- screens
    head = body.split("\n---\n")[0]
    parts = re.split(r"^### (\d+) · (\w+)\s*$", head, flags=re.M)
    screens = [(int(parts[i]), parts[i + 1], parts[i + 2]) for i in range(1, len(parts), 3)]
    types = [t for _, t, _ in screens]
    if not screens: E("no screens found")
    nums = [n for n, _, _ in screens]
    if nums != list(range(1, len(nums) + 1)): E(f"screen numbers not sequential: {nums}")
    for t in types:
        if t not in ALL_TYPES: E(f"unknown screen type '{t}'")
    v2 = fm.get("format") == 2
    long_day = fm.get("day") in (2, 3)          # Spec §4.2 exception
    max_screens, max_words = (18, 450) if long_day else (15, 350)
    if v2:
        max_screens, max_words = (22, V2_LEARN_TOTAL + 80) if long_day else (18, V2_LEARN_TOTAL)
        for tag in TAGS:
            if head.count("{%s}" % tag) != head.count("{/%s}" % tag): E(f"unbalanced {{{tag}}} tags")
        if re.search(r"other schools", head, re.I): E("format 2: converts only see their masjid's school; no 'other schools' text on screens")
    if not (8 <= len(screens) <= max_screens): E(f"{len(screens)} screens (spec: 8–{max_screens})")
    if types and types[0] != "hook": E("first screen must be hook")
    if types[-3:] != ["do_today", "takeaway", "closing"]: E(f"must end do_today, takeaway, closing (got {types[-3:]})")
    n_int = sum(t in INTERACTIVE for t in types)
    if n_int < 3: E(f"only {n_int} interactive screens (need ≥3)")
    if not ({"ask_ai", "roleplay"} & set(types)): E("needs an ask_ai or roleplay screen")
    run = 0
    for t in types:
        run = run + 1 if t == "learn" else 0
        if run > (1 if v2 else 2): E(f"more than {1 if v2 else 2} learn screen(s) in a row"); break

    def clean(t):
        t = re.sub(r"`\[SCHOLAR:[^\]]*\]`", "", t)
        return re.sub(r"\[(Q|Bukhari|Muslim|Abu Dawud|Tirmidhi|Nasa'i|Ibn Majah|Field Guide|Welcome)[^\]]*\]", "", t)

    learn_total, prose_parts, phrase_meanings, has_variant = 0, [], [], False
    for n, t, content in screens:
        where = f"screen {n} ({t})"
        ym = re.search(r"```yaml\n(.*?)```", content, re.S)
        data = None
        if ym:
            try:
                data = yaml.safe_load(ym.group(1))
            except Exception as e:
                E(f"{where} YAML: {e}"); continue
        if v2 and isinstance(data, dict) and t in ("hook", "takeaway", "closing"):
            if not data.get("text"): E(f"{where} yaml needs text")
            prose_parts.append(str(data.get("text", ""))); continue
        if v2 and t == "learn" and isinstance(data, dict) and not data.get("madhab_variant"):
            bad = set(data) - {"text", "pic", "bubbles", "audience", "school"}
            if bad: E(f"{where} unknown keys {sorted(bad)}")
            texts = [str(data.get("text", ""))]
            for b in data.get("bubbles") or []:
                if seen_words(clean(str(b))) > V2_BUBBLE_MAX: E(f"{where} bubble is {seen_words(clean(str(b)))} words (>{V2_BUBBLE_MAX})")
                texts.append(str(b))
            wc = seen_words(clean(" ".join(texts)))
            if seen_words(clean(texts[0])) > V2_LEARN_MAX: E(f"{where} text is {seen_words(clean(texts[0]))} words (>{V2_LEARN_MAX})")
            learn_total += wc; prose_parts += texts
            continue
        if t == "learn":
            if isinstance(data, dict):
                has_variant = True
                if not data.get("madhab_variant") or "default" not in data:
                    E(f"{where} yaml must be a madhab variant block with a default")
                if "hanafi" not in data:
                    E(f"{where} variant block needs a hanafi version (the pilot default)")
                bad = set(data) - SCHOOLS - {"madhab_variant", "visual", "teen", "pic", "bubbles", "audience", "school"} - {f"{k}_bubbles" for k in SCHOOLS}
                if bad: E(f"{where} unknown variant keys {sorted(bad)}")
                texts = [v for k, v in data.items() if (k in SCHOOLS or k == "teen") and isinstance(v, str)]
                wc = max(((seen_words if v2 else lambda y: len(words(y)))(clean(x)) for x in texts), default=0)
                prose_parts += texts
            else:
                wc = len(words(clean(content)))
                prose_parts.append(content)
            learn_total += wc
            if wc > (V2_LEARN_MAX if v2 else LEARN_SCREEN_MAX): E(f"{where} is {wc} words (>{V2_LEARN_MAX if v2 else LEARN_SCREEN_MAX})")
            continue
        if t in INTERACTIVE or t == "do_today":
            if not isinstance(data, dict):
                E(f"{where} has no yaml block"); continue
        else:
            prose_parts.append(content); continue
        if t == "phrase":
            for k in ("arabic", "translit", "meaning", "audio_id", "when"):
                if not data.get(k): E(f"{where} missing '{k}'")
            phrase_meanings.append(str(data.get("meaning", "")))
            phrase_meanings.append(str(data.get("translit", "")))
            prose_parts.append(str(data.get("when", "")))       # arabic/translit/meaning exempt
            continue
        prose_parts.append(ym.group(1))
        if t in ("choice", "multi", "scenario"): check_options(where, data, t)
        if t == "order":
            if len(data.get("items") or []) < 3: E(f"{where} needs at least 3 items")
            fb_len(where, data.get("feedback", ""))
        if t == "match" and len(data.get("pairs") or []) < 3: E(f"{where} needs at least 3 pairs")
        if t == "reveal" and not data.get("cards"): E(f"{where} has no cards")
        if t == "practice" and not data.get("steps"): E(f"{where} has no steps")
        if t == "ask_ai" and not data.get("chips"): E(f"{where} has no chips")
        if t == "roleplay":
            for k in ("character", "setup", "goal", "success_looks_like", "coach_notes"):
                if not data.get(k): E(f"{where} missing '{k}'")
        if t == "steps":
            st = data.get("steps") or []
            if len(st) < 2: E(f"{where} needs at least 2 steps")
            for i, x in enumerate(st, 1):
                if not isinstance(x, dict) or not x.get("text"): E(f"{where} step {i} needs text"); continue
                if seen_words(clean(str(x["text"]))) > V2_STEP_MAX: E(f"{where} step {i} is {seen_words(clean(str(x['text'])))} words (>{V2_STEP_MAX})")
        if t == "prayer":
            mv = data.get("moves") or []
            if len(mv) < 3: E(f"{where} needs at least 3 moves")
            for i, x in enumerate(mv, 1):
                if not isinstance(x, dict) or x.get("pose") not in POSES: E(f"{where} move {i} pose must be one of {sorted(POSES)}")
                elif not x.get("text"): E(f"{where} move {i} needs text")
                elif seen_words(clean(str(x["text"]))) > V2_STEP_MAX: E(f"{where} move {i} is {seen_words(clean(str(x['text'])))} words (>{V2_STEP_MAX})")
        if t == "tap_words":
            if not data.get("answer") or not data.get("prompt"): E(f"{where} needs prompt and answer")
            if len(data.get("extra") or []) < 2: E(f"{where} needs at least 2 extra (wrong) words")
        if t == "sort":
            if len(data.get("buckets") or []) != 2: E(f"{where} needs exactly 2 buckets")
            its = data.get("items") or []
            if len(its) < 3: E(f"{where} needs at least 3 items")
            if any(not isinstance(x, dict) or x.get("bucket") not in (0, 1) or not x.get("text") for x in its): E(f"{where} items need text and bucket 0 or 1")
            for x in its:
                if isinstance(x, dict): fb_len(where, x.get("why", ""))
        if t == "fill":
            if not data.get("before"): E(f"{where} needs 'before'")
            check_options(where, data, "choice")
        if t == "quiz":
            if not data.get("title"): E(f"{where} quiz needs a title")
            c = data.get("count", 6)
            if not isinstance(c, int) or not (3 <= c <= 12): E(f"{where} quiz count must be 3–12")
            for pid in data.get("prefer") or []:
                if not re.fullmatch(r"day-\d{2}", str(pid)): E(f"{where} quiz prefer ids look like day-03 (got {pid})")
        if t == "widget":
            wd = data.get("widget")
            if wd not in WIDGETS: E(f"{where} widget must be one of {sorted(WIDGETS)}")
            if wd == "tasbih":
                ph = data.get("phrases") or []
                if not ph or any(not isinstance(x, dict) or not x.get("translit") or not isinstance(x.get("count"), int) for x in ph):
                    E(f"{where} tasbih needs phrases: [{{translit, count, meaning?, arabic?}}]")
            if wd == "timeline":
                ev = data.get("events") or []
                if len(ev) < 3 or any(not isinstance(x, dict) or not (x.get("when") and x.get("title") and x.get("text")) for x in ev):
                    E(f"{where} timeline needs ≥3 events: [{{when, title, text, pic?}}]")
                for x in ev:
                    if isinstance(x, dict) and seen_words(clean(str(x.get("text", "")))) > V2_STEP_MAX: E(f"{where} timeline event '{x.get('title')}' text >{V2_STEP_MAX} words")
            if wd == "masjid-map":
                ar = data.get("areas") or {}
                if len(ar) < 3 or set(ar) - MAP_AREAS: E(f"{where} masjid-map needs ≥3 areas from {sorted(MAP_AREAS)}")
            if wd == "zakat" and not isinstance(data.get("nisab"), (int, float)): E(f"{where} zakat needs a numeric example nisab")
            if wd == "letter":
                ls = data.get("letters") or []
                if not (1 <= len(ls) <= 5) or any(str(c) not in LETTERS for c in ls): E(f"{where} letter widget needs 1–5 letters from the alphabet table")
            if wd == "iman-graph" and len(data.get("points") or []) < 3: E(f"{where} iman-graph needs ≥3 points: [{{label, text}}]")
        if t == "do_today":
            if not data.get("text"): E(f"{where} has no text")
            if v2 and not data.get("steps") and seen_words(clean(str(data.get("text", "")))) > 30:
                E(f"{where} format 2: more than 30 words needs a steps list")
            if data.get("log") and data["log"] not in (fm.get("logs") or []):
                E(f"{where} log '{data['log']}' not in frontmatter logs")
    if learn_total > max_words: E(f"learn text totals {learn_total} words (>{max_words})")
    if v2:
        for sc in re.findall(r"^school:\s*(\S+)", head, flags=re.M):
            if sc not in SCHOOLS - {"default"}: E(f"school must be hanafi, maliki, shafii or hanbali (got {sc})")
        for a in re.findall(r"^audience:\s*(\S+)", head, flags=re.M):
            if a not in ("men", "women"): E(f"audience must be men or women (got {a})")
        for p in re.findall(r"^\s*-?\s*pic:\s*\"?([^\"\n]+?)\"?\s*$", head, flags=re.M):
            if not pic_ok(p): E(f"unknown picture '{p}' (poses, wudu:<part>, scenes or icon:<LucideName>; see Spec §4.6)")
        for block in re.findall(r"^\s*pics:\s*\[(.*?)\]", head, flags=re.M):
            for p in [x.strip().strip('"').strip("'") for x in block.split(",") if x.strip()]:
                if not pic_ok(p): E(f"unknown picture '{p}' in pics")
    if v2:
        for n, t, content in screens:
            c = re.sub(r"\{(men|women|teen)\}.*?\{/\1\}", "", content, flags=re.S)
            if re.search(r"\bmen\b", c, re.I) and re.search(r"\bwomen\b", c, re.I):
                W(f"screen {n} ({t}) mentions men and women side by side: use {{men}}/{{women}} tags so each sees only their own")
    if has_variant and not fm.get("madhab_sensitive"): E("has a madhab variant block but madhab_sensitive is false")

    # ---- non-screen sections
    for sec in REQUIRED_SECTIONS:
        if sec not in body: E(f"missing section {sec}")
    if fm.get("madhab_sensitive") and "## Madhab note" not in body: E("madhab_sensitive but no Madhab note")
    if fm.get("scholar_flags") and "## Scholar flags" not in body: E("scholar_flags set but no Scholar flags section")
    if fm.get("day") and 8 <= int(fm["day"]) <= 30 and "## Prayer phrase" not in body:
        E("Days 8–30 need a Prayer phrase section")
    chk = re.search(r"## Check\n```yaml\n(.*?)```", body, re.S)
    if chk:
        try:
            items = yaml.safe_load(chk.group(1))
        except Exception as e:
            items = None; E(f"Check YAML: {e}")
        if not isinstance(items, list) or not (1 <= len(items) <= 3):
            E("Check must be a list of 1–3 items")
        else:
            for i, it in enumerate(items, 1):
                if not isinstance(it, dict) or not it.get("prompt"): E(f"Check item {i} has no prompt"); continue
                check_options(f"Check item {i}", it, "choice")
    else:
        E("Check section has no yaml block")
    rest = body.split("\n---\n", 1)[1] if "\n---\n" in body else ""
    prose_parts.append(rest.split("## Sources")[0])

    # ---- scholar flags
    flags_text = " ".join(re.findall(r"\[SCHOLAR:([^\]]*)\]", body))
    if "NEW" in flags_text: E("unnumbered [SCHOLAR: NEW] flag: give it a Q number in Spec §9")
    inline = set(re.findall(r"Q\d+", flags_text))
    declared = set(fm.get("scholar_flags") or [])
    for q in inline | declared:
        if q not in qs: E(f"unknown scholar question {q}")
    if inline - declared: E(f"inline flags not in frontmatter: {sorted(inline - declared)}")
    if declared - inline: E(f"frontmatter flags never marked inline: {sorted(declared - inline)}")

    # ---- citations (frontmatter sources + whole body)
    hadith_bank, quran_bank = bank
    scan = m.group(1) + "\n" + body
    for name, n, suffix in HADITH_RE.findall(scan):
        ref = f"{COLLECTIONS[name.lower()]} {n}"
        if ref not in hadith_bank: E(f"{name} {n}{suffix} not in Citation Bank")
    for slug, n, suffix in SUNNAH_LINK_RE.findall(scan):
        if slug not in SUNNAH_SLUGS: E(f"sunnah.com/{slug}:{n} is not one of the six collections")
        elif f"{SUNNAH_SLUGS[slug]} {n}" not in hadith_bank: E(f"sunnah.com/{slug}:{n} not in Citation Bank")
    for mo in OTHER_RE.finditer(scan):
        E(f"'{mo.group(0)}' is outside the six collections the bank allows")
    refs, rerrs = quran_refs(scan)
    for e in rerrs: E(e)
    for s, a, b in refs:
        for v in range(a, b + 1):
            if (s, v) not in quran_bank: E(f"Q {s}:{v} not in Citation Bank"); break

    # ---- glossary
    for g in fm.get("glossary") or []:
        if str(g).lower() not in gloss: E(f"glossary term '{g}' missing from Glossary")
        elif str(g).lower() not in head.lower(): W(f"glossary term '{g}' isn't used on any screen")

    # ---- original wording (quoted verses and this lesson's phrase meanings are exempt)
    exempt = quran_sh.copy()
    for pm in phrase_meanings: exempt |= shingles(pm)
    def is_scripture(line):                       # quoted verse, or this lesson's own phrase text
        if "[Q " in line or "Saheeh" in line: return True
        sh = shingles(line)
        return bool(sh) and sum(g in exempt for g in sh) / len(sh) >= 0.5
    prose = "\n".join(l for l in "\n".join(prose_parts).splitlines()
                      if not (l.lstrip().startswith(">") and is_scripture(l.lstrip("> ").strip())))
    hits = {}
    for g in shingles(prose):
        if g in books and g not in exempt: hits.setdefault(books[g], []).append(g)
    for b, gs in hits.items():
        E(f"{len(gs)} 8-word run(s) match {b}: e.g. \"{gs[0]}\"")
    return errs, warns

def main():
    files = sys.argv[1:] or sorted(glob.glob(f"{CUR}/Lessons/**/*.md", recursive=True))
    books = load_book_shingles()
    if not books:
        print(f"ERROR: no book texts in {BOOKS}; the wording check can't run. Restore them first.")
        sys.exit(1)
    quran_sh = load_quran_shingles()
    if not quran_sh: print("WARN: Qur'an translation not cached; quoted verses aren't exempt from the wording check")
    bank, gloss, qs = citation_bank(), glossary_terms(), scholar_qs()
    bad = 0
    for f in files:
        try:
            errs, warns = check(f, books, quran_sh, bank, gloss, qs)
        except Exception as e:
            errs, warns = [f"checker crashed: {e!r}"], []
        name = os.path.relpath(f, CUR)
        if not errs and not warns:
            print(f"OK    {name}")
        errs = list(dict.fromkeys(errs))           # each distinct error once
        for e in errs: print(f"ERROR {name}: {e}")
        for w in warns: print(f"WARN  {name}: {w}")
        bad += bool(errs)
    print(f"\n{len(files)} lessons, {bad} with errors")
    sys.exit(1 if bad else 0)

if __name__ == "__main__":
    main()
