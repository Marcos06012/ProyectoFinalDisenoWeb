"use client";

import { motion } from "framer-motion";
import { Menu, User, Heart  } from "lucide-react";
import Link from "next/link";



export default function TopNavbar({ setIsOpen, IsOpen }) {



    return (
        <header className="fixed top-0 left-0 right-0 z-40 bg-[#09092d] backdrop-blur border-b border-black/5">
            <div className="h-20 px-4 flex items-center">
                <motion.button
                    type="button"
                    onClick={() => setIsOpen(true)}
                    className="gap-2 rounded-xl px-3 py-2 text-white hover:bg-blue-950 transition"
                    aria-label="Abrir menú"
                >
                    <Menu size={20} />
                </motion.button>

                <Link href="/" className="pl-4 pr-2 text-2xl font-black text-white">
                    Star<span className="text-[#f4bba4]">Fly</span>
                </Link>

                <div className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                    <Link href="/favoritos" className="gap-2 rounded-2xl px-3 py-2 text-white hover:bg-blue-950 transition">
                        <Heart size={20} />
                    </Link>
                    <Link href="/mi-perfil" className="gap-2 rounded-2xl px-3 py-2 text-white hover:bg-blue-950 transition">
                        <User size={20} />
                    </Link>
                </div>

            </div>
        </header>
    );
}

