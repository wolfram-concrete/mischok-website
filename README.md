# MISCHOK Website

Produktionsfähige One-Page-Website der **Mischok GmbH** (Augsburg) — umgesetzt als
**Next.js (App Router) · TypeScript · Tailwind CSS**, deploybar auf **Vercel**.

Die Umsetzung folgt 1:1 der Design-Referenz (`design-reference/MISCHOK Home.dc.html`)
und der Handoff-Spezifikation (`design-reference/HANDOFF-CLAUDE-CODE.md`).

## Entwicklung

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build
npm run start    # Produktions-Server (nach build)
```

## Projektstruktur

```
app/
  layout.tsx        Fonts (Source Serif 4 + IBM Plex Mono via next/font), Metadata
  globals.css       Design-Tokens, Keyframes, responsive Regeln, reduced-motion
  page.tsx          One-Pager: alle Sektionen in Scroll-Reihenfolge
components/
  sections/         Eine Datei pro Sektion (Hero, EinsatzfelderGrid, PortraitBleed,
                    Ansatz, Stimme, Themen, Zusammenarbeit, Ueber, Kontakt,
                    ArbeitenBeiMischok, Footer)
  ui/               Geteilte Komponenten: LogoMark, CtaButton, ImageFrame,
                    SectionLabel, Reveal
lib/content.ts      Verbindliche Inhaltstexte (FIELDS, POINTS, ACC, TOPICS)
public/assets/      Bilder & Icons
design-reference/   Original-Design-Component & Handoff (nicht Teil der Website)
```

## Interaktionen

- **Hero** — reine CSS-Keyframe-Animationen (Winkelflächen, Lichtstrahl, Reveal).
- **EinsatzfelderGrid** — Hover schärft die Karte (`"use client"`).
- **Ansatz** — Pin-Scroll über 300vh mit `requestAnimationFrame`, blendet 3 Punkte durch.
- **Zusammenarbeit** — horizontales Accordion (`"use client"`).
- **Reveal** — Scroll-Reveal via `IntersectionObserver`.

Alle Animationen respektieren `prefers-reduced-motion: reduce`.

## Offene Punkte

- Kontakt-Platzhalter füllen: `[Name Nachname]`, `[Position / Rolle]`,
  `[E-Mail-Adresse]`, `[Telefonnummer]`.
- Finale Bilder für die noch als Platzhalter gerenderten Slots
  (Einsatzfelder-Karten, Themen-Karten).
- Impressum & Datenschutz als echte Seiten anlegen; Karriere-CTA-Ziel definieren.

## Deployment (Vercel)

„Add New Project" → GitHub-Repo `wolfram-concrete/mischok-website` wählen →
Next.js-Preset wird automatisch erkannt → **Deploy**. Custom Domain später unter
**Project → Settings → Domains**.
