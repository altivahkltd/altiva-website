import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

// Fraunces as a true variable font — full weight range + italic + extra axes.
// (No `weight` array: specifying axes requires variable-font mode.)
const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Altiva — Operator. Not consultant.",
  description:
    "Altiva is an international operator-led advisory platform for executives and organizations navigating complex, high-stakes business situations.",
  metadataBase: new URL("https://www.altiva.hk"),
  icons: {
    icon: "/altiva-logo.png",
    apple: "/altiva-logo.png",
  },
  openGraph: {
    title: "Altiva — Operator. Not consultant.",
    description:
      "International operator-led advisory platform. Hong Kong · Europe · Asia-Pacific.",
    type: "website",
    images: ["/altiva-logo.png"],
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
