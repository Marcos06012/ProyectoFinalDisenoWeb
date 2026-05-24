"use client";

import { motion } from "framer-motion";
import { Search, Car, DollarSign, Bookmark, ChevronDown, CalendarDays } from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { 
            duration: 0.5,
            ease: "easeOut",
            staggerChildren: 0.05 
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

export default function BuscadorVehiculos() {
    return (
        <section className="w-full max-w-6xl mx-auto px-4 md:px-6 my-12 shadow-2xl shadow-gray-200 rounded-[2rem]">
            <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="bg-white/70 w-full max-w-6xl rounded-[2rem] p-4 md:p-6 shadow-4xl shadow-gray-200/40"
            >
                <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
                    
                    {/* BARRA SUPERIOR*/}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-center">
                        
                        {/* INPUT BÚSQUEDA */}
                        <div className="relative w-full lg:col-span-6">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="¿Qué auto buscas? Ej. Tesla Model S, Porsche 911..."
                                className="w-full h-14 pl-12 pr-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-800 placeholder-gray-400 focus:outline-hidden focus:border-[#f4bba4] focus:bg-white transition-all duration-300 font-medium text-sm md:text-base"
                            />
                        </div>

                        {/* FECHA DE PRÉSTAMO */}
                        <div className="relative w-full lg:col-span-2 group">
                            <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#f4bba4] pointer-events-none transition-colors" size={18} />
                            <input
                                type="date"
                                className="w-full h-14 pl-11 pr-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-700 font-medium focus:outline-hidden focus:border-[#f4bba4] focus:bg-white transition-all text-xs md:text-sm cursor-pointer"
                            />
                        </div>

                        {/* FECHA DE DEVOLUCIÓN */}
                        <div className="relative w-full lg:col-span-2 group">
                            <CalendarDays className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#f4bba4] pointer-events-none transition-colors" size={18} />
                            <input
                                type="date"
                                className="w-full h-14 pl-11 pr-4 bg-gray-50 border border-gray-100 rounded-2xl text-gray-700 font-medium focus:outline-hidden focus:border-[#f4bba4] focus:bg-white transition-all text-xs md:text-sm cursor-pointer"
                            />
                        </div>

                        {/* BOTÓN BUSCAR */}
                        <div className="w-full lg:col-span-2">
                            <button
                                type="button"
                                className="w-full h-14 bg-[#09092d] hover:bg-[#f4bba4] text-white hover:text-[#09092d] font-bold rounded-2xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                            >
                                Buscar
                            </button>
                        </div>
                    </div>

                    {/* PANEL DE FILTROS AVANZADOS */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-gray-100/80">
                        
                        {/* FILTRO 1: CATEGORÍA DEL VEHÍCULO */}
                        <motion.div variants={itemVariants} className="relative group">
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 pl-1">Categoría</label>
                            <div className="relative">
                                <Car className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#f4bba4] transition-colors" size={18} />
                                <select
                                    className="w-full h-12 pl-11 pr-10 bg-gray-50 border border-gray-100 rounded-xl text-gray-700 font-medium appearance-none focus:outline-hidden focus:border-[#f4bba4] focus:bg-white transition-all cursor-pointer"
                                >
                                    <option value="">Todos los tipos de vehículo</option>
                                    <option value="sedan">Autos Sedanes (Confort diario)</option>
                                    <option value="suv">SUVs (Espaciosas y Familiares)</option>
                                    <option value="privado">Traslado Privado (Ejecutivos)</option>
                                    <option value="van">Vans & Shuttles (Grupales)</option>
                                    <option value="electric">Eco Eléctricos (Sustentables)</option>
                                    <option value="offroad">4x4 / Offroad (Todo terreno)</option>
                                    <option value="deportivo">Deportivos / Exóticos (Alta gama)</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                            </div>
                        </motion.div>

                        {/* FILTRO 2: RANGO DE PRECIOS */}
                        <motion.div variants={itemVariants} className="relative group">
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 pl-1">Presupuesto</label>
                            <div className="relative">
                                <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#f4bba4] transition-colors" size={18} />
                                <select
                                    className="w-full h-12 pl-11 pr-10 bg-gray-50 border border-gray-100 rounded-xl text-gray-700 font-medium appearance-none focus:outline-hidden focus:border-[#f4bba4] focus:bg-white transition-all cursor-pointer"
                                >
                                    <option value="">Cualquier rango de precio</option>
                                    <option value="economico">Económico (menos de $50/día)</option>
                                    <option value="medio">Estándar / Intermedio ($50 - $100/día)</option>
                                    <option value="Premium">Premium Business ($100 - $200/día)</option>
                                    <option value="Lujo">Lujo Exclusivo (más de $200/día)</option>
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                            </div>
                        </motion.div>

                        {/* FILTRO 3: MARCA POPULAR */}
                        <motion.div variants={itemVariants} className="relative group">
                            <label className="block text-xs font-bold text-gray-400 uppercase tracking-wider mb-1.5 pl-1">Marca Aliada</label>
                            <div className="relative">
                                <Bookmark className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#f4bba4] transition-colors" size={18} />
                                <select
                                    className="w-full h-12 pl-11 pr-10 bg-gray-50 border border-gray-100 rounded-xl text-gray-700 font-medium appearance-none focus:outline-hidden focus:border-[#f4bba4] focus:bg-white transition-all cursor-pointer"
                                >
                                    <option value="">Todas las marcas internacionales</option>
                                    <optgroup label="Japonesas / Coreanas">
                                        <option value="toyota">Toyota</option>
                                        <option value="honda">Honda</option>
                                        <option value="nissan">Nissan</option>
                                        <option value="hyundai">Hyundai</option>
                                        <option value="kia">Kia</option>
                                    </optgroup>
                                    <optgroup label="Alemanas Premium">
                                        <option value="bmw">BMW</option>
                                        <option value="audi">Audi</option>
                                        <option value="porsche">Porsche</option>
                                        <option value="volkswagen">Volkswagen</option>
                                    </optgroup>
                                    <optgroup label="Americanas & Eléctricas">
                                        <option value="tesla">Tesla</option>
                                        <option value="ford">Ford</option>
                                        <option value="chevrolet">Chevrolet</option>
                                        <option value="jeep">Jeep</option>
                                    </optgroup>
                                    
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                            </div>
                        </motion.div>

                    </div>

                </form>
            </motion.div>
        </section>
    );
}