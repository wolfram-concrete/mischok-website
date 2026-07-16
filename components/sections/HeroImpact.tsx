"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import ImageFrame from "@/components/ui/ImageFrame";
import PatternBg from "@/components/ui/PatternBg";
import { FIELDS } from "@/lib/content";

/**
 * HeroImpact — Masterversion des Heros: vollflächige Bento, nur der innere
 * Aufbau (randlos), feine dunkle Stege.
 *
 * • Logo im linken Modul = Home-Button. Keine separate Navigationszeile —
 *   der Burger sitzt oben rechts in der H1-Box und öffnet das Menü.
 * • Kacheln 1–5 interaktiv (Klick/Hover skaliert prominent) mit animierten,
 *   geometrischen Icons (leichte Rotation/Bewegung), reduced-motion-sicher.
 * • Genau zwei Bildcontainer.
 */

/* — Systems-Thinking-Icons v3 (nach Referenz) — Outline-only, 1.5px, #002A5C.
   Animiert werden die gestrichelten Elemente; jede Bewegung folgt der Bedeutung
   des Icons (kein einheitliches Muster). reduced-motion-sicher. */
const icons: Record<string, ReactNode> = {
  // 01 — Ihre Software ist Teil des laufenden Betriebs.
  // Pfeil „tritt ein" in eine offene Box; darum ein gestrichelter Ring, der
  // langsam rotiert = der Betrieb läuft kontinuierlich weiter.
  orbit: (
    <>
      <circle cx="16" cy="16" r="12.5" />
      <path d="M13.5 11 H22.5 V21 H13.5" />
      {/* Pfeil gestrichelt — die Striche fließen nach innen (simuliert Bewegung) */}
      <path className="hi-a-enter" d="M6 16 H19" strokeDasharray="2 2.4" />
      <path d="M15.6 12.9 L19 16 L15.6 19.1" />
    </>
  ),
  // 02 — Anforderungen ändern sich, Systeme bleiben.
  // Verzweigung zu drei Zielen: gestrichelter Kreis (die neue Anforderung –
  // pulsiert), sowie Kreis + Quadrat (bestehende Systeme – bleiben ruhig).
  venn: (
    <>
      {/* baut sich von links (Knoten) nach rechts auf: Linien zeichnen,
          Endpunkte ploppen versetzt nach (gestaffelt nach x-Position) */}
      <path className="hi-b-line" style={{ animationDelay: "0s" }} pathLength={1} d="M3 16 H8" />
      <path className="hi-b-line" style={{ animationDelay: "0.25s" }} pathLength={1} d="M8 16 H15.6" />
      <circle className="hi-b-pop" style={{ animationDelay: "0.5s" }} cx="18.2" cy="16" r="2.6" />
      <path className="hi-b-line" style={{ animationDelay: "0.6s" }} pathLength={1} d="M8 16 L21.4 8.5" />
      <path className="hi-b-line" style={{ animationDelay: "0.6s" }} pathLength={1} d="M8 16 L22.5 22.5" />
      <circle className="hi-b-pop" style={{ animationDelay: "0.95s" }} cx="24" cy="7" r="3" />
      <rect className="hi-b-pop" style={{ animationDelay: "0.95s" }} x="22.5" y="22.5" width="5" height="5" />
    </>
  ),
  // 03 — Technik und Zielbild passen nicht mehr sauber zusammen.
  // Solides Quadrat (Ist) + gestrichelter Kreis (Zielbild) überlappen; der
  // gestrichelte Kreis driftet leicht hin und her = passt nicht sauber.
  offset: (
    <>
      <rect x="7.5" y="9.5" width="12" height="12" />
      <circle className="hi-a-mismatch" cx="21" cy="17.5" r="7" strokeDasharray="2 2.8" />
    </>
  ),
  // 04 — Mehr Entwicklungskapazität hilft nur, wenn die Richtung stimmt.
  // Gestapelte Rauten (Kapazität) + Richtungspfeil; der gestrichelte Schaft
  // fließt nach oben = die Richtung gibt der Kapazität Sinn.
  layers: (
    <>
      <path d="M16 11 V4.3" />
      <path d="M13 6.8 L16 3.9 L19 6.8" />
      {/* drei Rauten: oben/unten schieben auseinander, Mitte bleibt */}
      <path className="hi-a-sepUp" d="M16 12.6 L23 15 L16 17.4 L9 15 Z" />
      <path d="M16 16.6 L23 19 L16 21.4 L9 19 Z" />
      <path className="hi-a-sepDn" d="M16 20.6 L23 23 L16 25.4 L9 23 Z" />
    </>
  ),
  // 05 — Wir klären die Lage, ordnen die Optionen, schaffen die Grundlage.
  // Zentrum + vier gestrichelte Strahlen mit Pfeilspitzen; die Strahlen fließen
  // vom geklärten Zentrum nach außen = Optionen ordnen sich.
  radial: (
    <>
      <circle cx="16" cy="16" r="3.4" />
      <g className="hi-a-order">
        <path d="M18.4 13.6 L23.4 8.6" strokeDasharray="2 2.4" />
        <path d="M13.6 13.6 L8.6 8.6" strokeDasharray="2 2.4" />
        <path d="M18.4 18.4 L23.4 23.4" strokeDasharray="2 2.4" />
        <path d="M13.6 18.4 L8.6 23.4" strokeDasharray="2 2.4" />
      </g>
      <path d="M21.3 8.6 L23.4 8.6 L23.4 10.7" />
      <path d="M10.7 8.6 L8.6 8.6 L8.6 10.7" />
      <path d="M23.4 21.3 L23.4 23.4 L21.3 23.4" />
      <path d="M8.6 21.3 L8.6 23.4 L10.7 23.4" />
    </>
  ),
};

export function Icon({ name }: { name: string }) {
  return (
    <svg
      className="hi-icon"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[name]}
    </svg>
  );
}

export const FOCUS = [
  { icon: "orbit", title: "Software ist Teil des laufenden Betriebs", detail: FIELDS[0].detail },
  { icon: "venn", title: "Anforderungen ändern sich, Systeme bleiben", detail: FIELDS[1].detail },
  { icon: "offset", title: "Technik und Zielbild passen nicht mehr", detail: FIELDS[2].detail },
  { icon: "layers", title: "Mehr Kapazität hilft nur mit klarer Richtung", detail: FIELDS[3].detail },
  { icon: "radial", title: "Lage klären, Optionen ordnen, entscheiden", detail: FIELDS[4].detail },
];

export const NAV = [
  { label: "Referenzen", href: "/referenzen" },
  { label: "Über uns", href: "/#ueber" },
  { label: "Insights", href: "/#themen" },
  { label: "Karriere", href: "/#arbeiten" },
];

export default function HeroImpact() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="hi-section" id="hero-impact">
      <div className="hi-card">
        {/* Brand-Modul: Logo = Home-Button */}
        <div className="hi-cell hi-brand">
          <a href="/" aria-label="MISCHOK — Startseite" className="hi-brand-link">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Logo/MISCHOK_LOGO_L_POS_RGB-neu-solo.png"
              alt="MISCHOK"
              className="hi-wordmark"
            />
          </a>
        </div>

        {/* Headline (Serif-H1) — unten im Modul ausgerichtet */}
        <div className="hi-cell hi-head">
          <h1 className="hi-headline">
            Wenn Software entscheidend für Ihren Geschäftserfolg ist, braucht sie
            Menschen, die Verantwortung übernehmen.
          </h1>
        </div>

        {/* Foto-Modul rechts */}
        <div className="hi-cell hi-photo hi-photoL">
          <ImageFrame
            src="/assets/Mischok_2023_ma_245.jpg"
            alt="MISCHOK — Team im Gespräch"
            placeholder=""
            sizes="(max-width:900px) 100vw, 34vw"
            priority
          />
        </div>

        {/* Interaktives Accordion-Band: Kacheln 1–5 */}
        <div className="hi-fields" role="tablist" aria-label="Fokusfelder">
          {FOCUS.map((f, i) => {
            const open = i === active;
            return (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={open}
                className={`hi-field${open ? " is-open" : ""}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <span className="hi-field-top">
                  <span className="hi-num">Szenario {String(i + 1).padStart(2, "0")}</span>
                  <span className="hi-icon-wrap">
                    <Icon name={f.icon} />
                  </span>
                </span>
                <span className="hi-field-body">
                  <span className="hi-ftitle">{f.title}</span>
                  <span className="hi-fdetail">{f.detail}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Navy-Block: kräftiger Farbblock mit kubischer Stardust-Gradient-Fläche + CTA */}
        <div className="hi-cell hi-navy">
          <PatternBg pattern="bands" opacity={0.55} blend="soft-light" priority sizes="50vw" />
          <span className="hi-deco" aria-hidden="true" />
          <span className="hi-navy-label">Der nächste Schritt</span>
          <a href="#kontakt" className="hi-cta">
            Projektlage klären
            <span aria-hidden="true" className="hi-cta-arrow">
              →
            </span>
          </a>
        </div>

        {/* Foto B */}
        <div className="hi-cell hi-photo hi-photoB">
          <ImageFrame
            src="/assets/Mischok_2025_ma_216.jpg"
            alt="MISCHOK — Geschäftsführung"
            placeholder=""
            sizes="(max-width:900px) 100vw, 40vw"
            imgStyle={{ objectPosition: "center 32%" }}
          />
        </div>
      </div>

      {/* Navigation: Burger oben rechts im Hero (über dem rechten Bild) */}
      <button
        type="button"
        className={`hi-burger${menuOpen ? " is-open" : ""}`}
        aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span className="hi-burger-line" />
        <span className="hi-burger-line" />
        <span className="hi-burger-line" />
      </button>
      {menuOpen && (
        <nav className="hi-menu" aria-label="Hauptnavigation">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} onClick={() => setMenuOpen(false)}>
              {n.label}
            </a>
          ))}
          <a
            href="/#kontakt"
            className="hi-menu-cta"
            onClick={() => setMenuOpen(false)}
          >
            Erstgespräch
          </a>
        </nav>
      )}
    </section>
  );
}
