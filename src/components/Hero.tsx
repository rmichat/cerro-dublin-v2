import React from 'react';
import { Play } from 'lucide-react';

/**
 * Sección de cabecera principal (Hero).
 * - Ocupa el 100% del viewport en mobile y desktop (100dvh).
 * - Fondo oficial con el arte del álbum en máxima resolución (object-cover).
 * - Título del disco reducido y discreto.
 * - Botón "REPRODUCIR" ubicado en la parte inferior izquierda que redirige directamente
 *   al álbum completo en YouTube en una nueva pestaña.
 */
export const Hero: React.FC = () => {
  return (
    <section
      id="inicio"
      className="relative w-full h-[100dvh] min-h-[100dvh] bg-black text-white select-none overflow-hidden flex flex-col justify-end"
    >
      {/* 
        Thumbnail oficial en cobertura completa (object-cover):
        Llena toda la altura y anchura del viewport en mobile y desktop sin franjas negras.
      */}
      <img
        src="/assets/aistudio/yt-full-album-maxres.jpg"
        alt="Cerro Dublín - 7:28PM / PAUSA (Full Album)"
        className="absolute inset-0 w-full h-full object-cover object-center select-none"
        loading="eager"
        onError={(e) => {
          (e.target as HTMLImageElement).src = 'https://img.youtube.com/vi/O3iLOASqlNY/maxresdefault.jpg';
        }}
      />

      {/* Sutil degradé inferior para garantizar legibilidad de la tipografía */}
      <div className="absolute inset-x-0 bottom-0 h-40 sm:h-48 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none" />

      {/* 
        Contenedor inferior izquierdo:
        - Título y subtítulo en escala tipográfica contenida.
        - Botón compacto de Reproducir que redirige a YouTube.
      */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-8 md:pb-10 flex flex-col items-start text-left">
        <div className="max-w-md">
          {/* Subtítulo discreto */}
          <span className="font-akzidenz-medium text-[10px] sm:text-xs text-neutral-300 uppercase block mb-1 tracking-wider">
            Ya disponible
          </span>

          {/* Título de álbum reducido */}
          <h1 className="font-akzidenz-heavy text-base sm:text-lg md:text-xl text-white tracking-wider uppercase mb-3">
            7:28PM / PAUSA
          </h1>

          {/* Botón compacto de Reproducir que redirige a YouTube */}
          <a
            href="https://youtu.be/O3iLOASqlNY"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 sm:px-5 py-2 bg-[#B32B2B] hover:bg-[#C43737] text-white font-akzidenz text-[11px] sm:text-xs tracking-widest uppercase transition-all duration-150 border-2 border-black hover:scale-105 active:scale-95 cursor-pointer shadow-lg inline-flex items-center gap-2"
            title="Escuchar 7:28PM / PAUSA en YouTube"
          >
            <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
            <span>REPRODUCIR</span>
          </a>
        </div>
      </div>
    </section>
  );
};
