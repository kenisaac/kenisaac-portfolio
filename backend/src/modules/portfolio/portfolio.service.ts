import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from "@/database/prisma.service";

@Injectable()
export class PortfolioService {
  constructor(private readonly prisma: PrismaService) {}

  async getProfile() {
    const profile = await this.prisma.portfolioProfile.findFirst({
      orderBy: { createdAt: "asc" }
    });

    if (!profile) {
      throw new NotFoundException("Portfolio profile has not been seeded");
    }

    return {
      name: profile.name,
      title: profile.title,
      headline: "Building scalable automation frameworks for web, API, and mobile platforms.",
      positioning:
        "I design scalable automation frameworks, lead quality engineering strategy, and help teams ship reliable software faster through UI, API, mobile, CI/CD, and AI-assisted QA practices.",
      summary: profile.summary,
      location: profile.location,
      email: profile.email,
      phone: profile.phone,
      linkedinUrl: profile.linkedinUrl,
      resumeUrl: profile.resumeUrl ?? "/resume/Ken_Isaac_Resume.pdf"
    };
  }

  async getExperience() {
    const items = await this.prisma.experience.findMany({
      orderBy: [{ sortOrder: "asc" }, { startDate: "desc" }]
    });

    return items.map((item) => ({
      company: item.company,
      role: item.role,
      period: formatPeriod(item.startDate, item.endDate),
      location: item.location ?? undefined,
      summary: item.summary ?? "",
      bullets: item.bullets
    }));
  }

  async getSkills() {
    const categories = await this.prisma.skillCategory.findMany({
      include: {
        skills: {
          orderBy: { sortOrder: "asc" }
        }
      },
      orderBy: { sortOrder: "asc" }
    });

    return categories.map((category) => ({
      name: category.name,
      skills: category.skills.map((skill) => skill.name)
    }));
  }

  async getProjects() {
    const projects = await this.prisma.project.findMany({
      where: { featured: true },
      orderBy: { sortOrder: "asc" }
    });

    return projects.map((project) => ({
      title: project.title,
      slug: project.slug,
      problem: project.problem,
      solution: project.solution,
      tools: project.tools,
      outcome: project.outcome
    }));
  }
}

function formatPeriod(startDate: Date, endDate: Date | null) {
  const formatter = new Intl.DateTimeFormat("en", {
    month: "short",
    year: "numeric",
    timeZone: "UTC"
  });

  return `${formatter.format(startDate)} - ${endDate ? formatter.format(endDate) : "Present"}`;
}
