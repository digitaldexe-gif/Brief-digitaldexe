import React from 'react';
import { Mail, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_LINK, BRAND_NAME } from '../constants';

const Contact: React.FC = () => {
  return (
    <footer id="contact" className="min-h-screen bg-slate-50 dark:bg-brand-dark text-slate-900 dark:text-white flex flex-col justify-center items-center relative overflow-hidden px-8 transition-colors duration-500">
        
      {/* Background decoration - Ensure light mode is subtle */}
      <div className="absolute inset-0 opacity-100 dark:opacity-20 bg-grid"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand-blue/5 dark:bg-brand-blue/10 rounded-full blur-[150px]"></div>

      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="text-center mb-28">
            <span className="text-brand-blue font-mono tracking-[0.8em] text-xl mb-10 block uppercase font-bold">Siguientes Pasos</span>
            <h2 className="text-[12vw] md:text-[10vw] font-black leading-none mb-12 tracking-tighter font-display uppercase text-slate-900 dark:text-white">
                ¿LISTO PARA<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue via-brand-green to-brand-orange">COMENZAR?</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Direct Channels */}
          <div className="glass p-16 rounded-[4rem] space-y-12 flex flex-col justify-between">
            <div>
                <h3 className="text-base font-black text-slate-500 uppercase tracking-[0.4em] mb-12">Contacto Directo</h3>
                <div className="space-y-10">
                    <a href={`mailto:${CONTACT_EMAIL}`} className="group flex items-center gap-6 text-3xl font-bold hover:text-brand-blue transition-all duration-300">
                        <div className="p-4 bg-brand-blue/10 rounded-2xl group-hover:scale-110 transition-transform">
                            <Mail className="text-brand-blue w-8 h-8" />
                        </div>
                        <span>{CONTACT_EMAIL}</span>
                    </a>
                    <a href={`tel:${CONTACT_PHONE}`} className="group flex items-center gap-6 text-3xl font-bold hover:text-brand-green transition-all duration-300">
                        <div className="p-4 bg-brand-green/10 rounded-2xl group-hover:scale-110 transition-transform">
                            <Phone className="text-brand-green w-8 h-8" />
                        </div>
                        <span>{CONTACT_PHONE}</span>
                    </a>
                </div>
            </div>
            
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              className="flex items-center justify-center gap-4 bg-brand-green text-black py-7 rounded-3xl font-black text-2xl hover:scale-[1.02] transition-all active:scale-98 shadow-[0_20px_50px_rgba(52,199,89,0.3)]"
            >
              <MessageCircle size={32} />
              WHATSAPP EMPRESARIAL
            </a>
          </div>

          {/* Portals */}
          <div className="glass p-16 rounded-[4rem] flex flex-col">
            <h3 className="text-base font-black text-slate-500 uppercase tracking-[0.4em] mb-16">Red DigitalDexe</h3>
            <ul className="space-y-12 flex-grow">
                <li>
                    <a href="https://digitaldexe.com" target="_blank" className="group flex items-center justify-between text-4xl font-black hover:text-brand-blue transition-all duration-300">
                        <span>DigitalDexe Main</span>
                        <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition-transform text-brand-blue" />
                    </a>
                </li>
                <li>
                    <a href="https://publifilmai.com" target="_blank" className="group flex items-center justify-between text-4xl font-black hover:text-brand-orange transition-all duration-300">
                        <span>PublifilmAI</span>
                        <ArrowRight className="w-10 h-10 group-hover:translate-x-4 transition-transform text-brand-orange" />
                    </a>
                </li>
            </ul>
            
            <div className="mt-16 pt-16 border-t border-slate-200 dark:border-white/5">
                <p className="text-2xl text-slate-500 font-light leading-snug italic">
                   "Diseñamos el futuro de tu gestión empresarial hoy mismo."
                </p>
            </div>
          </div>

        </div>

        <div className="mt-32 pt-12 border-t border-slate-200 dark:border-white/5 flex flex-col md:flex-row justify-between items-center text-slate-500 dark:text-slate-600 text-xs font-mono uppercase tracking-[0.5em]">
            <p>&copy; {new Date().getFullYear()} {BRAND_NAME} GLOBAL SYSTEMS.</p>
            <div className="flex items-center gap-2 mt-6 md:mt-0">
                <div className="w-2 h-2 rounded-full bg-brand-green animate-pulse"></div>
                <span>NÚCLEO ENCRIPTADO // IA ACTIVA</span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;