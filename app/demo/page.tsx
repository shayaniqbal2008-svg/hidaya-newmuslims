// The demo front door: explains how a convert normally joins (their masjid's invite link), then lets a
// tester in without one. Everything after this is the real app, with all 90 days unlocked.
import { notFound, redirect } from "next/navigation";
import { demoEnabled } from "@/lib/demo";
import { getUser } from "@/lib/dal";
import { DemoForm } from "./DemoForm";

export default async function DemoPage() {
  if (!demoEnabled()) notFound();
  if (await getUser()) redirect("/today");
  return (
    <main className="mx-auto w-full max-w-lg px-5 py-10">
      <p className="font-display text-3xl text-tile">Hidaya</p>
      <h1 className="mt-4 font-display text-[2rem] leading-tight">Try the demo</h1>
      <div className="mt-4 rounded-2xl border-2 border-dashed border-cobalt/40 bg-cobalt-soft p-4">
        <p className="font-extrabold text-cobalt">How new Muslims join</p>
        <p className="mt-1 text-[0.98rem]">
          A new Muslim gets a private invite link from their masjid. It connects them to that masjid&apos;s imam and mentors and to
          its way of praying. For this demo, you join <strong>Demo Masjid</strong> instead: no link or email needed.
        </p>
      </div>
      <ul className="mt-4 space-y-1 text-[0.95rem] text-muted">
        <li>• All 90 days and the seasonal lessons are unlocked, so you can look at any of them.</li>
        <li>• The AI guide works too. It&apos;s a demo: please don&apos;t share anything personal.</li>
      </ul>
      <div className="mt-6">
        <DemoForm />
      </div>
    </main>
  );
}
