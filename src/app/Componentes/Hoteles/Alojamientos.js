"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ALOJAMIENTOS = [
    { title: "Hoteles", desc: "Alojamiento premium", img: "/img/Hoteles.png", size: "md:col-span-2" },
    { title: "Resorts", desc: "Experiencias de lujo", img: "/img/Resort.png", size: "md:col-span-1" },
    { title: "Camping", desc: "Al aire libre", img: "/img/Camping.png", size: "md:col-span-1" },
    { title: "Apartamentos", desc: "Comodidad moderna", img: "/img/Apartamento.png", size: "md:col-span-1" },
    { title: "Casas Rurales", desc: "Paz natural", img: "/img/CasasRurales.png", size: "md:col-span-1" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.15 }
    }
};

const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: { 
        opacity: 1, 
        scale: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    }
};

export default function GaleriaAlojamientos() {
    return (
        <section className="relative py-20 mt-20 overflow-hidden bg-white">
            {/* Decoración de fondo */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full opacity-50" />

            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.1 }}
                variants={containerVariants}
                className="max-w-7xl mx-auto px-6"
            >
                {/* Cabecera Estilizada */}
                <div className="text-center mb-16">
                    <motion.span 
                        variants={itemVariants}
                        className="text-[#f4bba4] font-bold tracking-widest uppercase text-sm"
                    >
                        Tu descanso ideal
                    </motion.span>
                    <motion.h2
                        variants={itemVariants}
                        className="text-4xl md:text-5xl font-black text-[#09092d] mt-2"
                    >
                        ¡TODO TIPO DE ALOJAMIENTOS!
                    </motion.h2>
                    <motion.div 
                        variants={itemVariants}
                        className="h-1.5 w-24 bg-[#f4bba4] mx-auto mt-4 rounded-full" 
                    />
                </div>

                {/* Grid Asimétrico */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {ALOJAMIENTOS.map((item, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            className={`relative h-87.5 rounded-[2.5rem] overflow-hidden shadow-xl group cursor-pointer ${item.size}`}
                        >
                            <Image 
                                src={item.img} 
                                alt={item.title} 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                            />
                            
                            {/* Overlay Gradiente Dinámico */}
                            <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent opacity-80 transition-opacity group-hover:opacity-100" />

                            <div className="absolute bottom-8 left-8 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="text-3xl font-bold">{item.title}</h3>
                                <p className="text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {item.desc}
                                </p>
                                
                                {/* Botón "ver más" que aparece al hover */}
                                <div className="mt-4 flex items-center gap-2 text-xs font-bold text-[#f4bba4] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500">
                                    <span>Explorar ahora</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>  
            </motion.div>
            
        </section>
    );
}