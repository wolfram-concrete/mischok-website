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
  /** Schlüssel der animierten Icon-Grafik (siehe Zusammenarbeit.tsx) */
  icon: "einordnung" | "tiefe" | "menschen";
  slot: string;
  src: string;
  placeholder: string;
  title: string;
  text: string;
};

/** Zusammenarbeit — ACC (horizontales Accordion) */
export const ACC: AccCard[] = [
  {
    icon: "einordnung",
    slot: "acc_1",
    src: "/assets/Mischok_2023_ma_245.jpg",
    placeholder: "Gespräch im Team",
    title: "Klare Einordnung statt später Korrektur",
    text: "Ein Projekt wird nicht besser, wenn Risiken zu lange offenbleiben. Wenn ein Ziel technisch, zeitlich oder organisatorisch nicht trägt, muss das früh auf den Tisch. Nicht als Problem, sondern als Grundlage für eine Entscheidung, die später noch Bestand hat.",
  },
  {
    icon: "tiefe",
    slot: "acc_2",
    src: "/assets/acc-3.jpg",
    placeholder: "Konzentrierte Analyse",
    title: "Fachliche Tiefe vor schnellen Antworten",
    text: "Gewachsene Systeme versteht man nicht aus der Distanz. Wir wollen nachvollziehen, warum etwas so geworden ist, welche Abhängigkeiten bestehen und wo Veränderung realistisch möglich ist. Erst dann lässt sich beurteilen, welcher Weg trägt.",
  },
  {
    icon: "menschen",
    slot: "acc_3",
    src: "/assets/Mischok_2025_ma_156.jpg",
    placeholder: "Team in der Besprechung",
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
/**
 * Themen/Insights. Bilder bewusst aus echtem Material statt Stock, passend zum
 * jeweiligen Format: redaktionelle Vortragsfotos (assets/Redaktionel) für
 * Vortrag und Veranstaltung, ein reales MISCHOK-Workshopfoto für den Workshop.
 */
export const TOPICS: Topic[] = [
  {
    slot: "topic_1",
    kind: "Vortrag",
    placeholder: "Vortragssituation",
    title: "Retten oder Reimplementieren?",
    desc: "Julius Mischok spricht darüber, wann bestehende Software weiterentwickelt werden kann — und wann ein Neustart fachlich sinnvoller ist.",
    image: "/assets/Redaktionel/54962038207_917685d4d5_o.jpg",
  },
  {
    slot: "topic_2",
    kind: "Veranstaltung",
    placeholder: "Veranstaltung / Publikum",
    title: "STEPS",
    desc: "Eine Veranstaltung von MISCHOK in Augsburg für Menschen aus Mittelstand, Technologie und Unternehmensentwicklung.",
    image: "/assets/Redaktionel/20250710_110909.jpg",
  },
  {
    slot: "topic_3",
    kind: "Workshop",
    placeholder: "Workshop-Situation",
    title: "KI in der Softwareentwicklung",
    desc: "Ein Workshop zum praktischen Einsatz von KI in Entwicklungsprozessen — mit Blick auf Qualität, Verantwortung und konkrete Arbeitsweisen im Team.",
    image: "/assets/Mischok_2023_ma_334.jpg",
  },
];

/**
 * Aus der Praxis — kuratierte Trust-/Sichtbarkeits-Karten (kein LinkedIn-Embed).
 * Inhalte an die realen MISCHOK-Projektthemen angelehnt (Mischok-Website.pdf,
 * Referenz 9 Levels). Verlinken auf das LinkedIn-Profil von Kajetan Mischok,
 * solange keine konkreten Beitrags-URLs vorliegen.
 */
export const PRAXIS_LINKEDIN = "https://www.linkedin.com/in/kajetan-mischok/";

export type PraxisCard = {
  kind: string;
  title: string;
  teaser: string;
  author: string;
  href: string;
};

export const PRAXIS: PraxisCard[] = [
  {
    kind: "LinkedIn Beitrag",
    title: "Wann sich der Umbau lohnt – und wann nicht",
    teaser:
      "Nicht jedes gewachsene System muss ersetzt werden. Woran wir erkennen, ob Weiterentwicklung trägt oder ein Neuaufbau die ehrlichere Entscheidung ist.",
    author: "Kajetan Mischok",
    href: PRAXIS_LINKEDIN,
  },
  {
    kind: "Fachbeitrag",
    title: "Was 8.500 Tests mit Verantwortung zu tun haben",
    teaser:
      "Test Driven Development ist für uns kein Selbstzweck: Es hält geschäftskritische Systeme veränderbar — auch dann, wenn es im laufenden Betrieb ernst wird.",
    author: "MISCHOK",
    href: PRAXIS_LINKEDIN,
  },
  {
    kind: "LinkedIn Beitrag",
    title: "KI im Bestand, ohne Illusionen",
    teaser:
      "Wo KI in unseren Projekten wirklich hilft — bei Features, Bugfixing und Ticket-Refinement — und warum wir Architekturentscheidungen bewusst nicht an sie abgeben.",
    author: "Kajetan Mischok",
    href: PRAXIS_LINKEDIN,
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
  /** Ziel einer echten Detailseite; nur gesetzt, wo eine Detailseite existiert. */
  detailHref?: string;
};

/**
 * Referenz-Detailseite — 9 Levels. Inhalt 1:1 aus Mischok-Website.pdf,
 * Abschnitt „REFERENZ 01 / 9 Levels". Die Kundenstimme ist real, muss vor
 * finaler Veröffentlichung aber noch von 9 Levels freigegeben werden.
 */
export const REFERENZ_9LEVELS = {
  slug: "9-levels",
  name: "9 Levels",
  kunde: "9 Levels of Value Systems GmbH",
  projektlage: "Plattform-Relaunch / Geschäftsmodell weiterentwickeln",
  headline:
    "Eine Plattform neu aufgebaut, damit das Geschäftsmodell weiter wachsen kann",
  image: "/assets/acc-1.jpg",
  hero: [
    "9 Levels wollte seine Kunden langfristiger begleiten, Auswertungen flexibler machen und die Plattform als Grundlage für weitere Angebote nutzen. Die bestehende Software setzte dafür zu enge technische Grenzen.",
    "MISCHOK hat die technische Ausgangslage analysiert, die Anforderungen neu geordnet und die Plattform so aufgebaut, dass neue Produkte, flexiblere Auswertungen und langfristige Kundenbegleitung möglich werden.",
  ],
  facts: [
    { label: "Kunde", value: "9 Levels of Value Systems GmbH" },
    { label: "Branche", value: "HR-Tech, Organisationsentwicklung, Beratung / Coaching" },
    { label: "Projektart", value: "Relaunch einer Softwareplattform" },
    { label: "Rolle von MISCHOK", value: "Konzeption, UX/UI Design, Softwareentwicklung, Projektmanagement" },
    { label: "Umfang", value: "1.606 Stunden Entwicklung, ohne Konzeption und Design" },
    { label: "Qualitätssicherung", value: "97 % Testabdeckung im Backend (TDD), insgesamt 8.500 Tests" },
    { label: "MISCHOK-Team", value: "8 Personen: Projektleitung, UX/UI, Softwarearchitektur, Tech Lead, Frontend Lead sowie Senior und Junior Software Engineering" },
    { label: "Technologie", value: "Spring Boot, React, PostgreSQL, STACKIT, Stripe, Spring Security" },
  ] as { label: string; value: string }[],
  sections: [
    {
      title: "Ausgangslage",
      body: [
        "9 Levels arbeitet mit einer digitalen Plattform, über die Analysen ausgespielt, Ergebnisse ausgewertet und Kundenprojekte gesteuert werden. Die Plattform ist damit kein Nebenprodukt, sondern ein zentraler Teil des Geschäftsmodells.",
        "Über die Jahre war das System gewachsen. Was lange funktioniert hatte, wurde für die nächsten Schritte zunehmend eng: Änderungen wurden aufwendiger, technische Abhängigkeiten nahmen zu und neue fachliche Anforderungen ließen sich nicht mehr sauber auf der bestehenden Grundlage abbilden.",
        "Gleichzeitig sollte die Plattform künftig mehr leisten. Sie sollte flexiblere Auswertungen ermöglichen, Kund:innen länger im Prozess begleiten und Raum für neue digitale Angebote schaffen.",
        "Damit war klar: Eine weitere Anpassung der bestehenden Lösung hätte nur kurzfristig geholfen. Für die nächste Entwicklungsstufe brauchte 9 Levels eine neue technische Grundlage.",
      ],
    },
    {
      title: "Was zuerst geklärt werden musste",
      body: [
        "Es ging nicht darum, noch eine weitere Änderung in die bestehende Plattform zu bekommen. Die wichtigere Frage war: Welche technische Grundlage braucht 9 Levels, damit die Plattform auch die nächsten Schritte des Geschäftsmodells tragen kann?",
        "Wenn man in so einer Lage einfach weiterbaut, wird kurzfristig vielleicht etwas fertig. Das eigentliche Problem bleibt aber bestehen. Deshalb mussten wir zuerst klären, welche Teile des Systems noch tragen, welche Komplexität raus muss und wo ein neuer Aufbau die bessere Entscheidung ist.",
      ],
    },
    {
      title: "Rolle von MISCHOK",
      body: [
        "MISCHOK hat die technische Ausgangslage eingeordnet und die fachlichen Anforderungen so strukturiert, dass daraus eine tragfähige Richtung für den Relaunch entstehen konnte.",
        "Im ersten Schritt entstand eine vollständige Konzeption der neuen Plattform. Nach der Schätzung wurde deutlich, dass die Lösung noch zu groß gedacht war. Statt daraus direkt ein umfangreiches Entwicklungsprojekt zu machen, ging das Projektteam noch einmal zurück in die Konzeption.",
        "Funktionen wurden priorisiert, Komplexität reduziert und der Aufbau geschärft. So entstand eine Plattformlogik, die besser zum tatsächlichen Bedarf, zum Budget und zur weiteren Entwicklung von 9 Levels passte.",
      ],
    },
    {
      title: "Projektteam",
      body: [
        "Für MISCHOK war ein festes Team aus 8 Personen beteiligt. Die Rollen lagen in Projektleitung, UX/UI, Softwarearchitektur, Tech Lead, Frontend Lead sowie Senior und Junior Software Engineering.",
        "Die Schlüsselrollen blieben über den Projektverlauf stabil. Dadurch blieb das technische Verständnis im Team und Entscheidungen mussten nicht immer wieder neu aufgebaut werden.",
      ],
    },
    {
      title: "Vorgehen",
      body: [
        "Zu Beginn standen Discovery, User Journey Mapping und Feature-Definition. Daraus entstand die Konzeption der neuen Plattform.",
        "Nach der Überarbeitung folgten UI/UX-Ausarbeitung, Umsetzung und paralleles Testing. Technisch wurde auf eine Grundlage gesetzt, die langfristig betreibbar bleibt.",
      ],
      list: [
        "Spring Boot im Backend",
        "React im Frontend",
        "PostgreSQL als relationale Datenbank",
        "STACKIT für Hosting in Deutschland",
        "Stripe für Zahlungen",
        "Spring Security für die eigene User-Verwaltung",
      ],
      after: [
        "Eine fertige Authentifizierungslösung wurde geprüft, aber nicht übernommen. Zu viele Sonderfälle und Datenschutzanforderungen hätten später neue Grenzen erzeugt. Stattdessen wurde die User-Verwaltung selbst mit Spring Security aufgebaut. Das war aufwendiger, aber für diese Plattform die bessere Entscheidung.",
      ],
    },
    {
      title: "Qualitätssicherung",
      body: [
        "Die Qualitätssicherung lief während der Entwicklung mit. Im Backend wurde konsequent mit Test Driven Development gearbeitet. Am Ende standen 97 % Testabdeckung und rund 8.500 Tests.",
        "Dazu kamen internes Review durch das Projektmanagement und paralleles Testing durch 9 Levels während der Sprints.",
        "Auch KI wurde im Projekt eingesetzt: nicht für Architektur oder Grundentscheidungen, sondern unterstützend bei Features, Bugfixing, Anpassungen und Ticket-Refinement.",
      ],
    },
    {
      title: "Ergebnis",
      body: [
        "Mit der neuen Plattform kann 9 Levels Auswertungen flexibler konfigurieren, Ergebnisse differenzierter betrachten und Kundenprojekte langfristiger begleiten.",
        "Die technische Abhängigkeit von geteilter Infrastruktur wurde beendet. Das Hosting auf STACKIT unterstützt Gespräche mit Datenschutzverantwortlichen und Betriebsräten. Neue digitale Angebote können auf der neuen Grundlage entwickelt werden.",
        "Die Plattform ist damit wieder anschlussfähig an das, was 9 Levels fachlich und geschäftlich als Nächstes vorhat.",
      ],
    },
  ] as { title: string; body: string[]; list?: string[]; after?: string[] }[],
  kundenstimme: {
    quote:
      "Was die Zusammenarbeit sehr ausgezeichnet hat, ist dieses Grundvertrauen: Ich habe mehrfach erlebt, dass jemand aus dem Team sagt, das ist eine komplizierte Sache, das dauert schon anderthalb bis zwei Tage. Dann schläft er eine Nacht drüber und sagt am nächsten Tag: Ich habe noch eine andere Idee, und mit zwei bis drei Stunden lösen wir das anders. Ich habe wirklich das Gefühl, dass wir ein Projektteam sind und gemeinsam die besten Lösungen für das Projekt suchen.",
    author: "Sonja Wittig",
    role: "Managing Partner, 9 Levels",
  },
  mitnehmen: {
    title: "Was wir aus diesem Projekt mitnehmen",
    body: [
      "Der wichtigste Moment lag vor der Umsetzung. Die erste Lösung war fachlich nachvollziehbar, aber noch zu groß. Statt daraus einfach ein großes Entwicklungsprojekt zu machen, wurde die Konzeption noch einmal geschärft. Genau dadurch wurde die spätere Umsetzung klarer.",
      "Für uns zeigt dieses Projekt sehr gut, wann MISCHOK besonders hilfreich ist: wenn eine bestehende Software für das Geschäft wichtig bleibt, aber die technische Grundlage nicht mehr zu den nächsten Anforderungen passt. Dann reicht es nicht, neue Funktionen zu bauen. Zuerst muss klar werden, welche Entscheidung das System wieder beweglich macht.",
    ],
  },
  cta: {
    title: "Ähnliche Projektlage besprechen",
    text: "Bestehende Plattformen lassen sich selten über eine kurze Anfrage erklären. In einem Gespräch lässt sich meist schnell klären, wo die technischen Grenzen liegen und welcher nächste Schritt sinnvoll ist.",
    button: "Projektlage klären",
  },
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
    detailHref: "/referenzen/9-levels",
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
