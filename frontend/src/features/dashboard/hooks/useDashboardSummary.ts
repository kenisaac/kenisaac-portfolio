import { useQuery } from "@tanstack/react-query";
import { getDashboardSummary } from "@/features/dashboard/api/dashboardApi";
import { queryKeys } from "@/lib/api/queryKeys";

export function useDashboardSummary() {
  return useQuery({
    queryKey: queryKeys.dashboard.summary,
    queryFn: getDashboardSummary,
    initialData: {
      profileCount: 1,
      experienceCount: 3,
      projectCount: 5,
      skillCount: 34,
      messageCount: 0,
      generatedAt: new Date().toISOString()
    }
  });
}
