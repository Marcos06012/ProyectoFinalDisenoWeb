"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
    User, Car, ShieldCheck, Mail, Phone, MapPin, 
    Calendar, KeyRound, LogOut, Clock, CheckCircle2 
} from "lucide-react";

const containerVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.05 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4 } }
};

export default function PerfilUsuario() {
    const [pestañaActiva, setPestañaActiva] = useState("datos");

    return (
        <main className="min-h-screen bg-radial from-gray-50 to-white pt-28 pb-16 overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 md:px-6">
                
                {/* GRID PRINCIPAL */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
                    
                    {/* PANEL DE NAVEGACIÓN IZQUIERDO */}
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-4 bg-white/70 backdrop-blur-md border border-gray-100 rounded-[2.5rem] p-6 shadow-2xl shadow-gray-200/40 text-center"
                    >
                        {/* Avatar e Información Básica */}
                        <div className="relative w-28 h-28 mx-auto bg-[#09092d] text-[#f4bba4] rounded-full flex items-center justify-center shadow-lg border-4 border-white mb-4">
                            <User size={48} strokeWidth={1.5} />
                            <div className="absolute bottom-1 right-1 bg-emerald-500 w-5 h-5 rounded-full border-4 border-white" />
                        </div>
                        
                        <h2 className="text-xl font-black text-[#09092d] tracking-tight">Marcos Jared Alas</h2>
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Miembro Verificado</p>

                        <div className="h-px w-full bg-gray-100 my-6" />

                        {/* Botones de Navegación de Pestañas */}
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={() => setPestañaActiva("datos")}
                                className={`w-full h-12 px-4 rounded-xl font-bold flex items-center gap-3 transition-all duration-300 cursor-pointer ${
                                    pestañaActiva === "datos"
                                    ? "bg-[#09092d] text-white shadow-md"
                                    : "text-gray-500 hover:bg-gray-50 hover:text-[#09092d]"
                                }`}
                            >
                                <User size={18} />
                                <span className="text-sm">Datos Personales</span>
                            </button>

                            <button
                                onClick={() => setPestañaActiva("reservas")}
                                className={`w-full h-12 px-4 rounded-xl font-bold flex items-center gap-3 transition-all duration-300 cursor-pointer ${
                                    pestañaActiva === "reservas"
                                    ? "bg-[#09092d] text-white shadow-md"
                                    : "text-gray-500 hover:bg-gray-50 hover:text-[#09092d]"
                                }`}
                            >
                                <Car size={18} />
                                <span className="text-sm">Mis Reservas</span>
                            </button>

                            <button
                                onClick={() => setPestañaActiva("seguridad")}
                                className={`w-full h-12 px-4 rounded-xl font-bold flex items-center gap-3 transition-all duration-300 cursor-pointer ${
                                    pestañaActiva === "seguridad"
                                    ? "bg-[#09092d] text-white shadow-md"
                                    : "text-gray-500 hover:bg-gray-50 hover:text-[#09092d]"
                                }`}
                            >
                                <ShieldCheck size={18} />
                                <span className="text-sm">Seguridad</span>
                            </button>
                        </div>

                        <div className="h-px w-full bg-gray-100 my-6" />

                        {/* Botón de Cerrar Sesión */}
                        <button className="w-full h-12 px-4 border border-red-100 hover:bg-red-50 text-red-500 font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all duration-300">
                            <LogOut size={18} />
                            <span className="text-sm">Cerrar Sesión</span>
                        </button>
                    </motion.div>

                    {/* CONTENIDO DINÁMICO DERECHO */}
                    <div className="lg:col-span-8 w-full">
                        <motion.div
                            key={pestañaActiva}
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="bg-white/70 backdrop-blur-md border border-gray-100 rounded-[2.5rem] p-6 md:p-8 shadow-2xl shadow-gray-200/40 min-h-112.5"
                        >
                            
                            {/* SECCIÓN 1: DATOS PERSONALES */}
                            {pestañaActiva === "datos" && (
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-black text-[#09092d] tracking-tight">Información de la Cuenta</h3>
                                        <p className="text-sm text-gray-400 font-medium">Gestiona tus datos personales y de contacto básicos.</p>
                                    </div>
                                    <div className="h-px w-full bg-gray-100" />
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <motion.div variants={itemVariants} className="space-y-1.5">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Nombre Completo</label>
                                            <div className="relative">
                                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                <input type="text" defaultValue="Marcos Jared Alas Morales" className="w-full h-12 pl-11 pr-4 bg-gray-50 border border-gray-100 rounded-xl text-gray-700 font-medium focus:outline-hidden focus:border-[#f4bba4] focus:bg-white transition-all" />
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants} className="space-y-1.5">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Código de Estudiante / Identificador</label>
                                            <div className="relative">
                                                <ShieldCheck className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                <input type="text" defaultValue="ID-026224" disabled className="w-full h-12 pl-11 pr-4 bg-gray-100/70 border border-gray-100 rounded-xl text-gray-400 font-medium cursor-not-allowed" />
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants} className="space-y-1.5">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Correo Electrónico</label>
                                            <div className="relative">
                                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                <input type="email" defaultValue="marcos.jared@example.com" className="w-full h-12 pl-11 pr-4 bg-gray-50 border border-gray-100 rounded-xl text-gray-700 font-medium focus:outline-hidden focus:border-[#f4bba4] focus:bg-white transition-all" />
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants} className="space-y-1.5">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Número de Teléfono</label>
                                            <div className="relative">
                                                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                <input type="tel" defaultValue="+503 7123-4567" className="w-full h-12 pl-11 pr-4 bg-gray-50 border border-gray-100 rounded-xl text-gray-700 font-medium focus:outline-hidden focus:border-[#f4bba4] focus:bg-white transition-all" />
                                            </div>
                                        </motion.div>
                                    </div>

                                    <motion.div variants={itemVariants} className="space-y-1.5">
                                        <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Dirección de Residencia</label>
                                        <div className="relative">
                                            <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                            <input type="text" defaultValue="Santa Tecla, La Libertad, El Salvador" className="w-full h-12 pl-11 pr-4 bg-gray-50 border border-gray-100 rounded-xl text-gray-700 font-medium focus:outline-hidden focus:border-[#f4bba4] focus:bg-white transition-all" />
                                        </div>
                                    </motion.div>

                                    <div className="pt-4 flex justify-end">
                                        <button className="h-12 px-6 bg-[#09092d] hover:bg-[#f4bba4] text-white hover:text-[#09092d] font-bold rounded-xl shadow-md transition-all duration-300 cursor-pointer">
                                            Guardar Cambios
                                        </button>
                                    </div>
                                </div>
                            )}

                            {/* SECCIÓN 2: HISTORIAL DE RESERVAS */}
                            {pestañaActiva === "reservas" && (
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-black text-[#09092d] tracking-tight">Historial de Reservas</h3>
                                        <p className="text-sm text-gray-400 font-medium">Revisa tus solicitudes de transporte actuales y pasadas.</p>
                                    </div>
                                    <div className="h-px w-full bg-gray-100" />

                                    {/* Tarjeta de Reserva 1 */}
                                    <motion.div variants={itemVariants} className="p-4 bg-gray-50 border border-gray-100 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-[#09092d] text-[#f4bba4] flex items-center justify-center shrink-0 shadow-xs">
                                                <Car size={22} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#09092d] text-base">Tesla Model S (Eco Eléctrico)</h4>
                                                <p className="text-xs text-gray-400 font-medium flex items-center gap-1.5 mt-0.5">
                                                    <Calendar size={12} /> 24 May 2026 - 28 May 2026
                                                </p>
                                            </div>
                                        </div>
                                        <span className="px-3 py-1 bg-amber-50 border border-amber-200 text-amber-600 font-bold text-xs rounded-full flex items-center gap-1">
                                            <Clock size={12} /> En Espera
                                        </span>
                                    </motion.div>

                                    {/* Tarjeta de Reserva 2 */}
                                    <motion.div variants={itemVariants} className="p-4 bg-gray-50 border border-gray-100 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-[#09092d] text-[#f4bba4] flex items-center justify-center shrink-0 shadow-xs">
                                                <Car size={22} />
                                            </div>
                                            <div>
                                                <h4 className="font-bold text-[#09092d] text-base">Toyota RAV4 (SUV Familiar)</h4>
                                                <p className="text-xs text-gray-400 font-medium flex items-center gap-1.5 mt-0.5">
                                                    <Calendar size={12} /> 10 Abr 2026 - 15 Abr 2026
                                                </p>
                                            </div>
                                        </div>
                                        <span className="px-3 py-1 bg-emerald-50 border border-emerald-100 text-emerald-600 font-bold text-xs rounded-full flex items-center gap-1">
                                            <CheckCircle2 size={12} /> Completado
                                        </span>
                                    </motion.div>
                                </div>
                            )}

                            {/* PASSWORD */}
                            {pestañaActiva === "seguridad" && (
                                <div className="space-y-6">
                                    <div>
                                        <h3 className="text-2xl font-black text-[#09092d] tracking-tight">Seguridad y Acceso</h3>
                                        <p className="text-sm text-gray-400 font-medium">Actualiza tus credenciales para mantener la cuenta protegida.</p>
                                    </div>
                                    <div className="h-px w-full bg-gray-100" />

                                    <div className="space-y-4 max-w-md">
                                        <motion.div variants={itemVariants} className="space-y-1.5">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Contraseña Actual</label>
                                            <div className="relative">
                                                <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                <input type="password" placeholder="..........." className="w-full h-12 pl-11 pr-4 bg-gray-50 border border-gray-100 rounded-xl text-gray-700 font-medium focus:outline-hidden focus:border-[#f4bba4] focus:bg-white transition-all" />
                                            </div>
                                        </motion.div>

                                        <motion.div variants={itemVariants} className="space-y-1.5">
                                            <label className="text-xs font-bold text-gray-400 uppercase tracking-wider pl-1">Nueva Contraseña</label>
                                            <div className="relative">
                                                <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                                <input type="password" placeholder="Mínimo 8 caracteres" className="w-full h-12 pl-11 pr-4 bg-gray-50 border border-gray-100 rounded-xl text-gray-700 font-medium focus:outline-hidden focus:border-[#f4bba4] focus:bg-white transition-all" />
                                            </div>
                                        </motion.div>
                                    </div>

                                    <div className="pt-4 flex justify-end">
                                        <button className="h-12 px-6 bg-[#09092d] hover:bg-[#f4bba4] text-white hover:text-[#09092d] font-bold rounded-xl shadow-md transition-all duration-300 cursor-pointer">
                                            Actualizar Contraseña
                                        </button>
                                    </div>
                                </div>
                            )}

                        </motion.div>
                    </div>

                </div>

            </div>
        </main>
    );
}