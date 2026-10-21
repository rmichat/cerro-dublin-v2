import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { VIDEOS } from '../data/videos';

/**
 * Sección de Videos Oficiales.
 * Animaciones progresivas con Framer Motion:
 * - El encabezado y cada tarjeta de video aparecen con un fade-in progresivo escalonado al hacer scroll.
 * - Fondo rojo desaturado (#B32B2B) y skeleton loaders integrados.
 */
export const VideosSection: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Simulación de carga inicial para transicionar suavemente desde el skeleton
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 450);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="videos" className="py-20 bg-[#B32B2B] text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado con fade-in al hacer scroll */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 pb-5 border-b-2 border-black"
        >
          <h2 className="font-akzidenz-heavy text-2xl sm:text-3xl md:text-4xl text-black tracking-tight uppercase">
            VIDEOS
          </h2>
        </motion.div>

        {/* Cuadrícula de producciones audiovisuales con aparición progresiva */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {isLoading ? (
            // Skeleton loaders de alta fidelidad para Videos
            [1, 2, 3, 4].map((n) => (
              <div
                key={`video-skeleton-${n}`}
                className="bg-black/80 border-2 border-black flex flex-col justify-between overflow-hidden shadow-2xl animate-pulse"
                aria-hidden="true"
              >
                {/* Contenedor aspecto 16:9 esqueleto */}
                <div className="relative aspect-video w-full bg-neutral-900/90 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-neutral-800/80" />
                </div>

                {/* Barra inferior esqueleto */}
                <div className="p-5 border-t border-neutral-900 bg-black flex items-center">
                  <div className="h-5 w-48 bg-neutral-800/80 rounded" />
                </div>
              </div>
            ))
          ) : (
            // Contenido oficial de videos con animación escalonada
            VIDEOS.map((video, idx) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.65,
                  delay: (idx % 2) * 0.15,
                  ease: [0.16, 1, 0.3, 1]
                }}
                className="bg-black border-2 border-black flex flex-col justify-between overflow-hidden shadow-2xl group transition-transform duration-200 hover:-translate-y-0.5"
              >
                {/* Contenedor de reproducción responsivo */}
                <div className="relative aspect-video w-full bg-neutral-950">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?rel=0&modestbranding=1&playsinline=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                  />
                </div>

                {/* Título de la pista audiovisual en la base */}
                <div className="p-5 border-t-2 border-black bg-black flex items-center justify-between">
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-akzidenz text-base sm:text-lg text-white hover:text-[#B32B2B] transition-colors uppercase inline-block cursor-pointer"
                    title={`Abrir ${video.title} en YouTube`}
                  >
                    {video.title}
                  </a>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};
