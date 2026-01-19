import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { LucideIcon, ArrowRight, CheckCircle, Zap } from 'lucide-react';

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  color?: string;
  accent?: string;
}

interface HorizontalSectionProps {
  id: string;
  title: string;
  description: string;
  slides: Slide[];
  bgComponent?: React.ReactNode;
}

const HorizontalSection: React.FC<HorizontalSectionProps> = ({ 
  id, 
  title, 
  description, 
  slides,
  bgComponent
}) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const totalScreens = slides.length + 1;
  const containerHeight = `${totalScreens * 100}vh`;

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(totalScreens - 1) * 100}vw`]);

  // Color map for ripples
  const getColor = (color: string | undefined) => {
    const map: Record<string, string> = {
      blue: '#007AFF',
      green: '#34C759',
      yellow: '#FFD60A',
      orange: '#FF9500',
      red: '#FF3B30',
      purple: '#AF52DE',
      teal: '#30B0C7',
      indigo: '#5856D6',
      pink: '#FF2D55',
    };
    return map[color || 'blue'] || '#007AFF';
  };

  return (
    <section ref={targetRef} id={id} style={{ height: containerHeight }} className="relative w-full">
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-white dark:bg-black flex items-center transition-colors duration-500">
        {bgComponent}
        
        <motion.div 
            style={{ x }} 
            className="flex h-full"
        >
          {/* 1. Intro Screen */}
          <div className="relative h-screen w-screen flex-shrink-0 flex items-center justify-center p-8 md:p-24 z-10 border-r border-slate-100 dark:border-white/5 bg-gradient-to-r from-white/90 dark:from-black/80 to-transparent backdrop-blur-sm">
             <div className="max-w-6xl text-center md:text-left relative">
                <div className="absolute -top-40 -left-20 text-[20rem] font-black text-slate-100 dark:text-white/5 select-none font-display pointer-events-none">
                    {id === 'seo' ? '01' : id === 'ai' ? '02' : '03'}
                </div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="relative z-10"
                >
                    <span className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-brand-blue/30 bg-brand-blue/10 text-brand-blue font-display text-base tracking-[0.3em] font-bold mb-12 uppercase animate-pulse">
                        <span className="w-2 h-2 rounded-full bg-brand-blue"></span>
                        Protocolo DigitalDexe
                    </span>
                    <h2 className="text-[12vw] md:text-[8rem] font-black text-slate-900 dark:text-white mb-8 leading-[0.8] tracking-tighter uppercase font-display dark:text-shadow-lg">
                        {title}
                    </h2>
                    <p className="text-2xl md:text-4xl text-slate-600 dark:text-slate-300 leading-relaxed font-light tracking-wide max-w-4xl border-l-4 border-brand-blue pl-10">
                        {description}
                    </p>
                    <div className="mt-20 flex items-center gap-6 text-slate-400 dark:text-white/50 group cursor-default">
                        <span className="text-sm font-bold tracking-[0.4em] uppercase">Desliza para acceder</span>
                        <div className="w-20 h-px bg-slate-300 dark:bg-white/20 group-hover:w-32 transition-all"></div>
                        <ArrowRight className="group-hover:translate-x-4 transition-transform text-brand-blue" />
                    </div>
                </motion.div>
             </div>
          </div>

          {/* 2...N Detail Slides */}
          {slides.map((slide, index) => {
            const accentColor = getColor(slide.accent);
            
            return (
            <div 
              key={slide.id}
              className="relative h-screen w-screen flex-shrink-0 flex items-center justify-center p-6 md:p-20 z-10 border-r border-slate-100 dark:border-white/5 bg-white/40 dark:bg-black/20 backdrop-blur-sm"
            >
              <div className="w-full max-w-[95rem] grid grid-cols-1 md:grid-cols-2 gap-32 items-center">
                
                {/* Visual Side (The Icon & Ripples) */}
                <div className="relative order-2 md:order-1 flex justify-center items-center h-[500px]">
                   
                   {/* Center Glow - Adjusted for subtlety */}
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-full blur-[60px] opacity-30 dark:opacity-60" style={{ backgroundColor: accentColor }}></div>

                   {/* Ripples - Smaller and more subtle */}
                   <div 
                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full border opacity-30 animate-ripple"
                     style={{ borderColor: accentColor }}
                   ></div>
                   <div 
                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full border opacity-30 animate-ripple"
                     style={{ borderColor: accentColor, animationDelay: '1.5s' }}
                   ></div>
                   <div 
                     className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] rounded-full border opacity-30 animate-ripple"
                     style={{ borderColor: accentColor, animationDelay: '3s' }}
                   ></div>

                   {/* Main Icon */}
                   <div className="relative z-20 transition-transform duration-500 hover:scale-105">
                        <slide.icon 
                            size={160} 
                            color={accentColor}
                            className="relative z-10 drop-shadow-[0_0_10px_rgba(0,0,0,0.1)] dark:drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]" 
                            strokeWidth={1}
                        />
                   </div>

                   {/* Tags */}
                   <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex flex-wrap gap-3 justify-center w-full">
                      {slide.tags.map(tag => (
                          <span key={tag} className="flex items-center gap-2 px-4 py-2 bg-slate-100 dark:bg-white/5 rounded-full text-[10px] font-bold text-slate-700 dark:text-white uppercase tracking-[0.2em] border border-slate-200 dark:border-white/10 hover:bg-slate-200 dark:hover:bg-white/10 transition-all cursor-default shadow-sm dark:shadow-none">
                              <Zap size={10} color={accentColor} />
                              {tag}
                          </span>
                      ))}
                   </div>
                </div>

                {/* Content Side */}
                <div className="order-1 md:order-2">
                    <div className="flex items-center gap-6 mb-12">
                        <span className="text-7xl font-display font-black text-slate-100 dark:text-white/5 stroke-text select-none">0{index + 1}</span>
                        <div className="h-px w-24" style={{ backgroundColor: accentColor }}></div>
                        <span className="font-display text-sm tracking-widest uppercase font-bold" style={{ color: accentColor }}>Sistema Activo</span>
                    </div>
                    
                    <h3 className="text-5xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 uppercase tracking-tight font-display leading-none">
                        {slide.title}
                    </h3>
                    <h4 className="text-2xl font-bold mb-10 uppercase tracking-[0.25em] font-display opacity-90" style={{ color: accentColor }}>
                        {slide.subtitle}
                    </h4>
                    
                    <div className="space-y-12">
                        <p className="text-2xl md:text-3xl text-slate-600 dark:text-slate-300 leading-relaxed font-light tracking-wide">
                            {slide.description}
                        </p>
                        
                        <div className="flex items-center gap-4 text-slate-700 dark:text-white font-bold text-lg tracking-widest bg-slate-100 dark:bg-white/5 p-6 rounded-2xl border border-slate-200 dark:border-white/5 w-fit hover:border-slate-300 dark:hover:border-white/20 transition-colors shadow-sm dark:shadow-none">
                            <div className="bg-white dark:bg-white/10 p-2 rounded-full shadow-sm dark:shadow-none">
                                <CheckCircle size={24} style={{ color: accentColor }} />
                            </div>
                            <span className="font-display">SOLUCIÓN IMPLEMENTADA</span>
                        </div>
                    </div>
                </div>

              </div>
            </div>
            );
          })}

        </motion.div>
      </div>
    </section>
  );
};

export default HorizontalSection;