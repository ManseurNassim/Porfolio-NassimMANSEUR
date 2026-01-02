
import { Project, Experience, SkillGroup } from './types';

// Centralisation des images pour modification facile
export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  passions: {
    chess: "https://images.unsplash.com/photo-1524143878510-e3b8d6312402?q=80&w=800&auto=format&fit=crop",
    f1: "https://images.unsplash.com/photo-1541890289-b86df5bafd81?q=80&w=800&auto=format&fit=crop",
    photography: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=800&auto=format&fit=crop",
    gaming: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop"
  }
};

export const EXPERIENCES: Experience[] = [
  {
    date: "Mars 2025 - Juin 2025",
    title: "Développeur Web (Stage)",
    company: "Afidium",
    location: "Distanciel",
    description: [
      "Développement et maintenance d'outils web B2B.",
      "Participation à la création de maquettes (Figma).",
      "Ajout de fonctionnalités complexes : Angular, PHP, PostgreSQL et Elasticsearch.",
      "Réalisation de tests pour les nouveaux modules."
    ]
  },
  {
    date: "Janvier 2024 - Mars 2024",
    title: "Stagiaire en Informatique",
    company: "NTI Solutions",
    location: "Beauvais",
    description: [
      "Configuration réseau de caméras et d'enregistreurs vidéos.",
      "Développement de programmes en PowerShell et Python pour optimiser les processus internes."
    ]
  }
];

export const EDUCATION = [
  {
    date: "2022 - 2025",
    title: "Bachelor Universitaire de Technologie Informatique",
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
    category: "Développement & Frameworks",
    skills: [
      { name: "ReactJs / Angular / VueJs" },
      { name: "TypeScript / JavaScript" },
      { name: "PHP (Modèle MVC)" },
      { name: "Java (Springboot, JUnit)" },
      { name: "Python" }
    ]
  },
  {
    category: "Données & Backend",
    skills: [
      { name: "PostgreSQL (JSONB, Triggers)" },
      { name: "MongoDB / Redis / Elasticsearch" },
      { name: "PowerShell / VBA" }
    ]
  },
  {
    category: "Design & Post-Production",
    skills: [
      { name: "Figma" },
      { name: "Adobe Lightroom" },
      { name: "DaVinci Resolve" }
    ]
  },
  {
    category: "Environnement & IDE",
    skills: [
      { name: "Docker / Git / GitLab" },
      { name: "Visual Studio Code" },
      { name: "IntelliJ / Android Studio" },
      { name: "Linux (Ubuntu / Debian)" }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Portfolio Photographie",
    category: "Vue.js",
    image: "https://picsum.photos/id/250/800/600",
    link: "https://nassimphotos.netlify.app/",
    tags: ["Vue.js", "Design", "Photo"]
  },
  {
    id: 2,
    title: "Application Gestion Immobilière",
    category: "React / PHP",
    image: "https://picsum.photos/id/160/800/600",
    link: "https://youtu.be/Va5pQMZbCtI",
    tags: ["React", "API", "Fullstack"]
  },
  {
    id: 3,
    title: "Analyse de Données SQL",
    category: "Database",
    image: "https://picsum.photos/id/201/800/600",
    link: "https://drive.google.com/drive/folders/11YkzDIl4AW6UbrdPMUvk2Yha6m5DFqFT",
    tags: ["PostgreSQL", "JSONB", "SAE"]
  },
  {
    id: 4,
    title: "Simulation Java Swing",
    category: "Software",
    image: "https://picsum.photos/id/180/800/600",
    link: "https://github.com/ManseurNassim/SAE2.01Java",
    tags: ["Java", "JUnit", "MVC"]
  }
];
