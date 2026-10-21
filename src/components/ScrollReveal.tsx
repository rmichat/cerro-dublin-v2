import React from 'react';
import { motion } from 'motion/react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Componente envoltorio de animación de entrada gradual (Scroll Reveal).
 * Ejecuta una transición suave de opacidad y desplazamiento vertical
 * conforme los elementos ingresan en el campo visual del usuario.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '',
  delay = 0 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ 
        duration: 0.7, 
        delay, 
        ease: [0.25, 0.1, 0.25, 1.0] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
