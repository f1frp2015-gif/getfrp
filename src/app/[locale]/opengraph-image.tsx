import { ImageResponse } from "next/og";

// Locale-aware 1200×630 OG image. Replaces the old 512×512 /og-icon.png
// reference — too small for LinkedIn / Twitter / Slack large cards, which
// rely on minimum 1.91:1 aspect ratio for the rich preview.
//
// Static at build time (no Request-time APIs, no DB calls), so this is
// generated once per deploy and cached by the platform.

export const alt = "getfrp — FRP products and suppliers in China";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const COPY = {
  eyebrow: "CHINA FRP MARKETPLACE · PRODUCTS + FACTORIES",
  h1Top: "FRP products and suppliers",
  h1Bottom: "from China, verified.",
  sub: "Product specs · manufacturer profiles · standards · one English RFQ",
  domain: "getfrp.com",
  brand: "getfrp",
} as const;

export default function OpengraphImage() {
  const copy = COPY;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background:
            "linear-gradient(135deg, #1b2430 0%, #1b2430 50%, #1b2430 100%)",
          color: "#ffffff",
          padding: "72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top row: eyebrow + brand */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            letterSpacing: 4,
            textTransform: "uppercase",
            color: "rgba(255,255,255,0.65)",
          }}
        >
          <span>{copy.eyebrow}</span>
          <span style={{ color: "#ffffff", fontWeight: 600 }}>
            {copy.brand}
          </span>
        </div>

        {/* Headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            fontSize: 86,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          <div>{copy.h1Top}</div>
          <div style={{ color: "rgba(255,255,255,0.55)" }}>
            {copy.h1Bottom}
          </div>
        </div>

        {/* Bottom row: sub + domain */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          <span>{copy.sub}</span>
          <span style={{ fontWeight: 500, color: "#ffffff" }}>
            {copy.domain}
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
