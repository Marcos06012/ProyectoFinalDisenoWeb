"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Car, CarFront, Star, Bus, Zap, Mountain } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.05 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
};

const IMAGENES_VEHICULOS = {
    sedan: "/img/Sedan.jpeg",
    suv: "/img/SUV.jpeg",
    privado: "/img/Privado.jpeg",
    van: "/img/Vans.jpeg",
    electric: "/img/Electricos.jpeg",
    offroad: "/img/4x4.jpeg"
};

export default function TarjetasTipoVehiculo() {
    const [idActivo, setIdActivo] = useState("sedan");

    return (
        <section className="py-12 md:py-16 my-12 bg-gray-50 md:bg-white rounded-[2rem] md:rounded-3xl">
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                className="max-w-6xl mx-auto px-4 md:px-6"
            >
                {/* ENCABEZADO */}
                <motion.h2
                    variants={itemVariants}
                    className="text-3xl sm:text-4xl md:text-5xl font-black text-[#09092d] text-left mb-10 md:mb-14 tracking-tight max-w-2xl"
                >
                    ¡Diferentes métodos de transporte para cada necesidad!
                    <motion.div
                        variants={itemVariants}
                        className="h-1.5 w-20 bg-[#f4bba4] mt-4 rounded-full"
                    />
                </motion.h2>

                {/* ESTRUCTURA MAESTRA EN GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
                    
                    {/* COLUMNA IZQUIERDA: Tarjetas apiladas */}
                    <div className="flex flex-col gap-3.5 w-full lg:col-span-5 max-w-md mx-auto lg:max-w-none">

                        {/* Tarjeta 1: Autos Sedanes */}
                        <motion.div
                            variants={itemVariants}
                            onMouseEnter={() => setIdActivo("sedan")}
                            className={`relative flex items-center justify-start overflow-hidden p-4 rounded-xl md:rounded-2xl border-2 transition-all duration-300 group hover:translate-x-2 cursor-pointer gap-4 md:gap-5 ${
                                idActivo === "sedan" ? "border-[#f4bba4]" : "border-transparent"
                            }`}
                        >
                            <div className={`absolute inset-0 bg-[#f2f1ed] transition-opacity duration-300 ${idActivo === "sedan" ? "opacity-0" : "opacity-100"} -z-20`} />
                            {idActivo === "sedan" && <div className="absolute inset-0 bg-[#09092d] -z-20 transition-all duration-300" />}
                            
                            <div className="w-11 h-11 md:w-12 md:h-12 shrink-0 bg-[#09092d] group-hover:bg-[#f4bba4] rounded-xl flex items-center justify-center transition-all duration-500 shadow-md">
                                <Car size={20} className="text-[#f4bba4] group-hover:text-[#09092d] transition-colors duration-500" />
                            </div>
                            <h3 className={`text-base md:text-lg font-bold transition-colors duration-300 whitespace-nowrap ${idActivo === "sedan" ? "text-[#f4bba4]" : "text-[#09092d]"}`}>
                                Autos Sedanes
                            </h3>
                        </motion.div>

                        {/* Tarjeta 2: SUVs */}
                        <motion.div
                            variants={itemVariants}
                            onMouseEnter={() => setIdActivo("suv")}
                            className={`relative flex items-center justify-start overflow-hidden p-4 rounded-xl md:rounded-2xl border-2 transition-all duration-300 group hover:translate-x-2 cursor-pointer gap-4 md:gap-5 ${
                                idActivo === "suv" ? "border-[#f4bba4]" : "border-transparent"
                            }`}
                        >
                            <div className={"absolute inset-0 bg-[#f2f1ed] transition-opacity duration-300 " + (idActivo === "suv" ? "opacity-0" : "opacity-100") + " -z-20"} />
                            {idActivo === "suv" && <div className="absolute inset-0 bg-[#09092d] -z-20 transition-all duration-300" />}
                            
                            <div className="w-11 h-11 md:w-12 md:h-12 shrink-0 bg-[#09092d] group-hover:bg-[#f4bba4] rounded-xl flex items-center justify-center transition-all duration-500 shadow-md">
                                <CarFront size={20} className="text-[#f4bba4] group-hover:text-[#09092d] transition-colors duration-500" />
                            </div>
                            <h3 className={`text-base md:text-lg font-bold transition-colors duration-300 whitespace-nowrap ${idActivo === "suv" ? "text-[#f4bba4]" : "text-[#09092d]"}`}>
                                SUVs
                            </h3>
                        </motion.div>

                        {/* Tarjeta 3: Traslado Privado */}
                        <motion.div
                            variants={itemVariants}
                            onMouseEnter={() => setIdActivo("privado")}
                            className={`relative flex items-center justify-start overflow-hidden p-4 rounded-xl md:rounded-2xl border-2 transition-all duration-300 group hover:translate-x-2 cursor-pointer gap-4 md:gap-5 ${
                                idActivo === "privado" ? "border-[#f4bba4]" : "border-transparent"
                            }`}
                        >
                            <div className={`absolute inset-0 bg-[#f2f1ed] transition-opacity duration-300 ${idActivo === "privado" ? "opacity-0" : "opacity-100"} -z-20`} />
                            {idActivo === "privado" && <div className="absolute inset-0 bg-[#09092d] -z-20 transition-all duration-300" />}
                            
                            <div className="w-11 h-11 md:w-12 md:h-12 shrink-0 bg-[#09092d] group-hover:bg-[#f4bba4] rounded-xl flex items-center justify-center transition-all duration-500 shadow-md">
                                <Star size={20} className="text-[#f4bba4] group-hover:text-[#09092d] transition-colors duration-500" />
                            </div>
                            <h3 className={`text-base md:text-lg font-bold transition-colors duration-300 whitespace-nowrap ${idActivo === "privado" ? "text-[#f4bba4]" : "text-[#09092d]"}`}>
                                Traslado Privado
                            </h3>
                        </motion.div>

                        {/* Tarjeta 4: Vans & Shuttles */}
                        <motion.div
                            variants={itemVariants}
                            onMouseEnter={() => setIdActivo("van")}
                            className={`relative flex items-center justify-start overflow-hidden p-4 rounded-xl md:rounded-2xl border-2 transition-all duration-300 group hover:translate-x-2 cursor-pointer gap-4 md:gap-5 ${
                                idActivo === "van" ? "border-[#f4bba4]" : "border-transparent"
                            }`}
                        >
                            <div className={`absolute inset-0 bg-[#f2f1ed] transition-opacity duration-300 ${idActivo === "van" ? "opacity-0" : "opacity-100"} -z-20`} />
                            {idActivo === "van" && <div className="absolute inset-0 bg-[#09092d] -z-20 transition-all duration-300" />}
                            
                            <div className="w-11 h-11 md:w-12 md:h-12 shrink-0 bg-[#09092d] group-hover:bg-[#f4bba4] rounded-xl flex items-center justify-center transition-all duration-500 shadow-md">
                                <Bus size={20} className="text-[#f4bba4] group-hover:text-[#09092d] transition-colors duration-500" />
                            </div>
                            <h3 className={`text-base md:text-lg font-bold transition-colors duration-300 whitespace-nowrap ${idActivo === "van" ? "text-[#f4bba4]" : "text-[#09092d]"}`}>
                                Vans & Shuttles
                            </h3>
                        </motion.div>

                        {/* Tarjeta 5: Eco Eléctricos */}
                        <motion.div
                            variants={itemVariants}
                            onMouseEnter={() => setIdActivo("electric")}
                            className={`relative flex items-center justify-start overflow-hidden p-4 rounded-xl md:rounded-2xl border-2 transition-all duration-300 group hover:translate-x-2 cursor-pointer gap-4 md:gap-5 ${
                                idActivo === "electric" ? "border-[#f4bba4]" : "border-transparent"
                            }`}
                        >
                            <div className={`absolute inset-0 bg-[#f2f1ed] transition-opacity duration-300 ${idActivo === "electric" ? "opacity-0" : "opacity-100"} -z-20`} />
                            {idActivo === "electric" && <div className="absolute inset-0 bg-[#09092d] -z-20 transition-all duration-300" />}
                            
                            <div className="w-11 h-11 md:w-12 md:h-12 shrink-0 bg-[#09092d] group-hover:bg-[#f4bba4] rounded-xl flex items-center justify-center transition-all duration-500 shadow-md">
                                <Zap size={20} className="text-[#f4bba4] group-hover:text-[#09092d] transition-colors duration-500" />
                            </div>
                            <h3 className={`text-base md:text-lg font-bold transition-colors duration-300 whitespace-nowrap ${idActivo === "electric" ? "text-[#f4bba4]" : "text-[#09092d]"}`}>
                                Eco Eléctricos
                            </h3>
                        </motion.div>

                        {/* Tarjeta 6: 4x4 */}
                        <motion.div
                            variants={itemVariants}
                            onMouseEnter={() => setIdActivo("offroad")}
                            className={`relative flex items-center justify-start overflow-hidden p-4 rounded-xl md:rounded-2xl border-2 transition-all duration-300 group hover:translate-x-2 cursor-pointer gap-4 md:gap-5 ${
                                idActivo === "offroad" ? "border-[#f4bba4]" : "border-transparent"
                            }`}
                        >
                            <div className={`absolute inset-0 bg-[#f2f1ed] transition-opacity duration-300 ${idActivo === "offroad" ? "opacity-0" : "opacity-100"} -z-20`} />
                            {idActivo === "offroad" && <div className="absolute inset-0 bg-[#09092d] -z-20 transition-all duration-300" />}
                            
                            <div className="w-11 h-11 md:w-12 md:h-12 shrink-0 bg-[#09092d] group-hover:bg-[#f4bba4] rounded-xl flex items-center justify-center transition-all duration-500 shadow-md">
                                <Mountain size={20} className="text-[#f4bba4] group-hover:text-[#09092d] transition-colors duration-500" />
                            </div>
                            <h3 className={`text-base md:text-lg font-bold transition-colors duration-300 whitespace-nowrap ${idActivo === "offroad" ? "text-[#f4bba4]" : "text-[#09092d]"}`}>
                                4x4
                            </h3>
                        </motion.div>
                    </div>

                    {/* COLUMNA DERECHA: VISOR DE FOTOS DINÁMICAS */}
                    <div className=" lg:block lg:col-span-7 relative w-full h-75 sm:h-100 lg:h-115">
                        <div className="w-full h-full relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden bg-[#f2f1ed] border border-gray-100 shadow-xl">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={idActivo}
                                    initial={{ opacity: 0, scale: 1.01 }} 
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.99 }}
                                    transition={{ duration: 0.25, ease: "easeInOut" }}
                                    className="absolute inset-0 w-full h-full"
                                >
                                    <Image
                                        src={IMAGENES_VEHICULOS[idActivo]}
                                        alt="Visualización de flota StarFly"
                                        fill
                                        quality={90}
                                        className="object-cover object-center"
                                        sizes="(max-w-1024px) 100vw, 45vw"
                                        priority
                                    />
                                </motion.div>
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-linear-to-t from-[#09092d]/15 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}