import Hero from "../Componentes/Vuelos/Hero";
import Fotos from "../Componentes/Vuelos/Fotos";
import PaisesDestinoFotos from "../Componentes/Vuelos/PaisesDestinoFotos";


export default function vuelos() {
    return (
        <main className="min-h-screen bg-white">
            <Hero />
            <Fotos />
            <PaisesDestinoFotos />
        </main>
    );
}