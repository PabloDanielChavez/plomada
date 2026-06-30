import Header from "@/components/layout/header/Header";
import Hero from "@/components/sections/Hero";
import Bienvenida from "@/components/sections/Bienvenida";
import Servicios from "@/components/sections/Servicios";
import Proceso from "@/components/sections/Proceso";
import Sobre from "@/components/sections/Sobre";
import Apuntamos from "@/components/sections/Apuntamos";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/layout/footer/Footer";
import Reveal from "@/components/ui/reveal/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Reveal><Bienvenida /></Reveal>
        <Reveal><Servicios /></Reveal>
        <Reveal><Proceso /></Reveal>
        <Reveal><Sobre /></Reveal>
        <Reveal><Apuntamos /></Reveal>
        <Reveal><FinalCTA /></Reveal>
      </main>
      <Footer />
    </>
  );
}
