import React from 'react';
import { motion } from 'framer-motion';
import { UPCOMING_SHOW } from '../data/shows';
import { MapPin, Ticket, ExternalLink } from 'lucide-react';

/**
 * Sección de presentaciones en vivo.
 * Animaciones progresivas con Framer Motion:
 * - Encabezado y ficha de evento aparecen con transición elegante de fade-in y desplazamiento suave al hacer scroll.
 * - Fondo rojo desaturado (#B32B2B) sobrio y cinematográfico.
 */
export const ShowsSection: React.FC = () => {
  return (
    <section id="shows" className="py-20 bg-[#B32B2B] text-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado con fade-in al hacer scroll */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-10 pb-5 border-b-2 border-black"
        >
          <h2 className="font-akzidenz-heavy text-2xl sm:text-3xl md:text-4xl text-black tracking-tight uppercase">
            SHOWS
          </h2>
        </motion.div>

        {/* Ficha de presentación en caja negra con fade-in y delay progresivo */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="bg-black border-2 border-black p-8 sm:p-12 shadow-2xl transition-transform duration-200 hover:-translate-y-0.5"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            
            {/* Información del evento y recinto */}
            <div className="space-y-4">
              <span className="px-3 py-1 bg-[#B32B2B] text-white font-akzidenz text-[11px] tracking-widest font-bold inline-block">
                PRÓXIMA FECHA
              </span>

              <h3 className="font-akzidenz-heavy text-2xl sm:text-3xl text-white tracking-tight uppercase">
                {UPCOMING_SHOW.festival}
              </h3>

              <div className="flex items-center gap-2 text-sm sm:text-base text-neutral-300">
                <MapPin className="w-4 h-4 text-[#B32B2B] shrink-0" />
                <span>{UPCOMING_SHOW.venue}</span>
                <span className="text-neutral-600">/</span>
                <span className="text-neutral-400">{UPCOMING_SHOW.city}</span>
              </div>
            </div>

            {/* Acceso a venta de entradas */}
            <div className="shrink-0">
              <a
                href={UPCOMING_SHOW.ticketUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 bg-[#B32B2B] hover:bg-[#C43737] text-white font-akzidenz text-xs sm:text-sm tracking-wider flex items-center justify-center gap-3 transition-colors duration-150 border border-[#B32B2B] group cursor-pointer"
              >
                <Ticket className="w-4 h-4" />
                <span>COMPRAR ENTRADAS</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
