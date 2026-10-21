import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ALBUMS } from '../data/discography';
import { ArrowUpRight, Plus, Minus, Disc } from 'lucide-react';

/**
 * Sección de Música / Discografía.
 * Formato Acordeón Editorial Industrial:
 * - Animaciones de aparición progresiva (fade-in escalonado) con Framer Motion al hacer scroll.
 * - Despliegue y repliegue 100% fluido mediante CSS Grid transitions al hacer clic sobre el título.
 * - Todos los discos inician colapsados por defecto.
 * - Skeleton loaders integrados para una carga inicial suave.
 */
export const AlbumSlider: React.FC = () => {
  const [openAlbumId, setOpenAlbumId] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  const toggleAlbum = (id: string) => {
    setOpenAlbumId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="discografia" className="py-20 bg-black border-b border-neutral-900 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado con fade-in al hacer scroll */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 pb-5 border-b border-neutral-800"
        >
          <h2 className="font-akzidenz-heavy text-3xl sm:text-4xl md:text-5xl text-white tracking-tight uppercase">
            DISCOGRAFÍA
          </h2>
        </motion.div>

        {/* Lista de lanzamientos con aparición progresiva escalonada */}
        {isLoading ? (
          // Skeleton Loader
          <div className="space-y-4 animate-pulse" aria-hidden="true">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="p-6 bg-neutral-950 border border-neutral-900 flex justify-between items-center">
                <div className="h-8 w-56 sm:w-80 bg-neutral-800 rounded" />
                <div className="h-6 w-16 bg-neutral-900 rounded" />
              </div>
            ))}
          </div>
        ) : (
          <div className="border-t border-neutral-900 divide-y divide-neutral-900">
            {ALBUMS.map((album, idx) => {
              const isOpen = openAlbumId === album.id;

              return (
                <motion.div
                  key={album.id}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ 
                    duration: 0.55, 
                    delay: idx * 0.08, 
                    ease: [0.16, 1, 0.3, 1] 
                  }}
                  className={`transition-colors duration-300 ${
                    isOpen ? 'bg-neutral-950/70' : 'bg-black hover:bg-neutral-950/40'
                  }`}
                >
                  {/* Fila del álbum (clic para desplegar/replegar fluidamente) */}
                  <button
                    onClick={() => toggleAlbum(album.id)}
                    aria-expanded={isOpen}
                    className="w-full text-left py-5 sm:py-6 px-4 sm:px-6 flex items-center justify-between group cursor-pointer focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B32B2B]"
                  >
                    {/* Título con animación cinética al hover */}
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0 pr-4">
                      {/* Indicador lineal sutil que se extiende en hover y se contrae al salir */}
                      <span
                        className="w-0 group-hover:w-3.5 h-[3px] bg-[#B32B2B] shrink-0 transition-all duration-300 ease-out hidden sm:inline-block"
                        aria-hidden="true"
                      />

                      <h3
                        className={`font-akzidenz-heavy text-xl sm:text-2xl md:text-3xl tracking-tight uppercase truncate transition-all duration-300 ease-out transform group-hover:translate-x-1.5 sm:group-hover:translate-x-2 group-hover:text-[#B32B2B] ${
                          isOpen ? 'text-white' : 'text-neutral-300'
                        }`}
                      >
                        {album.title}
                      </h3>
                    </div>

                    {/* Metadata y Control de Despliegue (+ / - con rotación suave) */}
                    <div className="flex items-center gap-3 shrink-0">
                      <span
                        className={`text-xs font-akzidenz-medium tracking-wider px-2.5 py-1 transition-colors duration-300 ${
                          isOpen
                            ? 'bg-[#B32B2B] text-white'
                            : 'bg-neutral-900 text-neutral-400 group-hover:text-neutral-200'
                        }`}
                      >
                        {album.subtitle}
                      </span>

                      <span className="text-xs font-akzidenz-medium text-neutral-400 tracking-wider hidden sm:inline-block">
                        {album.year}
                      </span>

                      <div
                        className={`w-8 h-8 flex items-center justify-center border transition-all duration-300 ease-out ${
                          isOpen
                            ? 'bg-[#B32B2B] border-[#B32B2B] text-white rotate-180'
                            : 'border-neutral-800 text-neutral-400 group-hover:border-neutral-600 group-hover:text-white rotate-0'
                        }`}
                        aria-hidden="true"
                      >
                        {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                      </div>
                    </div>
                  </button>

                  {/* Contenedor animado con CSS Grid para un despliegue/repliegue 100% fluido */}
                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                      isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div
                        className={`px-3 sm:px-6 pb-6 sm:pb-8 pt-2 border-t border-neutral-900 bg-black/40 transition-transform duration-400 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                          isOpen ? 'translate-y-0' : '-translate-y-3'
                        }`}
                      >
                        <div className="p-5 sm:p-6 md:p-7 lg:p-8 bg-neutral-950 border border-neutral-800 shadow-2xl flex flex-col md:flex-row items-center md:items-start gap-6 lg:gap-8 overflow-hidden">
                          
                          {/* Portada del álbum desplegado */}
                          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-52 md:h-52 lg:w-64 lg:h-64 shrink-0 bg-black border border-neutral-700 shadow-2xl overflow-hidden">
                            <img
                              src={album.artworkUrl}
                              alt={album.title}
                              className="w-full h-full object-cover"
                              loading="lazy"
                              decoding="async"
                            />
                          </div>

                          {/* Detalles y botones de acción */}
                          <div className="min-w-0 flex-1 w-full flex flex-col justify-between self-stretch text-left space-y-5">
                            <div className="space-y-2.5 min-w-0">
                              {/* Tipo de álbum con su fecha correspondiente al lado */}
                              <div className="flex items-center gap-2 text-xs font-akzidenz-medium text-[#B32B2B] tracking-widest uppercase">
                                <Disc className="w-3.5 h-3.5 shrink-0" />
                                <span>{album.subtitle}</span>
                                <span className="text-neutral-600">·</span>
                                <span className="text-neutral-300 font-sans tracking-normal">{album.year}</span>
                              </div>

                              <h4 className="font-akzidenz-heavy text-xl sm:text-2xl md:text-3xl text-white tracking-tight uppercase break-words">
                                {album.title}
                              </h4>

                              {/* Descripción oficial */}
                              <p className="text-xs sm:text-sm text-neutral-400 font-sans leading-relaxed break-words">
                                Disponible en todas las plataformas y en formato de compra digital en Bandcamp.
                              </p>
                            </div>

                            {/* Botones de acción directa con ancho contenido en tablet y mobile */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-3 pt-4 border-t border-neutral-900 w-full">
                              <a
                                href={album.listenUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 px-4 bg-[#B32B2B] hover:bg-[#C43737] text-white font-akzidenz text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 transition-colors duration-150 border border-[#B32B2B] cursor-pointer"
                                title={`Escuchar ${album.title} en Linktree`}
                              >
                                <span>ESCUCHAR</span>
                                <ArrowUpRight className="w-4 h-4 shrink-0" />
                              </a>

                              <a
                                href={album.buyUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 px-4 bg-white hover:bg-neutral-200 text-black font-akzidenz text-xs sm:text-sm tracking-wider flex items-center justify-center gap-2 transition-colors duration-150 border border-white cursor-pointer"
                                title={`Comprar ${album.title} en Bandcamp`}
                              >
                                <span>COMPRAR</span>
                                <ArrowUpRight className="w-4 h-4 shrink-0" />
                              </a>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
