import ImageFrame from "@/components/ui/ImageFrame";
import CtaButton from "@/components/ui/CtaButton";

const infoLine = {
  fontFamily: "var(--sans)",
  fontSize: "clamp(16px,1.5vw,19px)",
  color: "color-mix(in srgb, var(--on-navy) 88%, transparent)",
} as const;

const contactLink = {
  ...infoLine,
  textDecoration: "none",
  transition: "color .2s ease",
} as const;

const heading = {
  fontFamily: "var(--sans)",
  fontWeight: 700,
  fontSize: "clamp(20px,2.2vw,30px)",
  lineHeight: 1.14,
  color: "var(--on-navy)",
  margin: 0,
} as const;

/**
 * Kontakt — Headline, Intro und zwei Kontaktblöcke mit echten Kontaktdaten:
 * Ansprechpartner Kajetan Mischok (Geschäftsführer), Telefon, E-Mail und Anschrift
 * der Mischok GmbH. Telefon/E-Mail als klickbare tel:/mailto:-Links.
 */
export default function Kontakt() {
  return (
    <section
      id="kontakt"
      data-screen-label="Kontakt"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(135deg, #D7D7D3 0%, #FFFFFFEB, #FFFFFFEB)",
        padding: "90px",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background: "var(--navy)",
          borderRadius: "5px",
          padding: "40px",
          boxSizing: "border-box",
        }}
      >
        {/* Headline + Intro */}
        <div>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: "clamp(44px,7.5vw,80px)",
              lineHeight: 1.04,
              letterSpacing: "-0.01em",
              color: "var(--on-navy)",
              margin: 0,
              width: "100%",
            }}
          >
            Der nächste Schritt ist ein Gespräch.
          </h2>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "clamp(16px,1.5vw,19px)",
              lineHeight: 1.6,
              color: "color-mix(in srgb, var(--on-navy) 88%, transparent)",
              marginTop: 0,
            }}
          >
            Softwareprojekte lassen sich nicht über ein Formular erklären.
            Erzählen Sie uns, wo Ihr Projekt steht — wir ordnen gemeinsam ein, was
            als Nächstes sinnvoll ist.
          </p>
        </div>

        {/* Kontaktblöcke */}
        <div
          className="grid-kontakt"
          style={{
            gap: "clamp(40px,6vw,96px)",
            alignItems: "start",
            marginTop: "clamp(56px,9vw,150px)",
          }}
        >
          {/* Links: Ansprechpartner */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "auto 1fr",
              gap: "clamp(24px,3vw,44px)",
              alignItems: "start",
            }}
          >
            <div
              style={{
                position: "relative",
                overflow: "hidden",
                borderRadius: "5px",
                width: "clamp(120px,12vw,168px)",
                aspectRatio: "1 / 1.08",
                flex: "none",
              }}
            >
              <ImageFrame
                src="/assets/acc-2.jpg"
                alt="Ihr Ansprechpartner bei MISCHOK"
                placeholder="Ansprechpartner"
                sizes="168px"
              />
            </div>
            <div>
              <h3 style={heading}>Ihr Ansprechpartner</h3>
              <div style={{ ...infoLine, marginTop: "clamp(28px,3vw,44px)", color: "var(--on-navy)", fontWeight: 500 }}>
                Kajetan Mischok
              </div>
              <div style={{ ...infoLine, marginTop: "clamp(10px,1.2vw,16px)" }}>
                Geschäftsführer
              </div>
              <CtaButton
                href="mailto:info@mischok.de"
                weight={500}
                fontSize="clamp(14px,1.4vw,16px)"
                padding="12px 24px"
                style={{
                  marginTop: "clamp(30px,3.4vw,48px)",
                  alignSelf: "flex-start",
                  background: "#D6D6D6",
                }}
              >
                Projektlage klären
              </CtaButton>
            </div>
          </div>

          {/* Rechts: Direktkontakt */}
          <div>
            <h3 style={heading}>Oder direkt Kontakt aufnehmen:</h3>
            <div style={{ ...infoLine, marginTop: "clamp(28px,3vw,44px)" }}>
              <a href="tel:+4982149815881" className="contact-link" style={contactLink}>
                +49 821 49 81 58 81
              </a>
            </div>
            <div style={{ ...infoLine, marginTop: "clamp(14px,1.6vw,22px)" }}>
              <a href="mailto:info@mischok.de" className="contact-link" style={contactLink}>
                info@mischok.de
              </a>
            </div>
            <address
              style={{
                ...infoLine,
                marginTop: "clamp(14px,1.6vw,22px)",
                fontStyle: "normal",
                lineHeight: 1.6,
              }}
            >
              Mischok GmbH
              <br />
              Karlstr. 12, 86150 Augsburg
            </address>
            <CtaButton
              href="tel:+4982149815881"
              weight={500}
              fontSize="clamp(14px,1.4vw,16px)"
              padding="12px 24px"
              style={{
                marginTop: "clamp(30px,3.4vw,48px)",
                alignSelf: "flex-start",
                background: "#D6D6D6",
              }}
            >
              Rückruf anfragen
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
