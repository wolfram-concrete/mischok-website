# Changelog

Alle nennenswerten Änderungen an der mischok-Website werden hier dokumentiert.

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
Redaktionsfoto; Kontakt-Übergang Reiter→Karte (gerade Kante + weißer Blitzer an
der Nahtstelle) mobil noch offen; Über-uns-Bildqualität/Kanten-Fragmente prüfen;
CTA-Vereinheitlichung (Footer-`cta-solid` und Burger-`hc-menu-cta` sollen dieselben
Kontur-/Hover-Regeln wie die `cta-ghost`-CTAs tragen); Burger-Strichstärke gegen
die Logo-Rahmenstärke abgleichen.

## [0.27.2] – 2026-07-23

### Geändert
- **Footer kompakter.** Der Footer war unnötig hoch (großer Leerraum zwischen
  Linkspalten und Bottom-Leiste). Mittel-Gap (`.ft-bottom` margin-top) von
  bis 128px auf max. 56px, Footer-Top-Padding von max. 96px auf 64px reduziert —
  der Inhalt rückt zusammen, die Bottom-Leiste sitzt näher an den Spalten.

## [0.27.1] – 2026-07-23

### Geändert
- **`MainNav` jetzt auf ALLEN Seiten.** Die Hauptnavigation der Home ist die
  Benchmark und wird nun auch auf den Unterseiten ausgespielt: der `Header`
  rendert überall `MainNav` (statt der bisherigen klassischen Header-Navigation).
  Die alte `nav-desktop`/`nav-burger`/`nav-dropdown`-Implementierung samt `NAV`-
  Liste ist aus `Header.tsx` entfernt; die zugehörigen `.nav-*`-CSS-Regeln in
  `globals.css` sind damit ungenutzt (Aufräumen später).

## [0.27.0] – 2026-07-23

### Geändert
- **Eine Hauptnavigation statt zweier Varianten.** Die einblendende Reveal-Navi
  auf der Home war eine eigene, abweichende Navigation (Header-`nav-desktop` bzw.
  vorher Burger). Sie rendert jetzt **dieselbe `MainNav`-Komponente wie die
  Hero-Bento-Navi** — identische Links, Referenzen-/Insights-Megamenüs, CTA und
  Scrim. `MainNav` (`components/layout/MainNav.tsx`) ist aus `HeroCeramic`
  extrahiert und läuft an beiden Stellen mit eigenem State. Der Scrim ist dafür
  von `position: absolute` auf `fixed` umgestellt (deckt beide Kontexte). Die
  Unterseiten tragen weiterhin die klassische Header-Navigation.
- **Footer: unterste Abschlusslinie entfernt.** Der Copyright-/Impressum-Riegel
  hatte oben UND unten eine Linie; die untere ist raus, dafür mehr Bodenluft
  (`padding-bottom`), damit die Zeile etwas tiefer sitzt statt am Rand zu kleben.

## [0.26.1] – 2026-07-23

### Geändert
- **Reveal-/Desktop-Navigation zeigt die volle Navi statt Burger.** Der Header
  nutzte bisher auf allen Breakpoints das Burger-Icon. Ab **900px** erscheint jetzt
  die vollständige horizontale Navigation (alle Links + CTA); darunter bleibt der
  Burger. Damit blendet auf der Home beim Hochscrollen die **komplette** Navi von
  oben ein, nicht mehr nur der Burger.

### Behoben
- **Über-Bildcontainer: Ecken waren nach innen gewölbt.** Die `clip-path: shape()`
  -Rundung defaultet auf `ccw` — das ergab **konkave** (nach innen gezogene) Ecken.
  Die konvexen Außenecken tragen jetzt explizit `cw` (nur die konkave Innenecke der
  Ausbuchtung bleibt `ccw`); Radius **5px wie border-radius auf allen anderen
  Kartenmodulen**, echte Rundung nach außen.

## [0.26.0] – 2026-07-23

### Hinzugefügt
- **Insights-Megamenü in der Navi.** Der Navipunkt „Insights" öffnet jetzt — analog
  zu „Referenzen" — ein Megamenü mit den Insights-Detailseiten. `HeroCeramic`
  verallgemeinert dafür `dropOpen` → `openMenu` (`null | "ref" | "ins"`) und
  normalisiert beide Panels über ein `mega`-Objekt (Intro, Items, CTA-Ziel).
- **Text-CTA je Insights-Karte.** Unter jeder der drei Themen-Karten steht ein
  „Mehr erfahren →" auf die jeweilige Insights-Landingpage (Ziel über das neue
  `Topic.href`, interim der Sektionsanker, bis die Detailseiten stehen). Optik
  1:1 wie der „Referenz ansehen"-CTA (`.az-case-cta`): kleine, **nicht fette**
  Schrift (13.5px/500), Pfeil dahinter, Gap wandert beim Hover.

### Geändert
- **Julius-/Insights-Kanten laufen full-bleed aus.** Die vollflächigen
  Step-Sections `#stimme` (Julius-Zitat) und `#themen` (Insights) trugen an den
  Viewport-Rändern die 5px-Außenfase (`--radius`) — die las dort nicht als
  Modulkante, sondern als kleine Ecke/Fehler. Jetzt laufen alle vier Außenecken
  randlos durch; nur der Stufen-Notch bleibt scharf (Desktop, `min-width:820px`).
- **Über-uns-Bildcontainer: echtes Curving statt Fase.** Die vier Außenecken
  hatten per `clip-path: polygon()` nur einen geraden 45°-Schnitt (Polygon kann
  keine Bögen). Für Browser mit `clip-path: shape()` liegt jetzt eine echte,
  minimal gerundete Bogen-Variante drüber (`--ue-round`), das Polygon bleibt als
  Fallback. Die Ausbuchtung bleibt in ihrer rechtwinkligen Sprache erhalten,
  nur dezent verschliffen.

## [0.25.0] – 2026-07-23

### Geändert (Desktop-Hero)
- **Projektlagen-Titel fluchten oben.** Die fünf „Buchrücken"-Titel sitzen unten
  am Kartenboden; da ihre Zeilenzahl breitenabhängig ist (2–3, auf schmalen
  Desktops mehr), sprang die Oberkante. `HeroCeramic` misst jetzt den höchsten
  Titel und gleicht alle über `--hc-ftitle-h` an (oben ausgerichtet), pro Breite
  neu (ResizeObserver). Aufgezogen fällt die Reserve weg.
- **Icons in den Projektlagen +25 % und tiefer.** Größer (26→32 … 61→76px) und
  +30 % Abstand zur „Projektlage 0X"-Zeile. Die Linienstärke wird **nicht**
  mitskaliert: `stroke-width` 1.25 → 1.0 (= ×0.8, Kehrwert der Vergrößerung) hält
  den gerenderten Strich exakt konstant.
- **Megamenü: Referenz-Spalten nach rechts.** Der Referenz-Block rückt per
  `margin-left:auto` an den blauen Referenz-Kasten — unter den „Referenzen"-
  Navipunkt, kurzer Mausweg statt weitem Sprung nach links.

### Geändert (Desktop-Zusammenarbeit)
- **Text-/Glaskarte breiter, dunkler Layer raus.** Das Glaspanel der offenen
  Karte reicht jetzt bis etwa zur Kartenmitte (Copy-max-width 38 → 56ch), damit
  Headline 1–2-zeilig und die Copy in wenigen Zeilen läuft statt in einer schmalen
  Säule. Der dunkle Rechts-Verlauf hinter der Glaskarte ist entfallen (Foto bleibt
  klar). Das Desktop-Glas wird **nicht blau** umgefärbt — es trägt nur einen ganz
  dezenten **neutralen Grau-Layer** (`rgba(28,32,38,0.22)`), damit sich Icon und
  weiße Typo minimal besser vom Foto trennen (so wenig Abdunklung wie möglich).
  Nur das mobile Band ist navy-getönt.

### Behoben
- **Erste Projektlagen-Karte stand höher (Desktop).** Die per Default offene
  Karte (`active=0`) bekam über die Basisregel `.hc-field.is-open .hc-fdetail`
  ein `margin-top` (~14px), das ihren Titel gegenüber den anderen nach oben
  drückte. Slim klappt nur über `:hover` auf — deshalb das Detail-`margin-top` im
  Ruhezustand hart auf 0 (erst im aufgezogenen Feld gesetzt). Alle Titel fluchten
  jetzt exakt.
- **Projektlagen-Karte schließt wieder (mobil).** Eine geöffnete Karte ließ sich
  per Klick nicht mehr schließen. Klick ist jetzt ein Toggle (`-1` = keine offen);
  `onMouseEnter`/`onFocus` setzen nicht mehr `active` (sonst querte auf Touch das
  vorgelagerte mouseenter/focus die Karte sofort wieder). Desktop klappt weiter
  per CSS `:hover`/`:focus-within` auf.

## [0.24.0] – 2026-07-22

Mobile-Optimierung der Home, Section für Section (Basis: Hero-Variante V2).

### Mobile
- **Hero-Snap.** Beim Scrollen bleiben Navi, Headline und Foto gestaffelt gepinnt
  (`position: sticky`), die fünf Projektlagen-Karten laufen hoch und verschwinden
  hinter dem opaken Foto; zuletzt dockt der CTA bündig unter dem Bild an und hält
  („Magnet"). Zwei nicht-triviale Ursachen dahinter behoben: die Pin-Höhen werden
  jetzt in `HeroCeramic` live gemessen (`ResizeObserver`) und als CSS-Variablen
  gesetzt (feste Pixel stimmten nur bei genau 240 px Headline-Umbruch); und der
  Dwell-Halt liegt als echtes Spacer-Element (`.hc-dwell`) hinter dem CTA statt als
  `padding-bottom` — Padding gibt dem letzten Sticky-Kind keinen Halte-Raum,
  dadurch rastete der CTA nie ein.
- **Hero: Projektlagen rasten magnetisch ein.** CSS Scroll-Snap — jede Karte dockt
  mit der Oberkante bündig unter dem Foto an, dann die nächste (Anker-Offset im
  `scroll-margin` gegengerechnet).
- **Insights/Themen als Snap-Stapel.** Der Kopf (Label · Headline · Lead · CTA)
  pinnt als Einheit, die drei Format-Karten stapeln sich darunter und tuckern
  hinter den Kopf; danach scrollt Zusammenarbeit auf. Kopf-Grund als Full-Bleed
  (auch nach oben über die Pin-Marke), damit keine Karte an den Rändern oder über
  der Eyebrow durchblitzt.
- **Zusammenarbeit.** Akkordeon bleibt (nur die aktive Karte groß), aber
  entpinnt + tap-gesteuert — so ist jede geöffnete Karte voll scrollbar (der Pin
  clippte vorher die mittlere). Dunkle Bild-Overlays raus, Foto scharf mit
  Fokuspunkt je Motiv, Glas-Band navy-getönt (0.5) und einheitlich; ins Raster
  gerückt.
- **Über uns.** Ins Raster (Seiten-Gutter), Kennzahlen 2010/35+/Augsburg kleiner
  (passen ohne an die Kante zu stoßen), Modul in den Viewport verdichtet, sodass
  der Bild-Slider samt Fortschrittsleiste mitsichtbar ist; Ausbuchtung am
  Bildcontainer gefast.
- **Stimme.** Hintergrundbild verschlankt (6000² → 2400 px), Fokuspunkt auf
  Julius; der Reiter-Winkel-Notch zeigt via Überlappung den getönten Grund der
  Section darüber (statt hellerem Body-Snow); Reiter-/Außenecken am `--radius`
  gefast.
- **Medien/Trust** mittelachsig zentriert, Abstand nach oben verkleinert.
- **Kontakt.** Telefon und E-Mail gefettet; Kajetan-Bild ~20 % flacher.
- **Burger-Menü** voll deckend (opak) statt durchscheinend — matcht den Kopfbalken.
- **Arbeiten bei mischok.** Hintergrundbild-Quelle verschlankt (5000 px/2 MB →
  2400 px/0,5 MB), lädt jetzt zuverlässig.

### Behoben
- **Sticky-Einrasten braucht ein echtes Element.** Ein `position: sticky`-Element,
  das letztes Kind seines Containers ist, rastet nicht ein, wenn der Halte-Weg nur
  als `padding-bottom` liegt (Padding zählt nicht als Sticky-Range). Gilt für den
  Hero-CTA — jetzt via Spacer gelöst.

## [0.23.0] – 2026-07-22

### Geändert
- **Logo global auf die Claim-Version.** Footer, Header (Scroll-Nav) und
  HeroImpact nutzen jetzt `…-neu-claim` (mischok · better. software_) wie schon
  der Home-Header — das Logo ist überall dasselbe.
- **Kontakt-Links interaktiver.** Der `border-left`-Strich der Kontaktkachel ist
  entfallen; Telefon und E-Mail tragen jetzt einen vorangestellten Pfeil (→,
  wandert beim Hover), die Adresse rückt bündig auf die Textkante ein. Signalisiert
  klarer, dass Telefon/E-Mail Aktionen (tel:/mailto:) sind.

### Mobile
- **Über-Kennzahlen in einer Zeile.** 2010 / 35+ / Augsburg stehen mobil in drei
  festen Spalten statt umzubrechen (kleinere Werte, engerer Abstand).
- **Keine schräge sec-step-Kante mehr.** Der gestufte Logorahmen-Absatz
  (Stimme/Themen/Kontakt/Arbeiten) las auf schmalen Screens als verkantet —
  mobil jetzt gerade (`clip-path: none`; `.is-right` explizit mit abgedeckt, da
  spezifischer).
- **Ansatz bleibt der Slider.** Die frühere mobile Auflösung (die die Punkte
  übereinanderlegte) ist zurückgenommen — Ansatz ist wieder die Pin-Scroll-
  Slider-Section.
- **Hero-CTA** mobil auf Inhaltshöhe (statt Desktop-min-height); **Ansatz-Case-
  Karte** näher an den Copy-Text gerückt.

## [0.22.0] – 2026-07-22

### Geändert
- **Hero final: Variante 2.** V2 ist der Default und wird ausgeliefert. Das
  V1·V2·V3-Umschalt-Widget ist **ausgeblendet** (`showWidget = false`) — wir
  verfolgen nur noch V2. V1 und V3 sind **nicht gelöscht, sondern archiviert**:
  weiterhin als `HeroCeramic`-Varianten vorhanden und über `?hero=1` bzw.
  `?hero=3` erreichbar.
- **Mobile-Optimierung gestartet — Pin-Scroll-Sections werden mobil aufgelöst.**
  Erste Section: **Ansatz**. Am Desktop 300vh mit sticky Innencontainer und
  scroll-gesteuerter Überblendung der drei Punkte; mobil (`max-width: 819px`)
  jetzt eine normale, gestapelte Section — Innencontainer statisch, alle drei
  Punkte sichtbar untereinander, eine Referenzkarte. Höhe dadurch von ~2440px
  auf ~760px. Über und Zusammenarbeit folgen nach demselben Muster.

## [0.21.1] – 2026-07-22

### Geändert
- **Hero-Bild oben rechts schärfer.** Qualitätsstufe des Motivs von 90 auf 95
  angehoben (geringere Kompression, sichtbar in Flächen wie Hemd/Wand) und
  `sizes` 50vw → 55vw als Reserve, damit auf breiteren Desktops nie eine zu
  kleine Stufe geladen wird. `images.qualities` in `next.config.mjs` um 95
  ergänzt (Next 15 verlangt die Liste der zulässigen Qualitätsstufen).

## [0.21.0] – 2026-07-22

### Geändert
- **Kontakt-Karte im echten CI-Blau (Milchglas).** Statt einer zu schwachen,
  halbtransparenten Fuellung (die den Hintergrund durchscheinen liess und das
  Blau auswusch) liegt jetzt `--change` (#002a5c, Markenblau) mit hoher Deckkraft
  plus `backdrop-blur` auf der Karte — die Farbe ist der Hauptton, die Rest-
  Transparenz laesst das Foto als Milchglas durchscheinen. Reiter und
  Kartenkoerper nutzen exakt denselben Wert (kein Multiply, das die Karte vorher
  unter #002a5c abgedunkelt hatte).
- **Einheitliche Modul-Eckenrundung als globale Regel.** Neu `--radius: 5px` in
  `:root`. Die eckigen Module mit `clip-path` (Sektionsstufe `.sec-step` auf
  Stimme/Themen/Kontakt/Arbeiten sowie die Ausbuchtung `.ue-media`) hatten bisher
  scharfe Ecken, weil `clip-path` jeden `border-radius` ueberschreibt. Ihre
  vier Aussen-Ecken sind jetzt direkt im Polygon am `--radius` gefast — die Stufe
  bzw. Ausbuchtung bleibt scharf (die gewollte Kantigkeit), die marginale
  Rundung ist aber ueberall identisch.

## [0.20.1] – 2026-07-22

### Geändert
- **Hero-Umschalter (V1·V2·V3) jetzt auch in Produktion sichtbar** — damit die
  Varianten auf der Vercel-Seite direkt durchgeklickt werden können (vorher nur
  außerhalb von Produktion bzw. per `?hero=`). Bewusst für die Review-Phase; vor
  dem Launch wieder ausbauen (`showWidget` in `HeroSwitch` gaten oder das Widget
  entfernen). Default bleibt V1.

## [0.20.0] – 2026-07-22

### Hinzugefügt
- **Zwei umschaltbare Hero-Varianten (V2, V3) plus Preview-Umschalter.** Neu
  `HeroSwitch`: rendert `HeroCeramic` in Variante 1, 2 oder 3 und blendet in der
  Preview ein kleines Widget (V1·V2·V3) unten links ein. Default bleibt V1 —
  am Live-Stand ändert sich ohne Auswahl nichts. Die Wahl merkt sich
  `localStorage`; `?hero=2|3` erzwingt eine Variante auch dort, wo das Widget
  nicht sichtbar ist (Produktions-Build). Das Widget selbst wird nur außerhalb
  von Produktion gerendert.
  - **V2** — ruhiger: Foto oben rechts dominiert (spannt drei Zeilen), die fünf
    Projektlagen liegen als schmale Kacheln, das untere linke Foto entfällt, das
    CTA ist ein kurzer Balken.
  - **V3** — saubere Zeilen-Ordnung: Zeile 1 (Headline + Bild) am prominentesten,
    die Projektlagen-Zeile flacher, unten links ein Foto (auf zwei Kartenbreiten,
    dafür ein 10-Spalten-Raster) und rechts das kleine CTA.
- **`variant`-Prop an `HeroCeramic`** (1|2|3); V2/V3 teilen sich die schlanke
  Karten-Optik (`is-slim`), das Bento-Raster kommt je Variante aus `is-v2`/`is-v3`.

### Geändert
- **Kopf-Logo mit Claim.** Header nutzt jetzt `…-neu-claim.png`
  („mischok · better. software_"); `alt`/`aria` entsprechend erweitert.
- **Hero-Bild oben rechts:** neues Motiv `Mischok_2023_ma_406.jpg` mit Fokus auf
  Kajetan Mischok (`object-position: 62% 35%`). **Bildqualität behoben:** das
  `sizes`-Attribut sagte `40vw`, der Container ist aber ~50vw (696px) breit — der
  Browser lud die 640px-Stufe und skalierte hoch (weich, auf Retina stärker).
  Jetzt `50vw` → 828px bei 1x, 1920px bei 2x.
- **Unterer Bildcontainer (V3):** Gründerfoto `Mischok_2025_ma_216.jpg`, Fokus
  auf Gesichtshöhe (`center 28%`), Breite auf zwei Projektlagenkarten begrenzt.
- **Karten-Interaktion (V2/V3):** Hover zieht eine Kachel über ~zwei Spalten auf,
  die anderen stauchen sich; die aufgezogene Karte wird **weiß** hervorgehoben.
  Nummer („Projektlage 0X") bleibt auf allen Kacheln sichtbar (bricht bei Bedarf
  zweizeilig um). Headline über der Copy, dicht gesetzt. Icons in den schlanken
  Kacheln 20 % kleiner. Kopfzeile: V2 Icon links unter der Nummer, V3 Icon oben
  rechts in der Ecke.

## [0.19.0] – 2026-07-17

### Geändert
- **Die Medienleiste ist ein zweispaltiger Block rechts** statt einer
  durchlaufenden Reihe über die volle Breite. Sie übernimmt dafür das Raster der
  Über-Section (`5fr 1fr 6fr`) und sitzt in Spalte 3 — dadurch ist sie **per
  Konstruktion** linksbündig mit deren Bildcontainer (gemessen: beide bei
  742.5px, Versatz 0) und füllt die graue Lücke, die dort sonst leer blieb.
  Kein geschätzter Prozentwert, der beim nächsten Layoutwechsel ausschert.
  Der Umbruchpunkt ist **900px** und kein freier Wert: erst ab da greift
  `#home-root > div > section { padding: 0 64px }` für beide Sections, und erst
  dann sind ihre Inhaltsboxen deckungsgleich. Darunter bleibt alles wie gehabt
  (Block, umbrechende Reihe).

### Hinzugefügt
- **Die Logos der Fachöffentlichkeit sind verlinkt** (`Medien`) — 10 von 12, je
  auf die Seite beim Medium, die den Beleg trägt (Speaker-Profil, Autorenseite
  oder den Artikel selbst).
  **Nicht** von der alten mischok.de übernommen: dort sind diese Logos reine
  `<img>` ohne `<a>`, es gab nichts auszulesen. Die Ziele stammen aus
  `public/social/trust-feed.json` bzw. sind einzeln gegengeprüft — HTTP 200 und
  der Name „Mischok" nachweislich auf der Zielseite.
  Bewusst **ohne** Link bleiben **TestCon** (auf `testcon.lt/speakers/` kommt
  „Mischok" nicht vor) und **IT-S NOW** (keine erreichbare belegende Seite
  gefunden). Ein Link dorthin wäre eine Behauptung ohne Beleg.
  JAX und W-JAX zeigen auf dieselbe Seite — jax.de trägt beide Marken.
- **`NavyGrid`** — Rasterpunkte als Vektor auf dem blauen CTA-Modul im Hero.
  Die Punkte sind **Rechtecke, keine Kreise** — rechtwinklig wie der Logorahmen.
  Proportion und Ausmass sind aus der Bildmarke abgeleitet, nicht geschätzt: die
  beiden Klammern in `MISCHOK_LOGO_L_POS_RGB-neu.svg` spannen 258.6 × 220.1 auf,
  daraus das Seitenverhältnis 1.175 (liegend, nicht quadratisch). Die Fläche
  entspricht der der ursprünglichen Kreise (r = 1.1), damit das Raster gleich
  schwer wiegt → 2.11 × 1.8. Gemessen gerendert: Verhältnis 1.172 (Abweichung
  0.003 aus der Rundung).
  Nimmt das Raster der Zusammenarbeit (`.zu-grid`) auf, aber als SVG: 162 Punkte
  blenden in einer diagonalen Welle ein, zwei Linien laufen den Rasterachsen
  entlang und zeichnen sich. Maske rechts kräftig / links schwach, weil links
  der CTA-Text steht. `prefers-reduced-motion` → statisch, aber vollständig.

- **Auch das Raster der Zusammenarbeit (`.zu-grid`) besteht jetzt aus
  Rechtecken statt Kreisen** — dieselbe Logik wie im Hero-CTA. Dafür ist der
  `radial-gradient` durch eine gekachelte SVG-Data-URI ersetzt: ein Farbverlauf
  kann kein Rechteck beschneiden (er läuft nur entlang einer Achse), die
  Schnittmenge zweier Gradienten bräuchte `mask-composite: intersect` und das
  beisst sich mit der Maske, die hier schon den weichen Rand macht. Gemessen per
  SVG→Canvas: Füllgrad der Bounding-Box 1.0 (Rechteck, nicht Kreis mit 0.79),
  Verhältnis 1.18, Fläche 3.83px² gegen 3.80 der früheren Kreise.

### Entfernt
- **`.hc-navy-planes`** — die zwei weichen Lichtflächen im Hero-CTA sind durch
  `NavyGrid` ersetzt; die Regeln waren danach tot und sind raus.

### Bekannt
- `public/social/trust-feed.json` nennt für die Hackerkiste
  `/speaker-hackerkiste-2025/` — die Seite ist inzwischen **404**. Die Medien-
  leiste verlinkt deshalb die Startseite (die mischok weiterhin führt). Der
  Depot-Eintrag ist nicht angefasst, da `AusDerPraxis` derzeit nicht gerendert
  wird — beim Wiedereinhängen ist die URL zu erneuern.

## [0.18.0] – 2026-07-17

### Behoben
- **Die sich zeichnenden Icon-Linien liefen gestrichelt statt durchgezogen.**
  `.hi-b-line` setzte `stroke-dasharray: 1` und verliess sich darauf, dass
  `pathLength={1}` am Pfad die Länge auf 1 normiert — ein Strich von 1 hätte
  dann den ganzen Pfad gedeckt. Die Normierung griff nicht: der Strich blieb
  1 Nutzereinheit lang, ein 6 Einheiten langer Pfad wurde also als 3 Striche
  mit 3 Lücken gezeichnet. Betroffen waren Hero-Icon 02 **und alle
  Themen-Icons**.
  Jetzt trägt jeder Pfad seine **echte Länge als `--len`** (per
  `getTotalLength()` ermittelt), `pathLength` ist raus. Gegengeprüft über
  SVG→Canvas→Pixelzählung: vorher 4 Striche auf dem Stamm, jetzt 1
  durchgezogene Linie.

### Geändert
- **Hero-Icon 02 (Gabelung) neu aufgebaut.** Die Äste enden jetzt bei x=18.7,
  die Körper stehen bei x=24.5 — die Lücke ist Absicht. Vorher stiessen die Äste
  fast auf die Körper, was zusammen mit der kaputten Strichelung wie eine
  gefiederte Pfeilspitze aussah.
- **Reihenfolge der Bewegung:** erst zeichnen die Linien vollständig, **dann**
  entstehen die Körper an ihren Enden. Dafür `hi-b-pop-seq` (blendet ab 48% des
  Zyklus ein) statt `hi-b-pop` (ab 6%). Eigene Keyframes statt `animationDelay`,
  weil ein Delay von ~2.5s das Ausblenden bei 86% in den nächsten Durchlauf
  geschoben hätte.
- **„Szenario 0X" heisst jetzt „Projektlage 0X"** auf den Hero-Karten
  (`HeroCeramic`, `HeroImpact`).

## [0.17.0] – 2026-07-17

### Geändert
- **Icons der Insights-Karten 1.3x groesser, Strich unveraendert fein.**
  `.in-icon` 44/4.2vw/66 -> 57/5.45vw/86. Weil die Strichstaerke im viewBox
  (0 0 32 32) in Viewport-Einheiten steht, waere sie mitgewachsen; deshalb
  `strokeWidth` in `Themen.tsx` gegengerechnet: 1.25 -> 0.96 (= 1.25/1.3).
  Gemessen bei 1500px Viewport: Icon 63px -> 81.8px, gerenderter Strich
  2.46px -> 2.45px.
- **Schreibweise der Marke: durchgängig klein — „mischok".** Damit ist die
  Vereinheitlichung auf Versal (0.16.0) bewusst zurückgenommen. Die Konzeption
  schreibt zwar 68× MISCHOK und 0× klein, aber die Marke folgt der
  Logoschreibweise; die Entscheidung liegt beim Auftraggeber und wiegt schwerer
  als der Textbefund. 62 Stellen in Copy, `alt`/`aria`-Texten, Metadaten und
  `lib/content.ts`.
  Nicht betroffen: der **Nachname** (Kajetan/Julius/Virgil Mischok) und die
  **Firmierung** (Mischok GmbH) — beide bleiben im Titelfall. Dateinamen wie
  `MISCHOK_LOGO_L_POS_RGB-neu.svg` ebenfalls unverändert.
- **Firmierung vereinheitlicht:** die Metadaten (`app/layout.tsx`,
  `app/referenzen/page.tsx`) schrieben „MISCHOK GmbH", Footer und Kontakt
  „Mischok GmbH". Jetzt überall „Mischok GmbH". Welche Fassung im
  Handelsregister steht, ist von hier aus nicht prüfbar — der sichtbare Text
  der Seite gibt den Ausschlag.
- **Zeilenabstand im Fließtext auf einen Token.** Neu `--lh-copy: 1.5` in
  `:root`; 12 CSS-Regeln und 17 Inline-Stellen hängen jetzt daran. Vorher lagen
  die Werte verstreut zwischen 1.45 und 1.75, was von Section zu Section
  unterschiedlich luftig las. Ausgenommen bleiben Headlines (eigene, engere
  Werte) und `.acc-copy` in der Zusammenarbeit: die 1.45 dort sind kein
  Stilwert, sondern halten den Text aus dem Icon heraus.
- **Feinere Icon-Strichstärke:** 1.5 → 1.25 in `HeroImpact`, `Zusammenarbeit`
  und `Themen`. Der Hinweispfeil der Zusammenarbeit bleibt bei 1.5 — er ist
  UI-Element, kein Icon.

### Behoben
- **Icon Szenario 02 (`venn`) neu gezeichnet.** Es hatte zwei Kreise und ein
  Quadrat als Endkörper — der mittlere Kreis war vom oberen nicht zu
  unterscheiden. Außerdem lief eine Waagerechte fast deckungsgleich neben den
  Diagonalen, und die untere Linie stieß exakt auf die Ecke des Quadrats und
  verschmolz damit. Jetzt: ein Stamm, drei Äste mit ~33° Abstand aus einem
  Knoten, mit sichtbarer Lücke vor drei unterscheidbaren Körpern (Kreis,
  Dreieck, Quadrat).

## [0.16.0] – 2026-07-17

### Hinzugefügt
- **`HeadlineRise`** — die Headlines fahren beim Eintreten von unten ein,
  beschnitten von einer Maske. Verallgemeinert den Auftritt, den bisher nur das
  Zitat in „Stimme" hatte. Im Einsatz auf sechs Headlines: Arbeitsweise,
  Insights, Zusammenarbeit, Über, Kontakt, Arbeiten (dort gestaffelt hinter dem
  Kachel-Reveal, sonst laufen zwei Bewegungen gegeneinander).
  Sicherheitsnetz wie in `Reveal`: nach 1.5s wird unabhängig vom Observer
  eingeblendet — eine Headline ist Inhalt.
  `.hl-mask` trägt `padding-bottom: .14em` mit ausgleichendem negativem
  `margin`: die Maskenbox ist die Zeilenbox, und bei `line-height` 1.04–1.08
  hätte `overflow: hidden` das „g" in „wichtig" abgeschnitten.
  **Nicht** auf den Karten-Titeln von Arbeitsweise und Zusammenarbeit — die
  wechseln beim Scrollen, ein einmaliger Auftritt wäre dort falsch.

### Geändert
- **Zusammenarbeit-Headline als Zweizeiler** mit Umbruch hinter
  „Zusammenarbeit" und `max-width: 24ch`, damit sie nicht über die volle
  Gridbreite läuft (gemessen 762px statt voll).
- **Interpunktion der Headlines vereinheitlicht.** Die Regel stand implizit
  schon im Code, war aber nicht durchgezogen:

| Typ | Beispiel | Ende |
|---|---|---|
| Aussagesatz | „Wo MISCHOK konkret ansetzt." | Punkt |
| Frage | „Retten oder Reimplementieren?" | Fragezeichen |
| Name / Label | „Über MISCHOK", „STEPS" | kein Zeichen |

  Punkt ergänzt bei: Arbeitsweise-, Insights- und Zusammenarbeit-Headline sowie
  den 3 Schritt-Titeln und den 3 Prinzipien-Titeln. Ohne Punkt bleiben „Über
  MISCHOK" und „Arbeiten bei MISCHOK" — das sind Namen, keine Sätze.
  Die Konzeption ist an dieser Stelle selbst uneinheitlich (nur „Der nächste
  Schritt ist ein Gespräch." trägt dort einen Punkt); die Regel oben ist die
  Hausentscheidung.

## [0.15.0] – 2026-07-17

### Behoben
- **Schreibweise „MISCHOK" vereinheitlicht.** Zwei Headlines standen klein
  („Wo mischok konkret ansetzt", „Über mischok") — beide stehen in der
  Konzeption wörtlich **versal**. Die Kleinschreibung war eine Abweichung von
  der Vorlage, keine Designentscheidung. Die Kleinschreibung der Wortmarke ist
  Logotypografie und keine Schreibregel für Fließtext.
- **Alt-Text in Kontakt korrigiert:** dort stand „MISCHOK GmbH", zwei Zeilen
  weiter im sichtbaren Text „Mischok GmbH". Jetzt beides „Mischok GmbH".

### Regel (belegt aus der Konzeption, 61.500 Zeichen)
| Fall | Schreibweise | Vorkommen |
|---|---|---|
| Die Marke / das Unternehmen | **MISCHOK** | 68× |
| Nachname | **Mischok** | Julius / Kajetan / Virgil |
| Kundenzitate | „Mit Mischok …" | wörtlich, unverändert |
| Kleingeschrieben | — | **0×** |

### Offen
- **Firmierung unklar.** Die Konzeption schreibt „MISCHOK GmbH" (4×), die
  bestehende mischok.de „Mischok GmbH". Impressum, Footer und Kontaktkarte
  führen aktuell „Mischok GmbH" (Stand der Live-Seite). Welche Fassung im
  Handelsregister steht, ist von hier nicht prüfbar — das ist eine rechtliche,
  keine gestalterische Frage.

## [0.14.2] – 2026-07-17

### Geändert
- **Medien-Leiste auf denselben Grund wie „Über"** (PAPER statt SNOW). Sie stand
  als hellere Bank unter den Logos; gemessen: Über `rgb(237,237,237)`, Leiste
  `rgb(249,249,249)`.
- **Logos freigestellt.** Sie kamen mit eingebackenem, deckendem Hintergrund —
  meist SNOW, DevOpsCon auf Weiss, IT-S NOW auf `(251,254,255)`. Auf PAPER hätte
  jedes als heller Kasten gestanden. Der Grund ist jetzt per Alpha entfernt
  (enge Toleranz, damit helle Flächen *innerhalb* der Logos bleiben).
  Ein minimaler Kantensaum aus der ursprünglichen Glättung bleibt, ist bei 32px
  Anzeigehöhe aber nicht zu sehen.

## [0.14.1] – 2026-07-17

### Geändert
- **Harte Kante in der Arbeitsweise wiederhergestellt.** Der Kegelverlauf läuft
  wieder in einem Zug von SNOW (0deg) ins Markenblau (360deg) — an der 0/360-
  Achse treffen beide hart aufeinander und ziehen eine scharfe Senkrechte vom
  Verlaufszentrum nach oben.
  Ich hatte sie in 0.13.0 als Fehler behandelt und bei 180deg weggespiegelt.
  Sie war aber ein tragendes Gestaltungselement — nur in SNOW→WEISS (6
  Helligkeitswerte) unsichtbar und deshalb wie ein Artefakt aussehend. Mit dem
  Blau ist sie sichtbar und gehört zur rechtwinkligen Sprache des Logorahmens.
  Der Kommentar im Code sagt das jetzt, damit sie nicht wieder „geglättet" wird.

## [0.14.0] – 2026-07-17

### Hinzugefügt
- **Neue Sektion „Sie kennen unsere Experten aus"** (`Medien`) — zwölf Fachmedien
  und Konferenzen, direkt über dem Kontakt-Modul: der letzte Beleg vor der
  Aufforderung. Die Marken stehen so bereits auf der bestehenden mischok.de; es
  ist kein neuer Anspruch, sondern ein vorhandener, der auf der neuen Home
  fehlte.
  Enthalten: Informatik Aktuell, JAVAPRO, JAX, W-JAX, JavaLand, JavaFORUM
  Stuttgart, DevOpsCon, CODE DAYS, TestCon, IT-S NOW, IT Security Summit,
  Hackerkiste Augsburg.

### Konstruktionshinweise
- **Die Logos lagen als SVG mit eingebettetem Rasterbild vor** — zusammen
  **941 KB**, einzelne bis 413 KB (JavaFORUM) und 244 KB (CODE DAYS). So
  eingebunden wäre die Leiste schwerer gewesen als der halbe Rest der Seite.
  Sie sind auf Anzeigegröße gerendert und auf ihren Inhalt beschnitten:
  jetzt **~380 KB** für alle zwölf (`public/social/medien/`).
- **Entsättigung getestet und verworfen.** Eine Graustufen-Logoleiste wäre näher
  an „reduzierte Farbwelt" — aber das CODE-DAYS-Logo ist eine hellgrüne Kontur
  ohne dunklen Anteil und verschwindet in Graustufen praktisch. Fremdmarken
  dürfen zudem nicht umgefärbt werden. Zurückgenommen wird deshalb über die
  **Größe**, nicht über die Farbe.
- `#medien` steht in der `min-height: auto`-Liste. Ohne das hätte die globale
  100vh-Regel die Leiste auf volle Viewport-Höhe aufgeblasen (gemessen 950px);
  jetzt 331px.

### Offen
- **Die Magazin-Cover fehlen** (Java Magazin, iX, entwickler, jaxmagazine). Die
  bestehende Seite führt sie als Ausgaben-Titelbilder — in einer Logoleiste sind
  sie bei 32px unlesbar, und Logos dieser Titel liegen dort nicht vor. Damit
  fehlen ausgerechnet die bekanntesten Namen.
- **Die Kundenlogo-Wand fehlt weiterhin** (Allianz, Audi, Merck, Continental,
  HiPP, Juzo, Rational, evia, netzwerk P, LMU Klinikum, SupplyOn, 9 Levels).
  Braucht Nennungsfreigaben.

## [0.13.0] – 2026-07-17

### Geändert
- **Arbeitsweise: Proportionen.** Rechte Spalte 20% breiter (`1fr 1fr` →
  `1fr 1.2fr`, gemessen Verhältnis 1.20); Titel 22ch → 26ch, Copy und
  Referenzkarte 46ch → 55ch — ohne das hätten die `max-width`-Werte den Inhalt
  weiter gedeckelt und die breitere Spalte wäre wirkungslos geblieben.
  Eyebrow/Headline stehen als Block oben bündig mit der Ziffer rechts
  (`align-items: start` statt `center`; gemessen 268 gegen 263). Headline in
  `--navy` statt `--slate`.
- **Arbeitsweise: Hintergrund.** Der wandernde Sektor lief von SNOW nach WEISS —
  6 Helligkeitswerte Unterschied, praktisch unsichtbar. Er läuft jetzt ins
  Markenblau; Stärke über `--az-wash` (`color-mix(… 14%, SNOW)`) an einer Stelle
  justierbar. Bewusst eine Tönung, keine Fläche — Vollflächen-Blau bleibt laut
  CI-Manual Bühne und Aktion vorbehalten.
- **Mobile Navigation wie die Desktop-Variante.** Das Burger-Panel war eine
  schwebende Karte (230px, rechts angeschlagen, eigener Rand und Radius). Jetzt
  wächst die Navizeile als EINE Fläche nach unten bis an beide Screenränder
  (gemessen 0–375), Punkte linksbündig bei 16px — exakt unter dem Logo.
  Hoverfläche in der Grundfarbe statt eines grauen Flecks.
- **Logo und Burger bündig mit den Modulkanten.** Der Innenabstand der Navi hatte
  das Logo 20px und den Burger 12px nach innen geschoben (Logo bei 36, Module bei
  16; Burger bei 347, Module bei 359). Der Burger behält seine 8px Touchfläche,
  die Striche rücken per negativem Rand auf die Kante.
- **Burger-Strichstärke = Logo-Strichstärke.** Die Klammer ist im SVG eine
  gefüllte Form: viewBox 220.1 hoch, Steg 27 Einheiten → bei 39px Logohöhe sind
  das 4.78px. Der Burger stand auf 2.5px, jetzt 4.8px (gemessen 4.80). Der
  Versatz des Kreuzes leitet sich aus den Variablen ab, damit er beim nächsten
  Justieren mitwandert.

### Behoben
- **Harte Naht im Hintergrund der Arbeitsweise.** Ein Kegelverlauf, der bei 0deg
  mit SNOW startet und bei 360deg mit WEISS endet, trifft an dieser Achse hart
  aufeinander — sichtbar als senkrechte Kante über dem Verlaufszentrum (im
  Snapshot bei x≈865, Zentrum liegt bei 34.05% von 2560px = 872px). Jetzt bei
  180deg gespiegelt, Start- und Endwert gleich.

## [0.12.0] – 2026-07-17

### Behoben
- **Hero-Module liefen bis an den Screenrand.** `#hero-ceramic` stand in der
  Ausnahmeliste `padding-left/right: 0` (seit `4cdd723`, „Keramik-Hero final") —
  damit war der ganze Hero Full-Bleed, nicht nur das Mega-Panel. Der Hero ist
  aber ein **Bento** und behält seinen Seitenrand; ausbrechen soll allein das
  Mega-Panel. Der Seitenrand liegt jetzt als `--hc-pad` an EINER Stelle
  (`.hc-section`), und Panel wie Navifläche brechen mit genau diesem Wert wieder
  heraus — beides bleibt damit gekoppelt.
  Gemessen bei 1485px: Bento-Grid 56–1429, Mega-Panel und Navifläche 0–1485.
- Die Navifläche bei offenem Mega-Menü liegt dafür als `::before` **hinter** der
  Navi statt als deren Hintergrund. Ein negatives `margin` am Element selbst
  hätte Logo und Links mitverschoben.

## [0.11.0] – 2026-07-17

### Behoben
- **Hero-Szenariokarten auf Mobil.** `.hc-field` trug `min-height: clamp(210px,
  21vw, 290px)` — eine Desktop-Regel, wo sich fünf Karten die Hero-Höhe teilen.
  Auf 380px Breite griff das Minimum und blies jede Karte auf 210px auf: 1050px
  allein für die Liste. `flex-grow` der offenen Karte lief dabei ins Leere, weil
  es in einem inhaltshohen Container keine freie Höhe zu verteilen gibt — alle
  fünf Karten waren exakt gleich hoch, auch die offene. Jetzt misst sich jede an
  ihrem Inhalt: geschlossen 136px (Nummer + Titel), offen 269px. Hero 2044 →
  1805px.
- **Schriftgrößen im Hero auf Mobil.** Titel, Copy und Icon hingen alle am
  Clamp-MINIMUM (15px / 12.5px / 32px), weil die vw/vh-Anteile auf 380px winzig
  werden. Jetzt 19px / 15.5px / 44px. Die Media Query musste dafür **nach** die
  Basisregeln — eine Media Query erhöht die Spezifität nicht, der erste Anlauf
  stand davor und wurde wirkungslos überschrieben.
- **Reihenfolge in „Über" auf Mobil.** Das Bild stand über dem Inhalt. Ursache
  war die eigene Änderung aus 0.9.0: `.ue-media` bekam `grid-row: 1`, damit die
  Fortschrittsleiste in derselben Zelle liegt — einspaltig beanspruchte es damit
  auch mobil Zeile 1 und schob die Inhaltsspalte auf Zeile 2. Jetzt stehen die
  Zeilen explizit: Inhalt zuerst, Bild darunter (wie in der Referenz, dort
  `order: -9999`).

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
