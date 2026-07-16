import type { ReactNode } from "react";
import ImageFrame from "@/components/ui/ImageFrame";

/**
 * HeroImpact — Hero-Testvariante: vollflächige Bento-„Card" auf Basis des
 * Logo-Moduls, angelehnt an die Referenz „Impact".
 *
 * Prinzipien:
 * • Grid füllt den kompletten Hero (100svh), feine dunkle Stege.
 * • Grotesk-dominante, „coole" Typografie + Mono-Labels.
 * • Linke Navy-Spalte als kräftiger Farbblock mit Schraffur-Teilfläche + CTA.
 * • 5 Fokusfelder mit KLEINER Nummer + repräsentativem Icon (Platzhalter,
 *   bis die finalen Icons geliefert werden) + Kurztitel.
 * • Zwei echte Fotos, ein Stat-Modul, rudimentäre Teilflächen-Patterns.
 *
 * Layout (Desktop, 6×4 Module):
 *   navy head  head  head  head  photoA
 *   navy head  head  head  head  photoA
 *   navy f1    f2    f3    f4    f5
 *   navy stat  photoB photoB photoB photoB
 */

/* Platzhalter-Icons (24×24) — werden durch die gelieferten Icons ersetzt */
const icons: Record<string, ReactNode> = {
  running: (
    <>
      <circle cx="12" cy="12" r="9" strokeDasharray="2 3" />
      <rect x="9" y="8.5" width="7" height="7" />
      <path d="M4.5 12H12" />
      <path d="M9.5 9.6 12 12 9.5 14.4" />
    </>
  ),
  diverge: (
    <>
      <path d="M3 12h5" />
      <path d="M8 12 13 7.6" />
      <path d="M8 12 12.4 12.5" />
      <path d="M8 12 12.6 16" />
      <circle cx="15.4" cy="6.6" r="2.6" strokeDasharray="1.8 2.4" />
      <circle cx="13.6" cy="12.6" r="1.35" />
      <rect x="13" y="15" width="3.1" height="3.1" />
    </>
  ),
  mismatch: (
    <>
      <rect x="5.5" y="5.5" width="8.5" height="8.5" />
      <circle cx="15" cy="15" r="5.2" strokeDasharray="1.8 2.4" />
    </>
  ),
  scale: (
    <>
      <path d="M12 2.6V21" strokeDasharray="2 3" />
      <path d="M9.6 5 12 2.6 14.4 5" />
      <path d="M6.5 10.5 12 8 17.5 10.5 12 13Z" />
      <path d="M6.5 14 12 11.5 17.5 14 12 16.5Z" />
    </>
  ),
  clarify: (
    <>
      <circle cx="12" cy="12" r="2.6" />
      <path d="M12 8.4V4M10.6 5.4 12 4 13.4 5.4" />
      <path d="M12 15.6V20M10.6 18.6 12 20 13.4 18.6" />
      <path d="M15.6 12H20M18.6 10.6 20 12 18.6 13.4" />
      <path d="M8.4 12H4M5.4 10.6 4 12 5.4 13.4" />
    </>
  ),
};

function Icon({ name }: { name: string }) {
  return (
    <svg
      className="hi-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

const FOCUS = [
  { n: "01", icon: "running", t: "Software ist Teil des laufenden Betriebs" },
  { n: "02", icon: "diverge", t: "Anforderungen ändern sich, Systeme bleiben" },
  { n: "03", icon: "mismatch", t: "Technik und Zielbild passen nicht mehr" },
  { n: "04", icon: "scale", t: "Mehr Kapazität hilft nur mit klarer Richtung" },
  { n: "05", icon: "clarify", t: "Lage klären, Optionen ordnen, entscheiden" },
];

export default function HeroImpact() {
  return (
    <section className="hi-section" id="hero-impact">
      <div className="hi-card">
        {/* Navy-Block: kräftiger Farbblock mit Schraffur-Teilfläche + CTA */}
        <div className="hi-cell hi-navy">
          <span className="hi-hatch" aria-hidden="true" />
          <span className="hi-navy-label">Der nächste Schritt</span>
          <a href="#kontakt" className="hi-cta">
            Projektlage klären
            <span aria-hidden="true" className="hi-cta-arrow">
              →
            </span>
          </a>
        </div>

        {/* Headline (grotesk, groß) */}
        <div className="hi-cell hi-head">
          <span className="hi-kicker">
            Ausgangslage<span className="hi-accent" aria-hidden="true" />
          </span>
          <h1 className="hi-headline">
            Wenn Software entscheidend für Ihren Geschäftserfolg ist, braucht sie
            Menschen, die Verantwortung übernehmen.
          </h1>
        </div>

        {/* Foto A (portrait, rechts oben) */}
        <div className="hi-cell hi-photo hi-photoA">
          <ImageFrame
            src="/assets/arbeiten.jpg"
            alt="MISCHOK — Team bei der Arbeit"
            placeholder=""
            sizes="(max-width:900px) 100vw, 20vw"
            priority
          />
        </div>

        {/* Fünf Fokusfelder: kleine Nummer + Icon + Kurztitel */}
        {FOCUS.map((f, i) => (
          <div key={f.n} className={`hi-cell hi-field hi-f${i + 1}`}>
            <span className="hi-field-top">
              <span className="hi-num">{f.n}</span>
              <span className="hi-icon-wrap">
                <Icon name={f.icon} />
              </span>
            </span>
            <p className="hi-ftitle">{f.t}</p>
          </div>
        ))}

        {/* Stat-Modul (echter Beleg) mit Teilflächen-Balken */}
        <div className="hi-cell hi-stat">
          <span className="hi-stat-num">2010</span>
          <span className="hi-stat-label">seit</span>
          <span className="hi-stat-bar" aria-hidden="true" />
        </div>

        {/* Foto B (landscape, unten) */}
        <div className="hi-cell hi-photo hi-photoB">
          <ImageFrame
            src="/assets/acc-2.jpg"
            alt="MISCHOK — Zusammenarbeit im Team"
            placeholder=""
            sizes="(max-width:900px) 100vw, 55vw"
          />
        </div>
      </div>
    </section>
  );
}
