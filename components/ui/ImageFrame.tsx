import Image from "next/image";
import type { CSSProperties } from "react";

/**
 * ImageFrame — Ersatz für das originale <image-slot>.
 * Mit `src` wird ein echtes Bild über next/image (fill) gerendert.
 * Ohne `src` erscheint ein dezenter, gestreifter SVG-Platzhalter mit Mono-Label.
 *
 * Der umgebende Container muss `position: relative` und `overflow: hidden` setzen.
 * `imgStyle` erlaubt es Eltern-Komponenten (Grid-Hover, Accordion), Blur/Scale-
 * Transitions direkt auf das Bildelement zu legen.
 */
type ImageFrameProps = {
  src?: string;
  alt: string;
  /** Label für den Platzhalter, wenn kein Bild vorhanden ist */
  placeholder?: string;
  /** responsive `sizes` für next/image */
  sizes?: string;
  priority?: boolean;
  /** JPEG/WebP/AVIF-Qualität für next/image (Default 90 — kaum sichtbare Kompression) */
  quality?: number;
  /** Styles, die direkt auf das <img> gelegt werden (Blur/Scale/Transition) */
  imgStyle?: CSSProperties;
};

export default function ImageFrame({
  src,
  alt,
  placeholder = "Bild folgt",
  sizes = "100vw",
  priority = false,
  quality = 90,
  imgStyle,
}: ImageFrameProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        quality={quality}
        style={{ objectFit: "cover", ...imgStyle }}
      />
    );
  }

  // Dezenter gestreifter Platzhalter mit Mono-Label
  return (
    <div
      role="img"
      aria-label={alt}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        backgroundColor: "var(--card)",
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(140,145,152,0.10) 0px, rgba(140,145,152,0.10) 1px, transparent 1px, transparent 11px)",
        ...imgStyle,
      }}
    >
      <span
        style={{
          fontFamily: "var(--mono)",
          fontSize: "12px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "var(--muted)",
          textAlign: "center",
          lineHeight: 1.5,
        }}
      >
        {placeholder}
      </span>
    </div>
  );
}
