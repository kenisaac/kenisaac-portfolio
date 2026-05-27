import { Module } from "@nestjs/common";
import { ConfigModule } from "@nestjs/config";
import { ThrottlerModule } from "@nestjs/throttler";
import { appConfig } from "@/config/app.config";
import { databaseConfig } from "@/config/database.config";
import { natsConfig } from "@/config/nats.config";
import { redisConfig } from "@/config/redis.config";
import { validateEnv } from "@/config/env.schema";
import { PrismaModule } from "@/database/prisma.module";
import { EventsModule } from "@/events/events.module";
import { RedisModule } from "@/redis/redis.module";
import { AuthModule } from "@/modules/auth/auth.module";
import { ContactModule } from "@/modules/contact/contact.module";
import { DashboardModule } from "@/modules/dashboard/dashboard.module";
import { HealthModule } from "@/modules/health/health.module";
import { PortfolioModule } from "@/modules/portfolio/portfolio.module";
import { ProfilesModule } from "@/modules/profiles/profiles.module";
import { SettingsModule } from "@/modules/settings/settings.module";
import { UsersModule } from "@/modules/users/users.module";

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig, redisConfig, natsConfig],
      validate: validateEnv
    }),
    ThrottlerModule.forRoot([
      {
        ttl: 60_000,
        limit: 60
      }
    ]),
    PrismaModule,
    RedisModule,
    EventsModule,
    HealthModule,
    PortfolioModule,
    ContactModule,
    DashboardModule,
    AuthModule,
    UsersModule,
    ProfilesModule,
    SettingsModule
  ]
})
export class AppModule {}
