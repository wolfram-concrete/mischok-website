"use client";

import { useEffect, useState } from "react";
import { REFERENZEN } from "@/lib/content";

/**
 * Header — sticky Top-Navigation. Struktur aus der Sitemap (Mischok-Website.pdf):
 * Einsatzfelder, Referenzen (konkrete Projektnamen; 9 Levels führt auf die
 * Detailseite, die übrigen auf Anker der Übersicht), Über uns, Insights, Karriere,
 * plus CTA „Erstgespräch". Über der Hero transparent, ab dem Scrollen mit hellem
 * Hintergrund. Mobil als Burger-Menü.
 */

type NavItem = {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
};

const NAV: NavItem[] = [
  { label: "Einsatzfelder", href: "/#einsatzfelder" },
  {
    label: "Referenzen",
    href: "/referenzen",
    children: [
      { label: "Alle Referenzen", href: "/referenzen" },
      ...REFERENZEN.map((r) => ({
        label: r.name,
        href: r.detailHref ?? `/referenzen#${r.slug}`,
      })),
    ],
  },
  { label: "Über uns", href: "/#ueber" },
  { label: "Insights", href: "/#themen" },
  { label: "Karriere", href: "/#arbeiten" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menü schließen, sobald ein Link geklickt wird
  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background:
          scrolled || mobileOpen ? "var(--bg)" : "transparent",
        borderBottom:
          scrolled || mobileOpen
            ? "1px solid var(--line)"
            : "1px solid transparent",
        transition: "background .3s ease, border-color .3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "68px",
          paddingInline: "clamp(20px,5vw,64px)",
        }}
      >
        {/* Wortmarke → Home (statt Bildmarke) */}
        <a href="/" aria-label="MISCHOK — Startseite" style={{ display: "flex" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/Logo/MISCHOK_LOGO_L_POS_RGB-neu-solo.svg"
            alt="MISCHOK"
            width={121}
            height={24}
            style={{ display: "block", height: "22px", width: "auto" }}
          />
        </a>

        {/* Desktop-Navigation */}
        <nav className="nav-desktop" style={{ gap: "clamp(20px,2.4vw,36px)" }}>
          {NAV.map((item) =>
            item.children ? (
              <div key={item.label} className="nav-item">
                <a href={item.href} className="nav-link">
                  {item.label}
                  <span aria-hidden="true" style={{ marginLeft: "5px" }}>
                    ›
                  </span>
                </a>
                <div className="nav-dropdown">
                  <div className="nav-dropdown-inner">
                    {item.children.map((c) => (
                      <a key={c.label} href={c.href}>
                        {c.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            )
          )}
          <a
            href="/#kontakt"
            className="cta-solid"
            style={{
              textDecoration: "none",
              fontFamily: "var(--sans)",
              fontWeight: 700,
              fontSize: "14px",
              padding: "12px 22px",
              borderRadius: "3px",
              marginLeft: "clamp(8px,1vw,16px)",
            }}
          >
            Erstgespräch
          </a>
        </nav>

        {/* Mobile-Burger */}
        <button
          type="button"
          className="nav-burger"
          aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((o) => !o)}
          style={{
            background: "none",
            border: "none",
            padding: "8px",
            cursor: "pointer",
            flexDirection: "column",
            gap: "5px",
          }}
        >
          <span style={burgerLine(mobileOpen, 0)} />
          <span style={burgerLine(mobileOpen, 1)} />
          <span style={burgerLine(mobileOpen, 2)} />
        </button>
      </div>

      {/* Mobile-Panel */}
      {mobileOpen && (
        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "8px clamp(20px,5vw,64px) 28px",
            gap: "2px",
            borderTop: "1px solid var(--line)",
          }}
        >
          {NAV.map((item) => (
            <div key={item.label}>
              <a
                href={item.href}
                onClick={closeMobile}
                style={mobileLink}
              >
                {item.label}
              </a>
              {item.children && (
                <div style={{ display: "flex", flexDirection: "column" }}>
                  {item.children.map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      onClick={closeMobile}
                      style={{ ...mobileLink, paddingLeft: "16px", fontSize: "15px", color: "var(--slate)" }}
                    >
                      {c.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="/#kontakt"
            onClick={closeMobile}
            className="cta-solid"
            style={{
              textDecoration: "none",
              fontFamily: "var(--sans)",
              fontWeight: 700,
              fontSize: "15px",
              padding: "14px 22px",
              borderRadius: "3px",
              marginTop: "14px",
              textAlign: "center",
            }}
          >
            Erstgespräch
          </a>
        </nav>
      )}
    </header>
  );
}

const mobileLink = {
  display: "block",
  textDecoration: "none",
  color: "var(--navy)",
  fontFamily: "var(--sans)",
  fontWeight: 500,
  fontSize: "17px",
  padding: "12px 0",
} as const;

// Burger-Striche in der Anmutung des „m": gleiche Strichstärke, kantige Enden
// (keine Rundung). Strichstärke ~11 % der Breite, analog zu den Logo-Balken.
function burgerLine(open: boolean, i: number) {
  const base = {
    display: "block",
    width: "27px",
    height: "3px",
    background: "var(--navy)",
    borderRadius: "0",
    transition: "transform .25s ease, opacity .2s ease",
  } as const;
  if (!open) return base;
  if (i === 0)
    return { ...base, transform: "translateY(8px) rotate(45deg)" };
  if (i === 1) return { ...base, opacity: 0 };
  return { ...base, transform: "translateY(-8px) rotate(-45deg)" };
}
