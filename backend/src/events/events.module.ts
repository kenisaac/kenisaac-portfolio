import { Module } from "@nestjs/common";
import { EVENT_BUS } from "@/events/event-bus.interface";
import { LocalEventBusService } from "@/events/local-event-bus.service";
import { NatsEventBusService } from "@/events/nats-event-bus.service";

@Module({
  providers: [
    LocalEventBusService,
    NatsEventBusService,
    {
      provide: EVENT_BUS,
      inject: [LocalEventBusService, NatsEventBusService],
      useFactory: (local: LocalEventBusService, nats: NatsEventBusService) =>
        process.env.NATS_URL ? nats : local
    }
  ],
  exports: [EVENT_BUS]
})
export class EventsModule {}
