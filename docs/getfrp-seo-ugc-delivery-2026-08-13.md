# GetFRP SEO / UGC architecture delivery

Date: 2026-08-13

Canonical site: `https://getfrp.com`

Repository: `f1frp2015-gif/getfrp`

## Delivered modules

### 1. Crawlable L0-L4 marketplace architecture

- Rebuilt the global header as two compact navigation rows. After launch review,
  search was consolidated into the homepage hero to remove the duplicate header
  search surface.
- The primary navigation has exactly seven groups: Products, Suppliers, Processes, Applications, Standards, Sourcing Guide and Tools.
- Added complete crawlable dropdown and footer coverage for product L2 pages, process pages, application pages, standard pages, sourcing guides, tools and the three Help pages.
- Added five manufacturing pages, five application pages, four standard pages, eight additional product pages and five product/process/application/standard combination pages.
- Added reusable breadcrumb UI and `BreadcrumbList` structured data. Deep combination pages retain their intermediate category level.
- Added 8-12 deduplicated related-search links to marketplace category and combination pages.
- Added a province/production-cluster entrance block to the homepage.

### 2. Supplier product UGC and review workflow

- Added supplier-owned product pages with `pending`, `approved` and `rejected` moderation states.
- Added supplier create, edit, resubmit and delete APIs and dashboard UI.
- Added admin approve, reject and delete APIs, review log records and moderation UI.
- Edits to an approved or rejected product return it to `pending` review.
- Public queries, product/category aggregation and sitemaps include only approved, non-demo records belonging to a publishable supplier.
- Product images must use the controlled `/supplier-product-assets/` proxy or the existing local product-type asset library. Arbitrary remote image URLs are rejected.
- Added an upload-signing endpoint and a stable same-origin OSS asset proxy.
- Added public supplier-product detail pages with Product, Offer and breadcrumb structured data, specifications, certification evidence, MOQ, export markets, RFQ actions, supplier context and reverse links.

### 3. Search and internal-link system

- Retained the primary Products and Suppliers search experience in the homepage
  hero; the duplicate global header search was removed.
- Suggestions are generated from static routes and category terms, always offering at least five useful static destinations once a user types.
- Added at least six popular searches linked directly to static pages.
- Dynamic supplier search is explicitly `noindex,follow` and renders six related static-page links above its results.
- Supplier and product cards use descriptive category/entity anchor text; no generic “click here” anchors were introduced.
- Homepage now contains category entrances, verified supplier recommendations, approved product aggregation, production-cluster links and the primary RFQ call to action.

### 4. Editorial, Help and buyer tools

- Added five Source from China guides and four Insights articles. Each renders more than 800 words with ten practical sections, related suppliers and related static routes.
- Added the exact three Help routes requested.
- Added an interactive FRP weight calculator.
- Added an EN 13706 / ASTM D3917 / GB 50608 comparison tool with explicit interpretation cautions.
- Added `/contact` and expanded the footer with Company, Privacy and RFQ links.

### 5. Technical SEO

- Extended the sitemap with every new indexable hub, L2/L3 page, editorial page, tool, Help page and approved public UGC product page.
- Dynamic search remains outside the index; the sitemap contains only canonical static routes and approved real UGC records.
- Added Product, Offer, ItemList, FAQPage, Article, ProfilePage and BreadcrumbList structured data where appropriate.
- Retained ISR/SSR rendering and cache revalidation after moderation actions.
- Updated the strict SEO checker for the new homepage positioning and restored `/standards` as a live route.

## Important implementation decisions

1. Section 11.4 is treated as the final search rule: dynamic result pages remain `noindex,follow`. Static L2/L3 and combination pages carry index demand and receive internal links from search.
2. The current public site remains English-only. EN is active; ES/DE/PT are visible disabled placeholders. No false `hreflang` alternates are emitted until translated canonical pages exist.
3. Category pages never fabricate inventory. When fewer than three reviewed suppliers/products match, they show an honest empty state and route users to related static pages or RFQ.
4. The existing GetFRP authentication and role model is retained. Replacing it would add unrelated migration risk and is not required for the UGC workflow.
5. Uploaded image references are same-origin and stable even when the backing OSS provider changes.
6. Demo records are unmistakably fake, non-publishable and excluded from all public queries and sitemaps. Admin approval is blocked for `isDemo=true`.

## Database migration and demo data

The migration is additive and creates `supplier_product_pages` plus `supplier_product_review_logs`.

```bash
pnpm db:supplier-product-pages
pnpm db:seed:seo-ugc-demo
pnpm db:delete:seo-ugc-demo
```

The migration runner checks `current_database()` before changing schema. It
expects `getfrp` for the legacy local environment and requires an explicit
`MIGRATION_DATABASE_NAME=neondb` declaration for the Vercel Marketplace Neon
production resource. This prevents a local `.env.local` value from silently
selecting the wrong database during deployment.

## Priority launch pages and keyword validation queue

Search volume is intentionally marked `待核`; no unsupported volume figures were invented.

| Priority | Static page | Primary keyword | Volume |
|---|---|---|---|
| P0 | `/products/frp-grating` | FRP grating manufacturers | 待核 |
| P0 | `/products/pultruded-profiles` | pultruded FRP profiles manufacturers | 待核 |
| P0 | `/products/frp-pipe` | FRP pipe manufacturers China | 待核 |
| P0 | `/products/frp-rebar` | GFRP rebar manufacturers | 待核 |
| P0 | `/source-from-china/how-to-source-frp-grating` | source FRP grating from China | 待核 |
| P1 | `/applications/wastewater-treatment/frp-grating` | wastewater FRP grating suppliers | 待核 |
| P1 | `/standards/en-13706/pultruded-profiles` | EN 13706 pultruded profiles | 待核 |
| P1 | `/products/carbon-fiber-pultrusion-profiles` | carbon fiber pultrusion manufacturers | 待核 |
| P1 | `/source-from-china/frp-grating-price-china` | FRP grating price China | 待核 |
| P2 | `/insights/frp-vs-steel-grating` | FRP vs steel grating | 待核 |

## Changed-file groups

- Data and navigation: `src/lib/data/*`, `src/lib/site-navigation.ts`
- Marketplace rendering: `src/components/marketplace/*`, product/application/process/standard routes
- UGC and moderation: `src/lib/products/*`, supplier/admin APIs and dashboards, public supplier-product route
- Uploads: `src/lib/oss.ts`, upload-signing API, `/supplier-product-assets` proxy
- SEO and discovery: header, footer, homepage, search page, supplier page, sitemap, proxy and SEO checker
- Database: schema, migration SQL, migration runner and demo seed/delete script
- Buyer content: Source from China, Insights, Help, Tools and Contact routes
- Verification: `src/lib/seo-ugc-architecture.test.ts`

## Acceptance checklist

- [x] Seven-item primary navigation with dropdowns
- [x] Homepage search and popular static searches without a duplicate header search
- [x] Dynamic search `noindex,follow` with static related links
- [x] Breadcrumb UI plus JSON-LD on new deep routes
- [x] 8-12 related links on aggregation/combination pages
- [x] Real-data-only aggregation and honest sparse states
- [x] Moderated supplier product UGC implementation
- [x] Public UGC excluded unless approved and non-demo
- [x] Homepage category, supplier, product, region and RFQ modules
- [x] Mobile navigation and no-horizontal-overflow browser checks
- [x] Lint, type checking, automated architecture tests, strict SEO check and production build
- [ ] Vercel Marketplace Neon production migration
- [ ] Authenticated end-to-end upload, moderation and public publishing proof
- [ ] Production merge/deployment (must follow successful preview and database resolution)
