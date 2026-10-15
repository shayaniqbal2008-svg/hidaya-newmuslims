"use client";
import { useActionState, useEffect, useState } from "react";
import { DEMO_SCHOOLS } from "@/lib/demo";
import { startDemo, type DemoState } from "./actions";

export function DemoForm() {
  const [state, action, pending] = useActionState<DemoState, FormData>(startDemo, {});
  const [tz, setTz] = useState("America/Chicago");
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTz(Intl.DateTimeFormat().resolvedOptions().timeZone || "America/Chicago");
  }, []);
  const input = "w-full rounded-xl border-2 border-line bg-surface px-4 py-3 focus:border-cobalt focus:outline-none";
  return (
    <form action={action} className="space-y-5">
      <input type="hidden" name="timezone" value={tz} />
      <label className="block">
        <span className="mb-1 block font-extrabold">Your first name (optional)</span>
        <input name="first_name" maxLength={40} className={input} placeholder="Friend" />
      </label>
      <fieldset>
        <legend className="mb-2 font-extrabold">Show me the guidance for</legend>
        <div className="grid grid-cols-2 gap-3">
          {[
            ["male", "Men"],
            ["female", "Women"],
          ].map(([v, l]) => (
            <label key={v} className="opt flex cursor-pointer items-center gap-2 has-[:checked]:border-cobalt has-[:checked]:bg-cobalt-soft">
              <input type="radio" name="gender" value={v} required className="accent-[var(--cobalt)]" />
              {l}
            </label>
          ))}
        </div>
      </fieldset>
      <label className="block">
        <span className="mb-1 block font-extrabold">Your masjid follows</span>
        <select name="school" defaultValue="hanafi" className={input}>
          {DEMO_SCHOOLS.map((s) => (
            <option key={s.id} value={s.id}>
              {s.label}
            </option>
          ))}
        </select>
        <span className="mt-1 block text-sm text-muted">Prayer details follow the masjid&apos;s school. Pick one to see its version.</span>
      </label>
      {state.error && (
        <p role="alert" className="rounded-xl bg-gentle-soft px-4 py-3">
          {state.error}
        </p>
      )}
      <button className="btn btn-primary" disabled={pending}>
        {pending ? "Setting things up…" : "Start the demo"}
      </button>
    </form>
  );
}
