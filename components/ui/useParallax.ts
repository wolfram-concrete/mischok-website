"use client";

import { useEffect, useRef } from "react";

/**
 * Geteilter Parallax-Controller für alle Bildcontainer.
 *
 * Bewusst EIN Listener und EIN IntersectionObserver für die ganze Seite statt
 * je Bild ein eigener: bei ~12 Bildern wären das sonst 12 rAF-Loops, die pro
 * Frame je ein getBoundingClientRect() erzwingen — das kostet Scroll-Leistung.
 *
 * Angetrieben wird über scroll/resize, nicht über einen Dauer-rAF: im Leerlauf
 * läuft dann gar nichts, und es gibt keine Start/Stop-Logik, die einschlafen
 * kann. Die Events werden per rAF zusammengefasst, sodass pro Frame höchstens
 * einmal gerechnet wird. Der IntersectionObserver dient nur dazu, Bilder
 * ausserhalb des Viewports zu überspringen.
 *
 * Bewegung: Der Wrapper ist 120 % hoch (10 % Überstand oben und unten) und
 * wandert von -8 % auf +8 % seiner Eigenhöhe — rund ±9,6 % der Containerhöhe
 * und damit immer innerhalb des Überstands; es läuft nie eine Kante frei.
 * Nach unten scrollen heisst: das Bild wandert relativ zum Container nach
 * unten, läuft also langsamer als die Seite.
 */

const AMPLITUDE = 8; // Prozent der Eigenhöhe, je Richtung

type Item = { el: HTMLElement; visible: boolean };

let items: Item[] = [];
let io: IntersectionObserver | null = null;
let ticking = false;
let bound = false;

function apply() {
  ticking = false;
  const vh = window.innerHeight;
  for (const it of items) {
    if (!it.visible) continue;
    const r = it.el.getBoundingClientRect();
    // 0 = Element betritt den Viewport unten, 1 = es verlässt ihn oben
    const raw = (vh - r.top) / (vh + r.height);
    const p = raw < 0 ? 0 : raw > 1 ? 1 : raw;
    const y = -AMPLITUDE + p * AMPLITUDE * 2;
    it.el.style.transform = `translate3d(0, ${y.toFixed(2)}%, 0)`;
  }
}

function request() {
  if (ticking) return;
  ticking = true;
  requestAnimationFrame(apply);
}

function bind() {
  if (bound) return;
  bound = true;
  addEventListener("scroll", request, { passive: true });
  addEventListener("resize", request, { passive: true });
}

function ensureObserver() {
  if (io) return io;
  io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const it = items.find((i) => i.el === e.target);
        if (it) it.visible = e.isIntersecting;
      }
      request();
    },
    { rootMargin: "15% 0px" }
  );
  return io;
}

export function useParallax(enabled: boolean) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || !enabled) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const item: Item = { el, visible: false };
    items.push(item);
    bind();
    ensureObserver().observe(el);
    request();

    return () => {
      io?.unobserve(el);
      items = items.filter((i) => i !== item);
      el.style.transform = "";
    };
  }, [enabled]);

  return ref;
}
