import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Bienvenida from "@/components/sections/Bienvenida";
import Servicios from "@/components/sections/Servicios";
import Proceso from "@/components/sections/Proceso";
import Sobre from "@/components/sections/Sobre";
import Apuntamos from "@/components/sections/Apuntamos";
import FinalCTA from "@/components/sections/FinalCTA";
import Footer from "@/components/sections/Footer";
import Reveal from "@/components/sub_components/Reveal";

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
