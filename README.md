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

| Route         | Inhalt                                                       |
|---------------|--------------------------------------------------------------|
| `/`           | One-Pager mit allen Sektionen (Anker-Navigation)             |
| `/referenzen` | Referenzen-Unterseite (Full-Screen-Hero + aufklappbare Karten) |

## Projektstruktur

```
app/
  layout.tsx          Fonts (Source Serif 4 via next/font/google,
                      Calibre via next/font/local), Header, Metadata
  globals.css         Design-Tokens, Keyframes, responsive Regeln, reduced-motion
  page.tsx            One-Pager: alle Sektionen in Scroll-Reihenfolge
  referenzen/page.tsx Referenzen-Unterseite
  fonts/              Calibre Web-Fonts (Regular/Medium/Bold, woff2 + woff)
components/
  layout/Header.tsx   Sticky Top-Navigation (Dropdown, Mobile-Burger)
  sections/           Eine Datei pro Sektion (Hero, EinsatzfelderGrid, PortraitBleed,
                      Ansatz, Stimme, Themen, Zusammenarbeit, Ueber, Kontakt,
                      ArbeitenBeiMischok, Footer, ReferenzenGrid)
  ui/                 Geteilte Komponenten: LogoMark, CtaButton, ImageFrame,
                      SectionLabel, Reveal
lib/content.ts        Verbindliche Inhaltstexte (FIELDS, POINTS, ACC, TOPICS,
                      REFERENZEN_INTRO, REFERENZEN)
public/assets/        Bilder, Icons, Logo (SVG)
public/video/         Hero-Hintergrundvideo (WebM + MP4-Fallback + Poster)
design-reference/     Original-Design-Component & Handoff (nicht Teil der Website)
```

## Typografie

Zwei Schriften: **Source Serif 4** (Headlines/Nummern, `next/font/google`) und
**Calibre** (alles andere — Fließtext, Labels, Buttons; lokale Web-Fonts in
`app/fonts/` via `next/font/local`, Weights 400/500/700). Alle CSS-Variablen
(`--serif`, `--sans`, `--mono`) sind auf diese beiden Schriften gemappt.

## Interaktionen

- **Top-Navigation** — sticky, über dem Hero transparent, ab dem Scrollen mit
  hellem Hintergrund; Referenzen-Dropdown; Mobile-Burger-Menü (`"use client"`).
- **Hero** — vollflächiges Hintergrund-Video (loop, stumm, autoplay, `playsInline`)
  mit dezentem Scrim; Text-Reveal als CSS-Keyframes.
- **EinsatzfelderGrid** — Hover schärft die Karte (`"use client"`).
- **Ansatz** — Pin-Scroll über 300vh mit `requestAnimationFrame`, blendet 3 Punkte durch.
- **Zusammenarbeit** — horizontales Accordion mit smoothem Morph-Übergang (`"use client"`).
- **ReferenzenGrid** — Karten: geschlossen (Nummer/Headline/Projektlage, Bild
  unscharf) · Hover (Bild scharf) · offen (horizontale Aufteilung mit Fließtext,
  Basisinfos, CTA). Nur eine Karte offen; beim Öffnen zentriert sie sich im Viewport.
- **Reveal** — Scroll-Reveal via `IntersectionObserver`.

Alle Animationen respektieren `prefers-reduced-motion: reduce`.

Das Hero-Video wurde auf 1080p komprimiert und liegt als WebM (~451 KB) mit
MP4-Fallback (~659 KB) und Poster-Frame in `public/video/`.

## Offene Punkte

- Kontakt-Platzhalter füllen: `[Name Nachname]`, `[Position / Rolle]`,
  `[E-Mail-Adresse]`, `[Telefonnummer]`.
- CTA „Zur Referenz" (Referenzen-Karten) braucht noch ein Ziel.
- Themen-/Referenz-Karten nutzen Platzhalter-/Stockfotos statt projektspezifischer Bilder.
- Weitere Unterseiten aus der Sitemap (Über uns, Insights, Karriere, Impressum,
  Datenschutz) sind noch Anker/Stubs.

## Deployment (Vercel)

„Add New Project" → GitHub-Repo `wolfram-concrete/mischok-website` wählen →
Next.js-Preset wird automatisch erkannt → **Deploy**. Custom Domain später unter
**Project → Settings → Domains**.
