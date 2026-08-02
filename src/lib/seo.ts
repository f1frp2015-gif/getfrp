// Per-page SEO helpers. Used by every page's generateMetadata so we produce
// path-aware canonicals instead of the all-pages-point-to-root bug the layout
// had before. GetFRP is English-only and never emits hreflang alternates.

import type { Metadata } from "next";
import { CURRENT_SITE_URL } from "@/lib/sites";

// Build a canonical absolute URL for the current deploy + path.
export function canonical(path: string): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${CURRENT_SITE_URL}${p === "/" ? "" : p}`;
}

// Per-page Open Graph block. The root layout sets ONE og:title (homepage
// brand tagline) and og:url="/" for every route; in this Next build a child
// `openGraph` REPLACES the parent's (resolve-metadata.js), and a page's
// `title` does NOT propagate into og:title. So without this helper every
// paper/material/supplier page ships the homepage's og:title and points
// og:url at the root — the same class of bug as the old all-pages-canonical
// =root issue the layout comment describes.
//
// We re-emit type/siteName/locale (lost on replace); the per-route
// opengraph-image.tsx still auto-attaches og:image, and twitter:* auto-
// inherits from these fields. Pass the page's own title/description.
export function og(
  path: string,
  meta: {
    title?: string;
    description?: string;
    image?: { path: string; alt?: string; width?: number; height?: number };
  } = {},
): Metadata["openGraph"] {
  return {
    type: "website",
    siteName: "getfrp",
    locale: "en_US",
    url: canonical(path),
    ...(meta.title ? { title: meta.title } : {}),
    ...(meta.description ? { description: meta.description } : {}),
    ...(meta.image
      ? {
          images: [
            {
              url: canonical(meta.image.path),
              alt: meta.image.alt,
              width: meta.image.width,
              height: meta.image.height,
            },
          ],
        }
      : {}),
  };
}

// Keep the helper name because this is the Next Metadata API field name. The
// returned object is intentionally limited to the canonical URL: no language
// map, x-default, Chinese URL, or URL on any other domain is permitted.
export function alternates(path: string): Metadata["alternates"] {
  return { canonical: canonical(path) };
}
