import { ImageResponse } from "next/og";

// Next.js App Router convention — generates the site's OG share image.
// Rendered on demand at the edge.

export const runtime = "edge";
export const alt = "Altiva — Operator. Not consultant.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  // Pull fonts from Google Fonts CSS API (stable, long-lived URLs).
  const cssRes = await fetch(
    "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;1,9..144,400&family=Inter:wght@500&display=swap",
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36",
      },
    }
  );
  const cssText = await cssRes.text();

  const frauncesRegularUrl = cssText.match(
    /@font-face\s*{[^}]*?font-family:\s*'Fraunces'[^}]*?font-style:\s*normal[^}]*?src:\s*url\((https:\/\/[^)]+\.woff2)\)/
  )?.[1];
  const frauncesItalicUrl = cssText.match(
    /@font-face\s*{[^}]*?font-family:\s*'Fraunces'[^}]*?font-style:\s*italic[^}]*?src:\s*url\((https:\/\/[^)]+\.woff2)\)/
  )?.[1];
  const interUrl = cssText.match(
    /@font-face\s*{[^}]*?font-family:\s*'Inter'[^}]*?src:\s*url\((https:\/\/[^)]+\.woff2)\)/
  )?.[1];

  const [fraunces, frauncesItalic, inter] = await Promise.all([
    frauncesRegularUrl ? fetch(frauncesRegularUrl).then((r) => r.arrayBuffer()) : null,
    frauncesItalicUrl ? fetch(frauncesItalicUrl).then((r) => r.arrayBuffer()) : null,
    interUrl ? fetch(interUrl).then((r) => r.arrayBuffer()) : null,
  ]);

  const fonts = [
    fraunces && { name: "Fraunces", data: fraunces, style: "normal" as const, weight: 400 as const },
    frauncesItalic && { name: "Fraunces", data: frauncesItalic, style: "italic" as const, weight: 400 as const },
    inter && { name: "Inter", data: inter, style: "normal" as const, weight: 500 as const },
  ].filter(Boolean) as Array<{ name: string; data: ArrayBuffer; style: "normal" | "italic"; weight: 400 | 500 }>;

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

        {/* Display type */}
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
          <div style={{ display: "flex" }}>Operator.</div>
          <div
            style={{
              display: "flex",
              fontStyle: "italic",
              color: "#44403C",
            }}
          >
            Not consultant.
          </div>
        </div>

        {/* Bottom hairline bar */}
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
    { ...size, fonts }
  );
}
