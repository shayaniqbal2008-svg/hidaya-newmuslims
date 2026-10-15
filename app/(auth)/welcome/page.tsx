// Last sign-up step: a few details and the privacy choices (Spec §6.4). Then Days 1–3 open.
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/dal";
import { supabaseServer } from "@/lib/supabase/server";
import { parseInvite } from "@/lib/invite";
import { InviteCodeForm } from "../InviteCodeForm";
import { SignupForm } from "./SignupForm";

export default async function WelcomePage({ searchParams }: PageProps<"/welcome">) {
  const user = await getUser();
  if (!user) redirect("/login");
  const supabase = await supabaseServer();
  const { data: existing } = await supabase.from("converts").select("id").eq("id", user.id).maybeSingle();
  if (existing) redirect("/today");
  const sp = await searchParams;
  const invite = parseInvite((typeof sp.invite === "string" ? sp.invite : null) ?? (await cookies()).get("invite")?.value);
  let masjid: string | null = null;
  if (invite) {
    const { data } = await supabase.rpc("invite_preview", { invite_code: invite });
    masjid = (data as { masjid_name: string }[] | null)?.[0]?.masjid_name ?? null;
  }
  if (!masjid) {
    return (
      <main className="mx-auto w-full max-w-lg px-5 py-10">
        <h1 className="font-display text-2xl">Almost there</h1>
        <p className="mt-3 text-muted">
          {invite
            ? "That invite isn't working. It may have expired: ask your masjid for a new one."
            : "To finish joining, paste the invite link your masjid sent you."}
        </p>
        <div className="mt-6">
          <InviteCodeForm to="welcome" />
        </div>
      </main>
    );
  }
  return (
    <main className="mx-auto w-full max-w-lg px-5 py-10">
      <h1 className="font-display text-[2rem] leading-tight">A few details</h1>
      <p className="mt-2 mb-8 text-muted">So your lessons fit you. You can change all of this later in Settings.</p>
      <SignupForm masjid={masjid} invite={invite!} />
    </main>
  );
}
