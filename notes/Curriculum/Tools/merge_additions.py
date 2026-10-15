#!/usr/bin/env python3
"""Merge a writer batch's additions file into the Citation Bank and Glossary.

Usage: merge_additions.py "Drafts/Batch C - additions.md" [...]
- Hadith rows: deduped by ref; for an existing ref, the "Used on" days are combined.
- Qur'an rows: deduped by ref; the text is always re-pulled from the cached Saheeh International
  data (never trusted from the additions file).
- Glossary rows: deduped by term (case-insensitive); existing definitions win.
Tables are kept sorted. Prints what was added.
"""
import json, os, re, sys

HERE = os.path.dirname(os.path.abspath(__file__))
CUR = os.path.dirname(HERE)
CACHE = os.path.expanduser("~/.cache/new-muslims-program")
ORDER = ["Bukhari", "Muslim", "Abu Dawud", "Tirmidhi", "Nasa'i", "Ibn Majah"]

def rows(block):
    out = []
    for line in block.splitlines():
        if line.startswith("| ") and not line.startswith("| Ref ") and not line.startswith("| Term ") and not re.match(r"^\|[-\s|]+\|$", line):
            out.append([c.strip() for c in line.strip().strip("|").split("|")])
    return out

def section(text, title_re):
    m = re.search(title_re + r".*?\n(.*?)(?=\n#{2,3} |\Z)", text, re.S)
    return m.group(1) if m else ""

def quran_text(ref):
    tr = json.load(open(f"{CACHE}/sahih.json"))["translations"]
    ar = json.load(open(f"{CACHE}/uthmani.json"))["verses"]
    idx = {x["verse_key"]: i for i, x in enumerate(ar)}
    s, v = ref.split(":"); a, b = (re.split("[–-]", v) + [None])[:2]; a = int(a); b = int(b) if b else a
    parts = []
    for n in range(a, b + 1):
        t = re.sub(r"<sup.*?</sup>", "", tr[idx[f"{s}:{n}"]]["text"]); t = re.sub("<[^>]+>", "", t)
        parts.append(f"({n}) {t}")
    txt = " ".join(parts)
    return txt if len(txt) <= 700 else txt[:700].rsplit(" ", 1)[0] + " …"

def hkey(ref):
    c, n = ref.rsplit(" ", 1)
    return (ORDER.index(c) if c in ORDER else 99, int(re.sub(r"\D", "", n)))

def qkey(ref):
    s, v = ref[2:].split(":")
    return (int(s), int(re.split("[–-]", v)[0]))

def days_union(a, b):
    items = []
    for x in re.split(r",\s*", a + "," + b):
        x = x.strip()
        if x and x not in items: items.append(x)
    def k(x):
        return (0, int(x)) if x.isdigit() else (1, x)
    return ", ".join(sorted(items, key=k))

def merge_table(doc, header_re, new_rows, keyfn, combine):
    """Replace the table that follows header_re in doc with existing+new rows."""
    m = re.search(header_re + r"(.*?\n)(\| [^\n]+\|\n\|[-| ]+\|\n)((?:\|[^\n]*\|\n?)*)", doc, re.S)
    if not m: raise SystemExit(f"table not found: {header_re}")
    existing = rows(m.group(3))
    byref = {r[0]: r for r in existing}
    added = []
    for r in new_rows:
        if r[0] in byref:
            byref[r[0]] = combine(byref[r[0]], r)
        else:
            byref[r[0]] = r; added.append(r[0])
    body = "".join("| " + " | ".join(r) + " |\n" for r in sorted(byref.values(), key=lambda r: keyfn(r[0])))
    return doc[:m.start(3)] + body + doc[m.end(3):], added

def main():
    bank_p, gl_p = f"{CUR}/Citation Bank.md", f"{CUR}/Glossary.md"
    bank, gl = open(bank_p).read(), open(gl_p).read()
    for f in sys.argv[1:]:
        t = open(f).read()
        had = [r for r in rows(section(t, r"### Hadith")) if len(r) >= 4]
        qur = [r for r in rows(section(t, r"### Qur'an")) if r and r[0].startswith("Q ")]
        glo = [r for r in rows(section(t, r"## Glossary additions")) if len(r) >= 4]
        for r in qur:
            r[1:] = [quran_text(r[0][2:])]
        bank, a1 = merge_table(bank, r"## Hadith\n", [r[:4] for r in had], hkey,
                               lambda old, new: old[:3] + [days_union(old[3], new[3])])
        bank, a2 = merge_table(bank, r"## Qur'an\n", [r[:2] for r in qur], qkey, lambda old, new: old)
        gl, a3 = merge_table(gl, r"# Glossary\n", [r[:4] for r in glo],
                             lambda k: re.sub(r"^(al-|')", "", k.lower()), lambda old, new: old)
        print(f"{os.path.basename(f)}: +{len(a1)} hadith {a1}, +{len(a2)} Qur'an {a2}, +{len(a3)} glossary {a3}")
    open(bank_p, "w").write(bank); open(gl_p, "w").write(gl)

if __name__ == "__main__":
    main()
