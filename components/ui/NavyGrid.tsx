import type { CSSProperties } from "react";

/**
 * NavyGrid — Punktraster als Vektor auf dem blauen CTA-Modul im Hero.
 *
 * Nimmt das Raster auf, das weiter unten in der Zusammenarbeit liegt
 * (`.zu-grid`), aber in der umgekehrten Rolle: dort ein statisches CSS-Muster
 * auf hellem Grund, hier ein SVG auf Navy, das sich aufbaut und in Bewegung
 * bleibt. Deshalb Vektor statt `background-image`: nur so lässt sich jeder
 * Punkt einzeln ansteuern.
 *
 * Aufbau in zwei Schichten:
 *  • Die Punkte blenden in einer DIAGONALEN WELLE ein — die Verzögerung hängt
 *    an (Spalte + Zeile), das Raster entsteht also von links oben nach rechts
 *    unten und läuft als Welle weiter (das „lebt").
 *  • Zwei Linien laufen dem Raster entlang und zeichnen sich (das „arbeitet").
 *    Sie folgen exakt den Rasterachsen, sonst liest das Ganze als Deko statt
 *    als System.
 *
 * Die Maske hält das Raster rechts kräftig und links schwach: links steht der
 * CTA-Text, und Kontrast schlägt Dekoration.
 */

const COLS = 18;
const ROWS = 9;
const GAP = 20;
const W = COLS * GAP;
const H = ROWS * GAP;

/**
 * Die Rasterpunkte sind Rechtecke, keine Kreise — rechtwinklig wie der
 * Logorahmen. Proportion und Ausmass sind aus der Bildmarke abgeleitet, nicht
 * geschaetzt:
 *
 *  • PROPORTION — die beiden Klammern in
 *    `public/Logo/MISCHOK_LOGO_L_POS_RGB-neu.svg` spannen zusammen
 *    258.6 x 220.1 Einheiten auf. Das ist das Seitenverhaeltnis der Marke:
 *    258.6 / 220.1 = 1.175 (liegend, nicht quadratisch).
 *  • AUSMASS — die Flaeche entspricht der der frueheren Kreise (r = 1.1,
 *    Flaeche = pi * 1.1² = 3.80), damit das Raster gleich schwer wiegt:
 *    b * h = 3.80 und b = 1.175 * h  ->  h = 1.80, b = 2.11.
 *    Ein Quadrat mit der Kantenlaenge des Kreisdurchmessers haette 27 % mehr
 *    Flaeche gehabt und das Raster sichtbar zugezogen.
 */
const LOGO_RATIO = 258.6 / 220.1;
const DOT_H = 1.8;
const DOT_W = +(DOT_H * LOGO_RATIO).toFixed(2);

/* Die Linien folgen den Rasterachsen. --len ist die echte Pfadlänge — bei jeder
   Änderung an `d` mitrechnen, sonst zeichnet die Linie gestrichelt oder
   unvollständig (s. den Kommentar bei .hi-b-line in globals.css). Da alle
   Segmente achsparallel sind, ist die Länge die Summe der Beträge:
     A: |250-50| + |70-130| + |330-250| = 200 + 60 + 80  = 340
     B: |110-30| + |150-50| + |250-110| =  80 + 100 + 140 = 320 */
const LINES: { d: string; len: number; delay: string }[] = [
  { d: "M50 130 H250 V70 H330", len: 340, delay: "1.1s" },
  { d: "M30 50 H110 V150 H250", len: 320, delay: "2.3s" },
];

export default function NavyGrid() {
  const dots = [];
  for (let r = 0; r < ROWS; r++) {
    for (let c = 0; c < COLS; c++) {
      // Diagonale Welle: gleiche Summe (c+r) = gleiche Diagonale = gleicher Takt.
      const delay = ((c + r) / (COLS + ROWS)) * 2.6;
      // x/y ist die Ecke, nicht die Mitte — deshalb um die halbe Kante zurueck,
      // damit die Rechtecke auf denselben Rasterachsen sitzen wie zuvor.
      dots.push(
        <rect
          key={`${r}-${c}`}
          className="ng-dot"
          x={c * GAP + GAP / 2 - DOT_W / 2}
          y={r * GAP + GAP / 2 - DOT_H / 2}
          width={DOT_W}
          height={DOT_H}
          style={{ animationDelay: `${delay.toFixed(2)}s` }}
        />
      );
    }
  }

  return (
    <span className="ng" aria-hidden="true">
      <svg
        viewBox={`0 0 ${W} ${H}`}
        /* slice + xMidYMid: das Raster füllt das Modul in jedem Seitenverhältnis
           und wird beschnitten statt verzerrt — ein gestauchtes Raster liest
           sofort als Fehler. */
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        {dots}
        {LINES.map((l) => (
          <path
            key={l.d}
            className="ng-line"
            d={l.d}
            style={{ "--len": l.len, animationDelay: l.delay } as CSSProperties}
          />
        ))}
      </svg>
    </span>
  );
}
