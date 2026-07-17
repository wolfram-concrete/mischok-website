import type { Metadata } from "next";
import Footer from "@/components/sections/Footer";
import ImageFrame from "@/components/ui/ImageFrame";
import { REFERENZ_9LEVELS as R } from "@/lib/content";

export const metadata: Metadata = {
  title: `${R.name} — Referenz | mischok`,
  description:
    "Plattform-Relaunch für 9 Levels: mischok hat die technische Ausgangslage analysiert, die Anforderungen neu geordnet und die Plattform so aufgebaut, dass das Geschäftsmodell weiter wachsen kann.",
};

/**
 * Referenz-Detailseite 9 Levels. Inhalt 1:1 aus Mischok-Website.pdf
 * (REFERENZ 01 / 9 Levels). Ruhiger, konkreter Case ohne Werbe-Duktus.
 */
export default function NeunLevelsPage() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--bg)",
          padding:
            "clamp(120px,14vw,180px) clamp(20px,5vw,72px) clamp(40px,5vw,64px)",
        }}
      >
        <div style={{ width: "100%", maxWidth: "1180px", margin: "0 auto" }}>
          {/* Zurück-Link */}
          <a
            href="/referenzen"
            className="foot-link"
            style={{
              display: "inline-block",
              fontFamily: "var(--mono)",
              fontSize: "13px",
              letterSpacing: "0.06em",
              color: "var(--muted)",
              textDecoration: "none",
              marginBottom: "clamp(28px,4vw,44px)",
            }}
          >
            ← Alle Referenzen
          </a>

          {/* Kunde + Projektlage */}
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: "13px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--navy)",
            }}
          >
            Referenz — {R.name}
          </div>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: "clamp(14px,1.4vw,16px)",
              color: "var(--muted)",
              marginTop: "12px",
            }}
          >
            {R.projektlage}
          </div>

          {/* Headline */}
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: "clamp(36px,5.4vw,68px)",
              lineHeight: 1.06,
              letterSpacing: "-0.01em",
              color: "var(--navy)",
              margin: "clamp(20px,2.6vw,32px) 0 0",
              maxWidth: "20ch",
            }}
          >
            {R.headline}
          </h1>

          {/* Hero-Text */}
          <div style={{ maxWidth: "62ch", marginTop: "clamp(24px,3vw,36px)" }}>
            {R.hero.map((p, i) => (
              <p
                key={i}
                style={{
                  fontFamily: "var(--sans)",
                  fontSize: "clamp(17px,1.7vw,21px)",
                  lineHeight: "var(--lh-copy)",
                  color: "var(--slate)",
                  margin: i === 0 ? 0 : "16px 0 0",
                }}
              >
                {p}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hero-Bild (Bleed) ──────────────────────────────────── */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(280px,42vw,560px)",
          overflow: "hidden",
          background: "var(--card)",
        }}
      >
        <ImageFrame
          src={R.image}
          alt={`${R.kunde} — ${R.headline}`}
          placeholder={R.name}
          sizes="100vw"
          priority
        />
      </div>

      {/* ── Auf einen Blick (Navy-Card) ────────────────────────── */}
      <section
        style={{
          background: "var(--bg)",
          padding:
            "clamp(56px,7vw,96px) clamp(20px,5vw,72px) clamp(24px,3vw,40px)",
        }}
      >
        <div style={{ width: "100%", maxWidth: "1180px", margin: "0 auto" }}>
          <div
            style={{
              background: "var(--navy)",
              borderRadius: "6px",
              padding: "clamp(32px,4vw,56px)",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--sans)",
                fontWeight: 700,
                fontSize: "clamp(13px,1.3vw,15px)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "color-mix(in srgb, var(--on-navy) 70%, transparent)",
                margin: "0 0 clamp(24px,3vw,36px)",
              }}
            >
              Auf einen Blick
            </h2>
            <dl className="blick-grid">
              {R.facts.map((f) => (
                <div key={f.label} className="blick-row">
                  <dt
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: "13px",
                      letterSpacing: "0.04em",
                      color: "color-mix(in srgb, var(--on-navy) 62%, transparent)",
                    }}
                  >
                    {f.label}
                  </dt>
                  <dd
                    style={{
                      fontFamily: "var(--sans)",
                      fontSize: "clamp(16px,1.6vw,19px)",
                      lineHeight: "var(--lh-copy)",
                      color: "var(--on-navy)",
                      margin: "6px 0 0",
                    }}
                  >
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Fließtext-Sektionen ────────────────────────────────── */}
      <section
        style={{
          background: "var(--bg)",
          padding:
            "clamp(24px,3vw,40px) clamp(20px,5vw,72px) clamp(56px,7vw,96px)",
        }}
      >
        <article style={{ width: "100%", maxWidth: "760px", margin: "0 auto" }}>
          {R.sections.map((s) => (
            <div
              key={s.title}
              style={{ marginTop: "clamp(44px,5vw,72px)" }}
            >
              <h2
                style={{
                  fontFamily: "var(--serif)",
                  fontWeight: 400,
                  fontSize: "clamp(27px,3vw,38px)",
                  lineHeight: 1.14,
                  color: "var(--navy)",
                  margin: "0 0 clamp(18px,2.2vw,26px)",
                }}
              >
                {s.title}
              </h2>
              {s.body.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "clamp(16px,1.6vw,19px)",
                    lineHeight: "var(--lh-copy)",
                    color: "var(--slate)",
                    margin: i === 0 ? 0 : "18px 0 0",
                  }}
                >
                  {p}
                </p>
              ))}

              {s.list && (
                <ul
                  style={{
                    listStyle: "none",
                    margin: "clamp(22px,2.6vw,30px) 0 0",
                    padding: 0,
                    display: "grid",
                    gap: "12px",
                  }}
                >
                  {s.list.map((li) => (
                    <li
                      key={li}
                      style={{
                        position: "relative",
                        paddingLeft: "22px",
                        fontFamily: "var(--mono)",
                        fontSize: "clamp(15px,1.5vw,17px)",
                        lineHeight: "var(--lh-copy)",
                        color: "var(--ink)",
                      }}
                    >
                      <span
                        aria-hidden="true"
                        style={{
                          position: "absolute",
                          left: 0,
                          top: "0.55em",
                          width: "7px",
                          height: "7px",
                          borderRadius: "50%",
                          background: "var(--navy)",
                        }}
                      />
                      {li}
                    </li>
                  ))}
                </ul>
              )}

              {s.after?.map((p, i) => (
                <p
                  key={i}
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: "clamp(16px,1.6vw,19px)",
                    lineHeight: "var(--lh-copy)",
                    color: "var(--slate)",
                    margin: "18px 0 0",
                  }}
                >
                  {p}
                </p>
              ))}
            </div>
          ))}
        </article>
      </section>

      {/* ── Kundenstimme ───────────────────────────────────────── */}
      <section
        style={{
          background: "var(--section)",
          borderTop: "1px solid var(--line)",
          borderBottom: "1px solid var(--line)",
          padding: "clamp(64px,8vw,110px) clamp(20px,5vw,72px)",
        }}
      >
        <figure style={{ width: "100%", maxWidth: "900px", margin: "0 auto" }}>
          <blockquote
            style={{
              margin: 0,
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: "clamp(23px,2.9vw,36px)",
              lineHeight: 1.3,
              letterSpacing: "-0.01em",
              color: "var(--navy)",
            }}
          >
            „{R.kundenstimme.quote}“
          </blockquote>
          <figcaption
            style={{
              marginTop: "clamp(24px,3vw,36px)",
              fontFamily: "var(--mono)",
              fontSize: "15px",
              color: "var(--slate)",
            }}
          >
            {R.kundenstimme.author}
            <span style={{ color: "var(--muted)" }}>
              {" "}
              — {R.kundenstimme.role}
            </span>
          </figcaption>
        </figure>
      </section>

      {/* ── Was wir mitnehmen ──────────────────────────────────── */}
      <section
        style={{
          background: "var(--bg)",
          padding:
            "clamp(56px,7vw,96px) clamp(20px,5vw,72px) clamp(40px,5vw,64px)",
        }}
      >
        <article style={{ width: "100%", maxWidth: "760px", margin: "0 auto" }}>
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: "clamp(27px,3vw,38px)",
              lineHeight: 1.14,
              color: "var(--navy)",
              margin: "0 0 clamp(18px,2.2vw,26px)",
            }}
          >
            {R.mitnehmen.title}
          </h2>
          {R.mitnehmen.body.map((p, i) => (
            <p
              key={i}
              style={{
                fontFamily: "var(--sans)",
                fontSize: "clamp(16px,1.6vw,19px)",
                lineHeight: "var(--lh-copy)",
                color: "var(--slate)",
                margin: i === 0 ? 0 : "18px 0 0",
              }}
            >
              {p}
            </p>
          ))}
        </article>
      </section>

      {/* ── CTA ────────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--bg)",
          padding:
            "clamp(24px,3vw,40px) clamp(20px,5vw,72px) clamp(72px,9vw,120px)",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1180px",
            margin: "0 auto",
            background: "var(--navy)",
            borderRadius: "6px",
            padding: "clamp(40px,5vw,72px)",
          }}
        >
          <h2
            style={{
              fontFamily: "var(--serif)",
              fontWeight: 400,
              fontSize: "clamp(30px,4vw,52px)",
              lineHeight: 1.08,
              letterSpacing: "-0.01em",
              color: "var(--on-navy)",
              margin: 0,
              maxWidth: "20ch",
            }}
          >
            {R.cta.title}
          </h2>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: "clamp(16px,1.6vw,19px)",
              lineHeight: "var(--lh-copy)",
              color: "color-mix(in srgb, var(--on-navy) 86%, transparent)",
              margin: "clamp(18px,2vw,26px) 0 clamp(32px,3.6vw,44px)",
              maxWidth: "56ch",
            }}
          >
            {R.cta.text}
          </p>
          {/* dieselbe CTA-Optik wie auf der Home. Vorher .cta-grad. */}
          <a href="/#kontakt" className="cta-ghost on-navy">
            {R.cta.button}
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}
