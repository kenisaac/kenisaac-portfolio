import { Wrench } from "lucide-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { listItem } from "@/lib/animation/variants";
import type { Tool } from "@/features/portfolio/types";

export function ToolCard({ tool }: { tool: Tool }) {
  return (
    <motion.div variants={listItem}>
      <Card className="h-full shadow-none transition-colors hover:border-brand-red/70">
        <CardContent className="flex min-h-24 items-center gap-3 p-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-brand-red-soft text-brand-red">
            <Wrench className="h-4 w-4" aria-hidden="true" />
          </div>
          <div>
            <p className="font-semibold">{tool.name}</p>
            <p className="mt-1 text-xs text-muted-foreground">{tool.category}</p>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
