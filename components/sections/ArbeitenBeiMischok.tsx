import ImageFrame from "@/components/ui/ImageFrame";
import CtaButton from "@/components/ui/CtaButton";
import Reveal from "@/components/ui/Reveal";

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
      data-screen-label="Arbeiten bei MISCHOK"
      style={{
        position: "relative",
        background: "var(--navy)",
        overflow: "hidden",
      }}
    >
      <ImageFrame
        src="/assets/arbeiten.jpg"
        alt="Team von MISCHOK in Augsburg bei der Arbeit"
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
              <h2 className="arb-h">Arbeiten bei MISCHOK</h2>
              <p className="arb-copy">
                Bei MISCHOK arbeiten Menschen, die Softwareprojekte verstehen,
                begleiten und umsetzen. Vor Ort in Augsburg, nah am Team und nah
                an den Projekten unserer Kunden.
              </p>
              <p className="arb-copy">
                Wir suchen immer wieder Menschen, die fachlich stark sind,
                Verantwortung übernehmen wollen und zu unserer Arbeitsweise
                passen.
              </p>
              <CtaButton
                href="#kontakt"
                padding="14px 24px"
                fontSize="clamp(14px,1.4vw,16px)"
                style={{
                  alignSelf: "flex-start",
                  marginTop: "clamp(24px,3vw,38px)",
                }}
              >
                Karriere bei MISCHOK
              </CtaButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
