import { Project, Experience, Education, SkillGroup } from './types';

// Centralisation des images pour modification facile
export const IMAGES = {
  portrait: "/Nassim.jpg",
  passions: {
    chess: "/echecs.png",
    f1: "/formule1.png",
    photography: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    gaming: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"
  }
};

export const CV_URL = "/CV_NASSIM_MANSEUR.pdf";

export const LINKS = {
  email: "nassimmanseur1@gmail.com",
  linkedin: "https://www.linkedin.com/in/nassim-manseur",
  github: "https://github.com/ManseurNassim"
};

export const EXPERIENCES: Experience[] = [
  {
    date: "Février 2026 - Août 2026",
    title: "Conseiller Client",
    company: "Concentrix · Relation client externalisée",
    location: "Compiègne",
    description: [
      "Traitement de dossiers réglementés (souscriptions, PRM) et analyse des besoins clients par téléphone."
    ]
  },
  {
    date: "Mars 2025 - Juin 2025",
    title: "Développeur Web (Stage)",
    company: "Afidium · Éditeur de logiciels tourisme",
    location: "Télétravail",
    description: [
      "Développement de fonctionnalités frontend Angular d'un SaaS B2B à partir de maquettes Figma.",
      "Consommation d'API REST et connexion des interfaces Angular aux services backend."
    ]
  },
  {
    date: "Janvier 2024 - Mars 2024",
    title: "Stagiaire en Informatique",
    company: "NTI Solutions · Intégrateur IT & sûreté",
    location: "Beauvais",
    description: [
      "Automatisation en Python et PowerShell de la création de comptes Azure et des tâches récurrentes.",
      "Configuration et sécurisation d'équipements réseau IP de vidéoprotection (caméras, enregistreurs vidéo)."
    ]
  }
];

export const EDUCATION: Education[] = [
  {
    date: "Sept. 2026 - 2029",
    title: "Cycle Ingénieur en Informatique",
    institution: "ESIEA · Paris",
    description: "Majeure Intelligence Artificielle & Data Science. Alternance de 36 mois, rythme 2 semaines école / 2 semaines entreprise."
  },
  {
    date: "2022 - 2025",
    title: "BUT Informatique · Réalisation d'applications",
    institution: "IUT Sorbonne Paris Nord · Villetaneuse",
    description: "Conception de bases de données SQL et NoSQL, statistiques et probabilités, programmation orientée objet (Java, Python) en Agile, avec tests unitaires et de validation."
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Langages",
    skills: [
      { name: "Python" }, { name: "SQL" }, { name: "TypeScript" }, { name: "JavaScript" },
      { name: "Java" }, { name: "PHP" }, { name: "PowerShell" }, { name: "HTML5 / CSS3" }, { name: "VBA" }
    ]
  },
  {
    category: "Données & IA",
    skills: [
      { name: "PostgreSQL" }, { name: "MySQL" }, { name: "MongoDB Atlas" }, { name: "Mongoose" },
      { name: "Redis" }, { name: "Pandas" }, { name: "Statistiques" }, { name: "Pipelines de données" }
    ]
  },
  {
    category: "Web",
    skills: [
      { name: "Node.js / Express" }, { name: "API REST" }, { name: "React" },
      { name: "Vue.js" }, { name: "Angular" }, { name: "Architecture MVC" }
    ]
  },
  {
    category: "DevOps & Sécurité",
    skills: [
      { name: "Docker" }, { name: "Git" }, { name: "Linux" }, { name: "CI/CD" },
      { name: "JWT / bcrypt" }, { name: "CORS" }, { name: "OWASP" }
    ]
  },
  {
    category: "Méthodes & Outils",
    skills: [
      { name: "Agile / Scrum" }, { name: "Tests unitaires" }, { name: "Figma" },
      { name: "VS Code" }, { name: "IntelliJ IDEA" }, { name: "Android Studio" }
    ]
  },
  {
    category: "Langues",
    skills: [
      { name: "Français · natif" }, { name: "Anglais · B2 professionnel" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "F1 Atlas",
    category: "Data visualisation 3D · Projet perso 2026",
    pitch: "Toute l'histoire de la F1 sur un globe 3D interactif, mis à jour automatiquement après chaque Grand Prix.",
    problem: "Les données de Formule 1 sont éparpillées entre plusieurs API et se lisent mal en tableaux. F1 Atlas les rassemble sur un globe 3D interactif : on clique sur un circuit pour voir tracé, résultats, records et positions tour par tour.",
    highlights: [
      "Pipeline Python qui agrège Jolpica-F1 (ex-Ergast), OpenF1 et les tracés de circuits.",
      "Mise à jour automatique chaque matin par GitHub Actions, republication sur Vercel.",
      "Replay animé de chaque saison depuis 2020."
    ],
    image: "/projets/f1-atlas.jpg",
    video: "/projets/f1-atlas.webm",
    link: "https://f1atlas.nassimmanseur.fr/",
    githubLink: "https://github.com/ManseurNassim/pitwall-atlas",
    tags: ["JavaScript", "Globe.gl / 3D", "Python", "GitHub Actions", "Vercel"]
  },
  {
    id: 2,
    title: "F1 Post-Race DataBrief",
    category: "Pipeline Data & IA · Projet perso 2026",
    pitch: "Pipeline qui croise télémétrie et presse après chaque Grand Prix pour générer un débrief par IA.",
    problem: "Après un Grand Prix, l'information est dispersée entre télémétrie brute et articles de presse. Ce pipeline les croise automatiquement et produit un débrief synthétique généré par IA.",
    highlights: [
      "Extraction télémétrique FastF1 (résultats, stratégies pneus) et ingestion de flux RSS de presse.",
      "API FastAPI (ETL + synthèse par LLM), orchestrée par n8n le dimanche soir.",
      "Tableau de bord Streamlit / Plotly et envoi vers Discord, le tout sous Docker Compose."
    ],
    image: "/projets/f1-databrief.jpg",
    video: "/projets/f1-databrief.webm",
    githubLink: "https://github.com/ManseurNassim/f1-databrief",
    tags: ["Python", "FastAPI", "LLM", "n8n", "Streamlit", "Docker"]
  },
  {
    id: 3,
    title: "PhotoNassim",
    category: "Pipeline de données & IA · Depuis 2024",
    pitch: "Site photo alimenté par un pipeline qui transforme, héberge et indexe les images par IA.",
    problem: "Publier et retrouver des centaines de photos de voyage à la main est fastidieux. Un pipeline automatise l'import et l'indexation pour alimenter un site rapide avec recherche par mots-clés.",
    highlights: [
      "Ingestion automatisée : transformation des images, upload Cloudinary et index JSON généré.",
      "Indexation des photos par analyse IA pour le moteur de recherche par mots-clés.",
      "Front Vue 3 (Vuex, Vue Router) : galerie masonry, filtres par lieu, visionneuse HD."
    ],
    image: "/projets/photo.jpg",
    video: "/projets/photo.webm",
    link: "https://photo.nassimmanseur.fr/",
    githubLink: "https://github.com/ManseurNassim/PhotoNassim",
    tags: ["Node.js", "Vue 3", "Cloudinary", "IA"]
  },
  {
    id: 4,
    title: "GameVerse",
    category: "Application web fullstack · 2026",
    pitch: "Bibliothèque de jeux vidéo fullstack : recherche, filtres, classements et collection personnelle.",
    problem: "Une bibliothèque de jeux vidéo où l'on cherche, filtre et classe des milliers de titres, et où chaque utilisateur gère sa propre collection.",
    highlights: [
      "API REST Express / MongoDB : recherche, filtres multi-critères, tri et pagination côté serveur.",
      "Requêtes MongoDB construites dynamiquement, avec un endpoint dédié aux filtres.",
      "Authentification JWT (access + refresh en cookies httpOnly), mots de passe bcrypt."
    ],
    image: "/projets/gameverse.jpg",
    video: "/projets/gameverse.webm",
    link: "https://gameverse.nassimmanseur.fr/",
    githubLink: [
      "https://github.com/ManseurNassim/GameVerse-frontend",
      "https://github.com/ManseurNassim/GameVerse-backend"
    ],
    tags: ["Node.js", "Express", "MongoDB", "React", "TypeScript", "JWT"]
  }
];
