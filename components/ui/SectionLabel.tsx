import type { CSSProperties, ReactNode } from "react";

/**
 * SectionLabel — Mono, uppercase, weit gesperrt. Kleines Meta-Label über Headlines.
 */
type SectionLabelProps = {
  children: ReactNode;
  style?: CSSProperties;
};

export default function SectionLabel({ children, style }: SectionLabelProps) {
  return (
    <span
      style={{
        fontFamily: "var(--mono)",
        fontSize: "12.5px",
        letterSpacing: "0.24em",
        textTransform: "uppercase",
        color: "var(--muted)",
        ...style,
      }}
    >
      {children}
    </span>
  );
}
