import type { Metadata } from "next";
import Footer from "@/components/sections/Footer";
import ReferenzenGrid from "@/components/sections/ReferenzenGrid";
import { REFERENZEN_INTRO } from "@/lib/content";

export const metadata: Metadata = {
  title: "Referenzen — mischok",
  description:
    "Ausgewählte Projekte der Mischok GmbH: gewachsene Plattformen, feste Termine, technische Abhängigkeiten und Teams unter Druck.",
};

/**
 * Referenzen — Unterseite aus der Sitemap (Mischok-Website.pdf). Intro-Texte und
 * Projektinhalte stammen 1:1 aus dem PDF (Seite „REFERENZEN").
 */
export default function ReferenzenPage() {
  return (
    <>
      {/* Full-Screen-Hero mit stark eingezoomtem Motion-Visual (wie Home-Hero) */}
      <section
        style={{
          position: "relative",
          overflow: "hidden",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding:
            "clamp(96px,12vw,140px) clamp(20px,5vw,72px) clamp(64px,8vw,110px)",
        }}
      >
        {/* Hintergrund-Video, stark eingezoomt */}
        <video
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/video/hero-poster.jpg"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transform: "scale(2.2)",
            transformOrigin: "center",
            zIndex: 0,
            pointerEvents: "none",
          }}
        >
          <source src="/video/hero.webm" type="video/webm" />
          <source src="/video/hero.mp4" type="video/mp4" />
        </video>

        {/* Motiv links (hinter der Headline) voll sichtbar, nach rechts (hinter
            dem Body-Text) in den Hintergrund ausblenden */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 1,
            pointerEvents: "none",
            background:
              "linear-gradient(90deg, rgba(246,246,245,0) 0%, rgba(246,246,245,0) 34%, rgba(246,246,245,1) 55%, rgba(246,246,245,1) 100%)",
          }}
        />

        {/* Intro-Inhalt */}
        <div style={{ position: "relative", zIndex: 2 }}>
          <span
            style={{
              fontFamily: "var(--mono)",
              fontSize: "12.5px",
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            {REFERENZEN_INTRO.kicker}
          </span>

          {/* Headline und Body horizontal nebeneinander */}
          <div className="ref-intro" style={{ marginTop: "16px" }}>
            <h1
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 400,
                fontSize: "clamp(38px,6vw,78px)",
                lineHeight: 1.04,
                letterSpacing: "-0.01em",
                color: "var(--navy)",
                margin: 0,
                maxWidth: "18ch",
              }}
            >
              {REFERENZEN_INTRO.headline}
            </h1>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: "clamp(22px,2.1vw,27px)",
                fontWeight: 500,
                lineHeight: "var(--lh-copy)",
                color: "var(--slate)",
                margin: 0,
                maxWidth: "52ch",
              }}
            >
              {REFERENZEN_INTRO.text}
            </p>
          </div>
        </div>
      </section>

      {/* Referenz-Karten */}
      <main
        style={{
          background: "var(--bg)",
          padding:
            "clamp(56px,7vw,96px) clamp(20px,5vw,72px) clamp(64px,8vw,120px)",
        }}
      >
        <ReferenzenGrid />
      </main>
      <Footer />
    </>
  );
}
