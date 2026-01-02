
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  tags: string[];
}

export interface Experience {
  date: string;
  title: string;
  company: string;
  location: string;
  description: string[];
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillGroup {
  category: string;
  skills: Skill[];
}
