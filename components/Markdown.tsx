"use client";
// A deliberately small markdown renderer for lesson text. It builds React elements (never raw HTML),
// handles what the lessons use (paragraphs, lists, quotes, bold, italic, links), and makes two things
// tappable: glossary terms (first use on the screen) and scripture references like [Q 2:186].
import { createContext, Fragment, useContext, useId, type ReactNode } from "react";
import { findRefs, refKeys } from "@/lib/content/citations";
import { LessonExtrasContext } from "./lesson/extras";

/** Inside a button (answer cards, ticks), text can't hold its own buttons: references show as plain text. */
const InertContext = createContext(false);

type Props = { text: string; className?: string; glossary?: boolean; inert?: boolean };

export function Markdown({ text, className, glossary = true, inert = false }: Props) {
  if (inert)
    return (
      <InertContext value={true}>
        <Markdown text={text} className={className} glossary={false} />
      </InertContext>
    );
  const seen = new Set<string>();
  const blocks = text.trim().split(/\n{2,}/);
  return (
    <div className={className}>
      {blocks.map((b, i) => (
        <Block key={i} text={b} seen={glossary ? seen : null} />
      ))}
    </div>
  );
}

function Block({ text, seen }: { text: string; seen: Set<string> | null }) {
  const lines = text.split("\n");
  if (lines.every((l) => /^\s*[-*] /.test(l))) {
    return (
      <ul className="my-3 list-disc space-y-1 pl-5">
        {lines.map((l, i) => (
          <li key={i}>
            <Inline text={l.replace(/^\s*[-*] /, "")} seen={seen} />
          </li>
        ))}
      </ul>
    );
  }
  if (lines.every((l) => /^\s*\d+\. /.test(l))) {
    return (
      <ol className="my-3 list-decimal space-y-1 pl-5">
        {lines.map((l, i) => (
          <li key={i}>
            <Inline text={l.replace(/^\s*\d+\. /, "")} seen={seen} />
          </li>
        ))}
      </ol>
    );
  }
  if (lines.every((l) => l.startsWith(">"))) {
    return (
      <blockquote className="my-3 border-l-4 border-dawn pl-4 italic">
        <Inline text={lines.map((l) => l.replace(/^>\s?/, "")).join(" ")} seen={seen} />
      </blockquote>
    );
  }
  return (
    <p className="my-3 first:mt-0 last:mb-0">
      {lines.map((l, i) => (
        <Fragment key={i}>
          {i > 0 && <br />}
          <Inline text={l} seen={seen} />
        </Fragment>
      ))}
    </p>
  );
}

// Order matters: links, references, bold-italic, bold, italic, code.
const TOKEN =
  /(\[([^\]]+)\]\((https?:\/\/[^)\s]+)\))|(\[([^\]]*\d[^\]]*)\])|(\*\*\*([^*]+)\*\*\*)|(\*\*([^*]+)\*\*)|(\*([^*]+)\*)|(_([^_]+)_)|(`([^`]+)`)/g;

export function Inline({ text, seen }: { text: string; seen: Set<string> | null }): ReactNode {
  const out: ReactNode[] = [];
  let last = 0;
  let k = 0;
  for (const m of text.matchAll(TOKEN)) {
    if (m.index! > last) out.push(<Glossed key={k++} text={text.slice(last, m.index)} seen={seen} />);
    if (m[1]) {
      out.push(
        <a key={k++} href={m[3]} target="_blank" rel="noopener noreferrer" className="text-tile underline underline-offset-2">
          {m[2]}
        </a>,
      );
    } else if (m[4]) {
      const refs = findRefs(m[5]);
      out.push(
        refs.length ? (
          <RefChip key={k++} label={m[5]} keys={refs.flatMap(refKeys)} />
        ) : (
          // A web source (e.g. IslamQA 11575, Qalam ep. 12): kept visible for honesty, but quiet.
          <span key={k++} className="text-[0.8em] text-muted">
            {m[5]}
          </span>
        ),
      );
    } else if (m[6]) {
      out.push(
        <strong key={k++}>
          <em>
            <Inline text={m[7]} seen={seen} />
          </em>
        </strong>,
      );
    } else if (m[8]) {
      out.push(
        <strong key={k++}>
          <Inline text={m[9]} seen={seen} />
        </strong>,
      );
    } else if (m[10] || m[12]) {
      out.push(
        <em key={k++}>
          <Inline text={m[11] ?? m[13]} seen={seen} />
        </em>,
      );
    } else if (m[14]) {
      out.push(<Fragment key={k++}>{m[15]}</Fragment>);
    }
    last = m.index! + m[0].length;
  }
  if (last < text.length) out.push(<Glossed key={k++} text={text.slice(last)} seen={seen} />);
  return <>{out}</>;
}

function escapeRe(s: string) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/** Plain text with the first use of each glossary term made tappable. */
function Glossed({ text, seen }: { text: string; seen: Set<string> | null }) {
  const { glossary, openGlossary } = useContext(LessonExtrasContext);
  // Each piece of text claims a term the first time it renders and keeps it on every re-render
  // (React may render twice, and context changes re-render), so the underline never moves or vanishes.
  const me = useId();
  if (!seen || !glossary.length || !openGlossary) return <>{text}</>;
  const terms = glossary
    .map((g) => g.term)
    .filter((t) => t.length > 1 && !/^[^\w]+$/.test(t))
    .sort((a, b) => b.length - a.length);
  if (!terms.length) return <>{text}</>;
  const re = new RegExp(`(?<![\\w'])(${terms.map(escapeRe).join("|")})(?![\\w'])`, "gi");
  const out: ReactNode[] = [];
  let last = 0;
  let k = 0;
  const mine = new Set<string>();
  for (const m of text.matchAll(re)) {
    const key = m[1].toLowerCase();
    const claim = `${key}\u0000${me}`;
    const owned = [...seen].find((x) => x.startsWith(`${key}\u0000`));
    if ((owned && owned !== claim) || mine.has(key)) continue;
    if (!owned) seen.add(claim);
    mine.add(key);
    if (m.index! > last) out.push(text.slice(last, m.index));
    out.push(
      <button
        key={k++}
        type="button"
        onClick={() => openGlossary(key)}
        className="cursor-help underline decoration-dawn decoration-2 underline-offset-4"
      >
        {m[1]}
      </button>,
    );
    last = m.index! + m[0].length;
  }
  if (!out.length) return <>{text}</>;
  out.push(text.slice(last));
  return <>{out}</>;
}

function RefChip({ label, keys }: { label: string; keys: string[] }) {
  const { openCitation } = useContext(LessonExtrasContext);
  const inert = useContext(InertContext);
  if (!openCitation || inert) return <span className="text-muted">[{label}]</span>;
  return (
    <button
      type="button"
      onClick={() => openCitation(keys, label)}
      data-ref className="mx-0.5 rounded-md bg-tile-soft px-1.5 py-0.5 text-[0.85em] font-bold text-tile"
    >
      {label}
    </button>
  );
}
