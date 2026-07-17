# MISCHOK Website

Produktionsfähige Website der **Mischok GmbH** (Augsburg) — umgesetzt als
**Next.js (App Router) · TypeScript · Tailwind CSS**, deploybar auf **Vercel**.

Die Startseite folgt 1:1 der Design-Referenz (`design-reference/MISCHOK Home.dc.html`)
und der Handoff-Spezifikation (`design-reference/HANDOFF-CLAUDE-CODE.md`); die
Unterseite **Referenzen** basiert auf `Mischok-Website.pdf` (Sitemap + Inhalte).

## Voraussetzungen

- **Node.js ≥ 20** und npm

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build
npm run start    # Produktions-Server (nach build)
```

## Routen

| Route                  | Inhalt                                                        |
|------------------------|---------------------------------------------------------------|
| `/`                    | One-Pager mit allen Sektionen (Anker-Navigation)              |
| `/referenzen`          | Referenzen-Übersicht (Full-Screen-Hero + aufklappbare Karten) |
| `/referenzen/9-levels` | Referenz-Detailseite 9 Levels (Case Study)                    |

## Projektstruktur

```
app/
  layout.tsx          Fonts (Source Serif 4 via next/font/google, Calibre +
                      Realtime Rounded via next/font/local), Header, Metadata
  globals.css         Design-Tokens, Keyframes, responsive Regeln, reduced-motion
  page.tsx            One-Pager: alle Sektionen in Scroll-Reihenfolge
  referenzen/page.tsx Referenzen-Übersicht
  referenzen/9-levels/page.tsx  Referenz-Detailseite 9 Levels
  fonts/              Web-Fonts: Calibre (Regular/Medium/Bold) + RealtimeRounded
components/
  layout/Header.tsx   Sticky Top-Navigation als Burger (auf „/" ausgeblendet —
                      Logo & Burger sitzen im Hero-Bento)
  sections/           Eine Datei pro Sektion (HeroCeramic, PortraitBleed, Ansatz,
                      Stimme, Themen, Zusammenarbeit, Ueber, AusDerPraxis,
                      Kontakt, ArbeitenBeiMischok, Footer, ReferenzenGrid,
                      EinsatzfelderGrid) + abgelegte Hero-Prototypen (Hero,
                      HeroBoxes, HeroBento, HeroSlider, HeroImpact)
  ui/                 Geteilte Komponenten: LogoMark, CtaButton, ImageFrame,
                      PatternBg, NewsletterBar, SectionLabel, Reveal
lib/content.ts        Verbindliche Inhaltstexte (FIELDS, POINTS, ACC, TOPICS, PRAXIS,
                      REFERENZEN_INTRO, REFERENZEN, REFERENZ_9LEVELS)
public/assets/        Bilder, Icons; reale Projektfotos + assets/Redaktionel/
public/assets/Patterns/  Kubische Blau-Texturen für PatternBg (planes, bands,
                      bands-soft, room, cubes, blocks)
public/Logo/          Offizielle Wort-/Bildmarke (SVG + PNG)
public/social/        Trust-Material-Depot (README + trust-feed.json + Belege)
public/video/         Hero-Hintergrundvideo (WebM + MP4-Fallback + Poster)
design-reference/     Design-Grundlagen: COLOR-LOGIC.md (Palette/Farblogik),
                      DESIGN-CODES.md (UI/UX-Kickoff), Original-DC & Handoff
design-reference/schriftarten/  Haus-Schriften im Original (Calibre, Realtime
                      Rounded). Bewusst NICHT unter public/ — alles dort wird
                      öffentlich ausgeliefert; die lizenzierten Desktop-Fonts
                      dürfen nicht im Web verteilt werden. Für die Website
                      zählen nur die woff2 in app/fonts/ (via next/font/local).
```

## Design-Grundlagen (verbindlich)

- **Farbpalette & Farblogik** — `design-reference/COLOR-LOGIC.md` (CI-Manual):
  Navy/Grau/Weiß als Basis, vier Akzentfarben nur für Details.
- **UI/UX-Design-Codes** — `design-reference/DESIGN-CODES.md` (Kickoff-Board):
  Klarheit · Orientierung · Vertrauen · Kompetenz. Jede neue Section wird dagegen
  geprüft.

## Hero (Porzellan-/Keramikoptik)

Der finale Hero ist **`HeroCeramic`** — ein zusammenhängendes Bento-System auf
neutralem SNOW-Grund, das den Viewport exakt füllt:

- **Navigationszeile** oben: Logo-Lockup (mit Bildmarke) als Home-Link, Links in
  Sitemap-Reihenfolge, „Referenzen" trägt das Mega-Menü, rechts der
  „Erstgespräch"-Ghost-Button. Sie sitzt direkt auf dem Grund; die Kartenfläche
  erscheint erst, wenn das Mega-Menü aufklappt.
- **Headline-Modul** (Serif-H1, bündig zum Logo, unten im Modul).
- **Fünf „Szenario"-Karten** als Flex-Accordion: das aktive/gehoverte Feld klappt
  per `flex-grow` auf und zeigt seinen Detailtext.
- **Teamfoto + Navy-CTA** in der Fußzeile des Bentos.
- Einheitliche Kartenhaptik: 5 px Radius, heller Innensaum, weiche Tiefe, schmale
  Stege. Der Verlauf ist **neutral** — die Stops sind leuchtdichtegleich zum
  früheren blaustichigen Verlauf umgerechnet, die Haptik bleibt also, nur der
  Farbton fällt weg. Stellschrauben im `hc-*`-Block in `globals.css`.

Die älteren Prototypen (`Hero`, `HeroBoxes`, `HeroBento`, `HeroSlider`,
`HeroImpact`) liegen noch im Repo, werden aber nicht mehr gerendert.
`HeroImpact` hält aktuell noch die geteilten `Icon`/`FOCUS`/`NAV`-Exports.

## Icons

Fünf abstrakte **Systems-Thinking-Icons** (Outline-only, 1.5 px, `#002A5C`,
runde Enden). Jedes hat eine eigene, **bedeutungsgetriebene** Animation statt
eines Einheitsmusters — animiert werden vor allem die gestrichelten Elemente:

| # | Motiv | Bewegung |
|---|-------|----------|
| 01 | Ring + eintretender Pfeil | gestrichelter Pfeil „zieht sich auf" |
| 02 | Streckennetz | baut sich von links nach rechts auf |
| 03 | Quadrat + Zielbild | gestricheltes Zielbild driftet (passt nicht) |
| 04 | Rauten + Richtungspfeil | Rauten schieben auseinander |
| 05 | Zentrum + Strahlen | Strahlen fließen nach außen |

## Flächen & Farblogik (verbindlich)

Helle Neutrale gibt es **nur drei** — alle aus der Palette, alle exakt neutral.
Die Stufen unterscheiden sich im **Helligkeitswert, nicht im Farbton**:

| Ebene | Token | Wert |
|---|---|---|
| Grund einer abgesetzten Section | `--section` = PAPER | 237 |
| Durchgehender Seitengrund, ruhende Fläche | `--bg` = SNOW | 249 |
| Aktive/erhabene Fläche, Karten | `--card` = WHITE | 255 |

Zwei Regeln, die daran hängen:

- **Blau markiert die eine Aktion.** Vollgesättigtes `#002A5C` ist pro Screen für
  genau einen Handlungsanker reserviert. Sekundäre CTAs sind Ghost-Buttons
  (Kontur statt Fläche). Auswahl/Zustand wird über den Helligkeitswert markiert,
  nicht über den Farbton.
- **Farbfläche = Klickfläche.** Trägt ein Modul eine Aktionsfarbe, ist das ganze
  Modul das Klickziel — kein kleiner Textlink in einer grossen farbigen Fläche.

Keine neuen Grautöne erfinden. Wer eine Zwischenstufe braucht, leitet sie aus der
Palette ab (Beispiel `--line`: `rgba(165,165,165,0.45)` aus STONE).

## Sektionsstufe (Logorahmen-Cutout)

Die Klammern der Bildmarke bestehen ausschliesslich aus horizontalen und
vertikalen Zügen — **keine Schräge**. Die Sektionskante (`.sec-step`) folgt dem:
EINE rechtwinklige Stufe, die an einer Stelle hochspringt und auf beiden Ebenen
bis in den Screenrand läuft. Sie endet nie im Bild.

- Beschnitten wird die **Section selbst** (nicht ein Element davor) — dadurch
  trägt die Stufe automatisch deren Grund, auch wenn das ein Foto ist.
- `--step-x` verschiebt den Sprung, `.is-right` spiegelt die Seite. Die
  Sprungpunkte sind je Section gestreut (gebündelt in `globals.css`).
- **Nicht auf Sections mit `position: sticky`-Kindern anwenden**: `clip-path`
  erzeugt einen Containing Block. Ansatz bleibt deshalb aussen vor — dort soll
  der Übergang ohnehin nahtlos sein.

## Typografie

Drei Schriften:

- **Source Serif 4** — H1/Headlines & Zitate (`next/font/google`) → `--serif`.
- **Calibre** — Fließtext, Labels, Buttons, Navigation → `--sans` / `--mono`.
- **Realtime Rounded** — Display-/Label-Schrift, z. B. die „Szenario 0X"-Labels
  → `--realtime`.

Calibre und Realtime Rounded liegen als lokale Web-Fonts in `app/fonts/` und
werden via `next/font/local` geladen; die Originaldateien aller Haus-Schriften
liegen unter `public/schriftarten/`.

## Interaktionen

- **Top-Navigation** — sticky, **Burger auf allen Breakpoints** (Links & CTA im
  Panel), Burger-Striche in der Anmutung des „m" (`"use client"`). Auf der
  Startseite ausgeblendet: Wortmarke & Burger sitzen dort im Hero-Bento.
- **Hero (`HeroCeramic`)** — Bento-Grid; die fünf Szenario-Karten sind ein
  horizontales Flex-Accordion (Hover/Klick/Fokus klappt auf), die Icons animieren
  bedeutungsgetrieben (`"use client"`).
- **EinsatzfelderGrid** — Hover schärft die Karte; auf Touch-/No-Hover-Geräten
  sind alle Karten dauerhaft scharf (`(hover: hover)`-Erkennung, `"use client"`).
- **Ansatz** — Pin-Scroll über 300vh mit `requestAnimationFrame`, blendet 3 Punkte durch.
- **Zusammenarbeit** — horizontales Accordion mit smoothem Morph-Übergang
  (`"use client"`). Die **geschlossene Karte ist selbst das Bedienelement**
  (`role="button"`, Enter/Space) — es gibt keinen Plus-Button mehr; ein Pfeil
  unter dem Titel deutet die Bedienbarkeit an. Grund: Punktraster aus CSS
  (`.zu-grid`), Stellschrauben `--dot-gap` / `--dot-size` / `--dot-color`.
- **ReferenzenGrid** — Karten: geschlossen (Nummer/Headline/Projektlage, Bild
  unscharf) · Hover (Bild scharf) · offen (horizontale Aufteilung mit Fließtext,
  Basisinfos). Nur eine Karte offen; beim Öffnen zentriert sie sich im Viewport.
  Die 9-Levels-Karte verlinkt per „Referenz ansehen →" auf `/referenzen/9-levels`.
- **AusDerPraxis** — Trust-Section vor dem Kontaktbereich: drei kuratierte
  Teaser-Karten, die extern (neuer Tab) auf LinkedIn verweisen — kein Embed.
- **Footer** — Marke/Claim/Newsletter/CTA links, drei Linkspalten rechts; beim
  Hovern einer Spalte dimmen die übrigen Links (reines CSS). Die Newsletter-Bar
  (`"use client"`) übergibt die Anmeldung mangels Backend als vorbereitete Mail
  an `info@mischok.de`.
- **PatternBg** — dezente kubische Textur (soft-light) hinter Über- und
  Kontakt-Modul; über `next/image` optimiert, `pointer-events: none`. Die
  Komponente ist bewusst als *leiser Schmuck* ausgelegt (Default `opacity` 0.14);
  für eine tragende Fläche ist sie das falsche Werkzeug.
- **Parallaxe** — jeder Bildcontainer bekommt sie automatisch über `ImageFrame`
  (`useParallax` + `.pxf`): ein Listener + ein IntersectionObserver für die ganze
  Seite, scroll-getrieben. `parallax={false}` nur dort, wo sie schadet:
  bei `object-fit: contain` (Ansatz-Logokachel — das Motiv würde im Rahmen
  herumwandern statt einen Ausschnitt zu verschieben) und in der Bilderstrecke
  von **Über** (sie würde sich mit dem Pin-Scroll überlagern).
- **Sektionsstufe** (`.sec-step`) — rechtwinklige Stufe an den Sektionsübergängen,
  abgeleitet vom Logorahmen-Cutout (siehe unten).
- **Reveal** — Scroll-Reveal (fade + rise) via `IntersectionObserver`, im Einsatz
  bei der Kachel in „Arbeiten bei MISCHOK" und den drei Footer-Spalten
  (gestaffelt). **Achtung:** die Komponente rendert serverseitig mit
  `opacity: 0` und wird erst durch JS sichtbar — sie gehört deshalb nicht um
  Inhalte, die auch ohne JS stehen müssen.

Alle Animationen respektieren `prefers-reduced-motion: reduce`.

### Bewegung je Sektion (Home)

| Sektion | Bewegung |
|---|---|
| HeroCeramic | Bento-Kacheln steigen beim Laden auf · 2 Bilder mit Parallaxe · Icons mit Idle-Animation |
| Ansatz | Pin-Scroll über 300vh (Conic-Mittelpunkt wandert, 3 Punkte blenden durch) |
| Stimme | Vollbild-Motiv mit Parallaxe |
| Themen | Sticky-Headline · Bilder mit Parallaxe |
| Zusammenarbeit | Pin-Scroll (Karten klappen nacheinander auf) · Parallaxe · atmendes Punktraster |
| Über | Pin-Scroll (Zitat → 7 Aufnahmen nacheinander) |
| Kontakt | Ansprechpartner-Foto mit Parallaxe |
| Arbeiten bei MISCHOK | Vollbild-Motiv mit Parallaxe · Kachel mit Reveal |
| Footer | Drei Linkspalten mit gestaffeltem Reveal |

`public/video/` enthält noch das komprimierte Hero-Video (WebM ~451 KB, MP4
~659 KB, Poster) des abgelegten Video-Heros — aktuell ungenutzt.

## Scope & offene Punkte

Bewusst begrenzter Scope: **Home + 9-Levels-Referenzdetail** sollen fertig wirken —
nicht die komplette Website. Über uns, Insights und Karriere bleiben Home-Anker.

- **Kundenstimme** auf `/referenzen/9-levels` ist real, aber vor Veröffentlichung
  final mit 9 Levels freizugeben (leicht anonymisiert/gekürzt).
- **„Aus der Praxis"** verlinkt mangels konkreter Beitrags-URLs auf das
  LinkedIn-Profil von Kajetan Mischok — bei Bedarf durch echte Post-Links ersetzen.
- Themen-/Referenz-Karten nutzen Stockfotos statt projektspezifischer Bilder.
- Impressum & Datenschutz sind noch nicht als eigene Seiten umgesetzt (Footer-Text).

## Deployment (Vercel)

„Add New Project" → GitHub-Repo `wolfram-concrete/mischok-website` wählen →
Next.js-Preset wird automatisch erkannt → **Deploy**. Custom Domain später unter
**Project → Settings → Domains**.
