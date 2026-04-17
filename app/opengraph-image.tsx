import { ImageResponse } from "next/og";

// Next.js App Router convention — generates the site's OG share image.
// Rendered at 2x spec resolution (2400x1260) so social platforms
// downscale cleanly regardless of their display dimensions.

export const runtime = "edge";
export const alt = "Altiva — Operator. Not consultant.";
export const size = { width: 2400, height: 1260 };
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
          padding: "144px 160px",
          fontFamily: "Inter",
        }}
      >
        {/* Eyebrow */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
            fontSize: 36,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          <span style={{ color: "#A16207" }}>§</span>
          <span style={{ color: "#78716C" }}>International Advisory Platform</span>
        </div>

        {/* Display headline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontFamily: "Fraunces",
            color: "#0C0A09",
            fontSize: 312,
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

        {/* Bottom rule + wordmark + locator + CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: "2px solid #E7E5E4",
            paddingTop: 56,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 14,
            }}
          >
            <div
              style={{
                display: "flex",
                fontFamily: "Fraunces",
                fontSize: 84,
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
                fontSize: 30,
                letterSpacing: "0.24em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Hong Kong · Europe · APAC
            </div>
          </div>

          {/* Call-to-action lockup */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 24,
              padding: "28px 48px",
              backgroundColor: "#0C0A09",
              color: "#FAFAF9",
              fontSize: 34,
              fontWeight: 500,
              letterSpacing: "0.04em",
            }}
          >
            <span>Start a conversation</span>
            <span style={{ display: "flex" }}>→</span>
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
