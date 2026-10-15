import Link from "next/link";
import { notFound } from "next/navigation";
import { getIndex } from "@/lib/content/load";

export const dynamic = "force-dynamic";

export default function PreviewIndex() {
  if (process.env.NODE_ENV === "production" && process.env.PREVIEW_ENABLED !== "1") notFound();
  const { lessons } = getIndex();
  return (
    <main className="mx-auto max-w-lg px-5 py-8">
      <h1 className="text-2xl font-bold">Lesson preview</h1>
      <p className="mt-1 text-muted">Add ?madhab=none for the school-neutral text, &amp;minor=1 for teen lines.</p>
      <ul className="mt-6 divide-y divide-line">
        {lessons.map((l) => (
          <li key={l.id}>
            <Link href={`/preview/${l.id}`} className="flex gap-3 py-3">
              <span className="w-24 shrink-0 text-muted">{l.day ? `Day ${l.day}` : l.module}</span>
              <span className="font-bold">{l.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
