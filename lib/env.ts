// All configuration comes from environment variables (.env.local locally, Vercel settings in production).
// See .env.example for what each one is.
export const env = {
  supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL ?? "",
  // Supabase calls this the "publishable" key in new projects and the "anon" key in older ones.
  supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "",
};

export function requireServerEnv(name: string): string {
  const v = process.env[name];
  if (!v) throw new Error(`Missing environment variable ${name}. See .env.example.`);
  return v;
}

export const isConfigured = () => Boolean(env.supabaseUrl && env.supabaseKey);
