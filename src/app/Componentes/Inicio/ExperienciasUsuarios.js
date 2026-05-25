"use client";

import KineticTestimonial from "@/components/ui/kinetic-testimonials";

const testimonials = [
    {
        name: "Carlos Mendoza",
        handle: "@carlos_viajes",
        review: "Poder elegir mi menú y el asiento exacto desde la búsqueda fue increíble. ¡Atención al detalle pura!",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop",
    },
    {
        name: "Elena Rodríguez",
        handle: "@elena_globetrotter",
        review: "Los hoteles exclusivos que recomiendan son de otro nivel. Mi estancia en Japón fue simplemente mágica.",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop",
    },
    {
        name: "Roberto Vides",
        handle: "@robert_sv",
        review: "La mejor plataforma en El Salvador para planificar viajes al extranjero. Todo fluido y muy profesional.",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop",
    },
    {
        name: "Sofía Aguilar",
        handle: "@sofi_travels",
        review: "Me encanta el diseño de la web, es súper intuitiva. Encontré mi hotel en París en menos de 5 minutos.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=100&auto=format&fit=crop",
    },
    {
        name: "Ricardo Estévez",
        handle: "@ricky_vuelos",
        review: "El sistema de personalización de vuelos es único. Viajé a México con todo configurado a mi gusto.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100&auto=format&fit=crop",
    },
    {
        name: "Marta Valencia",
        handle: "@marta_v",
        review: "Excelente servicio al cliente y los destinos que proponen son realmente exclusivos. 10/10.",
        avatar: "https://images.unsplash.com/photo-1557053910-d9eadeed1c58?q=80&w=100&auto=format&fit=crop",
    }
];

export default function ExperienciasUsuarios() {
    return (
        <section className="pt-10 pb-16 bg-white mt-5"> {/* Reducido mt y py vertical */}
            <div className="container mx-auto px-6 mb-2 text-center"> {/* mb-6 bajado a mb-2 */}
                <h2 className="text-4xl font-black text-[#09092d]">Historias de Viajeros</h2>
                <div className="h-1 w-20 bg-[#f4bba4] mx-auto mt-3 rounded-full" />
            </div>

            {/* Eliminamos el h-11/12 que puede causar comportamientos extraños en flex */}
            <div className="mt-20 h-160 overflow-hidden"> 
                <KineticTestimonial
                    testimonials={testimonials}
                    className="bg-white"
                    title="" // Nos aseguramos de que no renderice un título vacío con espacio
                    subtitle="" 
                    cardClassName="hover:shadow-2xl transition-all duration-300 border border-gray-100 rounded-3xl bg-white"
                    avatarClassName="ring-2 ring-[#f4bba4]"
                    desktopColumns={3}
                    tabletColumns={2}
                    mobileColumns={1}
                    speed={1.2}
                />
            </div>
        </section>
    );
}