import { Injectable } from "@nestjs/common";
import { UpdateSettingsDto } from "@/modules/settings/dto/update-settings.dto";

@Injectable()
export class SettingsService {
  updatePlaceholder(dto: UpdateSettingsDto) {
    return {
      timezone: dto.timezone ?? "Asia/Kolkata",
      theme: dto.theme ?? "LIGHT",
      updatedAt: new Date().toISOString()
    };
  }
}
