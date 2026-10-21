import React from 'react';

interface MarqueeProps {
  text?: string;
  variant?: 'red' | 'black';
  className?: string;
}

/**
 * Marquesina animada continua (Ticker).
 * Reducida en un 30% en altura, escala tipográfica y espaciado para un perfil más estilizado y compacto.
 * Delimitada por bordes negros sólidos para enmarcar las transiciones entre secciones.
 */
export const Marquee: React.FC<MarqueeProps> = ({
  text = '7:28PM / PAUSA – YA DISPONIBLE',
  variant = 'red',
  className = ''
}) => {
  const repetitions = [1, 2, 3, 4, 5, 6];

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('discografia');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isRed = variant === 'red';

  return (
    <div
      onClick={handleClick}
      role="region"
      aria-label="Anuncio de lanzamiento"
      className={`relative w-full overflow-hidden select-none cursor-pointer py-1.5 sm:py-1.5 border-t border-b border-black transition-colors duration-200 group ${
        isRed
          ? 'bg-[#B32B2B] text-white hover:bg-[#C43737]'
          : 'bg-black text-white hover:border-[#B32B2B]'
      } ${className}`}
    >
      <div className="flex animate-marquee-infinite items-center">
        {[...repetitions, ...repetitions].map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-4 px-2.5 shrink-0 font-akzidenz-heavy text-[10px] sm:text-xs md:text-sm tracking-wider"
          >
            <span className={isRed ? 'text-black group-hover:text-white transition-colors duration-200' : 'text-white'}>
              {text}
            </span>
            <span
              className={`inline-block w-1.5 h-1.5 rotate-45 shrink-0 ${
                isRed ? 'bg-black group-hover:bg-white' : 'bg-[#B32B2B]'
              }`}
              aria-hidden="true"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
