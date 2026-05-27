import type { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "inline-flex min-h-7 items-center rounded-full border bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground",
        className
      )}
      {...props}
    />
  );
}
