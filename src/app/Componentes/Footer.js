import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";




export default function Footer() {
    return (
        <footer className="bg-[#09092d] text-white py-12">
            <div className="max-w-6xl mx-auto px-4">

                {/*separador*/}
                <div className="h-px w-full bg-gray-500 mb-8"></div>

                {/* Sistema de Grid para las columnas */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">

                    {/* Redes sociales */}
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-2xl font-bold mb-4">StarFly</h3>
                        <div className="flex gap-4">
                            <FaFacebook className="text-2xl hover:text-blue-600 transition-colors duration-300" />
                            <FaInstagram className="text-2xl hover:text-pink-500 transition-colors duration-300" />
                            <FaLinkedin className="text-2xl hover:text-blue-700 transition-colors duration-300" />
                        </div>
                        <p className="mt-4 text-sm text-gray-400">&copy; Todos los derechos reservados.</p>
                    </div>

                    {/* Mi info*/}
                    <div className="flex flex-col items-center md:items-end text-sm">
                        <p>Desarrollado por Marcos Alas</p>
                        <p className="text-gray-400">Ingenieria en Desarrollo de Software</p>
                    </div>

                </div>
            </div>
        </footer>
    );
}
