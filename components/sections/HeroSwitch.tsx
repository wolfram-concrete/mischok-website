"use client";

import { useEffect, useState } from "react";
import HeroCeramic from "@/components/sections/HeroCeramic";

/**
 * HeroSwitch — rendert den Hero in Variante 1, 2 oder 3 und blendet einen
 * kleinen Umschalter (V1·V2·V3) ein, damit sich die Aufbauten direkt
 * vergleichen lassen.
 *
 * • **Entschieden: Variante 2** ist der Hero. Sie ist der Default; die Live-
 *   Seite zeigt V2 ohne Zutun.
 * • V1 und V3 sind NICHT entfernt — nur archiviert: sie bleiben als
 *   `HeroCeramic`-Varianten erhalten und sind über `?hero=1` bzw. `?hero=3`
 *   (oder lokal über das Widget) jederzeit wieder abrufbar.
 * • Die Wahl merkt sich `localStorage`, überlebt also einen Reload.
 * • Das Umschalt-Widget ist AUS — es wird nirgends mehr gerendert (wir
 *   verfolgen nur noch V2). V1/V3 bleiben trotzdem über `?hero=1` bzw.
 *   `?hero=3` in der URL erreichbar (Archiv). Zum Reaktivieren des Widgets
 *   `showWidget` wieder auf `process.env.NODE_ENV !== "production"` setzen.
 */
type Variant = 1 | 2 | 3;
const VARIANTS: Variant[] = [1, 2, 3];

export default function HeroSwitch() {
  // V2 ist die gewaehlte Variante (Default). V1/V3 bleiben ueber ?hero=1|3
  // erreichbar, sind also archiviert, nicht geloescht.
  const [variant, setVariant] = useState<Variant>(2);
  // Widget ausgeblendet — nur noch V2 wird verfolgt.
  const showWidget = false;

  // Erst nach dem Mount lesen: URL-Param schlägt gespeicherte Wahl. SSR rendert
  // immer V1, deshalb gibt es keinen Hydration-Mismatch.
  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("hero");
    const pick = param ?? window.localStorage.getItem("hero-variant");
    if (pick === "2") setVariant(2);
    else if (pick === "3") setVariant(3);
    else if (pick === "1") setVariant(1);
  }, []);

  const choose = (v: Variant) => {
    setVariant(v);
    try {
      window.localStorage.setItem("hero-variant", String(v));
    } catch {
      /* localStorage kann blockiert sein — dann bleibt es bei der Sitzung */
    }
  };

  return (
    <>
      <HeroCeramic variant={variant} />
      {showWidget && (
        <div className="hero-switch" role="group" aria-label="Hero-Variante wählen">
          <span className="hero-switch-cap">Hero</span>
          {VARIANTS.map((v) => (
            <button
              key={v}
              type="button"
              className={`hero-switch-btn${variant === v ? " is-on" : ""}`}
              aria-pressed={variant === v}
              onClick={() => choose(v)}
            >
              V{v}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
