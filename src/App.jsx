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

// --- CONFIGURACIÓN DE IDIOMAS Y BANDERAS ---
const languages = [
  { code: 'en', label: 'EN', flag: 'https://flagcdn.com/w40/gb.png', path: '/' },
  { code: 'es', label: 'ES', flag: 'https://flagcdn.com/w40/es.png', path: '/es/' },
  { code: 'ca', label: 'CA', flag: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Catalonia.svg', path: '/ca/' },
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

// --- DATOS MULTIDIOMA ---

const DATA = {
  // === ESPAÑOL ===
  es: {
    menu: ['Sobre Mí', 'Experiencia', 'Estudios', 'Proyectos', 'Skills', 'Libros', 'Contacto'],
    ui: {
      available: "🚀 Disponible para nuevos retos",
      contactBtn: "Contactar",
      downloadCv: "Descargar CV",
      readMore: "Leer más",
      readLess: "Leer menos",
      showFullExp: "Ver trayectoria completa",
      showLessExp: "Ver menos",
      randomGallery: "Galería Aleatoria",
      techStack: "Herramientas & Tecnologías",
      form: {
        name: "NOMBRE",
        namePh: "Recruiter / Empresa",
        email: "TU EMAIL",
        emailPh: "tu@email.com",
        msg: "MENSAJE",
        msgPh: "Hola Juanjo, me gustaría hablar sobre...",
        send: "Enviar Mensaje",
        sending: "Enviando...",
        sent: "¡Mensaje Enviado!",
        error: "Error al enviar. Reintentar."
      },
      footer: "Impulsado por la pasión, definido por la perseverancia. Creando el futuro, línea a línea."
    },
    personalInfo: {
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
          iconName: "Award",
          desc: "Más que un deporte, ha sido mi escuela de disciplina. Federado desde los 6 años (CEU Ciutat Meridiana, Santa Perpetua), aprendí el valor del sacrificio y el trabajo en equipo. Incluso en Suiza (Urdorf), el balón fue mi idioma universal. El fútbol me enseñó a gestionar la derrota, a liderar bajo presión y a entender que ningún gol se marca solo."
        },
        {
          name: "Videojuegos",
          iconName: "Gamepad2",
          desc: "Mi gimnasio mental nocturno. Actualmente compito en EA Sports FC 26 optimizando mi tiempo, pero mi historial va desde la narrativa inmersiva de Spider-Man y Assassin's Creed hasta la estrategia de Pokémon. Esperando con ansias GTA VI. Los videojuegos afinan mis reflejos, mi resolución de problemas y mantienen viva esa chispa de creatividad y asombro."
        },
        {
          name: "Leer",
          iconName: "BookOpen",
          desc: "Mi biblioteca es mi mayor tesoro. Desde la épica de Tolkien y la sabiduría de 'Hagakure' hasta la profundidad gráfica de 'The Dark Knight Rises' (firmado por Miller). Libros como 'Million Dollar Weekend' moldean mi mentalidad emprendedora hoy. Leer es el entrenamiento invisible que expande mis horizontes y me aporta la calma necesaria para enfocarme."
        },
        {
          name: "Mi Hija",
          iconName: "Smile",
          desc: "El 'proyecto' más importante de mi vida. Jugar con ella es volver a descubrir el mundo con ojos nuevos. Ella me enseña paciencia infinita, curiosidad pura y me recuerda cada día por qué me esfuerzo. Es mi ancla a la realidad y mi mayor motivación para construir un futuro mejor."
        },
        {
          name: "Cocinar",
          iconName: "Utensils",
          desc: "Alquimia para el alma. Entre fogones encuentro mi flow. Desde perfeccionar la tortilla de patatas hasta experimentar con caza mayor suiza (ciervo, jabalí). Cocinar, al igual que programar, requiere los ingredientes correctos, precisión en los tiempos y mucho cariño para que el resultado sea memorable."
        },
        {
          name: "Crear Apps",
          iconName: "Code",
          desc: "El motor que nunca se apaga. Mi mente es un hervidero constante de ideas buscando solucionar problemas reales. Disfruto cada fase: desde la idea en una servilleta hasta el despliegue en producción. Crear es mi forma de dejar huella y empoderar a otros con tecnología útil y accesible."
        }
      ]
    },
    experience: [
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
    ],
    education: [
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
    ],
    certifications: [
      "RHCSA (RHEL9) (2025)",
      "DevOps on AWS (2024)",
      "AWS Fundamentals (2024)",
      "CPA - C++ (2023)",
      "LPIC 2 (2014)",
      "ITIL Foundation (2013)",
      "LPIC 1 (2013)"
    ],
    projects: [
      {
        title: "Bancfy",
        category: "Fintech App & Comunidad",
        iconName: "TrendingUp",
        description: "Más que una app de finanzas, es una experiencia. Bancfy busca cambiar la relación de las personas con su dinero mediante la gamificación y la comunidad. No vendo un producto, construyo un movimiento.",
        status: "En desarrollo",
        color: "from-emerald-900 to-green-900",
        links: [{ label: "Web Oficial", url: "https://www.bancfy.com/es" }]
      },
      {
        title: "Jabalí Espacial",
        category: "Mobile Game",
        iconName: "Gamepad2",
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
        iconName: "Smartphone",
        description: "Cuenta de TikTok con +10k seguidores. Un espacio donde compartí aprendizajes y conecté con una audiencia joven interesada en crecimiento y emprendimiento.",
        status: "10K+ Seguidores",
        color: "from-pink-900 to-rose-900",
        links: [{ label: "TikTok", url: "https://www.tiktok.com/@exitofracasando" }]
      }
    ],
    books: [
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
    ],
    techSkills: [
      { name: "Linux / RHEL", level: 95 },
      { name: "Ansible / Automation", level: 90 },
      { name: "Docker / Kubernetes", level: 85 },
      { name: "Cloud (GCP/AWS)", level: 85 },
      { name: "Terraform / IaC", level: 85 },
      { name: "CI/CD (GitLab/Jenkins)", level: 85 }
    ],
    softSkills: [
      "Liderazgo de Equipos",
      "Gestión de Proyectos",
      "Comunicación Efectiva",
      "Resolución de Conflictos",
      "Mentalidad de Crecimiento",
      "Adaptabilidad"
    ],
    sectionTitles: {
      about: "Sobre Mí",
      experience: "Trayectoria Profesional",
      education: "Estudios & Certificaciones",
      projects: "Side Projects & Emprendimiento",
      books: "Libros Publicados",
      contact: "Hablemos"
    }
  },

  // === ENGLISH ===
  en: {
    menu: ['About Me', 'Experience', 'Education', 'Projects', 'Skills', 'Books', 'Contact'],
    ui: {
      available: "🚀 Available for new challenges",
      contactBtn: "Contact Me",
      downloadCv: "Download CV",
      readMore: "Read more",
      readLess: "Read less",
      showFullExp: "See Full Career Path",
      showLessExp: "See Less",
      randomGallery: "Random Gallery",
      techStack: "Tools & Technologies",
      form: {
        name: "NAME",
        namePh: "Recruiter / Company",
        email: "YOUR EMAIL",
        emailPh: "you@email.com",
        msg: "MESSAGE",
        msgPh: "Hi Juanjo, I'd like to talk about...",
        send: "Send Message",
        sending: "Sending...",
        sent: "Message Sent!",
        error: "Error sending. Retry."
      },
      footer: "Driven by passion, defined by perseverance. Creating the future, line by line."
    },
    personalInfo: {
      name: "Juan José García Manzano",
      role: "DevOps Engineer & Project Manager",
      location: "Zurich, Switzerland",
      email: "Juanjo.gmanzano@gmail.com",
      linkedin: "linkedin.com/in/juanjo-garcia-manzano",
      tagline: "Merging the robustness of Linux infrastructure with the creativity of product development.",
      aboutShort: "I am a DevOps Engineer with an entrepreneurial soul. Expert in automation, Linux, and Cloud, but also a creator of video games and financial apps.",
      aboutLong: "With over 10 years of experience in critical environments (Banking, Retail, Healthcare), I have mastered the art of maintaining robust systems. However, my passion goes beyond code: I am driven by creating experiences. I developed 'Space Warhog' for mobile and am building 'Bancfy', not just as a finance app, but as a community. I firmly believe that technology should serve to connect and empower people.",
      hobbies: [
        {
          name: "Football",
          iconName: "Award",
          desc: "More than a sport, it has been my school of discipline. Federated since age 6 (CEU Ciutat Meridiana, Santa Perpetua), I learned the value of sacrifice and teamwork. Even in Switzerland (Urdorf), the ball was my universal language. Football taught me to manage defeat, lead under pressure, and understand that no goal is scored alone."
        },
        {
          name: "Video Games",
          iconName: "Gamepad2",
          desc: "My nightly mental gym. Currently competing in EA Sports FC 26 optimizing my time, but my history ranges from the immersive narrative of Spider-Man and Assassin's Creed to the strategy of Pokémon. Eagerly awaiting GTA VI. Video games refine my reflexes, problem-solving skills, and keep that spark of creativity and wonder alive."
        },
        {
          name: "Reading",
          iconName: "BookOpen",
          desc: "My library is my greatest treasure. From Tolkien's epic and the wisdom of 'Hagakure' to the graphic depth of 'The Dark Knight Rises' (signed by Miller). Books like 'Million Dollar Weekend' shape my entrepreneurial mindset today. Reading is the invisible training that expands my horizons and brings me the calm needed to focus."
        },
        {
          name: "My Daughter",
          iconName: "Smile",
          desc: "The most important 'project' of my life. Playing with her is rediscovering the world with fresh eyes. She teaches me infinite patience, pure curiosity, and reminds me every day why I strive. She is my anchor to reality and my greatest motivation to build a better future."
        },
        {
          name: "Cooking",
          iconName: "Utensils",
          desc: "Alchemy for the soul. Between stoves, I find my flow. From perfecting the Spanish potato omelet to experimenting with Swiss big game (deer, wild boar). Cooking, like programming, requires the right ingredients, precise timing, and a lot of care for the result to be memorable."
        },
        {
          name: "Creating Apps",
          iconName: "Code",
          desc: "The engine that never turns off. My mind is a constant hive of ideas looking to solve real problems. I enjoy every phase: from the idea on a napkin to deployment in production. Creating is my way of leaving a mark and empowering others with useful and accessible technology."
        }
      ]
    },
    experience: [
      {
        company: "Worldline Switzerland",
        role: "DevOps Engineer / Project Manager",
        period: "Oct 2024 - Present",
        logo: "/images/worldline.png",
        desc: "Owner of Artifactory and Instant Score. E2E project management, automation, and migrations to Google Cloud.",
        details: "As Owner of Artifactory (the digital heart where all the company's technological development converges and is managed) and the critical solutions Instant Score / Online Watcher, I lead the strategy and stability of these systems. Integral management of technical projects such as RHEL8/9 migrations. Linux server administration, advanced automation with Ansible (YAML), Bash, and Python. Deployment and management of AWX and CI/CD pipelines with GitLab. Supervision and execution of migrations to Google Cloud, including creating Terraform scripts to deploy new application models.",
        tags: ["Product Owner", "Artifactory", "Google Cloud", "Ansible"],
        color: "bg-blue-600",
        stack: [
            { name: "Google Cloud (GCP)", desc: "App migration, Terraform, and model deployment" },
            { name: "Artifactory", desc: "Owner. Centralized artifact and development management" },
            { name: "Instant Score", desc: "Owner. Solution management and maintenance" },
            { name: "BMC Remedy", desc: "Incidents, Change Requests, and Problem Management" },
            { name: "Jira", desc: "Task creation and tracking" },
            { name: "Confluence", desc: "Document management and knowledge base" },
            { name: "VMWare", desc: "Virtual infrastructure management (VMs)" },
            { name: "Putty / MobaXterm", desc: "SSH access and management for Linux servers" },
            { name: "IntelliJ / VS Code", desc: "Code management and GitLab pipelines" },
            { name: "RHEL 8 & 9", desc: "Advanced Linux server administration" }
        ]
      },
      {
        company: "Six Group",
        role: "DevOps Engineer",
        period: "May 2021 - Sep 2024",
        logo: "/images/six.jpg",
        desc: "Leadership in RHEL7 to RHEL8 migrations. Docker and OpenShift integration. Server migration to Azure.",
        details: "Demonstrated solid leadership skills effectively managing projects such as RHEL7 to RHEL8 migration, patch process automation, and Docker integration for application deployment. Experience in C++ and Bash programming, working with Artifactory and BMC Remedy.",
        tags: ["OpenShift", "Docker", "Azure", "Bash"],
        color: "bg-red-600"
      },
      {
        company: "Burberry",
        role: "Linux Engineer",
        period: "Jul 2018 - Apr 2021",
        logo: "/images/burberry.avif",
        desc: "Linux Administration (RedHat, SUSE). Scripting in Ansible and Bash. Backup with Data Protector.",
        details: "Performed tasks ranging from Linux server installation (Redhat, SUSE), configuration and FS creation, volume mounting. Responsible for backup tasks with Data Protector. Creation of specifications, resolution of software and hardware incidents.",
        tags: ["Linux", "Ansible", "VMWare"],
        color: "bg-yellow-600"
      },
      {
        company: "Grifols S.A.",
        role: "Systems Administrator",
        period: "Nov 2014 - Jul 2018",
        logo: "/images/grifols.png",
        desc: "Basic administration of Unix, Linux, and Windows systems. HP Openview alert management and backups.",
        details: "Managed basic administration of Unix, Linux, and Windows systems, HP Openview alert management, execution of backups with Data Protector, Oracle Tablespaces review. User creation in LDAP and OpenLDAP.",
        tags: ["Unix", "Windows", "Oracle", "LDAP"],
        color: "bg-blue-500"
      },
      {
        company: "Metrica / ITNow",
        role: "Linux Administrator",
        period: "Sep 2014 - Nov 2014",
        logo: "/images/itnow.jpg",
        desc: "Linux machine administration, scripting in Bash and Perl, monitoring with Nagios.",
        details: "Managed Linux machine administration, created scripts in bash and perl, created monitoring rules in HP Openview and Nagios.",
        tags: ["Linux", "Nagios", "Perl"],
        color: "bg-gray-600"
      },
      {
        company: "Hewlett Packard",
        role: "TIBCO Administrator",
        period: "Mar 2014 - Sep 2014",
        logo: "/images/hp.png",
        desc: "Linux machine administration for TIBCO, scripting, and monitoring rules.",
        details: "Managed Linux machine administration for TIBCO, created scripts in bash and perl, monitoring rules in Tibco Hawk.",
        tags: ["TIBCO", "Linux", "Bash"],
        color: "bg-cyan-600"
      },
      {
        company: "Hewlett Packard",
        role: "Operation Team Leader",
        period: "Dic 2010 - Oct 2013",
        logo: "/images/hp.png",
        desc: "Team management, job execution control in Control M and SAP.",
        details: "Managed people within the team, controlled correct job execution, opened incidents, planned and executed jobs in Control M Enterprises and Mainframe.",
        tags: ["Team Lead", "SAP", "Control M"],
        color: "bg-cyan-600"
      }
    ],
    education: [
      {
        institution: "UOC (Universitat Oberta de Catalunya)",
        degree: "Systems Engineering",
        period: "2012 - 2017",
        desc: "Programming fundamentals, network management, and operating systems."
      },
      {
        institution: "Santa-Pau Pifma",
        degree: "High-Level Technician degree in IT",
        period: "2006 - 2008",
        desc: "Higher technical education in computer science (ASI)."
      }
    ],
    certifications: [
      "RHCSA (RHEL9) (2025)",
      "DevOps on AWS (2024)",
      "AWS Fundamentals (2024)",
      "CPA - C++ (2023)",
      "LPIC 2 (2014)",
      "ITIL Foundation (2013)",
      "LPIC 1 (2013)"
    ],
    projects: [
      {
        title: "Bancfy",
        category: "Fintech App & Community",
        iconName: "TrendingUp",
        description: "More than a finance app, it's an experience. Bancfy seeks to change people's relationship with their money through gamification and community. I don't sell a product, I build a movement.",
        status: "In Development",
        color: "from-emerald-900 to-green-900",
        links: [{ label: "Official Web", url: "https://www.bancfy.com/es" }]
      },
      {
        title: "Space Warhog",
        category: "Mobile Game",
        iconName: "Gamepad2",
        description: "An arcade video game developed entirely by me. Available on mobile platforms. A technical and creative challenge that demonstrates my ability to take a product from 0 to 100.",
        status: "Published",
        color: "from-purple-900 to-indigo-900",
        links: [
          { label: "Android", url: "https://andro.io/app/jabaliespacial" },
          { label: "iOS", url: "https://apps.apple.com/us/app/space-warhog/id6468927508" }
        ]
      },
      {
        title: "@exitofracasando",
        category: "Content Creation",
        iconName: "Smartphone",
        description: "TikTok account with +10k followers. A space where I shared learnings and connected with a young audience interested in growth and entrepreneurship.",
        status: "10K+ Followers",
        color: "from-pink-900 to-rose-900",
        links: [{ label: "TikTok", url: "https://www.tiktok.com/@exitofracasando" }]
      }
    ],
    books: [
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
    ],
    techSkills: [
      { name: "Linux / RHEL", level: 95 },
      { name: "Ansible / Automation", level: 90 },
      { name: "Docker / Kubernetes", level: 85 },
      { name: "Cloud (GCP/AWS)", level: 85 },
      { name: "Terraform / IaC", level: 85 },
      { name: "CI/CD (GitLab/Jenkins)", level: 85 }
    ],
    softSkills: [
      "Team Leadership",
      "Project Management",
      "Effective Communication",
      "Conflict Resolution",
      "Growth Mindset",
      "Adaptability"
    ],
    sectionTitles: {
      about: "About Me",
      experience: "Career Path",
      education: "Education & Certifications",
      projects: "Side Projects & Entrepreneurship",
      books: "Published Books",
      contact: "Let's Talk"
    }
  },

  // === CATALÀ (CATALAN) ===
  ca: {
    menu: ['Sobre Mi', 'Experiència', 'Estudis', 'Projectes', 'Skills', 'Llibres', 'Contacte'],
    ui: {
      available: "🚀 Disponible per a nous reptes",
      contactBtn: "Contactar",
      downloadCv: "Descarregar CV",
      readMore: "Llegir més",
      readLess: "Llegir menys",
      showFullExp: "Veure trajectòria completa",
      showLessExp: "Veure menys",
      randomGallery: "Galeria Aleatòria",
      techStack: "Eines i Tecnologies",
      form: {
        name: "NOM",
        namePh: "Recruiter / Empresa",
        email: "EL TEU EMAIL",
        emailPh: "tu@email.com",
        msg: "MISSATGE",
        msgPh: "Hola Juanjo, m'agradaria parlar sobre...",
        send: "Enviar Missatge",
        sending: "Enviant...",
        sent: "Missatge Enviat!",
        error: "Error en enviar. Reintentar."
      },
      footer: "Impulsat per la passió, definit per la perseverança. Creant el futur, línia a línia."
    },
    personalInfo: {
      name: "Juan José García Manzano",
      role: "DevOps Engineer & Project Manager",
      location: "Zürich, Suïssa",
      email: "Juanjo.gmanzano@gmail.com",
      linkedin: "linkedin.com/in/juanjo-garcia-manzano",
      tagline: "Unint la solidesa de la infraestructura Linux amb la creativitat del desenvolupament de producte.",
      aboutShort: "Soc un DevOps Engineer amb ànima d'emprenedor. Expert en automatització, Linux i Cloud, però també creador de videojocs i apps financeres.",
      aboutLong: "Amb més de 10 anys d'experiència en entorns crítics (Banca, Retail, Salut), he dominat l'art de mantenir sistemes robustos. No obstant això, la meva passió va més enllà del codi: em mou crear experiències. He desenvolupat 'Jabalí Espacial' per a mòbils i estic construint 'Bancfy', no només com una app de finances, sinó com una comunitat. Crec fermament que la tecnologia ha de servir per connectar i empoderar les persones.",
      hobbies: [
        {
          name: "Futbol",
          iconName: "Award",
          desc: "Més que un esport, ha estat la meva escola de disciplina. Federat des dels 6 anys (CEU Ciutat Meridiana, Santa Perpètua), vaig aprendre el valor del sacrifici i el treball en equip. Fins i tot a Suïssa (Urdorf), la pilota va ser el meu idioma universal. El futbol em va ensenyar a gestionar la derrota, a liderar sota pressió i a entendre que cap gol es marca sol."
        },
        {
          name: "Videojocs",
          iconName: "Gamepad2",
          desc: "El meu gimnàs mental nocturn. Actualment competeixo en EA Sports FC 26 optimitzant el meu temps, però el meu historial va des de la narrativa immersiva de Spider-Man i Assassin's Creed fins a l'estratègia de Pokémon. Esperant amb ganes GTA VI. Els videojocs afinen els meus reflexos, la meva resolució de problemes i mantenen viva aquesta espurna de creativitat i sorpresa."
        },
        {
          name: "Llegir",
          iconName: "BookOpen",
          desc: "La meva biblioteca és el meu tresor més gran. Des de l'èpica de Tolkien i la saviesa de 'Hagakure' fins a la profunditat gràfica de 'The Dark Knight Rises' (signat per Miller). Llibres com 'Million Dollar Weekend' modelen la meva mentalitat emprenedora avui. Llegir és l'entrenament invisible que expandeix els meus horitzons i m'aporta la calma necessària per enfocar-me."
        },
        {
          name: "La meva Filla",
          iconName: "Smile",
          desc: "El 'projecte' més important de la meva vida. Jugar amb ella és tornar a descobrir el món amb ulls nous. Ella m'ensenya paciència infinita, curiositat pura i em recorda cada dia per què m'esforço. És la meva àncora a la realitat i la meva motivació més gran per construir un futur millor."
        },
        {
          name: "Cuinar",
          iconName: "Utensils",
          desc: "Alquímia per a l'ànima. Entre fogons trobo el meu flow. Des de perfeccionar la truita de patates fins a experimentar amb caça major suïssa (cérvol, senglar). Cuinar, igual que programar, requereix els ingredients correctes, precisió en els temps i molt d'amor perquè el resultat sigui memorable."
        },
        {
          name: "Crear Apps",
          iconName: "Code",
          desc: "El motor que mai s'apaga. La meva ment és un formiguer constant d'idees buscant solucionar problemes reals. Gaudeixo de cada fase: des de la idea en un tovalló fins al desplegament en producció. Crear és la meva forma de deixar empremta i empoderar els altres amb tecnologia útil i accessible."
        }
      ]
    },
    experience: [
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
            { name: "IntelliJ / VS Code", desc: "Gestió de codi i pipelines a GitLab" },
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
        desc: "Administració de Linux (RedHat, SUSE). Scripting en Ansible i Bash. Còpia de seguretat amb Data Protector.",
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
        details: "Gestió de l'administració bàsica de sistemes Unix, Linux i Windows, gestió d'alertes HP Openview, execució de backups amb Data Protector, revisió de Tablespaces Oracle. Creació d'usuaris a LDAP i OpenLDAP.",
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
    ],
    education: [
      {
        institution: "UOC (Universitat Oberta de Catalunya)",
        degree: "Enginyeria de Sistemes",
        period: "2012 - 2017",
        desc: "Fonaments de programació, gestió de xarxes i sistemes operatius."
      },
      {
        institution: "Santa-Pau Pifma",
        degree: "Tècnic Superior en ASI",
        period: "2006 - 2008",
        desc: "Formació tècnica superior en informàtica."
      }
    ],
    certifications: [
      "RHCSA (RHEL9) (2025)",
      "DevOps on AWS (2024)",
      "AWS Fundamentals (2024)",
      "CPA - C++ (2023)",
      "LPIC 2 (2014)",
      "ITIL Foundation (2013)",
      "LPIC 1 (2013)"
    ],
    projects: [
      {
        title: "Bancfy",
        category: "Fintech App & Comunitat",
        iconName: "TrendingUp",
        description: "Més que una app de finances, és una experiència. Bancfy busca canviar la relació de les persones amb els seus diners mitjançant la gamificació i la comunitat. No venc un producte, construeixo un moviment.",
        status: "En desenvolupament",
        color: "from-emerald-900 to-green-900",
        links: [{ label: "Web Oficial", url: "https://www.bancfy.com/es" }]
      },
      {
        title: "Jabalí Espacial",
        category: "Mobile Game",
        iconName: "Gamepad2",
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
        category: "Content Creation",
        iconName: "Smartphone",
        description: "Compte de TikTok amb +10k seguidors. Un espai on vaig compartir aprenentatges i vaig connectar amb una audiència jove interessada en creixement i emprenedoria.",
        status: "10K+ Seguidors",
        color: "from-pink-900 to-rose-900",
        links: [{ label: "TikTok", url: "https://www.tiktok.com/@exitofracasando" }]
      }
    ],
    books: [
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
    ],
    techSkills: [
      { name: "Linux / RHEL", level: 95 },
      { name: "Ansible / Automation", level: 90 },
      { name: "Docker / Kubernetes", level: 85 },
      { name: "Cloud (GCP/AWS)", level: 85 },
      { name: "Terraform / IaC", level: 85 },
      { name: "CI/CD (GitLab/Jenkins)", level: 85 }
    ],
    softSkills: [
      "Lideratge d'Equips",
      "Gestió de Projectes",
      "Comunicació Efectiva",
      "Resolució de Conflictes",
      "Mentalitat de Creixement",
      "Adaptabilitat"
    ],
    sectionTitles: {
      about: "Sobre Mi",
      experience: "Trajectòria Professional",
      education: "Estudis & Certificacions",
      projects: "Side Projects & Emprenedoria",
      books: "Llibres Publicats",
      contact: "Parlem"
    }
  },

  // === DEUTSCH (GERMAN) ===
  ch: {
    menu: ['Über Mich', 'Erfahrung', 'Ausbildung', 'Projekte', 'Skills', 'Bücher', 'Kontakt'],
    ui: {
      available: "🚀 Verfügbar für neue Herausforderungen",
      contactBtn: "Kontaktieren",
      downloadCv: "CV Herunterladen",
      readMore: "Mehr lesen",
      readLess: "Weniger lesen",
      showFullExp: "Vollständigen Werdegang ansehen",
      showLessExp: "Weniger anzeigen",
      randomGallery: "Zufällige Galerie",
      techStack: "Tools & Technologien",
      form: {
        name: "NAME",
        namePh: "Recruiter / Firma",
        email: "IHRE E-MAIL",
        emailPh: "ihre@email.com",
        msg: "NACHRICHT",
        msgPh: "Hallo Juanjo, ich würde gerne über...",
        send: "Nachricht Senden",
        sending: "Senden...",
        sent: "Nachricht Gesendet!",
        error: "Fehler beim Senden. Wiederholen."
      },
      footer: "Angetrieben von Leidenschaft, definiert durch Ausdauer. Die Zukunft gestalten, Zeile für Zeile."
    },
    personalInfo: {
      name: "Juan José García Manzano",
      role: "DevOps Engineer & Project Manager",
      location: "Zürich, Schweiz",
      email: "Juanjo.gmanzano@gmail.com",
      linkedin: "linkedin.com/in/juanjo-garcia-manzano",
      tagline: "Die Robustheit von Linux-Infrastruktur mit der Kreativität der Produktentwicklung verbinden.",
      aboutShort: "Ich bin ein DevOps Engineer mit einer unternehmerischen Seele. Experte für Automatisierung, Linux und Cloud, aber auch Schöpfer von Videospielen und Finanz-Apps.",
      aboutLong: "Mit mehr als 10 Jahren Erfahrung in kritischen Umgebungen (Banken, Einzelhandel, Gesundheitswesen) beherrsche ich die Kunst, robuste Systeme zu warten. Meine Leidenschaft geht jedoch über den Code hinaus: Mich treibt es an, Erlebnisse zu schaffen. Ich habe 'Space Warhog' für Mobilgeräte entwickelt und baue 'Bancfy' auf, nicht nur als Finanz-App, sondern als Community. Ich glaube fest daran, dass Technologie dazu dienen sollte, Menschen zu verbinden und zu befähigen.",
      hobbies: [
        {
          name: "Fußball",
          iconName: "Award",
          desc: "Mehr als ein Sport, es war meine Schule der Disziplin. Seit meinem 6. Lebensjahr im Verein (CEU Ciutat Meridiana, Santa Perpetua), habe ich den Wert von Opferbereitschaft und Teamarbeit gelernt. Selbst in der Schweiz (Urdorf) war der Ball meine universelle Sprache. Fußball lehrte mich, mit Niederlagen umzugehen, unter Druck zu führen und zu verstehen, dass kein Tor alleine geschossen wird."
        },
        {
          name: "Videospiele",
          iconName: "Gamepad2",
          desc: "Mein nächtliches mentales Fitnessstudio. Derzeit trete ich in EA Sports FC 26 an und optimiere meine Zeit, aber meine Geschichte reicht von der immersiven Erzählung von Spider-Man und Assassin's Creed bis zur Strategie von Pokémon. Ich warte gespannt auf GTA VI. Videospiele schärfen meine Reflexe, meine Problemlösungskompetenz und halten den Funken der Kreativität und des Staunens am Leben."
        },
        {
          name: "Lesen",
          iconName: "BookOpen",
          desc: "Meine Bibliothek ist mein größter Schatz. Von Tolkiens Epos und der Weisheit von 'Hagakure' bis zur grafischen Tiefe von 'The Dark Knight Rises' (signiert von Miller). Bücher wie 'Million Dollar Weekend' prägen heute meine unternehmerische Denkweise. Lesen ist das unsichtbare Training, das meinen Horizont erweitert und mir die nötige Ruhe gibt, um mich zu fokussieren."
        },
        {
          name: "Meine Tochter",
          iconName: "Smile",
          desc: "Das wichtigste 'Projekt' meines Lebens. Mit ihr zu spielen bedeutet, die Welt mit neuen Augen wiederzuentdecken. Sie lehrt mich unendliche Geduld, reine Neugier und erinnert mich jeden Tag daran, warum ich mich anstrenge. Sie ist mein Anker in der Realität und meine größte Motivation, eine bessere Zukunft zu bauen."
        },
        {
          name: "Kochen",
          iconName: "Utensils",
          desc: "Alchemie für die Seele. Zwischen den Herden finde ich meinen Flow. Von der Perfektionierung der spanischen Kartoffeltortilla bis zum Experimentieren mit Schweizer Großwild (Hirsch, Wildschwein). Kochen erfordert, wie Programmieren, die richtigen Zutaten, präzises Timing und viel Liebe, damit das Ergebnis unvergesslich wird."
        },
        {
          name: "Apps Erstellen",
          iconName: "Code",
          desc: "Der Motor, der niemals ausgeht. Mein Kopf ist ein ständiger Bienenstock von Ideen, die echte Probleme lösen wollen. Ich genieße jede Phase: von der Idee auf einer Serviette bis zur Bereitstellung in der Produktion. Etwas zu erschaffen ist meine Art, Spuren zu hinterlassen und andere mit nützlicher und zugänglicher Technologie zu befähigen."
        }
      ]
    },
    experience: [
      {
        company: "Worldline Switzerland",
        role: "DevOps Engineer / Project Manager",
        period: "Okt 2024 - Heute",
        logo: "/images/worldline.png",
        desc: "Owner von Artifactory und Instant Score. E2E-Projektmanagement, Automatisierung und Migrationen zu Google Cloud.",
        details: "Als Owner von Artifactory (dem digitalen Herzstück, in dem die gesamte technologische Entwicklung des Unternehmens zusammenläuft und verwaltet wird) und den kritischen Lösungen Instant Score / Online Watcher leite ich die Strategie und Stabilität dieser Systeme. Integrales Management technischer Projekte wie RHEL8/9-Migrationen. Administration von Linux-Servern, fortgeschrittene Automatisierung mit Ansible (YAML), Bash und Python. Bereitstellung und Verwaltung von AWX und CI/CD-Pipelines mit GitLab. Überwachung und Durchführung von Migrationen zu Google Cloud, einschließlich der Erstellung von Terraform-Skripten zur Bereitstellung neuer Anwendungsmodelle.",
        tags: ["Product Owner", "Artifactory", "Google Cloud", "Ansible"],
        color: "bg-blue-600",
        stack: [
            { name: "Google Cloud (GCP)", desc: "App-Migration, Terraform und Modellbereitstellung" },
            { name: "Artifactory", desc: "Owner. Zentralisierte Artefakt- und Entwicklungsverwaltung" },
            { name: "Instant Score", desc: "Owner. Lösungsmanagement und Wartung" },
            { name: "BMC Remedy", desc: "Vorfälle, Change Requests und Problemmanagement" },
            { name: "Jira", desc: "Aufgabenerstellung und -verfolgung" },
            { name: "Confluence", desc: "Dokumentenmanagement und Wissensdatenbank" },
            { name: "VMWare", desc: "Verwaltung virtueller Infrastruktur (VMs)" },
            { name: "Putty / MobaXterm", desc: "SSH-Zugriff und Verwaltung für Linux-Server" },
            { name: "IntelliJ / VS Code", desc: "Code-Management und GitLab-Pipelines" },
            { name: "RHEL 8 & 9", desc: "Fortgeschrittene Linux-Server-Administration" }
        ]
      },
      {
        company: "Six Group",
        role: "DevOps Engineer",
        period: "Mai 2021 - Sep 2024",
        logo: "/images/six.jpg",
        desc: "Führung bei RHEL7 zu RHEL8 Migrationen. Docker- und OpenShift-Integration. Servermigration zu Azure.",
        details: "Demonstrierte solide Führungsqualitäten durch effektives Management von Projekten wie der Migration von RHEL7 zu RHEL8, Automatisierung von Patch-Prozessen und Docker-Integration für die Anwendungsbereitstellung. Erfahrung in C++ und Bash-Programmierung, Arbeit mit Artifactory und BMC Remedy.",
        tags: ["OpenShift", "Docker", "Azure", "Bash"],
        color: "bg-red-600"
      },
      {
        company: "Burberry",
        role: "Linux Engineer",
        period: "Jul 2018 - Apr 2021",
        logo: "/images/burberry.avif",
        desc: "Linux-Administration (RedHat, SUSE). Scripting in Ansible und Bash. Backup mit Data Protector.",
        details: "Durchführung von Aufgaben von der Installation von Linux-Servern (Redhat, SUSE), Konfiguration und FS-Erstellung bis hin zum Mounten von Volumes. Verantwortlich für Backup-Aufgaben mit Data Protector. Erstellung von Spezifikationen, Lösung von Software- und Hardwarevorfällen.",
        tags: ["Linux", "Ansible", "VMWare"],
        color: "bg-yellow-600"
      },
      {
        company: "Grifols S.A.",
        role: "Systems Administrator",
        period: "Nov 2014 - Jul 2018",
        logo: "/images/grifols.png",
        desc: "Basisadministration von Unix-, Linux- und Windows-Systemen. HP Openview Alarmmanagement und Backups.",
        details: "Verwaltete die Basisadministration von Unix-, Linux- und Windows-Systemen, HP Openview Alarmmanagement, Durchführung von Backups mit Data Protector, Überprüfung von Oracle Tablespaces. Benutzererstellung in LDAP und OpenLDAP.",
        tags: ["Unix", "Windows", "Oracle", "LDAP"],
        color: "bg-blue-500"
      },
      {
        company: "Metrica / ITNow",
        role: "Linux Administrator",
        period: "Sep 2014 - Nov 2014",
        logo: "/images/itnow.jpg",
        desc: "Linux-Maschinenadministration, Scripting in Bash und Perl, Monitoring mit Nagios.",
        details: "Verwaltete die Linux-Maschinenadministration, erstellte Skripte in Bash und Perl, erstellte Überwachungsregeln in HP Openview und Nagios.",
        tags: ["Linux", "Nagios", "Perl"],
        color: "bg-gray-600"
      },
      {
        company: "Hewlett Packard",
        role: "TIBCO Administrator",
        period: "Mär 2014 - Sep 2014",
        logo: "/images/hp.png",
        desc: "Linux-Maschinenadministration für TIBCO, Scripting und Überwachungsregeln.",
        details: "Verwaltete die Linux-Maschinenadministration für TIBCO, erstellte Skripte in Bash und Perl, Überwachungsregeln in Tibco Hawk.",
        tags: ["TIBCO", "Linux", "Bash"],
        color: "bg-cyan-600"
      },
      {
        company: "Hewlett Packard",
        role: "Operation Team Leader",
        period: "Dez 2010 - Okt 2013",
        logo: "/images/hp.png",
        desc: "Teammanagement, Jobausführungskontrolle in Control M und SAP.",
        details: "Verwaltete Personen im Team, kontrollierte die korrekte Jobausführung, eröffnete Vorfälle, plante und führte Jobs in Control M Enterprises und Mainframe aus.",
        tags: ["Team Lead", "SAP", "Control M"],
        color: "bg-cyan-600"
      }
    ],
    education: [
      {
        institution: "UOC (Universitat Oberta de Catalunya)",
        degree: "Systems Engineer",
        period: "2012 - 2017",
        desc: "Programmiergrundlagen, Netzwerkmanagement und Betriebssysteme."
      },
      {
        institution: "Santa-Pau Pifma",
        degree: "High-Level Technician degree in IT",
        period: "2006 - 2008",
        desc: "Höhere technische Ausbildung in Informatik (ASI)."
      }
    ],
    certifications: [
      "RHCSA (RHEL9) (2025)",
      "DevOps on AWS (2024)",
      "AWS Fundamentals (2024)",
      "CPA - C++ (2023)",
      "LPIC 2 (2014)",
      "ITIL Foundation (2013)",
      "LPIC 1 (2013)"
    ],
    projects: [
      {
        title: "Bancfy",
        category: "Fintech App & Community",
        iconName: "TrendingUp",
        description: "Mehr als eine Finanz-App, es ist ein Erlebnis. Bancfy versucht, die Beziehung der Menschen zu ihrem Geld durch Gamifizierung und Gemeinschaft zu verändern. Ich verkaufe kein Produkt, ich baue eine Bewegung.",
        status: "In Entwicklung",
        color: "from-emerald-900 to-green-900",
        links: [{ label: "Offizielle Web", url: "https://www.bancfy.com/es" }]
      },
      {
        title: "Space Warhog",
        category: "Mobile Game",
        iconName: "Gamepad2",
        description: "Ein Arcade-Videospiel, das vollständig von mir entwickelt wurde. Verfügbar auf mobilen Plattformen. Eine technische und kreative Herausforderung, die meine Fähigkeit zeigt, ein Produkt von 0 auf 100 zu bringen.",
        status: "Veröffentlicht",
        color: "from-purple-900 to-indigo-900",
        links: [
          { label: "Android", url: "https://andro.io/app/jabaliespacial" },
          { label: "iOS", url: "https://apps.apple.com/us/app/space-warhog/id6468927508" }
        ]
      },
      {
        title: "@exitofracasando",
        category: "Content Creation",
        iconName: "Smartphone",
        description: "TikTok-Account mit +10k Followern. Ein Raum, in dem ich Erkenntnisse teilte und mich mit einem jungen Publikum verband, das an Wachstum und Unternehmertum interessiert ist.",
        status: "10K+ Follower",
        color: "from-pink-900 to-rose-900",
        links: [{ label: "TikTok", url: "https://www.tiktok.com/@exitofracasando" }]
      }
    ],
    books: [
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
    ],
    techSkills: [
      { name: "Linux / RHEL", level: 95 },
      { name: "Ansible / Automation", level: 90 },
      { name: "Docker / Kubernetes", level: 85 },
      { name: "Cloud (GCP/AWS)", level: 85 },
      { name: "Terraform / IaC", level: 85 },
      { name: "CI/CD (GitLab/Jenkins)", level: 85 }
    ],
    softSkills: [
      "Teamführung",
      "Projektmanagement",
      "Effektive Kommunikation",
      "Konfliktlösung",
      "Wachstumsmentalität",
      "Anpassungsfähigkeit"
    ],
    sectionTitles: {
      about: "Über Mich",
      experience: "Beruflicher Werdegang",
      education: "Ausbildung & Zertifizierungen",
      projects: "Side Projects & Unternehmertum",
      books: "Veröffentlichte Bücher",
      contact: "Lass uns reden"
    }
  }
};


// --- HELPER COMPONENTS ---

// Map string icon names to components to store in JSON/Object easily
const IconMap = {
    "Award": Award,
    "Gamepad2": Gamepad2,
    "BookOpen": BookOpen,
    "Smile": Smile,
    "Utensils": Utensils,
    "Code": Code,
    "TrendingUp": TrendingUp,
    "Smartphone": Smartphone
};

const LazyLoadSection = ({ id, children, className = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px', threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer && observer.disconnect();
  }, []);

  return (
    <section id={id} ref={ref} className={`${className} transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {isVisible ? children : <div className="py-24 flex items-center justify-center"><div className="w-full max-w-md h-32 bg-white/5 animate-pulse rounded-3xl" /></div>}
    </section>
  );
};

const SEOHead = ({ currentLangCode }) => {
  useEffect(() => {
    document.title = "Juan José García Manzano | DevOps Engineer & Project Manager";
    document.documentElement.lang = currentLangCode;

    // Actualizar metadatos básicos si fuera necesario
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

    updateLink('alternate', 'https://www.jjgarciacv.com/es/', 'es');
    updateLink('alternate', 'https://www.jjgarciacv.com/', 'en');       
    updateLink('alternate', 'https://www.jjgarciacv.com/ca/', 'ca');     
    updateLink('alternate', 'https://www.jjgarciacv.com/ch/', 'de-CH');  

  }, [currentLangCode]);

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

const LanguageSelector = ({ mobile = false, currentLangCode }) => {
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

  // Encontrar idioma activo
  const activeLang = languages.find(l => l.code === currentLangCode) || languages[0];

  if (mobile) {
    return (
        <div className="flex gap-4 mt-4 justify-center">
            {languages.map((lang) => (
                <a key={lang.code} href={lang.path} className={`flex flex-col items-center gap-1 ${activeLang.code === lang.code ? 'opacity-100' : 'opacity-50'}`}>
                    <img src={lang.flag} alt={lang.label} className={`w-8 h-8 rounded-full object-cover border-2 ${activeLang.code === lang.code ? 'border-purple-500' : 'border-white/10'}`} />
                    <span className={`text-xs ${activeLang.code === lang.code ? 'text-purple-400 font-bold' : 'text-gray-400'}`}>{lang.label}</span>
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
        <img src={activeLang.flag} alt={activeLang.label} className="w-5 h-5 rounded-full object-cover" />
        <span className="text-sm font-medium text-gray-300">{activeLang.label}</span>
        <ChevronDown size={14} className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-gray-900 border border-white/10 rounded-2xl shadow-xl overflow-hidden z-50">
          {languages.map((lang) => (
            <a
              key={lang.code}
              href={lang.path}
              className={`flex items-center gap-3 px-4 py-3 hover:bg-white/5 transition-colors text-sm ${activeLang.code === lang.code ? 'text-purple-400 bg-white/5' : 'text-gray-300 hover:text-white'}`}
            >
              <img src={lang.flag} alt={lang.label} className="w-5 h-5 rounded-full object-cover" />
              <span>{lang.label}</span>
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
  const [formStatus, setFormStatus] = useState("idle"); 

  // --- LOGICA DE IDIOMA UNIFICADA ---
  const [lang, setLang] = useState('en'); // Default inicial
  
  useEffect(() => {
    // Detectar idioma basado en la URL
    const path = window.location.pathname;
    let detectedLang = 'en'; // Default
    
    if (path.includes('/es/')) detectedLang = 'es';
    else if (path.includes('/ca/')) detectedLang = 'ca';
    else if (path.includes('/ch/')) detectedLang = 'ch';
    
    setLang(detectedLang);

    // Scroll listener
    const handleScroll = () => {
        if (window.scrollY > 50 && !scrolled) setScrolled(true);
        if (window.scrollY <= 50 && scrolled) setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const shuffled = [...carouselSourceImages].sort(() => 0.5 - Math.random());
    setRandomImages(shuffled.slice(0, 4));

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Seleccionamos el contenido correcto basado en el estado 'lang'
  // Si no existe el idioma, hacemos fallback a 'en'
  const content = DATA[lang] || DATA['en'];

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
            method: "POST", body: formData, headers: { 'Accept': 'application/json' }
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

  const visibleExperience = expandedExperience ? content.experience : content.experience.slice(0, 3);
  // Mapeamos los titulos del menu a IDs para los anclas
  const menuAnchors = ['sobre-mi', 'experiencia', 'estudios', 'proyectos', 'skills', 'libros', 'contacto'];

  return (
    <div className="min-h-screen bg-gray-950 text-white font-sans selection:bg-purple-500 selection:text-white overflow-x-hidden relative">
      
      <SEOHead currentLangCode={lang} />

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
              {content.menu.map((item, index) => (
                <a 
                  key={index} 
                  href={`#${menuAnchors[index]}`}
                  className="hover:text-purple-400 transition-colors relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full" />
                </a>
              ))}
            </div>
            <div className="pl-6 border-l border-white/10">
              <LanguageSelector currentLangCode={lang} />
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
                {content.menu.map((item, index) => (
                    <a 
                        key={index} 
                        href={`#${menuAnchors[index]}`}
                        className="text-2xl font-bold text-gray-300 hover:text-purple-400 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        {item}
                    </a>
                ))}
             </div>
             <div className="mt-12 w-full px-12">
                <div className="h-px bg-white/10 w-full mb-8"></div>
                <p className="text-center text-gray-500 text-sm mb-4">Select Language / Idioma</p>
                <LanguageSelector mobile={true} currentLangCode={lang} />
             </div>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="relative z-10 min-h-screen flex items-center justify-center pt-20">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 text-center md:text-left">
            <div className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-purple-300 text-sm mb-4 animate-fade-in-up">
              {content.ui.available}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              DevOps <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-500">Engineer</span> <br />
              & Project Manager
            </h1>
            <p className="text-xl text-gray-400 max-w-lg mx-auto md:mx-0">
              {content.personalInfo.tagline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#contacto" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-bold hover:shadow-[0_0_20px_rgba(124,58,237,0.5)] transition-all transform hover:-translate-y-1 text-center">
                {content.ui.contactBtn}
              </a>
              <a href="/downloads/CV Juanjo.pdf" download className="px-8 py-3 bg-white/5 border border-white/10 rounded-full font-bold hover:bg-white/10 transition-all backdrop-blur-sm flex items-center justify-center gap-2 group text-center">
                <Download size={18} className="group-hover:-translate-y-1 transition-transform" />
                {content.ui.downloadCv}
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
                
                <h3 className="text-xl font-bold mb-2">{content.personalInfo.name.split(' ')[0] + ' ' + content.personalInfo.name.split(' ')[1]}</h3>
                
                <div className="w-full flex flex-col gap-2 mb-6">
                   <div className="flex items-center justify-center gap-2 text-purple-400 text-xs font-medium bg-purple-500/10 py-1.5 px-3 rounded-full border border-purple-500/20">
                      <MapPin size={12} /> Zurich (5 years)
                   </div>
                   <div className="h-4 w-px bg-white/10 mx-auto border-l border-dashed border-gray-500"></div>
                   <div className="flex items-center justify-center gap-2 text-gray-400 text-xs font-medium">
                      <MapPin size={12} /> Barcelona (Origin)
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
      <LazyLoadSection id="sobre-mi" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
          <SectionTitle>{content.sectionTitles.about}</SectionTitle>
          
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
             <div className="space-y-6">
                <GlassCard className="bg-gradient-to-br from-white/5 to-transparent">
                  <p className="text-lg leading-relaxed text-gray-300">
                    {content.personalInfo.aboutShort}
                  </p>
                  
                  <div className={`overflow-hidden transition-all duration-500 ${showFullAbout ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-400 leading-relaxed border-t border-white/10 pt-4">
                      {content.personalInfo.aboutLong}
                    </p>
                    <div className="mt-4 grid grid-cols-2 gap-4">
                        <div className="flex items-center gap-2 text-sm text-purple-300">
                            <BookOpen size={16} /> Continuous Learning
                        </div>
                        <div className="flex items-center gap-2 text-sm text-purple-300">
                            <Users size={16} /> Human Leadership
                        </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => setShowFullAbout(!showFullAbout)}
                    className="mt-4 flex items-center gap-2 text-purple-400 hover:text-purple-300 font-medium transition-colors"
                  >
                    {showFullAbout ? content.ui.readLess : content.ui.readMore}
                    {showFullAbout ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>
                </GlassCard>

                {/* Hobbies Section */}
                <h3 className="text-xl font-bold mt-8 mb-4 flex items-center gap-2">
                   <Heart className="text-red-500" size={20} /> {lang === 'en' ? 'My Interests' : 'Intereses'}
                </h3>
                <div className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {content.personalInfo.hobbies.map((hobby, i) => {
                            const Icon = IconMap[hobby.iconName] || Award;
                            return (
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
                                        <Icon size={18} />
                                    </div>
                                    <span className={`text-sm font-medium ${selectedHobby === i ? 'text-white' : 'text-gray-300'}`}>{hobby.name}</span>
                                    {selectedHobby === i ? <ChevronUp size={14} className="ml-auto text-purple-400"/> : <ChevronDown size={14} className="ml-auto text-gray-500"/>}
                                </button>
                            );
                        })}
                    </div>

                    {/* Detailed Hobby View */}
                    <div className={`overflow-hidden transition-all duration-500 ease-in-out ${selectedHobby !== null ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'}`}>
                        {selectedHobby !== null && (
                            <div className="bg-gradient-to-r from-purple-900/40 to-blue-900/40 border border-purple-500/30 rounded-3xl p-6 mt-2 relative">
                                <h4 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                    {/* Icon rendering logic */}
                                    {(() => {
                                        const Icon = IconMap[content.personalInfo.hobbies[selectedHobby].iconName] || Award;
                                        return <Icon size={18}/>
                                    })()}
                                    {content.personalInfo.hobbies[selectedHobby].name}
                                </h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    {content.personalInfo.hobbies[selectedHobby].desc}
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
                     {content.softSkills.map((skill, i) => (
                       <div key={i} className="px-4 py-2 bg-white/5 rounded-full border border-white/5 text-sm text-gray-300 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-400" />
                          {skill}
                       </div>
                     ))}
                  </div>

                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                      <Cpu className="text-blue-500"/> Core Tech Stack
                  </h3>
                  {content.techSkills.map((skill) => (
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
                <Shuffle size={20} className="text-purple-400"/> {content.ui.randomGallery}
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

      {/* EXPERIENCE SECTION */}
      <LazyLoadSection id="experiencia" className="py-24 bg-black/30 relative">
        <div className="container mx-auto px-6">
          <SectionTitle>{content.sectionTitles.experience}</SectionTitle>
          
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
                              <h4 className="text-xs font-bold text-purple-400 mb-3 uppercase tracking-wider">{content.ui.techStack}</h4>
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
                        {expandedExperience ? content.ui.showLessExp : content.ui.showFullExp}
                    </span>
                    {expandedExperience ? <ChevronUp className="animate-bounce" /> : <ChevronDown className="animate-bounce" />}
                </button>
            </div>
          </div>
        </div>
      </LazyLoadSection>

      {/* EDUCATION SECTION */}
      <LazyLoadSection id="estudios" className="py-24 relative z-10">
        <div className="container mx-auto px-6">
           <SectionTitle>{content.sectionTitles.education}</SectionTitle>
           
           <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="space-y-6">
                 <h3 className="text-2xl font-bold flex items-center gap-3 mb-6">
                    <GraduationCap className="text-purple-500" /> {lang === 'en' ? 'Academic Background' : 'Formación Académica'}
                 </h3>
                 {content.education.map((edu, idx) => (
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
                    <Award className="text-blue-500" /> {lang === 'en' ? 'Certifications' : 'Certificaciones'}
                 </h3>
                 <div className="grid grid-cols-1 gap-3">
                    {content.certifications.map((cert, idx) => (
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

      {/* PROJECTS SECTION */}
      <LazyLoadSection id="proyectos" className="py-24 bg-black/30">
        <div className="container mx-auto px-6">
          <SectionTitle>{content.sectionTitles.projects}</SectionTitle>
          <p className="text-center text-gray-400 max-w-2xl mx-auto mb-16">
            {lang === 'en' 
                ? "My passion is not limited to the office. I love building products from scratch, generating community, and exploring new technologies." 
                : "Mi pasión no se limita a la oficina. Me encanta construir productos desde cero, generar comunidad y explorar nuevas tecnologías."
            }
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {content.projects.map((project, index) => {
              const Icon = IconMap[project.iconName] || Code;
              return (
                <div key={index} className="group relative">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 rounded-[2.5rem] transition-opacity duration-500 blur-xl`} />
                  
                  <GlassCard className="h-full flex flex-col relative z-10 border-white/5 hover:border-white/20 transition-all duration-300 group-hover:-translate-y-2">
                    <div className="mb-6 flex justify-between items-start">
                      <div className="p-3 bg-white/5 rounded-full border border-white/10 group-hover:scale-110 transition-transform">
                        <Icon size={24} className="text-white"/>
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
              );
            })}
          </div>
        </div>
      </LazyLoadSection>

      {/* BOOKS SECTION */}
      <LazyLoadSection id="libros" className="py-24 relative z-10 overflow-hidden">
         <div className="container mx-auto px-6">
            <SectionTitle>{content.sectionTitles.books}</SectionTitle>
            <p className="text-center text-gray-400 max-w-2xl mx-auto mb-12">
               {lang === 'en' 
                ? "Sharing knowledge is another one of my passions. Here you can find my latest publications available on Amazon." 
                : "Compartir conocimiento es otra de mis pasiones. Aquí puedes encontrar mis últimas publicaciones disponibles en Amazon."
               }
            </p>

            <div className="grid md:grid-cols-3 gap-8">
               {content.books.map((book, idx) => (
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
                            <span className="text-xs text-gray-400 uppercase tracking-widest">{content.personalInfo.name.split(' ')[0]}</span>
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
      </LazyLoadSection>

      <div id="skills" />

      {/* CONTACT SECTION */}
      <LazyLoadSection id="contacto" className="py-24 bg-gradient-to-t from-black via-black/90 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
             <GlassCard className="p-8 md:p-12 border-purple-500/20 shadow-[0_0_50px_rgba(100,0,200,0.1)]">
                <div className="grid md:grid-cols-2 gap-12">
                   <div className="space-y-6">
                      <h2 className="text-3xl font-bold">{content.sectionTitles.contact}</h2>
                      <p className="text-gray-400">
                         {lang === 'en' 
                            ? "I am always open to discussing new opportunities, product ideas, or technical collaborations."
                            : "Estoy siempre abierto a discutir nuevas oportunidades, ideas de producto o colaboraciones técnicas."
                         }
                      </p>
                      
                      <div className="space-y-4 pt-4">
                         <a href={`mailto:${content.personalInfo.email}`} className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                            <div className="p-3 bg-white/5 rounded-full"><Mail size={20} className="text-blue-400"/></div>
                            <span className="break-all">{content.personalInfo.email}</span>
                         </a>
                         <a href={`https://${content.personalInfo.linkedin}`} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors">
                            <div className="p-3 bg-white/5 rounded-full"><Linkedin size={20} className="text-blue-400"/></div>
                            {content.personalInfo.name}
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

                   {/* Contact Form Updated */}
                   <form className="space-y-4" onSubmit={handleSubmit}>
                      <div>
                         <label htmlFor="name" className="block text-xs font-mono text-gray-500 mb-1 ml-2">{content.ui.form.name}</label>
                         <input 
                            id="name"
                            name="name"
                            required
                            type="text" 
                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" 
                            placeholder={content.ui.form.namePh} 
                         />
                      </div>
                      
                      <div>
                         <label htmlFor="email" className="block text-xs font-mono text-gray-500 mb-1 ml-2">{content.ui.form.email}</label>
                         <input 
                            id="email"
                            name="email"
                            required
                            type="email" 
                            className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" 
                            placeholder={content.ui.form.emailPh} 
                         />
                      </div>

                      <div>
                         <label htmlFor="message" className="block text-xs font-mono text-gray-500 mb-1 ml-2">{content.ui.form.msg}</label>
                         <textarea 
                            id="message"
                            name="message"
                            required
                            rows="4" 
                            className="w-full bg-white/5 border border-white/10 rounded-3xl px-6 py-3 text-white focus:outline-none focus:border-purple-500 transition-colors" 
                            placeholder={content.ui.form.msgPh} 
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
                         {formStatus === 'idle' && content.ui.form.send}
                         {formStatus === 'submitting' && <><Loader2 className="animate-spin" size={20} /> {content.ui.form.sending}</>}
                         {formStatus === 'success' && <><CheckCircle size={20} /> {content.ui.form.sent}</>}
                         {formStatus === 'error' && <><AlertCircle size={20} /> {content.ui.form.error}</>}
                      </button>
                   </form>
                </div>
             </GlassCard>
          </div>
        </div>
      </LazyLoadSection>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5 text-center text-gray-600 text-sm">
         <p className="font-medium text-gray-500">{content.ui.footer}</p>
         <p className="text-xs mt-2 text-gray-700">© {new Date().getFullYear()} {content.personalInfo.name}</p>
      </footer>
    </div>
  );
}