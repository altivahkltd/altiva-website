import { ImageResponse } from "next/og";

// Next.js App Router convention — generates the site's OG share image.
// Rendered at 2x spec resolution (2400x1260) so social platforms
// downscale cleanly regardless of their display dimensions.
// Typography + palette match the Claude Design handoff:
//   bone #ECE6D7 · ink #0E0E10 · brass #B08D57
//   Geist (display + body) + Instrument Serif (italic accent only).

export const runtime = "edge";
export const alt = "Altiva — Operator. Not consultant.";
export const size = { width: 2400, height: 1260 };
export const contentType = "image/png";

export default async function OGImage() {
  const [geistRegular, geistMedium, instrumentItalic] = await Promise.all([
    fetch(new URL("./fonts/Geist-Regular.ttf", import.meta.url)).then((r) =>
      r.arrayBuffer()
    ),
    fetch(new URL("./fonts/Geist-Medium.ttf", import.meta.url)).then((r) =>
      r.arrayBuffer()
    ),
    fetch(new URL("./fonts/InstrumentSerif-Italic.ttf", import.meta.url)).then(
      (r) => r.arrayBuffer()
    ),
  ]);

  const BONE = "#ECE6D7";
  const INK = "#0E0E10";
  const INK_2 = "#1A1A1D";
  const MUTED = "#5A5852";
  const ACCENT = "#B08D57";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: BONE,
          padding: "144px 160px",
          fontFamily: "Geist",
          position: "relative",
        }}
      >
        {/* Eyebrow — section mark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            fontFamily: "Geist",
            fontSize: 30,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            fontWeight: 500,
            color: MUTED,
          }}
        >
          <span style={{ color: ACCENT }}>§</span>
          <span>International advisory platform</span>
          <span
            style={{
              display: "flex",
              flex: 1,
              height: 1,
              maxWidth: 240,
              background: INK,
              opacity: 0.22,
            }}
          />
          <span>Hong Kong · Est. 2025</span>
        </div>

        {/* Display headline — matches the hero */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            color: INK,
            fontSize: 312,
            lineHeight: 0.92,
            letterSpacing: "-0.045em",
            fontWeight: 500,
          }}
        >
          <div style={{ display: "flex", alignItems: "baseline", gap: 36 }}>
            <span>Operator.</span>
            <span
              style={{
                display: "flex",
                fontFamily: "InstrumentSerif",
                fontStyle: "italic",
                color: ACCENT,
                letterSpacing: "-0.02em",
                fontWeight: 400,
              }}
            >
              Not
            </span>
          </div>
          <div style={{ display: "flex", color: INK_2 }}>consultant.</div>
        </div>

        {/* Bottom rule — wordmark + locator + CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            borderTop: `1px solid ${INK}`,
            paddingTop: 48,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <div
              style={{
                display: "flex",
                fontFamily: "Geist",
                fontSize: 72,
                color: INK,
                letterSpacing: "-0.035em",
                fontWeight: 600,
              }}
            >
              Altiva
            </div>
            <div
              style={{
                display: "flex",
                color: MUTED,
                fontSize: 26,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 500,
              }}
            >
              Asian Pacific · European markets
            </div>
          </div>

          {/* Call-to-action lockup */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 22,
              padding: "24px 44px",
              backgroundColor: INK,
              color: BONE,
              fontSize: 28,
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
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
        { name: "Geist", data: geistRegular, style: "normal", weight: 400 },
        { name: "Geist", data: geistMedium, style: "normal", weight: 500 },
        {
          name: "InstrumentSerif",
          data: instrumentItalic,
          style: "italic",
          weight: 400,
        },
      ],
    }
  );
}
