# GetFRP

GetFRP is the independent English procurement platform for sourcing FRP and
composite materials, equipment, tooling, molds, and finished products from
China.

## Canonical mapping

| Layer | Canonical target |
| --- | --- |
| Local | `/Users/ori/Projects/getfrp` |
| GitHub | `f1frp2015-gif/getfrp` |
| Production branch | `main` |
| Vercel | `f1composite/getfrp` |
| Domain | `https://getfrp.com` |

This repository is independent from `f1frp2015-gif/f1frp`. GetFRP production
must always be reproducible from this repository's `main` branch.

## Database isolation

GetFRP uses its own PostgreSQL database and runtime role:

| Setting | Required value |
| --- | --- |
| Database | `getfrp` |
| Runtime role | `getfrp_app` |

Never point GetFRP at the F1FRP database or reuse F1FRP's runtime connection.
The application role only receives access to the `getfrp` database. When
provisioning a fresh database, run the supplier slug migration with a database
owner connection before switching the application over:

```bash
DATABASE_URL='postgresql://OWNER_CONNECTION_TO_GETFRP' \
pnpm exec tsx scripts/apply-getfrp-supplier-slugs.ts
```

## Local development

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

The standalone defaults are English/GetFRP even when the public variables are
not set, but local database and API credentials still belong in `.env.local`.

## Validation

```bash
pnpm lint
pnpm exec tsc --noEmit
NEXT_PUBLIC_SITE_URL=https://getfrp.com \
NEXT_PUBLIC_LOCALES=en \
NEXT_PUBLIC_DEFAULT_LOCALE=en \
pnpm build
```

## Delivery

Use a short-lived task branch and pull request. Vercel creates the preview;
merging a validated PR to `main` creates the production deployment. Direct
`vercel --prod` is reserved for emergencies and must be reconciled to Git in
the same work session.
