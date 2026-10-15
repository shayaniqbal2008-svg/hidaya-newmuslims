"use client";
import { useActionState, useState } from "react";
import type { Me } from "@/lib/dal";
import { saveSettings, type SettingsState } from "./actions";

const input = "w-full rounded-xl border-2 border-line bg-surface px-4 py-3 focus:border-tile focus:outline-none";

export function SettingsForm({ me }: { me: Me }) {
  const [state, action, pending] = useActionState<SettingsState, FormData>(saveSettings, {});
  const [share, setShare] = useState(me.settings.share_progress);
  return (
    <form action={action} className="mt-6 space-y-6">
      <input type="hidden" name="timezone" value={me.convert.timezone} />
      <label className="block">
        <span className="mb-1 block font-bold">First name</span>
        <input name="first_name" defaultValue={me.convert.first_name} maxLength={40} className={input} />
      </label>
      <label className="block">
        <span className="mb-1 block font-bold">Show me guidance for</span>
        <select name="gender" defaultValue={me.convert.gender ?? ""} className={input}>
          <option value="">Both (not set)</option>
          <option value="male">Men</option>
          <option value="female">Women</option>
        </select>
        <span className="mt-1 block text-sm text-muted">A few things in prayer differ for men and women. Private.</span>
      </label>

      <fieldset className="rounded-2xl border border-line bg-surface p-5">
        <legend className="px-1 font-bold">What {me.masjid.name} can see</legend>
        <label className="flex items-start gap-3">
          <input type="checkbox" name="share_progress" checked={share} onChange={(e) => setShare(e.target.checked)} className="mt-1 h-5 w-5 accent-[var(--tile)]" />
          <span>My first name, which day I&apos;m on, and when I was last active</span>
        </label>
        <label className={`mt-3 flex items-start gap-3 ${share ? "" : "opacity-50"}`}>
          <input type="checkbox" name="share_logs" defaultChecked={me.settings.share_logs} disabled={!share} className="mt-1 h-5 w-5 accent-[var(--tile)]" />
          <span>Milestones I tick{me.isMinor ? " (stay private for under-18s either way)" : ""}</span>
        </label>
        <p className="mt-3 text-sm text-muted">Chats with the guide and private notes are never shared.</p>
      </fieldset>

      <fieldset className="rounded-2xl border border-line bg-surface p-5">
        <legend className="px-1 font-bold">Daily reminder</legend>
        <div className="flex gap-3">
          <label className="flex-1">
            <span className="mb-1 block text-sm text-muted">Time</span>
            <input type="time" name="reminder_time" defaultValue={me.settings.reminder_time.slice(0, 5)} className={input} />
          </label>
          <label className="flex-1">
            <span className="mb-1 block text-sm text-muted">How</span>
            <select name="reminder_channel" defaultValue={me.settings.reminder_channel} className={input}>
              <option value="both">Phone and email</option>
              <option value="push">Phone only</option>
              <option value="email">Email only</option>
              <option value="none">No reminders</option>
            </select>
          </label>
        </div>
      </fieldset>

      <fieldset className="rounded-2xl border border-line bg-surface p-5">
        <legend className="px-1 font-bold">Streak and celebrations</legend>
        <label className="flex items-start gap-3">
          <input type="checkbox" name="show_streak" defaultChecked={me.settings.show_streak ?? true} className="mt-1 h-5 w-5 accent-[var(--tile)]" />
          <span>
            <strong>Show my streak</strong>: the flame and XP on Learn, and the streak screen after a lesson. Turn it off if counting
            days gets in the way.
          </span>
        </label>
        <label className="mt-3 flex items-start gap-3">
          <input type="checkbox" name="calm_celebrations" defaultChecked={me.settings.calm_celebrations ?? false} className="mt-1 h-5 w-5 accent-[var(--tile)]" />
          <span>
            <strong>Calm celebrations</strong>: gentle fades instead of confetti and bouncing.
          </span>
        </label>
        <label className={`mt-3 flex items-start gap-3 ${me.settings.discreet_mode ? "opacity-50" : ""}`}>
          <input
            type="checkbox"
            name="celebration_sounds"
            defaultChecked={me.settings.celebration_sounds ?? false}
            disabled={me.settings.discreet_mode}
            className="mt-1 h-5 w-5 accent-[var(--tile)]"
          />
          <span>
            <strong>Celebration sounds</strong>: a soft chime on streak days.{me.settings.discreet_mode ? " Off while discreet mode is on." : ""}
          </span>
        </label>
      </fieldset>

      <fieldset className="rounded-2xl border border-line bg-surface p-5">
        <legend className="px-1 font-bold">Privacy on this phone</legend>
        <label className="flex items-start gap-3">
          <input type="checkbox" name="discreet_mode" defaultChecked={me.settings.discreet_mode} className="mt-1 h-5 w-5 accent-[var(--tile)]" />
          <span>
            <strong>Discreet mode</strong>: the app shows as &ldquo;Daily&rdquo; instead of Hidaya on your home screen, browser tab and
            notifications, with plain wording (&ldquo;Time for today&apos;s lesson&rdquo;) and nothing religious on your lock screen.
          </span>
        </label>
        <label className="mt-4 block">
          <span className="mb-1 block text-sm text-muted">The Exit button in lessons jumps to</span>
          <input name="quick_exit_url" type="url" defaultValue={me.settings.quick_exit_url} className={input} />
        </label>
      </fieldset>

      {state.error && <p role="alert" className="rounded-xl bg-gentle-soft px-4 py-3">{state.error}</p>}
      {state.saved && <p role="status" className="rounded-xl bg-tile-soft px-4 py-3 font-bold text-tile">Saved</p>}
      <button disabled={pending} className="btn btn-primary">
        {pending ? "Saving…" : "Save settings"}
      </button>
    </form>
  );
}
