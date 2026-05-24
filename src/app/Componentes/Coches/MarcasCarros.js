"use client";

import { motion } from "framer-motion";
import {
    SiToyota, SiBmw, SiTesla, SiFord, SiAudi, SiFerrari, SiHyundai, SiNissan,
    SiPorsche, SiLamborghini, SiHonda, SiVolkswagen, SiChevrolet, SiJeep,
    SiMazda, SiKia, SiSubaru, SiMitsubishi, SiVolvo,
    SiJaguar, SiLandrover, SiAstonmartin
} from "react-icons/si";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.03 } 
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.85, y: 15 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export default function MarcasCarros() {
    return (
        <section className="py-20 bg-radial from-gray-50 to-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                
                {/* ENCABEZADO REFINADO */}
                <div className="text-center mb-12 space-y-2">
                    <motion.h2 
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-3xl md:text-4xl font-black text-[#09092d] tracking-tight"
                    >
                        Alianza con marcas internacionales
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-base md:text-lg font-medium text-gray-400 tracking-wide"
                    >
                        Confianza y calidad en cada viaje
                    </motion.p>
                </div>
                
                {/* CONTENEDOR PRINCIPAL */}
                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    className="grid grid-cols-4 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4 p-6 md:p-8 bg-gray-50/50 backdrop-blur-md border border-gray-100/80 rounded-[2.5rem] shadow-2xl shadow-gray-200/40"
                >
                    {/* Japonesas y Coreanas */}
                    <motion.div variants={itemVariants} className="group relative flex items-center justify-center p-5 bg-white border border-gray-100/70 rounded-2xl shadow-xs hover:shadow-lg hover:shadow-red-500/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <SiToyota className="text-gray-400 group-hover:text-[#EB0A1E] transition-colors duration-300" size={50} />
                    </motion.div>
                    <motion.div variants={itemVariants} className="group relative flex items-center justify-center p-5 bg-white border border-gray-100/70 rounded-2xl shadow-xs hover:shadow-lg hover:shadow-red-500/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <SiHonda className="text-gray-400 group-hover:text-[#E40414] transition-colors duration-300" size={50} />
                    </motion.div>
                    <motion.div variants={itemVariants} className="group relative flex items-center justify-center p-5 bg-white border border-gray-100/70 rounded-2xl shadow-xs hover:shadow-lg hover:shadow-red-500/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <SiNissan className="text-gray-400 group-hover:text-[#C1121F] transition-colors duration-300" size={50} />
                    </motion.div>
                    <motion.div variants={itemVariants} className="group relative flex items-center justify-center p-5 bg-white border border-gray-100/70 rounded-2xl shadow-xs hover:shadow-lg hover:shadow-blue-950/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <SiMazda className="text-gray-400 group-hover:text-[#102341] transition-colors duration-300" size={50} />
                    </motion.div>
                    <motion.div variants={itemVariants} className="group relative flex items-center justify-center p-5 bg-white border border-gray-100/70 rounded-2xl shadow-xs hover:shadow-lg hover:shadow-blue-800/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <SiSubaru className="text-gray-400 group-hover:text-[#013C74] transition-colors duration-300" size={50} />
                    </motion.div>
                    <motion.div variants={itemVariants} className="group relative flex items-center justify-center p-5 bg-white border border-gray-100/70 rounded-2xl shadow-xs hover:shadow-lg hover:shadow-red-600/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <SiMitsubishi className="text-gray-400 group-hover:text-[#E20613] transition-colors duration-300" size={50} />
                    </motion.div>
                    <motion.div variants={itemVariants} className="group relative flex items-center justify-center p-5 bg-white border border-gray-100/70 rounded-2xl shadow-xs hover:shadow-lg hover:shadow-blue-900/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <SiHyundai className="text-gray-400 group-hover:text-[#002C5F] transition-colors duration-300" size={50} />
                    </motion.div>
                    <motion.div variants={itemVariants} className="group relative flex items-center justify-center p-5 bg-white border border-gray-100/70 rounded-2xl shadow-xs hover:shadow-lg hover:shadow-red-700/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <SiKia className="text-gray-400 group-hover:text-[#BB162B] transition-colors duration-300" size={50} />
                    </motion.div>

                    {/* Alemanas */}
                    <motion.div variants={itemVariants} className="group relative flex items-center justify-center p-5 bg-white border border-gray-100/70 rounded-2xl shadow-xs hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <SiBmw className="text-gray-400 group-hover:text-[#000000] transition-colors duration-300" size={50} />
                    </motion.div>
                    <motion.div variants={itemVariants} className="group relative flex items-center justify-center p-5 bg-white border border-gray-100/70 rounded-2xl shadow-xs hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <SiAudi className="text-gray-400 group-hover:text-[#0A0A0A] transition-colors duration-300" size={50} />
                    </motion.div>
                    <motion.div variants={itemVariants} className="group relative flex items-center justify-center p-5 bg-white border border-gray-100/70 rounded-2xl shadow-xs hover:shadow-lg hover:shadow-red-800/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <SiPorsche className="text-gray-400 group-hover:text-[#B12B28] transition-colors duration-300" size={50} />
                    </motion.div>
                    <motion.div variants={itemVariants} className="group relative flex items-center justify-center p-5 bg-white border border-gray-100/70 rounded-2xl shadow-xs hover:shadow-lg hover:shadow-blue-500/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <SiVolkswagen className="text-gray-400 group-hover:text-[#147BD1] transition-colors duration-300" size={50} />
                    </motion.div>

                    {/* Americanas */}
                    <motion.div variants={itemVariants} className="group relative flex items-center justify-center p-5 bg-white border border-gray-100/70 rounded-2xl shadow-xs hover:shadow-lg hover:shadow-red-600/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <SiTesla className="text-gray-400 group-hover:text-[#E82127] transition-colors duration-300" size={50} />
                    </motion.div>
                    <motion.div variants={itemVariants} className="group relative flex items-center justify-center p-5 bg-white border border-gray-100/70 rounded-2xl shadow-xs hover:shadow-lg hover:shadow-blue-700/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <SiFord className="text-gray-400 group-hover:text-[#003399] transition-colors duration-300" size={50} />
                    </motion.div>
                    <motion.div variants={itemVariants} className="group relative flex items-center justify-center p-5 bg-white border border-gray-100/70 rounded-2xl shadow-xs hover:shadow-lg hover:shadow-amber-600/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <SiChevrolet className="text-gray-400 group-hover:text-[#CD9834] transition-colors duration-300" size={50} />
                    </motion.div>
                    <motion.div variants={itemVariants} className="group relative flex items-center justify-center p-5 bg-white border border-gray-100/70 rounded-2xl shadow-xs hover:shadow-lg hover:shadow-black/5 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
                        <SiJeep className="text-gray-400 group-hover:text-[#0A0A0A] transition-colors duration-300" size={50} />
                    </motion.div> 
                </motion.div>
                
            </div>
        </section>            
    );
}