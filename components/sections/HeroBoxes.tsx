import { FIELDS } from "@/lib/content";

/**
 * HeroBoxes — Hero ohne Video. Split-Layout:
 *   • links  = reiner Fond (weiße Welt) mit Serif-Headline + CTA
 *   • rechts = Wand aus 5 weißen Karten (subtiler 3D-/Extrusions-Look), die
 *     beim Laden gestaffelt von unten nach oben einschieben.
 * Die Karten tragen die 5 Einsatzfelder (FIELDS 01–05, Nummer + Kurztext,
 * ohne Bild) — so „paart" der Hero die bisherige Section 1.
 * Animationen laufen als CSS-Keyframes; prefers-reduced-motion wird in
 * globals.css entschärft.
 */
export default function HeroBoxes() {
  return (
    <section
      id="hero"
      style={{
        position: "relative",
        overflow: "hidden",
        background: "var(--bg)",
        padding:
          "clamp(96px,11vw,150px) clamp(20px,5vw,72px) clamp(56px,7vw,96px)",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="hero-split" style={{ width: "100%" }}>
        {/* Links: Fond + Headline + CTA */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            gap: "clamp(28px,4vw,48px)",
          }}
        >
          <h1
            data-hero-text
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: "clamp(36px,4.6vw,66px)",
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
              color: "var(--navy)",
              margin: 0,
              maxWidth: "16ch",
              opacity: 0,
              animation: "heroTextUp 1s cubic-bezier(.2,.7,.2,1) .2s both",
            }}
          >
            Wenn Software entscheidend für Ihren Geschäftserfolg ist braucht sie
            Menschen, die Verantwortung übernehmen.
          </h1>
          <a
            data-hero-text
            href="#kontakt"
            className="cta-grad"
            style={{
              textDecoration: "none",
              fontFamily: "var(--sans)",
              fontWeight: 700,
              fontSize: "14px",
              padding: "14px 24px",
              opacity: 0,
              animation:
                "heroTextUp .8s cubic-bezier(.2,.7,.2,1) .45s both, heroRevealRight .7s ease .45s both",
            }}
          >
            Projektlage klären
          </a>
        </div>

        {/* Rechts: Karten-Wand */}
        <div className="hero-wall" aria-label="Einsatzfelder von MISCHOK">
          {FIELDS.map((f, i) => (
            <article
              key={f.n}
              className="hero-box"
              data-hero-box
              style={{ animationDelay: `${0.35 + i * 0.12}s` }}
            >
              <span className="hero-box-num">{f.n}</span>
              <p className="hero-box-text">{f.card}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
