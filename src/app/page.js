import Hero from "./Componentes/Inicio/Hero";
import Tarjetas from "./Componentes/Inicio/Tarjetas";
import ExperienciasUsuarios from "./Componentes/Inicio/ExperienciasUsuarios";



export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <Tarjetas />
      <ExperienciasUsuarios />
      </main>

      );
};