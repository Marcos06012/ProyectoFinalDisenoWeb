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
        
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-16 md:my-24 space-y-20 md:space-y-28">
            
            {/* ENCABEZADO */}
            <div className="text-center mb-12 md:mb-16">
                <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 md:text-5xl">
                    Destinos Exclusivos
                </h2>
                <div className="h-1.5 w-16 bg-[#f4bba4] mx-auto mt-4 rounded-full" />
            </div>

            {/* SECCIONES DE PAÍSES */}
            {DESTINOS.map((destino, index) => (
                <div key={index} className="overflow-visible"> 
                    <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }} 
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ 
                            once: true, 
                            amount: 0.15, 
                            margin: "0px 0px -80px 0px"
                        }}
                        transition={{ 
                            duration: 0.7, 
                            ease: [0.215, 0.610, 0.355, 1.000] 
                        }}
                        className={`flex flex-col ${
                            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                        } items-center gap-8 lg:gap-16`} 
                    >
                        {/* Contenedor Imagen */}
                        <div className="w-full lg:w-1/2 relative group">
                            {/* Efecto Aura Trasera Suavizado */}
                            <div className="absolute -inset-3 bg-gray-50 rounded-3xl -z-10 group-hover:bg-[#f4bba4]/8 transition-colors duration-500" />
                            
                            <div className="relative h-80 sm:h-80 lg:h-87.5 w-full overflow-hidden rounded-2xl shadow-xl md:shadow-2xl">
                                <Image
                                    src={destino.img}
                                    alt={destino.nombre}
                                    fill
                                    quality={90}
                                    className="object-cover transition-transform duration-700 group-hover:scale-103"
                                    sizes="(max-w: 1024px) 100vw, 45vw"
                                />
                            </div>
                        </div>

                        {/* Contenedor Texto */}
                        <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left px-2 sm:px-6 lg:px-0">
                            <span className="text-[#f4bba4] font-bold tracking-widest uppercase text-xs md:text-sm block">
                                Destino 0{index + 1}
                            </span>
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-tight">
                                {destino.nombre}
                            </h3>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                                {destino.desc}
                            </p>
                            
                            <button className="group inline-flex items-center gap-2 font-semibold text-gray-900 hover:text-[#f4bba4] transition-colors mt-2 cursor-pointer text-sm sm:text-base">
                                <span>Explorar Guía</span>
                                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                            </button>
                        </div>
                    </motion.div>
                </div>
            ))}
        </section>
    );
}