import ImageFrame from "@/components/ui/ImageFrame";
import Reveal from "@/components/ui/Reveal";
import HeadlineRise from "@/components/ui/HeadlineRise";

/**
 * ArbeitenBeiMischok — EIN Bildcontainer, vollflächig im Hintergrund. Er reicht
 * mit seiner Oberkante nach oben hinter die Kontakt-Karte (--arb-rise, s.
 * globals.css): deshalb kein zweites Bildband in Kontakt mehr. Darauf liegt
 * rechts eine helle Kachel mit dem Rasterpunkt-Muster und Navy-Text.
 *
 * Das frühere Blur-Panel ist entfallen: es lag eine ZWEITE, unscharf gefilterte
 * Kopie desselben Fotos (width:200%) über der rechten Spalte, plus eine weisse
 * 20%-Fläche darüber. Das war der zweite Bildcontainer in dieser Section.
 */
export default function ArbeitenBeiMischok() {
  return (
    <section
      id="arbeiten"
      className="sec-step is-right"
      data-screen-label="Arbeiten bei mischok"
      style={{
        position: "relative",
        background: "var(--navy)",
        overflow: "hidden",
      }}
    >
      <ImageFrame
        src="/assets/arbeiten.jpg"
        alt="Team von mischok in Augsburg bei der Arbeit"
        placeholder="Team / Arbeitssituation"
        sizes="100vw"
      />
      <div className="grid-arbeiten arb-grid">
        {/* Linke Spalte: hält das Bild frei (kein eigener Inhalt) */}
        <div />

        {/* Rechte Spalte: die Kachel schwebt, sie füllt die Spalte nicht.
            Reveal statt Dauerbewegung: das Bild dahinter laeuft mit Parallaxe,
            die Kachel steht — sie soll darauf liegen, nicht mitschwimmen. Der
            Auftritt beim Hereinscrollen gibt ihr die Agilitaet. */}
        <Reveal className="arb-col">
          <div className="arb-tile">
            {/* dasselbe Raster wie in „Zusammenarbeit" */}
            <span className="zu-grid arb-raster" aria-hidden="true" />
            <div className="arb-tile-body">
              {/* delay: die Kachel selbst faehrt per Reveal ein — die Headline
                  kommt gestaffelt danach, sonst laufen zwei Bewegungen gegeneinander */}
              <h2 className="arb-h">
                <HeadlineRise delay={0.15}>Arbeiten bei mischok</HeadlineRise>
              </h2>
              <p className="arb-copy">
                Bei mischok arbeiten Menschen, die Softwareprojekte verstehen,
                begleiten und umsetzen. Vor Ort in Augsburg, nah am Team und nah
                an den Projekten unserer Kunden.
              </p>
              <p className="arb-copy">
                Wir suchen immer wieder Menschen, die fachlich stark sind,
                Verantwortung übernehmen wollen und zu unserer Arbeitsweise
                passen.
              </p>
              {/* dieselbe CTA-Optik wie ueberall sonst ausserhalb des Heros.
                  Vorher .cta-grad (Verlauf transparent → #D6D6D6). */}
              <a
                href="#kontakt"
                className="cta-ghost"
                style={{
                  alignSelf: "flex-start",
                  marginTop: "clamp(24px,3vw,38px)",
                }}
              >
                Karriere bei mischok
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
