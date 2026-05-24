"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 }, 
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-[#09092d] pt-35 pb-12 md:pt-32 md:pb-20 min-h-screen flex items-center">
            
            {/* Fondo decorativo */}
            <div className="absolute inset-0 opacity-15 pointer-events-none">
                <div className="absolute top-0 left-0 w-72 h-72 bg-[#f4bba4] rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-72 h-72 bg-[#f4bba4] rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

                    {/* LADO IZQUIERDO */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                        variants={containerVariants}
                        className="flex flex-col items-center lg:items-start text-center lg:text-left lg:col-span-7"
                    >
                        {/* Badge */}
                        <motion.span
                            variants={itemVariants}
                            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 backdrop-blur-md text-[#f4bba4] text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] border border-white/10 mb-5"
                        >
                            StarFly Mobility
                        </motion.span>

                        {/* Título */}
                        <motion.h1
                            variants={itemVariants}
                            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-5 max-w-2xl"
                        >
                            El transporte exacto para{" "}
                            <span className="text-[#f4bba4]">
                                cada necesidad.
                            </span>
                        </motion.h1>

                        {/* Texto */}
                        <motion.p
                            variants={itemVariants}
                            className="text-sm sm:text-base text-gray-300 font-medium max-w-xl mb-6 md:mb-8 leading-relaxed"
                        >
                            Encuentra traslados exclusivos, autos urbanos ágiles y vans corporativas al mejor precio. Tu ruta perfecta, controlada de principio a fin.
                        </motion.p>

                        {/* Botón */}
                        <motion.button
                            variants={itemVariants}
                            className="flex items-center justify-center gap-3 bg-[#f4bba4] hover:bg-[#f4bba4]/90 text-[#09092d] font-bold px-6 sm:px-8 py-3.5 rounded-2xl shadow-xl shadow-[#f4bba4]/10 hover:scale-105 transition-all duration-300 cursor-pointer text-sm sm:text-base w-full sm:w-auto"
                        >
                            <Search size={18} strokeWidth={2.5} />
                            <span>Reservar traslado ahora</span>
                        </motion.button>
                    </motion.div>

                    {/* LADO DERECHO */}
                    <motion.div
                        initial={{ opacity: 0, y: 30, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{
                            duration: 0.7,
                            ease: "easeOut",
                            delay: 0.15
                        }}
                        className="lg:col-span-5 relative w-full max-w-md lg:max-w-none mx-auto mt-6 lg:mt-0"
                    >
                        {/* Marco decorativo */}
                        <div className="absolute -bottom-3.5 -right-3.5 w-full h-full border-2 border-[#f4bba4]/30 rounded-[2rem] sm:rounded-[2.5rem] z-0" />

                        {/* Imagen */}
                        <div className="relative z-10 overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-white/10 shadow-2xl h-70 sm:h-90 md:h-105 lg:h-112.5">
                            
                            <Image
                                src="/img/FotoCarros2.png"
                                alt="Garage de Carros - StarFly"
                                fill
                                quality={90}
                                priority
                                className="object-cover object-center transition-transform duration-700 hover:scale-105"
                                sizes="(max-w: 768px) 100vw, (max-w: 1024px) 50vw, 35vw"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-linear-to-t from-[#09092d]/40 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}