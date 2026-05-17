"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full bg-white pt-24 pb-12 overflow-hidde mt-20">
            <div className="container mx-auto px-6 grid lg:grid-cols-2 items-center gap-12 ">

                {/* Lado Izquierdo: Texto */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="z-10"
                >
                    <span className="text-[#f4bba4] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                        Estancias Memorables
                    </span>
                    <h1 className="text-5xl md:text-7xl font-black text-[#09092d] leading-[1.1] mb-6">
                        Encuentra tu <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#09092d] via-[#4a4a8a] to-[#f4bba4]">
                            hogar lejos de casa.
                        </span>
                    </h1>
                    <p className="text-gray-500 text-lg max-w-md leading-relaxed">
                        Desde suites de lujo en el corazón de la ciudad hasta cabañas escondidas en la montaña. Tú eliges el escenario, nosotros ponemos el confort.
                    </p>

                    {/* Badge de confianza o detalle extra */}
                    <div className="mt-8 flex items-center gap-4 text-[#09092d]/60 font-medium text-sm">
                        <div className="h-px w-8 bg-[#f4bba4]" />
                        <span>Más de 5,000 hoteles verificados</span>
                    </div>
                </motion.div>

                {/* Lado Derecho: Visual Creativo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="relative"
                >
                    {/* Imagen Principal con marco asimétrico */}
                    <div className="relative h-100 md:h-125 w-full rounded-[4rem]  overflow-hidden shadow-5xl border-12 shadow-2xl border-white">
                        <Image
                            src="/img/HotelDeLujo.png"
                            alt="Hotel de lujo"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <motion.div
                        animate={{ y: [0, 60, 0] }} 
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-10 -right-4 z-30 hidden md:block" 
                    >
                        {/* Contenedor con Efecto de Vidrio */}
                        <div className="bg-white/20 backdrop-blur-xl border border-white/30 px-5 py-3 rounded-2xl  flex items-center gap-4">

                            {/* Lado de los números/estrellas */}
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1.5">
                                    <span className="text-white font-black text-xl tracking-tighter">4.9</span>
                                    <div className="flex text-yellow-400">
                                        <Star size={14} fill="currentColor" />
                                    </div>
                                </div>
                                <span className="text-white/70 text-[9px] font-bold uppercase tracking-widest leading-none">
                                    Rating Promedio
                                </span>
                            </div>

                            {/* Separador minimalista vertical */}
                            <div className="h-8 w-px bg-white/20" />

                            {/* Lado de cantidad de reseñas */}
                            <div className="flex flex-col">
                                <span className="text-white font-black text-sm tracking-tight">+2k</span>
                                <span className="text-white/70 text-[9px] font-bold uppercase tracking-widest leading-none">
                                    Reseñas
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Elemento flotante decorativo con mayor anchura */}
                    <motion.div
                        animate={{ y: [0, -25, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-12 -left-12 z-20 hidden md:block"
                    >
                        <div className="relative w-70 h-45 rounded-[3rem] overflow-hidden  border-8 border-[#09092d]">
                            <Image
                                src="/img/CuartoDeLujo.png"
                                alt="Cuarto de lujo"
                                fill
                                sizes="280px"
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />

                            {/* Gradiente inferior para que la imagen se funda con el marco */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                        </div>
                    </motion.div>

                    {/* Elemento flotante decorativo con mayor anchura */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-12 -right-12 z-20 hidden md:block"
                    >
                        <div className="relative w-70 h-45 rounded-[3rem] overflow-hidden  border-8 border-[#09092d]">
                            <Image
                                src="/img/AmenidadDeLujo.png"
                                alt="Amenidad de lujo"
                                fill
                                sizes="280px"
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />

                            {/* Gradiente inferior para que la imagen se funda con el marco */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}