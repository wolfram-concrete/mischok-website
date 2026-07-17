/**
 * Medien — „Sie kennen unsere Experten aus": Fachmedien und Konferenzen, in
 * denen mischok-Leute publizieren und sprechen. Die Leiste steht bewusst kurz
 * vor dem Kontakt-Modul: sie ist der letzte Beleg vor der Aufforderung.
 *
 * Herkunft: die Marken stehen so bereits auf der bestehenden mischok.de
 * („Sie kennen unsere Experten aus:"). Es ist also kein neuer Anspruch, sondern
 * ein vorhandener, der auf der neuen Home bisher fehlte.
 *
 * Die Logos lagen dort als SVG mit eingebettetem Rasterbild vor — zusammen
 * 941 KB, einzelne bis 413 KB. Sie sind auf Anzeigegröße gerendert und auf ihren
 * Inhalt beschnitten (public/social/medien/, zusammen ~380 KB).
 *
 * NICHT übernommen sind die Magazin-COVER (Java Magazin, iX, entwickler,
 * jaxmagazine) — als Titelbilder sind sie in einer Logoleiste unlesbar. Für
 * diese drei Titel gibt es auf der alten Seite kein Logo, nur Ausgaben-Cover.
 */

/**
 * `href` = die Seite beim Medium, die den Beleg trägt (Speaker-Profil, Autoren-
 * seite oder der Artikel selbst). Ohne `href` steht das Logo unverlinkt.
 *
 * WOHER die Links stammen: NICHT von der alten mischok.de — dort sind diese
 * Logos reine <img> ohne <a>, es gab also nichts auszulesen. Die Ziele kommen
 * aus `public/social/trust-feed.json` (dem belegten Trust-Depot) bzw. sind
 * einzeln gegengeprüft: HTTP 200 und der Name „Mischok" steht nachweislich auf
 * der Zielseite. Wer hier etwas ergänzt, prüft bitte genauso — ein Logo, das
 * ins Leere oder auf eine bloße Startseite zeigt, behauptet einen Beleg,
 * der keiner ist.
 */
type Medium = { file: string; name: string; href?: string; beleg?: string };

/** Reihenfolge: ruhige Wortmarken zuerst, damit die Leiste nicht flimmert. */
const MEDIEN: Medium[] = [
  {
    file: "informatik-aktuell.png",
    name: "Informatik Aktuell",
    href: "https://www.informatik-aktuell.de/entwicklung/methoden/mutation-testing-mit-pit.html",
    beleg: "Fachartikel „Mutation Testing mit PIT“ (Trust-Depot)",
  },
  {
    file: "javapro.png",
    name: "JAVAPRO",
    href: "https://javapro.io/author/juliusmischok/",
    beleg: "Autorenseite Julius Mischok",
  },
  {
    file: "jax.png",
    name: "JAX",
    href: "https://jax.de/speaker/julius-mischok/",
    beleg: "Speaker-Profil (Trust-Depot)",
  },
  {
    file: "w-jax.png",
    name: "W-JAX",
    // jax.de traegt JAX und W-JAX gemeinsam — dasselbe Speaker-Profil ist
    // fuer beide Marken die belegende Seite. Deshalb hier bewusst dasselbe Ziel.
    href: "https://jax.de/speaker/julius-mischok/",
    beleg: "Speaker-Profil (JAX/W-JAX teilen sich die Seite)",
  },
  {
    file: "javaland.png",
    name: "JavaLand",
    href: "https://meine.doag.org/events/javaland/2023/agenda/#eventDay.all#textSearch.julius",
    beleg: "Agenda JavaLand 2023 (Trust-Depot)",
  },
  {
    file: "javaforum-stuttgart.png",
    name: "JavaFORUM Stuttgart",
    href: "https://www.java-forum-stuttgart.de/vortraege/top-10-spring-boot-hacks-pragmatismus-statt-magie/",
    beleg: "Vortrag „Top 10 Spring Boot Hacks“ (Trust-Depot)",
  },
  {
    file: "devopscon.png",
    name: "DevOpsCon",
    href: "https://devopscon.io/speaker/julius-mischok/",
    beleg: "Speaker-Profil Julius Mischok",
  },
  {
    file: "code-days.png",
    name: "CODE DAYS",
    href: "https://www.code-days.de/code-days-2024/programm/speaker",
    beleg: "Speakerliste Code Days 2024",
  },
  // Ohne Link: auf testcon.lt taucht der Name „Mischok" auf der Speakerseite
  // nicht auf (geprueft) — ein Link waere hier eine Behauptung ohne Beleg.
  { file: "testcon.png", name: "TestCon" },
  // Ohne Link: zu IT-S NOW liess sich keine erreichbare Seite finden, die
  // mischok belegt (it-s-now.at antwortet nicht).
  { file: "it-s-now.png", name: "IT-S NOW" },
  {
    file: "it-security-summit.png",
    name: "IT Security Summit",
    href: "https://it-security-summit.com/speaker/julius-mischok/",
    beleg: "Speaker-Profil Julius Mischok",
  },
  {
    file: "hackerkiste-augsburg.png",
    name: "Hackerkiste Augsburg",
    // Das Trust-Depot nennt /speaker-hackerkiste-2025/ — die Seite ist
    // inzwischen 404. Die Startseite fuehrt mischok weiterhin.
    href: "https://hackerkiste.de/",
    beleg: "Startseite (Speakerseite 2025 ist offline)",
  },
];

export default function Medien() {
  return (
    <section
      id="medien"
      data-screen-label="Fachöffentlichkeit"
      className="md-section"
    >
      <p className="eyebrow md-label">Sie kennen unsere Experten aus</p>
      <ul className="md-row">
        {MEDIEN.map((m) => {
          const logo = (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`/social/medien/${m.file}`}
              alt={m.name}
              loading="lazy"
              decoding="async"
            />
          );
          return (
            <li key={m.file} className="md-item">
              {m.href ? (
                <a
                  className="md-link"
                  href={m.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  /* Der Linktext waere sonst nur das Logo — der Titel sagt,
                     wohin es geht und warum. */
                  title={`${m.name} — ${m.beleg}`}
                  aria-label={`${m.name}: ${m.beleg} (öffnet in neuem Tab)`}
                >
                  {logo}
                </a>
              ) : (
                logo
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
}
