import { Body, Controller, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthService } from "@/modules/auth/auth.service";
import { GoogleAuthDto } from "@/modules/auth/dto/google-auth.dto";

@ApiTags("auth")
@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("google")
  google(@Body() dto: GoogleAuthDto) {
    return this.authService.googleSignIn(dto);
  }
}
