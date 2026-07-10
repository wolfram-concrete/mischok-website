import LogoMark from "@/components/ui/LogoMark";

/**
 * Hero — vollflächiges Hintergrund-Video (loop, stumm, autoplay), darüber
 * Logo-Mark, Serif-Headline und CTA. Die Text-Reveal-Animationen laufen als
 * reine CSS-Keyframes; `prefers-reduced-motion` wird über globals.css entschärft.
 */
export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        padding:
          "clamp(40px,5vw,68px) clamp(20px,5vw,72px) clamp(72px,9vw,120px)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Vollflächiges Hintergrund-Video */}
      <video
        aria-hidden="true"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/video/hero-poster.jpg"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <source src="/video/hero.webm" type="video/webm" />
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Dezenter Scrim für Text-Lesbarkeit */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          background:
            "linear-gradient(90deg, rgba(255,255,255,0.72) 0%, rgba(255,255,255,0.42) 46%, rgba(255,255,255,0.20) 100%)",
        }}
      />

      {/* Logo */}
      <div style={{ position: "relative", zIndex: 2 }}>
        <LogoMark />
      </div>

      {/* Headline + CTA */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          textAlign: "left",
          gap: "clamp(30px,4.5vw,52px)",
          padding: "clamp(28px,5vw,60px) 0",
          maxWidth: "min(58%,860px)",
        }}
      >
        <h1
          data-hero-text
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 400,
            fontSize: "clamp(38px,5.6vw,78px)",
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            color: "var(--navy)",
            margin: 0,
            width: "100%",
            maxWidth: "none",
            opacity: 0,
            animation: "heroTextUp 1s cubic-bezier(.2,.7,.2,1) 2.0s both",
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
              "heroTextUp .8s cubic-bezier(.2,.7,.2,1) 2.55s both, heroRevealRight .7s ease 2.55s both",
          }}
        >
          Projektlage klären
        </a>
      </div>
    </section>
  );
}
