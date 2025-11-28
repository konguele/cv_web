import React, { useState, useEffect, useRef } from 'react';
import { 
  Terminal, 
  Gamepad2, 
  TrendingUp, 
  Users, 
  Code, 
  Server, 
  Cpu, 
  Linkedin, 
  Mail, 
  MapPin, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  Smartphone,
  BookOpen,
  GraduationCap,
  Award,
  Heart,
  Brain,
  Coffee,
  Globe,
  Download,
  Utensils,
  Smile,
  Menu,
  X,
  Shuffle
} from 'lucide-react';

// --- DATA ---
const languages = [
  { code: 'es', label: 'ES', flag: 'https://flagcdn.com/w40/es.png', path: '/es/' },
  { code: 'en', label: 'EN', flag: 'https://flagcdn.com/w40/gb.png', path: '/' },
  { code: 'ca', label: 'CA', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Catalonia.svg', path: '/ca/' },
  { code: 'ch', label: 'DE', flag: 'https://flagcdn.com/w40/ch.png', path: '/ch/' },
];

// Lista completa de imágenes del carrusel para la selección aleatoria
const carouselSourceImages = [
  "/images/Carrusel1.jpg",
  "/images/carrusel2.jpg",
  "/images/carrusel3.jpg",
  "/images/carrusel4.jpg",
  "/images/carrusel5.jpg",
  "/images/carrusel6.jpg",
  "/images/carrusel7.jpg",
  "/images/carrusel8.JPG",
  "/images/carrusel9.jpg"
];

const personalInfo = {
  name: "Juan José García Manzano",
  role: "DevOps Engineer & Project Manager",
  location: "Zürich, Switzerland",
  email: "Juanjo.gmanzano@gmail.com",
  linkedin: "linkedin.com/in/juanjo-garcia-manzano",
  tagline: "Uniendo la solidez de la infraestructura Linux con la creatividad del desarrollo de producto.",
  aboutShort: "Soy un DevOps Engineer con alma de emprendedor. Experto en automatización, Linux y Cloud, pero también creador de videojuegos y apps financieras.",
  aboutLong: "Con más de 10 años de experiencia en entornos críticos (Banca, Retail, Salud), he dominado el arte de mantener sistemas robustos. Sin embargo, mi pasión va más allá del código: me mueve crear experiencias. He desarrollado 'Jabalí Espacial' para móviles y estoy construyendo 'Bancfy', no solo como una app de finanzas, sino como una comunidad. Creo firmemente que la tecnología debe servir para conectar y empoderar a las personas.",
  hobbies: [
    {
      name: "Fútbol",
      icon: <Award size={18} />,
      desc: "Más que un deporte, ha sido mi escuela de disciplina. Federado desde los 6 años (CEU Ciutat Meridiana, Santa Perpetua), aprendí el valor del sacrificio y el trabajo en equipo. Incluso en Suiza (Urdorf), el balón fue mi idioma universal. El fútbol me enseñó a gestionar la derrota, a liderar bajo presión y a entender que ningún gol se marca solo."
    },
    {
      name: "Videojuegos",
      icon: <Gamepad2 size={18} />,
      desc: "Mi gimnasio mental nocturno. Actualmente compito en EA Sports FC 26 optimizando mi tiempo, pero mi historial va desde la narrativa inmersiva de Spider-Man y Assassin's Creed hasta la estrategia de Pokémon. Esperando con ansias GTA VI. Los videojuegos afinan mis reflejos, mi resolución de problemas y mantienen viva esa chispa de creatividad y asombro."
    },
    {
      name: "Leer",
      icon: <BookOpen size={18} />,
      desc: "Mi biblioteca es mi mayor tesoro. Desde la épica de Tolkien y la sabiduría de 'Hagakure' hasta la profundidad gráfica de 'The Dark Knight Rises' (firmado por Miller). Libros como 'Million Dollar Weekend' moldean mi mentalidad emprendedora hoy. Leer es el entrenamiento invisible que expande mis horizontes y me aporta la calma necesaria para enfocarme."
    },
    {
      name: "Mi Hija",
      icon: <Smile size={18} />,
      desc: "El 'proyecto' más importante de mi vida. Jugar con ella es volver a descubrir el mundo con ojos nuevos. Ella me enseña paciencia infinita, curiosidad pura y me recuerda cada día por qué me esfuerzo. Es mi ancla a la realidad y mi mayor motivación para construir un futuro mejor."
    },
    {
      name: "Cocinar",
      icon: <Utensils size={18} />,
      desc: "Alquimia para el alma. Entre fogones encuentro mi flow. Desde perfeccionar la tortilla de patatas hasta experimentar con caza mayor suiza (ciervo, jabalí). Cocinar, al igual que programar, requiere los ingredientes correctos, precisión en los tiempos y mucho cariño para que el resultado sea memorable."
    },
    {
      name: "Crear Apps",
      icon: <Code size={18} />,
      desc: "El motor que nunca se apaga. Mi mente es un hervidero constante de ideas buscando solucionar problemas reales. Disfruto cada fase: desde la idea en una servilleta hasta el despliegue en producción. Crear es mi forma de dejar huella y empoderar a otros con tecnología útil y accesible."
    }
  ]
};

const experience = [
  {
    company: "Worldline Switzerland",
    role: "DevOps Engineer / Project Manager",
    period: "Oct 2024 - Presente",
    logo: "/images/worldline.png",
    desc: "Owner de Artifactory e Instant Score. Gestión E2E de proyectos, automatización y migraciones a Google Cloud.",
    details: "Como Owner de Artifactory (el corazón digital donde converge y se gestiona todo el desarrollo tecnológico de la compañía) y de las soluciones críticas Instant Score / Online Watcher, lidero la estrategia y estabilidad de estos sistemas. Gestión integral de proyectos técnicos como migraciones RHEL8/9. Administración de servidores Linux, automatización avanzada con Ansible (YAML), Bash y Python. Despliegue y gestión de AWX y pipelines de CI/CD con GitLab. Supervisión y ejecución de migraciones a Google Cloud, incluyendo la creación de scripts en Terraform para desplegar nuevos modelos de aplicaciones.",
    tags: ["Product Owner", "Artifactory", "Google Cloud", "Ansible"],
    color: "bg-blue-600",
    stack: [
        { name: "Google Cloud (GCP)", desc: "Migración de apps, Terraform y despliegue de modelos" },
        { name: "Artifactory", desc: "Owner. Gestión centralizada de artefactos y desarrollo" },
        { name: "Instant Score", desc: "Owner. Gestión y mantenimiento de la solución" },
        { name: "BMC Remedy", desc: "Incidencias, Change Requests y Gestión de problemas" },
        { name: "Jira", desc: "Creación y seguimiento de tareas" },
        { name: "Confluence", desc: "Gestión documental y base de conocimiento" },
        { name: "VMWare", desc: "Gestión de infraestructura virtual (VMs)" },
        { name: "Putty / MobaXterm", desc: "Acceso y gestión SSH a servidores Linux" },
        { name: "IntelliJ / VS Code", desc: "Gestión de código y pipelines en GitLab" },
        { name: "RHEL 8 & 9", desc: "Administración avanzada de servidores Linux" }
    ]
  },
  {
    company: "Six Group",
    role: "DevOps Engineer",
    period: "May 2021 - Sep 2024",
    logo: "/images/six.jpg",
    desc: "Liderazgo en migraciones RHEL7 a RHEL8. Integración de Docker y OpenShift. Migración de servidores a Azure.",
    details: "Demostré sólidas habilidades de liderazgo gestionando eficazmente proyectos como la migración de RHEL7 a RHEL8, automatización de procesos de parches e integración de Docker para el despliegue de aplicaciones. Experiencia en programación C++ y Bash, trabajando con Artifactory y BMC Remedy.",
    tags: ["OpenShift", "Docker", "Azure", "Bash"],
    color: "bg-red-600"
  },
  {
    company: "Burberry",
    role: "Linux Engineer",
    period: "Jul 2018 - Abr 2021",
    logo: "/images/burberry.avif",
    desc: "Administración de Linux (RedHat, SUSE). Scripting en Ansible y Bash. Backup con Data Protector.",
    details: "Realización de tareas desde la instalación de servidores en Linux (Redhat, SUSE), configuración y creación de FS, montaje de volúmenes. Responsable de tareas de backup con Data Protector. Creación de especificaciones, resolución de incidencias de software y hardware.",
    tags: ["Linux", "Ansible", "VMWare"],
    color: "bg-yellow-600"
  },
  {
    company: "Grifols S.A.",
    role: "Systems Administrator",
    period: "Nov 2014 - Jul 2018",
    logo: "/images/grifols.png",
    desc: "Administración básica de sistemas Unix, Linux y Windows. Gestión de alertas HP Openview y backups.",
    details: "Gestión de la administración básica de sistemas Unix, Linux y Windows, gestión de alertas HP Openview, ejecución de backups con Data Protector, revisión de Tablespaces Oracle. Creación de usuarios en LDAP y OpenLDAP.",
    tags: ["Unix", "Windows", "Oracle", "LDAP"],
    color: "bg-blue-500"
  },
  {
    company: "Metrica / ITNow",
    role: "Linux Administrator",
    period: "Sep 2014 - Nov 2014",
    logo: "/images/itnow.jpg",
    desc: "Administración de máquinas Linux, scripting en Bash y Perl, monitorización con Nagios.",
    details: "Gestión de la administración de máquinas Linux, creación de scripts en bash y perl, creación de reglas de monitorización en HP Openview y Nagios.",
    tags: ["Linux", "Nagios", "Perl"],
    color: "bg-gray-600"
  },
  {
    company: "Hewlett Packard",
    role: "TIBCO Administrator",
    period: "Mar 2014 - Sep 2014",
    logo: "/images/hp.png",
    desc: "Administración de máquinas Linux para TIBCO, scripting y reglas de monitorización.",
    details: "Gestión de la administración de máquinas Linux para TIBCO, creación de scripts en bash y perl, reglas de monitorización en Tibco Hawk.",
    tags: ["TIBCO", "Linux", "Bash"],
    color: "bg-cyan-600"
  },
  {
    company: "Hewlett Packard",
    role: "Operation Team Leader",
    period: "Dic 2010 - Oct 2013",
    logo: "/images/hp.png",
    desc: "Gestión de equipo, control de ejecución de trabajos en Control M y SAP.",
    details: "Gestión de personas dentro del equipo, control de la correcta ejecución del trabajo, apertura de incidencias, planificación y ejecución de trabajos en Control M Enterprises y Mainframe.",
    tags: ["Team Lead", "SAP", "Control M"],
    color: "bg-cyan-600"
  }
];

const education = [
  {
    institution: "UOC (Universitat Oberta de Catalunya)",
    degree: "Systems Engineer",
    period: "2012 - 2017",
    desc: "Fundamentos de programación, gestión de redes y sistemas operativos."
  },
  {
    institution: "Santa-Pau Pifma",
    degree: "High-Level Technician degree in IT",
    period: "2006 - 2008",
    desc: "Formación técnica superior en informática."
  }
];

const certifications = [
  "RHCSA (RHEL9) (2025)",
  "DevOps on AWS (2024)",
  "AWS Fundamentals (2024)",
  "CPA - C++ (2023)",
  "LPIC 2 (2014)",
  "ITIL Foundation (2013)",
  "LPIC 1 (2013)"
];

const projects = [
  {
    title: "Bancfy",
    category: "Fintech App & Comunidad",
    icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
    description: "Más que una app de finanzas, es una experiencia. Bancfy busca cambiar la relación de las personas con su dinero mediante la gamificación y la comunidad. No vendo un producto, construyo un movimiento.",
    status: "En desarrollo",
    color: "from-emerald-900 to-green-900",
    links: [{ label: "Web Oficial", url: "https://www.bancfy.com/es" }]
  },
  {
    title: "Jabalí Espacial",
    category: "Mobile Game",
    icon: <Gamepad2 className="w-8 h-8 text-purple-400" />,
    description: "Un videojuego arcade desarrollado íntegramente por mí. Disponible en plataformas móviles. Un reto técnico y creativo que demuestra mi capacidad para llevar un producto de 0 a 100.",
    status: "Publicado",
    color: "from-purple-900 to-indigo-900",
    links: [
      { label: "Android", url: "https://andro.io/app/jabaliespacial" },
      { label: "iOS", url: "https://apps.apple.com/us/app/space-warhog/id6468927508" }
    ]
  },
  {
    title: "@exitofracasando",
    category: "Content Creation",
    icon: <Smartphone className="w-8 h-8 text-pink-400" />,
    description: "Cuenta de TikTok con +10k seguidores. Un espacio donde compartí aprendizajes y conecté con una audiencia joven interesada en crecimiento y emprendimiento.",
    status: "10K+ Seguidores",
    color: "from-pink-900 to-rose-900",
    links: [{ label: "TikTok", url: "https://www.tiktok.com/@exitofracasando" }]
  }
];

const books = [
  {
    title: "El éxito de fracasar",
    url: "https://www.amazon.es/dp/B0DK8SF6DK",
    image: "/images/fracasar.png"
  },
  {
    title: "Cómo destruir España",
    url: "https://www.amazon.es/dp/B0DKT43G4R",
    image: "/images/Cómo destruir españa.jpg"
  },
  {
    title: "Com destruir Catalunya",
    url: "https://www.amazon.es/dp/B0DMFYV7W3",
    image: "/images/Com destruir Catalunya.jpg"
  }
];

const techSkills = [
  { name: "Linux / RHEL", level: 95 },
  { name: "Ansible / Automation", level: 90 },
  { name: "Docker / Kubernetes", level: 85 },
  { name: "Cloud (GCP/AWS)", level: 85 },
  { name: "Terraform / IaC", level: 85 },
  { name: "CI/CD (GitLab/Jenkins)", level: 85 }
];

const softSkills = [
  "Liderazgo de Equipos",
  "Gestión de Proyectos",
  "Comunicación Efectiva",
  "Resolución de Conflictos",
  "Mentalidad de Crecimiento",
  "Adaptabilidad"
];

// --- COMPONENTS ---

const SEOHead = () => {
  useEffect(() => {
    document.title = "Juan José García Manzano | DevOps Engineer & Project Manager";
    
    const updateMeta = (name, content, attribute = 'name') => {
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    const updateLink = (rel, href, hreflang = null) => {
      let selector = `link[rel="${rel}"]`;
      if (hreflang) selector += `[hreflang="${hreflang}"]`;
      
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('link');
        element.setAttribute('rel', rel);
        if (hreflang) element.setAttribute('hreflang', hreflang);
        document.head.appendChild(element);
      }
      element.setAttribute('href', href);
    };

    updateMeta('description', 'Portfolio de Juan José García Manzano. DevOps Engineer experto en Linux, Cloud (AWS/GCP), Automatización y creador de productos digitales como Bancfy.');
    updateMeta('keywords', 'DevOps, Linux, Project Manager, RHEL, Ansible, Cloud, Portfolio, Juanjo Garcia, Bancfy, Zurich, Engineer');
    updateMeta('author', 'Juan José García Manzano');
    updateMeta('robots', 'index, follow');

    updateLink('canonical', 'https://www.jjgarciacv.com/es/');

    updateLink('alternate', 'https://www.jjgarciacv.com/es/', 'es');
    updateLink('alternate', 'https://www.jjgarciacv.com/', 'en');       
    updateLink('alternate', 'https://www.jjgarciacv.com/ca/', 'ca');     
    updateLink('alternate', 'https://www.jjgarciacv.com/ch/', 'de-CH');  
    updateLink('alternate', 'https://www.jjgarciacv.com/', 'x-default'); 

    updateMeta('og:type', 'profile', 'property');
    updateMeta('og:url', 'https://www.jjgarciacv.com/es/', 'property');
    updateMeta('og:title', 'Juan José García Manzano | DevOps & PM', 'property');
    updateMeta('og:description', 'Impulsando la innovación tecnológica desde Zurich. Experto en infraestructura crítica y desarrollo de producto.', 'property');

    updateMeta('twitter:card', 'summary_large_image', 'property');
    updateMeta('twitter:title', 'Juan José García Manzano | DevOps & PM', 'property');
    updateMeta('twitter:description', 'Impulsando la innovación tecnológica desde Zurich. Experto en infraestructura crítica y desarrollo de producto.', 'property');

    const schemaData = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": "Juan José García Manzano",
      "jobTitle": "DevOps Engineer & Project Manager",
      "url": "https://www.jjgarciacv.com",
      "sameAs": [
        "https://www.linkedin.com/in/juanjo-garcia-manzano",
        "https://www.bancfy.com"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "Worldline Switzerland"
      },
      "alumniOf": "UOC (Universitat Oberta de Catalunya)",
      "knowsAbout": ["DevOps", "Linux", "Cloud Computing", "Project Management", "Game Development"]
    };

    let script = document.querySelector('#seo-schema');
    if (!script) {
      script = document.createElement('script');
      script.id = 'seo-schema';
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    script.text = JSON.stringify(schemaData);

  }, []);

  return null;
};

const SectionTitle = ({ children, align = "text-center" }) => (
  <h2 className={`text-4xl font-bold mb-12 ${align} bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400`}>
    {children}
  </h2>
);

const GlassCard = ({ children, className = "", onClick }) => (
  <div 
    onClick={onClick}
    className={`backdrop-blur-xl bg-gray-900/60 border border-white/10 rounded-3xl p-6 shadow-xl transition-all duration-300 ${onClick ? 'cursor-pointer hover:border-purple-500/50 hover:bg-gray-800/60' : ''} ${className}`}
  >
    {children}
  </div>
);

const CompanyLogo = ({ logo, name, color }) => (
  <div className={`w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg shrink-0 overflow-hidden`}>
    {logo ? (
      <img src={logo} alt={name} className="w-full h-full object-contain p-1" />
    ) : (
      <div className={`w-full h-full ${color} flex items-center justify-center font-bold text-white`}>
        {name.substring(0, 2).toUpperCase()}
      </div>
    )}
  </div>
);

const LanguageSelector = ({ mobile = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLang = languages[0]; 

  if (mobile) {
    return (
        <div className="flex gap-4 mt-4 justify-center">
            {languages.map((lang) => (
                <a key={lang.code} href={lang.path} className="flex flex-col items-center gap-1">
                    <img src={lang.flag} alt={lang.label} className="w-8 h-8 rounded-full object-cover border-2 border-white/10" />
                    <span className="text-xs text-gray-400">{lang.label}</span>
                </a>
            ))}
        </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
      >
        <img src={currentLang.flag} alt={currentLang.label} className="w-5 h-5 rounded-full object-cover" />
        <span className="text-sm font-medium text-gray-300">{currentLang.label}</span>
        <ChevronDown size={14} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-white/10 rounded-2xl shadow-xl overflow-hidden z-50">
          {languages.map((lang) => (
            <a
              key={lang.code}
              href={lang.path}
              className="flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors text-sm text-gray-300 hover:text-white"
            >
              <img src={lang.flag} alt={lang.label} className="w-5 h-5 rounded-full object-cover" />
              <span>{lang.name || lang.label}</span>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default function App() {
  const [showFullAbout, setShowFullAbout] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [selectedHobby, setSelectedHobby] = useState(null); 
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [randomImages, setRandomImages] = useState([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    // Seleccionar aleatoriamente 4 imágenes al montar
    const shuffled = [...carouselSourceImages].sort(() => 0.5 - Math.random());
    setRandomImages(shuffled.slice(0, 4));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const visibleExperience = expandedExperience ? experience : experience.slice(0, 3);

  const menuItems = ['Sobre Mí', 'Experiencia', 'Estudios', 'Proyectos', 'Skills', 'Libros', 'Contacto'];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden relative">
      
      <SEOHead />

      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[10%] right-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      </div>

      {/* NAVIGATION */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold tracking-tighter flex items-center gap-2 relative z-50">
            <Terminal className="text-purple-500" />
            <span>JJ<span className="text-purple-500">GM</span></span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 text-sm font-medium text-gray-300">
              {menuItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase().replace(' ', '-').replace('í', 'i')}`}
                  className="hover:text-purple-400 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
            <div className="pl-6 border-l border-white/10">
              <LanguageSelector />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative z-50 text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Mobile Menu Overlay */}
          <div className={`fixed inset-0 bg-black/95 backdrop-blur-xl z-40 flex flex-col items-center justify-center transition-all duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
             <div className="flex flex-col gap-8 text-center">
                {menuItems.map((item) => (
                    <a 
                        key={item} 
                        href={`#${item.toLowerCase().replace(' ', '-').replace('í', 'i')}`}
                        className="text-2xl font-bold text-gray-300 hover:text-purple-400 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {item}
                    </a>
                ))}
             </div>
             <div className="mt-12 w-full px-12">
                <div className="h-px bg-white/10 w-full mb-8"></div>
                <p className="text-center text-gray-500 text-sm mb-4">Selecciona tu idioma</p>
                <LanguageSelector mobile={true} />
             </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative z-10 min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-300 text-sm mb-4 animate-fade-in-up">
              🚀 Disponible para nuevos retos
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              DevOps <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Engineer</span> <br />
              & Project Manager
            </h1>
            <p className="text-xl text-gray-400 max-w-lg mx-auto md:mx-0">
              {personalInfo.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contacto" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all transform hover:-translate-y-1 text-center">
                Contactar
              </a>
              <a href="/downloads/CV Juanjo.pdf" download className="px-8 py-3 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2 group text-center">
                <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                Descargar CV
              </a>
            </div>
          </div>

          <div className="relative h-[400px] w-full flex items-center justify-center mt-8 md:mt-0">
             <div className="relative w-72 h-auto bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col items-center p-6 z-20 transform rotate-[-5deg] hover:rotate-0 transition-all duration-500 group">
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 mb-6 p-1 group-hover:scale-105 transition-transform">
                   <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                      {/* IMAGEN DE PORTADA ACTUALIZADA */}
                      <img src="/images/portada.jpg" alt="Juanjo" className="w-full h-full object-cover rounded-full" />
                   </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">Juan José García</h3>
                
                <div className="w-full flex flex-col gap-2 mb-6">
                   <div className="flex items-center justify-center gap-2 text-purple-400 text-xs font-medium bg-purple-500/10 py-1.5 px-3 rounded-full border border-purple-500/20">
                      <MapPin size={12} /> Zurich (5 años)
                   </div>
                   <div className="h-4 w-px bg-white/10 mx-auto border-l border-dashed border-gray-500"></div>
                   <div className="flex items-center justify-center gap-2 text-gray-400 text-xs font-medium">
                      <MapPin size={12} /> Barcelona (Origen)
                   </div>
                </div>

                <div className="w-full grid grid-cols-3 gap-2 mt-auto pt-4 border-t border-white/5">
                    <div className="flex flex-col items-center bg-white/5 p-2 rounded-2xl">
                        <Code size={16} className="mb-1 text-blue-400"/>
                        <span className="text-[10px] mt-1">Code</span>
                    </div>
                    <div className="flex flex-col items-center bg-white/5 p-2 rounded-2xl">
                        <Server size={16} className="mb-1 text-green-400"/>
                        <span className="text-[10px] mt-1">Ops</span>
                    </div>
                    <div className="flex flex-col items-center bg-white/5 p-2 rounded-2xl">
                        <Gamepad2 size={16} className="mb-1 text-purple-400"/>
                        <span className="text-[10px] mt-1">Game</span>
                    </div>
                </div>
             </div>
             
             <div className="absolute top-10 right-10 p-4 bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-full z-30 shadow-xl animate-bounce duration-[3000ms]">
                <span className="text-2xl">🔥</span>
             </div>
             <div className="absolute bottom-10 left-0 p-4 bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-full z-30 shadow-xl animate-bounce duration-[4000ms]">
                <Code className="text-blue-400" />
             </div>
          </div>
        </div>
      </header>

      {/* ABOUT SECTION */}
      <section id="sobre-mi" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <SectionTitle>Sobre Mí</SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
             <div className="space-y-6">
                <GlassCard className="bg-gradient-to-br from-white/5 to-transparent">
                  <p className="text-lg leading-relaxed text-gray-300">
                    {personalInfo.aboutShort}
                  </p>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${showFullAbout ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-400 leading-relaxed border-t border-white/10 pt-4">
                      {personalInfo.aboutLong}
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 text-sm text-purple-300">
                            <BookOpen size={16} /> Aprendizaje continuo
                        </div>
                        <div className="flex items-center gap-2 text-sm text-purple-300">
                            <Users size={16} /> Liderazgo humano
                        </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setShowFullAbout(!showFullAbout)}
                    className="mt-4 flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    {showFullAbout ? 'Leer menos' : 'Leer más'}
                    {showFullAbout ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </GlassCard>

                {/* Hobbies Section Updated */}
                <h3 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2">
                   <Heart className="text-red-500" size={20} /> Mis Intereses
                </h3>
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {personalInfo.hobbies.map((hobby, i) => (
                            <button 
                                key={i} 
                                onClick={() => setSelectedHobby(selectedHobby === i ? null : i)}
                                className={`bg-white/5 rounded-full p-3 px-5 border transition-all flex items-center gap-3 text-left w-full
                                    ${selectedHobby === i 
                                        ? 'border-purple-500 bg-purple-500/10' 
                                        : 'border-white/10 hover:border-purple-500/50 hover:bg-white/10'
                                    }`}
                            >
                                <div className={`p-2 rounded-full flex items-center justify-center shrink-0 ${selectedHobby === i ? 'bg-purple-500 text-white' : 'bg-purple-500/20 text-purple-400'}`}>
                                    {hobby.icon}
                                </div>
                                <span className={`text-sm font-medium ${selectedHobby === i ? 'text-white' : 'text-gray-300'}`}>{hobby.name}</span>
                                {selectedHobby === i ? <ChevronUp size={14} className="ml-auto text-purple-400"/> : <ChevronDown size={14} className="ml-auto text-gray-500"/>}
                            </button>
                        ))}
                    </div>

                    {/* Detailed Hobby View */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${selectedHobby !== null ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                        {selectedHobby !== null && (
                            <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/30 rounded-3xl p-6 mt-2 relative">
                                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                    {personalInfo.hobbies[selectedHobby].icon}
                                    {personalInfo.hobbies[selectedHobby].name}
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {personalInfo.hobbies[selectedHobby].desc}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
             </div>

             <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
                <GlassCard className="relative">
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <Brain className="text-purple-500"/> Mindset & Soft Skills
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                     {softSkills.map((skill, i) => (
                       <div key={i} className="px-4 py-2 bg-white/5 rounded-full border border-white/5 text-sm text-gray-300 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-400" />
                          {skill}
                       </div>
                     ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <Cpu className="text-blue-500"/> Core Tech Stack
                  </h3>
                  {techSkills.map((skill) => (
                    <div key={skill.name} className="group mb-4">
                      <div className="flex justify-between mb-2 text-sm text-gray-400 group-hover:text-white transition-colors">
                        <span>{skill.name}</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </GlassCard>
             </div>
          </div>

          {/* PHOTO CAROUSEL SECTION */}
          <div className="mt-16">
             <h3 className="text-xl font-bold mb-6 flex items-center justify-center gap-2 text-gray-300">
                <Shuffle size={20} className="text-purple-400"/> Galería Aleatoria
             </h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {randomImages.map((imgSrc, idx) => (
                   <div key={idx} className="aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl group relative hover:border-purple-500/30 transition-all">
                      <img 
                        src={imgSrc} 
                        alt="Lifestyle Juanjo" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                   </div>
                ))}
             </div>
          </div>

        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experiencia" className="py-24 bg-black/30 relative">
        <div className="container mx-auto px-6">
          <SectionTitle>Trayectoria Profesional</SectionTitle>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-12 w-px bg-gradient-to-b from-purple-500/0 via-purple-500/50 to-purple-500/0" />

            {visibleExperience.map((job, index) => (
              <div key={index} className={`relative mb-8 flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 bg-black border-2 border-purple-500 rounded-full shadow-[0_0_10px_rgba(168,85,247,0.5)] z-10 mt-6" />

                <div className="ml-16 md:ml-0 md:w-1/2 px-4">
                  <GlassCard 
                    onClick={() => setSelectedJob(selectedJob === index ? null : index)}
                    className="relative group transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/30"
                  >
                    <div className="flex items-start gap-4 mb-4">
                       <CompanyLogo logo={job.logo} name={job.company} color={job.color} />
                       <div>
                          <span className="text-purple-400 font-mono text-xs block mb-1">{job.period}</span>
                          <h3 className="text-lg font-bold leading-tight">{job.role}</h3>
                          <div className="text-gray-400 text-sm font-medium">{job.company}</div>
                       </div>
                    </div>
                    
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {job.desc}
                    </p>

                    <div className={`overflow-hidden transition-all duration-500 ${selectedJob === index ? 'max-h-[1000px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                        <div className="pt-4 border-t border-white/10 text-sm text-gray-300 italic mb-4">
                            {job.details}
                        </div>
                        
                        {job.stack && (
                           <div className="bg-white/5 rounded-3xl p-4 border border-white/5">
                              <h4 className="text-xs font-bold text-purple-400 mb-3 uppercase tracking-wider">Herramientas & Tecnologías</h4>
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-4">
                                 {job.stack.map((tech, i) => (
                                    <div key={i} className="flex items-start gap-2 text-xs">
                                       <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-1 shrink-0"></div>
                                       <div>
                                          <span className="font-bold text-gray-200">{tech.name}:</span> <span className="text-gray-400">{tech.desc}</span>
                                       </div>
                                    </div>
                                 ))}
                              </div>
                           </div>
                        )}
                    </div>

                    <div className="flex flex-wrap gap-2 mt-auto">
                      {job.tags.map(tag => (
                        <span key={tag} className="text-[10px] px-3 py-1 bg-white/5 rounded-full border border-white/5 text-gray-300 group-hover:border-purple-500/20 transition-colors">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="absolute top-4 right-4 text-gray-600 group-hover:text-purple-400 transition-colors">
                        {selectedJob === index ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </div>
                  </GlassCard>
                </div>
              </div>
            ))}

            <div className="text-center mt-12 relative z-20 bg-gray-950 pt-4">
                <button 
                    onClick={() => setExpandedExperience(!expandedExperience)}
                    className="flex flex-col items-center gap-2 mx-auto text-gray-400 hover:text-white transition-colors"
                >
                    <span className="text-sm font-bold uppercase tracking-widest">
                        {expandedExperience ? "Ver menos" : "Ver trayectoria completa"}
                    </span>
                    {expandedExperience ? <ChevronUp className="animate-bounce" /> : <ChevronDown className="animate-bounce" />}
                </button>
            </div>
          </div>
        </div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="estudios" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
           <SectionTitle>Estudios & Certificaciones</SectionTitle>
           
           <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-6">
                 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6">
                    <GraduationCap className="text-purple-500" /> Formación Académica
                 </h3>
                 {education.map((edu, idx) => (
                    <div key={idx} className="flex gap-4 p-4 border-l-2 border-purple-500/30 hover:border-purple-500 transition-colors bg-white/5 rounded-r-[2rem]">
                       <div className="flex-1">
                          <h4 className="font-bold text-lg">{edu.degree}</h4>
                          <p className="text-purple-300 text-sm">{edu.institution}</p>
                          <span className="text-xs text-gray-500 block mb-2">{edu.period}</span>
                          <p className="text-sm text-gray-400">{edu.desc}</p>
                       </div>
                    </div>
                 ))}
              </div>

              <div className="space-y-6">
                 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6">
                    <Award className="text-blue-500" /> Certificaciones
                 </h3>
                 <div className="grid grid-cols-1 gap-3">
                    {certifications.map((cert, idx) => (
                       <div key={idx} className="flex items-center gap-3 p-3 px-5 bg-white/5 rounded-full border border-white/5 hover:bg-white/10 transition-colors">
                          <Award size={16} className="text-yellow-500 shrink-0" />
                          <span className="text-sm font-medium">{cert}</span>
                       </div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="proyectos" className="py-24 bg-black/30">
        <div className="container mx-auto px-6">
          <SectionTitle>Side Projects & Emprendimiento</SectionTitle>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
            Mi pasión no se limita a la oficina. Me encanta construir productos desde cero, generar comunidad y explorar nuevas tecnologías.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 rounded-[2.5rem] transition-opacity duration-500 blur-xl`} />
                
                <GlassCard className="h-full flex flex-col relative z-10 border-white/5 hover:border-white/20 transition-all duration-300 group-hover:-translate-y-2">
                  <div className="mb-6 flex justify-between items-start">
                    <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:scale-110 transition-transform">
                      {project.icon}
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="text-xs text-purple-400 mb-4 font-mono uppercase tracking-wider">{project.category}</div>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-col gap-2 mt-auto">
                    {project.links.map((link, i) => (
                        <a 
                            key={i}
                            href={link.url} 
                            target="_blank" 
                            rel="noreferrer"
                            className="flex items-center justify-between p-2 px-4 rounded-full bg-white/5 hover:bg-white/10 text-sm font-bold text-gray-300 hover:text-white transition-all"
                        >
                            {link.label} <ExternalLink size={14} />
                        </a>
                    ))}
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKS SECTION */}
      <section id="libros" className="py-24 relative z-10 overflow-hidden">
         <div className="container mx-auto px-6">
            <SectionTitle>Libros Publicados</SectionTitle>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
               Compartir conocimiento es otra de mis pasiones. Aquí puedes encontrar mis últimas publicaciones disponibles en Amazon.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
               {books.map((book, idx) => (
                  <a 
                    key={idx} 
                    href={book.url} 
                    target="_blank" 
                    rel="noreferrer"
                    className="block group relative"
                  >
                     <div className="absolute inset-0 rounded-[2rem] overflow-hidden z-0">
                        <img src={book.image} alt={book.title} className="w-full h-full object-cover opacity-30 blur-md scale-110 transition-transform duration-500 group-hover:scale-125" />
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/90 to-gray-900/90" />
                     </div>
                     
                     <div className="relative aspect-[2/3] bg-transparent rounded-[2rem] shadow-2xl transform transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-purple-500/20 border border-white/10 flex items-center justify-center overflow-hidden z-10">
                        <div className="text-center z-10 px-6">
                            <BookOpen size={48} className="mx-auto mb-4 text-purple-400 opacity-80" />
                            <h4 className="text-xl font-bold font-serif leading-tight mb-2 text-white">{book.title}</h4>
                            <span className="text-xs text-gray-400 uppercase tracking-widest">Juanjo García</span>
                        </div>
                        <div className="absolute inset-0 bg-purple-600/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="flex items-center gap-2 font-bold text-white">
                                Ver en Amazon <ExternalLink size={16} />
                            </span>
                        </div>
                     </div>
                  </a>
               ))}
            </div>
         </div>
      </section>

      <div id="skills" />

      {/* CONTACT SECTION */}
      <section id="contacto" className="py-24 bg-gradient-to-t from-black via-black/90 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
             <GlassCard className="p-8 md:p-12 border-purple-500/20 shadow-[0_0_50px_rgba(100,0,200,0.1)]">
                <div className="grid md:grid-cols-2 gap-12">
                   <div className="space-y-6">
                      <h2 className="text-3xl font-bold">Hablemos</h2>
                      <p className="text-gray-400">
                         Estoy siempre abierto a discutir nuevas oportunidades, ideas de producto o colaboraciones técnicas.
                      </p>
                      
                      <div className="space-y-4 pt-4">
                         <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                            <div className="p-3 bg-white/5 rounded-full"><Mail size={20} className="text-blue-400"/></div>
                            <span className="break-all">{personalInfo.email}</span>
                         </a>
                         <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                            <div className="p-3 bg-white/5 rounded-full"><Linkedin size={20} className="text-blue-400"/></div>
                            Juanjo García Manzano
                         </a>
                         <div className="flex items-start gap-4 text-gray-300">
                            <div className="p-3 bg-white/5 rounded-full shrink-0"><Globe size={20} className="text-blue-400"/></div>
                            <div className="space-y-1 text-sm pt-1">
                               <p><span className="text-white font-semibold">Español:</span> Nativo</p>
                               <p><span className="text-white font-semibold">Catalán:</span> Nativo</p>
                               <p><span className="text-white font-semibold">Inglés:</span> C1 (Avanzado)</p>
                               <p><span className="text-white font-semibold">Alemán:</span> A1 (Básico)</p>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Mock Contact Form */}
                   <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                      <div>
                         <label className="block text-xs font-mono text-gray-500 mb-1 ml-2">NOMBRE</label>
                         <input type="text" className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Recruiter / Empresa" />
                      </div>
                      <div>
                         <label className="block text-xs font-mono text-gray-500 mb-1 ml-2">MENSAJE</label>
                         <textarea rows="4" className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" placeholder="Hola Juanjo, me gustaría hablar sobre..." />
                      </div>
                      <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 py-3 rounded-full font-bold hover:shadow-[0_0_20px_rgba(124,58,237,0.3)] transition-all">
                         Enviar Mensaje
                      </button>
                   </form>
                </div>
             </GlassCard>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5 text-center text-gray-600 text-sm">
         <p className="font-medium text-gray-500">Impulsado por la pasión, definido por la perseverancia. Creando el futuro, línea a línea.</p>
         <p className="text-xs mt-2 text-gray-700">© {new Date().getFullYear()} Juanjo García Manzano</p>
      </footer>
    </div>
  );
}
