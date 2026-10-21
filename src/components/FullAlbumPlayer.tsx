import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

/**
 * Sección de Reproducción Full Album (7:28PM / PAUSA).
 * Ocupa el 100% del viewport (100svh) debajo de la marquesina.
 * - Artwork original en máxima calidad HD sin filtros oscurecedores ni capas superpuestas.
 * - Botón pequeño, sin recuadro, ubicado en la esquina superior derecha para apreciar el arte completo.
 * - Al hacer clic, se abre el reproductor de YouTube y en la misma esquina superior derecha aparece el botón de salir.
 */
export const FullAlbumPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="full-album"
      className="relative w-full h-[100svh] min-h-[100svh] max-h-[100svh] bg-black text-white overflow-hidden select-none border-b-2 border-black flex items-center justify-center"
    >
      {isPlaying ? (
        /* Reproductor de YouTube a pantalla completa */
        <div className="absolute inset-0 w-full h-full bg-black z-20">
          <iframe
            src="https://www.youtube-nocookie.com/embed/O3iLOASqlNY?autoplay=1&controls=1&rel=0&modestbranding=1&playsinline=1"
            title="Cerro Dublín - 7:28PM / PAUSA (Full Album)"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />

          {/* Botón de salir en la esquina superior derecha, sin recuadro pesado */}
          <button
            onClick={() => setIsPlaying(false)}
            aria-label="Salir del reproductor"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 flex items-center gap-2 text-white hover:text-[#B32B2B] transition-all duration-200 cursor-pointer group bg-black/70 sm:bg-transparent px-2.5 py-1.5 sm:p-0 backdrop-blur-sm sm:backdrop-blur-none"
            title="Salir del reproductor"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:rotate-90 duration-200" />
            <span className="font-akzidenz text-[11px] sm:text-xs tracking-widest uppercase">
              SALIR
            </span>
          </button>
        </div>
      ) : (
        /* Vista de portada en su máxima resolución sin recortes ni oscurecimientos */
        <div className="relative w-full h-full bg-black flex items-center justify-center">
          {/* 
            Thumbnail original en máxima definición (1280x720 HD):
            Sin filtros, sin blur y sin capas oscuras para apreciar al 100% el arte gráfico.
          */}
          <img
            src="/assets/aistudio/yt-full-album-maxres.jpg"
            alt="Cerro Dublín - 7:28PM / PAUSA (Full Album)"
            className="w-full h-full object-contain md:object-cover object-center select-none"
            loading="lazy"
            decoding="async"
            onError={(e) => {
              (e.target as HTMLImageElement).src = 'https://img.youtube.com/vi/O3iLOASqlNY/maxresdefault.jpg';
            }}
          />

          {/* 
            Botón de Reproducir discreto y sin recuadrar en la esquina superior derecha,
            donde también se ubica el botón de salir.
          */}
          <button
            onClick={() => setIsPlaying(true)}
            aria-label="Reproducir álbum completo"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 z-30 flex items-center gap-2 text-white hover:text-[#B32B2B] transition-all duration-200 cursor-pointer group bg-black/70 sm:bg-transparent px-2.5 py-1.5 sm:p-0 backdrop-blur-sm sm:backdrop-blur-none"
            title="Reproducir álbum completo"
          >
            <Play className="w-4 h-4 sm:w-5 sm:h-5 fill-current transition-transform group-hover:scale-115" />
            <span className="font-akzidenz text-[11px] sm:text-xs tracking-widest uppercase">
              REPRODUCIR
            </span>
          </button>
        </div>
      )}
    </section>
  );
};
