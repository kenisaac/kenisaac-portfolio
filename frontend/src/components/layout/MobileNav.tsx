import { NavLink } from "react-router-dom";
import { routes } from "@/config/routes";
import { cn } from "@/lib/utils";

export function MobileNav() {
  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-40 border-t bg-background/95 px-2 pb-[env(safe-area-inset-bottom)] pt-2 backdrop-blur lg:hidden"
      aria-label="Mobile navigation"
    >
      <div className="grid grid-cols-3 gap-1">
        {routes.map((route) => (
          <NavLink
            key={route.href}
            to={route.href}
            className={({ isActive }) =>
              cn(
                "flex min-h-14 flex-col items-center justify-center gap-1 rounded-md text-xs font-medium text-muted-foreground",
                isActive && "bg-secondary text-foreground"
              )
            }
          >
            <route.icon className="h-4 w-4" aria-hidden="true" />
            {route.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}
