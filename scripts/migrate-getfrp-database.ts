import {
  neon,
  type NeonQueryFunction,
} from "@neondatabase/serverless";

type DbRow = Record<string, unknown>;
type SqlClient = NeonQueryFunction<false, false>;

type ColumnType = {
  dataType: string;
  udtName: string;
};

type CopyPlan = {
  table: string;
  selectSql: string;
  transform?: (row: DbRow) => DbRow;
};

const SOURCE_DATABASE_URL = process.env.SOURCE_DATABASE_URL;
const TARGET_DATABASE_URL = process.env.TARGET_DATABASE_URL;
const APPLY = process.argv.includes("--apply");
const BATCH_SIZE = 25;

function required(name: string, value: string | undefined): string {
  if (!value) throw new Error(`${name} is required`);
  return value;
}

function databaseIdentity(connectionString: string) {
  const url = new URL(connectionString);
  return {
    host: url.hostname,
    database: url.pathname.replace(/^\//, ""),
  };
}

function quoteIdentifier(value: string): string {
  if (!/^[a-z_][a-z0-9_]*$/.test(value)) {
    throw new Error(`Unsafe SQL identifier: ${value}`);
  }
  return `"${value}"`;
}

function detachLegacyIdentity(row: DbRow): DbRow {
  return {
    ...row,
    clerk_id: null,
    phone: null,
    enterprise_id: null,
    wechat_open_id: null,
    wechat_union_id: null,
    mini_program_open_id: null,
  };
}

function detachSupplierOwnership(row: DbRow): DbRow {
  return { ...row, enterprise_id: null };
}

const COPY_PLANS: CopyPlan[] = [
  {
    table: "users",
    selectSql: `
      SELECT *
      FROM users
      WHERE email IS NOT NULL
        AND password_hash IS NOT NULL
      ORDER BY created_at, id
    `,
    transform: detachLegacyIdentity,
  },
  {
    table: "products",
    selectSql: `
      SELECT *
      FROM products
      WHERE source = 'getfrp'
      ORDER BY id
    `,
  },
  {
    table: "supplier_listings",
    selectSql: `
      SELECT *
      FROM supplier_listings
      WHERE slug IS NOT NULL
        AND name_en IS NOT NULL
        AND btrim(name_en) <> ''
      ORDER BY id
    `,
    transform: detachSupplierOwnership,
  },
  {
    table: "supplier_products",
    selectSql: `
      SELECT sp.*
      FROM supplier_products sp
      INNER JOIN supplier_listings s ON s.id = sp.supplier_listing_id
      INNER JOIN products p ON p.id = sp.product_id
      WHERE s.slug IS NOT NULL
        AND s.name_en IS NOT NULL
        AND btrim(s.name_en) <> ''
        AND p.source = 'getfrp'
      ORDER BY sp.id
    `,
  },
  {
    table: "trade_remedy_measures",
    selectSql: `SELECT * FROM trade_remedy_measures ORDER BY id`,
  },
  {
    table: "knowledge_chunks",
    selectSql: `
      SELECT k.*
      FROM knowledge_chunks k
      INNER JOIN supplier_listings s ON s.id = k.source_id
      WHERE k.source_type = 'supplier'
        AND s.slug IS NOT NULL
        AND s.name_en IS NOT NULL
        AND btrim(s.name_en) <> ''
      ORDER BY k.id
    `,
  },
];

async function tableExists(
  sql: SqlClient,
  table: string,
): Promise<boolean> {
  const rows = (await sql.query(
    "SELECT to_regclass($1) IS NOT NULL AS exists",
    [`public.${table}`],
  )) as DbRow[];
  return rows[0]?.exists === true;
}

async function tableCount(
  sql: SqlClient,
  table: string,
): Promise<number> {
  const rows = (await sql.query(
    `SELECT count(*)::int AS count FROM ${quoteIdentifier(table)}`,
  )) as DbRow[];
  return Number(rows[0]?.count ?? 0);
}

async function getColumnTypes(
  sql: SqlClient,
  table: string,
): Promise<Map<string, ColumnType>> {
  const rows = (await sql.query(
    `
      SELECT column_name, data_type, udt_name
      FROM information_schema.columns
      WHERE table_schema = 'public'
        AND table_name = $1
    `,
    [table],
  )) as Array<{
    column_name: string;
    data_type: string;
    udt_name: string;
  }>;

  return new Map(
    rows.map((row) => [
      row.column_name,
      { dataType: row.data_type, udtName: row.udt_name },
    ]),
  );
}

function normalizeParameter(
  value: unknown,
  columnType: ColumnType | undefined,
): unknown {
  if (value === null || value === undefined || !columnType) return value;

  if (
    (columnType.dataType === "json" || columnType.dataType === "jsonb") &&
    typeof value !== "string"
  ) {
    return JSON.stringify(value);
  }

  if (columnType.udtName === "vector" && Array.isArray(value)) {
    return `[${value.join(",")}]`;
  }

  return value;
}

async function insertRows(
  sql: SqlClient,
  table: string,
  rows: DbRow[],
) {
  const columnTypes = await getColumnTypes(sql, table);
  for (let offset = 0; offset < rows.length; offset += BATCH_SIZE) {
    const batch = rows.slice(offset, offset + BATCH_SIZE);
    const columns = Object.keys(batch[0]);
    const values: unknown[] = [];
    const tuples = batch.map((row) => {
      const placeholders = columns.map((column) => {
        if (!(column in row)) {
          throw new Error(`Missing ${table}.${column} in migration row`);
        }
        values.push(normalizeParameter(row[column], columnTypes.get(column)));
        return `$${values.length}`;
      });
      return `(${placeholders.join(", ")})`;
    });
    const statement = `
      INSERT INTO ${quoteIdentifier(table)}
        (${columns.map(quoteIdentifier).join(", ")})
      VALUES ${tuples.join(", ")}
      ON CONFLICT DO NOTHING
    `;
    try {
      await sql.query(statement, values);
    } catch (error) {
      const reason = error instanceof Error ? error.message : String(error);
      throw new Error(
        `Failed to copy ${table} rows ${offset + 1}-${offset + batch.length}: ${reason}`,
      );
    }
  }
}

async function assertTargetPolicy(sql: SqlClient) {
  const legacyTables = ["materials", "papers", "patents"];
  for (const table of legacyTables) {
    if (!(await tableExists(sql, table))) continue;
    const count = await tableCount(sql, table);
    if (count !== 0) {
      throw new Error(`Target policy violation: ${table} contains ${count} rows`);
    }
  }

  const userRows = (await sql.query(`
    SELECT count(*)::int AS count
    FROM users
    WHERE phone IS NOT NULL
       OR enterprise_id IS NOT NULL
       OR clerk_id IS NOT NULL
       OR wechat_open_id IS NOT NULL
       OR wechat_union_id IS NOT NULL
       OR mini_program_open_id IS NOT NULL
  `)) as DbRow[];
  if (Number(userRows[0]?.count ?? 0) !== 0) {
    throw new Error("Target policy violation: copied users retain legacy identity fields");
  }

  const ownedSuppliers = (await sql.query(`
    SELECT count(*)::int AS count
    FROM supplier_listings
    WHERE enterprise_id IS NOT NULL
  `)) as DbRow[];
  if (Number(ownedSuppliers[0]?.count ?? 0) !== 0) {
    throw new Error("Target policy violation: supplier ownership was not detached");
  }

  const invalidChunks = (await sql.query(`
    SELECT count(*)::int AS count
    FROM knowledge_chunks
    WHERE source_type <> 'supplier'
  `)) as DbRow[];
  if (Number(invalidChunks[0]?.count ?? 0) !== 0) {
    throw new Error("Target policy violation: non-supplier knowledge chunks were copied");
  }

  const orphanRelations = (await sql.query(`
    SELECT count(*)::int AS count
    FROM supplier_products sp
    LEFT JOIN supplier_listings s ON s.id = sp.supplier_listing_id
    LEFT JOIN products p ON p.id = sp.product_id
    WHERE s.id IS NULL OR p.id IS NULL
  `)) as DbRow[];
  if (Number(orphanRelations[0]?.count ?? 0) !== 0) {
    throw new Error("Target policy violation: orphan supplier-product relationships exist");
  }
}

async function main() {
  const sourceUrl = required("SOURCE_DATABASE_URL", SOURCE_DATABASE_URL);
  const targetUrl = required("TARGET_DATABASE_URL", TARGET_DATABASE_URL);
  const sourceIdentity = databaseIdentity(sourceUrl);
  const targetIdentity = databaseIdentity(targetUrl);
  if (
    sourceIdentity.host === targetIdentity.host &&
    sourceIdentity.database === targetIdentity.database
  ) {
    throw new Error("Source and target databases must be different");
  }

  console.log("GetFRP database split");
  console.log(`  source: ${sourceIdentity.host}/${sourceIdentity.database}`);
  console.log(`  target: ${targetIdentity.host}/${targetIdentity.database}`);
  console.log(`  mode:   ${APPLY ? "apply" : "plan"}`);

  const source = neon(sourceUrl);
  const target = neon(targetUrl);
  const results: Array<{ table: string; source: number; target: number }> = [];

  for (const plan of COPY_PLANS) {
    if (!(await tableExists(target, plan.table))) {
      throw new Error(
        `Target table ${plan.table} is missing. Run drizzle-kit push against the target first.`,
      );
    }
    const sourceRows = ((await source.query(plan.selectSql)) as DbRow[]).map(
      (row) => plan.transform?.(row) ?? row,
    );
    if (APPLY && sourceRows.length > 0) {
      await insertRows(target, plan.table, sourceRows);
    }
    results.push({
      table: plan.table,
      source: sourceRows.length,
      target: await tableCount(target, plan.table),
    });
  }

  if (APPLY) {
    for (const result of results) {
      if (result.source !== result.target) {
        throw new Error(
          `Count mismatch for ${result.table}: source ${result.source}, target ${result.target}`,
        );
      }
    }
    await assertTargetPolicy(target);
  }

  console.table(results);
  if (!APPLY) {
    console.log("Plan only. Re-run with --apply after reviewing the counts.");
  } else {
    console.log("Migration complete. Target policy and referential checks passed.");
  }
}

main().catch((error) => {
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
