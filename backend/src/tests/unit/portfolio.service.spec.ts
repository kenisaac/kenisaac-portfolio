import { NotFoundException } from "@nestjs/common";
import { PortfolioService } from "@/modules/portfolio/portfolio.service";

describe("PortfolioService", () => {
  const prisma = {
    portfolioProfile: {
      findFirst: jest.fn()
    },
    experience: {
      findMany: jest.fn()
    },
    skillCategory: {
      findMany: jest.fn()
    },
    project: {
      findMany: jest.fn()
    }
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("returns the portfolio profile with frontend-ready positioning", async () => {
    prisma.portfolioProfile.findFirst.mockResolvedValue({
      name: "Ken Isaac",
      title: "Lead SDET",
      summary: "Summary",
      location: "Chennai, India",
      email: "ken@example.com",
      phone: "+91",
      linkedinUrl: "https://linkedin.com/in/kid",
      resumeUrl: "/resume.pdf"
    });

    const service = new PortfolioService(prisma as never);
    await expect(service.getProfile()).resolves.toMatchObject({
      name: "Ken Isaac",
      headline: "Building scalable automation frameworks for web, API, and mobile platforms."
    });
  });

  it("throws when the profile has not been seeded", async () => {
    prisma.portfolioProfile.findFirst.mockResolvedValue(null);
    const service = new PortfolioService(prisma as never);
    await expect(service.getProfile()).rejects.toBeInstanceOf(NotFoundException);
  });
});
