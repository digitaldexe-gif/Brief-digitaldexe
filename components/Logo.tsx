import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center select-none">
      {/* 
        LOGOTIPO:
        - "dark:hidden" muestra logo-black.png en modo claro (fondo blanco).
        - "hidden dark:block" muestra logo-white.png en modo oscuro (fondo negro).
        Asegúrate de tener estos archivos en tu carpeta public/.
      */}
      <div className="relative h-12 md:h-16 w-auto">
        {/* Versión para fondo claro (letras oscuras) */}
        <img 
          src="/logo-black.png" 
          alt="DigitalDexe Logo" 
          className="h-full w-auto object-contain dark:hidden" 
        />
        
        {/* Versión para fondo oscuro (letras blancas) */}
        <img 
          src="/logo-white.png" 
          alt="DigitalDexe Logo" 
          className="h-full w-auto object-contain hidden dark:block" 
        />
      </div>
    </div>
  );
};

export default Logo;