# Changelog

Alle nennenswerten Änderungen an der MISCHOK-Website werden hier dokumentiert.

Das Format orientiert sich an [Keep a Changelog](https://keepachangelog.com/de/1.1.0/),
die Versionierung an [Semantic Versioning](https://semver.org/lang/de/).

## [Unreleased]

_Offene Punkte:_ ungenutzte Hero-Prototypen aufräumen (`Hero`, `HeroBoxes`,
`HeroBento`, `HeroSlider`; `HeroImpact` hält aktuell noch die geteilten
Icon/FOCUS/NAV-Exports → in ein eigenes Modul auslagern); Kundenstimme auf der
9-Levels-Detailseite mit 9 Levels freigeben; „Aus der Praxis" mit echten Belegen
aus `public/social` schärfen (Attribution Julius statt Kajetan); Impressum &
Datenschutz als eigene Seiten (stehen im Footer noch als reiner Text, da die
Routen fehlen); Bildcontainer für Schritt 02 der Arbeitsweise (es fehlt belegtes
Material für WEKA Pilot Online); Sektionsstufe auch an Unterkanten (braucht
Stapelkontext, s. u.); mittlere Zusammenarbeit-Karte trägt noch ein generisches
Redaktionsfoto.

## [0.10.0] – 2026-07-17

### Behoben
- **Inhalt hing an einer Animation.** Zitat (Stimme), Footer-Spalten und die
  Kachel in „Arbeiten" blieben unsichtbar, wenn der `IntersectionObserver` nicht
  lieferte — der Text stand im DOM, wurde aber nie eingeblendet. `Reveal` und
  Stimme haben jetzt ein Sicherheitsnetz: nach 1.5s wird eingeblendet, egal was
  der Observer meldet. Lieber ohne Effekt sichtbar als mit Effekt unsichtbar.
- **Zusammenarbeit auf Mobil.** Das Glas-Panel war auf allen vier Seiten
  eingerückt und deckte die Karte komplett zu — vom Motiv blieb nur ein
  unscharfer Rahmen. Jetzt ist es ein Band an der Unterkante (`top: auto`, misst
  sich an seinem Inhalt), das Icon steht im Fluss darüber statt absolut darauf.
  Offene Karte 520 → 640px: 320px Band, **306px Bild**. Geschlossene Karte
  150 → 200px, ohne Icon — mit Icon war das Band 187px hoch und damit höher als
  die 150px-Karte, es wurde oben abgeschnitten.

### Geändert
- **Kennzahlen in „Über" zählen hoch** (neue Komponente `CountUp`). Startwert ist
  bewusst der ENDWERT, nicht 0: so steht im SSR-HTML die echte Zahl, und ohne JS
  oder bei `prefers-reduced-motion` stimmt die Aussage trotzdem. Das
  Gründungsjahr läuft ab 1990 statt ab 0 — eine Jahreszahl, die durch 0…1989
  rattert, liest sich als Unsinn.
- **Kontakt-Karte linksbündig** statt zentriert (`margin-inline: 0 auto`).
- **Verlaufs-CTAs abgelöst.** `.cta-grad` und `.cta-grad-light` sind aus allen
  aktiven Sektionen raus und laufen jetzt auf `.cta-ghost` (bzw. `.on-navy` auf
  dunklem Grund): „Karriere bei MISCHOK", „Referenz ansehen" (Referenzübersicht)
  und die CTA der 9-Levels-Seite. Der solide Navy-Button im Footer bleibt — er
  ist kein Verlauf, sondern die eine Aktion.

### Offen
- **Bewegung weiterhin nicht verifizierbar.** Der Preview-Renderer produziert
  keine Frames: `requestAnimationFrame` feuert nicht, `IntersectionObserver`
  liefert nicht, und **Transitions bleiben auf ihrem Startwert stehen** — der
  Reveal-Wrapper trägt inline `opacity: 1`, `getComputedStyle` meldet `0`.
  Jede Messung einer animierten Eigenschaft (height, flex-grow, opacity) ist
  dort wertlos; Layout lässt sich nur mit abgeschalteten Transitions messen.
  Parallaxe, Pin-Scrolls, Reveal und CountUp im echten Browser prüfen.

## [0.9.0] – 2026-07-17

### Geändert
- **Arbeiten bei MISCHOK neu aufgebaut: EIN Bildcontainer.** Das Motiv liegt
  vollflächig im Hintergrund und steigt über `--arb-rise` nach oben hinter die
  Kontakt-Karte (gemessen 114px ≈ 24% der Kartenhöhe). Der Papiergrund von
  Kontakt ist dafür keine Vollfläche mehr, sondern eine eigene Ebene, die genau
  an der Bildoberkante endet — als Section-Hintergrund würde er das Bild
  verdecken. `#kontakt` legt sich per `z-index` über `#arbeiten`. Statt des
  Blur-Panels über der halben Section schwebt rechts eine helle Kachel mit dem
  Punktraster aus „Zusammenarbeit" und Navy-Text.
- **Mega-Menü: Navizeile und Panel sind eine Fläche.** Beide trugen je einen
  eigenen Verlauf (Navi 145deg auf `#f3f3f3`, Panel 160deg auf `#f3f7fd` — blau
  getönt und damit auch ein Palettenverstoß). Zwei Verläufe können an einer
  Kante nie zusammenfallen, weil jeder in seiner eigenen Box neu startet; ein
  gemeinsamer Verlauf ist bei animierter Panelhöhe nicht möglich. Jetzt eine
  flache Fläche über das Token `--mega-surface`.
- **Bewegung vervollständigt.** Parallaxe jetzt in jedem Bildcontainer der Home
  (11 Ebenen), inklusive Ansprechpartner-Foto in Kontakt — dort war sie ohne
  Grund abgeschaltet, obwohl es ein `cover`-Ausschnitt ist. Die bislang
  ungenutzte `Reveal`-Komponente ist im Einsatz: Kachel in „Arbeiten" und die
  drei Footer-Spalten (gestaffelt).

### Behoben
- **Weisse Naht zwischen Kontakt und „Arbeiten bei MISCHOK".** Ursache waren
  zwei getrennte Bildcontainer mit demselben Motiv: beide von eigenen clip-paths
  beschnitten, der untere mit Parallaxe, der obere stillstehend. Sie können an
  der Sektionsgrenze nicht nahtlos aneinanderstossen. Das Band ist entfallen,
  das Motiv gehört jetzt ausschliesslich `#arbeiten`.
- **Blitzer links und rechts am Mega-Panel.** `.hc-nav` hatte einen
  `1px solid transparent`-Rand. Der Bezugsrahmen eines absolut positionierten
  Kindes ist die PADDING-Box — `left:0` begann also 1px innerhalb der Navikante
  und liess sie durchblitzen (gemessen: Navi 0–1485, Panel 1–1484). Ohne Rand
  fällt Padding- auf Border-Box, beide stehen jetzt auf 0–1485.
- **Auflösung der Über-Bilderstrecke.** Derselbe Fehler wie zuvor in Kontakt:
  der Container ist mit ~679×688 nahezu quadratisch, alle Aufnahmen sind
  3:2-Querformat — `cover` skaliert über die HÖHE und rendert das Bild ~1031
  CSS-Pixel breit, während `sizes="50vw"` dem Browser nur 750 nannte. Geladen
  wird jetzt 1080 statt 750. `sizes` ist gestaffelt, weil unter 991px je nach
  Breite mal die Höhe, mal die Breite bindet.
- **Zweites Bildband in „Arbeiten" entfernt** — hinter dem Blur-Panel lag eine
  unscharf gefilterte Kopie desselben Fotos (`width: 200%`) unter einer weissen
  20%-Fläche.

### Offen
- **Bewegung ist nicht verifiziert.** Der Renderer der Preview führt weder
  `requestAnimationFrame` noch `IntersectionObserver` aus (gemessen). Parallaxe,
  Pin-Scrolls und Reveal hängen an genau diesen beiden APIs — der Audit ist
  daher rein code-seitig. Im echten Browser prüfen.
- `/ueber` existiert weiterhin nicht; der CTA „Mehr über uns" läuft auf einen 404.
- Zusammenarbeit kollidiert auf flachen Fenstern (1440×700) weiterhin um 118px.
- Die Sektionsstufe von „Arbeiten" ist unsichtbar, seit der Papiergrund von
  Kontakt sie überdeckt — die Bildoberkante ist eine gerade Linie.

## [0.8.0] – 2026-07-17

### Geändert
- **Kontakt als CTA-Karte statt Vollbreiten-Block.** Bildkachel links, Inhalt
  rechts, Kontaktdaten und eine Aktion in der Fusszeile. Die Headline lief mit
  `clamp(44px,7.5vw,80px)` auf der Stufe einer Seiten-H1 und stand damit gleichauf
  mit dem Hero — jetzt 38px. Die Karte zog vorher auf die volle Sectionbreite
  (1509px), während die Inhaltsspalte darin nur 435px belegte; sie hat jetzt
  1080px Maximalbreite. Glasfläche mit `backdrop-filter: blur(20px)` in der
  Machart der Zusammenarbeit-Panels, plus Ausbuchtung nach oben links in der
  rechtwinkligen Sprache der Sektionsstufe.
- **Kontakt-CTA auf die Standard-Optik.** „Projektlage klären" läuft auf
  `.cta-ghost` wie „Alle Insights ansehen" und „Mehr über uns"; neue Variante
  `.on-navy` kippt nur die Farbwerte für den dunklen Grund. Der eingekreiste
  Pfeil davor stammte aus einer Referenz-Card und war eine Formsprache, die es
  sonst nirgends auf der Seite gibt. Zwei konkurrierende Buttons → eine Aktion;
  Telefon und E-Mail bleiben Textlinks, sie sind Daten.
- **Ansatz: ganze Case-Karte in Navy** statt nur der Logokachel. Klickfläche =
  Farbfläche. Schritt 02 zeigt bewusst noch einmal 9 Levels — für WEKA Pilot
  Online gibt es kein belegtes Projektvisual.
- **Über: Bilderstrecke auf 7 Motive** (`Mischok_2025_ma_200.jpg` an zweiter
  Stelle). Die Fortschrittsleiste sitzt jetzt links im grauen Streifen unter der
  Bildkante statt im Bild — als eigenes Grid-Item, weil das `clip-path` von
  `.ue-media` genau diesen Streifen wegschneidet. Farbwerte wie der
  Step-Indikator in Ansatz; in Weiss wäre sie auf Grau unsichtbar gewesen.
- **Zusammenarbeit: Kollision von Headline und Icon entschärft.** Headline in
  einer Grösse statt Sprung auf `clamp(24px,2.4vw,32px)` beim Öffnen;
  Panel-Minimum 300 → 360px; Copy-Zeilenabstand 1.6 → 1.45 (bewusste Ausnahme von
  der Hausregel, s. Kommentar). Gemessener Abstand Headline↔Icon am längsten
  Text: 1637×900 −71 → +14px, 1280×800 −70 → +35px. Mehr als 360px Panelbreite
  bringt nichts, weil `max-width: 38ch` die Textspalte deckelt.

### Behoben
- **Kontakt: Auflösung des Ansprechpartner-Fotos.** Der Container ist hochformat
  (~340×441), die Aufnahme querformat (3:2) — `cover` skaliert über die HÖHE und
  rendert das Bild ~661 CSS-Pixel breit, während `sizes="340px"` dem Browser 340
  nannte. Er lud eine 750er-Variante und skalierte sie auf Retina fast 2× hoch.
  `sizes` beschreibt jetzt die tatsächliche Renderbreite.
- **Doppelter React-Key** in der Case-Brücke: Schritt 01 und 02 zeigen dieselbe
  Referenz, `key={c.ref.slug}` war damit zweimal „referenz-1".
- **Grid-Autoplatzierung in Über:** `.ue-media` hatte nur `grid-column: 3` ohne
  Zeile; sobald die Fortschrittsleiste Zeile 1 belegte, rutschte das Bild in eine
  zweite Zeile (Grid 1332px statt 692px hoch). Zeile jetzt explizit.
- **Kontakt-Innenabstand auf Mobil:** feste 90px, während die globale 64px-Regel
  erst ab 900px greift — auf 375px blieben von der Karte 247px übrig.

### Entfernt
- **Zweites Bildband in Kontakt.** Dasselbe Motiv wie „Arbeiten bei MISCHOK" lag
  als eigener Container darüber. Zwei getrennte Bildcontainer können an der
  Sektionsgrenze nicht nahtlos aneinanderstossen — beide werden von clip-paths
  beschnitten, der untere läuft mit Parallaxe, der obere stand still. Übrig blieb
  eine sichtbare weisse Naht. Wenn das Motiv wieder hinter die Karte soll, muss
  es EIN Container sein, der nach oben hinter die Karte reicht.

### Offen
- **`/ueber` existiert weiterhin nicht** (Konzeption S. 28–29), der CTA „Mehr
  über uns" in der Über-Section läuft auf einen 404.
- **Zusammenarbeit auf flachen Fenstern:** bei 1440×700 bleibt eine Überlappung
  von 118px. Die Karte ist `60vh` = 420px, der Textblock allein 317px. Im
  gepinnten 100vh-Bereich stehen nach Innenabständen und Headline nur 432px zur
  Verfügung — eine höhere Karte passt dort nicht. Braucht kürzere Absätze oder
  ein kleineres Icon auf niedrigen Viewports.

## [0.7.0] – 2026-07-17

### Geändert
- **Flächen konsequent auf die offizielle Palette gezogen.** Die semantischen
  Tokens waren freihändig gesetzt und ins Warme gedriftet (`--bg: #f6f6f5`,
  `--section: #e4e3e1`, `--card: #edecea`, `--line: #d5d4d1`, `--btn: #e4e2de`) —
  neben echtem SNOW schlugen sie warm aus. Jetzt: `--bg` = SNOW, `--section` =
  PAPER, `--card` = WHITE, `--line` aus STONE abgeleitet, `--btn` = PAPER. Drei
  Sections hatten die Tokens umgangen und Grautöne fest verdrahtet
  (Zusammenarbeit `#D6D6D6`, Kontakt `#D7D7D3`, 9-Levels-Seite) — ebenfalls
  gemappt. **Alle zehn Sektionsgründe lösen jetzt auf einen Palettenwert auf.**
  Damit gilt die Flächen-Leiter: PAPER 237 (Grund) → SNOW 249 (ruhend) →
  WHITE 255 (aktiv/erhaben). Die Stufen unterscheiden sich nur im Helligkeits-,
  nicht im Farbwert.
- **Hero-Grundfläche und Keramikflächen neutral.** Der Radialverlauf ist flachem
  SNOW gewichen; der Blauschimmer der Kartenflächen (`.hc-surface`, Mega-Navi,
  Case-Karte) ist raus. Die Ersatzstops sind auf **gleiche Leuchtdichte**
  umgerechnet (249,251,255 → 251 · 238,244,252 → 243; Abweichung ≤ 0.45 %), damit
  der Helligkeitsverlauf und damit die Haptik unverändert bleiben. Inset-Lichtkante
  und navy getönte Schatten bleiben — sie tragen die Materialwirkung.
- **Farbpriorität im Header.** „Erstgespräch" und „Projektlage klären" zeigten
  beide auf `#kontakt` und trugen beide volles Navy. „Erstgespräch" ist jetzt ein
  Ghost-Button; Vollsättigung trägt nur noch die eine Aktion. Das Navy-Modul ist
  als Ganzes der Link — Klickfläche von 11.827 auf 268.610 px² (Farbfläche =
  Klickziel). Die Szenariokarten staffeln über Helligkeit (inaktiv SNOW/flach,
  aktiv WHITE/erhaben) statt über Farbe.
- **Arbeitsweise als Fortsetzung des Heros.** Conic-Grundfarbe von `#E7EEF9 →
  #F9FBFF` auf `#F9F9F9 → #FFFFFF`; die Naht kann rechnerisch nicht auffallen
  (max. 6 von 255 Helligkeitsstufen).
- **Eyebrows durchgehend Versal**, an einer gemeinsamen `.eyebrow`-Regel
  gebündelt; Laufweite 0.06em → 0.1em (Caps brauchen mehr Luft).
- **Insights umgebaut**: sticky Headline links, Kartenliste rechts (Raster
  5fr/2fr/5fr) statt horizontalem Slider. Karten mit vollflächigem Bild, Eyebrow
  links oben, Icon gross rechts oben.
- **Slider-Scrollbar und Step-Indikator feingliedriger**: 6 → 3 px bzw. 3 → 2 px,
  leiser in Ruhe, deutlicher beim Hovern.
- **Hero-Logo** mit Bildmarke (PNG statt SVG — die SVG zeigte Fragmente), +30 %.
- Kartentitel im Hero enden auf einem Punkt.

### Hinzugefügt
- **Sektionsstufe** (`.sec-step`) als Übertragung des Logorahmen-Cutouts: EINE
  rechtwinklige Stufe, die an einer Stelle hochspringt und auf beiden Ebenen bis
  in den Screenrand läuft — keine Schräge, kein Ende im Bild. Die Logoklammern
  bestehen ausschliesslich aus h/v-Zügen; die Kante folgt dem. Beschnitten wird
  die Section selbst, dadurch trägt die Stufe deren Grund (auch ein Foto).
  Variabel über `--step-x` und `.is-right`; Sprungpunkt je Section gestreut.
  **Nicht auf Sections mit `position: sticky`-Kindern anwenden** (clip-path
  erzeugt einen Containing Block) — Ansatz bleibt deshalb aussen vor.
- **Innenliegende Parallaxe für alle Bildcontainer** (`useParallax` + `.pxf`,
  eingebaut in `ImageFrame`): Wrapper 120 % hoch, wandert ±8 % der Eigenhöhe
  ≈ ±9,6 % der Containerhöhe — bleibt damit immer im Überstand, es läuft nie eine
  Kante frei. Ein Listener und ein IntersectionObserver für die ganze Seite statt
  ein rAF-Loop je Bild; scroll-getrieben, im Leerlauf läuft nichts.
  `parallax={false}` für `object-fit: contain`-Motive.
- **Stimme als vollflächiges Zitat**: Bild über die ganze Section, Zitat in Weiss
  (Serif 400), Eyebrow + Zitat fahren gestaffelt aus einer Maske ein.
- **Case-Brücke rotiert je Schritt** (Arbeitsweise): Schritt 01 → 9 Levels,
  Schritt 03 → Barely Digital. Beide Visuals sind über `trust-feed.json` belegt.
  Schritt 02 bleibt bewusst ohne Karte — für WEKA Pilot Online gibt es kein
  belegtes Material, und die `image`-Felder der Referenzen sind dafür **kein**
  Ersatz (generische Redaktionsfotos; `acc-1.jpg` hängt an Referenz 01 *und* 04).
  Die Karten liegen im Grid-Stapel, damit das Layout bei Schritt 02 nicht springt.
- **Punktraster** als Grund der Zusammenarbeit (`.zu-grid`): reines CSS statt
  Grafik, Punktfarbe aus der Palette. Das Raster steht still, eine weiche Maske
  zieht in 24 s darüber (`mask-position`, läuft auf dem Compositor) — ein
  wanderndes Raster würde beim Scrollen flimmern. Stellschrauben: `--dot-gap`,
  `--dot-size`, `--dot-color`.

### Entfernt
- **Plus-Button** der Zusammenarbeit-Karten. Er war das einzige tastaturbedienbare
  Element — die geschlossene Karte ist jetzt selbst das Bedienelement
  (`role="button"`, Enter/Space, `aria-label`), das Icon sitzt oben rechts, und
  ein Pfeil unter dem Titel deutet die Bedienbarkeit an (Schaft wächst beim
  Hovern nach rechts, rein dekorativ).
- Dekorativer `#EEEEEE`-Block in „Arbeiten bei MISCHOK" (fest auf 303×85 px
  verdrahtet, skalierte nicht, doppelte seit der Sektionsstufe deren Idee).
- Trennlinie über „Aus der Praxis" (die Stufe markiert den Übergang).
- Toter Slider-CSS (`tm-*`) und `.acc-plus`-Regeln.

### Behoben
- `#home-root > div > section { margin: 0 }` überschrieb wegen ID-Spezifität das
  negative `margin-top` der Sektionsstufe → auf `margin-left/right` reduziert.
- `#stimme` stand in einer `min-height: auto`-Liste und blieb trotz `100svh` bei
  520 px hoch → entfernt.
- `overflow: hidden` auf der Insights-Section machte sie zum Scroll-Container und
  hebelte das sticky der Headline aus → entfernt (brauchte nur der alte Slider).

## [0.6.0] – 2026-07-16

### Hinzugefügt
- **Finaler Hero in Porzellan-/Keramikoptik** (`HeroCeramic`) als zusammenhängendes
  Bento-System: Marken-Modul (Wortmarke) links, durchgehendes Bildmodul rechts mit
  Burger-Overlay, Headline-Modul, fünf „Szenario"-Karten als Flex-Accordion
  (aktives Feld klappt auf), Teamfoto + Navy-CTA. Füllt den Viewport; helle,
  leicht bläuliche Grundfläche, einheitliche Kartenhaptik (5 px Radius, heller
  Innensaum, weiche Tiefe), schmale Stege.
- **Systems-Thinking-Icons** (Outline-only, 1.5 px, `#002A5C`) mit je eigener,
  bedeutungsgetriebener Animation statt eines Einheitsmusters: Ring + eintretender
  gestrichelter Pfeil · Streckennetz, das sich von links nach rechts aufbaut ·
  Quadrat + driftendes Zielbild · auseinanderschiebende Rauten · nach außen
  fließende Strahlen. Alle `prefers-reduced-motion`-sicher.
- **Realtime Rounded** als Display-/Label-Schrift (`--font-realtime` → Token
  `--realtime`), eingesetzt für die „Szenario 0X"-Labels. Haus-Schriften als
  Originaldateien unter `public/schriftarten/`.
- **Textur-System** `PatternBg` (`components/ui/PatternBg.tsx`) + sechs kubische
  Blau-Texturen (`public/assets/Patterns/`) — dezent per `soft-light` im
  Hero-CTA-, Über- und Kontakt-Modul.
- **Newsletter-Bar** im Footer (`components/ui/NewsletterBar.tsx`): ohne Backend —
  die Anmeldung geht als vorbereitete Mail an `info@mischok.de` (Umstellung auf
  einen Newsletter-Dienst später nur im Submit-Handler).

### Geändert
- **Footer neu aufgebaut** (Harbor-Referenz): links Marke (Logo mit Bildmarke),
  Claim, Newsletter-Bar und CTA; rechts drei Linkspalten (Navigation, Referenzen,
  Kontakt); Bottom-Leiste mit LinkedIn-Firmenprofil, Copyright und Rechtlichem.
  Linklisten mit Sibling-Dimm-Hover (reines CSS).
- **Bildqualität**: `next/image` liefert mit `quality=90` statt 75 (`ImageFrame`-
  Prop + `images.qualities` in `next.config.mjs`).
- **Hero-Typografie**: Karten-Titel in Markenblau (Serif), Copy in Schwarz;
  „Szenario 0X" als Label vor jeder Karte; H1 bündig zum Logo, etwas kleiner.
- **Hero-Testvarianten aus dem Render entfernt** — der Keramik-Hero ist der
  finale Hero. `HeroImpact` bleibt vorerst als Modul erhalten, weil es die
  geteilten `Icon`/`FOCUS`/`NAV`-Exports hält.

## [0.5.0] – 2026-07-16

### Hinzugefügt
- **Design-Grundlagen dokumentiert:** offizielle Farbpalette + Farblogik aus dem
  CI-Manual (`design-reference/COLOR-LOGIC.md`) und die UI/UX-Design-Codes aus dem
  Kickoff-Board (`design-reference/DESIGN-CODES.md`) als verbindliche Leitplanken;
  Palette als CSS-Tokens (`globals.css`) + Tailwind-Farben (`tailwind.config.ts`).
- **Hero-Testvarianten** (parallel zum Vergleich, oberhalb der Startseite):
  `HeroBoxes`, `HeroBento` (CGI-Haptik), `HeroSlider` (interaktives Accordion),
  `HeroImpact` (vollflächige Bento auf Logo-Modul, „Impact"-Referenz: grotesk,
  feine Stege, Navy-Block mit Schraffur, Nummer+Icon-Felder, 2 Fotos, Stat-Modul).
- **Trust-Material-Depot** `public/social/` (README + `trust-feed.json` + Assets)
  für punktuelle, echte Belege — bewusst keine Auto-News-Section.
- Druck-Styles (`@media print`) für eine druckbare Seitenübersicht.

### Geändert
- **Navigation als Burger** auf allen Breakpoints (Links & CTA im Panel); Burger-
  Striche in der Anmutung des „m" (gleiche Strichstärke, kantige Enden).
- **Wortmarke** „mischok" im Header statt der Bildmarke.
- **Stimme-Sektion:** echtes Vortrags-Foto von Julius Mischok statt Stockbild.
- Einsatzfelder-Karten: Touch-Fix (siehe 0.4.0) unverändert übernommen.

## [0.4.0] – 2026-07-14

### Hinzugefügt
- **Referenz-Detailseite `/referenzen/9-levels`**: vollständige Case Study
  (Hero, „Auf einen Blick", Ausgangslage, Vorgehen, Qualitätssicherung, Ergebnis,
  Kundenstimme, „Was wir mitnehmen", CTA). Inhalt 1:1 aus `Mischok-Website.pdf`
  (REFERENZ 01). Ruhiger, konkreter Ton ohne Werbe-Duktus.
- **Trust-Section „Aus der Praxis"** (`AusDerPraxis`, vor dem Kontaktbereich):
  drei kuratierte Teaser-Karten (kein LinkedIn-Embed) zu MISCHOK-Themen, Autor
  Kajetan Mischok / MISCHOK, CTA „Auf LinkedIn lesen" — extern in neuem Tab.

### Geändert
- **Echte Kontaktdaten** in Kontakt-Sektion und Footer: Mischok GmbH,
  Karlstr. 12, 86150 Augsburg, Tel. `+49 821 49 81 58 81` (`tel:`-Link),
  `info@mischok.de` (`mailto:`-Link), Ansprechpartner Kajetan Mischok
  (Geschäftsführer). Sämtliche `[…]`-Platzhalter entfernt; falsche Footer-Nummer
  `+49 341…` und veraltete `kontakt@`-Adresse korrigiert.
- **Referenzübersicht:** 9-Levels-Karte verlinkt per „Referenz ansehen →" auf die
  neue Detailseite; übrige Karten ohne Detail-CTA (keine `href="#"` mehr).
- **Navigation:** Referenzen-Dropdown zeigt konkrete Projektnamen (9 Levels führt
  auf die Detailseite, übrige auf Anker der Übersicht) statt „Referenz 1–5".

### Behoben
- **Einsatzfelder-Karten auf Touch-Geräten:** ohne Hover blieben Karten 02–05
  dauerhaft unscharf/unlesbar. Auf Geräten ohne Hover werden jetzt alle Karten
  scharf dargestellt (`(hover: hover)`-Erkennung).
- **Themen-Karten** waren `href="#themen"`-Selbstanker (Klick ohne Ziel) — jetzt
  nicht-klickbare Karten (subtiler Hover-Effekt bleibt).

## [0.3.0] – 2026-07-13

### Hinzugefügt
- **Top-Navigation** (`components/layout/Header`): sticky, über dem Hero transparent
  und ab dem Scrollen mit hellem Hintergrund, Referenzen-Dropdown, Mobile-Burger.
  Menüpunkte aus der Sitemap (`Mischok-Website.pdf`).
- **Referenzen-Unterseite** (`/referenzen`): Full-Screen-Hero mit stark
  eingezoomtem Motion-Visual (Fade nach rechts) und aufklappbaren Karten —
  geschlossen (Nummer/Headline/Projektlage, Bild unscharf), Hover (Bild scharf),
  offen (horizontale Aufteilung mit Fließtext, Basisinfos, CTA). Single-Open,
  Scroll-Zentrierung beim Öffnen. Inhalte 1:1 aus dem PDF.
- Echtes MISCHOK-Logo als SVG in Hero & Footer (`public/assets/logo.svg`).
- Echte Fotos in den Einsatzfelder- und Themen-Karten.

### Geändert
- **Typografie:** Sans/Mono auf **Calibre** umgestellt (lokale Web-Fonts via
  `next/font/local`, `app/fonts/`); IBM Plex Mono entfernt. Nur noch
  **Source Serif 4 + Calibre** für alle Texte.
- **Zusammenarbeit-Accordion:** Übergang von geschlossen ↔ offen morpht jetzt
  smooth (Panel-Geometrie, wanderndes Icon, ein-/ausblendende Inhalte) statt zu springen.
- **Über** volle Breite mit 64px Content-Padding; **Kontakt**-Inhalt in einer
  Card mit Navy-Farbschema.
- Feinere Icon-Strichstärke; symmetrische CTA-Paddings; diverse Text- und
  Größenanpassungen. Hero-Logo in die Navigation verlagert.

## [0.2.0] – 2026-07-10

### Geändert
- **Hero:** Das Winkelflächen-/Lichtspalt-Motiv wurde durch ein vollflächiges
  Hintergrund-Video ersetzt (loop, stumm, autoplay, `playsInline`) mit dezentem
  Scrim für die Textlesbarkeit. Hero jetzt `min-height: 100vh`.

### Hinzugefügt
- Hero-Video als WebM (~451 KB) mit MP4-Fallback (~659 KB) und Poster-Frame
  in `public/video/`.
- Dev-Server-Startskript (`.claude/dev-server.sh`, `.claude/launch.json`).

### Performance
- Ausgangsvideo von **91 MB (4K)** auf **1080p** komprimiert
  (~451 KB WebM / ~659 KB MP4).

## [0.1.0] – 2026-07-09

### Hinzugefügt
- Erste Next.js-Umsetzung (App Router, TypeScript, Tailwind CSS) der Design-
  Component `MISCHOK Home.dc.html` als produktionsfähige One-Page-Website.
- Alle Sektionen 1:1 nach Design in Scroll-Reihenfolge: Hero, EinsatzfelderGrid,
  PortraitBleed, Ansatz (Pin-Scroll über 300vh), Stimme, Themen, Zusammenarbeit
  (horizontales Accordion), Ueber, Kontakt, ArbeitenBeiMischok, Footer.
- Geteilte UI-Komponenten: `LogoMark`, `CtaButton`, `ImageFrame`, `SectionLabel`,
  `Reveal`.
- Design-Tokens in `tailwind.config.ts`, Keyframes und responsive Regeln in
  `globals.css`; Fonts Source Serif 4 + IBM Plex Mono via `next/font/google`.
- Interaktive Teile als `"use client"`-Komponenten mit
  `requestAnimationFrame` / `IntersectionObserver`; alle respektieren
  `prefers-reduced-motion`.
- Verbindliche Inhaltstexte in `lib/content.ts` (`FIELDS`, `POINTS`, `ACC`,
  `TOPICS`); Kontakt-Platzhalter bewusst sichtbar belassen.
- Accessibility: `alt`-Texte, `aria-label` für Icon-Buttons, sichtbare
  Fokus-States.
- Bilder & Icons nach `public/assets/`, eingebunden über `next/image`.

[Unreleased]: https://github.com/wolfram-concrete/mischok-website/compare/main...HEAD
[0.5.0]: https://github.com/wolfram-concrete/mischok-website/commits/main
[0.4.0]: https://github.com/wolfram-concrete/mischok-website/commits/main
[0.3.0]: https://github.com/wolfram-concrete/mischok-website/commits/main
[0.2.0]: https://github.com/wolfram-concrete/mischok-website/commits/main
[0.1.0]: https://github.com/wolfram-concrete/mischok-website/commits/main
