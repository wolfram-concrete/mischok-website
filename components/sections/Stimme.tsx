import ImageFrame from "@/components/ui/ImageFrame";

/**
 * Stimme — Zitat Julius Mischok, Portrait links negativ überlappend
 * (ragt in Nachbarsektionen).
 */
export default function Stimme() {
  return (
    <section
      id="stimme"
      style={{
        background: "var(--section)",
        padding: "clamp(56px,7vw,104px) clamp(20px,5vw,72px)",
        display: "block",
      }}
    >
      <div
        className="grid-quote"
        style={{
          width: "100%",
          gap: "clamp(32px,5vw,72px)",
          alignItems: "stretch",
        }}
      >
        <div
          style={{
            position: "relative",
            alignSelf: "end",
            height: "clamp(400px,48vw,640px)",
            margin:
              "calc(-1 * clamp(56px,7vw,104px)) 0 calc(-1 * clamp(90px,11vw,170px)) 0",
            zIndex: 2,
          }}
        >
          <ImageFrame
            src="/assets/acc-1.jpg"
            alt="Portrait Julius Mischok — konzentriert, nahbar"
            placeholder="Portrait — konzentriert, nahbar"
            sizes="(max-width:820px) 100vw, 45vw"
          />
        </div>
        <div>
          <blockquote
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 600,
              fontSize: "clamp(20px,2.5vw,29px)",
              lineHeight: 1.42,
              letterSpacing: "-0.005em",
              color: "var(--ink)",
              margin: 0,
            }}
          >
            „In anspruchsvollen Softwareprojekten zeigt sich oft erst im Detail,
            was wirklich entschieden werden muss. Deshalb ist uns wichtig, nicht
            zu früh zu vereinfachen, technische Fragen nicht von organisatorischen
            zu trennen und auch dann klar zu bleiben, wenn eine Einschätzung
            unbequem wird."
          </blockquote>
          <div
            style={{
              marginTop: "26px",
              fontFamily: "var(--mono)",
              fontSize: "14px",
              color: "var(--slate)",
            }}
          >
            — Julius Mischok
          </div>
        </div>
      </div>
    </section>
  );
}
