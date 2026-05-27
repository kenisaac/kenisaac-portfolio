import { Injectable, Logger, OnModuleDestroy } from "@nestjs/common";
import { connect, NatsConnection, StringCodec } from "nats";
import type { EventBus } from "@/events/event-bus.interface";
import type { EventPayloads } from "@/events/event-types";

@Injectable()
export class NatsEventBusService implements EventBus, OnModuleDestroy {
  private readonly logger = new Logger(NatsEventBusService.name);
  private connection: NatsConnection | null = null;
  private readonly codec = StringCodec();

  async publish<K extends keyof EventPayloads>(event: K, payload: EventPayloads[K]) {
    const url = process.env.NATS_URL;
    if (!url) {
      return;
    }

    if (!this.connection) {
      this.connection = await connect({ servers: url });
      this.logger.log("NATS connected");
    }

    this.connection.publish(String(event), this.codec.encode(JSON.stringify(payload)));
  }

  async onModuleDestroy() {
    await this.connection?.drain();
  }
}
