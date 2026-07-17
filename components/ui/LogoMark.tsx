/**
 * LogoMark — die „m"-Marke im Navy-Rahmen.
 * Standardgröße 46×40 (Hero); Footer nutzt 42×36.
 */
type LogoMarkProps = {
  width?: number;
  height?: number;
  fontSize?: number;
  className?: string;
};

export default function LogoMark({
  width = 46,
  height = 40,
  fontSize = 23,
  className,
}: LogoMarkProps) {
  return (
    <div
      className={className}
      aria-label="mischok"
      role="img"
      style={{
        width,
        height,
        border: "2.5px solid var(--navy)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "var(--sans)",
        fontWeight: 700,
        fontSize,
        color: "var(--navy)",
        lineHeight: 1,
      }}
    >
      m
    </div>
  );
}
