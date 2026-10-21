import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ShowsSection } from './components/ShowsSection';
import { AlbumSlider } from './components/AlbumSlider';
import { VideosSection } from './components/VideosSection';
import { Footer } from './components/Footer';

/**
 * Cerro Dublín — Aplicación web oficial.
 * Estructura de secciones:
 * 1. Hero: Reproductor interactivo del álbum completo (7:28PM / PAUSA) a pantalla completa (100svh).
 * 2. Shows: Presentaciones en vivo con animaciones progresivas de Framer Motion.
 * 3. Música / Discografía: Catálogo interactivo con animaciones progresivas escalonadas de Framer Motion.
 * 4. Videos: Producciones oficiales de videoclips con animaciones progresivas de Framer Motion.
 * 5. Footer: Redes oficiales y copyright.
 */
export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-[#B32B2B] selection:text-white flex flex-col font-sans relative">
      {/* Barra de navegación: Superpuesta y transparente en Hero, fija al hacer scroll */}
      <Navbar />

      {/* Contenedor principal */}
      <main className="flex-1">
        {/* 1. Hero con reproductor interactivo a pantalla completa (100svh) */}
        <Hero />

        {/* 2. Sección Shows */}
        <ShowsSection />

        {/* 3. Sección Música / Discografía */}
        <AlbumSlider />

        {/* 4. Sección Videos */}
        <VideosSection />
      </main>

      {/* Pie de página oficial */}
      <Footer />
    </div>
  );
}
