"use client";

import { useEffect, useState } from "react";
import ImageFrame from "@/components/ui/ImageFrame";
import { REFERENZEN } from "@/lib/content";

/**
 * ReferenzenGrid — Karten der Referenzen-Unterseite.
 * geschlossen: Nummer, Headline, Projektlage (Bild unscharf)
 * Hover:       Bild wird scharf (wie Einsatzfelder-Grid, Section 02)
 * geöffnet:    zusätzlich Fließtext, Basisinformationen und CTA „Zur Referenz"
 * Grid: Desktop 2 Spalten, Mobile 1 Spalte.
 */
export default function ReferenzenGrid() {
  // Nur eine Karte gleichzeitig offen — beim Öffnen schließt sich die andere.
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const toggle = (slug: string) =>
    setOpenSlug((s) => (s === slug ? null : slug));

  // Beim Öffnen die Karte mittig in den Viewport scrollen (nicht beim Schließen).
  useEffect(() => {
    if (!openSlug) return;
    const el = document.getElementById(openSlug);
    el?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, [openSlug]);

  return (
    <div className="ref-grid">
      {REFERENZEN.map((r) => {
        const isOpen = openSlug === r.slug;
        return (
          <article
            key={r.slug}
            id={r.slug}
            className={`ref-card${isOpen ? " is-open" : ""}`}
            role="button"
            tabIndex={0}
            aria-expanded={isOpen}
            onClick={() => toggle(r.slug)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                toggle(r.slug);
              }
            }}
            style={{ scrollMarginTop: "96px" }}
          >
            <div className="ref-media" style={{ position: "absolute", inset: 0 }}>
              <ImageFrame
                src={r.image}
                alt={`${r.name} — ${r.headline}`}
                placeholder={r.name}
                sizes="(max-width:820px) 100vw, 50vw"
              />
            </div>
            <div className="ref-overlay" />

            <div className="ref-content-grid">
              {/* Links: bis Projektlage */}
              <div className="ref-left">
                {/* Nummer + Name */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    gap: "14px",
                    flexWrap: "wrap",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: "clamp(48px,4.8vw,64px)",
                      lineHeight: 1,
                      color: "rgba(255,255,255,.85)",
                    }}
                  >
                    {r.n}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "17px",
                      letterSpacing: "0.08em",
                      color: "rgba(255,255,255,.8)",
                    }}
                  >
                    {r.name}
                  </span>
                </div>

                {/* Headline */}
                <h2
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                    fontSize: "clamp(31px,2.9vw,42px)",
                    lineHeight: 1.16,
                    margin: "16px 0 0",
                  }}
                >
                  {r.headline}
                </h2>

                {/* Projektlage */}
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "17px",
                    lineHeight: "var(--lh-copy)",
                    color: "rgba(255,255,255,.82)",
                    margin: "14px 0 0",
                  }}
                >
                  {r.projektlage}
                </div>
              </div>

              {/* Rechts: ab Beschreibungstext */}
              <div className="ref-right">
                <div className="ref-right-inner">
                  {r.text.map((p, idx) => (
                    <p
                      key={idx}
                      style={{
                        fontFamily: "var(--mono)",
                        fontSize: "clamp(17px,1.6vw,20px)",
                        lineHeight: "var(--lh-copy)",
                        color: "rgba(255,255,255,.92)",
                        margin: idx === 0 ? "0" : "14px 0 0",
                      }}
                    >
                      {p}
                    </p>
                  ))}

                  <ul
                    style={{
                      listStyle: "none",
                      margin: "clamp(18px,2vw,24px) 0 0",
                      padding: 0,
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                      borderTop: "1px solid rgba(255,255,255,.18)",
                      paddingTop: "clamp(18px,2vw,24px)",
                    }}
                  >
                    {r.facts.map((f) => (
                      <li
                        key={f.label}
                        style={{
                          display: "flex",
                          gap: "10px",
                          fontFamily: "var(--mono)",
                          fontSize: "17px",
                          lineHeight: "var(--lh-copy)",
                          color: "rgba(255,255,255,.88)",
                        }}
                      >
                        <span
                          style={{
                            flex: "none",
                            minWidth: "132px",
                            color: "rgba(255,255,255,.6)",
                          }}
                        >
                          {f.label}
                        </span>
                        <span>{f.value}</span>
                      </li>
                    ))}
                  </ul>

                  {/* dieselbe CTA-Optik wie ueberall sonst. Vorher
                      .cta-grad-light (Verlauf transparent → weiss 22%). */}
                  {r.detailHref && (
                    <a
                      href={r.detailHref}
                      onClick={(e) => e.stopPropagation()}
                      className="cta-ghost on-navy"
                      style={{ marginTop: "clamp(22px,2.4vw,30px)" }}
                    >
                      Referenz ansehen
                      <span aria-hidden="true">→</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
}
