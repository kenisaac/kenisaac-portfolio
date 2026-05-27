import type { LucideIcon } from "lucide-react";

export type PortfolioProfile = {
  name: string;
  title: string;
  headline: string;
  positioning: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  linkedinUrl: string;
  resumeUrl: string;
};

export type Metric = {
  label: string;
  value: string;
  icon?: LucideIcon;
};

export type Expertise = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

export type SkillCategory = {
  name: string;
  skills: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  summary: string;
  bullets: string[];
};

export type Project = {
  title: string;
  slug: string;
  problem: string;
  solution: string;
  tools: string[];
  outcome: string;
};

export type Tool = {
  name: string;
  category: string;
};
