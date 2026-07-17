import ImageFrame from "@/components/ui/ImageFrame";

const infoLine = {
  fontFamily: "var(--sans)",
  fontSize: "var(--text-copy)",
  color: "color-mix(in srgb, var(--on-navy) 82%, transparent)",
} as const;

const contactLink = {
  ...infoLine,
  textDecoration: "none",
  transition: "color .2s ease",
} as const;

/**
 * Kontakt — CTA-Karte mit echten Kontaktdaten: Ansprechpartner Kajetan Mischok
 * (Geschäftsführer), Telefon, E-Mail und Anschrift der Mischok GmbH.
 * Telefon/E-Mail als klickbare tel:/mailto:-Links.
 *
 * Aufbau (Bildkachel links, Inhalt rechts, Fusszeile mit Daten + einer Aktion)
 * folgt der Referenz-Card. Zwei bewusste Abweichungen davon:
 *   • Kein Punkt vor dem Eyebrow — die Eyebrows der Seite haben keinen, und die
 *     Akzentfarben sind laut CI-Manual an Themenfelder gebunden (Portfolio /
 *     Karriere / About / Warning). Für „Kontakt" gibt es keinen; ein Punkt hier
 *     müsste sich eine Farbe ausleihen, die etwas anderes bedeutet.
 *   • Statt zweier konkurrierender Buttons eine Aktion. Telefon und E-Mail
 *     bleiben als Textlinks erreichbar — sie sind Daten, keine zweite Aktion.
 */
export default function Kontakt() {
  return (
    <section
      id="kontakt"
      className="sec-step"
      data-screen-label="Kontakt"
      style={{
        position: "relative",
        overflow: "hidden",
        /* KEINE Vollflaeche: der Papiergrund liegt als eigene Flaeche darin und
           endet an der Oberkante des Bildes aus „Arbeiten bei MISCHOK", das von
           unten her hinter diese Section steigt. Als Section-Hintergrund wuerde
           er das Bild verdecken. */
        background: "transparent",
        /* seitlich mitwachsend: die globale 64px-Regel greift erst ab 900px,
           ein fester Wert wuerde die Karte auf Mobil zusammenquetschen */
        padding: "clamp(56px,7vw,96px) clamp(20px,5vw,64px)",
      }}
    >
      <span className="kt-ground" aria-hidden="true" />

      <div className="kt-card">
        {/* Links: Ansprechpartner — Bild traegt Name und Rolle, statt sie
            daneben noch einmal zu beschriften. */}
        <div className="kt-left">
          <ImageFrame
            src="/assets/Mischok_2025_ma_176.jpg"
            alt="Kajetan Mischok, Geschäftsführer der MISCHOK GmbH"
            placeholder=""
            /* NICHT die Containerbreite (340px), sondern die Breite, auf die
               `cover` das Bild tatsaechlich zieht. Der Container ist hochformat
               (~340x441), die Aufnahme querformat (3:2) — cover skaliert also
               ueber die HOEHE und rendert das Bild ~661 CSS-Pixel breit. Mit
               `sizes="340px"` hat der Browser eine 750er-Variante geladen und
               sie auf Retina fast 2x hochskaliert; daher die weiche Optik. */
            sizes="(max-width: 820px) 120vw, 700px"
            /* Hochformat-Ausschnitt aus einer Querformat-Aufnahme: ohne
               objectPosition landet der Beschnitt in der Bildmitte und
               schneidet das Gesicht an. 42%/40% haelt es im Bild. */
            imgStyle={{ objectPosition: "42% 40%" }}
          />
          <span className="kt-shade" aria-hidden="true" />
          <div className="kt-author">
            <span className="kt-author-name">Kajetan Mischok</span>
            <span className="kt-author-role">Geschäftsführer</span>
          </div>
        </div>

        {/* Rechts: Anliegen oben, Daten und Aktion unten */}
        <div className="kt-right">
          <div>
            <p className="eyebrow kt-label">Kontakt</p>
            <h2 className="kt-h">Der nächste Schritt ist ein Gespräch.</h2>
            <p className="kt-copy">
              Softwareprojekte lassen sich nicht über ein Formular erklären.
              Erzählen Sie uns, wo Ihr Projekt steht — wir ordnen gemeinsam ein,
              was als Nächstes sinnvoll ist.
            </p>
          </div>

          <div className="kt-foot">
            <div className="kt-tile">
              <a href="tel:+4982149815881" className="contact-link" style={contactLink}>
                +49 821 49 81 58 81
              </a>
              <a href="mailto:info@mischok.de" className="contact-link" style={contactLink}>
                info@mischok.de
              </a>
              <address
                style={{ ...infoLine, fontStyle: "normal", lineHeight: 1.55, marginTop: "6px" }}
              >
                Mischok GmbH
                <br />
                Karlstr. 12, 86150 Augsburg
              </address>
            </div>

            {/* dieselbe CTA-Optik wie „Alle Insights ansehen" (Themen) und
                „Mehr über uns" (Über) — `on-navy` tauscht nur die Farbwerte
                fuer den dunklen Grund, Geometrie und Pfeil bleiben identisch.
                Der eingekreiste Pfeil davor stammte aus der Referenz-Card und
                war eine Formsprache, die es sonst nirgends auf der Seite gibt. */}
            <a href="mailto:info@mischok.de" className="cta-ghost on-navy">
              Projektlage klären
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
