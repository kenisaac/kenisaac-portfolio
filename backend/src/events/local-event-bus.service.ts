import { Injectable, Logger } from "@nestjs/common";
import type { EventBus } from "@/events/event-bus.interface";
import type { EventPayloads } from "@/events/event-types";

@Injectable()
export class LocalEventBusService implements EventBus {
  private readonly logger = new Logger(LocalEventBusService.name);

  async publish<K extends keyof EventPayloads>(event: K, payload: EventPayloads[K]) {
    this.logger.debug(`Event published locally: ${String(event)} ${JSON.stringify(payload)}`);
  }
}
