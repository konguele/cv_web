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
  Shuffle,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react';

// --- DATA ---
const languages = [
  { code: 'ca', label: 'CA', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Catalonia.svg', path: '/ca/' },
  { code: 'es', label: 'ES', flag: 'https://flagcdn.com/w40/es.png', path: '/es/' },
  { code: 'en', label: 'EN', flag: 'https://flagcdn.com/w40/gb.png', path: '/' },
  { code: 'ch', label: 'DE', flag: 'https://flagcdn.com/w40/ch.png', path: '/ch/' },
];

const carouselSourceImages = [
  "/images/carrusel1.jpg",
  "/images/carrusel2.jpg",
  "/images/carrusel3.jpg",
  "/images/carrusel4.jpg",
  "/images/carrusel5.png",
  "/images/carrusel6.jpg",
  "/images/carrusel7.jpg",
  "/images/carrusel8.jpg",
  "/images/carrusel9.jpg"
];

const personalInfo = {
  name: "Juan José García Manzano",
  role: "DevOps Engineer & Project Manager",
  location: "Zúric, Suïssa",
  email: "Juanjo.gmanzano@gmail.com",
  linkedin: "linkedin.com/in/juanjo-garcia-manzano",
  tagline: "Unint la solidesa de la infraestructura Linux amb la creativitat del desenvolupament de producte.",
  aboutShort: "Sóc un DevOps Engineer amb ànima d'emprenedor. Expert en automatització, Linux i Cloud, però també creador de videojocs i apps financeres.",
  aboutLong: "Amb més de 10 anys d'experiència en entorns crítics (Banca, Retail, Salut), he dominat l'art de mantenir sistemes robustos. No obstant això, la meva passió va més enllà del codi: em mou crear experiències. He desenvolupat 'Jabalí Espacial' per a mòbils i estic construint 'Bancfy', no només com una app de finances, sinó com una comunitat. Crec fermament que la tecnologia ha de servir per connectar i empoderar les persones.",
  hobbies: [
    {
      name: "Futbol",
      icon: <Award size={18} />,
      desc: "Més que un esport, ha estat la meva escola de disciplina. Federat des dels 6 anys (CEU Ciutat Meridiana, Santa Perpètua), vaig aprendre el valor del sacrifici i el treball en equip. Fins i tot a Suïssa (Urdorf), la pilota va ser el meu idioma universal. El futbol m'ha ensenyat a gestionar la derrota, a liderar sota pressió i a entendre que cap gol es marca sol."
    },
    {
      name: "Videojocs",
      icon: <Gamepad2 size={18} />,
      desc: "El meu gimnàs mental nocturn. Actualment competeixo a EA Sports FC 26 optimitzant el meu temps, però el meu historial va des de la narrativa immersiva de Spider-Man i Assassin's Creed fins a l'estratègia de Pokémon. Esperant amb ganes GTA VI. Els videojocs afinen els meus reflexos, la meva resolució de problemes i mantenen viva aquesta espurna de creativitat i sorpresa."
    },
    {
      name: "Llegir",
      icon: <BookOpen size={18} />,
      desc: "La meva biblioteca és el meu major tresor. Des de l'èpica de Tolkien i la saviesa de 'Hagakure' fins a la profunditat gràfica de 'The Dark Knight Rises' (signat per Miller). Llibres com 'Million Dollar Weekend' modelen la meva mentalitat emprenedora avui. Llegir és l'entrenament invisible que expandeix els meus horitzons i m'aporta la calma necessària per enfocar-me."
    },
    {
      name: "La meva Filla",
      icon: <Smile size={18} />,
      desc: "El 'projecte' més important de la meva vida. Jugar amb ella és tornar a descobrir el món amb ulls nous. Ella m'ensenya paciència infinita, curiositat pura i em recorda cada dia per què m'esforço. És la meva àncora a la realitat i la meva major motivació per construir un futur millor."
    },
    {
      name: "Cuinar",
      icon: <Utensils size={18} />,
      desc: "Alquímia per a l'ànima. Entre fogons trobo el meu flow. Des de perfeccionar la truita de patates fins a experimentar amb caça major suïssa (cérvol, senglar). Cuinar, igual que programar, requereix els ingredients correctes, precisió en els temps i molt d'afecte perquè el resultat sigui memorable."
    },
    {
      name: "Crear Apps",
      icon: <Code size={18} />,
      desc: "El motor que mai s'apaga. La meva ment és un formiguer constant d'idees buscant solucionar problemes reals. Gaudeixo de cada fase: des de la idea en un tovalló fins al desplegament en producció. Crear és la meva manera de deixar empremta i empoderar altres amb tecnologia útil i accessible."
    }
  ]
};

const experience = [
  {
    company: "Worldline Switzerland",
    role: "DevOps Engineer / Project Manager",
    period: "Oct 2024 - Present",
    logo: "/images/worldline.png",
    desc: "Owner d'Artifactory i Instant Score. Gestió E2E de projectes, automatització i migracions a Google Cloud.",
    details: "Com a Owner d'Artifactory (el cor digital on convergeix i es gestiona tot el desenvolupament tecnològic de la companyia) i de les solucions crítiques Instant Score / Online Watcher, lidero l'estratègia i estabilitat d'aquests sistemes. Gestió integral de projectes tècnics com migracions RHEL8/9. Administració de servidors Linux, automatització avançada amb Ansible (YAML), Bash i Python. Desplegament i gestió d'AWX i pipelines de CI/CD amb GitLab. Supervisió i execució de migracions a Google Cloud, incloent la creació de scripts en Terraform per desplegar nous models d'aplicacions.",
    tags: ["Product Owner", "Artifactory", "Google Cloud", "Ansible"],
    color: "bg-blue-600",
    stack: [
        { name: "Google Cloud (GCP)", desc: "Migració d'apps, Terraform i desplegament de models" },
        { name: "Artifactory", desc: "Owner. Gestió centralitzada d'artefactes i desenvolupament" },
        { name: "Instant Score", desc: "Owner. Gestió i manteniment de la solució" },
        { name: "BMC Remedy", desc: "Incidències, Change Requests i Gestió de problemes" },
        { name: "Jira", desc: "Creació i seguiment de tasques" },
        { name: "Confluence", desc: "Gestió documental i base de coneixement" },
        { name: "VMWare", desc: "Gestió d'infraestructura virtual (VMs)" },
        { name: "Putty / MobaXterm", desc: "Accés i gestió SSH a servidors Linux" },
        { name: "IntelliJ / VS Code", desc: "Gestió de codi i pipelines en GitLab" },
        { name: "RHEL 8 & 9", desc: "Administració avançada de servidors Linux" }
    ]
  },
  {
    company: "Six Group",
    role: "DevOps Engineer",
    period: "Maig 2021 - Set 2024",
    logo: "/images/six.jpg",
    desc: "Lideratge en migracions RHEL7 a RHEL8. Integració de Docker i OpenShift. Migració de servidors a Azure.",
    details: "Vaig demostrar sòlides habilitats de lideratge gestionant eficaçment projectes com la migració de RHEL7 a RHEL8, automatització de processos de pegats i integració de Docker per al desplegament d'aplicacions. Experiència en programació C++ i Bash, treballant amb Artifactory i BMC Remedy.",
    tags: ["OpenShift", "Docker", "Azure", "Bash"],
    color: "bg-red-600"
  },
  {
    company: "Burberry",
    role: "Linux Engineer",
    period: "Jul 2018 - Abr 2021",
    logo: "/images/burberry.avif",
    desc: "Administració de Linux (RedHat, SUSE). Scripting en Ansible i Bash. Backup amb Data Protector.",
    details: "Realització de tasques des de la instal·lació de servidors en Linux (Redhat, SUSE), configuració i creació de FS, muntatge de volums. Responsable de tasques de backup amb Data Protector. Creació d'especificacions, resolució d'incidències de software i hardware.",
    tags: ["Linux", "Ansible", "VMWare"],
    color: "bg-yellow-600"
  },
  {
    company: "Grifols S.A.",
    role: "Systems Administrator",
    period: "Nov 2014 - Jul 2018",
    logo: "/images/grifols.png",
    desc: "Administració bàsica de sistemes Unix, Linux i Windows. Gestió d'alertes HP Openview i backups.",
    details: "Gestió de l'administració bàsica de sistemes Unix, Linux i Windows, gestió d'alertes HP Openview, execució de backups amb Data Protector, revisió de Tablespaces Oracle. Creació d'usuaris en LDAP i OpenLDAP.",
    tags: ["Unix", "Windows", "Oracle", "LDAP"],
    color: "bg-blue-500"
  },
  {
    company: "Metrica / ITNow",
    role: "Linux Administrator",
    period: "Set 2014 - Nov 2014",
    logo: "/images/itnow.jpg",
    desc: "Administració de màquines Linux, scripting en Bash i Perl, monitorització amb Nagios.",
    details: "Gestió de l'administració de màquines Linux, creació de scripts en bash i perl, creació de regles de monitorització en HP Openview i Nagios.",
    tags: ["Linux", "Nagios", "Perl"],
    color: "bg-gray-600"
  },
  {
    company: "Hewlett Packard",
    role: "TIBCO Administrator",
    period: "Mar 2014 - Set 2014",
    logo: "/images/hp.png",
    desc: "Administració de màquines Linux per a TIBCO, scripting i regles de monitorització.",
    details: "Gestió de l'administració de màquines Linux per a TIBCO, creació de scripts en bash i perl, regles de monitorització en Tibco Hawk.",
    tags: ["TIBCO", "Linux", "Bash"],
    color: "bg-cyan-600"
  },
  {
    company: "Hewlett Packard",
    role: "Operation Team Leader",
    period: "Des 2010 - Oct 2013",
    logo: "/images/hp.png",
    desc: "Gestió d'equip, control d'execució de treballs en Control M i SAP.",
    details: "Gestió de persones dins de l'equip, control de la correcta execució del treball, obertura d'incidències, planificació i execució de treballs en Control M Enterprises i Mainframe.",
    tags: ["Team Lead", "SAP", "Control M"],
    color: "bg-cyan-600"
  }
];

const education = [
  {
    institution: "UOC (Universitat Oberta de Catalunya)",
    degree: "Enginyeria de Sistemes",
    period: "2012 - 2017",
    desc: "Fonaments de programació, gestió de xarxes i sistemes operatius."
  },
  {
    institution: "Santa-Pau Pifma",
    degree: "Grau Superior en Informàtica",
    period: "2006 - 2008",
    desc: "Formació tècnica superior en informàtica (ASI)."
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
    category: "Fintech App i Comunitat",
    icon: <TrendingUp className="w-8 h-8 text-emerald-400" />,
    description: "Més que una app de finances, és una experiència. Bancfy busca canviar la relació de les persones amb els seus diners mitjançant la gamificació i la comunitat. No venc un producte, construeixo un moviment.",
    status: "En desenvolupament",
    color: "from-emerald-900 to-green-900",
    links: [{ label: "Web Oficial", url: "https://www.bancfy.com/es" }]
  },
  {
    title: "Jabalí Espacial",
    category: "Mobile Game",
    icon: <Gamepad2 className="w-8 h-8 text-purple-400" />,
    description: "Un videojoc arcade desenvolupat íntegrament per mi. Disponible en plataformes mòbils. Un repte tècnic i creatiu que demostra la meva capacitat per portar un producte de 0 a 100.",
    status: "Publicat",
    color: "from-purple-900 to-indigo-900",
    links: [
      { label: "Android", url: "https://andro.io/app/jabaliespacial" },
      { label: "iOS", url: "https://apps.apple.com/us/app/space-warhog/id6468927508" }
    ]
  },
  {
    title: "@exitofracasando",
    category: "Creació de Contingut",
    icon: <Smartphone className="w-8 h-8 text-pink-400" />,
    description: "Compte de TikTok amb +10k seguidors. Un espai on vaig compartir aprenentatges i vaig connectar amb una audiència jove interessada en creixement i emprenedoria.",
    status: "10K+ Seguidors",
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
  "Lideratge d'Equips",
  "Gestió de Projectes",
  "Comunicació Efectiva",
  "Resolució de Conflictes",
  "Mentalitat de Creixement",
  "Adaptabilitat"
];

// --- HELPER COMPONENTS ---

// COMPONENTE DE OPTIMIZACIÓN: Carga diferida de secciones
const LazyLoadSection = ({ id, children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Usamos Intersection Observer para detectar cuando la sección se acerca al viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Dejar de observar una vez cargado
        }
      },
      { 
        rootMargin: '200px', // Cargar 200px antes de que entre en pantalla
        threshold: 0.1 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, []);

  return (
    <section id={id} ref={ref} className={`${className} transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {isVisible ? (
        children
      ) : (
        // Placeholder ligero mientras no es visible
        <div className="py-24 flex items-center justify-center">
          <div className="w-full max-w-md h-32 bg-white/5 animate-pulse rounded-3xl" />
        </div>
      )}
    </section>
  );
};

const SEOHead = () => {
  useEffect(() => {
    document.title = "Juan José García Manzano | DevOps Engineer & Project Manager";
    document.documentElement.lang = "ca";
    
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

    updateMeta('description', 'Portfoli de Juan José García Manzano. DevOps Engineer expert en Linux, Cloud (AWS/GCP), Automatització i creador de productes digitals com Bancfy.');
    updateMeta('keywords', 'DevOps, Linux, Project Manager, RHEL, Ansible, Cloud, Portfolio, Juanjo Garcia, Bancfy, Zurich, Engineer, Enginyer');
    updateMeta('author', 'Juan José García Manzano');
    updateMeta('robots', 'index, follow');

    updateLink('canonical', 'https://www.jjgarciacv.com/ca/');

    updateLink('alternate', 'https://www.jjgarciacv.com/es/', 'es');
    updateLink('alternate', 'https://www.jjgarciacv.com/', 'en');       
    updateLink('alternate', 'https://www.jjgarciacv.com/ca/', 'ca');     
    updateLink('alternate', 'https://www.jjgarciacv.com/ch/', 'de-CH');  
    updateLink('alternate', 'https://www.jjgarciacv.com/', 'x-default'); 

    updateMeta('og:type', 'profile', 'property');
    updateMeta('og:locale', 'ca_ES', 'property');
    updateMeta('og:url', 'https://www.jjgarciacv.com/ca/', 'property');
    updateMeta('og:title', 'Juan José García Manzano | DevOps & PM', 'property');
    updateMeta('og:description', 'Impulsant la innovació tecnològica des de Zúric. Expert en infraestructura crítica i desenvolupament de producte.', 'property');

    updateMeta('twitter:card', 'summary_large_image', 'property');
    updateMeta('twitter:title', 'Juan José García Manzano | DevOps & PM', 'property');
    updateMeta('twitter:description', 'Impulsant la innovació tecnològica des de Zúric. Expert en infraestructura crítica i desenvolupament de producte.', 'property');

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

  // Set Catalan as the current language for display
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
  
  // FORM STATE
  const [formStatus, setFormStatus] = useState("idle"); 

  useEffect(() => {
    // Scroll listener optimizado
    const handleScroll = () => {
        if (window.scrollY > 50 && !scrolled) setScrolled(true);
        if (window.scrollY <= 50 && scrolled) setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Aleatorizar imágenes una sola vez al cargar
    const shuffled = [...carouselSourceImages].sort(() => 0.5 - Math.random());
    setRandomImages(shuffled.slice(0, 4));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // Dependencias vacías para que solo ocurra al montar

  // Efecto separado para el bloqueo de scroll (UI lógica)
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus("submitting");
    
    const formData = new FormData(e.target);
    
    try {
        const response = await fetch("https://formspree.io/f/mvgjlzll", {
            method: "POST",
            body: formData,
            headers: { 'Accept': 'application/json' }
        });
        
        if (response.ok) {
            setFormStatus("success");
            e.target.reset(); 
            setTimeout(() => setFormStatus("idle"), 5000);
        } else {
            setFormStatus("error");
        }
    } catch (error) {
        setFormStatus("error");
    }
  };

  const visibleExperience = expandedExperience ? experience : experience.slice(0, 3);
  const menuItems = ['Sobre Mi', 'Experiència', 'Estudis', 'Projectes', 'Habilitats', 'Llibres', 'Contacte'];

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
                  href={`#${item.toLowerCase().replace(/ /g, '-').replace('è', 'e')}`}
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
                        href={`#${item.toLowerCase().replace(/ /g, '-').replace('è', 'e')}`}
                        className="text-2xl font-bold text-gray-300 hover:text-purple-400 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {item}
                    </a>
                ))}
             </div>
             <div className="mt-12 w-full px-12">
                <div className="h-px bg-white/10 w-full mb-8"></div>
                <p className="text-center text-gray-500 text-sm mb-4">Selecciona el teu idioma</p>
                <LanguageSelector mobile={true} />
             </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION - SIN LAZY LOAD (Debe ser inmediato) */}
      <header className="relative z-10 min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-300 text-sm mb-4 animate-fade-in-up">
              🚀 Disponible per a nous reptes
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              DevOps <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Engineer</span> <br />
              & Project Manager
            </h1>
            <p className="text-xl text-gray-400 max-w-lg mx-auto md:mx-0">
              {personalInfo.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contacte" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all transform hover:-translate-y-1 text-center">
                Contactar
              </a>
              <a href="/downloads/CV Juanjo.pdf" download className="px-8 py-3 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2 group text-center">
                <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                Descarregar CV
              </a>
            </div>
          </div>

          <div className="relative h-[400px] w-full flex items-center justify-center mt-8 md:mt-0">
             <div className="relative w-72 h-auto bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-[2.5rem] shadow-2xl flex flex-col items-center p-6 z-20 transform rotate-[-5deg] hover:rotate-0 transition-all duration-500 group">
                <div className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 mb-6 p-1 group-hover:scale-105 transition-transform">
                   <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center overflow-hidden">
                      <img src="/images/portada.jpg" alt="Juanjo" className="w-full h-full object-cover rounded-full" />
                   </div>
                </div>
                
                <h3 className="text-xl font-bold mb-2">Juan José García</h3>
                
                <div className="w-full flex flex-col gap-2 mb-6">
                   <div className="flex items-center justify-center gap-2 text-purple-400 text-xs font-medium bg-purple-500/10 py-1.5 px-3 rounded-full border border-purple-500/20">
                      <MapPin size={12} /> Zúric (5 anys)
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

      {/* ABOUT SECTION - WRAPPED IN LAZY LOAD */}
      <LazyLoadSection id="sobre-mi" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <SectionTitle>Sobre Mi</SectionTitle>
          
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
                            <BookOpen size={16} /> Aprenentatge continu
                        </div>
                        <div className="flex items-center gap-2 text-sm text-purple-300">
                            <Users size={16} /> Lideratge humà
                        </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setShowFullAbout(!showFullAbout)}
                    className="mt-4 flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    {showFullAbout ? 'Llegir menys' : 'Llegir més'}
                    {showFullAbout ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </GlassCard>

                {/* Hobbies Section */}
                <h3 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2">
                   <Heart className="text-red-500" size={20} /> Els meus Interessos
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
                      <Brain className="text-purple-500"/> Mindset i Habilitats Toves
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
                      <Cpu className="text-blue-500"/> Stack Tecnològic Principal
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
                <Shuffle size={20} className="text-purple-400"/> Galeria Aleatòria
             </h3>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {randomImages.map((imgSrc, idx) => (
                   <div key={idx} className="aspect-[3/4] rounded-[2rem] overflow-hidden border border-white/5 shadow-2xl group relative hover:border-purple-500/30 transition-all">
                      <img 
                        src={imgSrc} 
                        alt="Lifestyle Juanjo" 
                        loading="lazy" 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                   </div>
                ))}
             </div>
          </div>

        </div>
      </LazyLoadSection>

      {/* EXPERIENCE SECTION - WRAPPED IN LAZY LOAD */}
      <LazyLoadSection id="experiencia" className="py-24 bg-black/30 relative">
        <div className="container mx-auto px-6">
          <SectionTitle>Trajectòria Professional</SectionTitle>
          
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
                              <h4 className="text-xs font-bold text-purple-400 mb-3 uppercase tracking-wider">Eines i Tecnologies</h4>
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
                        {expandedExperience ? "Veure menys" : "Veure trajectòria completa"}
                    </span>
                    {expandedExperience ? <ChevronUp className="animate-bounce" /> : <ChevronDown className="animate-bounce" />}
                </button>
            </div>
          </div>
        </div>
      </LazyLoadSection>

      {/* EDUCATION SECTION - WRAPPED IN LAZY LOAD */}
      <LazyLoadSection id="estudis" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
           <SectionTitle>Estudis i Certificacions</SectionTitle>
           
           <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-6">
                 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6">
                    <GraduationCap className="text-purple-500" /> Formació Acadèmica
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
                    <Award className="text-blue-500" /> Certificacions
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
      </LazyLoadSection>

      {/* PROJECTS SECTION - WRAPPED IN LAZY LOAD */}
      <LazyLoadSection id="projectes" className="py-24 bg-black/30">
        <div className="container mx-auto px-6">
          <SectionTitle>Side Projects i Emprenedoria</SectionTitle>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
            La meva passió no es limita a l'oficina. M'encanta construir productes des de zero, generar comunitat i explorar noves tecnologies.
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
      </LazyLoadSection>

      {/* BOOKS SECTION - WRAPPED IN LAZY LOAD */}
      <LazyLoadSection id="llibres" className="py-24 relative z-10 overflow-hidden">
         <div className="container mx-auto px-6">
            <SectionTitle>Llibres Publicats</SectionTitle>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
               Compartir coneixement és una altra de les meves passions. Aquí pots trobar les meves últimes publicacions disponibles a Amazon.
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
                        <img src={book.image} alt={book.title} loading="lazy" className="w-full h-full object-cover opacity-30 blur-md scale-110 transition-transform duration-500 group-hover:scale-125" />
                        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 to-gray-900/60" />
                     </div>
                     
                     <div className="relative aspect-[2/3] bg-transparent rounded-[2rem] shadow-2xl transform transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-purple-500/20 border border-white/10 flex items-center justify-center overflow-hidden z-10">
                        <div className="text-center z-10 px-6">
                            <BookOpen size={48} className="mx-auto mb-4 text-purple-400 opacity-80" />
                            <h4 className="text-xl font-bold font-serif leading-tight mb-2 text-white">{book.title}</h4>
                            <span className="text-xs text-gray-400 uppercase tracking-widest">Juanjo García</span>
                        </div>
                        <div className="absolute inset-0 bg-purple-600/90 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <span className="flex items-center gap-2 font-bold text-white">
                                Veure a Amazon <ExternalLink size={16} />
                            </span>
                        </div>
                     </div>
                  </a>
               ))}
            </div>
         </div>
      </LazyLoadSection>

      <div id="skills" />

      {/* CONTACT SECTION - WRAPPED IN LAZY LOAD */}
      <LazyLoadSection id="contacte" className="py-24 bg-gradient-to-t from-black via-black/90 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
             <GlassCard className="p-8 md:p-12 border-purple-500/20 shadow-[0_0_50px_rgba(100,0,200,0.1)]">
                <div className="grid md:grid-cols-2 gap-12">
                   <div className="space-y-6">
                      <h2 className="text-3xl font-bold">Parlem-ne</h2>
                      <p className="text-gray-400">
                         Estic sempre obert a discutir noves oportunitats, idees de producte o col·laboracions tècniques.
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
                               <p><span className="text-white font-semibold">Castellà:</span> Natiu</p>
                               <p><span className="text-white font-semibold">Català:</span> Natiu</p>
                               <p><span className="text-white font-semibold">Anglès:</span> C1 (Avançat)</p>
                               <p><span className="text-white font-semibold">Alemany:</span> A1 (Bàsic)</p>
                            </div>
                         </div>
                      </div>
                   </div>

                   {/* Contact Form Updated */}
                   <form className="space-y-4" onSubmit={handleSubmit}>
                      <div>
                         <label htmlFor="name" className="block text-xs font-mono text-gray-500 mb-1 ml-2">NOM</label>
                         <input 
                            id="name"
                            name="name"
                            required
                            type="text" 
                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" 
                            placeholder="Recruiter / Empresa" 
                         />
                      </div>
                      
                      <div>
                         <label htmlFor="email" className="block text-xs font-mono text-gray-500 mb-1 ml-2">EL TEU EMAIL</label>
                         <input 
                            id="email"
                            name="email"
                            required
                            type="email" 
                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" 
                            placeholder="tu@email.com" 
                         />
                      </div>

                      <div>
                         <label htmlFor="message" className="block text-xs font-mono text-gray-500 mb-1 ml-2">MISSATGE</label>
                         <textarea 
                            id="message"
                            name="message"
                            required
                            rows="4" 
                            className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" 
                            placeholder="Hola Juanjo, m'agradaria parlar sobre..." 
                         />
                      </div>
                      
                      <button 
                        type="submit" 
                        disabled={formStatus === 'submitting' || formStatus === 'success'}
                        className={`w-full py-3 rounded-full font-bold transition-all flex items-center justify-center gap-2
                            ${formStatus === 'success' ? 'bg-green-600 text-white cursor-default' : ''}
                            ${formStatus === 'error' ? 'bg-red-600 text-white' : ''}
                            ${formStatus === 'submitting' ? 'bg-gray-600 cursor-wait' : ''}
                            ${formStatus === 'idle' ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:shadow-[0_0_20px_rgba(124,58,237,0.3)]' : ''}
                        `}
                      >
                         {formStatus === 'idle' && 'Enviar Missatge'}
                         {formStatus === 'submitting' && <><Loader2 className="animate-spin" size={20} /> Enviant...</>}
                         {formStatus === 'success' && <><CheckCircle size={20} /> Missatge Enviat!</>}
                         {formStatus === 'error' && <><AlertCircle size={20} /> Error en enviar. Reintentar.</>}
                      </button>
                   </form>
                </div>
             </GlassCard>
          </div>
        </div>
      </LazyLoadSection>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5 text-center text-gray-600 text-sm">
         <p className="font-medium text-gray-500">Impulsat per la passió, definit per la perseverança. Creant el futur, línia a línia.</p>
         <p className="text-xs mt-2 text-gray-700">© {new Date().getFullYear()} Juan José García Manzano</p>
      </footer>
    </div>
  );
}