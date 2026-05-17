"use client";

import { motion } from "framer-motion";
import { Star, Cpu, Ban } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { staggerChildren: 0.2 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Tarjetas() {
    return (
        <section className="py-15 mb-20 bg-white rounded-3xl mt-25">
            <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }} 
                variants={containerVariants}
                className="max-w-6xl mx-auto"
            >
                <motion.h2 
                variants={itemVariants}
                className="text-4xl md:text-5xl font-black text-[#09092d] text-center mb-16">
                    ¿Por qué elegir <span className="text-gray-400">Star</span><span className="text-[#f4bba4]">Fly</span>?
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    {/* Tarjeta 1*/}
                    <motion.div 
                        variants={itemVariants} 
                        className="bg-[#f2f1ed] shadow-2xl p-8 rounded-3xl border-4 border-transparent hover:border-[#f4bba4] transition-all duration-300 group hover:-translate-y-4"
                    >
                        <div className="w-16 h-16 bg-[#09092d] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Star size={24} className="text-[#f4bba4]" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#09092d] mb-4">Experiencia Única</h3>
                        <p className="text-gray-600">Conectamos los mejores servicios globales...</p>
                    </motion.div>

                    {/* Tarjeta 2 */}
                    <motion.div 
                        variants={itemVariants} 
                        className="bg-[#f2f1ed] shadow-2xl p-8 rounded-3xl border-4 border-transparent hover:border-[#f4bba4] transition-all duration-300 group hover:-translate-y-4"
                    >
                        <div className="w-16 h-16 bg-[#09092d] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Cpu size={24} className="text-[#f4bba4]" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#09092d] mb-4">Tecnología Ágil</h3>
                        <p className="text-gray-600">Resultados en tiempo real...</p>
                    </motion.div>

                    {/* Tarjeta 3 */}
                    <motion.div 
                        variants={itemVariants} 
                        className="bg-[#f2f1ed] shadow-2xl p-8 rounded-3xl border-4 border-transparent hover:border-[#f4bba4] transition-all duration-300 group hover:-translate-y-4"
                    >
                        <div className="w-16 h-16 bg-[#09092d] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                            <Ban size={24} className="text-[#f4bba4]" />
                        </div>
                        <h3 className="text-2xl font-bold text-[#09092d] mb-4">Sin Sorpresas</h3>
                        <p className="text-gray-600">Transparencia total...</p>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}