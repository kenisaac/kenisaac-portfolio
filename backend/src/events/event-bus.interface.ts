import type { EventPayloads } from "@/events/event-types";

export const EVENT_BUS = Symbol("EVENT_BUS");

export interface EventBus {
  publish<K extends keyof EventPayloads>(event: K, payload: EventPayloads[K]): Promise<void>;
}
