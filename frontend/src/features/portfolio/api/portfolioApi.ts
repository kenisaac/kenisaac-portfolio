import { httpClient } from "@/lib/api/httpClient";
import type { Experience, PortfolioProfile, Project, SkillCategory } from "@/features/portfolio/types";

export const portfolioApi = {
  profile: () => httpClient<PortfolioProfile>("/portfolio/profile"),
  experience: () => httpClient<Experience[]>("/portfolio/experience"),
  skills: () => httpClient<SkillCategory[]>("/portfolio/skills"),
  projects: () => httpClient<Project[]>("/portfolio/projects")
};
