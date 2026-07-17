"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

/**
 * Reveal — Scroll-Reveal (fade + rise) via IntersectionObserver.
 * Fällt auf sofort-sichtbar zurück, wenn IntersectionObserver fehlt oder
 * `prefers-reduced-motion` gesetzt ist.
 */
type RevealProps = {
  children: ReactNode;
  /** Verzögerung der Transition in Sekunden */
  delay?: number;
  style?: CSSProperties;
  /** Klasse für das Wrapper-Element — Reveal ersetzt damit einen eigenen
      Layout-Container, statt einen zusätzlichen Div-Level zu erzwingen */
  className?: string;
};

export default function Reveal({ children, delay = 0, style, className }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduce || !("IntersectionObserver" in window)) {
      setShown(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);

    /* Sicherheitsnetz: Inhalt darf nie daran haengen, dass eine Animation
       startet. Liefert der IntersectionObserver aus irgendeinem Grund nicht
       (kaputter/gedrosselter Renderer), wird nach 1.5s trotzdem eingeblendet —
       lieber ohne Effekt sichtbar als mit Effekt unsichtbar. Im Normalfall hat
       der Observer laengst gefeuert und das Timeout ist wirkungslos. */
    const safety = window.setTimeout(() => setShown(true), 1500);

    return () => {
      obs.disconnect();
      clearTimeout(safety);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(24px)",
        transition: `opacity .7s ease ${delay}s, transform .7s cubic-bezier(.2,.7,.2,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
