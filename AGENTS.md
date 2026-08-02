<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# GetFRP repository and deployment identity

This repository is the standalone source of truth for GetFRP:

- Local project: `/Users/ori/Projects/getfrp`
- GitHub: `https://github.com/f1frp2015-gif/getfrp`
- Production branch: `main`
- Vercel team/project: `f1composite/getfrp`
- Vercel project ID: `prj_sCsPN3I1BcjOZT4EQD3lFgzQnnV3`
- Canonical production domain: `https://getfrp.com`

Do not connect this working tree or the Vercel `getfrp` project to the
`f1frp2015-gif/f1frp` repository. Do not deploy this repository to the f1frp
Aliyun ECS target. The projects may intentionally share selected application
code or data contracts, but their Git histories and deployment pipelines are
independent from this split onward.

# Required workflow

- Follow the global task-branch → push → PR → Vercel Preview → merge `main` → Vercel Production workflow.
- Before any Vercel command, verify `.vercel/project.json` names project `getfrp` and contains the project ID above.
- GetFRP defaults to `NEXT_PUBLIC_SITE_URL=https://getfrp.com`, `NEXT_PUBLIC_LOCALES=en`, and `NEXT_PUBLIC_DEFAULT_LOCALE=en`.
- Validate changes with `pnpm lint`, `pnpm exec tsc --noEmit`, and `NEXT_PUBLIC_SITE_URL=https://getfrp.com NEXT_PUBLIC_LOCALES=en NEXT_PUBLIC_DEFAULT_LOCALE=en pnpm build`.
- A request to “deploy” means merge a validated PR to `main`, wait for the Git-connected Vercel production deployment, verify `getfrp.com`, and report the Git SHA and Vercel deployment ID.

## Supplier profile logo rule

- Every newly published supplier profile must first check the supplier's official website for its current logo.
- Prefer downloading that official logo into `public/supplier-assets/` and referencing the local asset from the profile data; do not rely on an unverified hotlinked image.
- If no official logo is available, use the profile's text fallback and record that the logo was unavailable. Keep logo provenance in the profile source comments or official catalog links.
