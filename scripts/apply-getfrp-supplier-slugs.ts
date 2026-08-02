import { neon } from "@neondatabase/serverless";
import { buildSupplierSlugMap } from "@/lib/supplier-slugs";

async function main() {
  if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is required");
  const sql = neon(process.env.DATABASE_URL);
  const [database] = await sql`select current_database() as name`;
  if (database?.name !== "getfrp") {
    throw new Error(`Refusing to migrate database ${String(database?.name ?? "unknown")}`);
  }

  await sql`alter table supplier_listings add column if not exists slug varchar(160)`;
  const suppliers = (await sql`
    select id, name_en as "nameEn"
    from supplier_listings
    order by id
  `) as Array<{ id: string; nameEn: string | null }>;
  const slugs = buildSupplierSlugMap(suppliers);

  await sql.transaction(
    suppliers.map((supplier) => sql`
      update supplier_listings
      set slug = ${slugs.get(supplier.id) ?? supplier.id}
      where id = ${supplier.id}
    `),
  );
  await sql`
    create unique index if not exists supplier_listings_slug_unique_idx
    on supplier_listings (slug)
  `;

  const [validation] = await sql`
    select
      count(*)::int as total,
      count(slug)::int as with_slug,
      count(distinct slug)::int as unique_slugs
    from supplier_listings
  `;
  if (
    Number(validation?.total) !== Number(validation?.with_slug) ||
    Number(validation?.total) !== Number(validation?.unique_slugs)
  ) {
    throw new Error(`Supplier slug validation failed: ${JSON.stringify(validation)}`);
  }

  console.log(
    `[apply-getfrp-supplier-slugs] database=getfrp suppliers=${validation.total} unique=${validation.unique_slugs}`,
  );
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
