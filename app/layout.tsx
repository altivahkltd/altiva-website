import type { Metadata, Viewport } from "next";
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

// Enhanced title — keyword-rich for SEO without breaking the brand voice.
const title =
  "Altiva — Operator-led advisory. Fractional COO · Hong Kong & APAC · Europe.";

// ~190 chars — keeps us under the 200-char mobile SERP truncation and
// name-drops Julien + Hong Kong for the "founder search" long-tail.
const description =
  "Altiva is a senior operator engaged when execution becomes the bottleneck. Fractional COO, transformation, and strategic mandates across Europe and Asia-Pacific. Founded by Julien Levet in Hong Kong.";

const siteUrl = "https://www.altiva.hk";

// Short-form titles used by the social unfurl + the JS language switch.
const ogTitle = "Altiva — Operator, not consultant.";

export const metadata: Metadata = {
  title,
  description,
  metadataBase: new URL(siteUrl),
  authors: [{ name: "Julien Levet", url: siteUrl }],
  creator: "Julien Levet",
  publisher: "Altiva Limited",
  keywords: [
    "fractional COO",
    "operator-led advisory",
    "interim COO",
    "transformation APAC",
    "fractional COO Hong Kong",
    "COO à temps partagé",
    "operator advisory Asia Pacific",
    "post-merger integration",
    "operational turnaround",
    "go-to-market APAC",
    "Julien Levet",
    "Altiva",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: ogTitle,
    description,
    type: "website",
    url: siteUrl,
    siteName: "Altiva",
    locale: "en_US",
    alternateLocale: ["fr_FR"],
  },
  twitter: {
    card: "summary_large_image",
    title: ogTitle,
    description,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      en: siteUrl,
      fr: `${siteUrl}/?lang=fr`,
      "x-default": siteUrl,
    },
  },
  // Geo / locale signals — Next's Metadata API surfaces these via `other`.
  other: {
    "geo.region": "HK",
    "geo.placename": "Hong Kong",
    "geo.position": "22.3351;114.1490",
    "ICBM": "22.3351, 114.1490",
  },
};

export const viewport: Viewport = {
  themeColor: "#ECE6D7",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Altiva",
      legalName: "Altiva Limited",
      alternateName: "Altiva",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/altiva-logo-black.png`,
        width: 705,
        height: 612,
      },
      image: `${siteUrl}/opengraph-image`,
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
      areaServed: [
        { "@type": "Place", name: "Hong Kong" },
        { "@type": "Place", name: "Asia-Pacific" },
        { "@type": "Place", name: "Europe" },
        { "@type": "Country", name: "France" },
        { "@type": "Country", name: "Singapore" },
        { "@type": "Country", name: "China" },
      ],
      knowsLanguage: ["en", "fr"],
      sameAs: ["https://www.linkedin.com/company/altivaltd"],
    },
    {
      "@type": "ProfessionalService",
      "@id": `${siteUrl}/#service`,
      name: "Altiva — Operator-led advisory",
      url: siteUrl,
      image: `${siteUrl}/opengraph-image`,
      description:
        "Senior operator engaged when execution becomes the bottleneck. Fractional COO, high-stakes advisory, transformation & AI programmes, go-to-market, operational review, and transaction preparation.",
      provider: { "@id": `${siteUrl}/#organization` },
      serviceType: [
        "Fractional COO",
        "Interim COO",
        "Operational transformation",
        "AI programme leadership",
        "Go-to-market execution",
        "Operational review & efficiency",
        "Transaction preparation",
        "Post-merger integration",
        "Operational turnaround",
      ],
      areaServed: [
        { "@type": "Place", name: "Hong Kong" },
        { "@type": "Place", name: "Asia-Pacific" },
        { "@type": "Place", name: "Europe" },
      ],
      priceRange: "$$$$",
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#julien-levet`,
      name: "Julien Levet",
      givenName: "Julien",
      familyName: "Levet",
      jobTitle: "Founder & Principal",
      worksFor: { "@id": `${siteUrl}/#organization` },
      url: `${siteUrl}/#founder`,
      email: "mailto:julien@altiva.hk",
      description:
        "Senior operator with 15+ years of international experience across Europe and Asia-Pacific. Former Schneider Electric and COO of OÏKO.",
      alumniOf: [
        { "@type": "Organization", name: "Schneider Electric" },
        { "@type": "Organization", name: "OÏKO" },
      ],
      knowsAbout: [
        "Operational transformation",
        "Fractional leadership",
        "Go-to-market strategy",
        "AI programme delivery",
        "Post-merger integration",
        "Exit preparation",
      ],
      knowsLanguage: ["en", "fr"],
      nationality: { "@type": "Country", name: "France" },
      workLocation: { "@type": "Place", name: "Hong Kong" },
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
      inLanguage: ["en", "fr"],
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
