"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, ArrowLeft, MessageSquare, Clock } from "lucide-react";

export default function ContactosInfo() {
    // Estado para controlar los campos del formulario de manera simple
    const [formulario, setFormulario] = useState({
        nombre: "",
        email: "",
        asunto: "soporte",
        mensaje: ""
    });

    // Estado para mostrar un mensaje de éxito al enviar
    const [enviado, setEnviado] = useState(false);

    // Función para actualizar los datos del estado cuando el usuario escribe
    const handleInput = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    };

    // Al activarse, significa que el navegador ya validó que todo es correcto
    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Procesar el envío aquí...
        setEnviado(true);

        // Limpiar el formulario
        setFormulario({
            nombre: "",
            email: "",
            asunto: "soporte",
            mensaje: ""
        });
    };

    return (
        <main className="min-h-screen bg-gray-50 text-gray-950 antialiased">
            
            {/* HERO PRINCIPAL */}
            <div className="bg-[#09092d] text-white px-6 py-12 sm:py-16 relative overflow-hidden">
                <div className="max-w-5xl mx-auto relative z-10">
                    
                    {/* Botón Volver */}
                    <button className="flex items-center gap-2 text-gray-400 hover:text-white text-xs font-medium mb-6 transition-colors">
                        <ArrowLeft size={14} /> Volver al inicio
                    </button>

                    {/* Título y subtítulo */}
                    <h1 className="text-3xl sm:text-4xl font-extrabold flex items-center gap-3 mb-2 tracking-tight">
                        <MessageSquare size={32} className="text-[#ff6b6b]" />
                        Centro de Contacto
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base max-w-xl font-medium">
                        ¿Tienes dudas sobre una reserva o necesitas asistencia personalizada? Nuestro equipo está disponible para ayudarte.
                    </p>

                </div>
            </div>

            {/* CUERPO PRINCIPAL */}
            <div className="max-w-5xl mx-auto px-4 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* COLUMNA IZQUIERDA: FORMULARIO DE CONTACTO */}
                    <motion.div 
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4 }}
                        className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-sm lg:col-span-7"
                    >
                        <h2 className="text-xl font-bold text-gray-900 mb-1">Envíanos un mensaje</h2>
                        <p className="text-xs text-gray-400 mb-6">Te responderemos en un plazo máximo de 24 horas hábiles.</p>

                        {enviado ? (
                            <motion.div 
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                className="bg-emerald-50 border border-emerald-200 text-emerald-900 p-6 rounded-xl text-center"
                            >
                                <p className="font-bold text-lg mb-1">¡Mensaje enviado con éxito!</p>
                                <p className="text-sm text-emerald-700 mb-4">Hemos recibido tu solicitud y un asesor se pondrá en contacto contigo.</p>
                                <button 
                                    onClick={() => setEnviado(false)}
                                    className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors"
                                >
                                    Enviar otro mensaje
                                </button>
                            </motion.div>
                        ) : (
                            /* Formulario con Validación Nativa del Navegador */
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Nombre Completo</label>
                                        <input 
                                            type="text" 
                                            name="nombre"
                                            required
                                            pattern=".*\S.*"
                                            title="El nombre no puede estar vacío o contener solo espacios."
                                            value={formulario.nombre}
                                            onChange={handleInput}
                                            placeholder="Ej. Juan Pérez" 
                                            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Correo Electrónico</label>
                                        <input 
                                            type="email" 
                                            name="email"
                                            required
                                            value={formulario.email}
                                            onChange={handleInput}
                                            placeholder="juan@correo.com" 
                                            className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Asunto de la consulta</label>
                                    <select 
                                        name="asunto"
                                        value={formulario.asunto}
                                        onChange={handleInput}
                                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all appearance-none"
                                    >
                                        <option value="soporte">Soporte con una Reserva</option>
                                        <option value="pagos">Problemas con Pagos o Facturas</option>
                                        <option value="comercial">Alianzas Comerciales</option>
                                        <option value="otros">Otros asuntos</option>
                                    </select>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Tu Mensaje</label>
                                    <textarea 
                                        name="mensaje"
                                        required
                                        minLength={10}
                                        value={formulario.mensaje}
                                        onChange={handleInput}
                                        placeholder="Escribe detalladamente tu consulta aquí..." 
                                        className="w-full border border-gray-200 rounded-xl px-3 py-2.5 text-sm bg-gray-50 focus:bg-white focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none transition-all resize-none"
                                    />
                                </div>

                                <button 
                                    type="submit"
                                    className="bg-gray-900 hover:bg-gray-800 text-white font-semibold text-sm py-3 rounded-xl flex items-center justify-center gap-2 transition-colors mt-2"
                                >
                                    <Send size={16} /> Enviar Mensaje
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* COLUMNA DERECHA: INFORMACIÓN CORPORATIVA */}
                    <div className="flex flex-col gap-6 lg:col-span-5">
                        <motion.div 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="bg-white rounded-2xl border p-6 shadow-sm flex flex-col gap-5"
                        >
                            <h2 className="text-lg font-bold text-gray-900">Información Directa</h2>
                            
                            <div className="flex gap-3 items-start">
                                <div className="p-2.5 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold uppercase text-gray-400 tracking-wider">Escríbenos por Email</p>
                                    <p className="text-sm font-semibold text-gray-900 mt-0.5">soporte@starfly.com</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start">
                                <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600 shrink-0">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold uppercase text-gray-400 tracking-wider">Línea Telefónica</p>
                                    <p className="text-sm font-semibold text-gray-900 mt-0.5">+503 2200-0000</p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start">
                                <div className="p-2.5 rounded-xl bg-purple-50 text-purple-600 shrink-0">
                                    <Clock size={18} />
                                </div>
                                <div>
                                    <p className="text-[11px] font-bold uppercase text-gray-400 tracking-wider">Horario de Atención</p>
                                    <p className="text-sm font-semibold text-gray-900 mt-0.5">Lun a Vie: 8:00 AM — 6:00 PM</p>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div 
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                            className="bg-white rounded-2xl border p-6 shadow-sm flex flex-col gap-4 overflow-hidden"
                        >
                            <div className="flex gap-3 items-center">
                                <MapPin size={20} className="text-red-500" />
                                <h2 className="text-lg font-bold text-gray-900">Nuestra Oficina</h2>
                            </div>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Paseo General Escalón, Edificio World Trade Center, Torre 2, Nivel 4. San Salvador, El Salvador.
                            </p>
                        </motion.div>
                    </div>

                </div>
            </div>
        </main>
    );
}