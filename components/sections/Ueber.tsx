import ImageFrame from "@/components/ui/ImageFrame";
import Reveal from "@/components/ui/Reveal";

/**
 * Ueber — Navy-Panel (voll-breit, ragt −64px über Content-Padding) mit Headline
 * „Über mischok", Fließtext und Kennzahlen (Seit 2010 · Augsburg · 35+
 * Mitarbeiter). Darunter überlappend Portrait + Zitat Virgil Mischok mit
 * Scroll-Reveal (fade + rise).
 */
export default function Ueber() {
  return (
    <section
      id="ueber"
      data-screen-label="Über MISCHOK"
      style={{
        background: "var(--section)",
        position: "relative",
        overflow: "hidden",
        padding: "0 0 clamp(40px,6vw,90px)",
      }}
    >
      {/* Navy panel */}
      <div
        id="ueber-panel"
        style={{
          position: "relative",
          background: "var(--navy)",
          width: "100%",
          marginInline: 0,
          padding: "clamp(52px,6vw,96px) 64px clamp(60px,7vw,104px)",
          boxSizing: "border-box",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "clamp(150px,16%,240px)",
            height: "clamp(44px,5vw,66px)",
            backgroundColor: "#D9D9D9",
          }}
        />

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "clamp(28px,4vw,72px)",
            alignItems: "start",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: "clamp(52px,8.5vw,120px)",
              lineHeight: 0.98,
              letterSpacing: "-0.01em",
              color: "var(--on-navy)",
              margin: 0,
            }}
          >
            Über
            <br />
            mischok
          </h2>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "clamp(14px,1.15vw,15.5px)",
              lineHeight: 1.55,
              color: "color-mix(in srgb, var(--on-navy) 88%, transparent)",
              margin: "clamp(6px,1vw,14px) 0 0",
              maxWidth: "569px",
            }}
          >
            Wir sind MISCHOK, ein Familienunternehmen mit Sitz in Augsburg. Seit
            2010 begleiten wir Unternehmen, deren Geschäftserfolg von Software
            abhängt. Bei uns arbeiten mehr als 35 Menschen in Entwicklung,
            Architektur, Projektleitung und Beratung. Unsere Projekte entstehen
            dort, wo Software nicht isoliert betrachtet werden kann, sondern Teil
            des laufenden Geschäfts ist.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "clamp(28px,4vw,72px)",
            justifyContent: "space-between",
            marginTop: "clamp(56px,8vw,132px)",
          }}
        >
          <div style={{ flex: "0 1 auto" }}>
            <div style={statLabel}>Seit</div>
            <div style={statValue}>2010</div>
          </div>
          <div style={{ flex: "0 1 auto" }}>
            <div style={statLabel}>Sitz in</div>
            <div style={statValue}>Augsburg</div>
          </div>
          <div style={{ flex: "0 1 auto" }}>
            <div style={statLabel}>Mehr als</div>
            <div style={statValue}>35</div>
            <div style={{ ...statLabel, marginBottom: 0, marginTop: "clamp(8px,1vw,16px)" }}>
              Mitarbeiter
            </div>
          </div>
        </div>
      </div>

      {/* Portrait + Zitat */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          marginTop: "clamp(-40px,-3vw,-24px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
          gap: "clamp(28px,5vw,72px)",
          alignItems: "center",
          paddingRight: "clamp(20px,5vw,72px)",
        }}
      >
        <Reveal
          style={{
            position: "relative",
            overflow: "hidden",
            width: "100%",
            height: "clamp(360px,44vw,740px)",
          }}
        >
          <ImageFrame
            src="/assets/acc-2.jpg"
            alt="Portrait Virgil Mischok"
            placeholder="Portrait — Virgil Mischok"
            sizes="(max-width:820px) 100vw, 50vw"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <blockquote
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 700,
              fontSize: "clamp(20px,2.3vw,28px)",
              lineHeight: 1.4,
              letterSpacing: "-0.005em",
              color: "var(--ink)",
              margin: 0,
            }}
          >
            „In einem Familienunternehmen kann man sich nicht hinter Abteilungen
            verstecken. Entscheidungen haben Namen. Das macht vieles direkter —
            manchmal auch unbequemer."
          </blockquote>
          <div
            style={{
              marginTop: "clamp(20px,2.4vw,32px)",
              fontFamily: "var(--mono)",
              fontSize: "14px",
              color: "var(--slate)",
            }}
          >
            — Virgil Mischok
          </div>
        </Reveal>
      </div>
    </section>
  );
}

const statLabel = {
  fontFamily: "var(--sans)",
  fontSize: "clamp(16px,1.4vw,20px)",
  color: "color-mix(in srgb, var(--on-navy) 82%, transparent)",
  marginBottom: "clamp(8px,1vw,16px)",
} as const;

const statValue = {
  fontFamily: "var(--serif)",
  fontWeight: 400,
  fontSize: "clamp(46px,6vw,88px)",
  lineHeight: 1,
  color: "var(--on-navy)",
  whiteSpace: "nowrap",
} as const;
