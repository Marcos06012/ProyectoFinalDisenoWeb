"use client";

import { motion } from "framer-motion";
import { Menu, User, Heart, Phone } from "lucide-react";
import Link from "next/link";

export default function TopNavbar({ setIsOpen }) {
    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-[#09092d] backdrop-blur border-b border-white/5">
            <div className="h-20 w-full px-4 sm:px-6 flex items-center justify-between">
                
                {/* LADO IZQUIERDO: Menú y Logo pegados a la orilla izquierda */}
                <div className="flex items-center gap-2">
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        type="button"
                        onClick={() => setIsOpen(true)}
                        className="rounded-xl p-2.5 text-white hover:bg-white/10 transition-colors"
                        aria-label="Abrir menú"
                    >
                        <Menu size={22} />
                    </motion.button>

                    <Link href="/" className="text-xl sm:text-2xl font-black text-white tracking-tight px-2">
                        Star<span className="text-[#f4bba4]">Fly</span>
                    </Link>
                </div>

                {/* LADO DERECHO: Botones de Navegación pegados a la orilla derecha */}
                <div className="flex items-center gap-1 sm:gap-2">
                    {/* Contacto */}
                    <Link
                        href="/contacto"
                        className="rounded-xl p-2.5 text-white hover:bg-white/10 transition-colors"
                        title="Contacto"
                    >
                        <Phone size={20} />
                    </Link>

                    {/* Favoritos */}
                    <Link
                        href="/favoritos"
                        className="rounded-xl p-2.5 text-white hover:bg-white/10 transition-colors"
                        title="Favoritos"
                    >
                        <Heart size={20} />
                    </Link>

                    {/* Mi Perfil */}
                    <Link
                        href="/mi-perfil"
                        className="rounded-xl p-2.5 text-white hover:bg-white/10 transition-colors"
                        title="Mi Perfil"
                    >
                        <User size={20} />
                    </Link>
                </div>

            </div>
        </header>
    );
}