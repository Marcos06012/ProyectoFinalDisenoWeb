"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] lg:min-h-screen pt-24 pb-12 flex flex-col items-center justify-center text-center overflow-hidden bg-[#09092d]">

            {/* IMAGEN DE FONDO */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/img/atardecer.png"
                    alt="Atardecer desde el avion - StarFly"
                    fill
                    priority
                    quality={90}
                    className="object-cover"
                    sizes="100vw"
                />
            </motion.div>

            <div className="absolute inset-0 bg-gradient-to-b from-[#09092d]/80 via-[#09092d]/60 to-transparent z-10"></div>

            {/* CONTENIDO PRINCIPAL */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={containerVariants}
                className="max-w-4xl mx-auto px-4 flex flex-col items-center relative z-20 w-full mt-4 lg:mt-0"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 text-white tracking-tight leading-tight uppercase"
                >
                    EXPLORA EL <span className="text-[#f4bba4]">MUNDO</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-base sm:text-lg md:text-xl text-white/90 mb-8 max-w-xl mx-auto leading-relaxed"
                >
                    Tu próxima aventura comienza aquí. Encuentra vuelos, hoteles y traslados al mejor precio.
                </motion.p>

                {/* BARRA DE BÚSQUEDA INTEGRADA EN EL FLUJO */}
                <motion.div
                    variants={itemVariants}
                    className="w-full max-w-2xl"
                >
                    <div className="bg-white/10 backdrop-blur-md p-1.5 rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] border border-white/10">
                        <div className="bg-white p-3 md:p-4 rounded-xl flex flex-col sm:flex-row gap-3 shadow-inner">
                            <div className="flex-1 flex items-center px-2">
                                <Search className="text-[#09092d] mr-2 shrink-0" size={20} />
                                <input
                                    type="text"
                                    placeholder="¿A dónde quieres ir?"
                                    className="w-full p-2 outline-none text-[#09092d] font-semibold text-sm sm:text-base bg-transparent"
                                />
                            </div>
                            <button
                                className="text-white bg-[#09092d] hover:bg-[#09092d]/90 px-6 py-3 rounded-lg font-black text-sm tracking-wider transition-all cursor-pointer w-full sm:w-auto"
                            >
                                BUSCAR
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
}