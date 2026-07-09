import LogoMark from "@/components/ui/LogoMark";

/**
 * Hero — animierte Winkelflächen (zwei überlappende SVG-Polygone mit
 * Slate→Transparent-Gradient), Lichtspalt (weißer Strahl + Glow), Logo-Mark,
 * Serif-Headline und CTA. Alle Reveal-Animationen laufen als reine CSS-
 * Keyframes; `prefers-reduced-motion` wird über globals.css entschärft.
 */
export default function Hero() {
  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "linear-gradient(90deg,#E7E8E9 0%,#F1F1F2 46%,#ECEDEE 100%)",
        padding:
          "clamp(40px,5vw,68px) clamp(20px,5vw,72px) clamp(72px,9vw,120px)",
        minHeight: "88vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Winkel-Flächen + Lichtspalt */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        {/* weißer Gradient von rechts nach links */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(255,255,255,0) 34%, rgba(255,255,255,0.85) 74%, rgba(255,255,255,0.45) 100%)",
          }}
        />

        {/* Fläche A (oben) */}
        <div
          data-hero-panel
          style={{
            position: "absolute",
            left: "4.4%",
            top: "0%",
            width: "74.6%",
            height: "76%",
            animation: "heroRevealTop 1.25s cubic-bezier(.4,0,.2,1) .35s both",
          }}
        >
          <svg
            viewBox="0 0 1152 662"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            style={{ display: "block" }}
          >
            <path
              d="M889.45 387.587L889.45 0.475333L1151.68 0.475367L1151.68 661.225L-985.808 661.225L-985.808 -848.006L-723.575 -848.006L-723.575 387.587L889.45 387.587Z"
              fill="url(#hgA)"
              fillOpacity="0.4"
            />
            <defs>
              <linearGradient
                id="hgA"
                x1="1057.98"
                y1="38.6935"
                x2="51.8871"
                y2="466.83"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#384352" />
                <stop offset="1" stopColor="#F9F9F9" stopOpacity="0" />
                <animateTransform
                  attributeName="gradientTransform"
                  type="translate"
                  values="0 0;44 26;0 0"
                  dur="13s"
                  repeatCount="indefinite"
                />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Fläche B (unten-rechts) */}
        <div
          data-hero-panel
          style={{
            position: "absolute",
            left: "11.1%",
            top: "32%",
            width: "90%",
            height: "118%",
            animation:
              "heroRevealBottom 1.25s cubic-bezier(.4,0,.2,1) .35s both",
          }}
        >
          <svg
            viewBox="0 0 1152 662"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            style={{ display: "block" }}
          >
            <path
              d="M889.45 387.587L889.45 0.475333L1151.68 0.475367L1151.68 661.225L-985.808 661.225L-985.808 -848.006L-723.575 -848.006L-723.575 387.587L889.45 387.587Z"
              fill="url(#hgB)"
              fillOpacity="0.4"
            />
            <defs>
              <linearGradient
                id="hgB"
                x1="1057.98"
                y1="38.6935"
                x2="51.8871"
                y2="466.83"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#384352" />
                <stop offset="1" stopColor="#F9F9F9" stopOpacity="0" />
                <animateTransform
                  attributeName="gradientTransform"
                  type="translate"
                  values="0 0;-38 30;0 0"
                  dur="15s"
                  repeatCount="indefinite"
                />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* dunkle Spalt-Vertiefung */}
        <div
          data-hero-text
          style={{
            position: "absolute",
            left: "79.8%",
            top: "30%",
            width: "2.4%",
            height: "48%",
            transform: "translateX(-50%)",
            background:
              "linear-gradient(to bottom, rgba(22,30,44,0) 0%, rgba(22,30,44,0.34) 15%, rgba(22,30,44,0.34) 85%, rgba(22,30,44,0) 100%)",
            filter: "blur(4px)",
            opacity: 0,
            animation: "heroSparkIn 1s ease 1.35s both",
          }}
        />

        {/* Lichtspalt (additiv) */}
        <div
          data-hero-text
          style={{
            position: "absolute",
            inset: 0,
            mixBlendMode: "screen",
            opacity: 0,
            animation:
              "heroSparkIn 1s ease 1.5s both, heroBeamPulse 6s ease-in-out 2.5s infinite",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: "56.8%",
              top: "-2%",
              width: "46%",
              height: "36%",
              clipPath: "polygon(50% 100%, 6% 0%, 94% 0%)",
              background:
                "radial-gradient(ellipse 52% 88% at 50% 100%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4) 26%, rgba(255,255,255,0) 62%)",
              filter: "blur(7px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "56.8%",
              top: "76%",
              width: "46%",
              height: "36%",
              clipPath: "polygon(50% 0%, 6% 100%, 94% 100%)",
              background:
                "radial-gradient(ellipse 52% 88% at 50% 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.4) 26%, rgba(255,255,255,0) 62%)",
              filter: "blur(7px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "79.8%",
              top: "32%",
              width: "5%",
              height: "44%",
              transform: "translateX(-50%)",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 16%, rgba(255,255,255,0.55) 84%, rgba(255,255,255,0) 100%)",
              filter: "blur(9px)",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: "79.8%",
              top: "32%",
              width: "0.85%",
              height: "44%",
              transformOrigin: "center",
              background:
                "linear-gradient(to bottom, rgba(255,255,255,0) 0%, #ffffff 12%, #ffffff 88%, rgba(255,255,255,0) 100%)",
              filter: "blur(1.2px)",
              borderRadius: "40px",
              animation: "heroSlitGrow 1.1s cubic-bezier(.4,0,.2,1) 1.5s both",
            }}
          />
        </div>
      </div>

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
