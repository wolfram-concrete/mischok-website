import type { CSSProperties, ReactNode } from "react";

/**
 * CtaButton — Verlaufs-Button (transparent → #D6D6D6, Navy-Text, Hover = voll #D6D6D6)
 * oder solide Navy-Variante (Footer). Rendert als <a> mit Anker/Link-Ziel.
 */
type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "grad" | "solid";
  /** dünnere Textlink-Optik (Kontaktbereich): kein linkes Padding, weight 500 */
  weight?: 500 | 700;
  fontSize?: string;
  padding?: string;
  style?: CSSProperties;
  className?: string;
};

export default function CtaButton({
  href,
  children,
  variant = "grad",
  weight = 700,
  fontSize = "14px",
  padding = "14px 24px",
  style,
  className,
}: CtaButtonProps) {
  return (
    <a
      href={href}
      className={`${variant === "grad" ? "cta-grad" : "cta-solid"}${
        className ? ` ${className}` : ""
      }`}
      style={{
        textDecoration: "none",
        fontFamily: "var(--sans)",
        fontWeight: weight,
        fontSize,
        padding,
        display: "inline-block",
        ...style,
      }}
    >
      {children}
    </a>
  );
}
