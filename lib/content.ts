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
  /** Kachelbild; nebeneinanderliegende Kacheln nutzen unterschiedliche Motive */
  image: string;
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
    image: "/assets/acc-1.jpg",
  },
  {
    n: "02",
    title: "Festgefahrene Projekte lösen",
    card: "Anforderungen verändern sich: Neue Ziele kommen dazu, bestehende Systeme bleiben, die technische Ausgangslage wird komplexer.",
    detail:
      "Manchmal steckt ein Projekt fest, ohne dass klar ist, woran es liegt — am Code, am Prozess, am Team oder am ursprünglichen Ziel. Wir ordnen die Lage, benennen das eigentliche Problem und machen den Weg zum nutzbaren Ergebnis wieder sichtbar.",
    placeholder: "Team bei der Arbeit",
    image: "/assets/acc-2.jpg",
  },
  {
    n: "03",
    title: "Systeme modernisieren",
    card: "Technik und Zielbild passen nicht mehr sauber zusammen.",
    detail:
      "Ein bestehendes System soll modernisiert werden, aber der laufende Betrieb darf nicht kippen. Wir planen den Umbau in Schritten, die tragen — mit klarer Einschätzung, was jetzt sinnvoll ist und was warten kann.",
    placeholder: "Legacy-System / Screen",
    image: "/assets/acc-3.jpg",
  },
  {
    n: "04",
    title: "Fachbereich und IT verbinden",
    card: "Mehr Entwicklungskapazität hilft nur, wenn die Richtung stimmt.",
    detail:
      "Fachabteilung und Entwicklung sprechen oft über dasselbe Projekt, meinen aber unterschiedliche Dinge. Wir übersetzen zwischen den Ebenen, trennen technische von organisatorischen Fragen und bringen beide Seiten auf eine gemeinsame Grundlage.",
    placeholder: "Fachbereich & IT im Gespräch",
    image: "/assets/arbeiten.jpg",
  },
  {
    n: "05",
    title: "Architektur ordnen",
    card: "Wir klären die Lage, ordnen die Optionen und schaffen die Grundlage für eine passende Entscheidung.",
    detail:
      "Eine technische Entscheidung aus der Vergangenheit bremst heute Qualität, Tempo oder Weiterentwicklung. Wir prüfen die Architektur, bereiten tragfähige Entscheidungen vor und zeigen, welcher nächste Schritt Risiken senkt statt sie zu verschieben.",
    placeholder: "Architektur-Skizze",
    image: "/assets/acc-1.jpg",
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
  /** Kartenbild */
  image: string;
};

/** Themen — topics */
export const TOPICS: Topic[] = [
  {
    slot: "topic_1",
    kind: "Vortrag",
    placeholder: "Vortragssituation",
    title: "Retten oder Reimplementieren?",
    desc: "Julius Mischok spricht darüber, wann bestehende Software weiterentwickelt werden kann — und wann ein Neustart fachlich sinnvoller ist.",
    image: "/assets/arbeiten.jpg",
  },
  {
    slot: "topic_2",
    kind: "Fachartikel",
    placeholder: "Team bei der Arbeit",
    title: "Wenn Kapazität zu Komplexität wird",
    desc: "Warum zusätzliche Entwickler ein Projekt nicht automatisch schneller machen — und was in gewachsenen Systemen stattdessen hilft.",
    image: "/assets/acc-3.jpg",
  },
  {
    slot: "topic_3",
    kind: "Vortrag",
    placeholder: "Fachpublikum / Bühne",
    title: "KI im Bestand: Werkzeug, kein Wundermittel",
    desc: "Wo KI in geschäftskritischen Systemen wirklich Zeit spart — und wo sie neue Risiken schafft, die man früh einordnen muss.",
    image: "/assets/acc-1.jpg",
  },
];

/** Referenzen-Unterseite — Intro + Projekte (Texte 1:1 aus Mischok-Website.pdf) */
export const REFERENZEN_INTRO = {
  kicker: "Referenzen",
  headline: "Wenn Software für Ihr Geschäft entscheidend ist",
  text: "Viele Systeme sind eng mit Betrieb, Umsatz oder Produktentwicklung verbunden. Die folgenden Referenzen zeigen, wie wir in solchen Projektlagen arbeiten: bei gewachsenen Plattformen, festen Terminen, technischen Abhängigkeiten und Teams unter Druck.",
};

export type Referenz = {
  n: string;
  slug: string;
  name: string;
  projektlage: string;
  headline: string;
  text: string[];
  facts: { label: string; value: string }[];
  image: string;
};

export const REFERENZEN: Referenz[] = [
  {
    n: "01",
    slug: "referenz-1",
    name: "9 Levels",
    projektlage: "Plattform-Relaunch / Geschäftsmodell weiterentwickeln",
    headline:
      "Eine Plattform neu aufgebaut, damit das Geschäftsmodell weiter wachsen kann",
    text: [
      "9 Levels wollte seine Plattform stärker für langfristige Kundenbegleitung, flexiblere Auswertungen und neue digitale Angebote nutzen. Die bestehende technische Grundlage setzte dafür zu enge Grenzen.",
      "MISCHOK hat die technische Ausgangslage analysiert, die Anforderungen neu geordnet und die Plattform so aufgebaut, dass diese Entwicklung möglich wird.",
    ],
    facts: [
      { label: "Branche", value: "HR-Tech / Organisationsentwicklung" },
      { label: "Rolle", value: "Konzeption, UX/UI, Entwicklung, Projektmanagement" },
      { label: "Team", value: "8 Personen" },
      { label: "Besonderheit", value: "97 % Testabdeckung im Backend" },
    ],
    image: "/assets/acc-1.jpg",
  },
  {
    n: "02",
    slug: "referenz-2",
    name: "WEKA Pilot Online",
    projektlage: "Bestandssystem ersetzen / feste Deadline",
    headline:
      "Ein bestehendes System neu entwickelt, bevor Lizenzverträge den Betrieb begrenzen",
    text: [
      "WEKA brauchte eine neue Anwendung für die Produktion und Online-Darstellung seiner Fachinformationsprodukte. Der Zeitrahmen war nicht frei wählbar, weil bestehende Lizenzverträge ausliefen.",
      "MISCHOK hat Anforderungen, Nutzerführung und technische Integration zusammengeführt und die Anwendung so umgesetzt, dass sie sich in die bestehende Plattform einfügt und langfristig wartbar bleibt.",
    ],
    facts: [
      { label: "Branche", value: "Fachinformation / Medien" },
      { label: "Rolle", value: "Analyse, Konzeption, UX/UI, Backend, Frontend" },
      { label: "Besonderheit", value: "feste Deadline durch auslaufende Lizenzverträge" },
    ],
    image: "/assets/acc-2.jpg",
  },
  {
    n: "03",
    slug: "referenz-3",
    name: "SMP Prochange",
    projektlage: "Beliebtes Altsystem erneuern / laufender Betrieb",
    headline:
      "Ein beliebtes System neu aufgebaut, ohne die Nutzer:innen im laufenden Betrieb zu verlieren",
    text: [
      "SMP Prochange nutzte ein Projektmanagement-Tool, das in großen Beratungsprojekten etabliert war. Die Anwendung funktionierte im Alltag, war technisch aber nicht mehr gut wartbar.",
      "MISCHOK hat Anforderungen, Architektur und Oberfläche neu geordnet und das System so umgesetzt, dass Performance, Wartbarkeit und vertraute Nutzerführung zusammenpassen.",
    ],
    facts: [
      { label: "Branche", value: "Unternehmensberatung / Restrukturierung" },
      { label: "Rolle", value: "Anforderungsworkshop, Architektur, UX/UI, Entwicklung" },
      { label: "Besonderheit", value: "technische Erneuerung ohne Bruch in der Nutzung" },
    ],
    image: "/assets/acc-3.jpg",
  },
  {
    n: "04",
    slug: "referenz-4",
    name: "Consulting Software Team",
    projektlage: "Softwareteam ausrichten / Entwicklung steuerbar machen",
    headline:
      "Ein Softwareteam neu ausgerichtet, damit Entwicklung wieder planbar wird",
    text: [
      "Ein Unternehmen hatte ein großes internes Softwareteam aufgebaut. Die fachliche Kompetenz war vorhanden, trotzdem kamen Entwicklung und Produktfortschritt nicht in der erwarteten Form zusammen.",
      "MISCHOK hat Arbeitsweise, Teamstruktur und technische Abläufe eingeordnet und daraus eine Struktur entwickelt, mit der das Team wieder klarer arbeiten, liefern und entscheiden konnte.",
    ],
    facts: [
      { label: "Branche", value: "Software / digitale Produktentwicklung" },
      { label: "Rolle", value: "Analyse, technische Einordnung, Teamstruktur, Prozessverbesserung" },
      { label: "Besonderheit", value: "bestehendes Team wurde arbeitsfähiger gemacht, nicht ersetzt" },
    ],
    image: "/assets/arbeiten.jpg",
  },
  {
    n: "05",
    slug: "referenz-5",
    name: "Barely Digital / vintrica",
    projektlage: "Laufendes Projekt übernehmen / Release unter Zeitdruck",
    headline:
      "Ein laufendes App-Projekt übernommen, damit der Release-Termin hält",
    text: [
      "Barely Digital wollte den bestehenden Service vintrica zusätzlich als App veröffentlichen. Der Release-Termin war durch den Stichtag der Schweizer Vignetten eng gesetzt.",
      "MISCHOK ist in das laufende Projekt eingestiegen, hat das Frontend in Flutter übernommen und die Umsetzung so strukturiert, dass Fortschritt, Testing und Abstimmung bis zum Release transparent blieben.",
    ],
    facts: [
      { label: "Branche", value: "Mobilität / digitale Mautzahlungen" },
      { label: "Rolle", value: "Flutter-Entwicklung, technische Abstimmung, Testing-Unterstützung" },
      { label: "Zeitrahmen", value: "6 Wochen bis zur Veröffentlichung" },
    ],
    image: "/assets/acc-1.jpg",
  },
];
