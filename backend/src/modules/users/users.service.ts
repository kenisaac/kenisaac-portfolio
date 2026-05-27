import { Injectable } from "@nestjs/common";

@Injectable()
export class UsersService {
  getCurrentUserPlaceholder() {
    return {
      id: "portfolio-admin-placeholder",
      name: "Ken Isaac",
      email: "kenisaac.d@gmail.com",
      role: "ADMIN"
    };
  }
}
