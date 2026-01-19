import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import HorizontalSection from './components/HorizontalSection';
import Contact from './components/Contact';
import { MarketingBG, VideoBG, TechBG } from './components/AnimatedBG';
import { SEO_SLIDES, AI_SLIDES, MARKETING_SLIDES } from './constants';

function App() {
  // Default to true (Dark Mode) as requested
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Toggle class on HTML element
    if (isDark) {
      window.document.documentElement.classList.add('dark');
    } else {
      window.document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  return (
    <Layout isDark={isDark} toggleTheme={toggleTheme}>
      <div id="hero">
        <Hero />
      </div>
      
      <HorizontalSection 
        id="seo"
        title="ECOSISTEMA SEO"
        description="Domina los resultados de búsqueda. Desde SEO Técnico y On-Page hasta estrategias locales y E-commerce. Visibilidad total donde importa."
        slides={SEO_SLIDES}
        bgComponent={<MarketingBG />}
      />

      <HorizontalSection 
        id="ai"
        title="CORE AI TECH"
        description="Ingeniería de vanguardia. Asistentes de voz 24/7, automatizaciones híbridas (Backend + n8n) y Dashboards inteligentes."
        slides={AI_SLIDES}
        bgComponent={<TechBG />}
      />

      <HorizontalSection 
        id="marketing"
        title="ADS & CREATIVE"
        description="Marketing de alto impacto. Producción cinematográfica con PublifilmAI integrada en campañas de Meta, Google y TikTok Ads con foco en ROI."
        slides={MARKETING_SLIDES}
        bgComponent={<VideoBG />}
      />

      <div id="contact">
        <Contact />
      </div>
    </Layout>
  );
}

export default App;