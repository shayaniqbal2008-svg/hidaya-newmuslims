---
track: alphabet
order: 11
phase: null
unit: null
title: "Long vowels and joining letters"
hook: "Stretch a vowel, join the letters, read a word."
minutes: 4
skills: [P4]
pain_points: [prayer-without-arabic, skill]
logs: []
madhab_sensitive: false
scholar_flags: []
status: draft-pending-scholar-review
glossary: []
sources: [Wikipedia (Arabic diacritics), Wikipedia (Arabic alphabet), Unicode Standard ch. 9 (Arabic)]
format: 2
---
# alphabet-11 · Long vowels and joining letters

### 1 · hook
```yaml
pic: icon:Languages
text: "**Time to read whole words.** Two last ideas: how Arabic stretches a vowel long, and how letters join into words. Then you will read four real words."
```

### 2 · learn
```yaml
pic: icon:BookOpenText
text: "**Long vowels use letters.** Fatha then ا makes a long aa. Kasra then ي makes a long ee. Damma then و makes a long oo."
```

### 3 · reveal
```yaml
title: "Tap each card"
cards:
  - front: "بَا"
    back: "baa: fatha + alif"
    rtl: true
  - front: "بِي"
    back: "bee: kasra + yaa"
    rtl: true
  - front: "بُو"
    back: "boo: damma + waaw"
    rtl: true
```

### 4 · choice
```yaml
prompt: "Which one says \"noo\"?"
options:
  - text: "نُو"
    correct: true
    feedback: "Yes. Damma then waaw: a long oo."
  - text: "نَا"
    correct: false
    feedback: "That's naa: fatha then alif."
  - text: "نِي"
    correct: false
    feedback: "That's nee: kasra then yaa."
```

### 5 · learn
```yaml
pic: icon:Lightbulb
text: "**Joining.** Inside a word, letters link along a line. Most join on both sides. ا د ذ ر ز و only join to the letter before them, leaving a small gap after."
```

### 6 · reveal
```yaml
title: "Build a word"
cards:
  - front: "ب + ا + ب = باب"
    back: "baab: door"
    rtl: true
  - front: "ن + و + ر = نور"
    back: "nuur: light"
    rtl: true
  - front: "د + ي + ن = دين"
    back: "diin: religion, way of life"
    rtl: true
  - front: "ك + ت + ا + ب = كتاب"
    back: "kitaab: book"
    rtl: true
```

### 7 · choice
```yaml
prompt: "Which word is nuur (light)?"
options:
  - text: "نور"
    correct: true
    feedback: "Yes. ن, then و for the long oo, then ر."
  - text: "باب"
    correct: false
    feedback: "That's baab: door."
  - text: "دين"
    correct: false
    feedback: "That's diin: religion."
```

### 8 · match
```yaml
prompt: "Match each word to its meaning."
pairs:
  - left: "باب"
    right: "door"
  - left: "نور"
    right: "light"
  - left: "دين"
    right: "religion"
  - left: "كتاب"
    right: "book"
```

### 9 · ask_ai
```yaml
chips:
  - "Why is there a gap in باب?"
  - "How do I know a vowel is long?"
  - "Give me another easy word to read"
```

### 10 · do_today
```yaml
pic: icon:PenLine
text: "Write باب, نور, دين and كتاب, saying each one as you write it."
log: null
```

### 11 · takeaway
```yaml
pic: icon:Sparkles
text: "ا, و and ي stretch vowels: aa, oo, ee. Letters join along a line; six of them never join forward."
```

### 12 · closing
You just read four Arabic words. Next: words from al-Fatiha.

---

## Check
```yaml
- prompt: "What makes a long oo?"
  options:
    - text: "Damma, then و"
      correct: true
      feedback: "Right."
    - text: "Fatha, then ا"
      correct: false
      feedback: "That makes a long aa."
- prompt: "Which letters never join to the letter after them?"
  options:
    - text: "ا د ذ ر ز و"
      correct: true
      feedback: "Right. That's why some words have small gaps."
    - text: "ب ت ث"
      correct: false
      feedback: "Those join on both sides."
```

## AI guide context
**Lesson facts**
- Long vowels: fatha + ا (aa), kasra + ي (ii/ee), damma + و (uu/oo).
- Joining: most letters connect both sides; ا د ذ ر ز و connect only to the preceding letter.
- Words: باب baab (door), نور nuur (light), دين diin (religion), كتاب kitaab (book).
- No audio in this lesson yet.

**Likely questions**
- *"Do I need to read Arabic to pray?"* No. The main path teaches the prayer's phrases by heart, with transliteration. Reading helps over time.
- *"Can I learn from transliteration for now?"* Yes, as a bridge. Encourage moving to the Arabic script bit by bit, and learning with a teacher at the masjid.
- *"Does a pronunciation mistake ruin my prayer?"* A question for the imam: offer "Ask my imam". Learners are expected to be learning.

**Escalate:** tajweed rules beyond this lesson; whether specific recitation mistakes affect the prayer.

**Don't**
- Don't add rules this lesson hasn't taught.
- Don't make the convert feel behind. This track is optional.

## Sources
- Vowel marks, sukun, shadda and joining: [Arabic diacritics (Wikipedia)](https://en.wikipedia.org/wiki/Arabic_diacritics); [Arabic alphabet (Wikipedia)](https://en.wikipedia.org/wiki/Arabic_alphabet); [The Unicode Standard, ch. 9: Arabic](https://www.unicode.org/versions/Unicode15.0.0/ch09.pdf).
