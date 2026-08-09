# GetFRP Neon database split

GetFRP uses its own Neon project and connection string. The previous database
is retained unchanged for F1FRP; this migration never deletes or updates source
rows.

## Copied data

- GetFRP email/password users only. Phone, WeChat, Clerk, enterprise and other
  domestic identity fields are cleared during the copy.
- Public English supplier listings. Existing enterprise ownership is detached
  so every copied profile starts unclaimed in the independent GetFRP database.
- Canonical GetFRP products and their supplier relationships.
- Trade-remedy measures used by the public GetFRP data page.
- Supplier knowledge chunks only.

The migration deliberately excludes materials, papers, patents, price reports,
paid reports, articles, OTPs, saved paper records, enterprise ownership,
historical RFQ/payment logs and all non-supplier knowledge chunks.

## Runbook

1. Create a new Neon project in the same region as the GetFRP Vercel functions
   where practical.
2. Put the new connection string in `TARGET_DATABASE_URL` and the current
   database connection string in `SOURCE_DATABASE_URL`. Never commit either.
3. Create the schema in the blank target database:

   ```sh
   DATABASE_URL="$TARGET_DATABASE_URL" pnpm exec drizzle-kit push
   ```

4. Review the read-only migration plan:

   ```sh
   pnpm exec tsx scripts/migrate-getfrp-database.ts
   ```

5. Copy the approved rows and run policy/referential checks:

   ```sh
   pnpm exec tsx scripts/migrate-getfrp-database.ts --apply
   ```

6. Point only the Vercel Preview environment at the new database. Ensure
   `GOOGLE_GENERATIVE_AI_API_KEY` is also available to Preview, then deploy and
   verify supplier directory, product/supplier relationships, authentication,
   sitemap output, RFQ submission and AI supplier retrieval.
7. After Preview passes, update Production and redeploy from the merged `main`
   commit. Keep the old database unchanged.

The script is resumable: inserts use `ON CONFLICT DO NOTHING`, then compare
source-policy counts with target counts. It refuses to run when source and
target resolve to the same Neon host and database.
