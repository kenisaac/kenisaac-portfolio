import { Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ResumeDownloadButton } from "@/components/layout/ResumeDownloadButton";
import type { PortfolioProfile } from "@/features/portfolio/types";
import { cn } from "@/lib/utils";

type ContactCardProps = {
  profile: PortfolioProfile;
  tone?: "default" | "dark";
};

export function ContactCard({ profile, tone = "default" }: ContactCardProps) {
  const isDark = tone === "dark";

  return (
    <Card className={cn(isDark && "border-white/10 !bg-white/[0.045] text-white shadow-none")}>
      <CardHeader>
        <CardTitle>Contact Ken</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <a className={cn("flex items-center gap-3 rounded-md p-2 hover:bg-secondary", isDark && "hover:bg-white/10")} href={`mailto:${profile.email}`}>
          <Mail className={cn("h-4 w-4 text-brand-cyan", isDark && "text-brand-red")} aria-hidden="true" />
          <span>{profile.email}</span>
        </a>
        <a className={cn("flex items-center gap-3 rounded-md p-2 hover:bg-secondary", isDark && "hover:bg-white/10")} href={`tel:${profile.phone.replaceAll(" ", "")}`}>
          <Phone className={cn("h-4 w-4 text-brand-cyan", isDark && "text-brand-red")} aria-hidden="true" />
          <span>{profile.phone}</span>
        </a>
        <a className={cn("flex items-center gap-3 rounded-md p-2 hover:bg-secondary", isDark && "hover:bg-white/10")} href={profile.linkedinUrl} target="_blank" rel="noreferrer">
          <Linkedin className={cn("h-4 w-4 text-brand-cyan", isDark && "text-brand-red")} aria-hidden="true" />
          <span>linkedin.com/in/kid</span>
        </a>
        <span className="flex items-center gap-3 rounded-md p-2">
          <MapPin className={cn("h-4 w-4 text-brand-cyan", isDark && "text-brand-red")} aria-hidden="true" />
          <span>{profile.location}</span>
        </span>
        <div className="grid gap-2 pt-2 sm:grid-cols-2">
          <Button asChild variant={isDark ? "red" : "default"}>
            <a href={`mailto:${profile.email}`}>Email Ken</a>
          </Button>
          <ResumeDownloadButton variant="outline" className={cn(isDark && "border-white/15 bg-white/5 text-white hover:bg-white/10 hover:text-white")} />
        </div>
      </CardContent>
    </Card>
  );
}
