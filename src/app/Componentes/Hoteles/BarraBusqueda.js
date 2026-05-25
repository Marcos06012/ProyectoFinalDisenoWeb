"use client";

import { motion } from "framer-motion";
import { Bed, Users, Calendar, Sparkles, Search, MapPin } from "lucide-react";

export default function BarraBusqueda() {
    return (
        <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full max-w-6xl mx-auto mt-20 px-6"
        >
            <div className="bg-white/90 backdrop-blur-xl p-3 rounded-[3rem] border border-gray-100">
                <div className="flex flex-col lg:flex-row items-center gap-4">
                    
                    {/* Ubicación */}
                    <div className="flex-[1.5] w-full flex items-center gap-4 bg-gray-50/50 p-4 rounded-[2rem] hover:bg-white transition-all border border-transparent hover:border-gray-100 group">
                        <div className="bg-[#09092d] text-white p-3 rounded-2xl group-hover:rotate-12 transition-transform">
                            <MapPin size={22} />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-gray-400 uppercase">¿A dónde quieres ir?</span>
                            <input type="text" placeholder="Explorar destinos..." className="bg-transparent outline-none font-bold text-[#09092d] w-full" />
                        </div>
                    </div>

                    {/* Fechas */}
                    <div className="flex-1 w-full flex items-center gap-4 bg-gray-50/50 p-4 rounded-[2rem]">
                        <Calendar className="text-[#f4bba4]" size={24} />
                        <div className="flex flex-col">
                            <span className="text-[10px] font-black text-gray-400 uppercase">Estancia</span>
                            <input type="text" placeholder="Check-in — Check-out" className="bg-transparent outline-none font-bold text-[#09092d] w-full text-sm" />
                        </div>
                    </div>

                    {/* Huéspedes y Personalización de Habitación */}
                    <div className="flex-1 w-full flex items-center gap-4 bg-gray-50/50 p-4 rounded-[2rem] group relative">
                        <Sparkles className="text-[#09092d] animate-pulse" size={24} />
                        <div className="flex flex-col flex-1">
                            <span className="text-[10px] font-black text-gray-400 uppercase">Preferencia</span>
                            <select className="bg-transparent outline-none font-bold text-[#09092d] cursor-pointer appearance-none text-sm">
                                <option>2 Adultos • Suite Vista Mar</option>
                                <option>1 Adulto • Loft Urbano</option>
                                <option>Familia • Villa Privada</option>
                                <option>Pareja • Spa & Relax</option>
                            </select>
                        </div>
                    </div>

                    {/* Botón de Acción */}
                    <button className="w-full lg:w-auto bg-[#09092d] text-white p-6 rounded-[2rem] font-black hover:bg-[#f4bba4] hover:text-[#09092d] transition-all shadow-xl flex items-center justify-center gap-3">
                        <Search size={20} />
                        <span className="lg:hidden">BUSCAR HOTEL</span>
                    </button>
                </div>
            </div>

            {/* Tags de búsqueda rápida */}
            <div className="flex justify-center gap-6 mt-6">
                {["Cerca de la playa", "Desayuno incluido", "Cancelación gratuita"].map((tag) => (
                    <span key={tag} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest border-b border-gray-200 pb-1 hover:text-[#f4bba4] hover:border-[#f4bba4] cursor-pointer transition-colors">
                        {tag}
                    </span>
                ))}
            </div>
        </motion.div>
        

    );
}