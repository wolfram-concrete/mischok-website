"use client";

import { useEffect, useRef, useState } from "react";
import ImageFrame from "@/components/ui/ImageFrame";

/**
 * Stimme — vollflächiges Zitat: das Bild füllt die ganze Section, das Zitat
 * steht in Weiß darauf. Zwei Bewegungen, beide reduced-motion-sicher:
 *   1. Parallaxe — kommt aus dem ImageFrame und gilt seitenweit für alle
 *      Bildcontainer (siehe useParallax). Der frühere eigene rAF-Loop hier ist
 *      entfallen: er hätte sich mit dem geteilten Controller überlagert.
 *   2. Auftritt — Eyebrow und Zitat fahren beim Eintreten in den Viewport von
 *      unten ein, jeweils von einer overflow-hidden-Maske beschnitten.
 * Die Section trägt die Sektionsstufe (.sec-step) an ihrer Oberkante.
 */
export default function Stimme() {
  const sectionRef = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  // Auftritt beim Eintreten in den Viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          obs.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="stimme" ref={sectionRef} className="st-section sec-step is-right">
      <div className="st-media" aria-hidden="true">
        <ImageFrame
          src="/assets/Redaktionel/54962038207_917685d4d5_o.jpg"
          alt=""
          placeholder=""
          sizes="100vw"
        />
      </div>
      {/* Scrim: trägt den Kontrast für die weiße Schrift */}
      <span className="st-scrim" aria-hidden="true" />

      <div className={`st-inner${shown ? " is-in" : ""}`}>
        <div className="st-mask">
          <span className="eyebrow st-tag">Stimme</span>
        </div>
        <div className="st-mask">
          <blockquote className="st-quote">
            „In anspruchsvollen Softwareprojekten zeigt sich oft erst im Detail,
            was wirklich entschieden werden muss. Deshalb ist uns wichtig, nicht
            zu früh zu vereinfachen, technische Fragen nicht von organisatorischen
            zu trennen und auch dann klar zu bleiben, wenn eine Einschätzung
            unbequem wird."
          </blockquote>
          <div className="st-by">— Julius Mischok</div>
        </div>
      </div>
    </section>
  );
}
