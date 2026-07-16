"use client";

import { useEffect, useState } from "react";
import ImageFrame from "@/components/ui/ImageFrame";
import { Icon, FOCUS, NAV } from "@/components/sections/HeroImpact";
import { REFERENZEN, REFERENZEN_INTRO } from "@/lib/content";

/** Sekundär-Links (Referenzen bekommt ein eigenes Dropdown) */
const NAV_REST = NAV.filter((n) => n.label !== "Referenzen");

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    className={`hc-chev${open ? " is-open" : ""}`}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 6L8 10L12 6" />
  </svg>
);

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
  const [dropOpen, setDropOpen] = useState(false);
  /* Solange niemand in den Szenarien hovert, klappen sie nacheinander auf —
     als dezenter Hinweis, dass in den Karten eine zweite Ebene steckt.
     Beim ersten Hover/Fokus stoppt das dauerhaft. */
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setActive((i) => (i + 1) % FOCUS.length),
      3200
    );
    return () => window.clearInterval(id);
  }, [autoplay]);

  return (
    <section className="hc-section" id="hero-ceramic">
      <div className="hc-grid">
        {/* Navigations-Modul: Logo, Links (mit Referenzen-Dropdown) und CTA
            zusammengefasst in einem länglichen Bento über die volle Breite. */}
        <div
          className={`hc-nav hc-surface${dropOpen ? " is-mega" : ""}`}
          onMouseLeave={() => setDropOpen(false)}
        >
          <a href="/" aria-label="MISCHOK — Startseite" className="hc-nav-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Logo/MISCHOK_LOGO_L_POS_RGB-neu-solo.png"
              alt="MISCHOK"
              className="hc-wordmark"
            />
          </a>

          <nav className="hc-nav-links" aria-label="Hauptnavigation">
            <div className="hc-nav-item">
              <button
                type="button"
                className="hc-nav-link"
                aria-expanded={dropOpen}
                onMouseEnter={() => setDropOpen(true)}
                onClick={() => setDropOpen((o) => !o)}
              >
                Referenzen
                <Chevron open={dropOpen} />
              </button>
            </div>

            {NAV_REST.map((n) => (
              <a
                key={n.label}
                href={n.href}
                className="hc-nav-link"
                onMouseEnter={() => setDropOpen(false)}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <a href="/#kontakt" className="hc-nav-cta">
            Erstgespräch
          </a>

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

          {/* Mega-Panel: zoomt über die volle Navi-Breite nach unten auf */}
          <div className={`hc-mega${dropOpen ? " is-open" : ""}`} aria-hidden={!dropOpen}>
            <div className="hc-mega-clip">
              <div className="hc-mega-inner">
                <div className="hc-mega-cols">
                  <div className="hc-mega-label">{REFERENZEN_INTRO.kicker}</div>
                  <div className="hc-mega-list">
                    {REFERENZEN.map((r) => (
                      <a
                        key={r.slug}
                        href={r.detailHref ?? `/referenzen#${r.slug}`}
                        className="hc-mega-link"
                        tabIndex={dropOpen ? 0 : -1}
                        onClick={() => setDropOpen(false)}
                      >
                        <span className="hc-mega-n">{r.n}</span>
                        <span className="hc-mega-body">
                          <span className="hc-mega-name">{r.name}</span>
                          <span className="hc-mega-sub">{r.projektlage}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                <a
                  href="/referenzen"
                  className="hc-mega-cta"
                  tabIndex={dropOpen ? 0 : -1}
                  onClick={() => setDropOpen(false)}
                >
                  <span className="hc-mega-cta-label">{REFERENZEN_INTRO.kicker}</span>
                  <span className="hc-mega-cta-h">{REFERENZEN_INTRO.headline}</span>
                  <span className="hc-mega-cta-btn">
                    Alle Referenzen
                    <span aria-hidden="true">→</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
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
        <div
          className="hc-fields"
          role="tablist"
          aria-label="Fokusfelder"
          onMouseEnter={() => setAutoplay(false)}
          onFocusCapture={() => setAutoplay(false)}
        >
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

      {/* Abdunkeln, solange die Mega-Navi offen ist */}
      <span className={`hc-scrim${dropOpen ? " is-open" : ""}`} aria-hidden="true" />
    </section>
  );
}
