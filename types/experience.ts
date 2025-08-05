export interface ExperienceItem {
  company: string;
  period: string;
  works: Project[];
}

export interface Project {
  name: string;
  period: string;
  summary?: string;
  links?: { label: string; url: string }[];
  image?: string;
  details: ProjectDetail[];
}

export interface ProjectDetail {
  label: string;
  value: string | string[];
}
