"use client";

import Script from "next/script";
import { useSyncExternalStore } from "react";

const COOKIE_KEY = "cookie-consent-v1";

function hasAnalyticsConsent(): boolean {
  if (typeof document === "undefined") return false;
  const match = document.cookie.match(
    new RegExp(`(?:^|; )${COOKIE_KEY}=([^;]+)`),
  );
  return match ? decodeURIComponent(match[1]) === "accepted" : false;
}

export function ConsentedAhrefsAnalytics() {
  const allowed = useSyncExternalStore(
    (onStoreChange) => {
      window.addEventListener("cookie-consent", onStoreChange);
      return () => window.removeEventListener("cookie-consent", onStoreChange);
    },
    hasAnalyticsConsent,
    () => false,
  );

  if (!allowed) return null;

  return (
    <Script
      src="https://analytics.ahrefs.com/analytics.js"
      data-key="bsT6HIN0jhgl/rIfKR+wvA"
      strategy="afterInteractive"
      async
    />
  );
}
