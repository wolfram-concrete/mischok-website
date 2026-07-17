import type { Metadata, Viewport } from "next";
import { Source_Serif_4 } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/layout/Header";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-serif",
});

// Sans-Serif der Marke: Calibre (lokale Web-Fonts, app/fonts)
const calibre = localFont({
  src: [
    { path: "./fonts/CalibreWeb-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/CalibreWeb-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/CalibreWeb-Bold.woff2", weight: "700", style: "normal" },
  ],
  display: "swap",
  variable: "--font-sans",
});

// Display-/Label-Schrift der Marke: Realtime Rounded (Juri Zaech)
const realtime = localFont({
  src: [{ path: "./fonts/RealtimeRounded.woff2", weight: "400", style: "normal" }],
  display: "swap",
  variable: "--font-realtime",
});

export const metadata: Metadata = {
  title: "mischok — Erfahrene Projektführung für geschäftskritische Software",
  description:
    "Mischok GmbH aus Augsburg: Softwareentwicklung und Projektführung für geschäftskritische Bestandssoftware. Menschen, die Verantwortung übernehmen.",
  metadataBase: new URL("https://mischok.de"),
  openGraph: {
    title: "Mischok GmbH",
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
    <html
      lang="de"
      className={`${sourceSerif.variable} ${calibre.variable} ${realtime.variable}`}
    >
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
