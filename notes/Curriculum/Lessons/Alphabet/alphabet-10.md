---
track: alphabet
order: 10
phase: null
unit: null
title: "Stop and double: sukun and shadda"
hook: "Two more marks: one says stop, one says double."
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
# alphabet-10 · Stop and double: sukun and shadda

### 1 · hook
```yaml
pic: icon:Languages
text: "**Two more marks, then you can read words.** One tells you to stop a sound, one tells you to double it. Both show up in the very first lines of the Quran."
```

### 2 · learn
```yaml
pic: icon:BookOpenText
text: "**Sukun: a small circle** above a letter means no vowel. Just stop on the sound. That is how syllables close, like the n at the end of min (from)."
```

### 3 · reveal
```yaml
title: "Tap each card"
cards:
  - front: "بْ"
    back: "b: sukun, no vowel"
    rtl: true
  - front: "مِنْ"
    back: "min: \"from\". The n has a sukun"
    rtl: true
  - front: "لَمْ"
    back: "lam: the m has a sukun"
    rtl: true
```

### 4 · choice
```yaml
prompt: "How do you read مِنْ?"
options:
  - text: "min"
    correct: true
    feedback: "Yes. The circle on the n means stop: min."
  - text: "mina"
    correct: false
    feedback: "The circle on the n means no vowel after it."
  - text: "mun"
    correct: false
    feedback: "The line under m is kasra: i, so it's min."
```

### 5 · learn
```yaml
pic: icon:Lightbulb
text: "**Shadda: a small w-shape** above a letter means say it twice, holding it a moment. In al-Fatiha, rabbi (Lord) has a shadda on the b: rab-bi, not ra-bi."
```

### 6 · reveal
```yaml
title: "Hear it in your head"
cards:
  - front: "رَبِّ"
    back: "rab-bi: Lord. The b is doubled"
    rtl: true
  - front: "بَّ"
    back: "bba: doubled b, then a"
    rtl: true
```

### 7 · choice
```yaml
prompt: "Which mark tells you to double a letter?"
options:
  - text: "The small w-shape (shadda)"
    correct: true
    feedback: "Right. Shadda doubles the letter."
  - text: "The small circle (sukun)"
    correct: false
    feedback: "Sukun means stop, no vowel."
  - text: "The line above (fatha)"
    correct: false
    feedback: "Fatha is the vowel a."
```

### 8 · match
```yaml
prompt: "Match each to how it sounds."
pairs:
  - left: "بْ"
    right: "b (stop)"
  - left: "بَّ"
    right: "bba (doubled)"
  - left: "بِ"
    right: "bi"
  - left: "بُ"
    right: "bu"
```

### 9 · ask_ai
```yaml
chips:
  - "Why does shadda matter?"
  - "Where will I see sukun in the prayer?"
  - "What's tajweed?"
```

### 10 · do_today
```yaml
pic: icon:PenLine
text: "Write min and rabbi in Arabic, copying from this lesson. Say each one slowly."
log: null
```

### 11 · takeaway
```yaml
pic: icon:Sparkles
text: "Small circle (sukun): stop. Small w-shape (shadda): say it twice."
```

### 12 · closing
With these marks, you can sound out real Arabic words.

---

## Check
```yaml
- prompt: "What does sukun (a small circle) mean?"
  options:
    - text: "No vowel: stop on the sound"
      correct: true
      feedback: "Right."
    - text: "Say the letter twice"
      correct: false
      feedback: "That's shadda, the small w-shape."
- prompt: "How is rabbi (Lord) said?"
  options:
    - text: "rab-bi, with the b held"
      correct: true
      feedback: "Right. The shadda doubles the b."
    - text: "ra-bi"
      correct: false
      feedback: "The shadda on the b doubles it: rab-bi."
```

## AI guide context
**Lesson facts**
- Sukun (small circle): the letter carries no vowel, closing the syllable (min, lam).
- Shadda (small w-shape): the letter is doubled (geminated); a vowel mark usually sits with it. Example: rabbi in Q 1:2.
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
