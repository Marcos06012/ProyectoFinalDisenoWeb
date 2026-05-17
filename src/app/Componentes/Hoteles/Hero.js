"use client";

import { Star } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full bg-white pt-24 pb-16 overflow-hidden md:py-24 lg:py-32">
            <div className="max-w-7xl mx-auto mt-20 px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 w-full">

                {/* Lado Izquierdo: Texto */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transparent
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="z-10 text-center lg:text-left max-w-xl mx-auto lg:max-w-none"
                >
                    <span className="text-[#f4bba4] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
                        Estancias Memorables
                    </span>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-[#09092d] leading-[1.1] mb-6 tracking-tight">
                        Encuentra tu <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#09092d] via-[#4a4a8a] to-[#f4bba4]">
                            hogar lejos de casa.
                        </span>
                    </h1>
                    <p className="text-gray-500 text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
                        Desde suites de lujo en el corazón de la ciudad hasta cabañas escondidas en la montaña. Tú eliges el escenario, nosotros ponemos el confort.
                    </p>

                    {/* Badge de confianza o detalle extra */}
                    <div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-[#09092d]/60 font-medium text-sm">
                        <div className="h-px w-8 bg-[#f4bba4]" />
                        <span>Más de 5,000 hoteles verificados</span>
                    </div>
                </motion.div>

                {/* Lado Derecho: Visual Creativo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="relative w-full max-w-md lg:max-w-none mx-auto mt-8 lg:mt-0"
                >
                    {/* Imagen Principal con marco asimétrico */}
                    <div className="relative h-[280px] sm:h-[360px] lg:h-[440px] w-full rounded-[2.5rem] md:rounded-[4rem] overflow-hidden shadow-2xl border-4 md:border-[12px] border-white">
                        <Image
                            src="/img/HotelDeLujo.png"
                            alt="Hotel de lujo"
                            fill
                            priority
                            quality={90}
                            className="object-cover"
                            sizes="(max-w: 1024px) 100vw, 45vw"
                        />
                    </div>

                    {/* Rating Flotante */}
                    <motion.div
                        animate={{ y: [0, 8, 0] }} 
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-6 -right-2 md:-right-4 z-30 hidden sm:block" 
                    >
                        {/* Contenedor con Efecto de Vidrio */}
                        <div className="bg-white/30 backdrop-blur-md border border-white/40 px-4 py-2.5 rounded-xl flex items-center gap-3.5 shadow-lg">

                            {/* Lado de los números/estrellas */}
                            <div className="flex flex-col">
                                <div className="flex items-center gap-1">
                                    <span className="text-[#09092d] font-black text-base tracking-tighter">4.9</span>
                                    <div className="text-yellow-500">
                                        <Star size={12} fill="currentColor" />
                                    </div>
                                </div>
                                <span className="text-[#09092d]/70 text-[8px] font-bold uppercase tracking-widest leading-none">
                                    Rating
                                </span>
                            </div>

                            {/* Separador minimalista vertical */}
                            <div className="h-6 w-px bg-[#09092d]/10" />

                            {/* Lado de cantidad de reseñas */}
                            <div className="flex flex-col">
                                <span className="text-[#09092d] font-black text-xs tracking-tight">+2k</span>
                                <span className="text-[#09092d]/70 text-[8px] font-bold uppercase tracking-widest leading-none">
                                    Reseñas
                                </span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Elemento flotante izquierdo de apoyo */}
                    <motion.div
                        animate={{ y: [0, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-8 -left-6 z-20 hidden lg:block"
                    >
                        <div className="relative w-[180px] h-[115px] rounded-[1.5rem] overflow-hidden border-4 border-white shadow-xl">
                            <Image
                                src="/img/CuartoDeLujo.png"
                                alt="Cuarto de lujo"
                                fill
                                quality={85}
                                sizes="180px"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </div>
                    </motion.div>

                    {/* Elemento flotante derecho de apoyo */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                        className="absolute -bottom-8 -right-6 z-20 hidden lg:block"
                    >
                        <div className="relative w-[180px] h-[115px] rounded-[1.5rem] overflow-hidden border-4 border-white shadow-xl">
                            <Image
                                src="/img/AmenidadDeLujo.png"
                                alt="Amenidad de lujo"
                                fill
                                quality={85}
                                sizes="180px"
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}