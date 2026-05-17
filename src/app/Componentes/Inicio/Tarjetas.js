"use client";

import { motion } from "framer-motion";
import { Star, Cpu, Ban } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { staggerChildren: 0.12 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function Tarjetas() {
    return (
        <section className="py-12 md:py-16 my-12 bg-white rounded-[2rem] md:rounded-3xl">
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }} 
                variants={containerVariants}
                className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
            >
                <motion.h2 
                    variants={itemVariants}
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-[#09092d] text-center mb-12 md:mb-16 tracking-tight"
                >
                    ¿Por qué elegir <span className="text-gray-400">Star</span><span className="text-[#f4bba4]">Fly</span>?
                </motion.h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
                    
                    {/* Tarjeta 1 */}
                    <motion.div 
                        variants={itemVariants} 
                        className="bg-[#f2f1ed] p-6 md:p-8 rounded-2xl shadow-2xl md:rounded-3xl border-2 border-transparent hover:border-[#f4bba4] transition-all duration-300 group hover:-translate-y-2 flex flex-col items-start"
                    >
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#09092d] rounded-xl md:rounded-2xl flex items-center justify-center mb-5 md:mb-6 group-hover:scale-105 transition-transform duration-300 shrink-0 shadow-md">
                            <Star size={22} className="text-[#f4bba4]" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#09092d] mb-3 md:mb-4 tracking-tight">Experiencia Única</h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">Conectamos los mejores servicios globales...</p>
                    </motion.div>

                    {/* Tarjeta 2 */}
                    <motion.div 
                        variants={itemVariants} 
                        className="bg-[#f2f1ed] p-6 md:p-8 rounded-2xl shadow-2xl md:rounded-3xl border-2 border-transparent hover:border-[#f4bba4] transition-all duration-300 group hover:-translate-y-2 flex flex-col items-start"
                    >
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#09092d] rounded-xl md:rounded-2xl flex items-center justify-center mb-5 md:mb-6 group-hover:scale-105 transition-transform duration-300 shrink-0 shadow-md">
                            <Cpu size={22} className="text-[#f4bba4]" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#09092d] mb-3 md:mb-4 tracking-tight">Tecnología Ágil</h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">Resultados en tiempo real...</p>
                    </motion.div>

                    {/* Tarjeta 3 */}
                    <motion.div 
                        variants={itemVariants} 
                        className="bg-[#f2f1ed] p-6 md:p-8 rounded-2xl shadow-2xl md:rounded-3xl border-2 border-transparent hover:border-[#f4bba4] transition-all duration-300 group hover:-translate-y-2 sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none lg:mx-0 flex flex-col items-start w-full"
                    >
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-[#09092d] rounded-xl md:rounded-2xl flex items-center justify-center mb-5 md:mb-6 group-hover:scale-105 transition-transform duration-300 shrink-0 shadow-md">
                            <Ban size={22} className="text-[#f4bba4]" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-[#09092d] mb-3 md:mb-4 tracking-tight">Sin Sorpresas</h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">Transparencia total...</p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}