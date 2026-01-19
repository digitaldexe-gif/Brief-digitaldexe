import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { NAV_LINKS } from '../constants';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
  isDark: boolean;
  toggleTheme: () => void;
}

const Layout: React.FC<LayoutProps> = ({ children, isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [viewedSections, setViewedSections] = useState<Set<string>>(new Set());

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Basic detection logic
    const hero = document.getElementById('hero');
    const sections = NAV_LINKS.map(link => document.getElementById(link.id));
    
    let current = 'hero';
    
    // Check Hero
    if (hero) {
        const rect = hero.getBoundingClientRect();
        if (rect.bottom > window.innerHeight / 2) current = 'hero';
    }

    // Check Sections
    sections.forEach(section => {
      if (section) {
        const rect = section.getBoundingClientRect();
        // Since sections are huge (400vh+), we check if the top is above or near viewport top
        // and bottom is still far down.
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          current = section.id;
        }
      }
    });

    setActiveSection(current);
    
    if (current !== 'hero') {
      setViewedSections(prev => {
        const next = new Set(prev);
        const currentIndex = NAV_LINKS.findIndex(l => l.id === current);
        NAV_LINKS.forEach((link, idx) => {
          if (idx <= currentIndex) next.add(link.id);
        });
        return next;
      });
    }
  });

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-brand-dark text-slate-900 dark:text-white relative transition-colors duration-300">
      
      {/* Header with Logo and Theme Toggle */}
      <motion.header 
        className="fixed top-0 left-0 p-8 z-50 w-full flex justify-between items-center pointer-events-none"
      >
        <div className="pointer-events-auto">
            <a href="#hero" onClick={(e) => handleNavClick(e, 'hero')} className="block hover:opacity-80 transition-opacity">
                <Logo />
            </a>
        </div>
        
        <div className="pointer-events-auto flex items-center gap-4">
             <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
             
             <div className="md:hidden">
                 <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="p-3 bg-white dark:bg-white text-black rounded-full shadow-2xl"
                 >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                 </button>
             </div>
        </div>
      </motion.header>

      {/* Side Navigation Dots */}
      <div className="fixed right-12 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-8 pointer-events-none">
        <div className="pointer-events-auto flex flex-col gap-8">
            {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            const isViewed = viewedSections.has(link.id);
            
            return (
                <a 
                    key={link.id} 
                    href={`#${link.id}`}
                    onClick={(e) => handleNavClick(e, link.id)}
                    className="group flex items-center justify-end gap-6 outline-none"
                >
                    <span className={`opacity-0 group-hover:opacity-100 transition-all duration-300 text-[10px] font-black bg-white/80 dark:bg-white/10 backdrop-blur-md border border-black/10 dark:border-white/20 px-3 py-1 rounded-full text-slate-900 dark:text-white uppercase tracking-widest translate-x-4 group-hover:translate-x-0`}>
                        {link.label}
                    </span>
                    <div className="relative flex items-center justify-center w-6 h-6">
                        {isActive && (
                        <motion.div 
                            layoutId="glow"
                            className="absolute inset-0 bg-brand-blue rounded-full blur-md opacity-80"
                            animate={{ scale: [1, 1.5, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        )}
                        <div className={`w-3 h-3 rounded-full border transition-all duration-500 relative z-10 ${
                            isActive 
                            ? 'bg-brand-blue border-brand-blue shadow-[0_0_10px_#007AFF]' 
                            : isViewed 
                            ? 'bg-slate-400 border-slate-400 dark:bg-white dark:border-white' 
                            : 'bg-transparent border-slate-400 dark:border-white/30 group-hover:border-slate-800 dark:group-hover:border-white'
                        }`} />
                    </div>
                </a>
            );
            })}
        </div>
      </div>

      <main className="flex-grow w-full">
        {children}
      </main>
    </div>
  );
};

export default Layout;