import { Module } from "@nestjs/common";
import { EventsModule } from "@/events/events.module";
import { ContactController } from "@/modules/contact/contact.controller";
import { ContactService } from "@/modules/contact/contact.service";

@Module({
  imports: [EventsModule],
  controllers: [ContactController],
  providers: [ContactService],
  exports: [ContactService]
})
export class ContactModule {}
