# Migrations (reference SQL)
Apply migrations in numeric order. `0003_supplier_product_pages.sql` adds the
supplier-owned product-page review workflow; `0004_password_auth.sql` adds the
password hash required by GetFRP email/password registration and login. Both
are additive and do not alter existing account or product data.
The repo's drizzle/ folder is gitignored — the project uses `pnpm db:push`
to sync schema directly. This folder keeps hand-written SQL versions of
non-trivial schema additions as a reviewable record + a fallback for any
environment where db:push is unavailable.

## How to apply

Option 1 (recommended) — schema-driven via Drizzle Kit:

```bash
pnpm db:push
```

This compares `src/lib/db/schema.ts` against the live DB and emits the
diff. Safe on Neon under live traffic for additive changes (new tables /
columns / indexes). Destructive changes prompt confirmation.

Option 2 — apply SQL directly (use only if `db:push` is unavailable):

```bash
psql "$DATABASE_URL" -f scripts/migrations/0001_factory_product.sql
```

The guarded `db:supplier-product-pages` runner expects the local database name
`getfrp` by default. For the Vercel Marketplace Neon production resource, run
it from an environment that does not load local overrides and explicitly set
`MIGRATION_DATABASE_NAME=neondb`. The runner still checks `current_database()`
before applying any SQL.

## Files

| File | Adds | Notes |
|---|---|---|
| `0001_factory_product.sql` | `factory_waitlist` + `factory_inquiries` + `factory_inquiry_drafts` tables, plus 4 enums | S2 AI 询盘助手 product MVP. Additive only — safe to apply on live DB. |
| `0002_supplier_product_core.sql` | `products` + `supplier_products` tables and indexes | Canonical product catalog plus explicit many-to-many supplier relationships. Additive; legacy content remains archived. |
| `0003_supplier_product_pages.sql` | `supplier_product_pages` + `supplier_product_review_logs` | Supplier-owned indexable UGC products with pending/approved/rejected moderation. |
| `0004_password_auth.sql` | `users.password_hash` | Direct GetFRP email/password authentication. Additive and nullable for legacy phone/WeChat/OTP users. |
