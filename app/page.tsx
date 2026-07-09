import Hero from "@/components/sections/Hero";
import EinsatzfelderGrid from "@/components/sections/EinsatzfelderGrid";
import PortraitBleed from "@/components/sections/PortraitBleed";
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
        <Hero />
        <EinsatzfelderGrid />
        <PortraitBleed />
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
