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
  layout.tsx          Fonts (Source Serif 4 via next/font/google,
                      Calibre via next/font/local), Header, Metadata
  globals.css         Design-Tokens, Keyframes, responsive Regeln, reduced-motion
  page.tsx            One-Pager: alle Sektionen in Scroll-Reihenfolge
  referenzen/page.tsx Referenzen-Übersicht
  referenzen/9-levels/page.tsx  Referenz-Detailseite 9 Levels
  fonts/              Calibre Web-Fonts (Regular/Medium/Bold, woff2 + woff)
components/
  layout/Header.tsx   Sticky Top-Navigation als Burger (Wortmarke + Panel)
  sections/           Eine Datei pro Sektion (EinsatzfelderGrid, PortraitBleed,
                      Ansatz, Stimme, Themen, Zusammenarbeit, Ueber, AusDerPraxis,
                      Kontakt, ArbeitenBeiMischok, Footer, ReferenzenGrid)
                      + Hero-Testvarianten (Hero, HeroBoxes, HeroBento,
                      HeroSlider, HeroImpact — siehe „Hero-Testvarianten")
  ui/                 Geteilte Komponenten: LogoMark, CtaButton, ImageFrame,
                      SectionLabel, Reveal
lib/content.ts        Verbindliche Inhaltstexte (FIELDS, POINTS, ACC, TOPICS, PRAXIS,
                      REFERENZEN_INTRO, REFERENZEN, REFERENZ_9LEVELS)
public/assets/        Bilder, Icons; reale Projektfotos + assets/Redaktionel/
public/Logo/          Offizielle Wortmarke (SVG)
public/social/        Trust-Material-Depot (README + trust-feed.json + Belege)
public/video/         Hero-Hintergrundvideo (WebM + MP4-Fallback + Poster)
design-reference/     Design-Grundlagen: COLOR-LOGIC.md (Palette/Farblogik),
                      DESIGN-CODES.md (UI/UX-Kickoff), Original-DC & Handoff
```

## Design-Grundlagen (verbindlich)

- **Farbpalette & Farblogik** — `design-reference/COLOR-LOGIC.md` (CI-Manual):
  Navy/Grau/Weiß als Basis, vier Akzentfarben nur für Details.
- **UI/UX-Design-Codes** — `design-reference/DESIGN-CODES.md` (Kickoff-Board):
  Klarheit · Orientierung · Vertrauen · Kompetenz. Jede neue Section wird dagegen
  geprüft.

## Hero-Testvarianten

Zum Vergleich liegen mehrere Hero-Prototypen oberhalb der Startseite (`page.tsx`):
`Hero` (Video, Ausgangsstand), `HeroBoxes`, `HeroBento` (CGI-Haptik),
`HeroSlider` (interaktives Accordion), `HeroImpact` (vollflächige Bento auf
Logo-Modul). Sobald ein Favorit feststeht, werden die übrigen entfernt und das
System daraus abgeleitet.

## Typografie

Zwei Schriften: **Source Serif 4** (Headlines/Nummern, `next/font/google`) und
**Calibre** (alles andere — Fließtext, Labels, Buttons; lokale Web-Fonts in
`app/fonts/` via `next/font/local`, Weights 400/500/700). Alle CSS-Variablen
(`--serif`, `--sans`, `--mono`) sind auf diese beiden Schriften gemappt.

## Interaktionen

- **Top-Navigation** — sticky, über dem Hero transparent, ab dem Scrollen mit
  hellem Hintergrund; **Burger auf allen Breakpoints** (Links & CTA im Panel),
  Burger-Striche in der Anmutung des „m" (`"use client"`).
- **Hero** — vollflächiges Hintergrund-Video (loop, stumm, autoplay, `playsInline`)
  mit dezentem Scrim; Text-Reveal als CSS-Keyframes.
- **EinsatzfelderGrid** — Hover schärft die Karte; auf Touch-/No-Hover-Geräten
  sind alle Karten dauerhaft scharf (`(hover: hover)`-Erkennung, `"use client"`).
- **Ansatz** — Pin-Scroll über 300vh mit `requestAnimationFrame`, blendet 3 Punkte durch.
- **Zusammenarbeit** — horizontales Accordion mit smoothem Morph-Übergang (`"use client"`).
- **ReferenzenGrid** — Karten: geschlossen (Nummer/Headline/Projektlage, Bild
  unscharf) · Hover (Bild scharf) · offen (horizontale Aufteilung mit Fließtext,
  Basisinfos). Nur eine Karte offen; beim Öffnen zentriert sie sich im Viewport.
  Die 9-Levels-Karte verlinkt per „Referenz ansehen →" auf `/referenzen/9-levels`.
- **AusDerPraxis** — Trust-Section vor dem Kontaktbereich: drei kuratierte
  Teaser-Karten, die extern (neuer Tab) auf LinkedIn verweisen — kein Embed.
- **Reveal** — Scroll-Reveal via `IntersectionObserver`.

Alle Animationen respektieren `prefers-reduced-motion: reduce`.

Das Hero-Video wurde auf 1080p komprimiert und liegt als WebM (~451 KB) mit
MP4-Fallback (~659 KB) und Poster-Frame in `public/video/`.

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
