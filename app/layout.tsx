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

const title = "Altiva — Operator. Not consultant.";
const description =
  "International operator-led advisory platform. Altiva is engaged when growth is there — but execution is not keeping up. 15+ years of senior operating experience across 40+ countries. Based in Hong Kong.";

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
