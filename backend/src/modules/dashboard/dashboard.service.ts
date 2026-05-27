import { Injectable } from "@nestjs/common";
import { PrismaService } from "@/database/prisma.service";

@Injectable()
export class DashboardService {
  constructor(private readonly prisma: PrismaService) {}

  async getSummary() {
    const [profileCount, experienceCount, projectCount, skillCount, messageCount] = await this.prisma.$transaction([
      this.prisma.portfolioProfile.count(),
      this.prisma.experience.count(),
      this.prisma.project.count(),
      this.prisma.skill.count(),
      this.prisma.contactMessage.count()
    ]);

    return {
      profileCount,
      experienceCount,
      projectCount,
      skillCount,
      messageCount,
      generatedAt: new Date().toISOString()
    };
  }
}
