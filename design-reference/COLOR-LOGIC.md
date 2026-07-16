# Mischok Farbpalette & Farblogik

Verbindliche Grundlage aus dem **Mischok CI-Manual** (Stand 2020-05-14, S. 17–18).
Umgesetzt als CSS-Variablen in [`app/globals.css`](../app/globals.css) und als
Tailwind-Farben in [`tailwind.config.ts`](../tailwind.config.ts).

## Neutrale „Bühnen"-Farben (Grau-/Blautöne)

Einfarbige Flächen sind die **Bühne** für zusammengehörige Inhalte: Sie gliedern,
strukturieren und geben einen Stimmungsrahmen.

| Name      | Token         | HEX       | RGB           | Pantone          |
|-----------|---------------|-----------|---------------|------------------|
| White     | `--white`     | `#FFFFFF` | 255, 255, 255 | –                |
| Snow      | `--snow`      | `#F9F9F9` | 249, 249, 249 | –                |
| Paper     | `--paper`     | `#EDEDED` | 237, 237, 237 | –                |
| Stone     | `--stone`     | `#A5A5A5` | 165, 165, 165 | Cool Gray 6 C    |
| Ocean     | `--ocean`     | `#657383` | 101, 115, 131 | 4136 C           |
| Metal     | `--metal`     | `#4F5B6A` |  79,  91, 106 | 4139 C           |
| Raven     | `--raven`     | `#384352` |  56,  67,  82 | 8605 C           |
| Panther   | `--panther`   | `#27323F` |  39,  50,  63 | 7546 C           |
| Midnight  | `--midnight`  | `#1A222A` |  26,  34,  42 | 532 C            |
| **Change**| `--change`    | `#002A5C` |   0,  42,  92 | 648 C            |

**Change** (Markenblau) hat eine **Sonderrolle**: Bühne ausschließlich fürs Logo
sowie für **Kapitelmarker und Navigationselemente** — immer als Verweis auf
Richtung, Veränderung, Struktur. Damit ist Change stets ans Logo und die ganze
Marke gekoppelt.

## Akzentfarben (bunt · nur für Details)

Brechen das nüchterne Grau/Blau bewusst auf, werden **je nach Zielgruppe/Kontext**
gewählt. **Nur für Details, nie für große Flächen**, stets mit ausreichendem
Kontrast.

| Name      | Token         | HEX       | RGB           | Pantone | Kontext / Einsatz                       |
|-----------|---------------|-----------|---------------|---------|-----------------------------------------|
| Portfolio | `--portfolio` | `#CCFF99` | 204, 255, 153 | 2282 C  | Referenzen / Projekte                   |
| Karriere  | `--karriere`  | `#FFCC66` | 255, 204, 102 | 134 C   | Karriere / „Arbeiten bei MISCHOK"       |
| About     | `--about`     | `#99CCFF` | 153, 204, 255 | 291 C   | Über uns / Unternehmen                  |
| Warning   | `--warning`   | `#FF6698` | 255, 102, 152 | 190 C   | Hinweise / Warnungen                    |

## Nutzungsregeln (CI-Manual S. 18)

- **Nur einfarbige Flächen/Objekte** — keine Verläufe, Muster, Hintergrund-
  texturen oder Hintergrundbilder. Schatten sind erlaubt.
- **Akzentfarben nur für Details**, nicht für große Flächen.
- Immer **ausreichender Kontrast** zwischen Hinter- und Vordergrund. Die hellen
  Akzente (Portfolio, About) sind als Textfarbe auf Weiß ungeeignet — besser als
  Vollflächen-Marker, Chips, kleine Balken oder auf dunklem Grund einsetzen.
- Pro Gestaltung möglichst **ein Kommunikationsziel** im Fokus.

## Semantische Tokens (auf die Palette gemappt)

Die bestehende Website nutzt semantische Aliase, die auf der offiziellen Palette
aufsetzen:

| Semantisch  | = Palette   | Zweck                       |
|-------------|-------------|-----------------------------|
| `--navy` / `--accent` | `--change` (`#002A5C`) | Primärfarbe, Logo, Navigation |
| `--slate`   | `--raven` (`#384352`)  | Fließtext                   |
| `--ink`     | `--midnight` (`#1A222A)`| Zitate / kräftiger Text     |
| `--bg`      | `#F6F6F5` (Off-White zwischen Snow & Paper) | Seitenhintergrund |
| `--section` | `#E4E3E1`   | Sektionsflächen             |
| `--card`    | `#EDECEA` (≈ Paper)     | Karten                      |
| `--muted`   | `#8C9198` (zw. Stone & Ocean) | Sekundärtext          |
| `--line`    | `#D5D4D1`   | Trennlinien / Rahmen        |
