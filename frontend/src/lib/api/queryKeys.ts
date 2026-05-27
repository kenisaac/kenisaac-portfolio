export const queryKeys = {
  portfolio: {
    root: ["portfolio"] as const,
    profile: ["portfolio", "profile"] as const,
    experience: ["portfolio", "experience"] as const,
    skills: ["portfolio", "skills"] as const,
    projects: ["portfolio", "projects"] as const
  },
  dashboard: {
    summary: ["dashboard", "summary"] as const
  }
};
