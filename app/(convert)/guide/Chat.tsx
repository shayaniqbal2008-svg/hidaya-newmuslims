"use client";
import { useEffect, useRef, useState } from "react";
import type { Citation } from "@/lib/content/types";
import { Markdown } from "@/components/Markdown";
import { LessonExtrasProvider } from "@/components/lesson/extras";
import { askImam, raiseSafetyAlert, sendFeedback } from "./actions";

type Msg = {
  role: "user" | "assistant";
  text: string;
  askImam?: string | null;
  crisis?: boolean;
  citations?: Citation[];
};

export function Chat(props: {
  lessonId: string | null;
  roleplay: number | null;
  initialQuestion: string | null;
  hasFemaleStaff: boolean;
  isMale: boolean;
  hasMentor: boolean;
  responseHours: number;
}) {
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [threadId, setThreadId] = useState<string | null>(null);
  const [text, setText] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [rpDone, setRpDone] = useState(false);
  const started = useRef(false);
  const end = useRef<HTMLDivElement>(null);

  const send = async (message: string) => {
    if (!message.trim() || busy) return;
    setError(null);
    setBusy(true);
    setMsgs((m) => [...m, { role: "user", text: message }]);
    setText("");
    try {
      const res = await fetch("/api/guide", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ threadId, lessonId: props.lessonId, roleplay: props.roleplay, message }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error ?? "Something went wrong.");
      setThreadId(data.threadId);
      setMsgs((m) => [...m, { role: "assistant", text: data.reply, askImam: data.askImam, crisis: data.crisis, citations: data.citations }]);
    } catch (e) {
      setError((e as Error).message);
      setMsgs((m) => m.slice(0, -1));
      setText(message);
    } finally {
      setBusy(false);
    }
  };

  useEffect(() => {
    if (started.current) return;
    started.current = true;
    // Opening the guide from a lesson chip or role-play sends that first message right away, on purpose.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (props.roleplay) void send("I'm ready. Please start the practice as the other person.");
    else if (props.initialQuestion) void send(props.initialQuestion);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // Block body: Chrome 154+ returns a Promise from scrollIntoView, and React would call it as the cleanup.
  useEffect(() => {
    end.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [msgs, busy]);

  const allCitations = Object.fromEntries(msgs.flatMap((m) => m.citations ?? []).map((c) => [c.key, c]));

  return (
    <LessonExtrasProvider glossary={[]} citations={allCitations}>
      <div className="mt-5 space-y-4" aria-live="polite">
        {msgs.length === 0 && !busy && (
          <div className="rounded-2xl bg-surface p-5 text-muted">
            Ask anything: what a word means, how to pray when someone&apos;s home, what to say to your family. No question is
            too basic.
          </div>
        )}
        {msgs.map((m, i) =>
          m.role === "user" ? (
            <div key={i} className="ml-10 rounded-2xl rounded-br-md bg-tile px-4 py-3 text-surface">
              <p className="whitespace-pre-line">{m.text}</p>
            </div>
          ) : (
            <div key={i} className="mr-6">
              <div className={`rounded-2xl rounded-bl-md px-4 py-3 ${m.crisis ? "border-2 border-dawn bg-dawn-soft" : "bg-surface"}`}>
                <Markdown text={m.text} glossary={false} />
              </div>
              {m.crisis && (
                <SafetyButtons hasMentor={props.hasMentor} hasFemaleStaff={props.hasFemaleStaff} />
              )}
              {m.askImam && <AskImamCard draft={m.askImam} {...props} />}
              {!m.crisis && <Feedback q={msgs[i - 1]?.text ?? ""} a={m.text} />}
            </div>
          ),
        )}
        {busy && <p className="text-muted">Thinking…</p>}
        <div ref={end} />
      </div>

      {error && <p role="alert" className="mt-3 rounded-xl bg-gentle-soft px-4 py-3">{error}</p>}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          void send(text);
        }}
        className="sticky bottom-[calc(4rem+env(safe-area-inset-bottom))] mt-5 flex gap-2 bg-bg py-2"
      >
        <label htmlFor="guide-input" className="sr-only">
          Your message
        </label>
        <textarea
          id="guide-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              e.preventDefault();
              void send(text);
            }
          }}
          rows={1}
          maxLength={2000}
          placeholder={props.roleplay ? "Your reply…" : "Ask a question…"}
          className="min-h-12 flex-1 resize-none rounded-2xl border-2 border-line bg-surface px-4 py-3 focus:border-tile focus:outline-none"
        />
        <button disabled={busy || !text.trim()} className="rounded-2xl bg-tile px-5 font-bold text-surface disabled:opacity-40">
          Send
        </button>
      </form>
      {props.roleplay && !rpDone && msgs.length > 1 && (
        <button
          type="button"
          onClick={() => {
            setRpDone(true);
            void send("Let's stop the role-play here. How did I do?");
          }}
          className="btn btn-ghost text-muted"
        >
          Stop the role-play and get feedback
        </button>
      )}
    </LessonExtrasProvider>
  );
}

function AskImamCard({
  draft,
  hasFemaleStaff,
  isMale,
  responseHours,
}: {
  draft: string;
  hasFemaleStaff: boolean;
  isMale: boolean;
  responseHours: number;
}) {
  const [body, setBody] = useState(draft);
  const [anon, setAnon] = useState(false);
  const [female, setFemale] = useState(false);
  const [state, setState] = useState<"draft" | "sending" | "sent" | "error" | "dismissed">("draft");
  if (state === "dismissed") return null;
  if (state === "sent")
    return (
      <p role="status" className="mt-2 rounded-xl bg-tile-soft px-4 py-3">
        Sent. Your imam usually replies within {responseHours} hours. The answer will show at the bottom of this page.
      </p>
    );
  return (
    <div className="mt-2 rounded-2xl border-2 border-tile bg-surface p-4">
      <p className="font-bold">Ask your imam?</p>
      <p className="text-sm text-muted">Check the wording. Only what&apos;s in this box is sent, and only when you tap Send.</p>
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={3}
        maxLength={2000}
        className="mt-2 w-full rounded-xl border-2 border-line bg-bg p-3"
        aria-label="Question for your imam"
      />
      <label className="mt-2 flex items-center gap-2 text-[0.95rem]">
        <input type="checkbox" checked={anon} onChange={(e) => setAnon(e.target.checked)} className="h-5 w-5 accent-[var(--tile)]" />
        Send without my name
      </label>
      {hasFemaleStaff && !isMale && (
        <label className="mt-2 flex items-center gap-2 text-[0.95rem]">
          <input type="checkbox" checked={female} onChange={(e) => setFemale(e.target.checked)} className="h-5 w-5 accent-[var(--tile)]" />
          Send to a female staff member instead
        </label>
      )}
      {state === "error" && <p className="mt-2 text-gentle">That didn&apos;t send. Try again.</p>}
      <div className="mt-3 flex gap-2">
        <button
          type="button"
          disabled={state === "sending" || body.trim().length < 3}
          onClick={async () => {
            setState("sending");
            try {
              await askImam({ body, anonymous: anon, toFemaleStaff: female });
              setState("sent");
            } catch {
              setState("error");
            }
          }}
          className="flex-1 rounded-xl bg-tile py-2.5 font-bold text-surface disabled:opacity-40"
        >
          {state === "sending" ? "Sending…" : "Send to my imam"}
        </button>
        <button type="button" onClick={() => setState("dismissed")} className="px-3 text-muted underline">
          Not now
        </button>
      </div>
    </div>
  );
}

function SafetyButtons({ hasMentor, hasFemaleStaff }: { hasMentor: boolean; hasFemaleStaff: boolean }) {
  const [sent, setSent] = useState<string | null>(null);
  if (sent) return <p role="status" className="mt-2 rounded-xl bg-tile-soft px-4 py-3">{sent}</p>;
  return (
    <div className="mt-2 flex flex-col gap-2">
      <a href="tel:988" className="btn btn-primary">Call 988 now</a>
      {hasMentor && (
        <button
          type="button"
          onClick={async () => {
            await raiseSafetyAlert("mentor");
            setSent("Your mentor has been asked to check on you. If you're in danger, call 911.");
          }}
          className="rounded-xl border-2 border-tile py-3 font-bold text-tile"
        >
          Ask my mentor to check on me
        </button>
      )}
      {hasFemaleStaff && (
        <button
          type="button"
          onClick={async () => {
            await raiseSafetyAlert("female_staff");
            setSent("A female staff member has been asked to check on you. If you're in danger, call 911.");
          }}
          className="rounded-xl border-2 border-tile py-3 font-bold text-tile"
        >
          Ask a female staff member to check on me
        </button>
      )}
      <button type="button" onClick={() => setSent("Okay. Nothing was sent. The numbers above are there any time you need them.")} className="py-2 text-muted underline">
        Don&apos;t tell anyone
      </button>
    </div>
  );
}

function Feedback({ q, a }: { q: string; a: string }) {
  const [state, setState] = useState<"idle" | "asking" | "done">("idle");
  const [share, setShare] = useState(false);
  const [helpful, setHelpful] = useState(true);
  if (state === "done") return <p className="mt-1 text-xs text-muted">Thanks for the feedback.</p>;
  if (state === "asking")
    return (
      <div className="mt-2 rounded-xl bg-surface p-3 text-sm">
        <label className="flex items-start gap-2">
          <input type="checkbox" checked={share} onChange={(e) => setShare(e.target.checked)} className="mt-0.5 accent-[var(--tile)]" />
          Also send this question and answer to the program team to improve the guide (nobody else sees it)
        </label>
        <button
          type="button"
          onClick={async () => {
            await sendFeedback({ helpful, exchange: share ? { q, a } : null });
            setState("done");
          }}
          className="mt-2 rounded-lg bg-tile px-3 py-1.5 font-bold text-surface"
        >
          Send feedback
        </button>
      </div>
    );
  return (
    <div className="mt-1 flex gap-3 text-xs text-muted">
      <span>Helpful?</span>
      <button type="button" onClick={() => { setHelpful(true); setState("asking"); }} className="underline">Yes</button>
      <button type="button" onClick={() => { setHelpful(false); setState("asking"); }} className="underline">No</button>
    </div>
  );
}
