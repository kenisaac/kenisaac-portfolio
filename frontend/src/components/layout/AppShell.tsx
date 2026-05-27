import type { PropsWithChildren } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { TopNavigation } from "@/components/layout/TopNavigation";

export function AppShell({ children }: PropsWithChildren) {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      return;
    }

    window.requestAnimationFrame(() => {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }, [location.hash]);

  return (
    <div className="min-h-screen bg-brand-paper">
      <ScrollProgress />
      <TopNavigation />
      <div>
        {children}
      </div>
    </div>
  );
}
