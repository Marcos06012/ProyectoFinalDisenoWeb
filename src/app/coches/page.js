import TarjetasTipoVehiculo from "../Componentes/Coches/TarjetasTipoVehiculos";
import Hero from "../Componentes/Coches/Hero";

export default function coches() {
    return (
        <main className="min-h-screen bg-white">
            <Hero/>            
            <TarjetasTipoVehiculo />
        </main>
    );
}