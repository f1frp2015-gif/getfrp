/**
 * Reconstruct the public origin behind a reverse proxy. request.url may carry
 * the process listener rather than the browser-facing GetFRP host.
 */
export function publicOrigin(request: Request): string {
  const host =
    request.headers.get("x-forwarded-host") || request.headers.get("host") || "getfrp.com";
  const proto = request.headers.get("x-forwarded-proto") || "https";
  return `${proto}://${host}`;
}

export function publicUrl(request: Request, pathname?: string, search?: string): string {
  const u = new URL(request.url);
  return `${publicOrigin(request)}${pathname ?? u.pathname}${search ?? u.search}`;
}

/**
 * 校验 redirect_url 仅为同源相对路径,防开放重定向。
 * 返回安全路径(以单个 "/" 开头、非 "//"),否则返回 fallback。
 */
export function safeRedirectPath(value: string | null | undefined, fallback = "/dashboard"): string {
  if (!value) return fallback;
  // 允许传入绝对的本站 URL,提取其 path+search
  let candidate = value;
  try {
    if (/^https?:\/\//i.test(value)) {
      const u = new URL(value);
      candidate = `${u.pathname}${u.search}`;
    }
  } catch {
    return fallback;
  }
  if (!candidate.startsWith("/") || candidate.startsWith("//")) return fallback;
  return candidate;
}
