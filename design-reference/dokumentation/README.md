# Home-Dokumentation — Auflösung zum UI/UX-Kickoff-Board

Stellt die gebaute Startseite neben die Parameter aus dem Figma-Board
„Mischok Website UI UX Kickoff". Je Sektion: reale Aufnahme, Aufgabe, die
Design-Codes, auf die sie einzahlt, und die Entscheidung dahinter — inklusive
der offenen Punkte.

## Dateien

| Datei | Zweck |
|---|---|
| `MISCHOK-Home-Dokumentation.pdf` | **Das Ergebnis.** 13 Seiten A4 quer — direkt in Figma platzierbar. |
| `home-dokumentation.html` | Die Quelle. Hier wird inhaltlich geändert. |
| `shots/` | Aufnahmen. `00-alt-hero.jpg` = bestehende mischok.de, Rest = neue Home. |

## Neu erzeugen

Im Browser öffnen und drucken (A4 · Querformat · Ränder: keine ·
Hintergrundgrafiken: an), oder per Chrome headless:

```bash
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --allow-file-access-from-files \
  --no-pdf-header-footer --virtual-time-budget=15000 \
  --print-to-pdf="MISCHOK-Home-Dokumentation.pdf" \
  "file://$PWD/home-dokumentation.html"
```

## Konstruktionshinweise

- **A4 quer**, weil die Screenshots breit sind — hochkant müsste alles winzig
  skalieren.
- `.page` hat eine **feste** Höhe (`height: 210mm`). Mit `min-height` wachsen
  Seiten und der Druck bricht sie auf zwei Blätter um (aus 13 wurden 16).
- Die Aufnahmen für Arbeitsweise und Zusammenarbeit sind auf ihr **Inhaltsband
  beschnitten** — ungeschnitten sind sie zu großen Teilen leer und passen zu
  dritt nicht auf eine Seite.
- Die Aufnahme der bestehenden Seite entstand über Chrome headless auf einer
  **lokalen Kopie**, in der der Cookie-Dialog per CSS ausgeblendet ist. Es wurde
  **keine Einwilligung gesetzt** — weder angenommen noch abgelehnt.

## Stand

Die Aufnahmen der neuen Home zeigen den Stand vom 17.07.2026, ~13:58 Uhr. Zwei
Dinge sind seither geändert und in den Bildern **noch nicht** zu sehen:
Kontakt-Karte linksbündig, Karriere-CTA in Ghost-Optik, Hero-Bento mit
Seitenrand. Die betroffenen Seiten weisen darauf hin.
