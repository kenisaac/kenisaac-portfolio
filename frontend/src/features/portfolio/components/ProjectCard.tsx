import { ArrowRight, Target } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { listItem } from "@/lib/animation/variants";
import type { Project } from "@/features/portfolio/types";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.article variants={listItem}>
      <Card className="h-full overflow-hidden shadow-none transition-colors hover:border-brand-red/70">
        <div className="h-28 bg-brand-ink bg-[linear-gradient(135deg,rgba(244,5,57,0.9),transparent_42%),linear-gradient(rgba(255,255,255,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:100%_100%,34px_34px,34px_34px]" />
        <CardHeader>
          <div className="flex h-11 w-11 items-center justify-center rounded-md bg-brand-red text-white">
            <Target className="h-5 w-5" aria-hidden="true" />
          </div>
          <CardTitle className="pt-2">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Problem</p>
            <p className="mt-1 text-sm leading-6">{project.problem}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Solution</p>
            <p className="mt-1 text-sm leading-6">{project.solution}</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Outcome</p>
            <p className="mt-1 text-sm leading-6">{project.outcome}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool) => (
              <Badge key={tool} className="bg-brand-red-soft text-brand-red">{tool}</Badge>
            ))}
          </div>
          <Button asChild variant="outline" className="w-full hover:border-brand-red hover:text-brand-red">
            <Link to={`/projects/${project.slug}`} aria-label={`View details for ${project.title}`}>
              View Details
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.article>
  );
}
