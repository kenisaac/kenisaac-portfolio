import { BriefcaseBusiness, Mail } from "lucide-react";

export const routes = [
  { label: "Portfolio", href: "/", icon: BriefcaseBusiness },
  { label: "Contact", href: "/contact", icon: Mail }
] as const;
