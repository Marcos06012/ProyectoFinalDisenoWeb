"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Plane, Building2, Car, LayoutGrid, ArrowLeft, Info } from "lucide-react";
import Link from "next/link";

// 1. ESTADO INICIAL
const FAVORITOS_INICIAL = [
    { id: "v1", tipo: "vuelo", titulo: "SAL → MAD", sub: "San Salvador — Madrid", detalle: "23 Jun · 10h 40m · Directo", precio: "$620", unidad: "/persona" },
    { id: "v2", tipo: "vuelo", titulo: "SAL → CUN", sub: "San Salvador — Cancún", detalle: "15 Jul · 2h 15m · Directo", precio: "$180", unidad: "/persona" },
    { id: "h1", tipo: "hotel", titulo: "Hotel Barceló", sub: "Madrid, España", detalle: "Doble Superior · Desayuno incl.", precio: "$130", unidad: "/noche" },
    { id: "h2", tipo: "hotel", titulo: "Grand Velas Riviera", sub: "Cancún, México", detalle: "Suite Frente al Mar · Todo incluido", precio: "$420", unidad: "/noche" },
    { id: "c1", tipo: "coche", titulo: "Tesla Model 3", sub: "Categoría Eléctrico", detalle: "Automático · 5 personas · A/C", precio: "$85", unidad: "/día" },
    { id: "c2", tipo: "coche", titulo: "Toyota RAV4 4x4", sub: "Categoría SUV", detalle: "Automático · 7 personas · A/C", precio: "$62", unidad: "/día" },
];

// 2. CONFIGURACIÓN DE COLORES E ÍCONOS POR TIPO
const CONFIG_CATEGORIAS = {
    vuelo: { bg: "#e8edf5", color: "#185FA5", label: "Vuelo", Icon: Plane },
    hotel: { bg: "#f5ede8", color: "#993C1D", label: "Hotel", Icon: Building2 },
    coche: { bg: "#eaf0e8", color: "#3B6D11", label: "Coche", Icon: Car },
};

export default function CosasFavoritas() {
    // Estados principales
    const [listaFavoritos, setListaFavoritos] = useState(FAVORITOS_INICIAL);
    const [tabActiva, setTabActiva] = useState("todos");

    // Funciones de filtrado para las estadísticas del Hero y las pestañas
    const vuelos = listaFavoritos.filter(item => item.tipo === "vuelo");
    const hoteles = listaFavoritos.filter(item => item.tipo === "hotel");
    const coches = listaFavoritos.filter(item => item.tipo === "coche");

    // Filtrar los elementos que se van a mostrar en pantalla según la pestaña seleccionada
    const itemsFiltrados = listaFavoritos.filter(item => {
        if (tabActiva === "todos") return true;
        if (tabActiva === "vuelos") return item.tipo === "vuelo";
        if (tabActiva === "hoteles") return item.tipo === "hotel";
        if (tabActiva === "coches") return item.tipo === "coche";
        return false;
    });



    return (
        <main className="min-h-screen bg-gray-50 text-gray-950 antialiased">
            
            {/* HERO PRINCIPAL */}
            <div className="bg-[#09092d] text-white px-6 py-12 sm:py-16 relative overflow-hidden">
                <div className="max-w-2xl mx-auto relative z-10">
                    
                    {/* Botón Volver */}
                    <Link href="/" className="flex items-center gap-2 text-gray-400 hover:text-white text-xs font-medium mb-6 transition-colors">
                        <ArrowLeft size={14} /> Volver al buscador
                    </Link>

                    {/* Título y subtítulo */}
                    <h1 className="text-3xl sm:text-4xl font-extrabold flex items-center gap-3 mb-2 tracking-tight">
                        <Heart size={32} fill="#ff6b6b" className="text-[#ff6b6b]" />
                        Mis Favoritos
                    </h1>
                    <p className="text-gray-400 text-sm sm:text-base mb-8 font-medium">
                        {listaFavoritos.length > 0 
                            ? `Tienes ${listaFavoritos.length} elementos guardados listos para tu próximo viaje.`
                            : "No tienes elementos guardados en tu cuenta."}
                    </p>

                    {/* Panel de Estadísticas */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-md">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center sm:text-left">
                            <p className="text-xl sm:text-2xl font-bold">{vuelos.length}</p>
                            <p className="text-gray-400 text-[10px] sm:text-xs uppercase font-semibold tracking-wider">Vuelos</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center sm:text-left">
                            <p className="text-xl sm:text-2xl font-bold">{hoteles.length}</p>
                            <p className="text-gray-400 text-[10px] sm:text-xs uppercase font-semibold tracking-wider">Hoteles</p>
                        </div>
                        <div className="bg-white/5 border border-white/10 rounded-xl p-3 text-center sm:text-left">
                            <p className="text-xl sm:text-2xl font-bold">{coches.length}</p>
                            <p className="text-gray-400 text-[10px] sm:text-xs uppercase font-semibold tracking-wider">Coches</p>
                        </div>
                    </div>

                </div>
            </div>

            {/* BARRA DE PESTAÑAS */}
            <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
                <div className="max-w-2xl mx-auto flex overflow-x-auto px-4 gap-2">
                    {[
                        { id: "todos", label: "Todos", Icon: LayoutGrid },
                        { id: "vuelos", label: "Vuelos", Icon: Plane },
                        { id: "hoteles", label: "Hoteles", Icon: Building2 },
                        { id: "coches", label: "Coches", Icon: Car },
                    ].map(tab => {
                        const activa = tabActiva === tab.id;
                        return (
                            <button
                                key={tab.id}
                                onClick={() => setTabActiva(tab.id)}
                                className={`flex items-center gap-2 px-4 py-4 text-xs sm:text-sm font-semibold whitespace-nowrap border-b-2 transition-all ${
                                    activa ? "border-gray-900 text-gray-900" : "border-transparent text-gray-400 hover:text-gray-600"
                                }`}
                            >
                                <tab.Icon size={14} />
                                {tab.label}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* SECCIÓN DEL CONTENIDO / TARJETAS */}
            <div className="max-w-2xl mx-auto px-4 py-8">
                
                
                    <div className="flex flex-col gap-3">
                        <AnimatePresence>
                            {itemsFiltrados.map(item => {
                                // Obtenemos el ícono y color correspondiente desde el objeto CONFIG
                                const estaticos = CONFIG_CATEGORIAS[item.tipo];
                                
                                return (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex rounded-xl overflow-hidden border border-gray-200 bg-white hover:shadow-md transition-shadow duration-200"
                                    >
                                        {/* Bloque Izquierdo: Icono con su color de fondo */}
                                        <div 
                                            className="w-20 min-w-20 flex items-center justify-center" 
                                            style={{ backgroundColor: estaticos.bg }}
                                        >
                                            <estaticos.Icon size={24} style={{ color: estaticos.color }} />
                                        </div>

                                        {/* Bloque Derecho: Información y Botones */}
                                        <div className="flex-1 p-3 flex flex-col gap-1">
                                            
                                            {/* Fila Superior: Títulos*/}
                                            <div className="flex justify-between items-start gap-2">
                                                <div>
                                                    <h3 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
                                                        {item.titulo}
                                                    </h3>
                                                    <p className="text-xs text-gray-400 mt-0.5">{item.sub}</p>
                                                </div>
                                                <span 
                                                    className="text-[10px] font-bold px-2 py-0.5 rounded-full"
                                                    style={{ backgroundColor: estaticos.bg, color: estaticos.color }}
                                                >
                                                    {estaticos.label}
                                                </span>
                                            </div>

                                            {/* Detalles intermedios */}
                                            <div className="flex items-center gap-1 text-xs text-gray-500 mt-1">
                                                <Info size={12} className="text-gray-400 shrink-0" />
                                                <span>{item.detalle}</span>
                                            </div>

                                            {/* Fila Inferior: Precios y Acciones */}
                                            <div className="flex items-center justify-between mt-3 pt-2 border-t border-gray-100">
                                                <div className="flex items-baseline gap-0.5">
                                                    <span className="text-sm sm:text-base font-bold text-gray-900">{item.precio}</span>
                                                    <span className="text-xs text-gray-400">{item.unidad}</span>
                                                </div>
                                                
                                                <div className="flex items-center gap-2">
                                                    {/* Botón Eliminar de Favoritos */}
                                                    <button
                                                        className="text-red-400 hover:text-red-500 p-1 transition-colors"
                                                        title="Quitar"
                                                    >
                                                        <Heart size={16} fill="currentColor" />
                                                    </button>
                                                    {/* Botón Reservar */}
                                                    <button className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold px-3 py-1.5 rounded-lg transition-colors">
                                                        Reservar
                                                    </button>
                                                </div>
                                            </div>

                                        </div>
                                    </motion.div>
                                );
                            })}
                        </AnimatePresence>
                    </div>
                

            </div>
        </main>
    );
}