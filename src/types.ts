export interface SocialLink {
  platform: string;
  url: string;
  username: string;
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  startDate: string;
  endDate: string;
  location: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  current: boolean;
  location: string;
  description: string; // Markdown supported
  break?: boolean;
}

export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface SkillCategory {
  name: string;
  items: string[];
}

export interface ResumeData {
  header: {
    fullName: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    website?: string;
    socials: SocialLink[];
  };
  summary: string;
  education: Education[];
  experience: Experience[];
  skills: SkillCategory[];
  projects: Project[];
}
