import React from 'react';
import { motion } from 'framer-motion';

export const MarketingBG = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-50">
    <div className="absolute inset-0 bg-brand-blue/5"></div>
    {[...Array(15)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute border border-brand-blue/20 rounded-full"
        style={{
          width: Math.random() * 400 + 100,
          height: Math.random() * 400 + 100,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
        }}
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.1, 0.3, 0.1],
          rotate: [0, 90, 0]
        }}
        transition={{
          duration: Math.random() * 20 + 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    ))}
  </div>
);

export const VideoBG = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-white dark:bg-black transition-colors duration-500">
    {/* Cinematic Lens Flares */}
    <motion.div 
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 left-0 w-full h-[200px] bg-gradient-to-r from-transparent via-brand-purple/20 to-transparent skew-x-12 blur-3xl"
    />
    
    <div className="absolute inset-0 opacity-10 dark:opacity-30" style={{
      backgroundImage: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
      backgroundSize: '100% 4px, 6px 100%'
    }} />
  </div>
);

export const TechBG = () => (
  <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-40">
    <div className="h-full w-full bg-grid" />
    
    {/* Moving data lines */}
    {[...Array(5)].map((_, i) => (
       <motion.div 
         key={i}
         style={{ top: `${i * 20}%` }}
         animate={{ x: ['-100%', '100%'] }}
         transition={{ duration: 5 + i, repeat: Infinity, ease: 'linear', delay: i }}
         className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-green to-transparent opacity-60"
       />
    ))}

    {/* Vertical scanning line */}
    <motion.div 
      animate={{ top: ['0%', '100%'] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
      className="absolute left-0 w-full h-[100px] bg-gradient-to-b from-brand-green/10 to-transparent border-t border-brand-green/30"
    />
  </div>
);