import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden bg-white dark:bg-black text-slate-900 dark:text-white transition-colors duration-500">
      
      {/* Intense Background Mesh Gradient */}
      <div className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-60">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(0,122,255,0.05),transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_50%,_rgba(0,122,255,0.1),transparent_60%)]"></div>
        <div className="absolute top-[20%] -left-[10%] w-[80vw] h-[80vw] bg-brand-blue/10 rounded-full blur-[150px] animate-pulse"></div>
        <div className="absolute bottom-[10%] -right-[10%] w-[80vw] h-[80vw] bg-brand-green/10 rounded-full blur-[150px] animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 z-10 relative flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mb-12 flex justify-center"
          >
             <div className="px-8 py-3 rounded-full border border-slate-200 dark:border-white/10 bg-white/50 dark:bg-white/5 backdrop-blur-md text-brand-blue font-bold tracking-[0.5em] uppercase text-xs shadow-[0_0_20px_rgba(0,122,255,0.1)]">
                Brief Digital
             </div>
          </motion.div>
          
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-tight mb-8 tracking-tighter uppercase font-display">
            Resumen<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-purple-500 to-brand-orange">Ejecutivo</span>
          </h1>

          <p className="text-2xl md:text-4xl max-w-5xl mx-auto font-light text-slate-500 dark:text-slate-400 leading-tight mb-20 tracking-tight">
            Estrategia de <span className="text-slate-900 dark:text-white font-bold drop-shadow-sm dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">Marketing</span> + Ingeniería de <span className="text-slate-900 dark:text-white font-bold drop-shadow-sm dark:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">IA Generativa</span>.
          </p>

          <div className="flex justify-center gap-8">
            <div className="flex flex-col items-center gap-4 text-brand-blue">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-70">Inicializar</span>
                <div className="h-16 w-[2px] bg-gradient-to-b from-brand-blue to-transparent animate-pulse"></div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-4 text-slate-400 dark:text-slate-500"
      >
        <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Desliza para descubrir</span>
        <ChevronDown size={32} className="animate-bounce text-slate-900 dark:text-white" />
      </motion.div>
    </section>
  );
};

export default Hero;