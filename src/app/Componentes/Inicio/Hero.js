"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Image from "next/image";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

export default function Hero() {
    return (
        <section className="relative h-screen pt-24 flex flex-col items-center justify-start text-center overflow-hidden bg-[#09092d]">

            {/* IMAGEN DE FONDO */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="absolute inset-0 z-0"
            >
                <Image
                    src="/img/atardecer.png"
                    alt="Atardecer desde el avion - StarFly"
                    fill
                    priority
                    className="object-cover"
                    sizes="100vw"
                />
            </motion.div>

            <div className="absolute inset-0 bg-linear-to-b from-[#09092d]/80 via-[#09092d]/60 to-white z-10"></div>

            {/* CONTENIDO PRINCIPAL */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={containerVariants}
                className="flex flex-col items-center relative z-20 py-25 mt-15"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-7xl font-black mb-8 text-white"
                >
                    EXPLORA EL <span className="text-[#f4bba4]">MUNDO</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-white mb-8 max-w-lg mx-auto"
                >
                    Tu próxima aventura comienza aquí. Encuentra vuelos, hoteles y traslados al mejor precio.
                </motion.p>
            </motion.div>

            {/* BARRA DE BÚSQUEDA */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute h-auto w-full max-w-3xl px-4 z-30 mt-49"
            >
                <div className="relative">
                    {/* FILA DE BÚSQUEDA */}
                    <div className="bg-white p-4 rounded-2xl flex flex-col md:flex-row gap-4 shadow-xl mt-40">
                        <div className="flex-1 flex items-center px-2">
                            <Search className="text-[#09092d] mr-2" size={24} />
                            <input
                                type="text"
                                placeholder="¿A dónde quieres ir?"
                                className="w-full p-2 outline-none text-[#09092d]"
                            />
                        </div>
                        <button
                            className="text-white bg-[#09092d] hover:bg-amber-600 px-8 py-3 rounded-xl font-black transition-all"
                        >
                            Buscar
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}