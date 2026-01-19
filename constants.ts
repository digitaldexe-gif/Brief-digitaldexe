import { 
  Globe, 
  Search, 
  MessageSquare, 
  Video, 
  PhoneCall, 
  Workflow, 
  BarChart3, 
  Target,
  ShieldCheck,
  Users,
  TrendingUp,
  ShoppingCart,
  Mail,
  Cpu,
  Zap,
  Layers,
  Server
} from 'lucide-react';

export const BRAND_NAME = "DigitalDexe";
export const CONTACT_EMAIL = "info@digitaldexe.com";
export const CONTACT_PHONE = "+34 666 96 01 77";
export const WHATSAPP_LINK = `https://wa.me/34666960177`;

// Section 1: Ecosistema SEO (5 Items)
export const SEO_SLIDES = [
  {
    id: 'seo-1',
    title: "SEO Técnico",
    subtitle: "Rendimiento Extremo",
    description: "Auditoría profunda de más de 200 puntos. Optimizamos Core Web Vitals, arquitectura de servidores y renderizado para que Google te adore.",
    icon: ShieldCheck,
    tags: ["Core Web Vitals", "Indexing", "Audit"],
    color: "from-blue-600 to-cyan-400",
    accent: "blue"
  },
  {
    id: 'seo-2',
    title: "SEO On-Page & IA",
    subtitle: "Relevancia Semántica",
    description: "Análisis de intención de búsqueda y optimización de contenido asistido por IA. Metadatos, jerarquías y semántica LSI.",
    icon: Search,
    tags: ["LSI Keywords", "Semantic IA", "Content"],
    color: "from-green-600 to-emerald-400",
    accent: "green"
  },
  {
    id: 'seo-3',
    title: "SEO Local & Maps",
    subtitle: "Dominio de Proximidad",
    description: "Especialistas en mercado global y local. Gestión de Google Business Profile, reseñas y visibilidad en mapas (Pack Local).",
    icon: Target,
    tags: ["Google Maps", "Citations", "Reviews"],
    color: "from-orange-600 to-yellow-400",
    accent: "orange"
  },
  {
    id: 'seo-4',
    title: "SEO E-commerce",
    subtitle: "Conversión Directa",
    description: "Optimizamos tu tienda (Shopify, WooCommerce) desde las categorías hasta el checkout. Sincronización de feeds de productos.",
    icon: ShoppingCart,
    tags: ["Shopify", "WooCommerce", "Product Rank"],
    color: "from-red-600 to-pink-500",
    accent: "red"
  },
  {
    id: 'seo-5',
    title: "Sinergia SEO/SEM",
    subtitle: "ROI Multiplicado",
    description: "Bajamos tu CPC en Ads aumentando el Quality Score mediante un SEO impecable. Estrategia 360 para captar leads.",
    icon: TrendingUp,
    tags: ["Quality Score", "CPC Down", "Leads"],
    color: "from-indigo-600 to-blue-400",
    accent: "indigo"
  }
];

// Section 2: Soluciones de IA (5 Items)
export const AI_SLIDES = [
  {
    id: 'ai-1',
    title: "Asistentes de Voz",
    subtitle: "Telemarketing IA",
    description: "Asistentes telefónicos autónomos con voz humana. Atienden llamadas, agendan citas y cualifican leads 24/7 sin descanso.",
    icon: PhoneCall,
    tags: ["Vapi AI", "Real-time Voice", "Booking"],
    color: "from-teal-500 to-emerald-400",
    accent: "teal"
  },
  {
    id: 'ai-2',
    title: "Backend Híbrido",
    subtitle: "Lógica Escalable",
    description: "Desarrollamos la lógica de negocio pesada en Backend propio para evitar cuellos de botella, integrando n8n/Make solo para notificaciones ágiles.",
    icon: Server,
    tags: ["Custom Backend", "Python/Node", "n8n Routing"],
    color: "from-blue-600 to-indigo-500",
    accent: "blue"
  },
  {
    id: 'ai-3',
    title: "Dashboards en Vivo",
    subtitle: "Control de Datos",
    description: "Centros de comando personalizados. Visualiza KPIs de ventas, marketing y operativa en tiempo real para decisiones instantáneas.",
    icon: BarChart3,
    tags: ["Looker Studio", "PowerBI", "Analytics"],
    color: "from-yellow-500 to-orange-500",
    accent: "yellow"
  },
  {
    id: 'ai-4',
    title: "Chatbots RAG",
    subtitle: "Soporte Inteligente",
    description: "Entrenamos a la IA con TUS datos. Responde dudas técnicas, de stock o precios al instante vía Web o WhatsApp.",
    icon: MessageSquare,
    tags: ["RAG", "Gemini Pro", "Support"],
    color: "from-purple-500 to-violet-500",
    accent: "purple"
  },
  {
    id: 'ai-5',
    title: "Consultoría AI",
    subtitle: "Transformación Digital",
    description: "Auditamos tu empresa para detectar cuellos de botella y desplegar soluciones de Inteligencia Artificial a medida y seguras.",
    icon: Cpu,
    tags: ["Audit", "Strategy", "Implementation"],
    color: "from-pink-500 to-rose-500",
    accent: "pink"
  }
];

// Section 3: Marketing & Publicidad (4 Items - Growth Hacking removed)
export const MARKETING_SLIDES = [
  {
    id: 'mkt-1',
    title: "Publifilm AI",
    subtitle: "Video Generativo",
    description: "Producción de spots publicitarios 4K y avatares realistas. Reduce costes de rodaje un 90% con tecnología generativa.",
    icon: Video,
    tags: ["Sora/Runway", "Avatars", "4K Ads"],
    color: "from-purple-600 to-pink-400",
    accent: "purple"
  },
  {
    id: 'mkt-2',
    title: "Ads Performance",
    subtitle: "Paid Media",
    description: "Campañas en Meta, Google y TikTok optimizadas con algoritmos predictivos. Maximizamos el ROAS con segmentación láser.",
    icon: Target,
    tags: ["Meta Ads", "Google Ads", "TikTok"],
    color: "from-blue-500 to-cyan-400",
    accent: "blue"
  },
  {
    id: 'mkt-3',
    title: "Email Automation",
    subtitle: "Retención de Clientes",
    description: "Secuencias de email marketing hiper-personalizadas. Recuperación de carritos y fidelización automática.",
    icon: Mail,
    tags: ["Klaviyo", "Flows", "Retention"],
    color: "from-orange-500 to-red-400",
    accent: "orange"
  },
  {
    id: 'mkt-4',
    title: "Gestión Reputación",
    subtitle: "Brand Guardian",
    description: "Monitorización 24/7 de tu marca. Respuestas automáticas inteligentes a reseñas y gestión de crisis en tiempo real.",
    icon: Layers,
    tags: ["Reviews", "Social Listening", "PR"],
    color: "from-indigo-500 to-purple-500",
    accent: "indigo"
  }
];

export const NAV_LINKS = [
  { label: "SEO/SEM", id: "seo" },
  { label: "IA Tech", id: "ai" },
  { label: "Marketing", id: "marketing" },
  { label: "Contacto", id: "contact" },
];