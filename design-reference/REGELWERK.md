# mischok — Design-Regelwerk der Website

Dieses Dokument beschreibt die verbindlichen Gestaltungsregeln der mischok-Website,
so wie sie in der fertig gebauten Home tatsächlich umgesetzt sind. Es ist die
Referenz dafür, **wie weitere Seiten und Module gebaut werden**, damit die Seite
über die Zeit eine Sprache bleibt.

**Single Source of Truth im Code:** `app/globals.css` → `:root` (Tokens) und die
gemeinsamen Klassen darin. `tailwind.config.ts` spiegelt dieselben Werte. Wer einen
Wert ändert, ändert ihn dort — nicht per Einzelfall in einer Komponente.

---

## 1. Vier Leitprinzipien

Jede Gestaltungsentscheidung wird gegen diese vier Codes geprüft:

1. **Klarheit** — reduziert, ruhig, eindeutig. Kein Dekor ohne Funktion.
2. **Orientierung** — der Nutzer weiß immer, wo er ist und was der nächste Schritt ist.
3. **Vertrauen** — echte Belege statt Behauptungen; nichts Erfundenes.
4. **Kompetenz** — präzise im Detail (Typo, Kanten, Kontrast, Abstände).

---

## 2. Farben

Grundlage ist die offizielle Mischok-Palette (CI-Manual 2020-05-14, S. 17–18).
**Verbindlich sind ausschließlich diese Werte** — keine freihändigen Zwischentöne.

### 2.1 Neutrale „Bühnen"-Farben

| Token | Hex | Rolle |
|---|---|---|
| `--white` | `#FFFFFF` | erhabene/aktive Fläche |
| `--snow` | `#F9F9F9` | durchgehender Seitengrund, ruhende Fläche |
| `--paper` | `#EDEDED` | Grund einer abgesetzten Section |
| `--stone` | `#A5A5A5` | Neutralgrau (Linien/Sekundär abgeleitet) |
| `--ocean` `--metal` `--raven` `--panther` `--midnight` | 657383 … 1A222A | Text-/Dunkeltöne |
| `--change` | `#002A5C` | **Markenblau** |

### 2.2 Die Flächen-Leiter (Wert-Signal)

Abgesetzte Flächen unterscheiden sich **nur in der Helligkeit**, nie in der
Buntheit. „Liegt oben auf" ist ein Helligkeitssignal:

```
PAPER  237  → abgesetzte Section        (--section)
SNOW   249  → Seitengrund, ruhend        (--bg)
WHITE  255  → Karte / erhabene Fläche    (--card)
```

### 2.3 Sonderrolle „Change" (#002A5C)

Das Markenblau ist **Bühne fürs Logo, für Kapitelmarker, Navigation und die EINE
Aktion** (Kontakt-/Erstgespräch-Modul). Es steht für Richtung und Struktur —
deshalb bekommt nicht jede Fläche Blau, sonst verliert das Signal.

### 2.4 Die vier Akzentfarben — nur für Details

| Akzent | Hex | Themenfeld |
|---|---|---|
| Portfolio (Limette) | `#CCFF99` | Referenzen / Projekte |
| Karriere (Amber) | `#FFCC66` | Karriere / „Arbeiten bei mischok" |
| About (Hellblau) | `#99CCFF` | Über uns / Unternehmen |
| Warning (Pink) | `#FF6698` | Hinweise / Warnungen |

**Regel:** Akzente nur für kleine Details, **nie für große Flächen**, immer mit
ausreichendem Kontrast, immer an ihr Themenfeld gebunden.

### 2.5 Flächen-Grundregeln

- Flächen sind **einfarbige Vollflächen** — keine Verläufe, Muster oder
  Hintergrundbilder als Flächen*farbe* (Fotos sind eigene Bildcontainer, kein
  Flächenersatz). **Schatten sind erlaubt** (Karten).
- Text auf Navy: `--on-navy` (`#EAE8E1`). Fließtext: `--slate` (RAVEN). Zitate:
  `--ink` (MIDNIGHT). Sekundär: `--muted`. Linien/Rahmen: `--line`.

---

## 3. Typografie (Formattypen)

Drei Haus-Schriften, jede mit fester Rolle. Keine vierte Schrift hinzunehmen.

| Schrift | Token | Rolle |
|---|---|---|
| **Source Serif 4** | `--serif` | H1, H2, **Zitate** — immer **Gewicht 400** |
| **Calibre** | `--sans` | Fließtext & UI (400 / 500 / 700) |
| **Realtime Rounded** | `--realtime` | Eyebrows / Labels |

### 3.1 Rollen & Regeln

- **H1 / H2 / Zitate:** Serif, **Gewicht 400, keine Fettung.** Lange Aussagen und
  Zitate stehen in Serif 400 — das ist die Stimme der Marke.
- **Eyebrow / Label** (`.eyebrow`): Realtime Rounded, `UPPERCASE`,
  `letter-spacing: 0.1em`, klein.
- **Fließtext** (Calibre), Rolle statt Section-Willkür:
  - `--text-lead` (16–19px) — Section-Intros, Statements, tragende Kartencopy
  - `--text-copy` (15–17px) — Standard-Fließtext
  - `--text-meta` (12–13px) — Kleingedrucktes
  - Zeilenhöhe global `--lh-copy: 1.5` (Ausnahmen nur funktional, nicht stilistisch).
- **Fettung (700)** nur für **kurze, konkrete Labels**, die eine Handlung tragen
  (z. B. Telefonnummer / E-Mail im Kontakt). **Nie in Zitaten oder Headlines.**
- **Schreibweise der Marke:** immer klein — **„mischok"**. Firmierung/Nachname
  („Mischok GmbH", „Kajetan Mischok") groß.

---

## 4. CTA-Typen

Es gibt **eine** vollflächige Primäraktion pro Kontext — der Rest ist Kontur.

| Typ | Klasse | Einsatz | Optik | Hover |
|---|---|---|---|---|
| **Ghost-CTA** | `.cta-ghost` | Standard-CTA außerhalb des Heros | Kontur (1,5px, navy), navy Text, Pfeil `→` | Rahmen dunkler + zarter Blau-Tint, `gap` wächst |
| Ghost auf Dunkel | `.cta-ghost.on-navy` | dieselbe CTA auf Navy-Grund | helle Kontur, `--on-navy` | analog, hell |
| **Primär/Solid** | `.cta-solid` | Header/Footer/Menü „Erstgespräch" | gefüllt navy | *(siehe Hinweis)* |
| Hero-Aktion | `.hc-cta` | die EINE Aktion im Hero | vollflächig blaues Modul | — |
| Kontaktlink | `.contact-link` | Telefon/E-Mail | Textlink mit vorangestelltem Pfeil | Pfeil wandert, Farbe voll |

**Grundregel:** Vollsättigung/Blau bleibt der einen Aktion vorbehalten (Hero,
Kontakt). Alle sekundären CTAs sind Ghost. Ein zweiter, konkurrierender
Vollton-Button in derselben Ansicht wird vermieden.

> **Offener Vereinheitlichungspunkt:** `.cta-solid` (Footer/Burger) trägt aktuell
> noch einen eigenen Hover (`brightness`) statt der Ghost-Interaktion. Ziel:
> gleiche Kontur-/Hover-Regeln wie `.cta-ghost`. Siehe CHANGELOG „Offene Punkte".

---

## 5. Flächen, Karten & Modulkanten

### 5.1 Karten & Glas

- **Karte** = WHITE, `--radius` Rundung, dezenter Schatten.
- **Milchglas** (Text auf Foto, z. B. Zusammenarbeit/Kontakt): navy-getöntes Glas
  (`rgba(0,42,92,0.5)`) + `backdrop-filter: blur(20px)`. Trägt den Kontrast für
  weiße Typo, ohne das Foto dunkel zu überlagern.

### 5.2 Marginale Eckenrundung — DIE Regel

`--radius: 5px` gilt für **jedes** Modul. Karten/Flächen nutzen `border-radius`.
Module mit `clip-path` (Sektionsstufe, Ausbuchtungen, Reiter-Winkel) fasen ihre
**Außenecken über genau diesen Wert** im Polygon — damit das Curving überall
identisch wirkt. Es gibt keine „reine Kante" an Außenecken.

### 5.3 Sektionsstufe / Reiter-Winkel

Die rechtwinklige „Logorahmen"-Kantensprache (`.sec-step`, Reiter-Winkel,
Ausbuchtung an Über/Arbeiten/Kontakt) ist eine bewusste **Marken-Eigenart**:

- Die **Stufe/der Reiter selbst bleibt scharf** (das ist die gewollte Kantigkeit).
- Die **Außenecken sind am `--radius` gefast** (siehe 5.2).
- Der Ausschnitt zeigt bewusst den Grund der Nachbar-Section (Überlappung), damit
  keine fremde Farbe „durchblitzt".

---

## 6. Bewegung (Motion)

- **`prefers-reduced-motion` wird respektiert** — Bewegung ist Zugabe, nie
  Bedingung für Lesbarkeit.
- Auftritte: Headlines/Zeilen fahren aus einer Maske ein (`HeadlineRise`).
- Tiefe: dezente Parallaxe an Bildcontainern.
- Choreografie: Pin-/Snap-Scroll für Kapitel (Ansatz, Zusammenarbeit, Über, mobil
  auch Hero & Insights) — führt durch den Inhalt, statt ihn nur zu zeigen.

---

## 7. Mobile (≤ ~819 px)

Die Home hat mobil eine eigene Choreografie (Basis Hero V2), Details im CHANGELOG
`[0.24.0]`. Prinzipien: Module in den Screen holen (der jeweilige Effekt muss
sichtbar sein), einheitlicher Seiten-Gutter (`clamp(20px,5vw,64px)`), gepinnte
Flächen decken opak, damit nichts durchblitzt.

---

## 8. Do / Don't (Kurzfassung)

**Do**
- Farbwerte nur aus der Palette; Flächen unterscheiden sich über Helligkeit.
- Serif 400 für Headlines & Zitate; Realtime für Eyebrows; Calibre für Copy.
- Eine Primäraktion, alles Weitere als Ghost-CTA.
- `--radius` an allen Außenecken; Reiter/Stufe scharf.
- Marke klein „mischok".

**Don't**
- Keine Verläufe/Muster als Flächenfarbe, keine bunten großen Flächen.
- Keine Fettung in Zitaten/Headlines; keine vierte Schrift.
- Kein zweiter Vollton-CTA neben der Primäraktion.
- Keine reinen (ungefasten) Außenkanten.
- Kein „MISCHOK" in Versalien im Fließtext.
