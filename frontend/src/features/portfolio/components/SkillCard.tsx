import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { listItem } from "@/lib/animation/variants";
import type { SkillCategory } from "@/features/portfolio/types";

export function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <motion.div variants={listItem}>
      <Card className="h-full shadow-none transition-colors hover:border-brand-red/70">
        <CardHeader>
          <CardTitle>{category.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-3">
            {category.skills.map((skill) => (
              <li key={skill} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-red" aria-hidden="true" />
                <span>{skill}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
