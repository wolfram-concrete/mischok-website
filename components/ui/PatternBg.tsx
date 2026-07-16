import Image from "next/image";
import type { CSSProperties } from "react";

/**
 * PatternBg — dezente, architektonisch-kubische Schmuck-Textur als
 * Hintergrund-Layer für „schmückende" Module. Liegt absolut hinter dem
 * Inhalt (z-index 0); das Elternelement muss `position: relative` sein und
 * seinen Inhalt bei Bedarf über `z-index` darüberlegen.
 *
 * Die Texturen (public/assets/Patterns/*) werden über next/image optimiert
 * (AVIF/WebP, responsive) ausgeliefert. Über `opacity`/`blend` wird der Effekt
 * bewusst subtil gehalten — der Style soll „spürbar", nicht dominant sein.
 *
 * Beispiel:
 *   <div style={{ position: "relative" }}>
 *     <PatternBg pattern="cubes" opacity={0.14} blend="overlay" />
 *     …Inhalt…
 *   </div>
 */

export const PATTERNS = {
  /** überlappende Flächen/Ebenen — ruhig */
  planes: "/assets/Patterns/planes.png",
  /** harte Vertikal-Bänder — kontrastreich, Akzent */
  bands: "/assets/Patterns/bands.png",
  /** weiche Vertikal-Bänder — dezent */
  "bands-soft": "/assets/Patterns/bands-soft.png",
  /** sehr helle Raumecke — flüsterleise */
  room: "/assets/Patterns/room.png",
  /** kräftige isometrische Quader — Statement */
  cubes: "/assets/Patterns/cubes.png",
  /** weiche isometrische Quader — elegant */
  blocks: "/assets/Patterns/blocks.png",
} as const;

export type PatternName = keyof typeof PATTERNS;

type PatternBgProps = {
  pattern: PatternName;
  /** Deckkraft des Layers (0–1). Default 0.14 = dezent „spürbar". */
  opacity?: number;
  /** mix-blend-mode gegenüber dem Untergrund (z. B. "overlay", "screen", "multiply") */
  blend?: CSSProperties["mixBlendMode"];
  /** object-position der Textur (Bildausschnitt) */
  position?: string;
  /** priorisiertes Laden (nur für above-the-fold-Module) */
  priority?: boolean;
  /** responsive sizes-Hinweis */
  sizes?: string;
};

export default function PatternBg({
  pattern,
  opacity = 0.14,
  blend,
  position = "center",
  priority = false,
  sizes = "100vw",
}: PatternBgProps) {
  return (
    <span
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
        opacity,
        mixBlendMode: blend,
      }}
    >
      <Image
        src={PATTERNS[pattern]}
        alt=""
        fill
        sizes={sizes}
        quality={90}
        priority={priority}
        style={{ objectFit: "cover", objectPosition: position }}
      />
    </span>
  );
}
