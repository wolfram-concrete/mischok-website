# MISCHOK Website — UI/UX Onboarding

Arbeitsdokument fuer das Onboarding der UI/UX-Designerin.

Stand: 22.07.2026

## 1. Ziel Des Termins

Die Designerin soll nach dem Onboarding verstehen:

- welche strategische Aufgabe die neue MISCHOK-Website hat
- warum die Home als Prototyp und Stilreferenz fuer die restliche Website dient
- wie die bestehenden Module gedacht sind
- wo Konzeption, Bildmaterial, Trust-Material und technische Referenzen liegen
- wie sie mit dem GitHub-/Claude-Code-Workflow weiterarbeiten kann
- welche Design-Regeln bei neuen Seiten und Modulen verbindlich sind

Die Website ist noch nicht als vollstaendige Website gedacht. Der aktuelle Stand ist ein bewusst gebauter Ausschnitt:

- Home als Stil- und Modul-Prototyp
- Referenzuebersicht
- eine echte Referenzdetailseite fuer 9 Levels

Alles Weitere soll aus diesen Regeln heraus entstehen.

## 2. Empfohlene Terminreihenfolge

### 1. Einstieg: Warum Wir Die Website Neu Denken

Kurz erklaeren:

- MISCHOK soll nicht wie ein klassischer Softwaredienstleister wirken.
- Die alte Wahrnehmung war zu stark "Softwareentwicklung / Leistungen / Technologien".
- Die neue Positionierung geht staerker ueber Projektsituationen, Verantwortung, technische Einordnung und erfahrene Menschen.

Leitfragen fuer jede Seite:

- Wer ist MISCHOK?
- Fuehle ich mich mit meinem Softwareproblem abgeholt?
- Verstehe ich, in welchen Situationen MISCHOK relevant wird?
- Entsteht genug Vertrauen, um ein Gespraech anzufragen?

### 2. Strategie Und Konzeption Zeigen

Wichtige Quellen:

- `Mischok_PHASE-1-VERSTEHEN.pdf`
- `Mischok-Website.pdf`
- `design-reference/DESIGN-CODES.md`
- `design-reference/COLOR-LOGIC.md`
- `design-reference/dokumentation/MISCHOK-Home-Dokumentation.pdf`

Kurz zusammenfassen:

- Phase 1 klaert Marke, Zielgruppen, emotionale Treiber und Website-Aufgabe.
- Das Website-Briefing liefert Sitemap, Copy und Referenzinhalte.
- Die Design-Codes definieren die UI/UX-Prinzipien.
- Die Farblogik verhindert spaetere Design-Beliebigkeit.
- Die Home-Dokumentation zeigt die aktuell gebauten Module visuell.

### 3. Aktuelle Home Gemeinsam Durchgehen

Route:

- `/`

Aktuelle Reihenfolge in `app/page.tsx`:

1. `HeroSwitch` / `HeroCeramic`
2. `Ansatz`
3. `Stimme`
4. `Themen`
5. `Zusammenarbeit`
6. `Ueber`
7. `Medien`
8. `Kontakt`
9. `ArbeitenBeiMischok`
10. `Footer`

Wichtig: Die Reihenfolge ist grundsaetzlich gesetzt. Nicht leichtfertig umbauen. Verbesserungen sollen innerhalb der Module oder an Moduluebergaengen passieren.

### 4. Hero Als Zentrale Stilentscheidung Erklaeren

Aktiver Hero:

- `components/sections/HeroSwitch.tsx`
- rendert `components/sections/HeroCeramic.tsx`
- Default ist Variante 2
- alte Varianten bleiben ueber `?hero=1` und `?hero=3` erreichbar

Designidee:

- zusammenhaengendes Bento-System
- helle keramische Flaechen
- ruhige Kartenhaptik
- linkes Headline-Modul
- rechtes echtes Team-/Workshopbild
- fuenf Projektlage-Karten als interaktives Accordion
- CTA als vollflaechiges Navy-Modul

Warum wichtig:

- Der Hero beantwortet nicht nur "was macht MISCHOK?", sondern zeigt direkt die Problemfelder.
- Die fuenf Projektlagen sind keine Leistungen, sondern Einstiegssituationen.
- Diese Logik soll auch spaeter auf Unterseiten weiterwirken.

### 5. Module Der Home Erklaeren

#### Hero / Projektlagen

Funktion:

- erster Eindruck
- Markenhaltung
- Problemfelder
- Gespraech als naechster Schritt

Regel:

- keine generische Hero-Schoenheit
- jede Flaeche muss eine Funktion haben
- Motion darf fuehren, aber nicht dekorieren

#### Ansatz

Funktion:

- erklaert die Arbeitsweise in drei Schritten
- erst verstehen, dann Weg klaeren, dann Verantwortung uebernehmen

Regel:

- Prozess nicht als Methodik verkaufen
- immer als Entlastung und Orientierung fuer den Kunden formulieren

#### Stimme

Funktion:

- persoenliche Haltung sichtbar machen
- "unangenehme Einschaetzung" als Qualitaet etablieren

Regel:

- echte Personen und klare Aussagen vor generischen Testimonials

#### Themen

Funktion:

- fachliche Tiefe und Denkraeume zeigen
- Vortraege, Veranstaltungen, Workshops

Regel:

- nicht als Blog-Teaser-Wand denken
- nur Themen zeigen, die auf die Positionierung einzahlen

#### Zusammenarbeit

Funktion:

- Werte im Projektalltag
- klare Einordnung, fachliche Tiefe, sichtbare Verantwortung

Regel:

- keine allgemeinen Werte wie "Innovation" oder "Agilitaet"
- jede Karte muss ein reales Verhalten in Projekten beschreiben

#### Ueber

Funktion:

- Wer ist MISCHOK?
- Familienunternehmen, Augsburg, seit 2010, mehr als 35 Menschen

Regel:

- Familienunternehmen nicht sentimental erzaehlen
- immer als Kundennutzen uebersetzen: kurze Wege, Verbindlichkeit, Entscheidungen mit Namen

#### Medien

Funktion:

- letzter Trust-Beleg vor Kontakt
- zeigt fachliche Oeffentlichkeit: Konferenzen, Magazine, Vortraege

Material:

- `public/social/`
- `public/social/trust-feed.json`
- `public/social/README.md`

Regel:

- kein automatischer Newsfeed
- keine erfundenen LinkedIn-Beitraege
- nur als Beleg einsetzen, wenn ein Modul mehr realen Trust braucht

#### Kontakt

Funktion:

- naechster Schritt
- Kontakt soll nicht wie Formularlogik wirken, sondern wie Gespraechseinladung

Regel:

- echte Daten, keine Platzhalter
- CTA klar und ruhig
- Gespraech ist der Abschluss der Argumentation

## 3. Design-Regelwerk Fuer Weitere Seiten

### Grundprinzip

Die Home ist der Prototyp. Neue Seiten sollen nicht komplett neu erfunden werden, sondern aus den bestehenden Regeln und Modulen heraus entstehen.

Jede neue Seite muss beantworten:

- Welche konkrete Projektsituation adressieren wir?
- Was muss der Nutzer sofort verstehen?
- Welcher Beleg schafft Vertrauen?
- Welche Person oder welches Projekt macht Verantwortung sichtbar?
- Was ist der naechste sinnvolle Schritt?

### Layout-Regeln

- ein klarer Fokus pro Screen
- grosszuegiger Weissraum
- editorial gedachte Grids
- Bento- und Kartenlogik als Ordnungsprinzip
- keine verschachtelten Karten in Karten
- keine dekorativen Layouts ohne inhaltliche Funktion
- mobile Version immer eigenstaendig denken, nicht nur Desktop stapeln

### Farbregeln

Quelle:

- `design-reference/COLOR-LOGIC.md`

Verbindlich:

- Navy/Change `#002A5C` ist die wichtigste Handlungs- und Orientierungsfarbe.
- Helle Flaechen bleiben neutral.
- Akzentfarben nur fuer Details, nie fuer grosse Flaechen.
- Pro Screen maximal ein wirklich dominanter Handlungsanker in Blau.
- Keine neuen Grautoene erfinden, wenn bestehende Tokens reichen.

Wichtige Tokens:

- `--navy`
- `--bg`
- `--section`
- `--card`
- `--slate`
- `--ink`
- `--muted`
- `--line`

### Typografie-Regeln

Schriften:

- Source Serif 4 fuer grosse Headlines und Zitate
- Calibre fuer Fliesstext, Navigation, Buttons, Labels
- Realtime Rounded fuer einzelne Display-/Projektlage-Labels

Regeln:

- grosse Serif-Headlines fuer echte Hauptaussagen reservieren
- kompakte Panels brauchen kleinere, ruhigere Typo
- keine typografischen Effekte ohne Bedeutung
- keine negativen Letter-Spacings weiter ausbauen
- Text muss auf Mobile immer sauber lesbar bleiben

### Bildsprache

Verbindliche Richtung:

- echte Menschen
- echte Arbeitssituationen
- Candid Shots
- konzentriert, nahbar, technisch serioes

Asset-Orte:

- `public/assets/`
- `public/assets/Redaktionel/`
- `public/social/`

Regeln:

- keine generischen Stockbilder
- Bilder brauchen Beweischarakter
- wenn ein Bild nur dekoriert, lieber weglassen
- Projekt-/Case-Naehe ist wertvoller als abstrakte Atmosphaere

### Motion-Regeln

Motion soll fuehren, nicht beeindrucken.

Erlaubt:

- ruhige Reveals
- Accordion-Morphs
- subtile Hover-Zustaende
- Scroll-Fuehrung, wenn sie inhaltlich hilft

Nicht gewuenscht:

- hektische Effekte
- Animation als Selbstzweck
- Overlays, die Lesbarkeit schwaechen
- Bewegungen ohne `prefers-reduced-motion`

## 4. Technischer Arbeitsmodus Fuer Die Designerin

### Repo-Verstaendnis

Wichtige Dateien:

- `app/page.tsx` — Reihenfolge der Home-Sections
- `app/globals.css` — globale Styles, Tokens, responsive Regeln, Hero-Styles
- `lib/content.ts` — zentrale Inhalte fuer viele Sections
- `components/sections/` — eine Datei pro Section
- `components/ui/` — wiederverwendbare UI-Bausteine
- `public/assets/` — Fotos, Logos, Patterns
- `public/social/` — Trust-/Medienmaterial
- `design-reference/` — Briefing, Farblogik, Design-Codes, Doku

### Arbeiten Mit Claude Code

Wenn sie mit Claude Code arbeitet, immer sehr konkret briefen:

- Welche Section?
- Welches Ziel?
- Welche Datei darf angefasst werden?
- Welche Datei darf nicht angefasst werden?
- Soll Code gebaut oder nur ein Vorschlag gemacht werden?
- Soll der bestehende Stil erhalten bleiben?

Beispielprompt:

```text
Bitte arbeite nur an der Section `Themen` in `components/sections/Themen.tsx`.
Ziel: Die Karten sollen mehr wie redaktionelle Belege wirken, aber die aktuelle
MISCHOK-Farblogik und Typografie beibehalten. Bitte keine neue Section bauen,
keine Navigation aendern und keine neuen Libraries installieren. Nutze bei Bedarf
Material aus `public/social/`, aber erfinde keine LinkedIn-Posttexte.
```

### Gute Claude-Code-Regeln

- Immer erst Dateien lesen lassen.
- Keine grossen Refactorings mit Designanpassungen mischen.
- Bei Designvarianten lieber neue Komponente/Variante anlegen als funktionierenden Stand zerstoeren.
- Nach Aenderungen Build pruefen: `npm run build`.
- Bei visuellen Aenderungen Desktop und Mobile separat pruefen.
- Keine `href="#"`.
- Keine Platzhalter sichtbar lassen.
- Keine Links auf nicht existierende Seiten.

### Branch-/Review-Empfehlung

Wenn moeglich:

1. kleine Aufgabe definieren
2. eigenen Branch nutzen
3. Designaenderung lokal pruefen
4. Screenshot machen
5. erst dann mergen

## 5. Naechste Sinnvolle Design-Aufgaben

### Prioritaet 1: Home Als System Schaerfen

Pruefen:

- Ist der Einstieg im Hero stark genug?
- Wird die Headline bewusst wahrgenommen?
- Sind die fuenf Projektlagen klar genug?
- Fuehlt sich der Uebergang von Hero zu Ansatz natuerlich an?

### Prioritaet 2: Module Als Designsystem Ableiten

Aus der Home extrahieren:

- Hero-/Intro-Typen
- Projektlage-Karte
- Proof-/Medienleiste
- Zitatmodul
- Themenkarte
- Accordion-Karte
- Kontaktmodul
- Case-Hero
- Faktenliste
- CTA-Modul

Ziel:

- Die Designerin kann spaeter Unterseiten aus vorhandenen Modulprinzipien bauen.

### Prioritaet 3: Referenzdetailseite Weiterdenken

Route:

- `/referenzen/9-levels`

Pruefen:

- Ist die Case-Struktur stark genug?
- Gibt es genug Bildbeweise?
- Sind Fakten und Ergebnis gut scannbar?
- Fuehrt die Seite sauber zur Kontaktaufnahme?

### Prioritaet 4: Restliche Seiten Ableiten

Nicht sofort alles bauen. Erst Seitenlogik klaeren:

- Welche Unterseiten sind wirklich noetig?
- Welche koennen Home-Anker bleiben?
- Welche Inhalte brauchen eigene Landingpages?
- Welche Module werden wiederverwendet?

## 6. Fragen Fuer Die Designerin Im Termin

1. Verstehst du nach dem Hero sofort, worin MISCHOK anders ist?
2. Welche der fuenf Projektlagen ist am klarsten, welche am abstraktesten?
3. Fuehlt sich die Seite eher wie Softwaredienstleister oder wie erfahrener Projektpartner an?
4. Wo fehlt dir noch echter Beweis?
5. Welche Module wuerdest du als wiederverwendbare Seitentypen definieren?
6. Welche visuellen Regeln sollten noch expliziter dokumentiert werden?
7. Was braucht sie von uns, um in Figma oder im Code sinnvoll weiterzuarbeiten?

## 7. Mini-Agenda Fuer Morgen

Zeitvorschlag: 60 bis 75 Minuten.

1. 5 Min — Ziel des Relaunches und Rollen klaeren
2. 10 Min — Strategie-PDF und Website-Briefing einordnen
3. 15 Min — Home live durchgehen, Module und Absichten erklaeren
4. 10 Min — Design-Regeln: Farbe, Typo, Bild, Motion
5. 10 Min — Repo-Struktur und Claude-Code-Workflow zeigen
6. 10 Min — offene Aufgaben und naechste Designentscheidungen sammeln
7. 5 Min — konkrete naechste Aufgabe fuer sie definieren

## 8. Gute Erste Aufgabe Fuer Sie

Empfehlung:

Sie soll nicht direkt eine komplette Unterseite gestalten. Besser:

> Eine modulare Ableitung aus der Home erstellen: Welche 8 bis 10 Komponenten bilden das MISCHOK-Websystem?

Output:

- kurzer Figma-/Miro-Frame oder Markdown
- Modulname
- Zweck
- Beispiel aus Home
- Varianten
- Dos/Don'ts
- offene Fragen

Damit wird aus dem Home-Prototyp ein echtes Designsystem-Fundament.

## 9. Wichtige Warnungen

- Die Home ist Prototyp und Stilanker, aber nicht jede Section muss 1:1 kopiert werden.
- Keine neuen bunten Akzentwelten einfuehren.
- Nicht aus Social-Material automatisch eine News-Section bauen.
- LinkedIn-Posts nicht erfinden: LinkedIn ist anonym nicht scrapebar.
- Bestehende Varianten nicht loeschen, wenn sie als Vergleich noch gebraucht werden.
- Bei grossen Aenderungen immer erst Ziel und betroffene Dateien definieren.

