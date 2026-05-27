import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function SkeletonCard({ className }: { className?: string }) {
  return (
    <Card className={cn("overflow-hidden", className)}>
      <CardContent className="space-y-4 p-5">
        <div className="h-4 w-28 rounded bg-muted" />
        <div className="h-7 w-3/4 rounded bg-muted" />
        <div className="space-y-2">
          <div className="h-3 rounded bg-muted" />
          <div className="h-3 w-5/6 rounded bg-muted" />
        </div>
      </CardContent>
    </Card>
  );
}
