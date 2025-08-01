export interface ExperienceItem {
  company: string;
  period: string;
  works: WorkItem[];
}

export interface WorkItem {
  name: string;
  period: string;
  summary?: string;
  details: WorkDetail[];
}

export interface WorkDetail {
  label: string;
  value: string | string[];
}
