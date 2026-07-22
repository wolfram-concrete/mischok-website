"use client";

import { useEffect, useState } from "react";
import HeroCeramic from "@/components/sections/HeroCeramic";

/**
 * HeroSwitch — rendert den Hero in Variante 1 oder 2 und blendet in der Preview
 * einen kleinen Umschalter ein, damit sich beide Aufbauten direkt vergleichen
 * lassen.
 *
 * • Default ist Variante 1 (der bestehende Hero) — solange nichts anderes
 *   gewählt ist, ändert sich am Live-Stand nichts.
 * • Die Wahl merkt sich `localStorage`, überlebt also einen Reload.
 * • `?hero=2` in der URL erzwingt eine Variante auch dort, wo das Widget nicht
 *   sichtbar ist (Produktions-Build) — praktisch, um V2 auf der Vercel-Preview
 *   zu zeigen, ohne den Umschalter auszuliefern.
 * • Das Widget selbst erscheint nur, wenn NICHT Produktion — auf der fertigen
 *   Seite ist kein Debug-Schalter zu sehen.
 */
type Variant = 1 | 2 | 3;
const VARIANTS: Variant[] = [1, 2, 3];

export default function HeroSwitch() {
  const [variant, setVariant] = useState<Variant>(1);
  const showWidget = process.env.NODE_ENV !== "production";

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
