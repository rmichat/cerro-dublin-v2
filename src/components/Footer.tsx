import React from 'react';
import {
  SpotifyIcon,
  AppleMusicIcon,
  BandcampIcon,
  YoutubeIcon,
  InstagramIcon,
  TikTokIcon
} from './SocialIcons';
import { ArrowUp } from 'lucide-react';

/**
 * Pie de página oficial.
 * - Enlaces oficiales a plataformas de streaming.
 * - Botón de retorno rápido hacia arriba.
 * - Leyenda de copyright: "© Cerro Dublín – 2026".
 */
export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { name: 'Spotify', url: 'https://open.spotify.com/artist/cerrodublin', icon: SpotifyIcon, hoverColor: 'hover:text-[#1DB954]' },
    { name: 'Apple Music', url: 'https://music.apple.com/artist/cerro-dublin', icon: AppleMusicIcon, hoverColor: 'hover:text-[#FA243C]' },
    { name: 'Bandcamp', url: 'https://cerrodublin.bandcamp.com', icon: BandcampIcon, hoverColor: 'hover:text-[#629AA9]' },
    { name: 'YouTube', url: 'https://youtube.com/@cerrodublin', icon: YoutubeIcon, hoverColor: 'hover:text-[#FF0000]' },
    { name: 'Instagram', url: 'https://instagram.com/cerrodublin', icon: InstagramIcon, hoverColor: 'hover:text-[#E4405F]' },
    { name: 'TikTok', url: 'https://tiktok.com/@cerrodublin', icon: TikTokIcon, hoverColor: 'hover:text-white' }
  ];

  return (
    <footer className="bg-black text-white relative border-t border-neutral-900">
      {/* Contenido principal del pie de página */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col items-center justify-center gap-8">
        
        {/* Redes y plataformas oficiales de Cerro Dublín */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          {socialLinks.map((item) => {
            const IconComponent = item.icon;
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-neutral-400 transition-transform duration-150 hover:scale-110 ${item.hoverColor} p-1`}
                title={item.name}
                aria-label={item.name}
              >
                <IconComponent className="w-6 h-6 fill-current" />
              </a>
            );
          })}
        </div>

        {/* Retorno fluido a la parte superior */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs font-akzidenz text-neutral-400 hover:text-[#B32B2B] transition-colors group p-2 cursor-pointer"
          aria-label="Volver arriba"
        >
          <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
          <span>VOLVER ARRIBA</span>
        </button>

        {/* Leyenda de copyright */}
        <div className="text-[11px] font-akzidenz-medium text-neutral-400 tracking-widest uppercase">
          © Cerro Dublín – 2026
        </div>
      </div>
    </footer>
  );
};
