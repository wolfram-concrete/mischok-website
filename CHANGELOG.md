# Changelog

Alle nennenswerten Änderungen an der MISCHOK-Website werden hier dokumentiert.

Das Format orientiert sich an [Keep a Changelog](https://keepachangelog.com/de/1.1.0/),
die Versionierung an [Semantic Versioning](https://semver.org/lang/de/).

## [Unreleased]

_Offene Punkte:_ Kontakt-Platzhalter füllen (`[Name Nachname]`, `[Position / Rolle]`,
`[E-Mail-Adresse]`, `[Telefonnummer]`); finale Bilder für Einsatzfelder- und
Themen-Karten; Impressum & Datenschutz als echte Seiten; Karriere-CTA-Ziel festlegen.

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
[0.2.0]: https://github.com/wolfram-concrete/mischok-website/commits/main
[0.1.0]: https://github.com/wolfram-concrete/mischok-website/commits/main
