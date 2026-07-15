# Changelog

Alle nennenswerten Änderungen an der MISCHOK-Website werden hier dokumentiert.

Das Format orientiert sich an [Keep a Changelog](https://keepachangelog.com/de/1.1.0/),
die Versionierung an [Semantic Versioning](https://semver.org/lang/de/).

## [Unreleased]

_Offene Punkte:_ Kundenstimme auf der 9-Levels-Detailseite vor Veröffentlichung
final mit 9 Levels freigeben; projektspezifische Bilder statt Stockfotos; konkrete
LinkedIn-Beitrags-URLs in „Aus der Praxis" ergänzen (aktuell Profil-Link);
Impressum & Datenschutz als eigene Seiten; weitere Referenz-Detailseiten bei Bedarf.

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
[0.4.0]: https://github.com/wolfram-concrete/mischok-website/commits/main
[0.3.0]: https://github.com/wolfram-concrete/mischok-website/commits/main
[0.2.0]: https://github.com/wolfram-concrete/mischok-website/commits/main
[0.1.0]: https://github.com/wolfram-concrete/mischok-website/commits/main
