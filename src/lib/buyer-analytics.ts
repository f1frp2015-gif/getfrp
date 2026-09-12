type BuyerEvent = "rfq_open" | "rfq_start" | "generate_lead" | "rfq_error" | "rfq_template_download" | "supplier_profile_open";

export function analyticsConsentGranted(cookie: string): boolean {
  return /(?:^|;\s*)cookie-consent-v1=accepted(?:;|$)/.test(cookie);
}

// Do not send form values, supplier IDs, query strings, contact details or files.
export function trackBuyerEvent(event: BuyerEvent) {
  if (typeof window === "undefined" || !analyticsConsentGranted(document.cookie)) return;
  const target = window as Window & { gtag?: (command: string, event: string, parameters: Record<string, string>) => void };
  target.gtag?.("event", event, { event_category: "buyer_journey" });
}
