import { BarChart3, BriefcaseBusiness, Mail } from "lucide-react";

export const routes = [
  { label: "Portfolio", href: "/", icon: BriefcaseBusiness },
  { label: "Contact", href: "/contact", icon: Mail },
  { label: "Dashboard", href: "/dashboard", icon: BarChart3 }
] as const;
