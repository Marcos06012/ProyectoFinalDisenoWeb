"use client";
import "./globals.css";
import { useState } from "react";
import Sidebar from "./Componentes/Sidebar";
import TopNavbar from "./Componentes/TopNavbar";

export default function RootLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <html lang="es">
            <body className="bg-[#f2f1ed]">
                <TopNavbar setIsOpen={setIsOpen} />
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
                <main>
                    {children}
                </main>
            </body>
        </html>
    );
}