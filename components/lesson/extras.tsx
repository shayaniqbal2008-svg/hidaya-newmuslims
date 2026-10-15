"use client";
// Glossary popups and scripture sheets, shared by every screen in a lesson.
import { createContext, useState, type ReactNode } from "react";
import type { Citation, GlossaryEntry } from "@/lib/content/types";
import { Sheet } from "../Sheet";

type Extras = {
  glossary: GlossaryEntry[];
  openGlossary?: (term: string) => void;
  openCitation?: (keys: string[], label: string) => void;
};

export const LessonExtrasContext = createContext<Extras>({ glossary: [] });

export function LessonExtrasProvider({
  glossary,
  citations,
  children,
}: {
  glossary: GlossaryEntry[];
  citations: Record<string, Citation>;
  children: ReactNode;
}) {
  const [term, setTerm] = useState<GlossaryEntry | null>(null);
  const [cite, setCite] = useState<{ label: string; items: Citation[] } | null>(null);

  const openGlossary = (t: string) => setTerm(glossary.find((g) => g.term.toLowerCase() === t) ?? null);
  const openCitation = (keys: string[], label: string) =>
    setCite({ label, items: keys.map((k) => citations[k]).filter(Boolean) });

  return (
    <LessonExtrasContext value={{ glossary, openGlossary, openCitation }}>
      {children}
      <Sheet open={!!term} onClose={() => setTerm(null)} title={term?.term ?? ""}>
        {term && (
          <>
            <p className="arabic text-3xl text-ink">{term.arabic}</p>
            <p className="mt-2">{term.meaning}</p>
          </>
        )}
      </Sheet>
      <Sheet open={!!cite} onClose={() => setCite(null)} title={cite?.label ?? ""}>
        {cite && cite.items.length === 0 && <p className="text-muted">This reference is listed in the lesson sources.</p>}
        {cite?.items.map((c) => (
          <div key={c.key} className="mb-6 last:mb-0">
            <p className="arabic text-2xl leading-loose">{c.arabic.length > 900 ? c.arabic.slice(0, 900) + "…" : c.arabic}</p>
            <p className="mt-3 whitespace-pre-line">
              {c.kind === "quran" ? `“${c.english}”` : c.english.length > 1500 ? c.english.slice(0, 1500) + "…" : c.english}
            </p>
            <p className="mt-2 text-sm text-muted">
              {c.key}
              {c.kind === "quran" ? ", Saheeh International translation" : c.grade ? `, graded ${c.grade}` : ""} ·{" "}
              <a href={c.url} target="_blank" rel="noopener noreferrer" className="underline">
                read in full
              </a>
            </p>
          </div>
        ))}
      </Sheet>
    </LessonExtrasContext>
  );
}
