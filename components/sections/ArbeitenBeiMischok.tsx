import ImageFrame from "@/components/ui/ImageFrame";
import CtaButton from "@/components/ui/CtaButton";

/**
 * ArbeitenBeiMischok — Team-Bild (Navy) mit Glas-/Blur-Panel: Headline
 * „Arbeiten bei MISCHOK", zwei Absätze und CTA „Karriere bei MISCHOK".
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
      <div
        className="grid-arbeiten"
        style={{ position: "relative", minHeight: "60vh" }}
      >
        {/* Linke Spalte: hält das scharfe Bild frei (kein eigener Inhalt).
            Der frühere dekorative #EEEEEE-Block ist entfallen — er war fest auf
            303×85px verdrahtet, skalierte nicht mit und las sich seit der
            Sektionsstufe nur noch als graue Kante. */}
        <div style={{ position: "relative" }} />

        {/* Rechte Spalte: Blur-Panel + Text */}
        <div
          style={{
            position: "relative",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "clamp(40px,6vw,110px) clamp(28px,5vw,96px)",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/arbeiten.jpg"
            alt=""
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              width: "200%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "50% 50%",
              filter: "blur(9px)",
              transform: "scale(1.06)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "rgba(255,255,255,0.20)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "relative",
              zIndex: 2,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--serif)",
                fontWeight: 400,
                fontSize: "clamp(30px,3.6vw,50px)",
                lineHeight: 1.08,
                letterSpacing: "-0.005em",
                color: "#fff",
                margin: 0,
              }}
            >
              Arbeiten bei MISCHOK
            </h2>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: "var(--text-lead)",
                lineHeight: 1.6,
                color: "#fff",
                margin: "clamp(24px,3vw,38px) 0 0",
                maxWidth: "52ch",
              }}
            >
              Bei MISCHOK arbeiten Menschen, die Softwareprojekte verstehen,
              begleiten und umsetzen. Vor Ort in Augsburg, nah am Team und nah an
              den Projekten unserer Kunden.
            </p>
            <p
              style={{
                fontFamily: "var(--sans)",
                fontSize: "var(--text-lead)",
                lineHeight: 1.6,
                color: "#fff",
                margin: "clamp(18px,2vw,26px) 0 0",
                maxWidth: "52ch",
              }}
            >
              Wir suchen immer wieder Menschen, die fachlich stark sind,
              Verantwortung übernehmen wollen und zu unserer Arbeitsweise passen.
            </p>
            <CtaButton
              href="#kontakt"
              padding="14px 24px"
              fontSize="clamp(14px,1.4vw,16px)"
              style={{ alignSelf: "flex-start", marginTop: "clamp(32px,4vw,52px)" }}
            >
              Karriere bei MISCHOK
            </CtaButton>
          </div>
        </div>
      </div>
    </section>
  );
}
