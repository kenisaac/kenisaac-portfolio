import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { Throttle } from "@nestjs/throttler";
import { ApiCreatedResponse, ApiTags } from "@nestjs/swagger";
import { ContactMessageResponseDto } from "@/modules/contact/dto/contact-message-response.dto";
import { CreateContactMessageDto } from "@/modules/contact/dto/create-contact-message.dto";
import { ContactService } from "@/modules/contact/contact.service";

@ApiTags("contact")
@Controller("contact")
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post("messages")
  @HttpCode(HttpStatus.CREATED)
  @Throttle({ default: { limit: 5, ttl: 60_000 } })
  @ApiCreatedResponse({ type: ContactMessageResponseDto })
  createMessage(@Body() dto: CreateContactMessageDto) {
    return this.contactService.createMessage(dto);
  }
}
