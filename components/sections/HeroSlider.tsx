"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import ImageFrame from "@/components/ui/ImageFrame";
import { FIELDS } from "@/lib/content";

/**
 * HeroSlider — Hero-Testvariante: links inszenierte Headline, rechts fünf
 * vertikale, interaktive Fokusfeld-Spalten (horizontales Accordion). Eine Spalte
 * öffnet bei Hover/Klick nach links (flex-grow 1→3.4) und zeigt Nummer, Titel,
 * Erklärung und einen kleinen CTA. Der Foto-Layer ist inaktiv stark reduziert
 * (monochrom/abgedunkelt) und wird aktiv deutlicher — Text bleibt stets lesbar.
 * Mobile (< 820px): vertikales Accordion. prefers-reduced-motion in globals.css.
 */

const FOCUS = [
  { n: "01", title: "Software ist Teil des laufenden Betriebs", text: FIELDS[0].detail, img: FIELDS[0].image },
  { n: "02", title: "Anforderungen verändern sich, bestehende Systeme bleiben", text: FIELDS[1].detail, img: FIELDS[1].image },
  { n: "03", title: "Technik und Zielbild passen nicht mehr sauber zusammen", text: FIELDS[2].detail, img: FIELDS[2].image },
  { n: "04", title: "Mehr Entwicklungskapazität hilft nur, wenn die Richtung stimmt", text: FIELDS[3].detail, img: FIELDS[3].image },
  { n: "05", title: "Lage klären, Optionen ordnen, Entscheidung vorbereiten", text: FIELDS[4].detail, img: FIELDS[4].image },
];

export default function HeroSlider() {
  const [vw, setVw] = useState(1280);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const stack = vw < 820;

  return (
    <section
      id="hero-slider"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--bg)",
        minHeight: "100svh",
        padding:
          "clamp(96px,11vw,150px) clamp(20px,5vw,64px) clamp(48px,6vw,80px)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="hs-split" style={{ width: "100%" }}>
        {/* Links: inszenierte Headline */}
        <div className="hs-headwrap">
          <h1 className="hs-head">
            <span className="hs-line" data-hero-text style={{ animationDelay: ".15s" }}>
              Wenn <em className="hs-key">Software</em> entscheidend
            </span>
            <span className="hs-line" data-hero-text style={{ animationDelay: ".3s" }}>
              für Ihren <em className="hs-key">Geschäftserfolg</em> ist,
            </span>
            <span className="hs-line" data-hero-text style={{ animationDelay: ".5s" }}>
              braucht sie <em className="hs-key">Menschen</em>, die
            </span>
            <span className="hs-line" data-hero-text style={{ animationDelay: ".65s" }}>
              <em className="hs-key">Verantwortung</em> übernehmen.
            </span>
          </h1>
        </div>

        {/* Rechts: fünf Fokusfeld-Spalten (horizontales Accordion) */}
        <div
          className="hs-cols"
          style={{ flexDirection: stack ? "column" : "row" }}
        >
          {FOCUS.map((f, i) => {
            const open = i === active;
            const colStyle: CSSProperties = {
              position: "relative",
              overflow: "hidden",
              borderRadius: "6px",
              cursor: open ? "default" : "pointer",
              flex: stack ? "none" : open ? "3.4 1 0" : "1 1 0",
              height: stack ? (open ? "300px" : "84px") : "min(66svh, 560px)",
              minWidth: 0,
              border: "none",
              padding: 0,
              textAlign: "left",
              background: "var(--navy)",
              opacity: 0,
              animation: `heroColRise .7s cubic-bezier(.2,.7,.2,1) both`,
              animationDelay: `${0.75 + i * 0.1}s`,
              transition:
                "flex-grow .55s cubic-bezier(.4,0,.2,1), height .5s ease",
            };

            return (
              <button
                key={f.n}
                type="button"
                data-hero-col
                aria-expanded={open}
                aria-label={f.title}
                onMouseEnter={() => !stack && setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                style={colStyle}
              >
                {/* Foto-Layer: inaktiv reduziert/monochrom, aktiv deutlicher */}
                <ImageFrame
                  src={f.img}
                  alt=""
                  placeholder=""
                  sizes="(max-width:820px) 100vw, 40vw"
                  imgStyle={{
                    filter: open
                      ? "grayscale(0.2) brightness(0.62) contrast(1.02)"
                      : "grayscale(1) brightness(0.4) contrast(0.95)",
                    transform: open ? "scale(1)" : "scale(1.1)",
                    transition: "filter .55s ease, transform .6s ease",
                  }}
                />
                {/* Navy-Scrim für Lesbarkeit */}
                <div
                  aria-hidden="true"
                  style={{
                    position: "absolute",
                    inset: 0,
                    pointerEvents: "none",
                    background: open
                      ? "linear-gradient(180deg, rgba(0,17,41,0.55) 0%, rgba(0,17,41,0.30) 42%, rgba(0,17,41,0.88) 100%)"
                      : "linear-gradient(180deg, rgba(0,17,41,0.62) 0%, rgba(0,17,41,0.72) 100%)",
                    transition: "background .5s ease",
                  }}
                />

                {/* Nummer — immer sichtbar (oben) */}
                <span
                  style={{
                    position: "absolute",
                    top: "clamp(16px,1.6vw,22px)",
                    left: "clamp(16px,1.6vw,22px)",
                    zIndex: 3,
                    fontFamily: "var(--serif)",
                    fontSize: "clamp(20px,1.8vw,26px)",
                    lineHeight: 1,
                    color: "rgba(255,255,255,.9)",
                  }}
                >
                  {f.n}
                </span>

                {stack ? (
                  /* ---------- Mobile: horizontaler Titel + aufklappender Text ---------- */
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      zIndex: 3,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "flex-end",
                      padding: "clamp(16px,4vw,24px)",
                      paddingLeft: "clamp(52px,14vw,64px)",
                    }}
                  >
                    <h2 className="hs-col-title">{f.title}</h2>
                    <div
                      style={{
                        display: "grid",
                        gridTemplateRows: open ? "1fr" : "0fr",
                        opacity: open ? 1 : 0,
                        transition:
                          "grid-template-rows .5s cubic-bezier(.4,0,.2,1), opacity .4s ease",
                      }}
                    >
                      <div style={{ overflow: "hidden", minHeight: 0 }}>
                        <p className="hs-col-text">{f.text}</p>
                        <a href="#kontakt" className="cta-grad-light hs-col-cta">
                          Projektlage klären
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* ---------- Desktop: vertikaler Titel (inaktiv) ↔ Inhalt (aktiv) ---------- */
                  <>
                    {/* Vertikaler Titel — sichtbar wenn geschlossen */}
                    <span
                      aria-hidden="true"
                      style={{
                        position: "absolute",
                        bottom: "clamp(22px,2.4vw,32px)",
                        left: "50%",
                        transform: "translateX(-50%) rotate(180deg)",
                        writingMode: "vertical-rl",
                        zIndex: 3,
                        maxHeight: "72%",
                        overflow: "hidden",
                        fontFamily: "var(--sans)",
                        fontWeight: 500,
                        fontSize: "clamp(13px,1.05vw,15px)",
                        letterSpacing: "0.02em",
                        color: "rgba(255,255,255,.9)",
                        opacity: open ? 0 : 1,
                        transition: "opacity .35s ease",
                        pointerEvents: "none",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {f.title}
                    </span>

                    {/* Inhalt — sichtbar wenn offen */}
                    <div
                      style={{
                        position: "absolute",
                        left: "clamp(24px,2.4vw,36px)",
                        right: "clamp(24px,2.4vw,36px)",
                        bottom: "clamp(24px,2.6vw,38px)",
                        zIndex: 3,
                        opacity: open ? 1 : 0,
                        transform: open ? "translateY(0)" : "translateY(14px)",
                        transition:
                          "opacity .45s ease .1s, transform .5s cubic-bezier(.2,.7,.2,1) .1s",
                        pointerEvents: open ? "auto" : "none",
                      }}
                    >
                      <h2 className="hs-col-title">{f.title}</h2>
                      <p className="hs-col-text">{f.text}</p>
                      <a href="#kontakt" className="cta-grad-light hs-col-cta">
                        Projektlage klären
                      </a>
                    </div>
                  </>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
