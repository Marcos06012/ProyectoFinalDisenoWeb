"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -30 }, 
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center bg-[#09092d] overflow-hidden pt-20">
            <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-20">
                
                {/* LADO IZQUIERDO*/}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    variants={containerVariants}
                    className="flex flex-col items-start text-left lg:col-span-7"
                >
                    {/* Badge flotante premium */}
                    <motion.span
                        variants={itemVariants}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md text-[#f4bba4] text-xs font-bold uppercase tracking-widest border border-white/10 mb-6"
                    >
                        ✦ StarFly Mobility
                    </motion.span>

                    {/* Título Principal */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight mb-6"
                    >
                        El transporte exacto para <span className="text-[#f4bba4]">cada necesidad.</span>
                    </motion.h1>

                    {/* Descripción */}
                    <motion.p
                        variants={itemVariants}
                        className="text-base sm:text-lg text-gray-300 font-medium max-w-xl mb-10"
                    >
                        Encuentra traslados exclusivos, autos urbanos ágiles y vans corporativas al mejor precio. Tu ruta perfecta, controlada de principio a fin.
                    </motion.p>

                    {/* Botón */}
                    <motion.button
                        variants={itemVariants}
                        className="flex items-center gap-3 bg-[#f4bba4] hover:bg-[#f4bba4]/90 text-[#09092d] font-bold px-8 py-4 rounded-2xl shadow-lg shadow-[#f4bba4]/10 hover:scale-105 transition-all duration-300 cursor-pointer text-sm sm:text-base"
                    >
                        <Search size={18} strokeWidth={2.5} />
                        <span>Reservar traslado ahora</span>
                    </motion.button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="hidden lg:block lg:col-span-5 relative w-full h-137.5"
                >
                    <div className="w-full h-full relative rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                        <Image
                            src="/img/FotoCarros2.png"
                            alt="Garage de Carros - StarFly"
                            fill
                            quality={95}
                            priority
                            className="object-cover object-[30%_50%] transition-transform duration-700 hover:scale-105"
                            sizes="(max-w-1024px) 50vw, 40vw"
                        />
                        {/* Un degradado interno muy sutil que oscurece un poco la base de la imagen */}
                        <div className="absolute inset-0 bg-linear-to-t from-[#09092d]/40 via-transparent to-transparent pointer-events-none" />
                    </div>

                    <div className="absolute -bottom-5 -right-5 w-full h-full border-2 border-[#f4bba4]/50 rounded-[3rem] -z-10 pointer-events-none" />
                </motion.div>

            </div>
        </section>
    );
}