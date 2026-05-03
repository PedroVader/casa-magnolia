import type { Metadata } from "next";
import { Fraunces, Inter, Italiana } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["SOFT", "WONK", "opsz"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const italiana = Italiana({
  variable: "--font-italiana",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Casa Magnolia — Laboratorio Floral",
    template: "%s | Casa Magnolia",
  },
  description:
    "Diseno floral a cuatro manos, desde Bilbao. Bodas, eventos, rodajes editoriales, talleres y suscripcion de flores para hoteles y restaurantes.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://casamagnolia.com"
  ),
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Casa Magnolia",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${fraunces.variable} ${inter.variable} ${italiana.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-magnolia-cream text-magnolia-ink">
        {children}
      </body>
    </html>
  );
}
