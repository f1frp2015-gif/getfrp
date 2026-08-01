import { sql } from "drizzle-orm";
import { db } from "../src/lib/db";

const APPLY = process.argv.includes("--apply");
const RESET_MATERIALS = process.argv.includes("--reset-materials");
const readRow = (value: unknown): Record<string, unknown> =>
  value as Record<string, unknown>;

async function run() {
  console.log(APPLY ? "🧹 APPLY mode — will delete duplicates" : "👀 DRY-RUN — no writes");
  if (RESET_MATERIALS) console.log("⚠️  --reset-materials: materials table will be TRUNCATED before seed");
  console.log("=".repeat(60));

  if (APPLY && RESET_MATERIALS) {
    const r = await db.execute(sql`TRUNCATE materials CASCADE`);
    console.log(`\n🗑  materials truncated (${r.rowCount ?? 0} rows dropped, cascaded dependent tables)`);
  }

  // ───────────────────────── MATERIALS
  const mTotal = await db.execute(sql`SELECT COUNT(*)::int AS n FROM materials`);
  const mDupes = await db.execute(sql`
    SELECT brand, model, sub_category, COUNT(*)::int AS n
    FROM materials
    WHERE brand IS NOT NULL AND model IS NOT NULL
    GROUP BY brand, model, sub_category
    HAVING COUNT(*) > 1
    ORDER BY n DESC
    LIMIT 10
  `);
  const mDupeCount = await db.execute(sql`
    SELECT COUNT(*)::int AS n FROM (
      SELECT id, ROW_NUMBER() OVER (
        PARTITION BY brand, model, sub_category
        ORDER BY created_at ASC, id ASC
      ) AS rn
      FROM materials
      WHERE brand IS NOT NULL AND model IS NOT NULL
    ) t WHERE rn > 1
  `);
  console.log(`\n📦 materials: ${readRow(mTotal.rows[0]).n} records`);
  console.log(`   Duplicate (brand, model, sub_category) examples:`);
  for (const r of mDupes.rows.slice(0, 5)) {
    console.log(`     • ${readRow(r).brand} / ${readRow(r).model} / ${readRow(r).sub_category}  × ${readRow(r).n}`);
  }
  console.log(`   Estimated duplicates: ${readRow(mDupeCount.rows[0]).n}`);

  if (APPLY) {
    // Prefer deterministic (newer) rows — keep created_at DESC within partition
    const res = await db.execute(sql`
      DELETE FROM materials WHERE id IN (
        SELECT id FROM (
          SELECT id, ROW_NUMBER() OVER (
            PARTITION BY brand, model, sub_category
            ORDER BY length(id) ASC, created_at DESC, id ASC
          ) AS rn
          FROM materials
          WHERE brand IS NOT NULL AND model IS NOT NULL
        ) t WHERE rn > 1
      )
    `);
    console.log(`   ✅ Deleted ${res.rowCount ?? 0} records`);
  }

  // ───────────────────────── FORMULAS
  const fTotal = await db.execute(sql`SELECT COUNT(*)::int AS n FROM formulas`);
  const fDupes = await db.execute(sql`
    SELECT name, process_id, COUNT(*)::int AS n
    FROM formulas
    GROUP BY name, process_id
    HAVING COUNT(*) > 1
    ORDER BY n DESC
    LIMIT 10
  `);
  const fDupeCount = await db.execute(sql`
    SELECT COUNT(*)::int AS n FROM (
      SELECT id, ROW_NUMBER() OVER (
        PARTITION BY name, process_id
        ORDER BY created_at ASC, id ASC
      ) AS rn
      FROM formulas
    ) t WHERE rn > 1
  `);
  console.log(`\n🧪 formulas: ${readRow(fTotal.rows[0]).n} records`);
  console.log(`   Duplicate (name, process_id) examples:`);
  for (const r of fDupes.rows.slice(0, 5)) {
    console.log(`     • ${readRow(r).name} / ${readRow(r).process_id}  × ${readRow(r).n}`);
  }
  console.log(`   Estimated duplicates: ${readRow(fDupeCount.rows[0]).n}`);

  if (APPLY) {
    const res = await db.execute(sql`
      DELETE FROM formulas WHERE id IN (
        SELECT id FROM (
          SELECT id, ROW_NUMBER() OVER (
            PARTITION BY name, process_id
            ORDER BY created_at ASC, id ASC
          ) AS rn
          FROM formulas
        ) t WHERE rn > 1
      )
    `);
    console.log(`   ✅ Deleted ${res.rowCount ?? 0} records`);
  }

  // ───────────────────────── STANDARDS
  const sTotal = await db.execute(sql`SELECT COUNT(*)::int AS n FROM standards`);
  const sDupes = await db.execute(sql`
    SELECT code, COUNT(*)::int AS n
    FROM standards
    GROUP BY code
    HAVING COUNT(*) > 1
    ORDER BY n DESC
    LIMIT 10
  `);
  const sDupeCount = await db.execute(sql`
    SELECT COUNT(*)::int AS n FROM (
      SELECT id, ROW_NUMBER() OVER (PARTITION BY code ORDER BY created_at ASC, id ASC) AS rn
      FROM standards
    ) t WHERE rn > 1
  `);
  console.log(`\n📋 standards: ${readRow(sTotal.rows[0]).n} records`);
  console.log(`   Duplicate code examples:`);
  for (const r of sDupes.rows.slice(0, 5)) {
    console.log(`     • ${readRow(r).code}  × ${readRow(r).n}`);
  }
  console.log(`   Estimated duplicates: ${readRow(sDupeCount.rows[0]).n}`);

  if (APPLY) {
    const res = await db.execute(sql`
      DELETE FROM standards WHERE id IN (
        SELECT id FROM (
          SELECT id, ROW_NUMBER() OVER (PARTITION BY code ORDER BY created_at ASC, id ASC) AS rn
          FROM standards
        ) t WHERE rn > 1
      )
    `);
    console.log(`   ✅ Deleted ${res.rowCount ?? 0} records`);
  }

  // ───────────────────────── SUPPLIERS
  const supTotal = await db.execute(sql`SELECT COUNT(*)::int AS n FROM supplier_listings`);
  const supDupes = await db.execute(sql`
    SELECT name, province, COUNT(*)::int AS n
    FROM supplier_listings
    GROUP BY name, province
    HAVING COUNT(*) > 1
    ORDER BY n DESC
    LIMIT 10
  `);
  const supDupeCount = await db.execute(sql`
    SELECT COUNT(*)::int AS n FROM (
      SELECT id, ROW_NUMBER() OVER (
        PARTITION BY name, province
        ORDER BY verified DESC, created_at ASC, id ASC
      ) AS rn
      FROM supplier_listings
    ) t WHERE rn > 1
  `);
  console.log(`\n🏭 supplier_listings: ${readRow(supTotal.rows[0]).n} records`);
  console.log(`   Duplicate (name, province) examples:`);
  for (const r of supDupes.rows.slice(0, 5)) {
    console.log(`     • ${readRow(r).name} / ${readRow(r).province}  × ${readRow(r).n}`);
  }
  console.log(`   Estimated duplicates: ${readRow(supDupeCount.rows[0]).n}`);

  if (APPLY) {
    // Prefer verified + longer curated IDs (sup-xxx) over short legacy ids (s1-s6)
    const res = await db.execute(sql`
      DELETE FROM supplier_listings WHERE id IN (
        SELECT id FROM (
          SELECT id, ROW_NUMBER() OVER (
            PARTITION BY name, province
            ORDER BY verified DESC, length(id) DESC, created_at ASC
          ) AS rn
          FROM supplier_listings
        ) t WHERE rn > 1
      )
    `);
    console.log(`   ✅ Deleted ${res.rowCount ?? 0} records`);
  }

  // ───────────────────────── ARTICLES
  const aTotal = await db.execute(sql`SELECT COUNT(*)::int AS n FROM articles`);
  const aDupes = await db.execute(sql`
    SELECT title, COUNT(*)::int AS n
    FROM articles
    GROUP BY title
    HAVING COUNT(*) > 1
    ORDER BY n DESC
    LIMIT 10
  `);
  const aDupeCount = await db.execute(sql`
    SELECT COUNT(*)::int AS n FROM (
      SELECT id, ROW_NUMBER() OVER (PARTITION BY title ORDER BY created_at ASC, id ASC) AS rn
      FROM articles
    ) t WHERE rn > 1
  `);
  console.log(`\n📰 articles: ${readRow(aTotal.rows[0]).n} records`);
  console.log(`   Duplicate title examples:`);
  for (const r of aDupes.rows.slice(0, 5)) {
    console.log(`     • ${readRow(r).title}  × ${readRow(r).n}`);
  }
  console.log(`   Estimated duplicates: ${readRow(aDupeCount.rows[0]).n}`);

  if (APPLY) {
    const res = await db.execute(sql`
      DELETE FROM articles WHERE id IN (
        SELECT id FROM (
          SELECT id, ROW_NUMBER() OVER (PARTITION BY title ORDER BY created_at ASC, id ASC) AS rn
          FROM articles
        ) t WHERE rn > 1
      )
    `);
    console.log(`   ✅ Deleted ${res.rowCount ?? 0} records`);
  }

  console.log("\n" + "=".repeat(60));
  console.log(APPLY ? "🎉 Deduplication complete" : "ℹ️  Add --apply to delete duplicates");
}

run()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error("❌ dedupe failed:", err);
    process.exit(1);
  });
