import { Injectable } from "@nestjs/common";

@Injectable()
export class ProfilesService {
  getPlaceholderProfile() {
    return {
      locale: "en",
      onboardingCompleted: true
    };
  }
}
