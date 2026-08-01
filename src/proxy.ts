import type { NextRequest } from "next/server";
import createIntlMiddleware from "next-intl/middleware";
import { routing } from "@/i18n/routing";
import { publicOrigin, publicUrl } from "@/lib/auth/public-origin";
import { SESSION_COOKIE, verifySession } from "@/lib/auth/session";

const handleIntlRouting = createIntlMiddleware(routing);

function isProtectedPath(pathname: string): boolean {
  const stripped = pathname.replace(/^\/en(?=\/|$)/, "");
  return stripped === "/dashboard" || stripped.startsWith("/dashboard/");
}

export default async function proxy(request: NextRequest) {
  const { pathname } = new URL(request.url);

  if (pathname.startsWith("/api/")) return;

  if (isProtectedPath(pathname)) {
    const token = request.cookies.get(SESSION_COOKIE)?.value;
    const session = await verifySession(token);
    if (!session) {
      const returnUrl = publicUrl(request);
      const signInUrl = `${publicOrigin(request)}/sign-in?redirect_url=${encodeURIComponent(returnUrl)}`;
      return Response.redirect(signInUrl, 307);
    }
  }

  return handleIntlRouting(request);
}

export const config = {
  matcher: [
    "/((?!_next|_vercel|indexnow-key|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|txt|xml)).*)",
    "/(api|trpc)(.*)",
  ],
};
