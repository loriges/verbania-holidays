import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair-var",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-var",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Verbania Holiday | Luxury Property Management · Lago Maggiore",
  description:
    "Gestiamo ville e appartamenti di lusso sulla sponda piemontese del Lago Maggiore. Luxury vacation home management on Lake Maggiore, Piedmont, Italy.",
  keywords: [
    "property management lago maggiore",
    "gestione case vacanze verbania",
    "ville lusso lago maggiore",
    "affitti brevi verbania",
    "baveno stresa cannero",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="it"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
