"use client";
import "./globals.css";
import { useState } from "react";
import Sidebar from "./Componentes/Sidebar";
import TopNavbar from "./Componentes/TopNavbar";
import Footer from "./Componentes/Footer";

export default function RootLayout({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <html lang="es">
            {/* 1. min-h-screen asegura que la página ocupe, al menos, toda la altura de la pantalla */}
            {/* 2. flex flex-col nos permite organizar elementos verticalmente */}
            <body className="bg-white min-h-screen flex flex-col">
                <TopNavbar setIsOpen={setIsOpen} />
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
                
                {/* 3. flex-grow hace que el contenido principal 'empuje' el footer hacia abajo */}
                <main className=" grow">
                    {children}
                </main>
                
                <Footer />
            </body>
        </html>
    );
}