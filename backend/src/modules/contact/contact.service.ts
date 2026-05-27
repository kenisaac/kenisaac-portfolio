import { Inject, Injectable } from "@nestjs/common";
import { PrismaService } from "@/database/prisma.service";
import { EVENT_BUS, type EventBus } from "@/events/event-bus.interface";
import { CONTACT_MESSAGE_CREATED } from "@/events/event-types";
import { CreateContactMessageDto } from "@/modules/contact/dto/create-contact-message.dto";

@Injectable()
export class ContactService {
  constructor(
    private readonly prisma: PrismaService,
    @Inject(EVENT_BUS) private readonly eventBus: EventBus
  ) {}

  async createMessage(dto: CreateContactMessageDto) {
    const message = await this.prisma.contactMessage.create({
      data: {
        name: dto.name.trim(),
        email: dto.email.trim().toLowerCase(),
        subject: dto.subject.trim(),
        message: dto.message.trim()
      }
    });

    await this.eventBus.publish(CONTACT_MESSAGE_CREATED, {
      id: message.id,
      email: message.email,
      subject: message.subject,
      createdAt: message.createdAt.toISOString()
    });

    return {
      id: message.id,
      status: message.status,
      createdAt: message.createdAt.toISOString()
    };
  }
}
