"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import ImageFrame from "@/components/ui/ImageFrame";
import { ACC } from "@/lib/content";

/**
 * Zusammenarbeit — horizontales Accordion aus 3 Karten. Klick öffnet eine Karte
 * breiter (flex-grow 1→3.4), das Bild schärft, ein Glass-Panel (backdrop-blur)
 * mit Icon, Titel und Text erscheint; geschlossene Karten zeigen Icon + Plus-
 * Button. Auf Mobile (< 760px) vertikal gestapelt (Höhe 150px↔520px).
 */
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
      data-screen-label="Zusammenarbeit"
      style={{
        background:
          "conic-gradient(from 90deg at 34.54% 17.7%, #D6D6D6 0deg, #EDEDED 360deg)",
        padding: "clamp(48px,6vw,96px) clamp(20px,5vw,72px)",
      }}
    >
      <div style={{ width: "100%" }}>
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
                    {/* Top-Spacer: im geschlossenen Zustand = 1 (Icon zentriert),
                        im offenen = 0 → Icon wandert smooth nach oben */}
                    <div
                      aria-hidden="true"
                      style={{
                        width: "100%",
                        flexGrow: open ? 0 : 1,
                        flexShrink: 0,
                        flexBasis: 0,
                        transition: "flex-grow .55s cubic-bezier(.4,0,.2,1)",
                      }}
                    />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={c.icon}
                      alt=""
                      aria-hidden="true"
                      style={{
                        width: "clamp(104px,8vw,128px)",
                        height: "auto",
                        flex: "none",
                      }}
                    />
                    {/* Bottom-Spacer: füllt den Rest (Icon oben bzw. zentriert) */}
                    <div
                      aria-hidden="true"
                      style={{
                        width: "100%",
                        flexGrow: 1,
                        flexShrink: 0,
                        flexBasis: 0,
                      }}
                    />

                    {/* Titel/Text — immer im DOM, gleiten/blenden sanft ein */}
                    <div
                      style={{
                        position: "absolute",
                        left: "clamp(26px,2.6vw,40px)",
                        right: "clamp(26px,2.6vw,40px)",
                        bottom: "clamp(26px,2.6vw,40px)",
                        opacity: open ? 1 : 0,
                        transform: open ? "translateY(0)" : "translateY(14px)",
                        transition:
                          "opacity .45s ease .08s, transform .5s cubic-bezier(.2,.7,.2,1) .08s",
                        pointerEvents: open ? "auto" : "none",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "var(--serif)",
                          fontWeight: 400,
                          fontSize: "clamp(24px,2.4vw,32px)",
                          lineHeight: 1.14,
                          color: "#fff",
                          margin: 0,
                          overflowWrap: "break-word",
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
                          margin: "20px 0 0",
                          maxWidth: "38ch",
                          overflowWrap: "break-word",
                        }}
                      >
                        {c.text}
                      </p>
                    </div>

                    {/* Plus-Button — immer im DOM, blendet beim Öffnen aus */}
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        setAccOpen(i);
                      }}
                      aria-label={`Öffnen: ${c.title}`}
                      aria-hidden={open}
                      tabIndex={open ? -1 : 0}
                      className="acc-plus"
                      style={{
                        position: "absolute",
                        bottom: "clamp(22px,2.2vw,32px)",
                        left: 0,
                        right: 0,
                        margin: "0 auto",
                        width: "clamp(46px,3.6vw,56px)",
                        height: "clamp(46px,3.6vw,56px)",
                        background: "none",
                        border: "none",
                        padding: 0,
                        cursor: open ? "default" : "pointer",
                        opacity: open ? 0 : 1,
                        pointerEvents: open ? "none" : "auto",
                        transition: "opacity .3s ease, transform .3s ease",
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src="/assets/icon-plus.svg"
                        alt=""
                        aria-hidden="true"
                        style={{ width: "100%", height: "100%", display: "block" }}
                      />
                    </button>
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
