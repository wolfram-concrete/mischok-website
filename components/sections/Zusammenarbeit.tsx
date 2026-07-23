"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import ImageFrame from "@/components/ui/ImageFrame";
import HeadlineRise from "@/components/ui/HeadlineRise";
import { ACC } from "@/lib/content";

/**
 * Zusammenarbeit — horizontales Accordion aus 3 Karten. Klick öffnet eine Karte
 * breiter (flex-grow 1→3.4), das Bild schärft, ein Glass-Panel (backdrop-blur)
 * mit Icon, Titel und Text erscheint. Die Headline steht auf allen Karten —
 * auch auf den geschlossenen; nur der Fließtext blendet beim Öffnen ein.
 */

/* Icons in der Systems-Thinking-Sprache des Heros: Outline-only, 1.5px,
   je Icon eine eigene, bedeutungsgetriebene Bewegung. reduced-motion-sicher. */
const ACC_ICONS: Record<string, ReactNode> = {
  // Klare Einordnung: verstreute Punkte richten sich an einer Achse aus
  einordnung: (
    <>
      <path d="M4 20 H28" />
      <circle className="ac-a-sort1" cx="9" cy="12" r="2.6" />
      <circle className="ac-a-sort2" cx="16" cy="12" r="2.6" />
      <circle className="ac-a-sort3" cx="23" cy="12" r="2.6" />
      <path className="ac-a-sortL1" d="M9 14.6 V20" strokeDasharray="1.6 2" />
      <path className="ac-a-sortL2" d="M16 14.6 V20" strokeDasharray="1.6 2" />
      <path className="ac-a-sortL3" d="M23 14.6 V20" strokeDasharray="1.6 2" />
    </>
  ),
  // Fachliche Tiefe: eine gestrichelte Sonde fährt durch die Schichten nach unten
  tiefe: (
    <>
      <path d="M5 10 H27" />
      <path d="M5 16 H27" />
      <path d="M5 22 H27" />
      <path className="ac-a-probe" d="M16 5 V27" strokeDasharray="2 2.4" />
      <circle className="ac-a-probeDot" cx="16" cy="22" r="2.2" />
    </>
  ),
  // Verantwortliche Menschen: einer bleibt sichtbar (gefüllt), die Gruppe pulsiert ruhig
  menschen: (
    <>
      <circle className="ac-a-p1" cx="9" cy="13" r="3.2" />
      <path className="ac-a-p1" d="M4 24c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      <circle className="ac-a-p3" cx="23" cy="13" r="3.2" />
      <path className="ac-a-p3" d="M18 24c0-2.8 2.2-5 5-5s5 2.2 5 5" />
      <circle className="ac-a-p2" cx="16" cy="11" r="3.6" fill="currentColor" stroke="none" />
      <path className="ac-a-p2" d="M10.5 24c0-3 2.5-5.5 5.5-5.5s5.5 2.5 5.5 5.5" />
    </>
  ),
};

function AccIcon({ name }: { name: string }) {
  return (
    <svg
      className="ac-icon"
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ACC_ICONS[name]}
    </svg>
  );
}

export default function Zusammenarbeit() {
  const sectionRef = useRef<HTMLElement>(null);
  const lastStep = useRef(-1);
  const [vw, setVw] = useState(1280);
  const [accOpen, setAccOpen] = useState(0);

  useEffect(() => {
    const onResize = () => setVw(window.innerWidth);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /**
   * Pin-Scroll wie in Ansatz: die Section bleibt stehen und klappt beim Scrollen
   * eine Karte nach der anderen auf; nach der letzten läuft sie weiter.
   * Der lastStep-Guard sorgt dafür, dass ein Klick zwischen zwei Scrollstufen
   * stehen bleibt und nicht sofort wieder überschrieben wird — Maus und Scroll
   * arbeiten so nebeneinander statt gegeneinander.
   */
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const sec = sectionRef.current;
      // Mobil (<760px) ist die Section nicht gepinnt und wird per Tap gesteuert.
      // Der scroll-getriebene accOpen wuerde hier die Karten beim Scrollen
      // groesser/kleiner ziehen — im normalen Fluss ein Layout-Sprung (Jank).
      if (sec && window.innerWidth >= 760) {
        const rect = sec.getBoundingClientRect();
        const total = sec.offsetHeight - window.innerHeight;
        const scrolled = Math.min(Math.max(-rect.top, 0), total);
        const progress = total > 0 ? scrolled / total : 0;
        const max = ACC.length - 1;
        const next = Math.max(
          0,
          Math.min(max, Math.floor(progress * (ACC.length - 0.0001)))
        );
        if (next !== lastStep.current) {
          lastStep.current = next;
          setAccOpen(next);
        }
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const accStack = vw < 760;

  return (
    <section
      id="zusammenarbeit"
      ref={sectionRef}
      className="zu-section"
      data-screen-label="Zusammenarbeit"
    >
      <div className="zu-sticky">
        {/* Punktraster als Grund — reines CSS statt Grafik (siehe .zu-grid) */}
        <span className="zu-grid" aria-hidden="true" />

        <div style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <h2
          style={{
            fontFamily: "var(--serif)",
            fontWeight: 400,
            fontSize: "clamp(30px,4.6vw,60px)",
            lineHeight: 1.08,
            letterSpacing: "-0.01em",
            color: "var(--navy)",
            margin: "0 0 clamp(32px,4vw,52px)",
            /* Zweizeiler (Umbruch hinter „Zusammenarbeit" per <br>): die
               max-width muss die erste Zeile „Was uns in der Zusammenarbeit" GANZ
               fassen, sonst bricht sie zusaetzlich um (war 24ch -> 3 Zeilen). ~34ch
               (rund zwei Drittel der Gridbreite) haelt Zeile 1 zusammen. */
            maxWidth: "34ch",
          }}
        >
          <HeadlineRise>
            Was uns in der Zusammenarbeit <br />
            wichtig ist.
          </HeadlineRise>
        </h2>

        <div
          style={{
            display: "flex",
            flexDirection: accStack ? "column" : "row",
            gap: "16px",
            width: "100%",
            height: accStack ? "auto" : "60vh",
          }}
        >
          {ACC.map((c, i) => {
            // Akkordeon in BEIDEN Layouts: nur die aktive Karte ist offen
            // (gross, scharf, Text sichtbar), die anderen schrumpfen zusammen
            // (klein, Bild + Titel). Mobil wird die Section NICHT mehr gepinnt
            // (s. globals.css .zu-section/.zu-sticky @max-width 759px) und per
            // Tap gesteuert (s. onClick/scrollIntoView + tick-Guard) — so bleibt
            // die geoeffnete Karte voll sichtbar (vorher clippte der Pin die
            // mittlere Karte), waehrend der Schrumpf-Effekt erhalten bleibt.
            const open = i === accOpen;
            const cardStyle: CSSProperties = {
              position: "relative",
              overflow: "hidden",
              borderRadius: "5px",
              cursor: open ? "default" : "pointer",
              flex: accStack ? "none" : open ? "3.4 1 0" : "1 1 0",
              /* offen hoeher als frueher (520px): das Glas ist auf Mobil nur
                 noch ein Band an der Unterkante, darueber soll echtes Bild
                 stehen bleiben — sonst ist die Karte nur Text auf Unschaerfe. */
              height: accStack ? (open ? "640px" : "200px") : "100%",
              minWidth: 0,
              background: "var(--navy)",
              transition:
                "flex-grow .55s cubic-bezier(.4,0,.2,1), height .5s ease",
            };
            const overlayStyle: CSSProperties = {
              position: "absolute",
              inset: 0,
              pointerEvents: "none",
              /* KEIN dunkles Bild-Overlay mehr — weder mobil noch am Desktop. Der
                 fruehere dunkle Rechts-Verlauf hinter der offenen Glaskarte ist
                 raus (das Foto bleibt klar); die Lesbarkeit der weissen Typo
                 traegt jetzt allein das navy-getoente Glas (glassStyle). Die
                 geschlossenen Karten bleiben unscharf, brauchen aber einen ganz
                 leichten Fuss-Verlauf, damit der Titel darauf sitzt. */
              background: accStack
                ? "none"
                : open
                  ? "none"
                  : "linear-gradient(180deg, rgba(0,0,0,0.10) 0%, rgba(0,0,0,0.04) 45%, rgba(0,0,0,0.20) 100%)",
              transition: "background .5s ease",
            };
            // Einheitliches Panel: die Geometrie morpht zwischen offen/geschlossen
            // (transitionable top/right/bottom/left/padding) statt hart zu wechseln.
            const insetClosed = "clamp(14px,1.4vw,20px)";
            const insetOpen = "clamp(20px,2.2vw,32px)";
            const glassStyle: CSSProperties = {
              position: "absolute",
              boxSizing: "border-box",
              borderRadius: "5px",
              /* Mobil navy-getoentes Glas. Am Desktop KEIN Navy (nicht blau
                 umfaerben) — aber ein ganz dezenter NEUTRALER Grau-Layer statt des
                 hellen Glases, damit sich Icon/Schrift minimal besser vom Foto
                 abheben. Bewusst so schwach wie moeglich (0.22), nur eine leichte
                 Trennung, keine Abdunklung wie der fruehere schwarze Verlauf. */
              background: accStack
                ? "rgba(0,42,92,0.5)"
                : "rgba(28,32,38,0.22)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: accStack
                ? "1px solid rgba(255,255,255,0.14)"
                : "1px solid rgba(255,255,255,0.18)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflow: "hidden",
              /* Auf Mobil KEIN Vollflaechen-Glas mehr: `top: auto` laesst das
                 Panel an seinem Inhalt messen, es sitzt damit als Band an der
                 Unterkante und das Bild bleibt darueber sichtbar. Vorher war es
                 auf allen vier Seiten eingerueckt und hat die Karte komplett
                 zugedeckt — vom Motiv blieb nur ein unscharfer Rahmen. */
              top: accStack ? "auto" : open ? insetOpen : insetClosed,
              bottom: accStack ? insetClosed : open ? insetOpen : insetClosed,
              right: accStack ? insetClosed : open ? insetOpen : insetClosed,
              left: accStack
                ? insetClosed
                : open
                  /* Breiter: das Panel reicht bis etwa zur Kartenmitte, damit der
                     Fliesstext nicht in eine schmale Saeule laeuft (Headline 1–2-
                     zeilig, Copy deutlich weniger Zeilen). Zusammen mit der
                     hoeheren Copy-max-width (s. p) fuellt der Text die Breite. */
                  ? "calc(100% - clamp(520px,54%,780px))"
                  : insetClosed,
              padding: open
                ? "clamp(26px,2.6vw,40px)"
                : "clamp(26px,2.6vw,36px) clamp(16px,1.6vw,22px)",
              transition:
                "top .55s cubic-bezier(.4,0,.2,1), bottom .55s cubic-bezier(.4,0,.2,1), left .55s cubic-bezier(.4,0,.2,1), right .55s cubic-bezier(.4,0,.2,1), padding .55s cubic-bezier(.4,0,.2,1), background .5s ease",
            };

            return (
              <div
                key={c.slot}
                onClick={(e) => {
                  const el = e.currentTarget;
                  setAccOpen(i);
                  // Mobil: die eben geoeffnete (jetzt grosse) Karte mittig in den
                  // Blick holen — sonst springt sie durch das Kollabieren einer
                  // darueberliegenden Karte aus dem Sichtfeld.
                  if (window.innerWidth < 760) {
                    setTimeout(
                      () => el.scrollIntoView({ behavior: "smooth", block: "center" }),
                      80
                    );
                  }
                }}
                /* Die geschlossene Karte IST das Bedienelement. Vorher hing die
                   Tastaturbedienung allein am Plus-Button; mit dessen Wegfall
                   wäre die Section ohne Maus nicht mehr bedienbar gewesen. */
                role={open ? undefined : "button"}
                tabIndex={open ? undefined : 0}
                aria-label={open ? undefined : `Öffnen: ${c.title}`}
                onKeyDown={(e) => {
                  if (open) return;
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setAccOpen(i);
                  }
                }}
                style={cardStyle}
              >
                <ImageFrame
                  src={c.src}
                  alt={c.placeholder}
                  placeholder={c.placeholder}
                  sizes="(max-width:760px) 100vw, 50vw"
                  imgStyle={{
                    // mobil immer scharf (jede Karte offen); Fokuspunkt je Motiv
                    filter: open ? "blur(0px)" : "blur(7px)",
                    transform: open ? "scale(1)" : "scale(1.12)",
                    objectPosition: c.focus ?? "center",
                    transition: "filter .5s ease, transform .6s ease",
                  }}
                />
                <div style={overlayStyle} />

                <div style={{ position: "absolute", inset: 0, zIndex: 2 }}>
                  <div style={glassStyle}>
                    {/* Icon sitzt fest oben rechts — dort, wo vorher das Plus
                        war. Die frühere Spacer-Mechanik (zentriert → oben)
                        entfällt damit. */}
                    <span className={`ac-icon-slot${open ? "" : " is-collapsed"}`}>
                      <AccIcon name={c.icon} />
                    </span>

                    {/* Headline steht immer — auch auf geschlossenen Karten.
                        Nur der Fließtext blendet beim Öffnen ein.
                        Auf Mobil steht der Block im Fluss statt absolut: nur so
                        misst sich das Glasband an seinem Inhalt, und nur so kann
                        das Icon darueber liegen statt darauf. */}
                    <div
                      style={{
                        position: accStack ? "relative" : "absolute",
                        width: accStack ? "100%" : undefined,
                        left: accStack ? undefined : "clamp(26px,2.6vw,40px)",
                        right: accStack ? undefined : "clamp(26px,2.6vw,40px)",
                        bottom: accStack ? undefined : "clamp(26px,2.6vw,40px)",
                        pointerEvents: open ? "auto" : "none",
                      }}
                    >
                      <h3
                        style={{
                          fontFamily: "var(--serif)",
                          fontWeight: 400,
                          /* Eine Groesse in beiden Zustaenden. Vorher wuchs die
                             Headline beim Oeffnen auf clamp(24px,2.4vw,32px) und
                             lief damit je nach Fensterformat in das Icon oben
                             rechts — Textblock und Icon sind zwei unabhaengige
                             absolut positionierte Ebenen, keine reserviert der
                             anderen Platz. Ohne den Sprung haengt die Hoehe des
                             Blocks nur noch an einer Groesse. */
                          fontSize: "clamp(17px,1.5vw,21px)",
                          lineHeight: 1.16,
                          color: "#fff",
                          margin: 0,
                          overflowWrap: "break-word",
                        }}
                      >
                        {c.title}
                      </h3>
                      <p
                        style={{
                          fontFamily: "var(--sans)",
                          fontSize: "var(--text-lead)",
                          /* 1.45 statt der 1.6 der uebrigen Copy: bewusste
                             Ausnahme. Der Text steht hier in einer schmalen
                             Spalte auf Bild und muss zwischen Icon und
                             Kartenunterkante passen — die engere Zeile kauft
                             die letzten Pixel, ohne dass die Schrift kleiner
                             wird. Mit 1.5 blieben im engsten Fall nur 7px
                             Abstand zum Icon, mit 1.45 sind es 14px. */
                          lineHeight: 1.45,
                          color: "rgba(255,255,255,.92)",
                          margin: open ? "20px 0 0" : "0",
                          /* breiter (war 38ch): das Panel reicht jetzt bis zur
                             Kartenmitte, der Text soll die Breite nutzen und in
                             wenigen Zeilen laufen statt in einer schmalen Saeule */
                          maxWidth: "56ch",
                          overflowWrap: "break-word",
                          maxHeight: open ? "22em" : 0,
                          opacity: open ? 1 : 0,
                          overflow: "hidden",
                          transition:
                            "opacity .45s ease .08s, max-height .55s cubic-bezier(.4,0,.2,1), margin .55s ease",
                        }}
                      >
                        {c.text}
                      </p>

                      {/* Interaktivitäts-Hinweis statt Plus-Button: ein Pfeil,
                          dessen Schaft beim Hovern nach rechts wächst. Rein
                          dekorativ — bedient wird die Karte selbst. */}
                      <span
                        className={`ac-hint${open ? " is-off" : ""}`}
                        aria-hidden="true"
                      >
                        <span className="ac-hint-line" />
                        <svg
                          className="ac-hint-tip"
                          viewBox="0 0 8 12"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M1.5 1.5 L6.5 6 L1.5 10.5" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </div>
    </section>
  );
}
