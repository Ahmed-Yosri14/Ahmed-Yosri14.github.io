export interface Contact {
  label: string;
  value: string;
  href?: string;
}

export interface Experience {
  id?: string;
  role: string;
  company: string;
  start: string;
  end?: string;
  location?: string;
  summary?: string;
  bullets?: string[];
}

export interface Education {
  id?: string;
  degree: string;
  institution: string;
  start: string;
  end?: string;
  location?: string;
  gpa?: string;
  rank?: string;
  details?: string[];
}

export interface Project {
  id?: string;
  title: string;
  link?: string;
  summary?: string;
  tech?: string[];
  year?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Certificate {
  name: string;
  date: string;
}

export interface Language {
  name: string;
  level: string;
}

export interface CV {
  name: string;
  title: string;
  summary: string;
  contact: Contact[];
  skills: Skill[];
  experience: Experience[];
  education: Education[];
  projects: Project[];
  certificates: Certificate[];
  languages: Language[];
}

