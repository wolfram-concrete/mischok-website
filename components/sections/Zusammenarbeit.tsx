"use client";

import { useEffect, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import ImageFrame from "@/components/ui/ImageFrame";
import { ACC } from "@/lib/content";

/**
 * Zusammenarbeit — horizontales Accordion aus 3 Karten. Klick öffnet eine Karte
 * breiter (flex-grow 1→3.4), das Bild schärft, ein Glass-Panel (backdrop-blur)
 * mit Icon, Titel und Text erscheint. Die Headline steht auf allen Karten —
 * auch auf den geschlossenen; nur der Fließtext blendet beim Öffnen ein.
 */

/* Icons in der Systems-Thinking-Sprache des Heros: Outline-only, 1.5px,
   je Icon eine eigene, bedeutungsgetriebene Bewegung. reduced-motion-sicher. */
const ACC_ICONS: Record<string, ReactNode> = {
  // Klare Einordnung: verstreute Punkte richten sich an einer Achse aus
  einordnung: (
    <>
      <path d="M4 20 H28" />
      <circle className="ac-a-sort1" cx="9" cy="12" r="2.6" />
      <circle className="ac-a-sort2" cx="16" cy="12" r="2.6" />
      <circle className="ac-a-sort3" cx="23" cy="12" r="2.6" />
      <path className="ac-a-sortL1" d="M9 14.6 V20" strokeDasharray="1.6 2" />
      <path className="ac-a-sortL2" d="M16 14.6 V20" strokeDasharray="1.6 2" />
      <path className="ac-a-sortL3" d="M23 14.6 V20" strokeDasharray="1.6 2" />
    </>
  ),
  // Fachliche Tiefe: eine gestrichelte Sonde fährt durch die Schichten nach unten
  tiefe: (
    <>
      <path d="M5 10 H27" />
      <path d="M5 16 H27" />
      <path d="M5 22 H27" />
      <path className="ac-a-probe" d="M16 5 V27" strokeDasharray="2 2.4" />
      <circle className="ac-a-probeDot" cx="16" cy="22" r="2.2" />
    </>
  ),
  // Verantwortliche Menschen: einer bleibt sichtbar (gefüllt), die Gruppe pulsiert ruhig
  menschen: (
    <>
      <circle className="ac-a-p1" cx="9" cy="13" r="3.2" />
      <path className="ac-a-p1" d="M4 24c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      <circle className="ac-a-p3" cx="23" cy="13" r="3.2" />
      <path className="ac-a-p3" d="M18 24c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      <circle className="ac-a-p2" cx="16" cy="11" r="3.6" fill="currentColor" stroke="none" />
      <path className="ac-a-p2" d="M10.5 24c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" />
    </>
  ),
};

function AccIcon({ name }: { name: string }) {
  return (
    <svg
      className="ac-icon"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ACC_ICONS[name]}
    </svg>
  );
}

export default function Zusammenarbeit() {
  const [vw, setVw] = useState(1280);
  const [accOpen, setAccOpen] = useState(0);

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const accStack = vw < 760;

  return (
    <section
      id="zusammenarbeit"
      className="sec-step is-right"
      data-screen-label="Zusammenarbeit"
      style={{
        position: "relative",
        /* nur noch Ladefarbe aus der Palette — darüber liegt das Bild deckend */
        background: "var(--snow)",
        padding: "clamp(48px,6vw,96px) clamp(20px,5vw,72px)",
      }}
    >
      {/* Punktraster als Grund — reines CSS statt Grafik (siehe .zu-grid) */}
      <span className="zu-grid" aria-hidden="true" />

      <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 400,
            fontSize: "clamp(30px,4.6vw,60px)",
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            color: "var(--navy)",
            margin: "0 0 clamp(32px,4vw,52px)",
          }}
        >
          Was uns in der Zusammenarbeit wichtig ist
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: accStack ? "column" : "row",
            gap: "16px",
            width: "100%",
            height: accStack ? "auto" : "60vh",
          }}
        >
          {ACC.map((c, i) => {
            const open = i === accOpen;
            const cardStyle: CSSProperties = {
              position: "relative",
              overflow: "hidden",
              borderRadius: "5px",
              cursor: open ? "default" : "pointer",
              flex: accStack ? "none" : open ? "3.4 1 0" : "1 1 0",
              height: accStack ? (open ? "520px" : "150px") : "100%",
              minWidth: 0,
              background: "var(--navy)",
              transition:
                "flex-grow .55s cubic-bezier(.4,0,.2,1), height .5s ease",
            };
            const overlayStyle: CSSProperties = {
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              background: open
                ? "linear-gradient(90deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.05) 34%, rgba(0,0,0,0.55) 74%)"
                : "linear-gradient(180deg, rgba(0,0,0,0.22) 0%, rgba(0,0,0,0.06) 45%, rgba(0,0,0,0.30) 100%)",
              transition: "background .5s ease",
            };
            // Einheitliches Panel: die Geometrie morpht zwischen offen/geschlossen
            // (transitionable top/right/bottom/left/padding) statt hart zu wechseln.
            const insetClosed = "clamp(14px,1.4vw,20px)";
            const insetOpen = "clamp(20px,2.2vw,32px)";
            const glassStyle: CSSProperties = {
              position: "absolute",
              boxSizing: "border-box",
              borderRadius: "5px",
              background: "rgba(255,255,255,0.10)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.18)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflow: "hidden",
              top: open ? insetOpen : insetClosed,
              bottom: open ? insetOpen : insetClosed,
              right: open ? insetOpen : insetClosed,
              left: accStack
                ? open
                  ? insetOpen
                  : insetClosed
                : open
                  ? "calc(100% - clamp(300px,44%,440px))"
                  : insetClosed,
              padding: open
                ? "clamp(26px,2.6vw,40px)"
                : "clamp(26px,2.6vw,36px) clamp(16px,1.6vw,22px)",
              transition:
                "top .55s cubic-bezier(.4,0,.2,1), bottom .55s cubic-bezier(.4,0,.2,1), left .55s cubic-bezier(.4,0,.2,1), right .55s cubic-bezier(.4,0,.2,1), padding .55s cubic-bezier(.4,0,.2,1), background .5s ease",
            };

            return (
              <div
                key={c.slot}
                onClick={() => setAccOpen(i)}
                /* Die geschlossene Karte IST das Bedienelement. Vorher hing die
                   Tastaturbedienung allein am Plus-Button; mit dessen Wegfall
                   wäre die Section ohne Maus nicht mehr bedienbar gewesen. */
                role={open ? undefined : "button"}
                tabIndex={open ? undefined : 0}
                aria-label={open ? undefined : `Öffnen: ${c.title}`}
                onKeyDown={(e) => {
                  if (open) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setAccOpen(i);
                  }
                }}
                style={cardStyle}
              >
                <ImageFrame
                  src={c.src}
                  alt={c.placeholder}
                  placeholder={c.placeholder}
                  sizes="(max-width:760px) 100vw, 50vw"
                  imgStyle={{
                    filter: open ? "blur(0px)" : "blur(7px)",
                    transform: open ? "scale(1)" : "scale(1.12)",
                    transition: "filter .5s ease, transform .6s ease",
                  }}
                />
                <div style={overlayStyle} />

                <div style={{ position: "absolute", inset: 0, zIndex: 2 }}>
                  <div style={glassStyle}>
                    {/* Icon sitzt fest oben rechts — dort, wo vorher das Plus
                        war. Die frühere Spacer-Mechanik (zentriert → oben)
                        entfällt damit. */}
                    <span className="ac-icon-slot">
                      <AccIcon name={c.icon} />
                    </span>

                    {/* Headline steht immer — auch auf geschlossenen Karten.
                        Nur der Fließtext blendet beim Öffnen ein. */}
                    <div
                      style={{
                        position: "absolute",
                        left: "clamp(26px,2.6vw,40px)",
                        right: "clamp(26px,2.6vw,40px)",
                        bottom: "clamp(26px,2.6vw,40px)",
                        pointerEvents: open ? "auto" : "none",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "var(--serif)",
                          fontWeight: 400,
                          // geschlossen etwas kleiner, damit sie in die schmale Karte passt
                          fontSize: open
                            ? "clamp(24px,2.4vw,32px)"
                            : "clamp(17px,1.5vw,21px)",
                          lineHeight: 1.16,
                          color: "#fff",
                          margin: 0,
                          overflowWrap: "break-word",
                          transition: "font-size .55s cubic-bezier(.4,0,.2,1)",
                        }}
                      >
                        {c.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--sans)",
                          fontSize: "clamp(14px,1.4vw,16px)",
                          lineHeight: 1.6,
                          color: "rgba(255,255,255,.92)",
                          margin: open ? "20px 0 0" : "0",
                          maxWidth: "38ch",
                          overflowWrap: "break-word",
                          maxHeight: open ? "22em" : 0,
                          opacity: open ? 1 : 0,
                          overflow: "hidden",
                          transition:
                            "opacity .45s ease .08s, max-height .55s cubic-bezier(.4,0,.2,1), margin .55s ease",
                        }}
                      >
                        {c.text}
                      </p>

                      {/* Interaktivitäts-Hinweis statt Plus-Button: ein Pfeil,
                          dessen Schaft beim Hovern nach rechts wächst. Rein
                          dekorativ — bedient wird die Karte selbst. */}
                      <span
                        className={`ac-hint${open ? " is-off" : ""}`}
                        aria-hidden="true"
                      >
                        <span className="ac-hint-line" />
                        <svg
                          className="ac-hint-tip"
                          viewBox="0 0 8 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M1.5 1.5 L6.5 6 L1.5 10.5" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
