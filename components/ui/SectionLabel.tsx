import type { CSSProperties, ReactNode } from "react";

/**
 * SectionLabel — Eyebrow über Headlines. Einheitliche Label-Schreibweise der
 * Seite: Realtime Rounded, Versal — analog zu „SZENARIO 01" im Hero (.hc-num).
 * Versalschreibung und Laufweite kommen aus der `.eyebrow`-Regel in
 * globals.css, damit alle Label der Seite an einer Stelle hängen.
 */
type SectionLabelProps = {
  children: ReactNode;
  style?: CSSProperties;
};

export default function SectionLabel({ children, style }: SectionLabelProps) {
  return (
    <span
      className="eyebrow"
      style={{
        fontFamily: "var(--realtime)",
        fontSize: "14px",
        color: "rgba(0,42,92,0.5)",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
