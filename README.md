# MISCHOK – Sitemap & Wireframe-Dummy

Statischer Wireframe-Dummy zur Konzeption der neuen MISCHOK-Website.
Grundlage: `Mischok-Website Konzeption-texte.pdf` (39 Seiten).

**Live:** https://wolfram-concrete.github.io/mischok-website/

## Zweck

Struktur, Reihenfolge und Textmenge sichtbar machen — nicht Gestaltung.
Alle Texte sind 1:1 aus der Konzeption übernommen: keine Umformulierung,
keine Kürzung, keine Ergänzung. Platzhalter aus dem Dokument
(`[Name Nachname]`, `[Telefonnummer]`) stehen unverändert drin.

Redaktionelle Anmerkungen aus dem Dokument (Freigabevermerke, offene Fragen)
sind als graue Randnotiz markiert und gehören nicht zum Seitentext.

## Platzhalter-Kennzeichnung

Alles, was noch kein finaler Inhalt ist, ist im Wireframe gelb umrandet und
beschriftet — direkt am Element, nicht nur in einer Liste. Drei Arten:

| Vermerk | Bedeutung |
|---|---|
| `Platzhalter` | Inhalt fehlt komplett und muss benannt werden |
| `Freigabe ausstehend` | echtes Kundenzitat, laut Dokument noch nicht freigegeben |
| `Kein Zitat vorhanden` | für diese Referenz liegt keine Kundenstimme vor |

Die Markierung ist reine Wireframe-Auszeichnung und gehört nicht zur späteren
Website. Eine Legende steht auf der Startseite (`index.html`).

## Aufbau

| Datei | Seite |
|---|---|
| `index.html` | Sitemap-Übersicht (Einstieg) |
| `home.html` | Home |
| `einsatzfelder.html` | Einsatzfelder |
| `referenzen.html` | Referenzen-Übersicht |
| `referenz-01-9-levels.html` | Referenz 1 · 9 Levels |
| `referenz-02-weka-pilot-online.html` | Referenz 2 · WEKA Pilot Online |
| `referenz-03-smp-prochange.html` | Referenz 3 · SMP Prochange |
| `referenz-04-consulting-software-team.html` | Referenz 4 · Consulting Software Team |
| `referenz-05-barely-digital.html` | Referenz 5 · Barely Digital / vintrica |
| `ueber-uns.html` | Über uns |
| `insights.html` | Insights (20 Einträge) |
| `karriere.html` | Karriere |
| `erstgespraech.html` | Erstgespräch |
| `rechtliches.html` | Impressum / Datenschutz / Cookie (im Dokument ohne Text) |
| `assets/wireframe.css` | gesamte Darstellung |

Kein Build, kein JavaScript, keine Abhängigkeiten. Lokal ansehen:

```
python3 -m http.server 4173
```

## Verhältnis zu `main`

Dieser Branch (`gh-pages`) ist ein Orphan-Branch ohne gemeinsame History mit
`main`. Die eigentliche Next.js-Websiteentwicklung liegt auf `main` und wird
hiervon nicht berührt.

## Offene Punkte aus der Konzeption

- Über uns: vier Team-Profile ohne Namen, Rollen, Skills
- Karriere: fünf Teamstimmen ohne Name und Rolle; Stellen-Links fehlen
- Erstgespräch: Anzahl der Ansprechpartner offen; Adresse, Telefon, E-Mail fehlen
- Insights: mehrere Einträge ohne weiterführenden Link, STEPS ohne Datum
- Impressum / Datenschutz / Cookie: im Textdokument nicht ausgearbeitet
- Drei Kundenzitate (9 Levels, WEKA, Barely Digital) laut Dokument noch
  final mit den Kunden freizugeben
