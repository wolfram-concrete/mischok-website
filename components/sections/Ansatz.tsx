"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import SectionLabel from "@/components/ui/SectionLabel";
import ImageFrame from "@/components/ui/ImageFrame";
import { POINTS, REFERENZEN } from "@/lib/content";

/**
 * Case-Brücke je Step. Es rotieren nur die Referenzen, für die echtes,
 * belegtes Projektmaterial vorliegt — Beleg jeweils über
 * public/social/trust-feed.json:
 *   Step 01 → id "case-9levels"          → 9 Levels
 *   Step 03 → id "case-flutter-mobility" → Barely Digital
 * Step 02 bleibt bewusst ohne Karte: für WEKA Pilot Online gibt es kein
 * belegtes Visual. Die `image`-Felder der Referenzen sind dafür KEIN Ersatz —
 * das sind generische Redaktionsfotos (acc-1.jpg hängt an Referenz 01 *und* 04),
 * die als Case-Beleg gelesen würden, ohne welcher zu sein.
 */
const byName = (s: string) => REFERENZEN.find((r) => r.name.startsWith(s));

type StepCase = {
  ref: NonNullable<ReturnType<typeof byName>>;
  img: string;
  alt: string;
};

const neunLevels = (): StepCase | null => {
  const r = byName("9 Levels");
  return r
    ? { ref: r, img: "/social/client-9levels.svg", alt: "9 Levels — Kundenlogo" }
    : null;
};

const STEP_CASES: (StepCase | null)[] = [
  neunLevels(),
  /* Schritt 02 doppelt bewusst 9 Levels: für WEKA Pilot Online gibt es kein
     belegtes Projektvisual, und lieber dieselbe belegte Referenz zweimal als
     ein fremdes Bild, das eine falsche Zuordnung behaupten würde. */
  neunLevels(),
  (() => {
    const r = byName("Barely Digital");
    return r
      ? {
          ref: r,
          img: "/social/case-flutter-mobility.png",
          alt: "vintrica-App — Case Barely Digital",
        }
      : null;
  })(),
];

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
          /* Grundfarbe = die Hero-Grundfläche (SNOW), damit die Section als deren
             Fortsetzung liest statt als eigener Block. Der wandernde
             Conic-Mittelpunkt bleibt und hellt nur nach Weiss auf. */
          background:
            "conic-gradient(from 0deg at 34.05% var(--ansatz-cy,25.64%), #F9F9F9 0deg, #FFFFFF 360deg)",
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
              {/* Step-Indikator: feingliedrig und leise. Er zeigt nur an, wo man
                  steht — volles Navy ist der einen Aktion vorbehalten, deshalb
                  markiert die aktive Stufe über Länge statt über Sättigung. */}
              {POINTS.map((_, i) => (
                <div
                  key={i}
                  style={{
                    height: "2px",
                    borderRadius: "1px",
                    width: i === step ? "44px" : "18px",
                    background:
                      i === step ? "rgba(0,42,92,0.55)" : "rgba(0,42,92,0.14)",
                    transition: "width .35s ease, background .35s ease",
                  }}
                />
              ))}
            </div>

          </div>

          {/* Rechts: aktiver Punkt — darunter die Case-Brücke als Abschluss.
              Sie ersetzt den früheren generischen „Zur Referenz"-Button: Bild
              und CTA sind ein Element statt zweier konkurrierender. */}
          <div>
          {/* Alle Punkte liegen in derselben Grid-Zelle: sie überblenden
              übereinander, der Container misst sich aber am längsten Punkt.
              So kann keine Copy in die Case-Karte darunter laufen. */}
          <div style={{ display: "grid" }}>
            {POINTS.map((p, i) => {
              const active = i === step;
              const pointStyle: CSSProperties = {
                gridArea: "1 / 1",
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
                      fontSize: "var(--text-copy)",
                      lineHeight: 1.75,
                      color: "var(--slate)",
                      margin: "22px 0 0",
                      maxWidth: "46ch",
                    }}
                  >
                    {p.detail}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Case-Brücke je Step: Bildcontainer und Referenz-CTA in einem
              Element. Wieder ein Grid-Stapel — die Karten liegen in derselben
              Zelle und blenden über. Ohne das würde das Layout springen, weil
              Step 02 keine Karte hat. */}
          <div style={{ display: "grid" }}>
            {STEP_CASES.map((c, i) => {
              if (!c) return null;
              const active = i === step;
              return (
                <a
                  /* nach Schritt schluesseln, nicht nach Referenz: Schritt 01
                     und 02 zeigen dieselbe Referenz, ein slug-Key waere doppelt
                     und React wuerde eine der Karten verwerfen */
                  key={`step-${i}`}
                  href={c.ref.detailHref ?? `/referenzen#${c.ref.slug}`}
                  className="az-case"
                  style={{
                    gridArea: "1 / 1",
                    opacity: active ? 1 : 0,
                    pointerEvents: active ? "auto" : "none",
                    transition: "opacity .45s ease",
                  }}
                  aria-hidden={!active}
                  tabIndex={active ? undefined : -1}
                >
                  <span className="az-case-media">
                    <ImageFrame
                      src={c.img}
                      alt={c.alt}
                      placeholder=""
                      sizes="200px"
                      imgStyle={{ objectFit: "contain" }}
                      /* contain statt cover: das Motiv steht frei im Rahmen.
                         Eine Parallaxe würde es im Rahmen herumschieben statt
                         einen Ausschnitt zu verschieben. */
                      parallax={false}
                    />
                  </span>
                  <span className="az-case-body">
                    <span className="az-case-kicker">Referenz {c.ref.n}</span>
                    <span className="az-case-name">{c.ref.name}</span>
                    <span className="az-case-sub">{c.ref.projektlage}</span>
                    <span className="az-case-cta">
                      Referenz ansehen
                      <span aria-hidden="true">→</span>
                    </span>
                  </span>
                </a>
              );
            })}
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
