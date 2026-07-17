"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

/**
 * HeadlineRise — die Headline fährt beim Eintreten von unten ein, beschnitten
 * von einer Maske. Verallgemeinert den Auftritt, den bisher nur das Zitat in
 * „Stimme" hatte (.st-mask / .st-quote).
 *
 * Konstruktion:
 *   <h2 class="…">        ← trägt weiter Schrift, Größe, Farbe
 *     <span class="hl-mask">     ← overflow:hidden, beschneidet
 *       <span class="hl-rise">   ← das, was fährt
 *
 * Der Text bleibt im h2 — Struktur und Vorlesereihenfolge ändern sich nicht.
 *
 * Sicherheitsnetz wie in Reveal: liefert der IntersectionObserver nicht, wird
 * nach 1.5s trotzdem eingeblendet. Eine Headline ist Inhalt; sie darf nicht
 * daran hängen, dass eine Animation startet.
 */
type HeadlineRiseProps = {
  children: ReactNode;
  /** Verzögerung in Sekunden — für gestaffelte Auftritte */
  delay?: number;
};

export default function HeadlineRise({ children, delay = 0 }: HeadlineRiseProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShown(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(el);
    const safety = window.setTimeout(() => setShown(true), 1500);

    return () => {
      obs.disconnect();
      clearTimeout(safety);
    };
  }, []);

  return (
    <span ref={ref} className={`hl-mask${shown ? " is-in" : ""}`}>
      <span className="hl-rise" style={delay ? { transitionDelay: `${delay}s` } : undefined}>
        {children}
      </span>
    </span>
  );
}
