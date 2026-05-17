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
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            {/* 1. min-h-screen asegura que la página ocupe, al menos, toda la altura de la pantalla */}
            {/* 2. flex flex-col nos permite organizar elementos verticalmente */}
            <body className="bg-white min-h-screen flex flex-col">
                <TopNavbar setIsOpen={setIsOpen} />
                <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
                
                {/* 3. flex-grow hace que el contenido principal 'empuje' el footer hacia abajo */}
                <main className=" grow pt-24">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                        {children}
                    </div>
                </main>
                
                <Footer />
            </body>
        </html>
    );
}