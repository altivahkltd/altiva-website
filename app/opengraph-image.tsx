import { ImageResponse } from "next/og";

// Next.js App Router convention — generates the site's OG share image.
// Fonts are bundled next to this route and loaded at the edge via
// `fetch(new URL('./fonts/…', import.meta.url))` — the documented
// reliable pattern for @vercel/og.

export const runtime = "edge";
export const alt = "Altiva — Operator. Not consultant.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const [fraunces, frauncesItalic, inter] = await Promise.all([
    fetch(new URL("./fonts/Fraunces-Regular.ttf", import.meta.url)).then((r) => r.arrayBuffer()),
    fetch(new URL("./fonts/Fraunces-Italic.ttf", import.meta.url)).then((r) => r.arrayBuffer()),
    fetch(new URL("./fonts/Inter-Medium.ttf", import.meta.url)).then((r) => r.arrayBuffer()),
  ]);

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
          fontFamily: "Inter",
        }}
      >
        {/* Eyebrow — § + margin note */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 18,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          <span style={{ color: "#A16207" }}>§</span>
          <span style={{ color: "#78716C" }}>International Advisory Platform</span>
        </div>

        {/* Display headline — Fraunces */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Fraunces",
            color: "#0C0A09",
            fontSize: 156,
            lineHeight: 0.98,
            letterSpacing: "-0.025em",
          }}
        >
          <div style={{ display: "flex" }}>Operator.</div>
          <div
            style={{
              display: "flex",
              fontFamily: "FrauncesItalic",
              fontStyle: "italic",
              color: "#44403C",
            }}
          >
            Not consultant.
          </div>
        </div>

        {/* Bottom rule + wordmark + locator */}
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
              fontFamily: "Fraunces",
              fontSize: 42,
              color: "#0C0A09",
              letterSpacing: "-0.01em",
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
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: fraunces, style: "normal", weight: 400 },
        { name: "FrauncesItalic", data: frauncesItalic, style: "normal", weight: 400 },
        { name: "Inter", data: inter, style: "normal", weight: 500 },
      ],
    }
  );
}
