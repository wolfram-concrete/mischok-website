import type { Metadata, Viewport } from "next";
import { Source_Serif_4, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "MISCHOK — Erfahrene Projektführung für geschäftskritische Software",
  description:
    "MISCHOK GmbH aus Augsburg: Softwareentwicklung und Projektführung für geschäftskritische Bestandssoftware. Menschen, die Verantwortung übernehmen.",
  metadataBase: new URL("https://mischok.de"),
  openGraph: {
    title: "MISCHOK GmbH",
    description:
      "Erfahrene Projektführung für geschäftskritische Software im Bestand.",
    locale: "de_DE",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#F6F6F5",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${sourceSerif.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
