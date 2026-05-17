import Hero from "../Componentes/Hoteles/Hero";
import BarraBusqueda from "../Componentes/Hoteles/BarraBusqueda";
import Alojamientos from "../Componentes/Hoteles/Alojamientos";

export default function hoteles() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <BarraBusqueda />
            <Alojamientos />
        </main>
    );
}