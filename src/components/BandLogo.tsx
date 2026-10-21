import React from 'react';

interface BandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const BandLogo: React.FC<BandLogoProps> = ({ 
  className = '', 
  size = 'md'
}) => {
  const heightClass = {
    sm: 'h-8 sm:h-9',
    md: 'h-10 sm:h-12 md:h-14',
    lg: 'h-14 sm:h-16',
    xl: 'h-24 sm:h-32 md:h-40'
  }[size];

  return (
    <div className={`inline-flex items-center select-none group ${className}`}>
      {/* 
        Logotipo oficial original de Cerro Dublín (cerro-logo-original_2631baba.png)
        Tipografía original blanca ultra-condensada de alta resolución con transparencia
      */}
      <div className={`relative flex items-center justify-center ${heightClass} overflow-visible`}>
        <img
          src="/assets/aistudio/cerro-logo-original_2631baba.png"
          alt="Cerro Dublín"
          className="h-full w-auto max-w-full object-contain transition-opacity duration-200 group-hover:opacity-85 select-none"
          loading="eager"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/cerro-logo-original.png';
          }}
        />
      </div>
    </div>
  );
};

export default BandLogo;
