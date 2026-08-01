"use client";

import { useEffect, useState } from "react";
import { Link } from "@/i18n/navigation";

const COOKIE_KEY = "cookie-consent-v1";

type Consent = "accepted" | "declined";

function readConsent(): Consent | null {
  if (typeof document === "undefined") return null;
  const m = document.cookie.match(
    new RegExp(`(?:^|; )${COOKIE_KEY}=([^;]+)`),
  );
  if (!m) return null;
  const v = decodeURIComponent(m[1]);
  return v === "accepted" || v === "declined" ? v : null;
}

function writeConsent(value: Consent) {
  // 1-year persistent cookie; SameSite=Lax avoids breaking auth callbacks.
  const maxAge = 60 * 60 * 24 * 365;
  document.cookie = `${COOKIE_KEY}=${value}; Max-Age=${maxAge}; Path=/; SameSite=Lax`;
}

export function CookieBanner() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (readConsent() === null) setShown(true);
    }, 0);
    return () => window.clearTimeout(timer);
  }, []);

  if (!shown) return null;

  function dismiss(value: Consent) {
    writeConsent(value);
    setShown(false);
    // Soft-broadcast so analytics scripts can react in the same session.
    window.dispatchEvent(
      new CustomEvent("cookie-consent", { detail: value }),
    );
  }

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border/80 bg-background/95 backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-2 px-3 py-2.5 sm:flex-row sm:items-center sm:gap-6 sm:px-6 sm:py-3">
        <p className="flex-1 text-[11px] leading-4 text-muted-foreground sm:text-[12px] sm:leading-5">
          <span className="sm:hidden">
            Optional analytics help us improve. {" "}
          </span>
          <span className="hidden sm:inline">
            We use essential cookies to keep this site running, plus optional
            analytics to understand how visitors use it.{" "}
          </span>
          <Link href={"/privacy" as never} className="underline hover:text-foreground">
            Privacy Policy
          </Link>
        </p>
        <div className="grid shrink-0 grid-cols-2 gap-2 sm:flex sm:items-center">
          <button
            type="button"
            onClick={() => dismiss("declined")}
            className="h-8 whitespace-nowrap rounded-md border border-border px-3 text-[11px] transition-colors hover:bg-muted"
          >
            Decline optional
          </button>
          <button
            type="button"
            onClick={() => dismiss("accepted")}
            className="h-8 whitespace-nowrap rounded-md bg-foreground px-3 text-[11px] text-background transition-colors hover:bg-foreground/90"
          >
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
