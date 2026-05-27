import { CalendarDays } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { listItem } from "@/lib/animation/variants";
import type { Experience } from "@/features/portfolio/types";

export function ExperienceTimeline({ items }: { items: Experience[] }) {
  return (
    <div className="relative space-y-5 before:absolute before:left-5 before:top-4 before:hidden before:h-[calc(100%-2rem)] before:w-px before:bg-border sm:before:block">
      {items.map((item) => (
        <motion.article key={`${item.company}-${item.period}`} variants={listItem} className="relative sm:pl-14">
          <div className="absolute left-2 top-6 hidden h-7 w-7 rounded-full border-4 border-background bg-brand-red sm:block" />
          <Card className="overflow-hidden shadow-none transition-colors hover:border-brand-red/70">
            <CardContent className="p-5 sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <Badge>{item.period}</Badge>
                  <h3 className="mt-3 text-xl font-semibold">{item.role}</h3>
                  <p className="mt-1 text-sm font-medium text-muted-foreground">{item.company}</p>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4" aria-hidden="true" />
                  {item.period}
                </div>
              </div>
              <p className="mt-4 leading-7 text-muted-foreground">{item.summary}</p>
              <ul className="mt-5 grid gap-3">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-sm leading-6">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.article>
      ))}
    </div>
  );
}
