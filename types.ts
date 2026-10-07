export interface Project {
  id: number;
  title: string;
  /** Une ligne : de quel type de projet il s'agit */
  category: string;
  /** Accroche courte (2 lignes max), toujours visible */
  pitch: string;
  /** Le problème auquel le projet répond, affiché dans le détail */
  problem: string;
  /** Ce qui a été réalisé concrètement (2-3 points) */
  highlights: string[];
  /** Image fixe : affichée seule, ou en attendant la vidéo */
  image: string;
  /** Courte vidéo en boucle (WebM), lue quand la carte est visible */
  video?: string;
  /** Site en ligne ; absent si le projet n'a pas de démo publique */
  link?: string;
  githubLink?: string | string[];
  tags: string[];
}

export interface Experience {
  date: string;
  title: string;
  company: string;
  location: string;
  description: string[];
}

export interface Education {
  date: string;
  title: string;
  institution: string;
  description: string;
}

export interface Skill {
  name: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}
