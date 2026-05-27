import { NavLink } from "react-router-dom";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";
import { routes } from "@/config/routes";
import { profile } from "@/features/portfolio/data/profile";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { ResumeDownloadButton } from "@/components/layout/ResumeDownloadButton";
import { cn } from "@/lib/utils";

export function DesktopSidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-72 border-r bg-background/95 p-5 backdrop-blur lg:block">
      <div className="flex h-full flex-col">
        <a href="/" className="rounded-md">
          <p className="text-xl font-semibold">{profile.name}</p>
          <p className="mt-1 text-sm leading-5 text-muted-foreground">{profile.title}</p>
        </a>

        <nav className="mt-8 space-y-1" aria-label="Primary navigation">
          {routes.map((route) => (
            <NavLink
              key={route.href}
              to={route.href}
              className={({ isActive }) =>
                cn(
                  "flex min-h-11 items-center gap-3 rounded-md px-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
                  isActive && "bg-secondary text-foreground"
                )
              }
            >
              <route.icon className="h-4 w-4" aria-hidden="true" />
              {route.label}
            </NavLink>
          ))}
        </nav>

        <div className="mt-8 grid grid-cols-2 gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>

        <Separator className="my-6" />

        <div className="space-y-3 text-sm text-muted-foreground">
          <a className="flex items-center gap-3 rounded-md hover:text-foreground" href={`mailto:${profile.email}`}>
            <Mail className="h-4 w-4" aria-hidden="true" />
            Email
          </a>
          <a className="flex items-center gap-3 rounded-md hover:text-foreground" href={profile.linkedinUrl} target="_blank" rel="noreferrer">
            <Linkedin className="h-4 w-4" aria-hidden="true" />
            LinkedIn
          </a>
          <span className="flex items-center gap-3">
            <MapPin className="h-4 w-4" aria-hidden="true" />
            {profile.location}
          </span>
        </div>

        <div className="mt-auto space-y-3">
          <ResumeDownloadButton className="w-full" />
          <Button asChild variant="outline" className="w-full">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" aria-hidden="true" />
              Portfolio Repo
            </a>
          </Button>
        </div>
      </div>
    </aside>
  );
}
