import { Activity, BarChart3, BriefcaseBusiness, Mail, Sparkles } from "lucide-react";
import { AnimatedList } from "@/components/shared/AnimatedList";
import { AnimatedPage } from "@/components/shared/AnimatedPage";
import { PageHeader } from "@/components/shared/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { useDashboardSummary } from "@/features/dashboard/hooks/useDashboardSummary";

export function DashboardPage() {
  const { data } = useDashboardSummary();
  const metrics = [
    { label: "Profiles", value: data.profileCount, icon: BriefcaseBusiness },
    { label: "Experience Items", value: data.experienceCount, icon: Activity },
    { label: "Projects", value: data.projectCount, icon: Sparkles },
    { label: "Skills", value: data.skillCount, icon: BarChart3 },
    { label: "Messages", value: data.messageCount, icon: Mail }
  ];

  return (
    <AnimatedPage>
      <PageHeader
        title="Dashboard"
        description="Admin-ready summary endpoint preview for future analytics and portfolio content management."
      />
      <section className="px-4 py-8 pb-28 sm:px-8 lg:pb-8">
        <AnimatedList className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {metrics.map((metric) => (
            <Card key={metric.label}>
              <CardContent className="p-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-cyan-soft text-slate-950">
                  <metric.icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <p className="mt-4 text-3xl font-semibold">{metric.value}</p>
                <p className="mt-1 text-sm text-muted-foreground">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </AnimatedList>
      </section>
    </AnimatedPage>
  );
}
