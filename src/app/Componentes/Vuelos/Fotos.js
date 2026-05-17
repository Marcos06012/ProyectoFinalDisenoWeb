"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { duration: 0.6, ease: "easeOut" } 
    }
};

export default function Fotos() {
    return (

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 md:my-16">
            
            <motion.div 
                variants={containerVariants} 
                initial="hidden" 
                whileInView="visible" 
                viewport={{ once: true, amount: 0.1 }}
                className="relative w-full h-[320px] sm:h-[400px] lg:h-[480px] rounded-2xl md:rounded-3xl overflow-hidden shadow-xl md:shadow-2xl group cursor-pointer"
            >
                <Image 
                    src="/img/Familia.png" 
                    alt="Vacaciones en familia" 
                    fill 
                    quality={90}
                    className="object-cover transition-transform duration-700 group-hover:scale-103" 
                    sizes="(max-w: 1200px) 100vw, 80vw"
                />

                {/* DEGRADADO */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#09092d]/90 via-[#09092d]/40 to-transparent transition-opacity duration-300" />

                {/* TEXTO CONTENEDOR */}
                
                <div className="absolute bottom-0 left-0 w-full p-6 sm:p-8 md:p-12 text-white z-10 flex flex-col items-start text-left">
                    
                
                    <h3 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight mb-2 md:mb-3 drop-shadow-sm">
                        Descubre
                    </h3>
                    
                    <p className="text-base sm:text-lg md:text-xl text-gray-200 font-medium max-w-md leading-relaxed">
                        Todos nuestros destinos
                    </p>
                </div>
            </motion.div>
        </section>
    );
}