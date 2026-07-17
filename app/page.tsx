import HeroCeramic from "@/components/sections/HeroCeramic";
import Ansatz from "@/components/sections/Ansatz";
import Stimme from "@/components/sections/Stimme";
import Themen from "@/components/sections/Themen";
import Zusammenarbeit from "@/components/sections/Zusammenarbeit";
import Ueber from "@/components/sections/Ueber";
import Kontakt from "@/components/sections/Kontakt";
import ArbeitenBeiMischok from "@/components/sections/ArbeitenBeiMischok";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main id="home-root">
      {/* Innerer Wrapper spiegelt die Original-Struktur #home-root > div > section */}
      <div style={{ display: "block", position: "relative" }}>
        {/* Hero in Porzellan-/Keramikoptik (HeroImpact bleibt als Modul für
            geteilte Icon/FOCUS/NAV-Exports erhalten, wird aber nicht gerendert).
            PortraitBleed entfernt: das Großbild war nur Puffer und hat den Weg
            zur ersten inhaltlichen Section unnötig verlängert.

            AusDerPraxis ist hier bewusst nicht mehr gerendert — die Section ist
            samt Inhalten (PRAXIS in lib/content.ts) und Styles erhalten und
            kann an anderer Stelle wieder eingehängt werden. Siehe den Hinweis
            im Kopf von components/sections/AusDerPraxis.tsx. */}
        <HeroCeramic />
        <Ansatz />
        <Stimme />
        <Themen />
        <Zusammenarbeit />
        <Ueber />
        <Kontakt />
        <ArbeitenBeiMischok />
        <Footer />
      </div>
    </main>
  );
}
