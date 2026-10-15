// Test harness: runs the real migrations in PGlite (Postgres compiled to WebAssembly, in-process),
// so the privacy tests need no Docker and no Supabase project. A small stub stands in for
// Supabase's auth schema: auth.users, auth.uid() and the anon/authenticated roles.
import { PGlite } from "@electric-sql/pglite";
import { pgcrypto } from "@electric-sql/pglite/contrib/pgcrypto";
import { readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";

const STUB = `
create role anon nologin;
create role authenticated nologin;
create role service_role nologin bypassrls;
create schema auth;
create table auth.users (id uuid primary key, email text);
create function auth.uid() returns uuid language sql stable as
  $$ select nullif(current_setting('request.jwt.claim.sub', true), '')::uuid $$;
grant usage on schema auth to anon, authenticated;
grant execute on function auth.uid() to anon, authenticated;
grant usage on schema public to anon, authenticated, service_role;
-- Supabase grants everything on new public tables to these roles by default; the migrations must
-- tighten that themselves, so the stub reproduces it.
alter default privileges in schema public grant all on tables to anon, authenticated, service_role;
alter default privileges in schema public grant all on functions to anon, authenticated, service_role;
`;

const MIGRATIONS = join(__dirname, "../migrations");
const migrationFiles = () => readdirSync(MIGRATIONS).filter((f) => f.endsWith(".sql")).sort();

/** A database with every migration applied, or only those before `before` (a file name) to test a backfill. */
export async function freshDb(opts: { before?: string } = {}) {
  const db = await PGlite.create({ extensions: { pgcrypto } });
  await db.exec(STUB);
  for (const f of migrationFiles()) {
    if (opts.before && f >= opts.before) break;
    await db.exec(readFileSync(join(MIGRATIONS, f), "utf8"));
  }
  return db;
}

/** Apply one migration file (by name) to a database. */
export async function applyMigration(db: Awaited<ReturnType<typeof freshDb>>, file: string) {
  await db.exec(readFileSync(join(MIGRATIONS, file), "utf8"));
}

export type Db = Awaited<ReturnType<typeof freshDb>>;

/** Run queries as a signed-in user (or anonymous when uid is null), with RLS applied. */
export async function as<T>(db: Db, uid: string | null, fn: (q: Q) => Promise<T>): Promise<T> {
  return db.transaction(async (tx) => {
    await tx.exec(`set local role ${uid ? "authenticated" : "anon"}`);
    await tx.query(`select set_config('request.jwt.claim.sub', $1, true)`, [uid ?? ""]);
    const q: Q = async (sql, params) => (await tx.query(sql, params)).rows as Record<string, unknown>[];
    return fn(q);
  });
}

export type Q = (sql: string, params?: unknown[]) => Promise<Record<string, unknown>[]>;
