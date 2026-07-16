import HeroCeramic from "@/components/sections/HeroCeramic";
import Ansatz from "@/components/sections/Ansatz";
import Stimme from "@/components/sections/Stimme";
import Themen from "@/components/sections/Themen";
import Zusammenarbeit from "@/components/sections/Zusammenarbeit";
import Ueber from "@/components/sections/Ueber";
import AusDerPraxis from "@/components/sections/AusDerPraxis";
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
            zur ersten inhaltlichen Section unnötig verlängert. */}
        <HeroCeramic />
        <Ansatz />
        <Stimme />
        <Themen />
        <Zusammenarbeit />
        <Ueber />
        <AusDerPraxis />
        <Kontakt />
        <ArbeitenBeiMischok />
        <Footer />
      </div>
    </main>
  );
}
