import { Module } from "@nestjs/common";
import { PortfolioController } from "@/modules/portfolio/portfolio.controller";
import { PortfolioService } from "@/modules/portfolio/portfolio.service";

@Module({
  controllers: [PortfolioController],
  providers: [PortfolioService],
  exports: [PortfolioService]
})
export class PortfolioModule {}
