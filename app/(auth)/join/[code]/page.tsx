// The masjid's invite link: /join/<code>. Shows the masjid's name (and nothing else) before sign-in.
import { redirect } from "next/navigation";
import { supabaseServer } from "@/lib/supabase/server";
import { getUser } from "@/lib/dal";
import { EmailCodeForm } from "../../EmailCodeForm";
import { parseInvite } from "@/lib/invite";
import { RememberInvite } from "./RememberInvite";

export default async function JoinPage({ params }: PageProps<"/join/[code]">) {
  const code = parseInvite(decodeURIComponent((await params).code));
  const supabase = await supabaseServer();
  const { data } = code ? await supabase.rpc("invite_preview", { invite_code: code }) : { data: null };
  const masjid = (data as { masjid_name: string }[] | null)?.[0]?.masjid_name;
  if (!masjid) {
    return (
      <Shell>
        <h1 className="font-display text-2xl">This invite link isn&apos;t working</h1>
        <p className="mt-3 text-muted">It may have expired. Ask your masjid for a new link.</p>
      </Shell>
    );
  }
  const user = await getUser();
  if (user) redirect(`/welcome?invite=${code}`);
  return (
    <Shell>
      <RememberInvite code={code!} />
      <p className="font-bold text-tile">{masjid} invited you</p>
      <h1 className="mt-2 font-display text-[2rem] leading-tight">Welcome to Hidaya. Five minutes a day, at your pace.</h1>
      <p className="mt-3 text-lg text-muted">
        A short lesson each day for your first 90 days as a Muslim, and a guide you can ask anything. It&apos;s private: you
        choose what {masjid} can see.
      </p>
      <div className="mt-8">
        <EmailCodeForm mode="join" />
      </div>
    </Shell>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return <main className="mx-auto w-full max-w-lg px-5 py-10">{children}</main>;
}
