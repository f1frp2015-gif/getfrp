// Guarded, idempotent DDL for GetFRP email+password authentication.
// Check first:
//   pnpm tsx --env-file=.env.local scripts/apply-password-auth.ts --check
// Apply only after confirming MIGRATION_DATABASE_NAME targets GetFRP:
//   pnpm tsx --env-file=.env.local scripts/apply-password-auth.ts
import { neon } from "@neondatabase/serverless";

type DatabaseRow = { name: string };
type ColumnRow = { column_name: string };

function databaseUrl(): string {
  const value =
    process.env.MIGRATION_DATABASE_URL ??
    process.env.DATABASE_URL_UNPOOLED ??
    process.env.DATABASE_URL;
  if (!value) {
    throw new Error(
      "MIGRATION_DATABASE_URL, DATABASE_URL_UNPOOLED or DATABASE_URL is required",
    );
  }
  return value;
}

async function main() {
  const sql = neon(databaseUrl());
  const [database] = (await sql`
    select current_database() as name
  `) as DatabaseRow[];
  const expectedDatabase = process.env.MIGRATION_DATABASE_NAME ?? "getfrp";
  if (database?.name !== expectedDatabase) {
    throw new Error(
      `Refusing to inspect or migrate database ${String(database?.name ?? "unknown")}; expected ${expectedDatabase}`,
    );
  }

  const readColumn = async () =>
    (await sql`
      select column_name
      from information_schema.columns
      where table_schema = 'public'
        and table_name = 'users'
        and column_name = 'password_hash'
    `) as ColumnRow[];

  const before = await readColumn();
  if (process.argv.includes("--check")) {
    console.log(
      `[check-password-auth] database=${expectedDatabase} password_hash=${before.length === 1 ? "present" : "missing"}`,
    );
    if (before.length !== 1) process.exitCode = 2;
    return;
  }

  await sql`ALTER TABLE "users" ADD COLUMN IF NOT EXISTS "password_hash" text`;
  const after = await readColumn();
  if (after.length !== 1) {
    throw new Error("Migration verification failed: users.password_hash is missing");
  }
  console.log(
    `[apply-password-auth] database=${expectedDatabase} password_hash=present`,
  );
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
