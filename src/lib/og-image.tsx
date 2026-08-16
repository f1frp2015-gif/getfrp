import { ImageResponse } from "next/og";

export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

export function renderOgCard({
  category,
  title,
  subtitle,
  meta,
}: {
  category: string;
  title: string;
  subtitle?: string;
  meta?: string;
}) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#ffffff",
          padding: "68px 80px 56px",
          fontFamily: "ui-sans-serif, system-ui, -apple-system",
          color: "#1b2430",
          position: "relative",
        }}
      >
        {/* signal accent top rail */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: 8,
            width: "100%",
            background: "#123f8c",
            display: "flex",
          }}
        />

        {/* N12A-4 brand mark: China origin and three composite export layers */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 24,
            fontWeight: 600,
            letterSpacing: "-0.01em",
          }}
        >
          <svg width="32" height="32" viewBox="0 0 48 48">
            <rect width="48" height="48" rx="11" fill="#0A1F44" />
            <rect x="4.5" y="20" width="8" height="8" rx="1.5" fill="#E54B4B" />
            <path d="m13.5 12 12 12-12 12" fill="none" stroke="#FFFFFF" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="m21.5 12 12 12-12 12" fill="none" stroke="#7BE4E1" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
            <path d="m29.5 12 12 12-12 12" fill="none" stroke="#19C3C8" strokeWidth="4.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>GetFRP · China composites sourcing</div>
        </div>

        {/* category pill */}
        <div style={{ display: "flex", marginTop: 36 }}>
          <div
            style={{
              display: "flex",
              padding: "6px 12px",
              border: "1.5px solid #d9dfe8",
              color: "#5d6672",
              borderRadius: 4,
              fontSize: 18,
              fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {category}
          </div>
        </div>

        {/* headline */}
        <div
          style={{
            display: "flex",
            fontSize: 66,
            fontWeight: 600,
            lineHeight: 1.1,
            marginTop: 28,
            letterSpacing: "-0.025em",
          }}
        >
          {truncate(title, 68)}
        </div>

        {subtitle ? (
          <div
            style={{
              display: "flex",
              fontSize: 24,
              marginTop: 20,
              color: "#5d6672",
              lineHeight: 1.4,
              letterSpacing: "-0.005em",
            }}
          >
            {truncate(subtitle, 140)}
          </div>
        ) : null}

        <div style={{ flexGrow: 1 }} />

        {/* footer rail */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1.5px solid #d9dfe8",
            paddingTop: 20,
            fontSize: 20,
            color: "#5d6672",
            fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
            letterSpacing: "0.02em",
          }}
        >
          <div style={{ display: "flex" }}>
            {meta ?? "AI-powered composite materials platform"}
          </div>
          <div style={{ display: "flex", color: "#123f8c" }}>→ getfrp.com</div>
        </div>
      </div>
    ),
    { ...OG_SIZE }
  );
}

function truncate(s: string, n: number): string {
  if (!s) return "";
  return s.length <= n ? s : s.slice(0, n - 1) + "…";
}
