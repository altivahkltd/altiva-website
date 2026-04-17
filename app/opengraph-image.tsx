import { ImageResponse } from "next/og";

// Next.js App Router convention: this file generates the site's OG image.
// Accessible at /opengraph-image and auto-wired to metadata.

export const runtime = "edge";
export const alt = "Altiva — Operator. Not consultant.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(url: string) {
  const res = await fetch(url);
  return res.arrayBuffer();
}

export default async function OGImage() {
  // Pull Fraunces + Inter straight from Google's font CDN at render time.
  // These specific file URLs are stable for Google's hosted variable fonts.
  const [frauncesRegular, frauncesItalic, interMedium] = await Promise.all([
    loadFont(
      "https://fonts.gstatic.com/s/fraunces/v32/6NUh8FyLNQOQZAnv9ZwNjucMHVn85Ni7emEq9ZlqDw.woff"
    ),
    loadFont(
      "https://fonts.gstatic.com/s/fraunces/v32/6NUg8FyLNQOQZAnv9bYEvDiDuzc8q8PQN-NXHA_DYVzFGoQvkA.woff"
    ),
    loadFont(
      "https://fonts.gstatic.com/s/inter/v19/UcCo3FwrK3iLTcvneQg7Ca725JhhKnNqk4j1ebLhAm8SrXTQ2w.woff"
    ),
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
          position: "relative",
        }}
      >
        {/* Top bar — eyebrow / margin annotation */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            color: "#A16207",
            fontFamily: "Inter",
            fontWeight: 500,
            fontSize: 18,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
          }}
        >
          <span>§</span>
          <span style={{ color: "#78716C" }}>International Advisory Platform</span>
        </div>

        {/* Main display type */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Fraunces",
            color: "#0C0A09",
            fontSize: 148,
            lineHeight: 0.98,
            letterSpacing: "-0.025em",
          }}
        >
          <div>Operator.</div>
          <div
            style={{
              fontFamily: "FrauncesItalic",
              color: "#44403C",
              fontStyle: "italic",
            }}
          >
            Not consultant.
          </div>
        </div>

        {/* Bottom row — wordmark + locator */}
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
              flexDirection: "column",
              alignItems: "flex-end",
              fontFamily: "Inter",
              color: "#78716C",
              fontSize: 18,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
            }}
          >
            <span>Hong Kong · Europe · APAC</span>
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: frauncesRegular, style: "normal", weight: 400 },
        { name: "FrauncesItalic", data: frauncesItalic, style: "italic", weight: 400 },
        { name: "Inter", data: interMedium, style: "normal", weight: 500 },
      ],
    }
  );
}
