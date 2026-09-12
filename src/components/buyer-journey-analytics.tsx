"use client";

import { useEffect } from "react";
import { trackBuyerEvent } from "@/lib/buyer-analytics";

export function BuyerJourneyAnalytics() {
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      const url = new URL(anchor.href, window.location.origin);
      if (url.origin !== window.location.origin) return;
      const path = url.pathname.replace(/^\/en(?=\/|$)/, "");
      if (path === "/rfq") trackBuyerEvent("rfq_open");
      else if (/^\/buyer-resources\/[a-z-]+-rfq\.csv$/.test(path)) trackBuyerEvent("rfq_template_download");
      else if (anchor.dataset.buyerEvent === "supplier_profile_open") trackBuyerEvent("supplier_profile_open");
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);
  return null;
}
