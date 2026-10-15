#!/usr/bin/env python3
"""Offline lookup for Qur'an verses (Saheeh International + Arabic) and hadith (sunnah.com numbering).

Usage:
  cite.py q 2:186          one verse          cite.py q 31:14-15   a range
  cite.py h bukhari 50     one hadith         (collections: bukhari muslim abudawud tirmidhi nasai ibnmajah)
  cite.py ha bukhari 831   the Arabic text of a hadith (e.g. to copy a du'a's exact wording)
  cite.py s muslim mercy   search a collection for a phrase
Data lives in ~/.cache/new-muslims-program and is downloaded on first use.
"""
import json, os, re, subprocess, sys
D = os.path.expanduser("~/.cache/new-muslims-program")
SRC = {
    "sahih": "https://api.quran.com/api/v4/quran/translations/20",
    "uthmani": "https://api.quran.com/api/v4/quran/verses/uthmani",
}
for c in ["bukhari", "muslim", "abudawud", "tirmidhi", "nasai", "ibnmajah"]:
    SRC[c] = f"https://raw.githubusercontent.com/fawazahmed0/hadith-api/1/editions/eng-{c}.json"
    SRC["ara-" + c] = f"https://raw.githubusercontent.com/fawazahmed0/hadith-api/1/editions/ara-{c}.json"

def path(name):
    p = f"{D}/{name}.json"
    if not os.path.exists(p):
        os.makedirs(D, exist_ok=True)
        subprocess.run(["curl", "-sL", SRC[name], "-o", p], check=True)
    return p

def quran(ref):
    s, v = ref.replace("–", "-").split(":")
    a, b = (v.split("-") + [None])[:2]
    a = int(a); b = int(b) if b else a
    tr = json.load(open(path("sahih")))["translations"]
    ar = json.load(open(path("uthmani")))["verses"]
    idx = {x["verse_key"]: i for i, x in enumerate(ar)}
    for n in range(a, b + 1):
        k = f"{s}:{n}"
        if k not in idx:
            print(k, "NOT FOUND"); continue
        t = re.sub(r"<sup.*?</sup>", "", tr[idx[k]]["text"]); t = re.sub("<[^>]+>", "", t)
        print(f"[Q {k}] {ar[idx[k]]['text_uthmani']}\n  {t}")

_cache = {}
def load(c):
    if c not in _cache: _cache[c] = json.load(open(path(c)))["hadiths"]
    return _cache[c]

def num(c, x):  # sunnah.com numbering: Muslim uses the Arabic (Abd al-Baqi) number
    return str(x.get("arabicnumber", "")) if c == "muslim" else str(x["hadithnumber"])

def hadith(c, n):
    hits = [x for x in load(c) if num(c, x).split(".")[0] == str(n)]
    if not hits: print(c, n, "NOT FOUND"); return
    for x in hits: print(f"[{c} {n}] grades={x.get('grades')}\n{x['text']}\n")

def hadith_ar(c, n):
    eng = [x for x in load(c) if num(c, x).split(".")[0] == str(n)]
    if not eng: print(c, n, "NOT FOUND"); return
    ids = {x["hadithnumber"] for x in eng}
    for x in load("ara-" + c):
        if x["hadithnumber"] in ids: print(f"[{c} {n} Arabic]\n{x['text']}\n")

def search(c, kw):
    for x in load(c):
        if kw.lower() in x["text"].lower(): print(f"[{c} {num(c, x)}] {x['text'][:300]}\n")

if __name__ == "__main__":
    if len(sys.argv) < 3: print(__doc__); sys.exit(1)
    m = sys.argv[1]
    if m == "q": quran(sys.argv[2])
    elif m == "h": hadith(sys.argv[2], sys.argv[3])
    elif m == "ha": hadith_ar(sys.argv[2], sys.argv[3])
    elif m == "s": search(sys.argv[2], " ".join(sys.argv[3:]))
