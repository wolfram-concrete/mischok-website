"use client";

import { useEffect, useRef, useState } from "react";

/**
 * CountUp — zählt beim Eintreten in den Viewport auf den Zielwert hoch.
 *
 * Startwert ist bewusst der ENDWERT, nicht der Anfangswert: so steht im
 * serverseitig gerenderten HTML die echte Zahl. Ohne JS, bei
 * `prefers-reduced-motion` oder wenn der IntersectionObserver nicht liefert,
 * ist die Aussage damit trotzdem korrekt — sie wird dann nur nicht animiert.
 * Erst wenn der Observer meldet, springt der Wert auf `from` und läuft hoch;
 * die Zahlen stehen tief auf der Seite, der Sprung ist also nicht zu sehen.
 */
type CountUpProps = {
  /** Zielwert — steht auch im SSR-HTML */
  to: number;
  /** Startwert der Animation (Default 0) */
  from?: number;
  /** z. B. „+" bei „35+" */
  suffix?: string;
  /** Dauer in Sekunden */
  duration?: number;
  className?: string;
};

export default function CountUp({
  to,
  from = 0,
  suffix = "",
  duration = 1.6,
  className,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(to);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let raf = 0;
    const run = () => {
      if (started.current) return;
      started.current = true;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min(1, (now - t0) / (duration * 1000));
        // ease-out: schnell los, sanft ankommen
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(from + (to - from) * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      setVal(from);
      raf = requestAnimationFrame(tick);
    };

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          run();
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);

    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, from, duration]);

  return (
    <span ref={ref} className={className}>
      {val}
      {suffix}
    </span>
  );
}
