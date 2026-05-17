"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Calendar, PlaneTakeoff, Armchair, Coffee, ArrowRightLeft } from "lucide-react";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden pt-20 pb-10 bg-white">

            {/* 1. DECORACIÓN DE FONDO */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#f4bba4]/20 rounded-full blur-3xl" />
                <div className="absolute top-1/2 -left-24 w-72 h-72 bg-[#09092d]/5 rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

                {/* 2. TEXTO IZQUIERDA */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={{ visible: { transition: { staggerChildren: 0.2 } } }}
                    className="text-center lg:text-left space-y-6"
                >
                    <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#09092d]/5 text-[#09092d] text-sm font-bold">
                        <PlaneTakeoff size={16} />
                        <span>EXPERIENCIA 100% PERSONALIZABLE</span>
                    </motion.div>

                    <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-black text-[#09092d] leading-[1.1]">
                        Vuela como <br />
                        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#09092d] to-[#f4bba4]">
                            siempre soñaste.
                        </span>
                    </motion.h1>

                    <motion.p variants={fadeIn} className="text-gray-600 text-lg max-w-md mx-auto lg:mx-0 leading-relaxed">
                        Configura tu viaje desde el primer segundo. Elige tu confort, tu comida y tu destino.
                    </motion.p>
                </motion.div>

                {/* 3. IMAGEN DERECHA CON TARJETA INTEGRADA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative hidden lg:block mt-20"
                >
                    <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-8 border-white">
                        <img
                            src="/img/India.webp"
                            alt="Travel"
                            className="w-full h-112.5 object-cover"
                        />
                    </div>

                    {/* TARJETA FLOTANTE */}
                    <motion.div
                        animate={{ y: [0, -20, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-6 -left-10 bg-white p-5 rounded-2xl shadow-2xl z-20 border border-gray-100 flex items-center gap-4 min-w-55"
                    >
                        <div className="bg-[#f4bba4] p-3 rounded-xl text-white">
                            <Calendar size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Próximo Vuelo</p>
                            <p className="text-[#09092d] font-black text-sm">24 de Mayo, 2026</p>
                        </div>
                    </motion.div>



                    {/* TARJETA FLOTANTE 2 */}
                    <motion.div
                        animate={{ y: [0, -70, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute -bottom-6 -right-10 bg-white p-5 rounded-2xl shadow-2xl z-20 border border-gray-100 flex items-center gap-4 min-w-55"
                    >
                        <div className="bg-[#f4bba4] p-3 rounded-xl text-white">
                            <Armchair size={24} />
                        </div>
                        <div>
                            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Clase</p>
                            <p className="text-[#09092d] font-black text-sm">Business</p>
                        </div>
                    </motion.div>
                </motion.div>

            </div>

            {/* 4. BARRA DE BÚSQUEDA CON FILTROS */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="w-full max-w-6xl px-6 mt-16 lg:mt-20 relative"
            >
                {/* Decoración detrás para dar "aire" creativo */}
                <div className="absolute -top-10 -left-10 w-32 h-32 bg-[#f4bba4]/10 rounded-full blur-2xl -z-10" />

                <div className="bg-white/70 backdrop-blur-2xl p-2 rounded-[3rem] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] border border-white/50">
                    <div className="bg-white rounded-[2.8rem] p-4 lg:p-6 shadow-inner">

                        {/* Primera fila: Ruta con botón de intercambio */}
                        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr_1fr] items-center gap-4 mb-8">

                            {/* Origen */}
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-4 flex items-center text-[#f4bba4] group-focus-within:scale-110 transition-transform">
                                    <MapPin size={22} />
                                </div>
                                <div className="pl-12 pr-4 py-3 bg-gray-50/50 rounded-2xl border border-transparent focus-within:border-[#f4bba4]/30 focus-within:bg-white transition-all">
                                    <label className="block text-[10px] font-black text-gray-400 uppercase ml-1">Origen</label>
                                    <input type="text" placeholder="¿Dónde estás?" className="bg-transparent outline-none font-bold text-[#09092d] w-full" />
                                </div>
                            </div>

                            {/* Botón de Intercambio Creativo */}
                            <motion.button
                                whileHover={{ rotate: 180 }}
                                className="bg-[#09092d] text-white p-3 rounded-full shadow-lg hidden lg:block"
                            >
                                <ArrowRightLeft size={18} />
                            </motion.button>

                            {/* Destino */}
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-4 flex items-center text-[#09092d] group-focus-within:scale-110 transition-transform">
                                    <MapPin size={22} />
                                </div>
                                <div className="pl-12 pr-4 py-3 bg-gray-50/50 rounded-2xl border border-transparent focus-within:border-[#09092d]/30 focus-within:bg-white transition-all">
                                    <label className="block text-[10px] font-black text-gray-400 uppercase ml-1">Destino</label>
                                    <input type="text" placeholder="¿A dónde vas?" className="bg-transparent outline-none font-bold text-[#09092d] w-full" />
                                </div>
                            </div>

                            {/* Fecha */}
                            <div className="relative group">
                                <div className="absolute inset-y-0 left-4 flex items-center text-[#09092d]">
                                    <Calendar size={22} />
                                </div>
                                <div className="pl-12 pr-4 py-3 bg-gray-50/50 rounded-2xl border border-transparent focus-within:border-blue-500/30 focus-within:bg-white transition-all">
                                    <label className="block text-[10px] font-black text-gray-400 uppercase ml-1">Fecha</label>
                                    <input type="date" className="bg-transparent outline-none font-bold text-[#09092d] w-full cursor-pointer" />
                                </div>
                            </div>
                        </div>

                        {/* Segunda fila: Personalización con efecto de "Tabs" */}
                        <div className="flex flex-col lg:flex-row items-center gap-4">

                            {/* Clase con Icono más grande */}
                            <div className="flex-1 w-full group relative overflow-hidden bg-linear-to-br from-gray-50 to-gray-100 p-4 rounded-3xl border border-gray-100 hover:shadow-md transition-all">
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="p-3 bg-white rounded-2xl shadow-sm text-[#09092d]">
                                        <Armchair size={24} />
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase">Confort</span>
                                        <select className="bg-transparent outline-none font-bold text-[#09092d] cursor-pointer appearance-none">
                                            <option>Económica - Ventanilla</option>
                                            <option>Business Class</option>
                                            <option>First Class</option>
                                        </select>
                                    </div>
                                </div>
                                {/* Decoración de fondo al hover */}
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#09092d]/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />
                            </div>

                            {/* Menú con Icono más grande */}
                            <div className="flex-1 w-full group relative overflow-hidden bg-linear-to-br from-gray-50 to-gray-100 p-4 rounded-3xl border border-gray-100 hover:shadow-md transition-all">
                                <div className="flex items-center gap-4 relative z-10">
                                    <div className="p-3 bg-white rounded-2xl shadow-sm text-[#09092d]">
                                        <Coffee size={24} />
                                    </div>
                                    <div className="flex flex-col flex-1">
                                        <span className="text-[10px] font-bold text-gray-400 uppercase">Gastronomía</span>
                                        <select className="bg-transparent outline-none font-bold text-[#09092d] cursor-pointer appearance-none">
                                            <option>Menú Gourmet</option>
                                            <option>Menú Vegano</option>
                                            <option>Menú para Niños</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="absolute top-0 right-0 w-24 h-24 bg-[#f4bba4]/10 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />
                            </div>

                            {/* Botón Buscar: El protagonista */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full lg:w-auto relative group overflow-hidden bg-[#09092d] text-white px-10 py-6 rounded-3xl font-black transition-all"
                            >
                                <div className="relative z-10 flex items-center justify-center gap-3">
                                    <Search size={22} className="group-hover:rotate-12 transition-transform" />
                                    <span className="tracking-widest">BUSCAR AHORA</span>
                                </div>
                                {/* Efecto de luz al pasar el mouse */}
                                <div className="absolute inset-0 bg-linear-to-r from-transparent via-[#f4bba4] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                            </motion.button>
                        </div>
                    </div>
                </div>

                <div
                    className="mt-6 flex justify-center items-center gap-4 text-gray-400 text-[11px] font-bold tracking-widest uppercase"
                >
                    <div className="h-px w-10 bg-gray-200" />
                    Control de vuelo personalizado
                    <div className="h-px w-10 bg-gray-200" />
                </div>
            </motion.div>
        </section>
    );
}