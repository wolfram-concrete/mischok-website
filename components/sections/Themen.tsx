import ImageFrame from "@/components/ui/ImageFrame";
import { TOPICS } from "@/lib/content";

/**
 * Themen — Intro-Text + 3 Themen-Karten mit Bild, Kind-Label (Vortrag/
 * Fachartikel), Titel, Beschreibung und Bottom-Gradient-Overlay.
 */
export default function Themen() {
  return (
    <section
      id="themen"
      style={{
        background: "var(--bg)",
        padding:
          "clamp(120px,15vw,230px) clamp(20px,5vw,72px) clamp(64px,8vw,120px)",
      }}
    >
      <div style={{ width: "100%" }}>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 500,
            fontSize: "clamp(30px,4.6vw,60px)",
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            color: "var(--navy)",
            margin: 0,
          }}
        >
          Themen, über die wir nachdenken
        </h2>
        <p
          style={{
            fontFamily: "var(--sans)",
            fontSize: "clamp(15px,1.5vw,17px)",
            lineHeight: 1.6,
            color: "var(--navy)",
            margin: "clamp(20px,2.5vw,30px) 0 clamp(40px,5vw,58px)",
            maxWidth: "92ch",
          }}
        >
          Viele Fragen aus unseren Projekten tauchen auch in Vorträgen,
          Fachbeiträgen, Workshops und eigenen Veranstaltungen auf. Hier zeigen
          wir, womit wir uns bei MISCHOK fachlich beschäftigen — von gewachsenen
          Softwaresystemen über Spring Boot und Testing bis zu KI in der
          Softwareentwicklung.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "20px",
          }}
        >
          {TOPICS.map((t) => (
            <a
              key={t.slot}
              href="#themen"
              className="topic-card"
              style={{
                textDecoration: "none",
                position: "relative",
                display: "block",
                overflow: "hidden",
                borderRadius: "5px",
                aspectRatio: "3 / 4.1",
              }}
            >
              <ImageFrame
                alt={t.placeholder}
                placeholder={t.placeholder}
                sizes="(max-width:640px) 100vw, 33vw"
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, rgba(30,34,40,.08) 30%, rgba(30,34,40,.86) 100%)",
                  pointerEvents: "none",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  bottom: 0,
                  padding: "26px",
                  zIndex: 2,
                  color: "#fff",
                  pointerEvents: "none",
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                    color: "rgba(255,255,255,.82)",
                  }}
                >
                  {t.kind}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontWeight: 400,
                    fontSize: "clamp(24px,2.4vw,30px)",
                    lineHeight: 1.14,
                    margin: "16px 0 14px",
                  }}
                >
                  {t.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: "13px",
                    lineHeight: 1.55,
                    color: "rgba(255,255,255,.82)",
                    margin: 0,
                  }}
                >
                  {t.desc}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
