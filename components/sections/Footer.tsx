/**
 * Footer — Logo-Mark, Claim, Kontakt, CTA „Erstgespräch vereinbaren",
 * © 2026 Mischok GmbH, Impressum · Datenschutz.
 */
export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        background: "var(--section)",
        borderTop: "1px solid var(--line)",
        padding: "clamp(48px,6vw,80px) clamp(20px,5vw,72px) 40px",
      }}
    >
      <div
        className="grid-foot"
        style={{ width: "100%", gap: "40px", alignItems: "start" }}
      >
        <div style={{ maxWidth: "40ch" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/logo.svg"
            alt="MISCHOK"
            width={42}
            height={36}
            style={{ display: "block", height: "40px", width: "auto" }}
          />
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "13.5px",
              lineHeight: 1.65,
              color: "var(--slate)",
              margin: "20px 0 0",
            }}
          >
            Erfahrene Projektführung für geschäftskritische Software im Bestand.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: "11.5px",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "var(--muted)",
            }}
          >
            Kontakt
          </div>
          <a
            href="tel:+493412254900"
            className="foot-link"
            style={{
              textDecoration: "none",
              fontFamily: "var(--mono)",
              fontSize: "15px",
              color: "var(--slate)",
            }}
          >
            +49 341 22 54 900
          </a>
          <a
            href="mailto:kontakt@mischok.de"
            className="foot-link"
            style={{
              textDecoration: "none",
              fontFamily: "var(--mono)",
              fontSize: "15px",
              color: "var(--slate)",
            }}
          >
            kontakt@mischok.de
          </a>
        </div>
        <div className="foot-cta">
          <a
            href="mailto:kontakt@mischok.de"
            className="cta-solid"
            style={{
              textDecoration: "none",
              fontFamily: "var(--sans)",
              fontWeight: 700,
              fontSize: "14px",
              padding: "15px 26px",
              display: "inline-block",
            }}
          >
            Erstgespräch vereinbaren
          </a>
        </div>
      </div>
      <div
        style={{
          width: "100%",
          margin: "44px 0 0",
          paddingTop: "22px",
          borderTop: "1px solid var(--line)",
          display: "flex",
          flexWrap: "wrap",
          gap: "14px",
          justifyContent: "space-between",
          fontFamily: "var(--mono)",
          fontSize: "12px",
          color: "var(--muted)",
        }}
      >
        <span>© 2026 Mischok GmbH</span>
        <span>Impressum · Datenschutz</span>
      </div>
    </footer>
  );
}
