# MISCHOK Website — Handoff für Claude Code

Übergabedokument für die Neu-Umsetzung der bestehenden Design-Component (`MISCHOK Home.dc.html`) als produktionsfähiges **Next.js / TypeScript / Tailwind**-Projekt, deploybar auf **Vercel**, gepusht nach `git@github.com:wolfram-concrete/mischok-website.git`.

---

## 1. Projektziel

Deutschsprachige, hochwertige **One-Page-Website** für die **Mischok GmbH** (Augsburg) — Softwareentwicklung & Projektführung für geschäftskritische Bestandssoftware. Ruhige, seriöse Fachsprache, viel Weißraum, Serif-Headlines, Mono-Labels, dezente Navy-Akzente, subtile Scroll-/Hover-Animationen. Kein „Startup-Look", keine grellen Gradients.

Die bestehende Datei ist eine client-seitig gerenderte Design-Component in einem hauseigenen Format. Sie ist die **verbindliche visuelle Referenz** — Layout, Copy, Farben, Abstände und Interaktionen sollen 1:1 übernommen, aber auf einen sauberen Standard-Stack portiert werden.

---

## 2. Empfohlener Tech-Stack

- **Next.js (App Router)** + **TypeScript**
- **Tailwind CSS** (Design-Tokens siehe §6)
- Google Fonts via `next/font/google`: **Source Serif 4** + **IBM Plex Mono** (Sans = Helvetica/Arial-Systemstack)
- Bilder über `next/image`
- Reine Client-Interaktionen (Hover, Pin-Scroll, Accordion) als kleine Client-Komponenten (`"use client"`), Rest als Server-Komponenten
- Keine externe DB, kein CMS nötig (statische Inhalte)

---

## 3. Seiten & Routen

One-Pager. Alle Sektionen liegen auf **`/`** (`app/page.tsx`), verbunden durch Anker-Navigation (`#einsatzfelder`, `#ansatz`, `#kontakt`, …).

| Route | Inhalt |
|---|---|
| `/` | Komplette Landingpage (alle Sektionen unten) |
| `app/layout.tsx` | HTML-Grundgerüst, Fonts, globale Tokens, `<Footer>` optional global |

Optional als Stubs (falls Footer-Links echt werden sollen): `/impressum`, `/datenschutz`, `/karriere`.

---

## 4. Sektions- / Komponentenliste (Reihenfolge = Scroll-Reihenfolge)

1. **`Hero`** — animierte Winkelflächen (zwei überlappende SVG-Polygone mit Slate→Transparent-Gradient), heller Verlauf, zentraler „Lichtspalt" (weißer Strahl + Glow). Logo-Mark „m" (46×40, 2.5px Navy-Border). Headline (Serif, clamp 38–78px): *„Wenn Software entscheidend für Ihren Geschäftserfolg ist braucht sie Menschen, die Verantwortung übernehmen."* CTA-Button „Projektlage klären". Reveal-Animationen beim Laden (Flächen wischen ein, Text steigt auf, Strahl wächst). `prefers-reduced-motion` respektieren.
2. **`EinsatzfelderGrid`** (`#einsatzfelder`) — 5 Karten (01–05) in geschlossenem Rechteck-Grid (Desktop: Karte 01 über 2 Zeilen links, 02/03/04/05 im 2×2 rechts). Default ist Karte 01 scharf; **Hover** schärft die gehoverte Karte (Bild `blur(9px)→0`, Scale, Overlay dunkelt, Nummer & Text werden weiß/scharf, Karte hebt sich −3px). Datenarray `FIELDS` (Nr, Titel, Kurztext, Detailtext) — siehe §8.
3. **`PortraitBleed`** (`#portrait-bleed`) — vollflächiges Portrait, kleiner heller Overlay-Block oben links.
4. **`Ansatz`** (`#ansatz`) — **Pin-Scroll über 300vh**. Sticky-Container (100vh), Conic-Gradient-Hintergrund dessen Zentrum (`--ansatz-cy`) beim Scrollen nach unten wandert (25.64% → ~78%). Ein Scroll-Fortschritt 0→1 blendet **3 Punkte** (`POINTS`) nacheinander durch (Opacity + translateY). Links Headline „Wo mischok konkret ansetzt" + 3 Fortschrittsbalken, rechts der aktive Punkt (Nr, Titel, Detail, CTA). Umsetzung als Client-Komponente mit `requestAnimationFrame` / `IntersectionObserver`, kein Scroll-Jank.
5. **`Stimme`** (`#stimme`) — Zitat Julius Mischok, Portrait links negativ überlappend (ragt in Nachbarsektionen).
6. **`Themen`** (`#themen`) — Intro-Text + 3 Themen-Karten (`topics`) mit Bild, Kind-Label (Vortrag/Fachartikel), Titel, Beschreibung, Bottom-Gradient-Overlay.
7. **`Zusammenarbeit`** (`#zusammenarbeit`) — **horizontales Accordion** aus 3 Karten (`ACC`). Klick öffnet eine Karte breiter (flex-grow 1→3.4), Bild schärft, Glass-Panel (backdrop-blur) mit Icon, Titel, Text erscheint; geschlossene Karten zeigen Icon + Plus-Button. Auf Mobile vertikal gestapelt (Höhe 150px↔520px).
8. **`Ueber`** (`#ueber`) — Navy-Panel (voll-breit, ragt −64px über Content-Padding) mit Headline „Über mischok" (Serif, bis 120px), Fließtext, Kennzahlen **Seit 2010 · Augsburg · 35+ Mitarbeiter**. Darunter überlappend Portrait + Zitat Virgil Mischok, Scroll-Reveal (fade + rise via IntersectionObserver).
9. **`Kontakt`** (`#kontakt`) — Headline „Der nächste Schritt ist ein Gespräch.", Intro, links Ansprechpartner (Portrait + Name/Rolle/Mail-CTA), rechts Direktkontakt (Telefon/E-Mail + Rückruf-CTA). **Platzhalter** `[Name Nachname]`, `[Position / Rolle]`, `[E-Mail-Adresse]`, `[Telefonnummer]`.
10. **`ArbeitenBeiMischok`** (`#arbeiten`) — Team-Bild (Navy), Glas-/Blur-Panel mit Headline „Arbeiten bei MISCHOK", zwei Absätzen, CTA „Karriere bei MISCHOK".
11. **`Footer`** — Logo-Mark, Claim, Kontakt (+49 341 22 54 900, kontakt@mischok.de), CTA „Erstgespräch vereinbaren", © 2026 Mischok GmbH, Impressum · Datenschutz.

**Geteilte UI-Komponenten:** `LogoMark`, `CtaButton` (Verlaufs-Button links-transparent→`#D6D6D6`, Navy-Text, Hover = voll `#D6D6D6`), `ImageFrame` (ersetzt `<image-slot>` durch `next/image` mit Placeholder-Fallback), `SectionLabel` (Mono, uppercase, letter-spacing).

---

## 5. Responsive-Regeln

- Breakpoints im Original grob: **< 640** (Grid 1-spaltig), **< 820/760** (Mobile: Ansatz/Kontakt/Arbeiten/Accordion stapeln), **< 1000** (Grid 2-spaltig), **≥ 900** Desktop-Feinschliff, **≥ 1000** Grid 3-spaltig.
- Desktop-Feinschliff (`@media (min-width:900px)`): Sektionen bekommen `padding-inline: 64px`; Über-Panel und einige Full-Bleed-Sektionen brechen mit negativen Margins bewusst aus dem Padding aus; die meisten Sektionen `min-height: 100vh`, `#ansatz` bleibt bei 300vh (Pin), `#kontakt`/`#stimme`/`#arbeiten` Ausnahmen.
- Durchgängig `clamp()` für Font-Sizes und Paddings — beim Tailwind-Umbau als `clamp()`-Utilities oder `text-[clamp(...)]` beibehalten, damit Skalierung erhalten bleibt.
- `prefers-reduced-motion: reduce` → Hero-Animationen quasi deaktivieren.

---

## 6. Design Tokens

In `tailwind.config.ts` unter `theme.extend` (oder als CSS-Variablen in `globals.css`) anlegen:

```
colors:
  bg:      #F6F6F5   // Seitenhintergrund
  section: #E4E3E1   // Sektionsflächen
  card:    #EDECEA   // Karten
  navy:    #002A5C   // Primär / Akzent (Buttons, Headlines)  ← auch "accent"
  onNavy:  #EAE8E1   // Text auf Navy
  slate:   #384352   // Fließtext
  ink:     #1A222A   // Zitate
  muted:   #8C9198   // Sekundärtext
  line:    #D5D4D1   // Trennlinien / Rahmen
  btn:     #E4E2DE
  buttonGrad-end: #D6D6D6   // Button-Verlauf & Panels

fontFamily:
  serif: ['"Source Serif 4"', 'Georgia', 'serif']        // Headlines, große Zahlen
  sans:  ['"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'] // Fließtext, Buttons
  mono:  ['"IBM Plex Mono"', 'ui-monospace', 'monospace']  // Labels, Meta, Zitat-Quellen

radius: 5px (Standard-Kartenradius)
selection: bg #002A5C / color #F6F6F5
```

**Optionale Varianten** (im Original als Props `theme` Hell/Dunkel, `accent`, `heroAlign`): müssen für die statische Site **nicht** übernommen werden — Default = Hell, Accent = `#002A5C`, Hero zentriert. Nur umsetzen, falls gewünscht.

**Keyframes** (aus `<helmet>` portieren): `fadeUp`, `heroRevealTop/Bottom/Left/Right`, `heroTextUp`, `heroSparkIn`, `heroSlitGrow`, `heroBeamPulse`.

---

## 7. Assets

Nach `public/` übernehmen (liegen aktuell in `assets/`):

| Datei | Verwendung |
|---|---|
| `assets/acc-1.jpg`, `acc-2.jpg`, `acc-3.jpg` | Accordion-Karten, Über-/Kontakt-Portrait |
| `assets/arbeiten.jpg` | Sektion „Arbeiten bei MISCHOK" (Hintergrund + Blur-Layer) |
| `assets/hero-shape.svg` | Hero-Winkelform (falls statt Inline-SVG genutzt) |
| `assets/icon-brain.svg`, `icon-list.svg`, `icon-people.svg` | Accordion-Icons |
| `assets/icon-plus.svg` | Plus-Button geschlossene Accordion-Karten |

**Echte Fotos** (höher aufgelöst) liegen in `uploads/Mischok_2023_ma_029.jpg`, `_053.jpg`, `_115.jpg`, `_396.jpg` — für finale Bildbelegung bevorzugen. `<image-slot>`-Platzhalter im Original durch `next/image` mit diesen Assets ersetzen; wo noch kein Bild feststeht, dezenten Platzhalter (gestreiftes SVG + Mono-Label) rendern.

---

## 8. Inhaltstexte (verbindlich übernehmen)

**Einsatzfelder (`FIELDS`, 01–05):**
1. *Bestehende Software weiterentwickeln* — „Ihre Software ist Teil des laufenden Betriebs." + Detail zu gewachsenen Systemen.
2. *Festgefahrene Projekte lösen* — Anforderungen ändern sich; Lage ordnen, eigentliches Problem benennen.
3. *Systeme modernisieren* — Umbau in tragfähigen Schritten ohne Betrieb zu kippen.
4. *Fachbereich und IT verbinden* — zwischen Ebenen übersetzen, gemeinsame Grundlage.
5. *Architektur ordnen* — Optionen ordnen, Entscheidungsgrundlage schaffen.

**Ansatz (`POINTS`, 01–03):** „Zuerst verstehen, was wirklich entschieden werden muss" · „Einen Weg vorschlagen, der im Betrieb trägt" · „Verantwortung bis zum nutzbaren Ergebnis übernehmen".

**Zusammenarbeit (`ACC`):** „Klare Einordnung statt später Korrektur" · „Fachliche Tiefe vor schnellen Antworten" · „Verantwortliche Menschen bleiben sichtbar".

**Themen (`topics`):** „Retten oder Reimplementieren?" (Vortrag) · „Wenn Kapazität zu Komplexität wird" (Fachartikel) · „KI im Bestand: Werkzeug, kein Wundermittel" (Vortrag).

> Die vollständigen, wortgetreuen Texte stehen in `MISCHOK Home.dc.html` in `renderVals()` (Arrays `FIELDS`, `POINTS`, `ACC`, `topics`) sowie inline in den Zitat-Blöcken. **Diese Datei ist die Quelle der Wahrheit für alle Copy.**

---

## 9. Bekannte offene Punkte

- Kontakt-Platzhalter füllen: `[Name Nachname]`, `[Position / Rolle]`, `[E-Mail-Adresse]`, `[Telefonnummer]`.
- Finale Bilder für alle `<image-slot>`/`ImageFrame`.
- Impressum & Datenschutz sind aktuell nur Text — echte Seiten/Links anlegen.
- Karriere-CTA-Ziel definieren.
- Accessibility: Fokus-States für Buttons/Links, `alt`-Texte, `aria-label` für Icon-Buttons ergänzen.

---

## 10. Vercel-Hinweise

- Framework-Preset: **Next.js** (auto-detected).
- Build Command `next build`, Output automatisch. Kein spezielles Env nötig (statische Inhalte).
- `.gitignore` muss `node_modules`, `.next`, `.env*`, `.vercel` enthalten — **keine Secrets/lokalen Configs committen**.
- Bilder aus `public/` funktionieren direkt mit `next/image`.
- Import in Vercel: „Add New Project" → GitHub-Repo `wolfram-concrete/mischok-website` wählen → Deploy. Custom Domain später unter Project → Settings → Domains.
