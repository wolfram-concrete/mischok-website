import type { ReactNode } from "react";
import ImageFrame from "@/components/ui/ImageFrame";
import SectionLabel from "@/components/ui/SectionLabel";
import { TOPICS, PRAXIS_LINKEDIN } from "@/lib/content";

/**
 * Themen (Insights) — Handling nach dem Referenzmuster: links eine Headline-
 * Spalte, die beim Scrollen stehen bleibt (sticky), rechts die Formate als
 * vertikale Kartenliste, die daran vorbeiläuft. Der frühere horizontale Slider
 * ist entfallen; das Format-Icon sitzt jetzt in einer eigenen Bildkachel mit
 * Scrim, statt über dem ganzen Kartenbild zu liegen.
 *
 * Jedes Format (Vortrag, Veranstaltung, Workshop, Fachartikel) hat ein eigenes
 * Icon in der Systems-Thinking-Sprache der Seite; die Format-Eyebrow folgt der
 * „SZENARIO 0X"-Schreibweise.
 */

/**
 * Format-Ikonografie in der Sprache der Hero-Icons:
 *   – dasselbe 32×32-Raster, Outline-only, 1.5px, runde Enden/Ecken
 *   – abstrakt-geometrisch statt Piktogramm
 *   – jedes Icon BAUT SICH AUF und wiederholt das: `hi-b-line` zeichnet Linien
 *     (braucht pathLength={1}), `hi-b-pop` lässt Endpunkte einploppen, versetzt
 *     über animationDelay. Beide Klassen kommen aus dem Hero — bewusst
 *     wiederverwendet statt parallel nachgebaut, damit die Bewegung identisch
 *     ist und reduced-motion an einer Stelle greift.
 * Die Vorgänger waren 24×24, wörtlich gezeichnet (Männchen, Tisch) und statisch.
 */
const KIND_ICONS: Record<string, ReactNode> = {
  // Vortrag — einer spricht, viele hören: Knoten links, Wellen laufen nach aussen
  Vortrag: (
    <>
      <circle
        className="hi-b-pop"
        style={{ animationDelay: "0s" }}
        cx="9"
        cy="16"
        r="3"
        fill="currentColor"
        stroke="none"
      />
      <path className="hi-b-line" style={{ animationDelay: "0.3s" }} pathLength={1} d="M14.6 10.6 A 7.4 7.4 0 0 1 14.6 21.4" />
      <path className="hi-b-line" style={{ animationDelay: "0.5s" }} pathLength={1} d="M19 7.4 A 11.6 11.6 0 0 1 19 24.6" />
      <path className="hi-b-line" style={{ animationDelay: "0.7s" }} pathLength={1} d="M23.4 4.2 A 15.8 15.8 0 0 1 23.4 27.8" />
    </>
  ),
  // Veranstaltung — viele kommen an einem Ort zusammen: Bühne, dann füllt sich der Raum
  Veranstaltung: (
    <>
      <path className="hi-b-line" style={{ animationDelay: "0s" }} pathLength={1} d="M5 9.5 H27" />
      <circle className="hi-b-pop" style={{ animationDelay: "0.35s" }} cx="9" cy="17" r="2.2" />
      <circle className="hi-b-pop" style={{ animationDelay: "0.5s" }} cx="16" cy="17" r="2.2" />
      <circle className="hi-b-pop" style={{ animationDelay: "0.65s" }} cx="23" cy="17" r="2.2" />
      <circle className="hi-b-pop" style={{ animationDelay: "0.8s" }} cx="12.5" cy="24" r="2.2" />
      <circle className="hi-b-pop" style={{ animationDelay: "0.95s" }} cx="19.5" cy="24" r="2.2" />
    </>
  ),
  // Workshop — gemeinsam an einer Sache: Tisch bleibt ruhig, die Plätze besetzen sich
  Workshop: (
    <>
      <rect x="11" y="13" width="10" height="6" rx="0.5" />
      <circle className="hi-b-pop" style={{ animationDelay: "0.3s" }} cx="5.6" cy="16" r="2.2" />
      <circle className="hi-b-pop" style={{ animationDelay: "0.45s" }} cx="26.4" cy="16" r="2.2" />
      <circle className="hi-b-pop" style={{ animationDelay: "0.6s" }} cx="16" cy="7.4" r="2.2" />
      <circle className="hi-b-pop" style={{ animationDelay: "0.75s" }} cx="16" cy="24.6" r="2.2" />
    </>
  ),
  // Fachartikel — Gedanke wird geschrieben: Seite entsteht, dann füllen sich die Zeilen
  Fachartikel: (
    <>
      <path className="hi-b-line" style={{ animationDelay: "0s" }} pathLength={1} d="M8 4.5 H19 L24 9.5 V27.5 H8 Z" />
      <path className="hi-b-line" style={{ animationDelay: "0.4s" }} pathLength={1} d="M19 4.5 V9.5 H24" />
      <path className="hi-b-line" style={{ animationDelay: "0.6s" }} pathLength={1} d="M12 15.5 H20" />
      <path className="hi-b-line" style={{ animationDelay: "0.75s" }} pathLength={1} d="M12 19.5 H20" />
      <path className="hi-b-line" style={{ animationDelay: "0.9s" }} pathLength={1} d="M12 23.5 H16.5" />
    </>
  ),
};

function KindIcon({ kind }: { kind: string }) {
  const paths = KIND_ICONS[kind];
  if (!paths) return null;
  return (
    <svg
      className="in-icon"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths}
    </svg>
  );
}

export default function Themen() {
  return (
    <section id="themen" className="in-section sec-step">
      <div className="in-grid">
        {/* Links: bleibt stehen, während die Karten vorbeilaufen */}
        <div className="in-head">
          <SectionLabel>Insights</SectionLabel>
          <h2 className="in-h2">Themen, über die wir nachdenken</h2>
          <p className="in-lead">
            Viele Fragen aus unseren Projekten tauchen auch in Vorträgen,
            Fachbeiträgen, Workshops und eigenen Veranstaltungen auf. Hier zeigen
            wir, womit wir uns bei MISCHOK fachlich beschäftigen — von
            gewachsenen Softwaresystemen über Spring Boot und Testing bis zu KI
            in der Softwareentwicklung.
          </p>
          <a
            href={PRAXIS_LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="in-cta"
          >
            Alle Insights ansehen
            <span aria-hidden="true">→</span>
          </a>
        </div>

        {/* Rechts: die Formate als Liste */}
        <div className="in-list">
          {TOPICS.map((t) => (
            <article key={t.slot} className="in-card">
              {/* Bild füllt die Karte; Scrim trägt den Kontrast für die Schrift */}
              <ImageFrame
                src={t.image}
                alt={t.placeholder}
                placeholder={t.placeholder}
                sizes="(max-width:991px) 92vw, 45vw"
              />
              <span className="in-scrim" aria-hidden="true" />

              {/* Kopfzeile: Format links, Icon gross rechts */}
              <div className="in-top">
                <span className="eyebrow in-kind">{t.kind}</span>
                <KindIcon kind={t.kind} />
              </div>

              <div className="in-body">
                <h3 className="in-title">{t.title}</h3>
                <p className="in-desc">{t.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
