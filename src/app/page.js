import Hero from "./Componentes/Inicio/Hero";
import Tarjetas from "./Componentes/Inicio/Tarjetas";
import Footer from "./Componentes/Footer";


export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Tarjetas />
      <Footer />
      </main>

      );
};