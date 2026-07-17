import { PRAXIS, PRAXIS_LINKEDIN } from "@/lib/content";

/**
 * AusDerPraxis — Trust-/Sichtbarkeits-Section vor dem Kontaktbereich.
 * Zeigt, dass MISCHOK und Kajetan Mischok fachlich öffentlich sichtbar sind.
 * Bewusst keine LinkedIn-Embeds (Datenschutz/Cookies), sondern kuratierte
 * Teaser-Karten, die extern in einem neuen Tab auf LinkedIn verweisen.
 */
export default function AusDerPraxis() {
  return (
    <section
      id="praxis"
      className="sec-step is-right"
      style={{
        background: "var(--section)",
        /* Trennlinie entfällt: den Übergang markiert jetzt die Sektionsstufe.
           Sie wäre vom clip-path ohnehin grösstenteils abgeschnitten. */
        padding:
          "clamp(72px,10vw,140px) clamp(20px,5vw,72px) clamp(72px,10vw,140px)",
      }}
    >
      <div style={{ width: "100%" }}>
        {/* Kicker */}
        <div
          className="eyebrow"
          style={{
            fontFamily: "var(--realtime)",
            fontSize: "14px",
            color: "rgba(0,42,92,0.5)",
            marginBottom: "clamp(16px,2vw,22px)",
          }}
        >
          Aus der Praxis
        </div>

        <div className="grid-praxis-head">
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 500,
              fontSize: "clamp(30px,4.6vw,58px)",
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
              color: "var(--navy)",
              margin: 0,
            }}
          >
            Woran wir fachlich arbeiten
          </h2>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "clamp(15px,1.5vw,17px)",
              lineHeight: 1.6,
              color: "var(--slate)",
              margin: 0,
              alignSelf: "end",
            }}
          >
            Einordnungen, Vorträge und Beiträge von MISCHOK und Kajetan Mischok —
            zu gewachsenen Systemen, Testing und KI im Bestand. Kompetenz zeigt
            sich in Haltung und Themen, nicht in Behauptungen.
          </p>
        </div>

        {/* Karten */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
            marginTop: "clamp(40px,5vw,64px)",
          }}
        >
          {PRAXIS.map((c) => (
            <a
              key={c.title}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className="praxis-card"
              style={{
                textDecoration: "none",
                display: "flex",
                flexDirection: "column",
                background: "var(--bg)",
                border: "1px solid var(--line)",
                borderRadius: "5px",
                padding: "clamp(26px,2.6vw,34px)",
                minHeight: "260px",
              }}
            >
              {/* Typ-Badge */}
              <span
                className="eyebrow"
                style={{
                  fontFamily: "var(--realtime)",
                  fontSize: "13px",
                  color: "var(--navy)",
                }}
              >
                {c.kind}
              </span>

              <h3
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 400,
                  fontSize: "clamp(23px,2.2vw,28px)",
                  lineHeight: 1.18,
                  color: "var(--ink)",
                  margin: "clamp(18px,2vw,24px) 0 0",
                }}
              >
                {c.title}
              </h3>

              <p
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "15px",
                  lineHeight: 1.6,
                  color: "var(--slate)",
                  margin: "14px 0 0",
                }}
              >
                {c.teaser}
              </p>

              {/* Autor + CTA */}
              <div
                style={{
                  marginTop: "auto",
                  paddingTop: "clamp(20px,2.4vw,28px)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "14px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "13px",
                    color: "var(--muted)",
                  }}
                >
                  {c.author}
                </span>
                <span
                  className="praxis-cta"
                  style={{
                    fontFamily: "var(--sans)",
                    fontWeight: 500,
                    fontSize: "14px",
                    color: "var(--navy)",
                    whiteSpace: "nowrap",
                  }}
                >
                  Auf LinkedIn lesen{" "}
                  <span aria-hidden="true" className="praxis-arrow">
                    ↗
                  </span>
                </span>
              </div>
            </a>
          ))}
        </div>

        {/* Profil-Link */}
        <a
          href={PRAXIS_LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="foot-link"
          style={{
            display: "inline-block",
            marginTop: "clamp(32px,4vw,48px)",
            fontFamily: "var(--sans)",
            fontWeight: 500,
            fontSize: "15px",
            color: "var(--slate)",
            textDecoration: "none",
          }}
        >
          Kajetan Mischok auf LinkedIn ansehen{" "}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}
