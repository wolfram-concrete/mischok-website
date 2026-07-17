"use client";

import { useEffect, useRef, useState } from "react";
import ImageFrame from "@/components/ui/ImageFrame";
import CountUp from "@/components/ui/CountUp";
import SectionLabel from "@/components/ui/SectionLabel";

/**
 * Ueber — Aufbau nach dem Referenzmuster (5fr / 1fr Luft / 6fr):
 *   links  eine Inhaltsspalte, die per space-between die Kennzahlen an die
 *          Unterkante schiebt — sie stehen auf einer Linie mit dem Bildfuß.
 *   rechts das Bildmodul mit Ausbuchtung unten rechts.
 *
 * Pin-Scroll wie in Ansatz: die Section ist überhoch, der innere Container
 * bleibt stehen. Schritt 0 zeigt die Geschäftsführung mit Abdunklung und
 * Zitat; ab Schritt 1 blenden Zitat und Abdunklung weg und das Modul läuft
 * durch fünf weitere Fotos — von der Gruppe bis zur einzelnen Arbeitssituation.
 * Danach scrollt die Section normal weiter.
 */

type Shot = { src: string; alt: string };

/** Schritt 0 trägt das Zitat, danach die Bilderstrecke. */
const SHOTS: Shot[] = [
  { src: "/assets/Mischok_2025_ma_216.jpg", alt: "MISCHOK — Geschäftsführung" },
  { src: "/assets/Mischok_2025_ma_200.jpg", alt: "MISCHOK — Arbeit zu zweit am Schreibtisch" },
  { src: "/assets/Mischok_2023_ma_061.jpg", alt: "MISCHOK — Workshop im Team" },
  { src: "/assets/Mischok_2025_ma_046.jpg", alt: "MISCHOK — Besprechung" },
  { src: "/assets/Mischok_2023_ma_422.jpg", alt: "MISCHOK — Arbeit am Whiteboard" },
  { src: "/assets/Mischok_2025_ma_147.jpg", alt: "MISCHOK — Abstimmung am Laptop" },
  { src: "/assets/Mischok_2025_ma_199.jpg", alt: "MISCHOK — konzentrierte Entwicklungsarbeit" },
];

export default function Ueber() {
  const sectionRef = useRef<HTMLElement>(null);
  const lastStep = useRef(-1);
  const [step, setStep] = useState(0);

  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const sec = sectionRef.current;
      if (sec) {
        const rect = sec.getBoundingClientRect();
        const total = sec.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        const progress = total > 0 ? scrolled / total : 0;
        const max = SHOTS.length - 1;
        const next = Math.max(
          0,
          Math.min(max, Math.floor(progress * (SHOTS.length - 0.0001)))
        );
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

  /* Zitat und Abdunklung gehören zu Schritt 0 */
  const intro = step === 0;

  return (
    <section id="ueber" ref={sectionRef} className="ue-section" data-screen-label="Über MISCHOK">
      <div className="ue-sticky">
        <div className="ue-grid">
          {/* Links: Headline/Lead oben, Kennzahlen unten */}
          <div className="ue-content">
            <div className="ue-head">
              <SectionLabel>Über uns</SectionLabel>
              {/* Versal, wie in der Konzeption — s. Kommentar in Ansatz.tsx */}
              <h2 className="ue-h2">Über MISCHOK</h2>
              <p className="ue-lead">
                Wir sind MISCHOK, ein Familienunternehmen mit Sitz in Augsburg.
                Seit 2010 begleiten wir Unternehmen, deren Geschäftserfolg von
                Software abhängt. Bei uns arbeiten mehr als 35 Menschen in
                Entwicklung, Architektur, Projektleitung und Beratung. Unsere
                Projekte entstehen dort, wo Software nicht isoliert betrachtet
                werden kann, sondern Teil des laufenden Geschäfts ist.
              </p>
              {/* Konzeption Seite 3: „Link: Mehr über uns".
                  ACHTUNG: /ueber ist konzipiert (Konzeption S. 28–29), aber noch
                  nicht gebaut — dieser Link läuft bis dahin auf einen 404 und
                  darf nicht live gehen. */}
              <a href="/ueber" className="cta-ghost">
                Mehr über uns
                <span aria-hidden="true">→</span>
              </a>
            </div>

            <div className="ue-stats">
              {/* Gruendungsjahr laeuft ab 1990, nicht ab 0: eine Jahreszahl,
                  die durch 0…1989 rattert, liest sich als Unsinn statt als
                  Zahl, die auf 2010 zulaeuft. */}
              <div className="ue-stat">
                <CountUp to={2010} from={1990} className="ue-stat-value" />
                <span className="eyebrow ue-stat-label">Gegründet</span>
              </div>
              <div className="ue-stat">
                <CountUp to={35} from={0} suffix="+" className="ue-stat-value" />
                <span className="eyebrow ue-stat-label">Mitarbeiter</span>
              </div>
              <div className="ue-stat">
                <span className="ue-stat-value">Augsburg</span>
                <span className="eyebrow ue-stat-label">Standort</span>
              </div>
            </div>
          </div>

          {/* Rechts: Bilderstrecke; alle Bilder liegen übereinander und blenden um */}
          <div className="ue-media">
            {SHOTS.map((s, i) => (
              <span
                key={s.src}
                className={`ue-shot${i === step ? " is-on" : ""}`}
                aria-hidden={i !== step}
              >
                <ImageFrame
                  src={s.src}
                  alt={s.alt}
                  placeholder=""
                  /* NICHT die Containerbreite. Der Container ist mit ~679x688
                     nahezu quadratisch, alle Aufnahmen sind 3:2-Querformat —
                     `cover` skaliert also ueber die HOEHE und rendert das Bild
                     ~1031 CSS-Pixel breit (688 x 1.499), waehrend `50vw` dem
                     Browser nur 750 nannte. Ergebnis war eine 750er-Variante,
                     auf Retina fast 3x hochskaliert.
                     Unter 991px steht die Spalte allein: dort bindet je nach
                     Breite mal die Hoehe (schmal, hochformatiger Ausschnitt),
                     mal die Breite — daher gestaffelt. */
                  sizes="(max-width:600px) 170vw, (max-width:991px) 125vw, 70vw"
                  /* nur das sichtbare Bild priorisieren wäre Micro-Tuning;
                     entscheidend ist, dass die Parallaxe hier ruht — sie würde
                     sich mit dem Pin-Scroll überlagern */
                  parallax={false}
                />
              </span>
            ))}

            {/* Blaue Abdunklung + Zitat gehören zu Schritt 0 */}
            <span
              className={`ue-scrim${intro ? " is-on" : ""}`}
              aria-hidden="true"
            />
            <figure className={`ue-quote${intro ? " is-on" : ""}`} aria-hidden={!intro}>
              <blockquote className="ue-quote-text">
                „In einem Familienunternehmen kann man sich nicht hinter
                Abteilungen verstecken. Entscheidungen haben Namen. Das macht
                vieles direkter — manchmal auch unbequemer."
              </blockquote>
              <figcaption className="ue-quote-by">— Virgil Mischok</figcaption>
            </figure>

          </div>

          {/* Fortschritt der Bilderstrecke — dieselbe leise Sprache wie der
              Step-Indikator in Ansatz, jetzt auch in derselben Farbe.
              Bewusst NEBEN .ue-media statt darin: die Leiste soll in dem grauen
              Streifen sitzen, den die Ausbuchtung unter der Bildkante freilegt —
              und genau den schneidet das clip-path von .ue-media weg. Als
              eigenes Grid-Item in derselben Zelle liegt sie ausserhalb des
              Clips, aber deckungsgleich ueber dem Streifen. */}
          <div className="ue-dots" aria-hidden="true">
            {SHOTS.map((s, i) => (
              <span key={s.src} className={`ue-dot${i === step ? " is-on" : ""}`} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
