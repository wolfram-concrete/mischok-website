# MISCHOK Website

Landingpage für die **Mischok GmbH** (Augsburg) — Softwareentwicklung & Projektführung für geschäftskritische Bestandssoftware. Deutschsprachige One-Page-Website mit Hero, Einsatzfeld-Grid, gepinntem Scroll-Ansatz, Zitaten, Themen-Karten, horizontalem Accordion, Über-Sektion, Kontakt und Footer.

---

## 1. Was in diesem Projekt liegt

| Datei / Ordner | Zweck |
|---|---|
| **`MISCHOK Home.dc.html`** | ⭐ Die eigentliche Website. Alles Wesentliche liegt hier (Markup + Logik + Styling). |
| `MISCHOK Website.html` | Gebündelte, offline-lauffähige Standalone-Version (alle Assets inline). Nur Export — nicht die Quelle. |
| `support.js` | Laufzeit-Framework für das `.dc.html`-Format (siehe unten). Generiert — **nicht editieren**. |
| `image-slot.js` | Web-Component `<image-slot>` — Drag-&-Drop-Bildplatzhalter, die der Nutzer selbst füllt. |
| `assets/` | Verwendete Bilder & Icons (JPGs, SVGs). |
| `uploads/` | Rohmaterial: Referenz-Screenshots, Original-Fotos (`Mischok_2023_ma_*.jpg`), PDFs, Skizzen. Nicht direkt eingebunden. |
| `screenshots/` | Arbeits-/Verlaufs-Screenshots aus dem Designprozess. Für Produktion irrelevant. |
| `.image-slots.state.json` | Persistierter Zustand der befüllten Bild-Slots (welches Bild in welchem Slot). |

**Für einen sauberen Übertrag reichen:** `MISCHOK Home.dc.html`, `support.js`, `image-slot.js`, der Ordner `assets/` und optional `.image-slots.state.json`.

---

## 2. Lokal starten

Reines statisches HTML — kein Build, kein npm.

```bash
# im Projektordner
python3 -m http.server 8000
# dann öffnen:
open http://localhost:8000/MISCHOK%20Home.dc.html
```

Ein einfacher Static-Server genügt (die `<image-slot>`-Persistenz und `support.js` brauchen `http://`, nicht `file://`). Alternativ die gebündelte `MISCHOK Website.html` per Doppelklick öffnen — läuft ohne Server, ist aber nicht die Bearbeitungsquelle.

---

## 3. Das `.dc.html`-Format ("Design Component") verstehen

Diese Datei ist **kein normales HTML** — sie nutzt ein kleines client-seitiges Rendering-Framework (`support.js`), das beim Laden das Markup in eine React-artige Komponente kompiliert. Wichtig für Claude Code / jeden, der das weiterentwickelt:

### Aufbau der Datei
```
<x-dc>                       ← Root-Marker
  <helmet> … </helmet>       ← Fonts, <style> (nur @keyframes / Resets), <script src>
  <div id="home-root"> … </div>   ← das eigentliche Markup (Template)
  <template id="__bundler_thumbnail"> … </template>
</x-dc>
<script type="text/x-dc" data-dc-script data-props="…">
  class Component extends DCLogic { … }   ← die Logik
</script>
```

### Template-Syntax (im `<x-dc>`-Body)
- **`{{ pfad }}`** — Platzhalter, nur einfache Pfad-Lookups (`{{ item.name }}`, `{{ $index }}`). **Keine Ausdrücke** (`{{ a + b }}` funktioniert nicht) — solche Werte in `renderVals()` berechnen und benannt zurückgeben.
- **`<sc-for list="{{ cards }}" as="item" hint-placeholder-count="5">`** — Schleife. `$index` ist im Scope.
- **`<sc-if value="{{ x }}" hint-placeholder-val="{{ true }}">`** — Bedingung.
- **Event-Handler**: `onClick="{{ handler }}"` (camelCase, ganzer Wert ist ein `{{ }}`).
- **Styling ist inline** (`style="…"`). Klassenbasiertes CSS wird bewusst vermieden. Pseudo-States über `style-hover="…"`, `style-active="…"` etc.
- `<style>` ist **nur** im `<helmet>` erlaubt und nur für Dinge, die inline nicht gehen: `@font-face`, `@keyframes`, Body-Resets.

### Logik (`class Component extends DCLogic`)
- Klassisches JS, kein TypeScript, keine `import`/`export`. `React` und `DCLogic` sind injiziert.
- Verhält sich wie eine React-Klassenkomponente (`state`, `setState`, `componentDidMount`, …) **ohne** `render()`.
- **`renderVals()`** liefert alle Werte, die das Template über `{{ }}` konsumiert (Strings, Arrays, Handler). Hier passiert die gesamte Berechnungslogik.

### Props / Tweaks
Im `data-props`-Attribut des `<script>`-Tags (JSON) sind einstellbare Props deklariert. Aktuell:
- `theme` — `"Hell"` | `"Dunkel"`
- `accent` — Akzentfarbe (`#002A5C` / `#384352` / `#1A4C8B`)
- `heroAlign` — `"Zentriert"` | `"Links"`

Gelesen werden sie via `this.props.<name> ?? default` in `renderVals()`.

> **Portierung auf ein Standard-Stack (React/Vite/Next):** `renderVals()` ≈ die Berechnungen einer Funktionskomponente; das `<x-dc>`-Template ≈ das JSX; `{{ x }}` → `{x}`; `<sc-for>` → `.map()`; `<sc-if>` → `&&`/ternär; `style="…"` → `style={{…}}`; `style-hover` → CSS-`:hover` bzw. State. `<image-slot>` würde man durch echte `<img>`/Upload-Komponenten ersetzen.

---

## 4. Seitenstruktur (Sektionen in Reihenfolge)

1. **Hero** — animierte Winkelflächen (SVG-Gradients) + Lichtspalt, Headline, CTA „Projektlage klären".
2. **Einsatzfelder-Grid** (`#einsatzfelder`) — 5 Karten (01–05), Hover schärft/hebt die Karte, Rest unscharf. Daten: Array `FIELDS` in `renderVals()`.
3. **Full-Bleed-Portrait** (`#portrait-bleed`).
4. **Ansatz** (`#ansatz`) — **gepinnter Scroll** über 300vh; ein rAF-Loop liest die Scroll-Position, blendet 3 Punkte (`POINTS`) durch und bewegt das Conic-Gradient-Zentrum (`--ansatz-cy`).
5. **Stimme / Zitat** (`#stimme`) — Julius Mischok.
6. **Themen** (`#themen`) — 3 Themen-Karten (`topics`).
7. **Zusammenarbeit** (`#zusammenarbeit`) — horizontales Accordion (`ACC`), Klick öffnet eine Karte breiter (Glass-Panel).
8. **Über MISCHOK** (`#ueber`) — Navy-Panel + Kennzahlen (Seit 2010, Augsburg, 35+), Portrait + Zitat (Virgil Mischok), Scroll-Reveal via IntersectionObserver.
9. **Kontakt** (`#kontakt`) — Ansprechpartner + Direktkontakt. **Platzhalter** `[Name Nachname]`, `[Position / Rolle]`, `[E-Mail-Adresse]`, `[Telefonnummer]` bitte ersetzen.
10. **Arbeiten bei MISCHOK** (`#arbeiten`) — Karriere-CTA über Team-Bild.
11. **Footer** — Logo, Kontakt (+49 341 22 54 900, kontakt@mischok.de), CTA, Impressum/Datenschutz.

---

## 5. Design-System (Kurzreferenz)

CSS-Variablen sind auf `#home-root` gesetzt:

| Token | Wert | Verwendung |
|---|---|---|
| `--bg` | `#F6F6F5` | Seitenhintergrund |
| `--section` | `#E4E3E1` | Sektions-Flächen |
| `--card` | `#EDECEA` | Karten |
| `--navy` / `--accent` | `#002A5C` | Primär / Akzent, Buttons, Headlines |
| `--on-navy` | `#EAE8E1` | Text auf Navy |
| `--slate` | `#384352` | Fließtext |
| `--ink` | `#1A222A` | Zitate |
| `--muted` | `#8C9198` | Sekundär |
| `--line` | `#D5D4D1` | Trennlinien |

**Typografie**
- `--serif`: *Source Serif 4* — Headlines & große Zahlen
- `--sans`: *Helvetica Neue* / Arial — Fließtext, Buttons
- `--mono`: *IBM Plex Mono* — Labels, Meta, Zitat-Zeilen

(Google Fonts werden im `<helmet>` geladen: Source Serif 4 + IBM Plex Mono.)

**Motive**: rechteckige Winkelflächen, Lichtspalt-Metapher, Buttons mit Links-nach-rechts-Verlauf (`linear-gradient(90deg, transparent, #D6D6D6)`), 5px Border-Radius, viel Weißraum, deutschsprachige, zurückhaltende Fachsprache.

---

## 6. Bilder / `<image-slot>`

Bilder sitzen in `<image-slot id="…" placeholder="…">`-Elementen. Manche haben ein `src="./assets/…"` als Default; andere sind leere Platzhalter, die im Editor per Drag-&-Drop befüllt und in `.image-slots.state.json` persistiert werden. Für einen produktiven Build sollte man diese durch feste `<img>`/`<picture>` mit echten Bildpfaden ersetzen. Rohfotos liegen in `uploads/Mischok_2023_ma_*.jpg`.

---

## 7. Offene To-dos vor Go-Live

- Kontakt-Platzhalter ausfüllen (`[Name Nachname]`, `[E-Mail-Adresse]`, `[Telefonnummer]`, Position).
- Alle `<image-slot>`-Platzhalter mit finalen Bildern belegen.
- Impressum & Datenschutz verlinken (aktuell nur Text im Footer).
- Optional: `.dc.html` auf einen Standard-Stack portieren (siehe Abschnitt 3), falls kein `support.js`-Runtime gewünscht ist.
