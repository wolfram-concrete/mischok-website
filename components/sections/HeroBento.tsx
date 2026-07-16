import type { ReactNode } from "react";
import ImageFrame from "@/components/ui/ImageFrame";
import { FIELDS } from "@/lib/content";

/**
 * HeroBento — Bento-Grid-Hero mit CGI-Haptik (ohne Video).
 *
 * Gestaltungsprinzipien (Feedback-Runde 2):
 * • Ecken an das Logo angelehnt: überwiegend scharfe Kanten, Rundung nur an
 *   EINER Ecke (unten rechts).
 * • Keine Stege — Bricks grenzen dicht aneinander (Haarspalt), keine Überschneidung.
 * • Asymmetrischer Umriss (kein bündiges Rechteck): einzelne Bricks „wuchern"
 *   über perimetrische Leerfelder aus.
 * • Split-Headline diagonal (oben-links / unten-rechts); CTA sitzt rechts unten
 *   im zweiten Headline-Brick.
 * • Content-Bricks linksbündig mit Nummer 01–05, Icon und konkretem Volltext.
 *
 * prefers-reduced-motion wird in globals.css entschärft.
 */

/* — Abstrakte Line-Icons (24×24, currentColor), Stil an Referenz angelehnt — */
const icons: Record<string, ReactNode> = {
  // 01 — Pfeil in ein Quadrat, umschlossen von gestricheltem Kreis (im Betrieb)
  running: (
    <>
      <circle cx="12" cy="12" r="9" strokeDasharray="2 3" />
      <rect x="9" y="8.5" width="7" height="7" />
      <path d="M4.5 12H12" />
      <path d="M9.5 9.6 12 12 9.5 14.4" />
    </>
  ),
  // 02 — Knoten verzweigt zu unterschiedlichen Formen (Anforderungen ändern sich)
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
  // 03 — Quadrat und gestrichelter Kreis überlagern sich versetzt (Technik ≠ Zielbild)
  mismatch: (
    <>
      <rect x="5.5" y="5.5" width="8.5" height="8.5" />
      <circle cx="15" cy="15" r="5.2" strokeDasharray="1.8 2.4" />
    </>
  ),
  // 04 — gestapelte Rauten auf gestrichelter Achse mit Pfeil (mehr Kapazität/Richtung)
  scale: (
    <>
      <path d="M12 2.6V21" strokeDasharray="2 3" />
      <path d="M9.6 5 12 2.6 14.4 5" />
      <path d="M6.5 10.5 12 8 17.5 10.5 12 13Z" />
      <path d="M6.5 14 12 11.5 17.5 14 12 16.5Z" />
    </>
  ),
  // 05 — Kreis mit ausstrahlenden Pfeilen (Lage klären, Optionen ordnen)
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
      className="bento-icon"
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

/* Content-Bricks: konkrete Fälle 01–05 mit Volltext (aus FIELDS) */
const iconOrder = ["running", "diverge", "mismatch", "scale", "clarify"];
const areaOrder = ["c1", "c2", "c3", "c4", "c5"];
const delayOrder = [0.42, 0.3, 0.5, 0.58, 0.64];

export default function HeroBento() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#efeeeb",
        padding:
          "clamp(92px,10vw,140px) clamp(16px,4vw,60px) clamp(48px,6vw,84px)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="bento" style={{ width: "100%" }}>
        {/* Headline-Teil 1 (Navy, oben-links) */}
        <div
          className="bento-tile bento-tile--navy b-elev-hi b-n1"
          data-bento
          style={{ animationDelay: "0.18s" }}
        >
          <h1 className="bento-head">
            Wenn Software entscheidend für Ihren Geschäftserfolg ist
          </h1>
        </div>

        {/* Content-Bricks 01–05 */}
        {FIELDS.map((f, i) => (
          <div
            key={f.n}
            className={`bento-tile bento-tile--content b-${areaOrder[i]}`}
            data-bento
            style={{ animationDelay: `${delayOrder[i]}s` }}
          >
            <span className="bento-icon-wrap">
              <Icon name={iconOrder[i]} />
            </span>
            <div className="bento-cbody">
              <span className="bento-num">{f.n}</span>
              <p className="bento-text">{f.card}</p>
            </div>
          </div>
        ))}

        {/* Foto 1 (portrait, rechts) */}
        <div
          className="bento-tile bento-tile--photo b-p1"
          data-bento
          style={{ animationDelay: "0.36s" }}
        >
          <ImageFrame
            src="/assets/arbeiten.jpg"
            alt="Team von MISCHOK bei der Arbeit"
            placeholder="Team"
            sizes="(max-width:1000px) 100vw, 20vw"
            priority
          />
        </div>

        {/* Foto 2 (landscape, unten-links) */}
        <div
          className="bento-tile bento-tile--photo b-p2"
          data-bento
          style={{ animationDelay: "0.54s" }}
        >
          <ImageFrame
            src="/assets/acc-2.jpg"
            alt="MISCHOK — Zusammenarbeit im Team"
            placeholder="Team"
            sizes="(max-width:1000px) 100vw, 40vw"
          />
        </div>

        {/* Headline-Teil 2 (Navy, unten-rechts) + CTA rechts unten */}
        <div
          className="bento-tile bento-tile--navy b-elev-hi b-n2"
          data-bento
          style={{ animationDelay: "0.72s" }}
        >
          <h2 className="bento-head">
            braucht sie Menschen, die Verantwortung übernehmen.
          </h2>
          <a href="#kontakt" className="cta-grad-light bento-cta">
            Projektlage klären
          </a>
        </div>
      </div>
    </section>
  );
}
