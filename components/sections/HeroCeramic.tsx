"use client";

import { useEffect, useRef, useState } from "react";
import ImageFrame from "@/components/ui/ImageFrame";
import NavyGrid from "@/components/ui/NavyGrid";
import { Icon, FOCUS, NAV } from "@/components/sections/HeroImpact";
import { REFERENZEN, REFERENZEN_INTRO } from "@/lib/content";

const Chevron = ({ open }: { open: boolean }) => (
  <svg
    className={`hc-chev${open ? " is-open" : ""}`}
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <path d="M4 6L8 10L12 6" />
  </svg>
);

/**
 * HeroCeramic — zweite Hero-Variante (Kopie der bestehenden Struktur/Inhalte),
 * neu eingekleidet als zusammenhängendes, leicht plastisches Bento-System
 * (Apple/Linear/Editorial-Architektur). Eigener „hc-"-Namespace, damit die
 * bestehende Variante (HeroImpact) unberührt bleibt.
 *
 * Keine Tabellenlinien mehr → größere Stege, gemeinsame helle Grundfläche,
 * einheitliche keramische Kartenhaptik, Navigation als erstes Bento-Modul,
 * je Karte eine sehr subtile, aus dem Icon abgeleitete Hintergrundform.
 */

/**
 * `variant` schaltet zwischen zwei Bento-Layouts:
 *   1 — der bestehende, dichte Aufbau (fünf gleich prominente Felder über die
 *       volle Breite, zwei Bilder, grosses CTA).
 *   2 — ruhiger: das Foto oben rechts dominiert und zieht bis über die
 *       Feld-Zeile herunter, die fünf Projektlagen liegen als schmale
 *       „Buchrücken" links darunter, das untere linke Foto entfällt, das CTA
 *       schrumpft zu einem kurzen Balken unten rechts.
 * Der Umschalter sitzt in HeroSwitch (nur in der Preview sichtbar).
 */

/* Insights-Megamenü — analog zum Referenzen-Megamenü. Teaser auf die (geplanten)
   Insights-Detailseiten; solange die Detail-Routen noch nicht existieren, zeigen
   die Links auf die Insights-Section der Home (/#themen). n/name/sub wie bei den
   Referenzen, damit dieselbe Mega-Optik greift. */
const INSIGHTS_INTRO = {
  kicker: "Insights",
  headline: "Themen, über die wir nachdenken",
  href: "/#themen",
};
const INSIGHTS = [
  { n: "01", name: "Retten oder Reimplementieren?", sub: "Vortrag", href: "/#themen" },
  { n: "02", name: "STEPS", sub: "Veranstaltung", href: "/#themen" },
  { n: "03", name: "KI in der Softwareentwicklung", sub: "Workshop", href: "/#themen" },
  { n: "04", name: "Wann sich der Umbau lohnt – und wann nicht", sub: "Fachbeitrag", href: "/#themen" },
  { n: "05", name: "Was 8.500 Tests mit Verantwortung zu tun haben", sub: "Fachbeitrag", href: "/#themen" },
];

export default function HeroCeramic({ variant = 1 }: { variant?: 1 | 2 | 3 }) {
  const [active, setActive] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  // Megamenü: "ref" (Referenzen) | "ins" (Insights) | null (zu)
  const [openMenu, setOpenMenu] = useState<null | "ref" | "ins">(null);
  // Daten des aktuell offenen Megamenüs — auf eine gemeinsame Form normalisiert,
  // damit dasselbe Panel beide Menüs rendert.
  const mega =
    openMenu === "ins"
      ? {
          intro: INSIGHTS_INTRO,
          items: INSIGHTS,
          ctaHref: "/#themen",
        }
      : {
          intro: REFERENZEN_INTRO,
          items: REFERENZEN.map((r) => ({
            n: r.n,
            name: r.name,
            sub: r.projektlage,
            href: r.detailHref ?? `/referenzen#${r.slug}`,
          })),
          ctaHref: "/referenzen",
        };
  // V2 und V3 teilen sich die schlanke Feld-/CTA-Optik (is-slim); das konkrete
  // Bento-Raster kommt je Variante aus is-v2 bzw. is-v3.
  const slim = variant !== 1;

  // Hero-Snap (mobil): die gestaffelten Pins muessen BUENDIG stapeln, damit der
  // CTA exakt unter dem Bild einrastet. Feste Pixel (58/298/518 in globals.css)
  // stimmen nur bei einer Headline-Umbruchhoehe von 240px — auf breiteren Phones
  // bricht sie kuerzer, die Summe wandert und der CTA dockt nicht mehr an.
  // Deshalb hier live gemessen: --pin-head/-img/-cta = kumulierte Modulhoehen
  // (Navi, +Headline, +Bild). Neu berechnet bei Resize/Reflow/Font-Load. Nur
  // mobil; am Desktop bleiben die CSS-Defaults ungenutzt (Media-Query greift dort
  // nicht). SSR/vor-JS greifen die Pixel-Fallbacks aus globals.css.
  const sectionRef = useRef<HTMLElement>(null);
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const mq = window.matchMedia("(max-width: 899px)");
    const measure = () => {
      // Titel-Angleich (Desktop, schlanke „Buchruecken"): die Titel sitzen unten
      // am Kartenboden; da ihre Zeilenzahl breitenabhaengig ist, sprang ihre
      // Oberkante. Hier den HOECHSTEN Titel messen und alle auf diese Hoehe
      // bringen (--hc-ftitle-h, oben ausgerichtet via CSS) — Oberkanten fluchten.
      const titles = [
        ...section.querySelectorAll<HTMLElement>(".hc-field .hc-ftitle"),
      ];
      if (titles.length) {
        if (window.innerWidth >= 900) {
          section.style.setProperty("--hc-ftitle-h", "0px"); // Reset -> Naturhoehe
          let maxH = 0;
          for (const t of titles) maxH = Math.max(maxH, t.getBoundingClientRect().height);
          section.style.setProperty("--hc-ftitle-h", `${Math.ceil(maxH)}px`);
        } else {
          section.style.removeProperty("--hc-ftitle-h");
        }
      }

      const nav = section.querySelector<HTMLElement>(".hc-nav");
      const head = section.querySelector<HTMLElement>(".hc-head");
      const photo = section.querySelector<HTMLElement>(".hc-photo");
      if (!nav || !head || !photo) return;
      if (!mq.matches) {
        section.style.removeProperty("--pin-head");
        section.style.removeProperty("--pin-img");
        section.style.removeProperty("--pin-cta");
        return;
      }
      const navH = nav.offsetHeight;
      const headH = head.offsetHeight;
      const photoH = photo.offsetHeight;
      // buendig stapeln: die 6px-Grid-Luecken bewusst NICHT mitrechnen, sonst
      // blitzt in den Luecken ein durchscrollender Kartentext durch
      section.style.setProperty("--pin-head", `${navH}px`);
      section.style.setProperty("--pin-img", `${navH + headH}px`);
      section.style.setProperty("--pin-cta", `${navH + headH + photoH}px`);
    };
    measure();
    const raf = requestAnimationFrame(measure);
    const ro = new ResizeObserver(measure);
    [".hc-nav", ".hc-head", ".hc-photo"].forEach((sel) => {
      const el = section.querySelector(sel);
      if (el) ro.observe(el);
    });
    window.addEventListener("resize", measure);
    mq.addEventListener?.("change", measure);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      window.removeEventListener("resize", measure);
      mq.removeEventListener?.("change", measure);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`hc-section${slim ? ` is-v${variant}` : ""}`}
      id="hero-ceramic"
    >
      <div className={`hc-grid${slim ? ` is-slim is-v${variant}` : ""}`}>
        {/* Navigations-Modul: Logo, Links (mit Referenzen-Dropdown) und CTA
            zusammengefasst in einem länglichen Bento über die volle Breite. */}
        <div
          /* is-mega auch beim Burger-Panel: die Navizeile ist dann dieselbe
             Flaeche, die nach unten weiterwaechst — auf Mobil wie auf Desktop */
          className={`hc-nav${openMenu || menuOpen ? " is-mega" : ""}`}
          onMouseLeave={() => setOpenMenu(null)}
        >
          <a href="/" aria-label="mischok — better. software — Startseite" className="hc-nav-brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Logo/MISCHOK_LOGO_L_POS_RGB-neu-claim.png"
              alt="mischok — better. software"
              className="hc-wordmark"
            />
          </a>

          {/* „Referenzen" UND „Insights" tragen je ein Mega-Menü (dasselbe Panel,
              Inhalt je nach openMenu). Die uebrigen Links schliessen es. */}
          <nav className="hc-nav-links" aria-label="Hauptnavigation">
            {NAV.map((n) => {
              const key =
                n.label === "Referenzen"
                  ? "ref"
                  : n.label === "Insights"
                    ? "ins"
                    : null;
              return key ? (
                <div key={n.label} className="hc-nav-item">
                  <button
                    type="button"
                    className="hc-nav-link"
                    aria-expanded={openMenu === key}
                    onMouseEnter={() => setOpenMenu(key)}
                    onClick={() => setOpenMenu((o) => (o === key ? null : key))}
                  >
                    {n.label}
                    <Chevron open={openMenu === key} />
                  </button>
                </div>
              ) : (
                <a
                  key={n.label}
                  href={n.href}
                  className="hc-nav-link"
                  onMouseEnter={() => setOpenMenu(null)}
                >
                  {n.label}
                </a>
              );
            })}
          </nav>

          <a href="/#kontakt" className="hc-nav-cta">
            Erstgespräch
          </a>

          <button
            type="button"
            className={`hc-burger${menuOpen ? " is-open" : ""}`}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>

          {menuOpen && (
            <nav className="hc-menu" aria-label="Hauptnavigation mobil">
              {NAV.map((n) => (
                <a key={n.label} href={n.href} onClick={() => setMenuOpen(false)}>
                  {n.label}
                </a>
              ))}
              <a href="/#kontakt" className="hc-menu-cta" onClick={() => setMenuOpen(false)}>
                Erstgespräch
              </a>
            </nav>
          )}

          {/* Mega-Panel: zoomt über die volle Navi-Breite nach unten auf. Inhalt
              (Referenzen oder Insights) kommt aus `mega`, gesteuert von openMenu. */}
          <div
            className={`hc-mega${openMenu ? " is-open" : ""}`}
            aria-hidden={!openMenu}
          >
            <div className="hc-mega-clip">
              <div className="hc-mega-inner">
                <div className="hc-mega-cols">
                  <div className="hc-mega-label">{mega.intro.kicker}</div>
                  <div className="hc-mega-list">
                    {mega.items.map((item) => (
                      <a
                        key={`${item.n}-${item.name}`}
                        href={item.href}
                        className="hc-mega-link"
                        tabIndex={openMenu ? 0 : -1}
                        onClick={() => setOpenMenu(null)}
                      >
                        <span className="hc-mega-n">{item.n}</span>
                        <span className="hc-mega-body">
                          <span className="hc-mega-name">{item.name}</span>
                          <span className="hc-mega-sub">{item.sub}</span>
                        </span>
                      </a>
                    ))}
                  </div>
                </div>

                <a
                  href={mega.ctaHref}
                  className="hc-mega-cta"
                  tabIndex={openMenu ? 0 : -1}
                  onClick={() => setOpenMenu(null)}
                >
                  <span className="hc-mega-cta-label">{mega.intro.kicker}</span>
                  <span className="hc-mega-cta-h">{mega.intro.headline}</span>
                  <span className="hc-mega-cta-btn">
                    {openMenu === "ins" ? "Alle Insights" : "Alle Referenzen"}
                    <span aria-hidden="true">→</span>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Headline-Modul mit subtilen orthogonalen Platten */}
        <div className="hc-head hc-surface">
          <span className="hc-head-planes" aria-hidden="true" />
          <h1 className="hc-headline">
            Wenn Software entscheidend für Ihren Geschäftserfolg ist, braucht sie
            Menschen, die Verantwortung übernehmen.
          </h1>
        </div>

        {/* Bildmodul rechts */}
        <div className="hc-photo hc-surface">
          <ImageFrame
            src="/assets/Mischok_2023_ma_406.jpg"
            alt="mischok — Kajetan Mischok mit dem Team im Workshop"
            placeholder=""
            /* Das Modul belegt die rechte Haelfte. 55vw statt 50vw gibt etwas
               Reserve, damit auf breiteren Desktops immer die naechstgroessere
               Stufe geladen wird (nie hochskaliert). Die Aufloesung war damit
               schon gedeckt (bei 1x ~900px, bei 2x ~1920px). */
            sizes="(max-width:900px) 100vw, 55vw"
            /* Hero-Bild: hoehere JPEG/AVIF-Qualitaet als der Default (90). Bei
               diesem prominenten, grossen Motiv macht die geringere Kompression
               den sichtbaren Unterschied — die 90er-Stufe wirkte in Flaechen
               (Hemd, Wand) leicht weich. */
            quality={95}
            /* Querformat (1.5:1) in hochkantem Container: cover beschneidet
               links/rechts. Kajetan (weisses Hemd) steht bei ~62% horizontal,
               das Gesicht bei ~35% Hoehe — der Fokuspunkt haelt ihn im
               Ausschnitt zentriert. */
            imgStyle={{ objectPosition: "62% 35%" }}
            priority
          />
        </div>

        {/* Fünf Content-Karten (Einzelmodule) */}
        {/* Die fünf Szenarien sind inhaltlich die Einsatzfelder — daher trägt
            diese Reihe den Anker, auf den der Navipunkt „Einsatzfelder" zeigt. */}
        <div
          className="hc-fields"
          id="einsatzfelder"
          role="tablist"
          aria-label="Einsatzfelder"
        >
          {FOCUS.map((f, i) => {
            const open = i === active;
            return (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={open}
                className={`hc-field hc-surface${open ? " is-open" : ""}`}
                /* Toggle: eine bereits offene Karte schliesst per erneutem Klick
                   wieder (-1 = keine offen). Wichtig auf Mobil, wo die Karte nur
                   ueber `active`/is-open aufklappt (kein :hover). onMouseEnter/
                   onFocus setzen NICHT mehr active — sonst haette auf Touch das
                   vorgelagerte mouseenter/focus die Karte sofort wieder gequert.
                   Desktop klappt weiter rein per CSS :hover/:focus-within auf. */
                onClick={() => setActive(active === i ? -1 : i)}
              >
                <span className="hc-field-head">
                  <span className="hc-num">Projektlage {String(i + 1).padStart(2, "0")}</span>
                  <span className="hc-field-icon">
                    <Icon name={f.icon} />
                  </span>
                </span>
                <span className="hc-field-body">
                  <span className="hc-ftitle">{f.title}</span>
                  <span className="hc-fdetail">{f.detail}</span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Unten links: Teamfoto — in V1 und V3. Nur V2 laesst es weg. */}
        {variant !== 2 && (
          <div className="hc-photoB hc-surface">
            <ImageFrame
              src="/assets/Mischok_2025_ma_216.jpg"
              alt="mischok — die Geschäftsführung"
              placeholder=""
              sizes="(max-width:900px) 100vw, 40vw"
              /* Breit-flacher Container, Quelle 1.5:1 — cover beschneidet oben
                 und unten. Die drei Gesichter liegen bei ~30% Höhe; 28% haelt
                 sie mittig im Ausschnitt. */
              imgStyle={{ objectPosition: "center 28%" }}
            />
          </div>
        )}

        {/* Unten rechts: dunkelblaues CTA-Modul */}
        {/* Das ganze Modul ist der Link: die blaue Fläche und das Klickziel sind
            deckungsgleich — vorher war nur der Textlink darin anklickbar. */}
        <a href="#kontakt" className="hc-navy">
          {/* Ersetzt die frueheren hc-navy-planes (zwei weiche Lichtflaechen):
              das Raster nimmt die Sprache der Zusammenarbeit-Section auf und
              bewegt sich, statt nur zu liegen. */}
          <NavyGrid />
          <span className="hc-navy-label">Der nächste Schritt</span>
          <span className="hc-cta">
            Projektlage klären
            <span aria-hidden="true" className="hc-cta-arrow">→</span>
          </span>
        </a>

        {/* Dwell-Spacer (nur mobil, s. globals.css): echtes Element hinter dem CTA.
            Ein padding-bottom am Grid gibt dem LETZTEN Sticky-Kind KEINEN Halt-Raum
            — der CTA rastete dadurch nie unter dem Bild ein. Dieser Spacer schafft
            den Scrollweg, ueber den der gepinnte Stapel „wie ein Magnet" haelt,
            bevor die Pins loesen und die naechste Section aufscrollt. */}
        <div className="hc-dwell" aria-hidden="true" />
      </div>

      {/* Abdunkeln, solange die Mega-Navi offen ist */}
      <span className={`hc-scrim${openMenu ? " is-open" : ""}`} aria-hidden="true" />
    </section>
  );
}
