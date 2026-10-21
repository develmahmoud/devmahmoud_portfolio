import type { ComponentType } from 'react';

export type IconComponent = ComponentType<{ className?: string }>;

export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface Achievement {
  id: number;
  name: string;
  institution: string;
  year: string;
}

export interface Certification {
  id: number;
  name: string;
  platform: string;
  date: string;
}

export interface Skill {
  name: string;
  icon: IconComponent;
}

export interface SocialLink {
  name: string;
  icon: IconComponent;
  url: string;
  showInHeader?: boolean;
}

export interface NavItem {
  id: string;
  label: string;
}
