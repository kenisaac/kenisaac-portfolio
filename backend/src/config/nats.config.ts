import { registerAs } from "@nestjs/config";

export const natsConfig = registerAs("nats", () => ({
  url: process.env.NATS_URL
}));
