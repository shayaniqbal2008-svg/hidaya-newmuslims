import { EmailCodeForm } from "../EmailCodeForm";
import { InviteCodeForm } from "../InviteCodeForm";
import Link from "next/link";
import { demoEnabled } from "@/lib/demo";

export default function LoginPage() {
  return (
    <main className="mx-auto w-full max-w-lg px-5 py-10">
      <h1 className="font-display text-[2rem]">Sign in</h1>
      <p className="mt-2 mb-8 text-muted">New here? Open the invite link your masjid sent you.</p>
      {demoEnabled() && (
        <Link href="/demo" className="btn btn-ghost mb-6">
          Just trying Hidaya? Start the demo
        </Link>
      )}
      <EmailCodeForm mode="login" />
      <details className="mt-8">
        <summary className="cursor-pointer font-bold text-tile">New here? Paste your invite</summary>
        <div className="mt-4">
          <InviteCodeForm to="join" />
        </div>
      </details>
    </main>
  );
}
