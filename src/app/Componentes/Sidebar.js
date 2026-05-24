"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Home, Plane, Hotel, Car, Sparkles, User, X } from "lucide-react";
import Link from "next/link";

// Solo recibimos las props, NO declaramos useState aquí
export default function Sidebar({ isOpen, setIsOpen }) {
    const [activeItem, setActiveItem] = useState("Inicio");

    const sidebarVariants = {
        open: { x: 0, opacity: 1 },
        closed: { x: "-100%", opacity: 0 }
    };

    return (
        <>
            <motion.nav
                className="bg-[#09092d] w-64 h-screen text-white fixed top-0 left-0 z-50 p-6 shadow-2xl border-r border-[#393781]/30"
                initial={false}
                animate={isOpen ? "open" : "closed"}
                variants={sidebarVariants}
                transition={{ duration: 0.3, ease: "easeInOut" }}
            >
                <div className="flex justify-between items-center mb-10">
                    <Link href="/" onClick={() => setIsOpen(false)}>
                        <div className="text-white text-4xl font-black tracking-tighter">
                            Star<span className="text-[#f4bba4]">Fly</span>
                        </div>
                    </Link>

                    <motion.button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="gap-2 rounded-xl px-3 py-2 text-white hover:bg-blue-950 transition"
                >
                    <X size={30} />
                </motion.button>
                </div>

                <nav className="flex flex-col gap-2">
                    <Link href="/" onClick={() => { setActiveItem("Inicio"); setIsOpen(false); }}
                        className={`flex w-full items-center gap-3 py-3 px-4 rounded-xl transition-all ${activeItem === "Inicio" ? "bg-[#393781]" : "text-gray-400 hover:bg-[#1e1e3f]"}`}>
                        <Home size={24} /> Inicio
                    </Link>
                    <Link href="/vuelos" onClick={() => { setActiveItem("Vuelos"); setIsOpen(false); }}
                        className={`flex w-full items-center gap-3 py-3 px-4 rounded-xl transition-all ${activeItem === "Vuelos" ? "bg-[#393781]" : "text-gray-400 hover:bg-[#1e1e3f]"}`}>
                        <Plane size={24} /> Vuelos
                    </Link>
                    <Link href="/hoteles" onClick={() => { setActiveItem("Hoteles"); setIsOpen(false); }}
                        className={`flex w-full items-center gap-3 py-3 px-4 rounded-xl transition-all ${activeItem === "Hoteles" ? "bg-[#393781]" : "text-gray-400 hover:bg-[#1e1e3f]"}`}>
                        <Hotel size={24} /> Hoteles
                    </Link>
                    <Link href="/coches" onClick={() => { setActiveItem("Coches"); setIsOpen(false); }}
                        className={`flex w-full items-center gap-3 py-3 px-4 rounded-xl transition-all ${activeItem === "Coches" ? "bg-[#393781]" : "text-gray-400 hover:bg-[#1e1e3f]"}`}>
                        <Car size={24} /> Coches y Traslados
                    </Link>
                    
                </nav>

                <div className="border-t border-[#393781]/50 my-6"></div>

                <Link href="/mi-perfil" onClick={() => { setActiveItem("Mi Perfil"); setIsOpen(false); }}
                    className={`flex items-center gap-3 py-3 px-4 rounded-xl transition-all ${activeItem === "Mi Perfil" ? "bg-[#393781]" : "text-gray-400 hover:bg-[#1e1e3f]"}`}>
                    <User size={24} /> Mi Perfil
                </Link>
            </motion.nav>

            {/* Overlay para cerrar al hacer clic fuera */}
            {isOpen && (
                <div onClick={() => setIsOpen(false)} className="fixed inset-0 bg-black/50 z-40" />
            )}
        </>
    );
}