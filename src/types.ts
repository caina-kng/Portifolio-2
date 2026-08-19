export interface TrajectoryNode {
  id: string;
  stepNumber: string;
  label: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  badge?: string;
  category: 'esporte' | 'estatistica' | 'militar' | 'tecnologia' | 'futuro';
  keyConcepts: string[];
  statusText?: string;
  quote?: string;
}

export interface VisionTopic {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  focusArea: string;
  metricConcept: string;
}

export interface SkillItem {
  id: string;
  title: string;
  description: string;
  category: 'competencia' | 'ferramenta';
  icon: string;
  tag: string;
}

export interface ProjectDetail {
  id: string;
  title: string;
  provisionalName: string;
  category: string;
  status: string;
  description: string;
  detailedVision: string;
  problem: string;
  solution: string;
  corePillars: {
    title: string;
    description: string;
    icon: string;
  }[];
  roadmap: {
    phase: string;
    title: string;
    description: string;
    completed: boolean;
    current?: boolean;
  }[];
  toolsInvolved: string[];
}

export interface SocialLink {
  label: string;
  url: string;
  username: string;
  icon: string;
  type: 'github' | 'linkedin' | 'instagram' | 'email';
}
