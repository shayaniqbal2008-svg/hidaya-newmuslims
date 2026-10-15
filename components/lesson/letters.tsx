"use client";
// Meet a few Arabic letters: the big letter, its name and sound, and its shapes at the start, middle
// and end of a word. Tap through every letter to continue.
import { useEffect, useState } from "react";
import { Volume2 } from "lucide-react";
import { motion } from "motion/react";
import { letterForms, letterInfo, type LetterInfo } from "@/lib/content/alphabet";
import { makeGate } from "@/lib/audio-play";
import { playClip } from "./audio";

// The line beside each shape (ـ) is where it joins the next or previous letter.
const SHAPES = [
  ["isolated", "On its own"],
  ["initial", "At the start of a word"],
  ["medial", "In the middle of a word"],
  ["final", "At the end of a word"],
] as const;

export function Letters({ ready, letters }: { ready: () => void; letters: string[] }) {
  const list = letters.map(letterInfo).filter((l): l is LetterInfo => !!l);
  const [k, setK] = useState(0);
  const [seen, setSeen] = useState<Set<number>>(() => new Set([0]));
  const [noAudio, setNoAudio] = useState(false);
  // Ignore results of plays that a newer tap or a letter switch has superseded.
  const [gate] = useState(makeGate);
  // A single letter is done once it's been seen.
  useEffect(() => {
    if (list.length === 1) ready();
  }, [list.length, ready]);
  if (!list.length) return null;
  const l = list[k];
  const forms = letterForms(l);

  const show = (i: number) => {
    setK(i);
    gate.invalidate();
    setNoAudio(false);
    const next = new Set(seen).add(i);
    setSeen(next);
    if (next.size === list.length) ready();
  };
  const play = async () => {
    if (!l.audio) return;
    const isCurrent = gate.begin();
    setNoAudio(false);
    const ok = await playClip(l.audio);
    if (isCurrent()) setNoAudio(!ok);
  };
  return (
    <div>
      {list.length > 1 && (
        <div className="mb-3 flex justify-center gap-2" dir="rtl">
          {list.map((x, i) => (
            <button
              key={x.char}
              type="button"
              onClick={() => show(i)}
              aria-label={`Letter ${x.name}`}
              aria-pressed={i === k}
              className={`arabic h-14 w-14 rounded-2xl border-2 text-3xl leading-none ${
                i === k ? "border-cobalt bg-cobalt-soft" : seen.has(i) ? "border-tile bg-tile-soft" : "border-line bg-surface"
              }`}
              lang="ar"
            >
              {x.char}
            </button>
          ))}
        </div>
      )}
      <motion.div key={l.char} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl border-2 border-line bg-surface p-4 text-center">
        <p className="arabic text-[4.5rem]" style={{ lineHeight: 1.5 }} lang="ar">
          {l.char}
        </p>
        <p className="font-display text-2xl">
          {l.name} <span className="ml-1 rounded-full bg-dawn-soft px-2 py-0.5 align-middle text-sm font-extrabold">{l.translit}</span>
        </p>
        <p className="mt-1 text-[0.95rem] text-muted">{l.hint}</p>
        {l.audio && (
          <button type="button" onClick={play} className="mt-3 inline-flex items-center gap-2 rounded-full bg-cobalt px-4 py-2 font-extrabold text-white">
            <Volume2 size={18} aria-hidden /> Hear it
          </button>
        )}
        {noAudio && <p className="mt-2 text-sm text-muted">The sound didn&apos;t load. Try again in a moment.</p>}
        {Object.keys(forms).length > 1 && (
          <div className="mt-4 border-t-2 border-line pt-3 text-left">
            <p className="text-sm font-bold">Arabic letters join up, so the shape changes with where it sits in a word:</p>
            <ul className="mt-2 divide-y divide-line">
              {SHAPES.filter(([key]) => forms[key]).map(([key, label]) => (
                <li key={key} className="flex items-center justify-between gap-3 py-1">
                  <span className="text-sm text-muted">{label}</span>
                  <span className="arabic text-[2rem]" style={{ lineHeight: 1.3 }} lang="ar">
                    {forms[key]}
                  </span>
                </li>
              ))}
            </ul>
            {!l.joins && <p className="mt-1 text-sm text-muted">It never joins to the letter after it, so it has no start or middle shape.</p>}
          </div>
        )}
      </motion.div>
      {list.length > 1 && k < list.length - 1 && (
        <button type="button" onClick={() => show(k + 1)} className="mt-3 w-full rounded-2xl border-2 border-line py-2 font-extrabold text-cobalt">
          Next letter
        </button>
      )}
    </div>
  );
}
