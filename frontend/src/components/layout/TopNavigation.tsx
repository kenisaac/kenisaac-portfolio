import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { profile } from "@/features/portfolio/data/profile";
import { cn } from "@/lib/utils";

const anchors = [
  { label: "About", href: "/#about" },
  { label: "Work", href: "/#projects" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" }
];

export function TopNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed inset-x-0 top-0 z-40 border-b border-black/10 bg-white/[0.86] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group flex items-center gap-2 rounded-md">
          <span className="text-xl font-semibold tracking-normal">
            Ken <span className="text-brand-red">Isaac</span>
          </span>
          <span className="hidden text-xs font-medium uppercase tracking-[0.24em] text-muted-foreground sm:inline">
            Lead SDET
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-muted-foreground lg:flex" aria-label="Primary">
          {anchors.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              cn("transition-colors hover:text-foreground", isActive && "text-foreground")
            }
          >
            Dashboard
          </NavLink>
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="outline" size="sm">
            <a href={profile.resumeUrl} download>
              Resume
            </a>
          </Button>
          <Button asChild variant="red" size="sm">
            <a href="/#contact">Let's Talk</a>
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border bg-white text-foreground lg:hidden"
          aria-label={isOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="border-t bg-white px-4 py-4 shadow-soft lg:hidden"
          >
            <nav className="grid gap-2" aria-label="Mobile primary navigation">
              {anchors.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-md px-3 py-3 text-sm font-semibold text-foreground hover:bg-secondary"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <NavLink
                to="/dashboard"
                className={cn(
                  "rounded-md px-3 py-3 text-sm font-semibold hover:bg-secondary",
                  location.pathname === "/dashboard" ? "text-foreground" : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                Dashboard
              </NavLink>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
