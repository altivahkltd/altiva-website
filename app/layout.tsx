import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Instrument_Serif } from "next/font/google";
import "./globals.css";

// Geist Sans — body + display. Vercel's variable font; one file, all weights.
// Overridden locally via `--font-sans` to keep globals.css framework-agnostic.
const geist = GeistSans;
const geistMono = GeistMono;

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-italic",
  display: "swap",
});

// ~55 chars — inside the 50–60 sweet spot for search + social.
const title = "Altiva — Operator-led advisory. Hong Kong & beyond.";

// ~170 chars — sharpened for the design-refreshed positioning.
const description =
  "Altiva is a senior operator engaged when execution becomes the bottleneck. Fractional COO, transformation, and strategic mandates across Europe and Asia-Pacific.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL("https://www.altiva.hk"),
  openGraph: {
    title,
    description,
    type: "website",
    url: "https://www.altiva.hk",
    siteName: "Altiva",
    locale: "en_GB",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  alternates: {
    canonical: "https://www.altiva.hk",
  },
};

const siteUrl = "https://www.altiva.hk";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Altiva Limited",
      alternateName: "Altiva",
      url: siteUrl,
      logo: `${siteUrl}/altiva-logo-black.png`,
      description,
      foundingDate: "2025",
      founder: { "@id": `${siteUrl}/#julien-levet` },
      email: "mailto:julien@altiva.hk",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2/F West Wing, 822 Lai Chi Kok Road",
        addressLocality: "Cheung Sha Wan",
        addressRegion: "Kowloon",
        addressCountry: "HK",
      },
      areaServed: ["Europe", "North America", "Asia-Pacific"],
      sameAs: ["https://www.linkedin.com/company/altivaltd"],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#julien-levet`,
      name: "Julien Levet",
      jobTitle: "Founder & Principal",
      worksFor: { "@id": `${siteUrl}/#organization` },
      email: "mailto:julien@altiva.hk",
      knowsLanguage: ["en", "fr"],
      nationality: "FR",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Hong Kong",
        addressCountry: "HK",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Altiva",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en-GB",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable} ${instrumentSerif.variable}`}
    >
      <body>
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
