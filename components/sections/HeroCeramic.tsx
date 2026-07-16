"use client";

import { useState } from "react";
import ImageFrame from "@/components/ui/ImageFrame";
import { Icon, FOCUS, NAV } from "@/components/sections/HeroImpact";

/**
 * HeroCeramic — zweite Hero-Variante (Kopie der bestehenden Struktur/Inhalte),
 * neu eingekleidet als zusammenhängendes, leicht plastisches Bento-System
 * (Apple/Linear/Editorial-Architektur). Eigener „hc-"-Namespace, damit die
 * bestehende Variante (HeroImpact) unberührt bleibt.
 *
 * Keine Tabellenlinien mehr → größere Stege, gemeinsame helle Grundfläche,
 * einheitliche keramische Kartenhaptik, Navigation als erstes Bento-Modul,
 * je Karte eine sehr subtile, aus dem Icon abgeleitete Hintergrundform.
 */

export default function HeroCeramic() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="hc-section" id="hero-ceramic">
      <div className="hc-grid">
        {/* Marken-Modul: Wortmarke in eigenem Container (bis ans Bild) */}
        <div className="hc-brand hc-surface">
          <a href="/" aria-label="MISCHOK — Startseite" className="hc-brand-link">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Logo/MISCHOK_LOGO_L_POS_RGB-neu-solo.png"
              alt="MISCHOK"
              className="hc-wordmark"
            />
          </a>
        </div>

        {/* Headline-Modul mit subtilen orthogonalen Platten */}
        <div className="hc-head hc-surface">
          <span className="hc-head-planes" aria-hidden="true" />
          <h1 className="hc-headline">
            Wenn Software entscheidend für Ihren Geschäftserfolg ist, braucht sie
            Menschen, die Verantwortung übernehmen.
          </h1>
        </div>

        {/* Bildmodul rechts */}
        <div className="hc-photo hc-surface">
          <ImageFrame
            src="/assets/Mischok_2023_ma_245.jpg"
            alt="MISCHOK — Team im Gespräch"
            placeholder=""
            sizes="(max-width:900px) 100vw, 34vw"
            priority
          />
        </div>

        {/* Fünf Content-Karten (Einzelmodule) */}
        <div className="hc-fields" role="tablist" aria-label="Fokusfelder">
          {FOCUS.map((f, i) => {
            const open = i === active;
            return (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={open}
                className={`hc-field hc-surface${open ? " is-open" : ""}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <span className="hc-field-head">
                  <span className="hc-num">Szenario {String(i + 1).padStart(2, "0")}</span>
                  <span className="hc-field-icon">
                    <Icon name={f.icon} />
                  </span>
                </span>
                <span className="hc-field-body">
                  <span className="hc-ftitle">{f.title}</span>
                  <span className="hc-fdetail">{f.detail}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Unten links: Teamfoto */}
        <div className="hc-photoB hc-surface">
          <ImageFrame
            src="/assets/Mischok_2025_ma_216.jpg"
            alt="MISCHOK — Geschäftsführung"
            placeholder=""
            sizes="(max-width:900px) 100vw, 40vw"
            imgStyle={{ objectPosition: "center 32%" }}
          />
        </div>

        {/* Unten rechts: dunkelblaues CTA-Modul */}
        <div className="hc-navy">
          <span className="hc-navy-planes" aria-hidden="true" />
          <span className="hc-navy-label">Der nächste Schritt</span>
          <a href="#kontakt" className="hc-cta">
            Projektlage klären
            <span aria-hidden="true" className="hc-cta-arrow">→</span>
          </a>
        </div>
      </div>

      {/* Burger als Overlay oben rechts über dem Bild */}
      <button
        type="button"
        className={`hc-burger${menuOpen ? " is-open" : ""}`}
        aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((o) => !o)}
      >
        <span /><span /><span />
      </button>
      {menuOpen && (
        <nav className="hc-menu" aria-label="Hauptnavigation">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} onClick={() => setMenuOpen(false)}>
              {n.label}
            </a>
          ))}
          <a href="/#kontakt" className="hc-menu-cta" onClick={() => setMenuOpen(false)}>
            Erstgespräch
          </a>
        </nav>
      )}
    </section>
  );
}
