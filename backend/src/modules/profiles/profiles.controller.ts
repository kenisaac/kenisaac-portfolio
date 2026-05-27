import { Controller, Get } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { ProfilesService } from "@/modules/profiles/profiles.service";

@ApiTags("profiles")
@Controller("profiles")
export class ProfilesController {
  constructor(private readonly profilesService: ProfilesService) {}

  @Get("me")
  getMe() {
    return this.profilesService.getPlaceholderProfile();
  }
}
