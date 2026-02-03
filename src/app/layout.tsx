import type { Metadata } from "next";
import { Cinzel, Lato } from "next/font/google";
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
  title: "Cabarrus Festivals",
  description: "Your guide to festivals in Cabarrus County.",
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
        className="min-h-screen flex flex-col font-body bg-background text-foreground antialiased selection:bg-green-100 selection:text-green-900"
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
