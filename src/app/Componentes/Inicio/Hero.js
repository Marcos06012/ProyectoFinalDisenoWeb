"use client";

import { useState } from "react";
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

    const [busqueda, setBusqueda] = useState("");
    const [resultados, setResultados] = useState([]);

    const handleSearch = async () => {
        if (!busqueda) return;

        // Llamamos a nuestra propia API Route creada en el paso 1
        const res = await fetch(`/api/vuelos?destination=${busqueda}`);
        const data = await res.json();

        console.log("Datos recibidos en Hero.js:", data);

        setResultados(data.offers || []);
    };

    return (
        <section className="relative h-screen pt-24 flex flex-col items-center justify-start text-center overflow-hidden bg-[#09092d]">

            {/* MAGEN DE FONDO  */}
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
                className="flex flex-col items-center relative z-20 py-25"
            >
                <motion.h1
                    variants={itemVariants}
                    className="text-7xl font-black mb-8 text-white"
                >
                    Explora el <span className="text-[#f4bba4]">mundo</span>
                </motion.h1>

                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-white mb-8 max-w-lg mx-auto"
                >
                    Tu próxima aventura comienza aquí. Encuentra vuelos, hoteles y traslados al mejor precio.
                </motion.p>
            </motion.div>

            {/* barra de búsqueda */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute h-auto w-full max-w-3xl px-4 z-30 mt-52" // Cambié h-58 por h-auto
            >
                {/* Contenedor padre relativo */}
                <div className="relative">

                    {/* FILA DE BÚSQUEDA (Input + Botón) */}
                    <div className="bg-white p-4 rounded-2xl flex flex-col md:flex-row gap-4 shadow-xl">
                        <div className="flex-1 flex items-center px-2">
                            <Search className="text-[#09092d] mr-2" size={24} />
                            <input
                                type="text"
                                value={busqueda}
                                onChange={(e) => setBusqueda(e.target.value)}
                                placeholder="Código de aeropuerto (ej: LHR)"
                                className="w-full p-2 outline-none text-[#09092d]"
                            />
                        </div>
                        <button
                            onClick={handleSearch}
                            className="text-white bg-[#09092d] hover:bg-amber-600 px-8 py-3 rounded-xl font-black transition-all"
                        >
                            Buscar
                        </button>
                    </div>

                    {/* LISTA DE RESULTADOS (Flotante) */}
                    {resultados.length > 0 && (
                        <div className="absolute top-[110%] left-0 w-full bg-white mt-2 rounded-2xl shadow-2xl z-50 overflow-hidden max-h-75 overflow-y-auto">
                            {resultados.slice(0, 100).map((vuelo) => (
                                <div key={vuelo.id} className="p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer flex justify-between items-center transition-colors">
                                    <div>
                                        <p className="font-black text-[#09092d]">
                                            {vuelo.owner?.name || "Aerolínea desconocida"}
                                        </p>
                                        <p className="text-sm justify-between text-gray-500">Clase: {vuelo.cabin_class}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-[#09092d]">
                                            {vuelo.total_amount} {vuelo.total_currency}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </motion.div>
        </section >
    );
}