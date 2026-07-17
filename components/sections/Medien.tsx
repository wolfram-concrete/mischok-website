/**
 * Medien — „Sie kennen unsere Experten aus": Fachmedien und Konferenzen, in
 * denen MISCHOK-Leute publizieren und sprechen. Die Leiste steht bewusst kurz
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

type Medium = { file: string; name: string };

/** Reihenfolge: ruhige Wortmarken zuerst, damit die Leiste nicht flimmert. */
const MEDIEN: Medium[] = [
  { file: "informatik-aktuell.png", name: "Informatik Aktuell" },
  { file: "javapro.png", name: "JAVAPRO" },
  { file: "jax.png", name: "JAX" },
  { file: "w-jax.png", name: "W-JAX" },
  { file: "javaland.png", name: "JavaLand" },
  { file: "javaforum-stuttgart.png", name: "JavaFORUM Stuttgart" },
  { file: "devopscon.png", name: "DevOpsCon" },
  { file: "code-days.png", name: "CODE DAYS" },
  { file: "testcon.png", name: "TestCon" },
  { file: "it-s-now.png", name: "IT-S NOW" },
  { file: "it-security-summit.png", name: "IT Security Summit" },
  { file: "hackerkiste-augsburg.png", name: "Hackerkiste Augsburg" },
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
        {MEDIEN.map((m) => (
          <li key={m.file} className="md-item">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/social/medien/${m.file}`}
              alt={m.name}
              loading="lazy"
              decoding="async"
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
