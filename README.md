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

> **📐 Gesamt-Regelwerk:** [`design-reference/REGELWERK.md`](design-reference/REGELWERK.md)
> bündelt alles auf einen Blick — Farben & Flächen-Leiter, Typografie/Formattypen,
> CTA-Typen, Modulkanten (`--radius` / Reiter-Winkel), Motion, Do/Don't. Das ist
> das kundenfähige Dokument dafür, **wie weitere Seiten gebaut werden.** Es ist aus
> der fertig gebauten Home abgeleitet; **Single Source of Truth im Code** ist
> `app/globals.css` → `:root` (die `tailwind.config.ts` spiegelt dieselben Werte).

**Kurz — die Kernregeln:**

- **Farben:** nur offizielle Palette; abgesetzte Flächen unterscheiden sich **nur
  über Helligkeit** (PAPER 237 / SNOW 249 / WHITE 255). Blau (`change #002A5C`)
  bleibt Logo/Navigation/der **einen Aktion** vorbehalten. Vier Akzente nur für
  Details, nie für Flächen.
- **Typografie:** Source Serif 4 (H1/H2/**Zitate**, immer 400/ungefettet) · Realtime
  Rounded (Eyebrows/Labels) · Calibre (Copy). Fettung nur für kurze Handlungs-Labels.
  Marke immer klein **„mischok"**.
- **CTA:** eine Primäraktion (Vollton/Blau), alles Weitere `.cta-ghost` (Kontur).
- **Kanten:** `--radius: 5px` an allen Außenecken (auch clip-path-Module fasen im
  Polygon); die Reiter-/Sektionsstufe selbst bleibt scharf. Zwei Ausnahmen:
  vollflächige Bild-/Zitat-Sections, die bis an den Viewport-Rand laufen
  (`#stimme`, `#themen`), laufen an den Außenecken **randlos** aus (die Fase läse
  dort als Fehler); der Über-uns-Bildcontainer (`.ue-media`) rundet seine
  Außenecken mit `clip-path: shape()` **echt** (Bogen statt 45°-Fase), Polygon
  bleibt Fallback.

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
- **Fünf „Projektlage"-Karten** als Flex-Accordion: das aktive/gehoverte Feld klappt
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

Fünf abstrakte **Systems-Thinking-Icons** (Outline-only, 1.25 px, `#002A5C`,
runde Enden). Jedes hat eine eigene, **bedeutungsgetriebene** Animation statt
eines Einheitsmusters:

| # | Motiv | Bewegung |
|---|-------|----------|
| 01 | Ring + eintretender Pfeil | gestrichelter Pfeil „zieht sich auf" |
| 02 | Gabelung + drei Körper | Linien zeichnen sich, **danach** entstehen die Körper an ihren Enden |
| 03 | Quadrat + Zielbild | gestricheltes Zielbild driftet (passt nicht) |
| 04 | Rauten + Richtungspfeil | Rauten schieben auseinander |
| 05 | Zentrum + Strahlen | Strahlen fließen nach außen |

**Linien, die sich zeichnen** (`hi-b-line`, genutzt im Hero-Icon 02 und in den
Themen-Icons) brauchen ihre **echte Pfadlänge als `--len`** am Pfad:

```jsx
<path className="hi-b-line" style={{ "--len": 10.08 } as CSSProperties} d="M10 16 L18.7 10.9" />
```

Die Länge ermittelt man einmalig mit `element.getTotalLength()` im Browser. Wer
einen `d`-Pfad ändert, **muss `--len` mitziehen** — sonst zeichnet die Linie
gestrichelt oder unvollständig. `pathLength={1}` (die naheliegende Normierung)
funktioniert hier **nicht**: das Attribut steht dann zwar im DOM, die Strichelung
bleibt aber bei 1 Nutzereinheit und alle Linien laufen sichtbar gestrichelt.

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
- **Realtime Rounded** — Display-/Label-Schrift, z. B. die „Projektlage 0X"-Labels
  → `--realtime`.

Calibre und Realtime Rounded liegen als lokale Web-Fonts in `app/fonts/` und
werden via `next/font/local` geladen; die Originaldateien aller Haus-Schriften
liegen unter `public/schriftarten/`.

## Interaktionen

> **Mobil (≤ ~819 px)** hat die Home eine eigene Choreografie (Basis Hero V2):
> Der **Hero** pinnt Navi/Headline/Foto gestaffelt (`position: sticky`), die
> Projektlagen laufen hoch (CSS Scroll-Snap, rasten unter dem Foto ein) und
> verschwinden hinter dem opaken Foto; zuletzt dockt der CTA über einen echten
> Spacer (`.hc-dwell`) bündig darunter an. Die Pin-Höhen misst `HeroCeramic` live
> (`ResizeObserver`). **Insights/Themen** wird zum Snap-Stapel (Kopf pinnt, Karten
> stapeln, Full-Bleed-Maske). **Zusammenarbeit** bleibt Akkordeon, aber entpinnt
> und tap-gesteuert (jede Karte voll scrollbar), Fotos scharf mit Fokuspunkt,
> Glas-Band navy 0.5. **Über uns** ist so verdichtet, dass der Bild-Slider mit
> im Screen liegt. Details s. CHANGELOG `[0.24.0]`.

- **Hauptnavigation (`MainNav`)** — die EINE Navi der Seite (Wortmarke, Links mit
  Referenzen-/Insights-Megamenü, „Erstgespräch"-CTA, Mobile-Burger). Läuft an zwei
  Stellen mit eigenem State: (1) als erstes Modul im Hero-Bento, (2) als
  einblendende **Reveal-Navi** im `Header`. Auf der Startseite ist der Header
  ausgeblendet und blendet sich beim **Hochscrollen** von oben ein — dann mit
  **genau derselben `MainNav`** (nicht mehr einer abweichenden Header-Navi). Der
  Megamenü-Scrim ist `position: fixed`, damit er in beiden Kontexten (Hero und
  fixer Header) korrekt deckt. Unter 900px greift der Burger.
- **Top-Navigation auf Unterseiten** — `Header` mit klassischer horizontaler
  Navigation (ab 900px, darunter Burger); die Unterseiten nutzen noch nicht
  `MainNav`. Das mobile Burger-Panel ist voll deckend (opak) und matcht den
  Kopfbalken.
- **Hero — Variante 2** (final). `HeroSwitch` rendert standardmäßig V2; das Umschalt-Widget ist ausgeblendet (`showWidget = false`). V1 und V3 sind archiviert — als `HeroCeramic`-Varianten erhalten und über `?hero=1|3` erreichbar. V2/V3 teilen die schlanke Karten-Optik (`is-slim`).
- **Hero (`HeroCeramic`)** — Bento-Grid; die fünf Projektlage-Karten sind ein
  horizontales Flex-Accordion, die Icons animieren bedeutungsgetrieben
  (`"use client"`). Desktop klappt per CSS `:hover`/`:focus-within` auf; Klick ist
  ein **Toggle** (offene Karte schließt wieder — v. a. mobil, wo es kein Hover
  gibt). Die geschlossenen „Buchrücken"-Titel werden per JS auf gleiche Höhe
  gebracht (`--hc-ftitle-h`), damit ihre Oberkanten unabhängig von der Zeilenzahl
  fluchten. Die Desktop-Hero-Navi trägt **zwei Megamenüs**: „Referenzen" und
  „Insights" (verallgemeinert über `openMenu`/das `mega`-Objekt); Insights füllt
  sich aus den Insights-Detailseiten.
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
  (gestaffelt). Sicherheitsnetz: liefert der Observer nicht, wird nach 1.5s
  trotzdem eingeblendet — Inhalt darf nie daran hängen, dass eine Animation
  startet. Dasselbe Netz hat das Zitat in **Stimme**.
- **CountUp** — Kennzahlen in „Über" zählen beim Eintreten hoch. Startwert ist
  der ENDWERT, damit im SSR-HTML die echte Zahl steht; animiert wird erst, wenn
  der Observer meldet.

Alle Animationen respektieren `prefers-reduced-motion: reduce`.

### Bewegung je Sektion (Home)

| Sektion | Bewegung |
|---|---|
| HeroCeramic | Bento-Kacheln steigen beim Laden auf · 2 Bilder mit Parallaxe · Icons mit Idle-Animation · blaues CTA-Modul mit `NavyGrid` (Punktraster baut sich als Welle auf, Linien zeichnen sich) |
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
