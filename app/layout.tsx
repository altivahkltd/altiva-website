import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-display",
  display: "swap",
});

// ~55 chars — inside the 50–60 sweet spot for search + social.
const title = "Altiva — Operator-led advisory. Hong Kong & beyond.";

// ~150 chars — inside the 110–160 sweet spot.
const description =
  "International operator-led advisory. Engaged when growth is there — but execution is not keeping up. Based in Hong Kong. Start a conversation.";

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
      logo: `${siteUrl}/altiva-logo.png`,
      description,
      foundingDate: "2025",
      founder: { "@id": `${siteUrl}/#julien-levet` },
      address: {
        "@type": "PostalAddress",
        streetAddress: "2/F West Wing, 822 Lai Chi Kok Road",
        addressLocality: "Cheung Sha Wan",
        addressRegion: "Kowloon",
        addressCountry: "HK",
      },
      areaServed: ["Europe", "North America", "Asia-Pacific"],
      sameAs: ["https://www.linkedin.com/company/altiva-limited"],
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#julien-levet`,
      name: "Julien Levet",
      jobTitle: "Founder & Principal",
      worksFor: { "@id": `${siteUrl}/#organization` },
      email: "mailto:julien_levet@outlook.com",
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
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
