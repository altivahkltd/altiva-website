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
  icons: {
    icon: "/altiva-logo.png",
    apple: "/altiva-logo.png",
  },
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="bg-paper font-sans text-ink antialiased">{children}</body>
    </html>
  );
}
