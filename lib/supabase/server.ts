// Supabase on the server, acting as the signed-in user: every query goes through the RLS rules.
import "server-only";
import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { env, requireServerEnv } from "../env";

export async function supabaseServer() {
  const store = await cookies();
  return createServerClient(env.supabaseUrl, env.supabaseKey, {
    cookies: {
      getAll: () => store.getAll(),
      setAll: (list) => {
        try {
          for (const { name, value, options } of list) store.set(name, value, options);
        } catch {
          // Called from a Server Component, where cookies are read-only. The proxy refreshes the session.
        }
      },
    },
  });
}

/**
 * The service-role client BYPASSES every privacy rule. Use it only for jobs with no signed-in user:
 * the reminder cron and account deletion. Never for anything a user's request can steer.
 */
export function supabaseAdmin() {
  return createClient(env.supabaseUrl, requireServerEnv("SUPABASE_SERVICE_ROLE_KEY"), {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}
