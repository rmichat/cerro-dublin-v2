import React, { useState, useEffect } from 'react';
import { BandLogo } from './BandLogo';
import { Menu, X } from 'lucide-react';
import {
  SpotifyIcon,
  AppleMusicIcon,
  BandcampIcon,
  YoutubeIcon,
  InstagramIcon,
  TikTokIcon
} from './SocialIcons';

/**
 * Barra de navegación principal.
 * - En la parte superior: Transparente y superpuesta sobre el Hero, respetando su contenedor.
 * - Al hacer scroll: Aparece fija con fondo oscuro y efecto blur para máxima legibilidad.
 * - Tipografías e iconos planos y nítidos sin efectos de drop shadow.
 * - Scroll spy de alta precisión: la línea roja solo subraya la sección visible y se desactiva
 *   por completo al volver al inicio/hero.
 */
export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 40);

      // Si nos encontramos en el Hero o en el Full Album (antes de la sección shows),
      // no debe haber ninguna sección activa ni línea roja subrayando.
      const showsEl = document.getElementById('shows');
      if (showsEl) {
        const showsTop = showsEl.offsetTop;
        if (scrollY + 140 < showsTop) {
          setActiveSection('');
          return;
        }
      }

      // Evaluar las secciones activas con respecto a la línea visual de lectura del viewport (150px)
      const sections = ['videos', 'discografia', 'shows'];
      let active = '';

      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          // La sección está activa si su parte superior ha alcanzado el área de lectura
          // y su parte inferior aún no ha salido por arriba del viewport
          if (rect.top <= 150 && rect.bottom > 150) {
            active = id;
            break;
          }
        }
      }

      setActiveSection(active);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Comprobación inicial al montar
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Shows', href: '#shows', id: 'shows' },
    { name: 'Música', href: '#discografia', id: 'discografia' },
    { name: 'Videos', href: '#videos', id: 'videos' },
  ];

  const socialLinks = [
    { name: 'Spotify', url: 'https://open.spotify.com/artist/cerrodublin', icon: SpotifyIcon, hover: 'hover:text-[#1DB954]' },
    { name: 'Apple Music', url: 'https://music.apple.com/artist/cerro-dublin', icon: AppleMusicIcon, hover: 'hover:text-[#FA243C]' },
    { name: 'Bandcamp', url: 'https://cerrodublin.bandcamp.com', icon: BandcampIcon, hover: 'hover:text-[#629AA9]' },
    { name: 'YouTube', url: 'https://youtube.com/@cerrodublin', icon: YoutubeIcon, hover: 'hover:text-[#FF0000]' },
    { name: 'Instagram', url: 'https://instagram.com/cerrodublin', icon: InstagramIcon, hover: 'hover:text-[#E4405F]' },
    { name: 'TikTok', url: 'https://tiktok.com/@cerrodublin', icon: TikTokIcon, hover: 'hover:text-white' }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    // Limpiar inmediatamente el indicador subrayado
    setActiveSection('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-md border-b border-neutral-800 py-2.5 shadow-2xl'
            : 'bg-transparent border-b border-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 items-center">
            
            {/* Izquierda: Accesos directos a secciones (Shows, Música, Videos) */}
            <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-xs font-akzidenz tracking-wider justify-start">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <a
                    key={link.id}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative py-1.5 transition-colors duration-150 whitespace-nowrap shrink-0 hover:text-white ${
                      isActive ? 'text-white font-bold' : 'text-neutral-200 hover:text-white'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#B32B2B] transition-all duration-200" />
                    )}
                  </a>
                );
              })}
            </nav>

            {/* Centro: Logotipo oficial de Cerro Dublín (clic para volver arriba y limpiar subrayado) */}
            <div className="flex items-center justify-start md:justify-center">
              <a
                href="#inicio"
                onClick={handleLogoClick}
                className="flex items-center justify-center group focus-visible:outline-none cursor-pointer"
                aria-label="Cerro Dublín - Inicio"
              >
                <BandLogo size="md" />
              </a>
            </div>

            {/* Derecha: Enlaces a plataformas oficiales de la banda */}
            <div className="hidden md:flex items-center justify-end gap-3.5 lg:gap-4">
              {socialLinks.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-neutral-200 ${item.hover} transition-all duration-150 hover:scale-110 p-0.5`}
                    title={item.name}
                    aria-label={item.name}
                  >
                    <IconComponent className="w-4 h-4 fill-current" />
                  </a>
                );
              })}
            </div>

            {/* Botón de menú para dispositivos móviles (< md) */}
            <div className="md:hidden flex items-center justify-end">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-white hover:text-[#B32B2B] cursor-pointer"
                aria-label="Abrir menú"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menú desplegable para vista móvil */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black md:hidden pt-24 px-6 flex flex-col justify-between pb-12 border-b border-neutral-800">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-3xl font-akzidenz-heavy transition-colors py-2 border-b border-neutral-900 ${
                  activeSection === link.id ? 'text-[#B32B2B]' : 'text-white hover:text-[#B32B2B]'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-6 border-t border-neutral-900">
            <div className="flex flex-nowrap items-center justify-center gap-3 sm:gap-4 max-w-full">
              {socialLinks.map((item) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-neutral-300 ${item.hover} transition-all duration-150 hover:scale-110 p-1.5 shrink-0 cursor-pointer`}
                    title={item.name}
                    aria-label={item.name}
                  >
                    <IconComponent className="w-5 h-5 fill-current" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
