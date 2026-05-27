import { Injectable, Logger, OnModuleDestroy } from "@nestjs/common";
import Redis from "ioredis";

@Injectable()
export class RedisService implements OnModuleDestroy {
  private readonly logger = new Logger(RedisService.name);
  private readonly client: Redis | null;

  constructor() {
    const redisUrl = process.env.REDIS_URL;
    this.client = redisUrl ? new Redis(redisUrl, { lazyConnect: true }) : null;
  }

  async getClient() {
    if (!this.client) {
      return null;
    }

    if (this.client.status === "wait") {
      await this.client.connect();
      this.logger.log("Redis connected");
    }

    return this.client;
  }

  async onModuleDestroy() {
    if (this.client && this.client.status !== "end") {
      await this.client.quit();
    }
  }
}
