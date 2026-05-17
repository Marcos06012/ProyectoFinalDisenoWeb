"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
};

export default function Fotos() {
    return (
        // Añadí w-full para asegurar que el contenedor padre ocupe espacio
        <section className="bg-white rounded-3xl w-3/4 mx-auto my-16 p-10 flex justify-center items-center">
            
            <motion.div 
                variants={containerVariants} 
                initial="hidden" 
                whileInView="visible" 
                className="relative w-full h-150 rounded-3xl overflow-hidden shadow-2xl group cursor-pointer hover:-translate-y-1 transition-transform duration-200"
            >
                <Image 
                    src="/img/Familia.png" 
                    alt="Vacaciones en familia" 
                    fill 
                    priority 
                    className="object-cover transition-transform duration-500 group-hover:scale-105" 
                />

                {/* Degradado */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent" />

                {/* Texto */}
                <div className="absolute mt-65 left-6 text-white z-10">
                    <h3 className="text-6xl font-bold">Descubre</h3>
                    <p className="text-3xl text-gray-200">Todos nuestros destinos</p>
                </div>
            </motion.div>
        </section>
    );
}
