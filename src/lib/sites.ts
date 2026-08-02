// Standalone GetFRP site identity. GetFRP has no cross-domain language peer.
export const SITE_EN = "https://getfrp.com";

const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim() ?? SITE_EN;
// 去尾斜线
const normalized = raw.endsWith("/") ? raw.slice(0, -1) : raw;

export const CURRENT_SITE_URL = normalized;
export const ACTIVE_LOCALE = "en" as const;
