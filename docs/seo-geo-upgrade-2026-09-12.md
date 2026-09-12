# GetFRP SEO and generative-search upgrade

## Scope and evidence

The upgrade addresses shared-template content, incomplete buyer comparisons, sitemap/indexing consistency and observable search discovery. It does not claim that technical eligibility guarantees indexing, rankings or AI citations.

Seven active buyer references now have independent answers, comparison tables, sections, FAQs and scoped external sources. Two already-redirected sourcing records were removed from the article registry; existing permanent redirects remain. The price page is explicitly a cost guide, not a fabricated quote series. The market observation is dated 2024 European production, not a 2026 global estimate.

Grating, pultruded-profile and pipe pages link to blank RFQ CSV worksheets. Evidence tables distinguish product-linked records from company-catalog candidates. Candidates come from existing published profiles and matching finished-product entries; raw materials and equipment do not qualify through a keyword mention. Company-wide MOQ and lead-time values are not substituted for product-specific fields. Existing database relationship terms remain provisional and require order confirmation.

The team identity remains GetFRP, independent from listed suppliers. The About page and methodology explain editorial responsibility, sponsorship, corrections, source scope and evidence needed for case studies. No personal qualifications, legal entity, customer case or quotation was invented.

## Keyword ownership

| Intent | Primary URL | Supporting evidence |
| --- | --- | --- |
| China FRP sourcing platform | `/` | Scope, process, directory links |
| FRP manufacturers in China | `/suppliers` | Public company profiles |
| FRP grating manufacturers China | `/products/frp-grating` | Product-linked records, catalog leads, RFQ worksheet |
| Pultruded FRP profiles manufacturers | `/products/pultruded-profiles` | Profile scope, drawings and evidence requests |
| FRP / GRP pipe suppliers China | `/products/frp-pipe` | Service envelope and joint/test requirements |
| China FRP grating cost / price factors | `/source-from-china/frp-grating-price-china` | Cost comparison, explicit absence of a price series |
| Molded vs pultruded grating | `/source-from-china/frp-grating-vs-molded-grating` | Construction and project selection comparison |
| Carbon fiber vs fiberglass | `/insights/carbon-fiber-vs-fiberglass` | Component-level comparison brief |
| FRP vs steel grating | `/insights/frp-vs-steel-grating` | Installed-system comparison |
| Epoxy vs vinyl ester | `/insights/epoxy-vs-vinyl-ester-resin` | Grade- and exposure-specific selection |

These are intent assignments, not measured search-volume claims. Do not create another near-duplicate URL for each synonym. Use GSC query data to revise priorities.

## Discovery and measurement

- `pnpm seo:audit -- --origin=http://localhost:3100` checks primary pages, seven XML sitemap partitions, canonical URLs, indexing directives, JSON-LD, downloads, redirects, 404 and 410 behavior. Add `--all` for every sitemap URL and `--verbose` for individual results. The production canonical remains `https://getfrp.com`, including on previews.
- RFQ is intentionally noindex and has been removed from the XML sitemap. Buyer links to the form remain.
- IndexNow has a public ownership token at `/indexnow-key`. This is not an account credential. `INDEXNOW_KEY`, when set, overrides the committed public token in both verification and submission.
- Product approval and indexable supplier updates schedule a bounded IndexNow notification after the response; results are logged under `[search-discovery]`. Preview deployments do not submit. Supplier child-sitemap caches are invalidated after relevant changes.
- `pnpm seo:discover` is a read-only production sitemap dry run. `pnpm seo:discover -- --submit` first verifies the production key, then notifies IndexNow about production sitemap URLs. An HTTP 200/202 is acceptance, not proof of indexing.
- General product/supplier pages are not submitted to Google's restricted Indexing API. Use Search Console and sitemaps.
- GA events: `rfq_open`, `rfq_start`, `generate_lead` (only after a successful server response), `rfq_error`, `rfq_template_download`, `supplier_profile_open`. They require the existing accepted analytics-consent cookie and a loaded GA client. No form fields, filenames or query strings are added to event parameters. Preview GA remains disabled by the existing layout.
- Existing GA measurement ID: configured in the layout. Absence of a GA environment variable does not mean analytics is unconfigured.
- Public Vercel project ID is unchanged. The CLI currently resolves the stored team ID as `ori-project-workspace`; the older `f1composite` alias was unavailable. No relinking was performed.

## Search-platform baseline requiring account data

The production environment-variable listing did not contain a Google HTML verification variable. This does not establish whether domain/DNS verification already exists. Do not create a second property or assert Google is unverified from that absence.

An authorized Search Console owner should provide the following or complete the corresponding account steps:

1. Confirm the `getfrp.com` domain property and inspect the submitted sitemap.
2. Export three months of query/page/country/device performance and page-indexing reasons, plus the previous comparison period.
3. Inspect homepage, the three priority product pages and a buyer reference: selected canonical, last crawl, fetch outcome and indexing state.
4. Check manual actions, security issues and crawl statistics. Do not assume any exist.
5. In Bing Webmaster Tools confirm the site, sitemap and IndexNow processing.
6. In the existing GA property validate the new events and mark `generate_lead` as a key event if desired. Consent-based GA visits and GSC impressions measure different populations.

Review weekly using non-brand impressions, indexed priority URLs, search clicks, RFQ completion and qualified inquiries. Compare 28-day periods by landing page and country. Record AI-engine referral visits separately; a referrer does not measure total AI visibility. For citation observation use a fixed set of sourcing questions, record engine/date/answer/source URLs, and distinguish a brand mention from an actual citation. No ranking or citation target has been fabricated.

## Inputs needed for the remaining commercial work

| Item | Required input | Publication acceptance |
| --- | --- | --- |
| Product price samples | Dated quote or transaction, specification, quantity, trade term, permission | Label sample type, date, currency, unit and exclusions |
| Procurement case studies | Approved project records and customer permission | Separate observed results from assumptions; no invented buyer |
| Named experts / contracting identity | Confirmed identity, role and permission | Publish only verified scope and credentials |
| External citations and supplier confirmations | Supplier/association cooperation | Genuine editorial or official-profile links; no paid-link scheme |
| Historical URL recovery | GSC old-page performance and link data | Redirect only when the replacement answers the same intent |

External organizations have not been contacted. Suggested outreach artifact: send an existing supplier its canonical profile URL, ask it to confirm the factual product scope and source links, and invite a voluntary link from its official partner/media page. Send only after the user authorizes the recipient and message.

## Verification record

- Initial lint: zero errors, 24 existing warnings in unrelated files.
- Initial type check and 14 focused tests passed.
- First build compiled but lacked a local database URL. Retried using the existing preview environment in an ignored `.env.seo-preview.local`; compilation, type checks, all 925 generated routes and the 808-file rendered-English audit passed.
- Initial primary-page HTTP audit: 15 pages passed.
- Expanded HTTP audit found `/rfq` in the sitemap despite noindex; fixed by retaining noindex and excluding the form from the sitemap, with explicit Googlebot directives.
- Browser review covered the grating evidence table and independent price reference. Mobile price-reference DOM measured 390 px document width and 390 px scroll width; the comparison table scrolls inside its container.
- Final local validation: lint passed with the same 24 existing warnings; TypeScript passed; 17 focused tests passed; production build generated 925 routes and the 808-file rendered-English audit passed. All 286 sitemap URLs passed the final HTTP audit with zero failures, including the supporting redirect, noindex, download and verification-key checks.
- Deployment results are reported in the task handoff/PR. These checks do not submit a real RFQ or mutate supplier records.
