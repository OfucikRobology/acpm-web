import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AČPM — Asociace českých pojišťovacích makléřů",
  description:
    "Respektovaná profesní organizace hájící společné zájmy pojišťovacích makléřů v České republice. Člen evropské federace BIPAR.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${playfair.variable} ${sourceSans.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
