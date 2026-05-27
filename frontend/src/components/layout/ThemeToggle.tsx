import { MonitorCog, Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

type Theme = "light" | "dark" | "system";

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem("theme") as Theme | null) ?? "light");

  useEffect(() => {
    const root = document.documentElement;
    const shouldUseDark =
      theme === "dark" || (theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches);

    root.classList.toggle("dark", shouldUseDark);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const nextTheme = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
  const Icon = theme === "light" ? Sun : theme === "dark" ? Moon : MonitorCog;

  return (
    <Button variant="outline" size="sm" onClick={() => setTheme(nextTheme)} title={`Theme: ${theme}`}>
      <Icon className="h-4 w-4" aria-hidden="true" />
      Theme
    </Button>
  );
}
