"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const DESTINOS = [
    { nombre: "España", desc: "Sumérgete en la cultura europea con paisajes vibrantes y una gastronomía de clase mundial.", img: "/img/España.webp" },
    { nombre: "Japón", desc: "El equilibrio perfecto entre la tradición milenaria y la tecnología del futuro.", img: "/img/Japon.webp" },
    { nombre: "México", desc: "Colores, sabores y playas paradisíacas que te atraparán desde el primer momento.", img: "/img/Mexico.webp" },
];

export default function PaisesDestinoAlternativo() {
    return (
        <section className="w-11/12 mx-auto my-16 space-y-24">
            <div className="text-center mb-16">
                <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">Destinos Exclusivos</h2>
                <div className="h-1 w-20 bg-[#f4bba4] mx-auto mt-4 rounded-full" />
            </div>

            {DESTINOS.map((destino, index) => (
                /* Este contenedor intermedio absorbe el desplazamiento lateral de la animación */
                <div key={index} className="overflow-visible"> 
                    <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ 
                            once: false, 
                            amount: 0.2,
                            margin: "0px 0px -50px 0px" // Evita que se active antes de tiempo
                        }}
                        transition={{ 
                            duration: 0.8, 
                            ease: [0.25, 1, 0.5, 1] 
                        }}
                        className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-12`}
                    >
                        {/* Imagen */}
                        <div className="w-full md:w-1/2 relative group">
                            <div className="absolute -inset-4 bg-gray-50 rounded-3xl -z-10 group-hover:bg-[#f4bba4]/10 transition-colors duration-500" />
                            <div className="relative h-100 w-full overflow-hidden rounded-2xl shadow-2xl">
                                <Image
                                    src={destino.img}
                                    alt={destino.nombre}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>
                        </div>

                        {/* Texto */}
                        <div className="w-full md:w-1/2 space-y-4 px-4 text-center md:text-left">
                            <span className="text-[#f4bba4] font-bold tracking-widest uppercase text-sm">Destino 0{index + 1}</span>
                            <h3 className="text-3xl font-bold text-gray-800">{destino.nombre}</h3>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                {destino.desc}
                            </p>
                            <button className="group flex items-center gap-2 font-semibold text-gray-900 hover:text-[#f4bba4] transition-colors mx-auto md:mx-0">
                                Explorar Guía
                                <span className="group-hover:translate-x-1 transition-transform">→</span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            ))}
        </section>
    );
}