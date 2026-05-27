import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

type MetricCardProps = {
  label: string;
  value: string;
  icon: LucideIcon;
};

export function MetricCard({ label, value, icon: Icon }: MetricCardProps) {
  return (
    <Card className="border-white/[0.12] bg-white/[0.08] text-white shadow-panel backdrop-blur">
      <CardContent className="flex min-h-28 items-center gap-4 p-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-md bg-brand-red text-white">
          <Icon className="h-5 w-5" aria-hidden="true" />
        </div>
        <div>
          <p className="text-xl font-semibold">{value}</p>
          <p className="mt-1 text-sm leading-5 text-white/[0.72]">{label}</p>
        </div>
      </CardContent>
    </Card>
  );
}
