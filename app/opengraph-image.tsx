import { ImageResponse } from "next/og";

// Next.js App Router convention — generates the site's OG share image.
// Rendered on demand at the edge. Uses @vercel/og's built-in font
// to avoid external network dependencies during render.

export const runtime = "edge";
export const alt = "Altiva — Operator. Not consultant.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#FAFAF9",
          padding: "72px 80px",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#A16207",
            fontSize: 18,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          <span>§</span>
          <span style={{ color: "#78716C" }}>International Advisory Platform</span>
        </div>

        {/* Display type — two lines */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: "#0C0A09",
            fontSize: 148,
            lineHeight: 0.98,
            letterSpacing: "-0.035em",
            fontWeight: 500,
          }}
        >
          <div style={{ display: "flex" }}>Operator.</div>
          <div
            style={{
              display: "flex",
              color: "#44403C",
              fontStyle: "italic",
            }}
          >
            Not consultant.
          </div>
        </div>

        {/* Bottom row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: "1px solid #E7E5E4",
            paddingTop: 28,
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: 42,
              color: "#0C0A09",
              letterSpacing: "-0.01em",
              fontWeight: 500,
            }}
          >
            Altiva
          </div>
          <div
            style={{
              display: "flex",
              color: "#78716C",
              fontSize: 18,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              fontWeight: 500,
            }}
          >
            Hong Kong · Europe · APAC
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
