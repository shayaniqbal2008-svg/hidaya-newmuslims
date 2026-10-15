"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { parseInvite } from "@/lib/invite";

// For anyone who can't open the invite link (installed app, different browser): paste the link or type the code.
// "join" opens the masjid's join page; "welcome" finishes sign-up for someone already signed in.
export function InviteCodeForm({ to }: { to: "join" | "welcome" }) {
  const router = useRouter();
  const [error, setError] = useState(false);
  return (
    <form
      className="space-y-3"
      onSubmit={(e) => {
        e.preventDefault();
        const code = parseInvite(String(new FormData(e.currentTarget).get("invite")));
        setError(!code);
        if (code) router.push(to === "join" ? `/join/${code}` : `/welcome?invite=${code}`);
      }}
    >
      <label className="block">
        <span className="mb-1 block font-bold">Invite link or code</span>
        <input
          name="invite"
          autoCapitalize="none"
          autoCorrect="off"
          spellCheck={false}
          required
          placeholder="Paste the link from your masjid"
          className="w-full rounded-xl border-2 border-line bg-surface px-4 py-3 text-lg focus:border-tile focus:outline-none"
        />
      </label>
      {error && (
        <p role="alert" className="rounded-xl bg-gentle-soft px-4 py-3">
          That doesn&apos;t look like an invite. Paste the whole link, or the code at the end of it.
        </p>
      )}
      <button className="btn btn-ghost">Continue</button>
    </form>
  );
}
