import { ImageResponse } from "next/og";

// Per-route OG for the standalone English supplier directory.

export const alt = "Verified Chinese FRP supplier directory — ranked by scale";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
            "linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #1a1a1a 100%)",
          color: "#ffffff",
          padding: "72px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
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
          <span>VERIFIED SUPPLIER DIRECTORY</span>
          <span style={{ color: "#ffffff", fontWeight: 600 }}>
            getfrp
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 8,
            fontSize: 80,
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "-0.02em",
          }}
        >
          <div>China FRP suppliers,</div>
          <div style={{ color: "rgba(255,255,255,0.55)" }}>
            verified, ranked by scale.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 22,
            color: "rgba(255,255,255,0.75)",
          }}
        >
          <span>Manufacturer · Fiber · Resin · Equipment · Mold · Testing</span>
          <span style={{ fontWeight: 500, color: "#ffffff" }}>
            getfrp.com/suppliers
          </span>
        </div>
      </div>
    ),
    { ...size },
  );
}
