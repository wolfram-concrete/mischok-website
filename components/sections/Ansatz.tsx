"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import CtaButton from "@/components/ui/CtaButton";
import SectionLabel from "@/components/ui/SectionLabel";
import ImageFrame from "@/components/ui/ImageFrame";
import { POINTS, REFERENZEN } from "@/lib/content";

/** Case-Brücke: die einzige Referenz, für die echtes Projektbild-Material
 *  vorliegt (public/social/case-flutter-mobility.png, belegt über
 *  trust-feed.json → id "case-flutter-mobility" → Barely Digital). */
const CASE_REF = REFERENZEN.find((r) => r.name.startsWith("Barely Digital"));

/**
 * Ansatz — Pin-Scroll über 300vh. Sticky-Container (100vh) mit Conic-Gradient,
 * dessen Zentrum (--ansatz-cy) beim Scrollen nach unten wandert. Ein Scroll-
 * Fortschritt 0→1 blendet die 3 Punkte nacheinander durch. rAF liest den
 * Scrollstand frisch pro Frame; ein Instanz-Guard vermeidet unnötige Renders.
 */
export default function Ansatz() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const lastStep = useRef(-1);
  const [step, setStep] = useState(0);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const sec = sectionRef.current;
      const sticky = stickyRef.current;
      if (sec && sticky) {
        const rect = sec.getBoundingClientRect();
        const total = sec.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        const progress = total > 0 ? scrolled / total : 0;
        // Zentrum des Conic-Gradients nach unten wandern lassen (25.64% → ~78%).
        sticky.style.setProperty(
          "--ansatz-cy",
          (25.64 + progress * 52).toFixed(2) + "%"
        );
        const next = Math.max(0, Math.min(2, Math.floor(progress * 2.9999)));
        if (next !== lastStep.current) {
          lastStep.current = next;
          setStep(next);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section
      id="ansatz"
      ref={sectionRef}
      data-screen-label="Ansatz"
      style={{ position: "relative", height: "300vh" }}
    >
      <div
        ref={stickyRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          background:
            "conic-gradient(from 0deg at 34.05% var(--ansatz-cy,25.64%), #D6D6D6 0deg, #EDEDED 360deg)",
          padding: "clamp(48px,6vw,96px) clamp(20px,5vw,72px)",
          boxSizing: "border-box",
          justifyContent: "center",
        }}
      >
        <div
          className="grid-ansatz"
          style={{
            gap: "clamp(36px,7vw,110px)",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Links: Headline + Fortschrittsbalken */}
          <div>
            <SectionLabel>Arbeitsweise</SectionLabel>
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 400,
                fontSize: "clamp(38px,6.6vw,90px)",
                lineHeight: 1.04,
                letterSpacing: "-0.01em",
                color: "var(--slate)",
                margin: "16px 0 0",
              }}
            >
              Wo mischok <br />
              konkret ansetzt
            </h2>
            <div
              style={{
                marginTop: "clamp(28px,4vw,46px)",
                display: "flex",
                gap: "10px",
              }}
            >
              {POINTS.map((_, i) => (
                <div
                  key={i}
                  style={{
                    height: "3px",
                    borderRadius: "2px",
                    width: i === step ? "48px" : "22px",
                    background:
                      i === step ? "var(--navy)" : "rgba(0,42,92,0.22)",
                    transition: "width .35s ease, background .35s ease",
                  }}
                />
              ))}
            </div>

            {/* Case-Brücke: belegt die Arbeitsweise mit einem echten Projekt.
                Bild + Zuordnung stammen aus dem Trust-Depot (public/social,
                trust-feed.json → case-flutter-mobility → Barely Digital). */}
            {CASE_REF && (
              <a href={`/referenzen#${CASE_REF.slug}`} className="az-case">
                <span className="az-case-media">
                  <ImageFrame
                    src="/social/case-flutter-mobility.png"
                    alt="vintrica-App — Case Barely Digital"
                    placeholder=""
                    sizes="200px"
                    imgStyle={{ objectFit: "contain" }}
                  />
                </span>
                <span className="az-case-body">
                  <span className="az-case-kicker">Referenz {CASE_REF.n}</span>
                  <span className="az-case-name">{CASE_REF.name}</span>
                  <span className="az-case-sub">{CASE_REF.projektlage}</span>
                  <span className="az-case-cta">
                    Referenz ansehen
                    <span aria-hidden="true">→</span>
                  </span>
                </span>
              </a>
            )}
          </div>

          {/* Rechts: aktiver Punkt */}
          <div
            style={{
              position: "relative",
              minHeight: "clamp(280px,36vh,360px)",
            }}
          >
            {POINTS.map((p, i) => {
              const active = i === step;
              const pointStyle: CSSProperties = {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                opacity: active ? 1 : 0,
                transform: active ? "translateY(0)" : "translateY(16px)",
                transition: "opacity .55s ease, transform .55s ease",
                pointerEvents: active ? "auto" : "none",
              };
              return (
                <div key={p.n} style={pointStyle}>
                  <div
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(30px,3vw,42px)",
                      lineHeight: 1,
                      fontWeight: 400,
                      color: "var(--navy)",
                      height: "49px",
                      width: "100%",
                    }}
                  >
                    {p.n}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--sans)",
                      fontWeight: 700,
                      fontSize: "clamp(22px,2.6vw,31px)",
                      lineHeight: 1.22,
                      color: "var(--slate)",
                      margin: "18px 0 0",
                      maxWidth: "22ch",
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "clamp(14px,1.4vw,15.5px)",
                      lineHeight: 1.75,
                      color: "var(--slate)",
                      margin: "22px 0 34px",
                      maxWidth: "46ch",
                    }}
                  >
                    {p.detail}
                  </p>
                  <CtaButton href="/referenzen">Zur Referenz</CtaButton>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
