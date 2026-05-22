import TarjetasTipoVehiculo from "../Componentes/Coches/TarjetasTipoVehiculos";
import Hero from "../Componentes/Coches/Hero";
import MarcasCarros from "../Componentes/Coches/MarcasCarros";
import BuscadorVehiculos from "../Componentes/Coches/BarraBusquedaCarros";

export default function coches() {
    return (
        <main className="min-h-screen bg-white">
            <Hero/>   
            <BuscadorVehiculos />

            <TarjetasTipoVehiculo />
            <MarcasCarros />

        </main>
    );
}