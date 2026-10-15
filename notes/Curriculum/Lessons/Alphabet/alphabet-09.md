---
track: alphabet
order: 9
phase: null
unit: null
title: "Three small marks: a, i, u"
hook: "The tiny marks that tell you which vowel to say."
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
# alphabet-09 · Three small marks: a, i, u

### 1 · hook
```yaml
pic: icon:Languages
text: "**Letters, meet vowels.** You know all 28 letters. Now meet three small marks that tell you how to say them. They turn ب into ba, bi or bu. No audio yet for these: read the sound hints."
```

### 2 · learn
```yaml
pic: icon:BookOpenText
text: "**Three short vowels.** A slanted line above a letter is fatha: say a. The same line below is kasra: say i. A small curl above is damma: say u."
```

### 3 · reveal
```yaml
title: "Tap each card"
cards:
  - front: "بَ"
    back: "ba: fatha, the line above"
    rtl: true
  - front: "بِ"
    back: "bi: kasra, the line below"
    rtl: true
  - front: "بُ"
    back: "bu: damma, the curl above"
    rtl: true
```

### 4 · choice
```yaml
prompt: "Which one says \"bi\"?"
options:
  - text: "بِ"
    correct: true
    feedback: "Yes. The line below is kasra: i."
  - text: "بَ"
    correct: false
    feedback: "That's ba: the line is above."
  - text: "بُ"
    correct: false
    feedback: "That's bu: the curl is damma."
```

### 5 · learn
```yaml
pic: icon:Lightbulb
text: "**Where you will see them.** Everyday Arabic often leaves these marks out, and readers fill them in. Printed copies of the Quran include them, so everything you need to read is right there on the page."
```

### 6 · choice
```yaml
prompt: "Which one says \"tu\"?"
options:
  - text: "تُ"
    correct: true
    feedback: "Yes. The curl above is damma: u."
  - text: "تَ"
    correct: false
    feedback: "That's ta: fatha, the line above."
  - text: "تِ"
    correct: false
    feedback: "That's ti: kasra, the line below."
```

### 7 · match
```yaml
prompt: "Match each to how it sounds."
pairs:
  - left: "سِ"
    right: "si"
  - left: "نُ"
    right: "nu"
  - left: "كَ"
    right: "ka"
  - left: "لِ"
    right: "li"
```

### 8 · choice
```yaml
prompt: "A letter has a small line underneath it. Which vowel do you say?"
options:
  - text: "i"
    correct: true
    feedback: "Right. A line below is kasra: i."
  - text: "a"
    correct: false
    feedback: "A line above would be a. Below is i."
  - text: "u"
    correct: false
    feedback: "U is the small curl above."
```

### 9 · ask_ai
```yaml
chips:
  - "Why does Arabic leave vowels out?"
  - "How do I say the a in fatha?"
  - "What comes after short vowels?"
```

### 10 · do_today
```yaml
pic: icon:PenLine
text: "Write ب with each vowel: ba, bi, bu. Then try م: ma, mi, mu."
log: null
```

### 11 · takeaway
```yaml
pic: icon:Sparkles
text: "Line above: a. Line below: i. Small curl above: u."
```

### 12 · closing
Letters plus vowels: you can sound out syllables now.

---

## Check
```yaml
- prompt: "What does a small curl above a letter mean?"
  options:
    - text: "Say u (damma)"
      correct: true
      feedback: "Right."
    - text: "Say a"
      correct: false
      feedback: "A is a straight line above (fatha)."
    - text: "Say i"
      correct: false
      feedback: "I is a line below (kasra)."
- prompt: "Why are vowel marks often missing in everyday Arabic?"
  options:
    - text: "Readers fill them in from the words they know"
      correct: true
      feedback: "Right. The Quran's printed text keeps them."
    - text: "They aren't part of Arabic"
      correct: false
      feedback: "They are. They're just often left out of everyday writing."
```

## AI guide context
**Lesson facts**
- Short vowels: fatha (a, stroke above), kasra (i, stroke below), damma (u, small waw-shaped curl above).
- Everyday writing usually omits them; printed mushafs are fully vowelled.
- No audio in this lesson yet (Hidaya will record the syllables).

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
