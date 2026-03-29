
import { Project, Experience, SkillGroup } from './types';

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

export const EXPERIENCES: Experience[] = [
  {
    date: "Février 2026 - Août 2026",
    title: "Conseiller Client (Projet EDF)",
    company: "Concentrix",
    location: "Compiègne",
    description: [
      "Gestion de processus : Prise en charge technique de dossiers réglementés (souscriptions, résiliations, inversions de PRM et raccordements).",
      "Relationnel : Analyse et gestions des besoins clients au téléphone."
    ]
  },
  {
    date: "Mars 2025 - Juin 2025",
    title: "Développeur Web",
    company: "Afidium",
    location: "Distanciel",
    description: [
      "Conception Fullstack : Développement et maintenance de fonctionnalités critiques avec Angular et PHP.",
      "Optimisation Data : Amélioration de la performance des recherches via l'intégration et le requêtage sur Elasticsearch et PostgreSQL."
    ]
  },
  {
    date: "Janvier 2024 - Mars 2024",
    title: "Stagiaire en Informatique",
    company: "NTI Solutions",
    location: "Beauvais",
    description: [
      "Automatisation de Processus : Conception et déploiement de scripts en PowerShell et Python pour automatiser les tâches récurrentes.",
      "Infrastructure Réseau : Configuration technique et sécurisation d'équipements IP (caméras et enregistreurs vidéo)."
    ]
  }
];

export const EDUCATION = [
  {
    date: "2026 - 2029",
    title: "Cycle Ingénieur (Apprentissage)",
    institution: "ESIEA Paris",
    description: "Spécialisation : Intelligence Artificielle & Data Science ou Software Engineering. Rythme : 2 semaines École / 2 semaines Entreprise. Projet International."
  },
  {
    date: "2022 - 2025",
    title: "BUT Informatique (Réalisation d'applications)",
    institution: "Université Sorbonne Paris Nord (IUT de Villetaneuse)",
    description: "Spécialité : Réalisation d'applications. Conception web/mobile, POO (Java, Python, PHP), SQL/NoSQL, architecture logicielle et gestion de projets agiles."
  },
  {
    date: "2019 - 2022",
    title: "Baccalauréat Général (Mention Bien)",
    institution: "Lycée Marie Curie (Nogent-sur-Oise)",
    description: "Spécialités : Numérique et Sciences Informatiques, Mathématiques."
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Génie Logiciel & Fullstack",
    skills: [
      { name: "Node.js / Express" },
      { name: "React / Angular" },
      { name: "TypeScript / JavaScript" },
      { name: "Architecture MVC & REST" },
      { name: "Figma (UI/UX)" }
    ]
  },
  {
    category: "Data Engineering & IA",
    skills: [
      { name: "PostgreSQL" },
      { name: "MongoDB / Redis" },
      { name: "Python (Pandas)" },
      { name: "Modélisation & IA" }
    ]
  },
  {
    category: "DevOps & Infrastructures",
    skills: [
      { name: "Docker & Sécurité (OWASP)" },
      { name: "Linux (Ubuntu/Debian)" },
      { name: "Réseaux (IP, SSH, HTTPS)" },
      { name: "Automatisation (PowerShell)" }
    ]
  },
  {
    category: "Méthodologie & Outils",
    skills: [
      { name: "Git & CI/CD" },
      { name: "Méthodes Agiles" },
      { name: "Tests de validation" },
      { name: "Adobe Lightroom / Resolve" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Site web - Portfolio Photographie",
    category: "Vue.js",
    image: "https://picsum.photos/id/250/800/600",
    link: "https://photo.nassimmanseur.fr/",
    githubLink: "https://github.com/ManseurNassim/PhotoNassim",
    tags: ["Vue.js", "Design", "Photo"]
  },
  {
    id: 2,
    title: "Site web - Bibliothèque de jeux vidéo",
    category: "Fullstack | Node + React",
    image: "https://images.unsplash.com/photo-1750049452926-fe38c66c4298?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "https://gameverse.nassimmanseur.fr/",
    githubLink: [
      "https://github.com/ManseurNassim/GameVerse-frontend", 
      "https://github.com/ManseurNassim/GameVerse-backend"
    ],
    tags: ["Node.js", "Express.js", "MongoDB", "React", "API REST"]
  },
  {
    id: 3,
    title: "Projet en cours d'importation",
    category: "À venir",
    image: "https://picsum.photos/id/201/800/600",
    link: "#",
    tags: ["En préparation"]
  },
  {
    id: 4,
    title: "Projet en cours d'importation",
    category: "À venir",
    image: "https://picsum.photos/id/180/800/600",
    link: "#",
    tags: ["En préparation"]
  }
];
