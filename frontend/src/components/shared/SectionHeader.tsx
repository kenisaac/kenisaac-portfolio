import type { ReactNode } from "react";
import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
  inverse?: boolean;
};

export function SectionHeader({ eyebrow, title, description, action, className, inverse = false }: SectionHeaderProps) {
  return (
    <ScrollReveal className={cn("mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between", className)}>
      <div className="max-w-3xl">
        {eyebrow ? (
          <Badge className={cn("mb-3 bg-brand-red-soft text-brand-red", inverse && "bg-white/10 text-white")}>{eyebrow}</Badge>
        ) : null}
        <h2 className={cn("text-3xl font-semibold tracking-normal sm:text-5xl", inverse ? "text-white" : "text-foreground")}>
          {title}
        </h2>
        {description ? (
          <p className={cn("mt-3 text-base leading-7", inverse ? "text-white/70" : "text-muted-foreground")}>{description}</p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </ScrollReveal>
  );
}
