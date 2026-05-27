import { Body, Controller, Patch } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { UpdateSettingsDto } from "@/modules/settings/dto/update-settings.dto";
import { SettingsService } from "@/modules/settings/settings.service";

@ApiTags("settings")
@Controller("settings")
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Patch("me")
  updateMe(@Body() dto: UpdateSettingsDto) {
    return this.settingsService.updatePlaceholder(dto);
  }
}
