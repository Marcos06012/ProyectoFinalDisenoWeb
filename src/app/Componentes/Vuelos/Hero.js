"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Calendar, PlaneTakeoff, Armchair, Coffee, ArrowRightLeft } from "lucide-react";

const fadeIn = {
    hidden: { opacity: 0, y: 15 }, // Reducido el salto a 15px para transiciones más limpias
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Hero() {
    return (
        /* CORRECCIÓN: pt-24 pb-12 lg:pt-32 lg:pb-16 para que respire de manera óptima 
           en cualquier monitor sin forzar un scroll falso. */
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-24 pb-12 lg:pt-32 lg:pb-16 bg-white w-full">

            {/* 1. DECORACIÓN DE FONDO */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#f4bba4]/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 -left-24 w-72 h-72 bg-[#09092d]/5 rounded-full blur-3xl" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">

                {/* 2. TEXTO IZQUIERDA */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
                    className="text-center lg:text-left space-y-5"
                >
                    <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#09092d]/5 text-[#09092d] text-xs font-bold tracking-wide">
                        <PlaneTakeoff size={14} />
                        <span>EXPERIENCIA 100% PERSONALIZABLE</span>
                    </motion.div>

                    {/* CORRECCIÓN: Ajustado de text-7xl a text-5xl md:text-6xl para evitar superposiciones gigantes */}
                    <motion.h1 variants={fadeIn} className="text-4xl sm:text-5xl md:text-6xl font-black text-[#09092d] leading-[1.1] tracking-tight">
                        Vuela como <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#09092d] to-[#f4bba4]">
                            siempre soñaste.
                        </span>
                    </motion.h1>

                    <motion.p variants={fadeIn} className="text-gray-600 text-base md:text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
                        Configura tu viaje desde el primer segundo. Elige tu confort, tu comida y tu destino.
                    </motion.p>
                </motion.div>

                {/* 3. IMAGEN DERECHA CON TARJETA INTEGRADA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative lg:block w-full max-w-md lg:max-w-none mx-auto"
                >
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 md:border-8 border-white h-95 lg:h-105">
                        <img
                            src="/img/India.webp"
                            alt="Travel"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* TARJETA FLOTANTE 1 */}
                    {/* CORRECCIÓN: Animación suavizada (de -20 a -8) para que no baile bruscamente al 100% de zoom */}
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-4 -left-6 bg-white p-4 rounded-xl shadow-xl z-20 border border-gray-50 flex items-center gap-3.5 min-w-45"
                    >
                        <div className="bg-[#f4bba4] p-2.5 rounded-lg text-white shrink-0">
                            <Calendar size={20} />
                        </div>
                        <div>
                            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Próximo Vuelo</p>
                            <p className="text-[#09092d] font-black text-xs">24 de Mayo, 2026</p>
                        </div>
                    </motion.div>

                    {/* TARJETA FLOTANTE 2 */}

                    <motion.div
                        animate={{ y: [0, -12, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute top-12 -right-6 bg-white p-4 rounded-xl shadow-xl z-20 border border-gray-50 flex items-center gap-3.5 min-w-37.5"
                    >
                        <div className="bg-[#f4bba4] p-2.5 rounded-lg text-white shrink-0">
                            <Armchair size={20} />
                        </div>
                        <div>
                            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Clase</p>
                            <p className="text-[#09092d] font-black text-xs">Business</p>
                        </div>
                    </motion.div>
                </motion.div>

            </div>

            {/* 4. BARRA DE BÚSQUEDA CON FILTROS */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="w-full max-w-6xl px-4 sm:px-6 lg:px-8 mt-12 lg:mt-16 relative"
            >
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#f4bba4]/10 rounded-full blur-2xl -z-10" />

                <div className="bg-white/60 backdrop-blur-xl p-1.5 md:p-2 rounded-3xl lg:rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(9,9,45,0.08)] border border-white/40">
                    <div className="bg-white rounded-2xl lg:rounded-[2.8rem] p-4 lg:p-6">

                        {/* Primera fila: Ruta con botón de intercambio */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4 mb-5">

                            {/* Origen */}
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-4 flex items-center text-[#f4bba4] group-focus-within:scale-105 transition-transform">
                                    <MapPin size={20} />
                                </div>
                                <div className="pl-11 pr-4 py-2.5 bg-gray-50/60 rounded-xl border border-transparent focus-within:border-[#f4bba4]/30 focus-within:bg-white transition-all">
                                    <label className="block text-[9px] font-black text-gray-400 uppercase ml-0.5">Origen</label>
                                    <input type="text" placeholder="¿Dónde estás?" className="bg-transparent outline-none font-bold text-[#09092d] w-full text-sm" />
                                </div>
                            </div>

                            {/* Destino */}
                            <div className="relative group flex items-center gap-3">
                                <div className="relative w-full">
                                    <div className="absolute inset-y-0 left-4 flex items-center text-[#09092d] group-focus-within:scale-105 transition-transform">
                                        <MapPin size={20} />
                                    </div>
                                    <div className="pl-11 pr-4 py-2.5 bg-gray-50/60 rounded-xl border border-transparent focus-within:border-[#09092d]/30 focus-within:bg-white transition-all">
                                        <label className="block text-[9px] font-black text-gray-400 uppercase ml-0.5">Destino</label>
                                        <input type="text" placeholder="¿A dónde vas?" className="bg-transparent outline-none font-bold text-[#09092d] w-full text-sm" />
                                    </div>
                                </div>

                                {/* Botón de Intercambio Creativo (Ahora flota elegantemente al lado) */}
                                <motion.button
                                    whileHover={{ rotate: 180 }}
                                    transition={{ duration: 0.3 }}
                                    className="bg-[#09092d] text-white p-2.5 rounded-full shadow-md hidden xl:flex shrink-0 items-center justify-center"
                                >
                                    <ArrowRightLeft size={14} />
                                </motion.button>
                            </div>

                            {/* Fecha */}
                            <div className="relative group md:col-span-2 lg:col-span-1">
                                <div className="absolute inset-y-0 left-4 flex items-center text-[#09092d]">
                                    <Calendar size={20} />
                                </div>
                                <div className="pl-11 pr-4 py-2.5 bg-gray-50/60 rounded-xl border border-transparent focus-within:border-[#09092d]/20 focus-within:bg-white transition-all">
                                    <label className="block text-[9px] font-black text-gray-400 uppercase ml-0.5">Fecha</label>
                                    <input type="date" className="bg-transparent outline-none font-bold text-[#09092d] w-full cursor-pointer text-sm" />
                                </div>
                            </div>
                        </div>

                        {/* Segunda fila: Personalización */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-4">

                            {/* Confort */}
                            <div className="w-full group relative overflow-hidden bg-gray-50 p-3.5 rounded-2xl border border-gray-100 hover:shadow-sm transition-all">
                                <div className="flex items-center gap-3.5 relative z-10">
                                    <div className="p-2.5 bg-white rounded-xl shadow-sm text-[#09092d] shrink-0">
                                        <Armchair size={20} />
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <span className="text-[9px] font-bold text-gray-400 uppercase">Confort</span>
                                        <select className="bg-transparent outline-none font-bold text-[#09092d] cursor-pointer appearance-none text-xs md:text-sm pt-0.5">
                                            <option>Económica - Ventanilla</option>
                                            <option>Business Class</option>
                                            <option>First Class</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-20 h-20 bg-[#09092d]/5 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-700" />
                            </div>

                            {/* Gastronomía */}
                            <div className="w-full group relative overflow-hidden bg-gray-50 p-3.5 rounded-2xl border border-gray-100 hover:shadow-sm transition-all">
                                <div className="flex items-center gap-3.5 relative z-10">
                                    <div className="p-2.5 bg-white rounded-xl shadow-sm text-[#09092d] shrink-0">
                                        <Coffee size={20} />
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <span className="text-[9px] font-bold text-gray-400 uppercase">Gastronomía</span>
                                        <select className="bg-transparent outline-none font-bold text-[#09092d] cursor-pointer appearance-none text-xs md:text-sm pt-0.5">
                                            <option>Menú Gourmet</option>
                                            <option>Menú Vegano</option>
                                            <option>Menú para Niños</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-20 h-20 bg-[#f4bba4]/10 rounded-full -mr-8 -mt-8 group-hover:scale-150 transition-transform duration-700" />
                            </div>

                            {/* Botón Buscar */}
                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className="w-full md:col-span-2 lg:col-span-1 relative group overflow-hidden bg-[#09092d] text-white px-8 py-4 rounded-2xl font-black transition-all shadow-md"
                            >
                                <div className="relative z-10 flex items-center justify-center gap-2.5">
                                    <Search size={18} className="group-hover:rotate-12 transition-transform" />
                                    <span className="tracking-wider text-xs md:text-sm">BUSCAR AHORA</span>
                                </div>
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#f4bba4]/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </motion.button>
                        </div>
                    </div>
                </div>

                {/* Sub-badge inferior */}
                <div className="mt-5 flex justify-center items-center gap-3 text-gray-400 text-[10px] font-bold tracking-widest uppercase">
                    <div className="h-px w-8 bg-gray-200" />
                    Control de vuelo personalizado
                    <div className="h-px w-8 bg-gray-200" />
                </div>
            </motion.div>
        </section>
    );
}