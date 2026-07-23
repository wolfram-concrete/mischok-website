"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { usePathname } from "next/navigation";
import MainNav from "@/components/layout/MainNav";

/**
 * Header — fixe Top-Navigation, die ÜBERALL dieselbe MainNav rendert (die
 * Benchmark-Navi der Home: Wortmarke, Links mit Referenzen-/Insights-Megamenü,
 * „Erstgespräch"-CTA, Mobile-Burger). Kein zweiter Navityp mehr.
 *
 * Startseite: der Header ist ausgeblendet (die Navi sitzt dort im Hero-Bento)
 * und blendet sich beim HOCHSCROLLEN als leicht milchig-grauer, blurry Balken
 * wieder von oben ein. Unterseiten: dauerhaft sichtbar — oben transparent, ab
 * dem Scrollen mit hellem Hintergrund.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  // Home: die Navi ist NICHT dauerhaft sticky (oben sitzt sie im Hero-Bento).
  // Sie blendet sich aber beim HOCHSCROLLEN wieder von oben ein.
  const [revealed, setRevealed] = useState(false);
  const lastY = useRef(0);
  const isHome = usePathname() === "/";

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 20);
      // Reveal-Logik nur auf der Home: einblenden beim Hochscrollen, sobald die
      // Hero-Navi weg ist (> ~80% Viewporthoehe); ausblenden beim Runterscrollen
      // oder wieder nahe dem Seitenanfang (< 40% — dort uebernimmt die Hero-Navi).
      const goingUp = y < lastY.current - 2;
      const goingDown = y > lastY.current + 2;
      if (goingUp && y > window.innerHeight * 0.8) setRevealed(true);
      else if (goingDown || y <= window.innerHeight * 0.4) setRevealed(false);
      lastY.current = y;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        // Home: ausgeblendet (nach oben geschoben), ausser beim Hochscrollen
        // (revealed). Unterseiten: immer sichtbar.
        transform: isHome && !revealed ? "translateY(-100%)" : "translateY(0)",
        background: isHome
          ? "rgba(237, 237, 237, 0.72)"
          : scrolled
            ? "var(--bg)"
            : "transparent",
        backdropFilter: isHome ? "blur(14px) saturate(1.1)" : undefined,
        WebkitBackdropFilter: isHome ? "blur(14px) saturate(1.1)" : undefined,
        borderBottom: isHome
          ? "1px solid rgba(165, 165, 165, 0.28)"
          : scrolled
            ? "1px solid var(--line)"
            : "1px solid transparent",
        transition:
          "transform .35s cubic-bezier(.4,0,.2,1), background .3s ease, border-color .3s ease",
      }}
    >
      {/* Überall dieselbe MainNav (Home-Reveal wie Unterseiten). --hc-pad +
          Innenpadding halten den Megamenü-Breakout deckungsgleich zum Rand wie
          im Hero-Bento. */}
      <div
        className="hdr-mainnav"
        style={
          {
            "--hc-pad": "clamp(16px,4vw,56px)",
            paddingInline: "var(--hc-pad)",
            position: "relative",
          } as CSSProperties
        }
      >
        <MainNav />
      </div>
    </header>
  );
}
