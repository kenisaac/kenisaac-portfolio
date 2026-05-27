import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import { ExperienceDto } from "@/modules/portfolio/dto/experience.dto";
import { PortfolioProfileDto } from "@/modules/portfolio/dto/portfolio-profile.dto";
import { ProjectDto } from "@/modules/portfolio/dto/project.dto";
import { SkillCategoryDto } from "@/modules/portfolio/dto/skill-category.dto";
import { PortfolioService } from "@/modules/portfolio/portfolio.service";

@ApiTags("portfolio")
@Controller("portfolio")
export class PortfolioController {
  constructor(private readonly portfolioService: PortfolioService) {}

  @Get("profile")
  @ApiOkResponse({ type: PortfolioProfileDto })
  getProfile() {
    return this.portfolioService.getProfile();
  }

  @Get("experience")
  @ApiOkResponse({ type: [ExperienceDto] })
  getExperience() {
    return this.portfolioService.getExperience();
  }

  @Get("skills")
  @ApiOkResponse({ type: [SkillCategoryDto] })
  getSkills() {
    return this.portfolioService.getSkills();
  }

  @Get("projects")
  @ApiOkResponse({ type: [ProjectDto] })
  getProjects() {
    return this.portfolioService.getProjects();
  }
}
