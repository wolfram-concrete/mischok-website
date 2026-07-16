import HeroCeramic from "@/components/sections/HeroCeramic";
import PortraitBleed from "@/components/sections/PortraitBleed";
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
        {/* Masterversion des Heros. HeroBento/HeroSlider/EinsatzfelderGrid
            vorerst abgelegt (Komponenten bleiben im Repo erhalten). */}
        {/* Hero in Porzellan-/Keramikoptik (HeroImpact bleibt als Modul für
            geteilte Icon/FOCUS/NAV-Exports erhalten, wird aber nicht gerendert) */}
        <HeroCeramic />
        <PortraitBleed />
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
