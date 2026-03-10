import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/shared/Navbar";
import { Footer } from "@/components/shared/Footer";

// Festival/Heritage vibe for headings
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

// Clean, readable sans-serif for body
const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cabarrusfestivals.com"),
  title: {
    default: "Cabarrus Festivals",
    template: "%s | Cabarrus Festivals",
  },
  description:
    "Community-driven festivals in Cabarrus County: food, music, culture, and family experiences all year long.",
  applicationName: "Cabarrus Festivals",
  keywords: [
    "Cabarrus Festivals",
    "Cabarrus County events",
    "Concord NC festivals",
    "North Carolina festivals",
    "family festivals",
    "music and food festivals",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cabarrusfestivals.com",
    siteName: "Cabarrus Festivals",
    title: "Cabarrus Festivals",
    description:
      "Community-driven festivals in Cabarrus County: food, music, culture, and family experiences all year long.",
    images: [
      {
        url: "https://i.imgur.com/Tg5iY0r.jpeg",
        width: 1200,
        height: 630,
        alt: "Cabarrus Festivals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cabarrus Festivals",
    description:
      "Community-driven festivals in Cabarrus County: food, music, culture, and family experiences all year long.",
    images: ["https://i.imgur.com/Tg5iY0r.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${lato.variable}`}>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col font-body bg-background text-foreground antialiased selection:bg-festival-green/20 selection:text-[#022154]"
      >
        <Navbar />
        <main className="grow">{children}</main>
        <Footer />
        <Script src="https://cdn.jotfor.ms/agent/embedjs/019cd3f91e6a7e0086358e0822795f3c3088/embed.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
