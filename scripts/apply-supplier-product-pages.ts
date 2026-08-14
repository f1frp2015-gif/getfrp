import { readFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { neon } from "@neondatabase/serverless";

async function main() {
  const databaseUrl = process.env.MIGRATION_DATABASE_URL
    ?? process.env.DATABASE_URL_UNPOOLED
    ?? process.env.DATABASE_URL;
  if (!databaseUrl) throw new Error("DATABASE_URL_UNPOOLED or DATABASE_URL is required");
  const sql = neon(databaseUrl);
  const [database] = await sql`select current_database() as name`;
  const expectedDatabase = process.env.MIGRATION_DATABASE_NAME ?? "getfrp";
  if (database?.name !== expectedDatabase) {
    throw new Error(
      `Refusing to migrate database ${String(database?.name ?? "unknown")}; expected ${expectedDatabase}`,
    );
  }

  const scriptDirectory = dirname(fileURLToPath(import.meta.url));
  const migration = await readFile(
    resolve(scriptDirectory, "migrations/0003_supplier_product_pages.sql"),
    "utf8",
  );
  const statements = migration
    .replace(/^--.*$/gm, "")
    .split(";")
    .map((statement) => statement.trim())
    .filter(Boolean);
  for (const statement of statements) await sql.query(statement);

  const rows = await sql`
    select table_name
    from information_schema.tables
    where table_schema = 'public'
      and table_name in ('supplier_product_pages', 'supplier_product_review_logs')
    order by table_name
  `;
  if (rows.length !== 2) throw new Error(`Migration verification failed: ${JSON.stringify(rows)}`);
  console.log(`[apply-supplier-product-pages] database=${expectedDatabase} tables=${rows.map((row) => row.table_name).join(",")}`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
});
