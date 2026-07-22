"use client";

import { useEffect, useState } from "react";
import HeroCeramic from "@/components/sections/HeroCeramic";

/**
 * HeroSwitch — rendert den Hero in Variante 1, 2 oder 3 und blendet einen
 * kleinen Umschalter (V1·V2·V3) ein, damit sich die Aufbauten direkt
 * vergleichen lassen.
 *
 * • Default ist Variante 1 (der bestehende Hero) — solange nichts anderes
 *   gewählt ist, ändert sich am Live-Stand nichts.
 * • Die Wahl merkt sich `localStorage`, überlebt also einen Reload.
 * • `?hero=1|2|3` in der URL erzwingt eine Variante direkt.
 * • Das Widget ist aktuell BEWUSST auch in Produktion (Vercel) sichtbar, damit
 *   die Varianten dort durchgeklickt werden können. Vor dem echten Launch
 *   wieder ausbauen — dann `showWidget` z. B. auf
 *   `process.env.NODE_ENV !== "production"` setzen oder HeroSwitch entfernen
 *   und `HeroCeramic` direkt mit der gewählten Variante rendern.
 */
type Variant = 1 | 2 | 3;
const VARIANTS: Variant[] = [1, 2, 3];

export default function HeroSwitch() {
  const [variant, setVariant] = useState<Variant>(1);
  // Review-Phase: Umschalter überall sichtbar (auch auf Vercel).
  const showWidget = true;

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
