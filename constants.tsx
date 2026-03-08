
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
