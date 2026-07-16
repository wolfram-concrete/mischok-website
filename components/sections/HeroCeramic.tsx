"use client";

import { useState } from "react";
import type { ReactNode } from "react";
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

/* Aus den Icons abgeleitete, extrem subtile Hintergrundformen (orthogonal /
   technisch, keine zufälligen Bögen). Liegen fest im jeweiligen Card-Container. */
const FIELD_DECO: ReactNode[] = [
  // 01 — laufender Betrieb: große offene Kreisbahn (nur dünne Kontur)
  <svg key="d0" className="hc-deco" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
    <circle cx="60" cy="60" r="54" />
    <circle cx="60" cy="60" r="30" />
  </svg>,
  // 02 — Anforderungen ändern sich: drei überlagerte Konturen
  <svg key="d1" className="hc-deco" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
    <circle cx="46" cy="50" r="34" />
    <circle cx="74" cy="50" r="34" />
    <circle cx="60" cy="76" r="34" />
  </svg>,
  // 03 — Technik/Zielbild: zwei versetzte Rechteckkörper + kleiner Zielpunkt
  <svg key="d2" className="hc-deco" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
    <rect x="14" y="26" width="54" height="54" />
    <rect x="52" y="50" width="54" height="54" />
    <circle cx="96" cy="30" r="6" />
  </svg>,
  // 04 — klare Richtung: gestaffelte horizontale Layer
  <svg key="d3" className="hc-deco" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
    <path d="M6 42 H100" />
    <path d="M14 62 H108" />
    <path d="M6 82 H100" />
    <path d="M14 102 H108" />
  </svg>,
  // 05 — Optionen ordnen: orthogonales Netzwerk mit sichtbarem Zentrum
  <svg key="d4" className="hc-deco" viewBox="0 0 120 120" fill="none" stroke="currentColor" strokeWidth="1.3" aria-hidden="true">
    <rect x="22" y="22" width="76" height="76" />
    <path d="M60 22 V98 M22 60 H98" />
    <circle cx="60" cy="60" r="5.5" fill="currentColor" stroke="none" />
    <circle cx="22" cy="22" r="3" />
    <circle cx="98" cy="22" r="3" />
    <circle cx="22" cy="98" r="3" />
    <circle cx="98" cy="98" r="3" />
  </svg>,
];

export default function HeroCeramic() {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="hc-section" id="hero-ceramic">
      <div className="hc-grid">
        {/* 1 — Navigation als eigenständiges Bento-Modul */}
        <div className="hc-nav hc-surface">
          <a href="/" aria-label="MISCHOK — Startseite" className="hc-nav-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Logo/MISCHOK_LOGO_L_POS_RGB-neu-solo.png"
              alt="MISCHOK"
              className="hc-wordmark"
            />
          </a>
          <span className="hc-nav-divider" aria-hidden="true" />
          <nav className="hc-nav-links" aria-label="Hauptnavigation">
            {NAV.map((n) => (
              <a key={n.label} href={n.href}>
                {n.label}
              </a>
            ))}
            <a href="/#kontakt" className="hc-nav-cta">
              Erstgespräch
            </a>
          </nav>
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
            <nav className="hc-menu" aria-label="Hauptnavigation mobil">
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
                {FIELD_DECO[i]}
                <span className="hc-field-head">
                  <span className="hc-num">{String(i + 1).padStart(2, "0")}</span>
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
    </section>
  );
}
