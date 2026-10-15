"use client";
import { useActionState, useState } from "react";
import { completeSignup, type FormState } from "../actions";

const input = "w-full rounded-xl border-2 border-line bg-surface px-4 py-3 text-lg focus:border-tile focus:outline-none";

export function SignupForm({ masjid, invite }: { masjid: string; invite: string }) {
  const [state, action, pending] = useActionState<FormState, FormData>(completeSignup, {});
  const [share, setShare] = useState(true);
  const [year, setYear] = useState("");
  const thisYear = new Date().getFullYear();
  const age = year ? thisYear - Number(year) : null;
  const tz = typeof Intl !== "undefined" ? Intl.DateTimeFormat().resolvedOptions().timeZone : "America/Chicago";

  return (
    <form action={action} className="space-y-6">
      <input type="hidden" name="invite" value={invite} />
      <input type="hidden" name="timezone" value={tz} />
      <label className="block">
        <span className="mb-1 block font-bold">First name</span>
        <input name="first_name" required maxLength={40} autoComplete="given-name" className={input} />
        <span className="mt-1 block text-sm text-muted">Only your first name. A nickname is fine.</span>
      </label>
      <label className="block">
        <span className="mb-1 block font-bold">Year you were born</span>
        <input
          name="birth_year"
          required
          inputMode="numeric"
          pattern="[0-9]{4}"
          maxLength={4}
          value={year}
          onChange={(e) => setYear(e.target.value.replace(/\D/g, ""))}
          className={input}
        />
        <span className="mt-1 block text-sm text-muted">
          Just the year. Some lessons have extra advice for people under 18.
        </span>
      </label>
      {age === 13 && (
        <label className="flex items-start gap-3">
          <input type="checkbox" name="over13" required className="mt-1 h-5 w-5 accent-[var(--tile)]" />
          <span>I&apos;m 13 or older.</span>
        </label>
      )}
      <fieldset>
        <legend className="mb-2 font-bold">Are you a man or a woman? (optional)</legend>
        <div className="flex gap-3">
          {[
            ["male", "Man"],
            ["female", "Woman"],
            ["", "Skip"],
          ].map(([v, l]) => (
            <label key={v} className="flex flex-1 items-center gap-2 rounded-xl border-2 border-line bg-surface px-3 py-3 has-checked:border-tile">
              <input type="radio" name="gender" value={v} defaultChecked={v === ""} className="accent-[var(--tile)]" />
              {l}
            </label>
          ))}
        </div>
        <p className="mt-1 text-sm text-muted">Some practices differ for men and women. This helps your guide answer for you.</p>
      </fieldset>
      <label className="block">
        <span className="mb-1 block font-bold">When did you take your shahada? (optional)</span>
        <input name="shahada_date" type="date" max={new Date().toISOString().slice(0, 10)} className={input} />
      </label>

      <fieldset className="rounded-2xl border border-line bg-surface p-5">
        <legend className="px-1 font-bold">What {masjid} can see</legend>
        <p className="mb-4 text-[0.95rem] text-muted">
          Your mentor can support you better if they know how you&apos;re doing. You decide, and you can change it any time.
          Your chats with the guide and your private notes are never shared.
        </p>
        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            name="share_progress"
            checked={share}
            onChange={(e) => setShare(e.target.checked)}
            className="mt-1 h-5 w-5 accent-[var(--tile)]"
          />
          <span>
            <strong>Share my progress</strong>: my first name, which day I&apos;m on, and when I was last active.
          </span>
        </label>
        <label className={`mt-3 flex items-start gap-3 ${share ? "" : "opacity-50"}`}>
          <input type="checkbox" name="share_logs" defaultChecked disabled={!share} className="mt-1 h-5 w-5 accent-[var(--tile)]" />
          <span>
            <strong>Share milestones</strong> I tick, like &ldquo;prayed my first prayer&rdquo; or &ldquo;visited the masjid&rdquo;
            {age !== null && age <= 18 ? " (for under-18s, milestones stay private either way)" : ""}.
          </span>
        </label>
      </fieldset>

      <p className="text-sm text-muted">
        Notifications use plain wording like &ldquo;Time for today&apos;s lesson&rdquo;, so nothing on your lock screen says what the
        app is about. You can turn this off in Settings.
      </p>
      {state.error && <p role="alert" className="rounded-xl bg-gentle-soft px-4 py-3">{state.error}</p>}
      <button disabled={pending} className="btn btn-primary">
        {pending ? "Saving…" : "Start Day 1"}
      </button>
    </form>
  );
}
