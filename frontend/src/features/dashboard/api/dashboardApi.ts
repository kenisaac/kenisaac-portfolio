import { httpClient } from "@/lib/api/httpClient";

export type DashboardSummary = {
  profileCount: number;
  experienceCount: number;
  projectCount: number;
  skillCount: number;
  messageCount: number;
  generatedAt: string;
};

export function getDashboardSummary() {
  return httpClient<DashboardSummary>("/dashboard/summary");
}
