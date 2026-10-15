// The AI guide: chat, role-play, and the convert's questions to their imam with any answers.
import Link from "next/link";
import { getLesson } from "@/lib/content/load";
import { getMe } from "@/lib/dal";
import { supabaseServer } from "@/lib/supabase/server";
import { Chat } from "./Chat";

export default async function GuidePage({ searchParams }: PageProps<"/guide">) {
  const me = await getMe();
  const sp = await searchParams;
  const lessonId = typeof sp.lesson === "string" ? sp.lesson : null;
  const lesson = lessonId ? getLesson(lessonId) : null;
  // Opened from a lesson: offer a way straight back to the same screen (Checkpoint 4, bug B1).
  const from = typeof sp.from === "string" && /^\/lesson\/[a-z0-9-]+\?s=\d+$/.test(sp.from) ? sp.from : null;
  const rp = typeof sp.roleplay === "string" ? Number(sp.roleplay) : null;
  const roleplay = lesson && rp ? lesson.screens.find((s) => s.n === rp && s.type === "roleplay") : null;
  const supabase = await supabaseServer();
  const { data: questions } = await supabase
    .from("imam_questions")
    .select("id, body, status, answer, answered_at, created_at, due_at")
    .order("created_at", { ascending: false })
    .limit(20);

  return (
    <main className="mx-auto flex w-full max-w-lg flex-col px-5 pt-[max(1.5rem,env(safe-area-inset-top))] pb-4">
      {from && (
        <Link href={from} className="mb-3 inline-flex items-center gap-1.5 self-start rounded-full border-2 border-line bg-surface px-4 py-1.5 font-extrabold text-cobalt">
          <span aria-hidden>←</span> Back to the lesson
        </Link>
      )}
      <h1 className="font-display text-[1.8rem]">{roleplay ? "Practice conversation" : "Ask your guide"}</h1>
      <p className="mt-1 text-[0.95rem] text-muted">
        {lesson ? `About: ${lesson.title}. ` : ""}
        An AI that knows your lessons. It can be wrong, so for anything personal it&apos;ll help you ask your imam. Private:{" "}
        {me.masjid.name} can&apos;t read this.
      </p>
      <Chat
        key={`${lessonId}-${rp}`}
        lessonId={lesson?.id ?? null}
        roleplay={roleplay ? rp : null}
        initialQuestion={typeof sp.q === "string" ? sp.q.slice(0, 300) : null}
        hasFemaleStaff={me.masjid.has_female_staff}
        isMale={me.convert.gender === "male"}
        hasMentor={!!me.convert.mentor_id}
        responseHours={me.masjid.imam_response_hours}
      />
      {!!questions?.length && (
        <section className="mt-10">
          <h2 className="text-lg font-bold">Your questions to the imam</h2>
          <ul className="mt-3 space-y-3">
            {questions.map((q) => (
              <li key={q.id} className="rounded-2xl border border-line bg-surface p-4">
                <p className="whitespace-pre-line">{q.body}</p>
                {q.answer ? (
                  <div className="mt-3 rounded-xl bg-tile-soft p-3">
                    <p className="text-sm font-bold text-tile">Answer</p>
                    <p className="whitespace-pre-line">{q.answer}</p>
                  </div>
                ) : (
                  <p className="mt-2 text-sm text-muted">
                    Waiting for a reply, usually by {new Date(q.due_at).toLocaleDateString(undefined, { weekday: "long" })}.
                  </p>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  );
}
