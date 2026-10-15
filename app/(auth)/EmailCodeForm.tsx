"use client";
import { useActionState } from "react";
import { sendCode, verifyCode, type FormState } from "./actions";

const input = "w-full rounded-xl border-2 border-line bg-surface px-4 py-3 text-lg focus:border-tile focus:outline-none";
const primary = "btn btn-primary";

export function EmailCodeForm({ mode }: { mode: "join" | "login" }) {
  const [sent, send, sending] = useActionState<FormState, FormData>(sendCode, {});
  const [verified, verify, verifying] = useActionState<FormState, FormData>(verifyCode, {});
  const email = sent.email;

  if (!sent.sent) {
    return (
      <form action={send} className="space-y-4">
        <input type="hidden" name="mode" value={mode} />
        <label className="block">
          <span className="mb-1 block font-bold">Your email</span>
          <input name="email" type="email" autoComplete="email" required className={input} placeholder="you@example.com" />
        </label>
        <p className="text-sm text-muted">
          Use an email only you can open. We&apos;ll send a sign-in code with a plain subject line.
        </p>
        {sent.error && <p role="alert" className="rounded-xl bg-gentle-soft px-4 py-3">{sent.error}</p>}
        <button className={primary} disabled={sending}>
          {sending ? "Sending…" : "Email me a code"}
        </button>
      </form>
    );
  }
  return (
    <form action={verify} className="space-y-4">
      <input type="hidden" name="email" value={email} />
      <p>
        We sent a 6-digit code to <strong>{email}</strong>. It can take a minute, and may land in spam.
      </p>
      <label className="block">
        <span className="mb-1 block font-bold">Code</span>
        <input
          name="code"
          inputMode="numeric"
          autoComplete="one-time-code"
          pattern="[0-9 ]{6,8}"
          maxLength={8}
          required
          autoFocus
          className={`${input} tracking-[0.4em]`}
        />
      </label>
      {verified.error && <p role="alert" className="rounded-xl bg-gentle-soft px-4 py-3">{verified.error}</p>}
      <button className={primary} disabled={verifying}>
        {verifying ? "Checking…" : "Sign in"}
      </button>
      <button type="button" onClick={() => location.reload()} className="w-full py-2 text-muted underline">
        Use a different email
      </button>
    </form>
  );
}
