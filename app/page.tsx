// The front door: Hidaya, or plain and nameless on a device in discreet mode.
import Link from "next/link";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/dal";
import { isConfigured } from "@/lib/env";
import { BRAND } from "@/lib/brand";
import { isDiscreetDevice } from "@/lib/brand-server";
import { demoEnabled } from "@/lib/demo";
import { InviteCodeForm } from "./(auth)/InviteCodeForm";

export default async function Home({ searchParams }: PageProps<"/">) {
  if (isConfigured() && (await getUser())) redirect("/today");
  const deleted = (await searchParams).deleted === "1";
  const discreet = await isDiscreetDevice();
  return (
    <main className="mx-auto flex min-h-dvh w-full max-w-lg flex-col justify-center px-5 py-10">
      <div className="mb-8 flex items-center gap-3">
        <div aria-hidden className="h-14 w-14 overflow-hidden rounded-2xl bg-tile">
          <div className="mx-auto mt-5 h-9 w-9 rounded-full bg-dawn" />
        </div>
        {!discreet && <p className="font-display text-3xl text-tile">{BRAND}</p>}
      </div>
      <h1 className="font-display text-[2.4rem] leading-tight">Your first 90 days as a Muslim, five minutes a day.</h1>
      {deleted ? (
        <p className="mt-3 text-lg text-muted">Your account and everything in it has been deleted.</p>
      ) : (
        <p className="mt-3 text-lg text-muted">Short, interactive lessons from your masjid, and a guide you can ask anything.</p>
      )}
      {demoEnabled() && (
        <Link href="/demo" className="btn btn-primary mt-8 text-lg">
          Try the demo
        </Link>
      )}
      <details className="mt-6 rounded-2xl border-2 border-line bg-surface p-4">
        <summary className="cursor-pointer font-extrabold text-cobalt">Have an invite from your masjid?</summary>
        <div className="mt-4">
          <InviteCodeForm to="join" />
        </div>
      </details>
      <Link href="/login" className="mt-3 py-2 text-center font-extrabold text-muted">
        Already joined? Sign in
      </Link>
    </main>
  );
}
