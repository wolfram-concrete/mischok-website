/**
 * Verbindliche Inhaltstexte — 1:1 aus `MISCHOK Home.dc.html` (renderVals()).
 * Diese Datei ist die einzige Quelle für die Copy der Website.
 */

export type Field = {
  n: string;
  title: string;
  card: string;
  detail: string;
  placeholder: string;
};

/** Einsatzfelder — FIELDS (01–05) */
export const FIELDS: Field[] = [
  {
    n: "01",
    title: "Bestehende Software weiterentwickeln",
    card: "Ihre Software ist Teil des laufenden Betriebs.",
    detail:
      "Gewachsene Systeme müssen oft weiterlaufen, während sie verändert werden. Wir prüfen, was bleiben kann, wo Risiken liegen und wie Entwicklung möglich bleibt, ohne den Betrieb unnötig zu gefährden.",
    placeholder: "Portrait — Julius Mischok",
  },
  {
    n: "02",
    title: "Festgefahrene Projekte lösen",
    card: "Anforderungen verändern sich: Neue Ziele kommen dazu, bestehende Systeme bleiben, die technische Ausgangslage wird komplexer.",
    detail:
      "Manchmal steckt ein Projekt fest, ohne dass klar ist, woran es liegt — am Code, am Prozess, am Team oder am ursprünglichen Ziel. Wir ordnen die Lage, benennen das eigentliche Problem und machen den Weg zum nutzbaren Ergebnis wieder sichtbar.",
    placeholder: "Team bei der Arbeit",
  },
  {
    n: "03",
    title: "Systeme modernisieren",
    card: "Technik und Zielbild passen nicht mehr sauber zusammen.",
    detail:
      "Ein bestehendes System soll modernisiert werden, aber der laufende Betrieb darf nicht kippen. Wir planen den Umbau in Schritten, die tragen — mit klarer Einschätzung, was jetzt sinnvoll ist und was warten kann.",
    placeholder: "Legacy-System / Screen",
  },
  {
    n: "04",
    title: "Fachbereich und IT verbinden",
    card: "Mehr Entwicklungskapazität hilft nur, wenn die Richtung stimmt.",
    detail:
      "Fachabteilung und Entwicklung sprechen oft über dasselbe Projekt, meinen aber unterschiedliche Dinge. Wir übersetzen zwischen den Ebenen, trennen technische von organisatorischen Fragen und bringen beide Seiten auf eine gemeinsame Grundlage.",
    placeholder: "Fachbereich & IT im Gespräch",
  },
  {
    n: "05",
    title: "Architektur ordnen",
    card: "Wir klären die Lage, ordnen die Optionen und schaffen die Grundlage für eine passende Entscheidung.",
    detail:
      "Eine technische Entscheidung aus der Vergangenheit bremst heute Qualität, Tempo oder Weiterentwicklung. Wir prüfen die Architektur, bereiten tragfähige Entscheidungen vor und zeigen, welcher nächste Schritt Risiken senkt statt sie zu verschieben.",
    placeholder: "Architektur-Skizze",
  },
];

export type Point = {
  n: string;
  title: string;
  detail: string;
};

/** Ansatz — POINTS (01–03) */
export const POINTS: Point[] = [
  {
    n: "01",
    title: "Zuerst verstehen, was wirklich entschieden werden muss",
    detail:
      "Bevor wir Lösungen vorschlagen, steigen wir tief in System, Code und Kontext ein. Wir trennen technische von organisatorischen Fragen und benennen das eigentliche Problem — auch wenn es unbequem ist.",
  },
  {
    n: "02",
    title: "Einen Weg vorschlagen, der im Betrieb trägt",
    detail:
      "Wir planen Veränderung in Schritten, die der laufende Betrieb aushält. Sie bekommen eine ehrliche Einschätzung, was jetzt sinnvoll ist, was warten kann und welches Risiko jede Option mit sich bringt.",
  },
  {
    n: "03",
    title: "Verantwortung bis zum nutzbaren Ergebnis übernehmen",
    detail:
      "Wir begleiten die Umsetzung mit erfahrenen Köpfen, die persönlich einstehen — bis zu dem Punkt, an dem die Software wieder verlässlich das tut, was Ihr Geschäft von ihr braucht.",
  },
];

export type AccCard = {
  icon: string;
  slot: string;
  src: string;
  placeholder: string;
  title: string;
  text: string;
};

/** Zusammenarbeit — ACC (horizontales Accordion) */
export const ACC: AccCard[] = [
  {
    icon: "/assets/icon-list.svg",
    slot: "acc_1",
    src: "/assets/acc-1.jpg",
    placeholder: "Meeting / Einordnung",
    title: "Klare Einordnung statt später Korrektur",
    text: "Ein Projekt wird nicht besser, wenn Risiken zu lange offenbleiben. Wenn ein Ziel technisch, zeitlich oder organisatorisch nicht trägt, muss das früh auf den Tisch. Nicht als Problem, sondern als Grundlage für eine Entscheidung, die später noch Bestand hat.",
  },
  {
    icon: "/assets/icon-brain.svg",
    slot: "acc_2",
    src: "/assets/acc-3.jpg",
    placeholder: "Konzentrierte Analyse",
    title: "Fachliche Tiefe vor schnellen Antworten",
    text: "Gewachsene Systeme versteht man nicht aus der Distanz. Wir wollen nachvollziehen, warum etwas so geworden ist, welche Abhängigkeiten bestehen und wo Veränderung realistisch möglich ist. Erst dann lässt sich beurteilen, welcher Weg trägt.",
  },
  {
    icon: "/assets/icon-people.svg",
    slot: "acc_3",
    src: "/assets/acc-2.jpg",
    placeholder: "Sichtbare Verantwortung",
    title: "Verantwortliche Menschen bleiben sichtbar",
    text: "Vertrauen entsteht nicht zu Prozessen, sondern zu Menschen. Deshalb bleibt bei uns sichtbar, wer eine Lage einschätzt, Entscheidungen mit vorbereitet und ein Projekt fachlich begleitet. Gerade dann, wenn aus einer ersten Einschätzung echte Verantwortung wird.",
  },
];

export type Topic = {
  slot: string;
  kind: string;
  placeholder: string;
  title: string;
  desc: string;
};

/** Themen — topics */
export const TOPICS: Topic[] = [
  {
    slot: "topic_1",
    kind: "Vortrag",
    placeholder: "Vortragssituation",
    title: "Retten oder Reimplementieren?",
    desc: "Julius Mischok spricht darüber, wann bestehende Software weiterentwickelt werden kann — und wann ein Neustart fachlich sinnvoller ist.",
  },
  {
    slot: "topic_2",
    kind: "Fachartikel",
    placeholder: "Team bei der Arbeit",
    title: "Wenn Kapazität zu Komplexität wird",
    desc: "Warum zusätzliche Entwickler ein Projekt nicht automatisch schneller machen — und was in gewachsenen Systemen stattdessen hilft.",
  },
  {
    slot: "topic_3",
    kind: "Vortrag",
    placeholder: "Fachpublikum / Bühne",
    title: "KI im Bestand: Werkzeug, kein Wundermittel",
    desc: "Wo KI in geschäftskritischen Systemen wirklich Zeit spart — und wo sie neue Risiken schafft, die man früh einordnen muss.",
  },
];
