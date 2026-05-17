"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Car, CarFront, Star, Bus, Zap, Mountain } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

// Diccionario de imágenes asociadas a cada tarjeta
const IMAGENES_VEHICULOS= {
    sedan: "/img/Sedan.jpeg", // Tu foto base
    suv: "/img/SUV.jpeg",
    privado: "/img/Privado.jpeg",
    van: "/img/Vans.jpeg",
    electric: "/img/Electricos.jpeg",
    offroad: "/img/4x4.jpeg"
};

export default function TarjetasTipoVehiculo() {
    const [idActivo, setIdActivo] = useState("sedan");

    return (
        <section className="py-15 mb-20 bg-white rounded-3xl mt-25">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={containerVariants}
                className="max-w-6xl mx-auto px-4"
            >
                <motion.h2
                    variants={itemVariants}
                    className="text-4xl md:text-5xl font-black text-[#09092d] text-left mb-16"
                >
                    ¡Diferentes métodos de transporte para cada necesidad!
                    <motion.div
                        variants={itemVariants}
                        className="h-1.5 w-24 flex justify-center items-center bg-[#f4bba4] mt-4 rounded-full"
                    />
                </motion.h2>

                {/* ESTRUCTURA MAESTRA EN GRID*/}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start w-full">
                    
                    {/* COLUMNA IZQUIERDA: Tus 6 tarjetas apiladas (Ocupa 5 columnas) */}
                    <div className="flex flex-col gap-4 w-full lg:col-span-5 max-w-sm">

                        {/* Tarjeta 1: Autos Sedanes */}
                        <motion.div
                            variants={itemVariants}
                            onMouseEnter={() => setIdActivo("sedan")} // Detecta el hover
                            className={`relative flex items-center justify-start overflow-hidden p-4 rounded-2xl border-2 transition-all duration-300 group hover:translate-x-3 cursor-pointer gap-5 ${
                                idActivo === "sedan" ? "border-[#f4bba4]" : "border-transparent"
                            }`}
                        >
                            <div className={`absolute inset-0 bg-[#f2f1ed] transition-opacity duration-300 ${idActivo === "sedan" ? "opacity-0" : "opacity-100"} -z-20 rounded-xl`} />
                            {idActivo === "sedan" && <div className="absolute inset-0 bg-[#09092d] -z-20 rounded-xl transition-all duration-300" />}
                            
                            <div className="w-12 h-12 shrink-0 bg-[#09092d] group-hover:bg-[#f4bba4] rounded-xl flex items-center justify-center transition-all duration-500 shadow-md">
                                <Car size={22} className="text-[#f4bba4] group-hover:text-[#09092d] transition-colors duration-500" />
                            </div>
                            <h3 className={`text-lg font-bold transition-colors duration-300 whitespace-nowrap ${idActivo === "sedan" ? "text-[#f4bba4]" : "text-[#09092d]"}`}>
                                Autos Sedanes
                            </h3>
                        </motion.div>

                        {/* Tarjeta 2: SUVs */}
                        <motion.div
                            variants={itemVariants}
                            onMouseEnter={() => setIdActivo("suv")}
                            className={`relative flex items-center justify-start overflow-hidden p-4 rounded-2xl border-2 transition-all duration-300 group hover:translate-x-3 cursor-pointer gap-5 ${
                                idActivo === "suv" ? "border-[#f4bba4]" : "border-transparent"
                            }`}
                        >
                            <div className={`absolute inset-0 bg-[#f2f1ed] transition-opacity duration-300 ${idActivo === "suv" ? "opacity-0" : "opacity-100"} -z-20 rounded-xl`} />
                            {idActivo === "suv" && <div className="absolute inset-0 bg-[#09092d] -z-20 rounded-xl transition-all duration-300" />}
                            
                            <div className="w-12 h-12 shrink-0 bg-[#09092d] group-hover:bg-[#f4bba4] rounded-xl flex items-center justify-center transition-all duration-500 shadow-md">
                                <CarFront size={22} className="text-[#f4bba4] group-hover:text-[#09092d] transition-colors duration-500" />
                            </div>
                            <h3 className={`text-lg font-bold transition-colors duration-300 whitespace-nowrap ${idActivo === "suv" ? "text-white" : "text-[#09092d]"}`}>
                                SUVs
                            </h3>
                        </motion.div>

                        {/* Tarjeta 3: Traslado Privado */}
                        <motion.div
                            variants={itemVariants}
                            onMouseEnter={() => setIdActivo("privado")}
                            className={`relative flex items-center justify-start overflow-hidden p-4 rounded-2xl border-2 transition-all duration-300 group hover:translate-x-3 cursor-pointer gap-5 ${
                                idActivo === "privado" ? "border-[#f4bba4]" : "border-transparent"
                            }`}
                        >
                            <div className={`absolute inset-0 bg-[#f2f1ed] transition-opacity duration-300 ${idActivo === "privado" ? "opacity-0" : "opacity-100"} -z-20 rounded-xl`} />
                            {idActivo === "privado" && <div className="absolute inset-0 bg-[#09092d] -z-20 rounded-xl transition-all duration-300" />}
                            
                            <div className="w-12 h-12 shrink-0 bg-[#09092d] group-hover:bg-[#f4bba4] rounded-xl flex items-center justify-center transition-all duration-500 shadow-md">
                                <Star size={22} className="text-[#f4bba4] group-hover:text-[#09092d] transition-colors duration-500" />
                            </div>
                            <h3 className={`text-lg font-bold transition-colors duration-300 whitespace-nowrap ${idActivo === "privado" ? "text-white" : "text-[#09092d]"}`}>
                                Traslado Privado
                            </h3>
                        </motion.div>

                        {/* Tarjeta 4: Vans & Shuttles */}
                        <motion.div
                            variants={itemVariants}
                            onMouseEnter={() => setIdActivo("van")}
                            className={`relative flex items-center justify-start overflow-hidden p-4 rounded-2xl border-2 transition-all duration-300 group hover:translate-x-3 cursor-pointer gap-5 ${
                                idActivo === "van" ? "border-[#f4bba4]" : "border-transparent"
                            }`}
                        >
                            <div className={`absolute inset-0 bg-[#f2f1ed] transition-opacity duration-300 ${idActivo === "van" ? "opacity-0" : "opacity-100"} -z-20 rounded-xl`} />
                            {idActivo === "van" && <div className="absolute inset-0 bg-[#09092d] -z-20 rounded-xl transition-all duration-300" />}
                            
                            <div className="w-12 h-12 shrink-0 bg-[#09092d] group-hover:bg-[#f4bba4] rounded-xl flex items-center justify-center transition-all duration-500 shadow-md">
                                <Bus size={22} className="text-[#f4bba4] group-hover:text-[#09092d] transition-colors duration-500" />
                            </div>
                            <h3 className={`text-lg font-bold transition-colors duration-300 whitespace-nowrap ${idActivo === "van" ? "text-white" : "text-[#09092d]"}`}>
                                Vans & Shuttles
                            </h3>
                        </motion.div>

                        {/* Tarjeta 5: Eco Eléctricos */}
                        <motion.div
                            variants={itemVariants}
                            onMouseEnter={() => setIdActivo("electric")}
                            className={`relative flex items-center justify-start overflow-hidden p-4 rounded-2xl border-2 transition-all duration-300 group hover:translate-x-3 cursor-pointer gap-5 ${
                                idActivo === "electric" ? "border-[#f4bba4]" : "border-transparent"
                            }`}
                        >
                            <div className={`absolute inset-0 bg-[#f2f1ed] transition-opacity duration-300 ${idActivo === "electric" ? "opacity-0" : "opacity-100"} -z-20 rounded-xl`} />
                            {idActivo === "electric" && <div className="absolute inset-0 bg-[#09092d] -z-20 rounded-xl transition-all duration-300" />}
                            
                            <div className="w-12 h-12 shrink-0 bg-[#09092d] group-hover:bg-[#f4bba4] rounded-xl flex items-center justify-center transition-all duration-500 shadow-md">
                                <Zap size={22} className="text-[#f4bba4] group-hover:text-[#09092d] transition-colors duration-500" />
                            </div>
                            <h3 className={`text-lg font-bold transition-colors duration-300 whitespace-nowrap ${idActivo === "electric" ? "text-white" : "text-[#09092d]"}`}>
                                Eco Eléctricos
                            </h3>
                        </motion.div>

                        {/* Tarjeta 6: 4x4 */}
                        <motion.div
                            variants={itemVariants}
                            onMouseEnter={() => setIdActivo("offroad")}
                            className={`relative flex items-center justify-start overflow-hidden p-4 rounded-2xl border-2 transition-all duration-300 group hover:translate-x-3 cursor-pointer gap-5 ${
                                idActivo === "offroad" ? "border-[#f4bba4]" : "border-transparent"
                            }`}
                        >
                            <div className={`absolute inset-0 bg-[#f2f1ed] transition-opacity duration-300 ${idActivo === "offroad" ? "opacity-0" : "opacity-100"} -z-20 rounded-xl`} />
                            {idActivo === "offroad" && <div className="absolute inset-0 bg-[#09092d] -z-20 rounded-xl transition-all duration-300" />}
                            
                            <div className="w-12 h-12 shrink-0 bg-[#09092d] group-hover:bg-[#f4bba4] rounded-xl flex items-center justify-center transition-all duration-500 shadow-md">
                                <Mountain size={22} className="text-[#f4bba4] group-hover:text-[#09092d] transition-colors duration-500" />
                            </div>
                            <h3 className={`text-lg font-bold transition-colors duration-300 whitespace-nowrap ${idActivo === "offroad" ? "text-white" : "text-[#09092d]"}`}>
                                4x4
                            </h3>
                        </motion.div>
                    </div>

                    {/* COLUMNA DERECHA: EL NUEVO CONTENEDOR DE FOTOS DINÁMICAS (Ocupa 7 columnas) */}
                    <div className="hidden lg:block lg:col-span-7 relative w-full h-[480px]">
                        
                        {/* Contenedor estilizado con curvas y sombra premium */}
                        <div className="w-full h-full relative rounded-[2.5rem] overflow-hidden bg-[#f2f1ed] border border-gray-100 shadow-2xl">
                            
                            {/* AnimatePresence gestiona la animación de desmontaje e intercambio de imágenes */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={idActivo} // Clave única para obligar a Framer Motion a reanimar cada cambio
                                    initial={{ opacity: 0, scale: 1.02 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.98 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <Image
                                        src={IMAGENES_VEHICULOS[idActivo]}
                                        alt="Visualización de flota StarFly"
                                        fill
                                        quality={95}
                                        className="object-cover object-center"
                                        sizes="40vw"
                                    />
                                </motion.div>
                            </AnimatePresence>
                            
                            {/* Un degradado decorativo inferior */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#09092d]/20 via-transparent to-transparent pointer-events-none" />
                        </div>

                        {/* Silueta decorativa trasera de color salmón calzada perfectamente */}
                        <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#f4bba4]/40 rounded-[2.5rem] -z-10 pointer-events-none" />
                    </div>

                </div>
            </motion.div>
        </section>
    );
}