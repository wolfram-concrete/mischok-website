"use client";

import { useEffect, useState } from "react";
import type { CSSProperties } from "react";
import ImageFrame from "@/components/ui/ImageFrame";
import { FIELDS } from "@/lib/content";

/**
 * EinsatzfelderGrid — 5 Karten (01–05) in geschlossenem Rechteck-Grid.
 * Default ist Karte 01 scharf; Hover schärft die gehoverte Karte (Bild
 * blur(9px)→0, Scale, Overlay dunkelt, Nummer & Text werden weiß/scharf,
 * Karte hebt sich −3px). Logik 1:1 aus renderVals().
 */

// Desktop-Platzierung: 01 über beide Zeilen links, 02–05 im 2×2 rechts.
const PLACE = [
  { c: "1", r: "1 / span 2" },
  { c: "2", r: "1" },
  { c: "2", r: "2" },
  { c: "3", r: "1" },
  { c: "3", r: "2" },
];

export default function EinsatzfelderGrid() {
  const [vw, setVw] = useState(1280);
  const [hovered, setHovered] = useState(-1);

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const cols = vw < 640 ? 1 : vw < 1000 ? 2 : 3;
  const desktop = cols === 3;
  const activeIdx = hovered >= 0 ? hovered : 0;

  const gridStyle: CSSProperties = desktop
    ? {
        display: "grid",
        width: "100%",
        height: "80vh",
        gridTemplateColumns: "repeat(3,1fr)",
        gridTemplateRows: "1fr 1fr",
        gap: "18px",
      }
    : {
        display: "grid",
        width: "100%",
        gridTemplateColumns: `repeat(${cols},1fr)`,
        gap: "18px",
        alignItems: "start",
      };

  return (
    <section
      id="einsatzfelder"
      style={{
        background: "linear-gradient(388deg, #FFFFFF, #E4E3E1)",
        padding: "clamp(48px,6vw,88px) clamp(20px,5vw,72px)",
        paddingTop: "200px",
        paddingBottom: "200px",
      }}
    >
      <div style={gridStyle}>
        {FIELDS.map((f, i) => {
          const isHover = i === activeIdx;
          const p = PLACE[i];
          const placement: CSSProperties = desktop
            ? { gridColumn: p.c, gridRow: p.r, alignSelf: "stretch", height: "100%" }
            : { height: (i === 0 ? 450 : 360) + "px" };

          return (
            <div
              key={f.n}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(-1)}
              style={{
                width: "100%",
                position: "relative",
                overflow: "hidden",
                border: "1px solid var(--line)",
                background: "var(--card)",
                padding: 0,
                textAlign: "left",
                display: "block",
                borderRadius: "5px",
                fontFamily: "inherit",
                transform: isHover ? "translateY(-3px)" : "none",
                transition: "transform .2s ease",
                ...placement,
              }}
            >
              <ImageFrame
                alt={f.placeholder}
                placeholder={f.placeholder}
                sizes="(max-width:640px) 100vw, (max-width:1000px) 50vw, 33vw"
                imgStyle={{
                  opacity: 1,
                  filter: isHover ? "blur(0px)" : "blur(9px)",
                  transform: isHover ? "scale(1)" : "scale(1.12)",
                  transition: "filter .4s ease, transform .5s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  background: isHover
                    ? "linear-gradient(0deg, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.00) 56.48%)"
                    : "linear-gradient(0deg, rgba(237,236,234,0.55) 0%, rgba(237,236,234,0.10) 60%)",
                  transition: "background .4s ease",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: "24px",
                  zIndex: 3,
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "80px",
                    lineHeight: 1,
                    fontWeight: 400,
                    color: isHover ? "#fff" : "var(--muted)",
                    transition: "color .3s ease",
                  }}
                >
                  {f.n}
                </div>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "28px",
                    lineHeight: 1.5,
                    marginTop: "20px",
                    maxWidth: "26ch",
                    color: isHover ? "#fff" : "var(--slate)",
                    filter: isHover ? "blur(0)" : "blur(3.5px)",
                    transition: "filter .3s ease, color .3s ease",
                  }}
                >
                  {f.card}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
