import { useQuery } from "@tanstack/react-query";
import { portfolioApi } from "@/features/portfolio/api/portfolioApi";
import { experience } from "@/features/portfolio/data/experience";
import { profile } from "@/features/portfolio/data/profile";
import { projects } from "@/features/portfolio/data/projects";
import { skillCategories } from "@/features/portfolio/data/skills";
import { queryKeys } from "@/lib/api/queryKeys";

export function usePortfolioProfile() {
  return useQuery({
    queryKey: queryKeys.portfolio.profile,
    queryFn: portfolioApi.profile,
    initialData: profile
  });
}

export function usePortfolioExperience() {
  return useQuery({
    queryKey: queryKeys.portfolio.experience,
    queryFn: portfolioApi.experience,
    initialData: experience
  });
}

export function usePortfolioSkills() {
  return useQuery({
    queryKey: queryKeys.portfolio.skills,
    queryFn: portfolioApi.skills,
    initialData: skillCategories
  });
}

export function usePortfolioProjects() {
  return useQuery({
    queryKey: queryKeys.portfolio.projects,
    queryFn: portfolioApi.projects,
    initialData: projects
  });
}
