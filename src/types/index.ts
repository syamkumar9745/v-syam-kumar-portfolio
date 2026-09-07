export interface Project {
  id: string;
  title: string;
  category: 'AI / ML' | 'Data Science' | 'Data Analytics / BI' | 'Full-Stack';
  tagline: string;
  description: string;
  fullOverview: string;
  highlights: string[];
  technologies: string[];
  metrics?: { label: string; value: string }[];
  architectureSummary: string[];
  keyContribution: string;
  githubUrl?: string;
  liveDemoUrl?: string;
  badge: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  icon: string;
  skills: {
    name: string;
    level: 'Core Focus' | 'Proficient' | 'Hands-on' | 'Practical';
    tag?: string;
  }[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  type: string;
  description: string[];
  skills: string[];
  verified: boolean;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  category: string;
  verified: boolean;
  skillsCovered: string[];
}

export interface AIPipelineNode {
  step: string;
  name: string;
  desc: string;
  icon: string;
  tags: string[];
  color: string;
}
