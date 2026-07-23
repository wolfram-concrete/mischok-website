"use client";

import { useState } from "react";
import { NAV } from "@/components/sections/HeroImpact";
import { REFERENZEN, REFERENZEN_INTRO } from "@/lib/content";

/**
 * MainNav — die EINE Hauptnavigation der Seite (Wortmarke, Links mit Referenzen-
 * und Insights-Megamenü, „Erstgespräch"-CTA, Mobile-Burger). Bewusst als eigene
 * Komponente, damit dieselbe Navi an ZWEI Stellen läuft, ohne zu divergieren:
 *   1. im Hero-Bento (erstes Modul) — HeroCeramic
 *   2. in der einblendenden Reveal-Navi beim Hochscrollen — Header
 * Beide Instanzen tragen eigenen State (Menü offen), teilen aber Markup, Optik
 * und Megamenü-Inhalt. Der „hc-"-Namespace ist der der Hero-Navi — dieselbe
 * Optik ist gewollt (es ist dieselbe Navi).
 */

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

/* Insights-Megamenü — analog zum Referenzen-Megamenü. Teaser auf die (geplanten)
   Insights-Detailseiten; solange die Detail-Routen noch nicht existieren, zeigen
   die Links auf die Insights-Section der Home (/#themen). n/name/sub wie bei den
   Referenzen, damit dieselbe Mega-Optik greift. */
const INSIGHTS_INTRO = {
  kicker: "Insights",
  headline: "Themen, über die wir nachdenken",
  href: "/#themen",
};
const INSIGHTS = [
  { n: "01", name: "Retten oder Reimplementieren?", sub: "Vortrag", href: "/#themen" },
  { n: "02", name: "STEPS", sub: "Veranstaltung", href: "/#themen" },
  { n: "03", name: "KI in der Softwareentwicklung", sub: "Workshop", href: "/#themen" },
  { n: "04", name: "Wann sich der Umbau lohnt – und wann nicht", sub: "Fachbeitrag", href: "/#themen" },
  { n: "05", name: "Was 8.500 Tests mit Verantwortung zu tun haben", sub: "Fachbeitrag", href: "/#themen" },
];

export default function MainNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  // Megamenü: "ref" (Referenzen) | "ins" (Insights) | null (zu)
  const [openMenu, setOpenMenu] = useState<null | "ref" | "ins">(null);
  // Daten des aktuell offenen Megamenüs — auf eine gemeinsame Form normalisiert,
  // damit dasselbe Panel beide Menüs rendert.
  const mega =
    openMenu === "ins"
      ? {
          intro: INSIGHTS_INTRO,
          items: INSIGHTS,
          ctaHref: "/#themen",
        }
      : {
          intro: REFERENZEN_INTRO,
          items: REFERENZEN.map((r) => ({
            n: r.n,
            name: r.name,
            sub: r.projektlage,
            href: r.detailHref ?? `/referenzen#${r.slug}`,
          })),
          ctaHref: "/referenzen",
        };

  return (
    <>
      <div
        /* is-mega auch beim Burger-Panel: die Navizeile ist dann dieselbe
           Flaeche, die nach unten weiterwaechst — auf Mobil wie auf Desktop */
        className={`hc-nav${openMenu || menuOpen ? " is-mega" : ""}`}
        onMouseLeave={() => setOpenMenu(null)}
      >
        <a href="/" aria-label="mischok — better. software — Startseite" className="hc-nav-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Logo/MISCHOK_LOGO_L_POS_RGB-neu-claim.png"
            alt="mischok — better. software"
            className="hc-wordmark"
          />
        </a>

        {/* „Referenzen" UND „Insights" tragen je ein Mega-Menü (dasselbe Panel,
            Inhalt je nach openMenu). Die uebrigen Links schliessen es. */}
        <nav className="hc-nav-links" aria-label="Hauptnavigation">
          {NAV.map((n) => {
            const key =
              n.label === "Referenzen"
                ? "ref"
                : n.label === "Insights"
                  ? "ins"
                  : null;
            return key ? (
              <div key={n.label} className="hc-nav-item">
                <button
                  type="button"
                  className="hc-nav-link"
                  aria-expanded={openMenu === key}
                  onMouseEnter={() => setOpenMenu(key)}
                  onClick={() => setOpenMenu((o) => (o === key ? null : key))}
                >
                  {n.label}
                  <Chevron open={openMenu === key} />
                </button>
              </div>
            ) : (
              <a
                key={n.label}
                href={n.href}
                className="hc-nav-link"
                onMouseEnter={() => setOpenMenu(null)}
              >
                {n.label}
              </a>
            );
          })}
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

        {/* Mega-Panel: zoomt über die volle Navi-Breite nach unten auf. Inhalt
            (Referenzen oder Insights) kommt aus `mega`, gesteuert von openMenu. */}
        <div
          className={`hc-mega${openMenu ? " is-open" : ""}`}
          aria-hidden={!openMenu}
        >
          <div className="hc-mega-clip">
            <div className="hc-mega-inner">
              <div className="hc-mega-cols">
                <div className="hc-mega-label">{mega.intro.kicker}</div>
                <div className="hc-mega-list">
                  {mega.items.map((item) => (
                    <a
                      key={`${item.n}-${item.name}`}
                      href={item.href}
                      className="hc-mega-link"
                      tabIndex={openMenu ? 0 : -1}
                      onClick={() => setOpenMenu(null)}
                    >
                      <span className="hc-mega-n">{item.n}</span>
                      <span className="hc-mega-body">
                        <span className="hc-mega-name">{item.name}</span>
                        <span className="hc-mega-sub">{item.sub}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              <a
                href={mega.ctaHref}
                className="hc-mega-cta"
                tabIndex={openMenu ? 0 : -1}
                onClick={() => setOpenMenu(null)}
              >
                <span className="hc-mega-cta-label">{mega.intro.kicker}</span>
                <span className="hc-mega-cta-h">{mega.intro.headline}</span>
                <span className="hc-mega-cta-btn">
                  {openMenu === "ins" ? "Alle Insights" : "Alle Referenzen"}
                  <span aria-hidden="true">→</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Abdunkeln, solange die Mega-Navi offen ist */}
      <span className={`hc-scrim${openMenu ? " is-open" : ""}`} aria-hidden="true" />
    </>
  );
}
