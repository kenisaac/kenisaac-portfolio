import { Injectable, NotImplementedException } from "@nestjs/common";
import { GoogleAuthDto } from "@/modules/auth/dto/google-auth.dto";

@Injectable()
export class AuthService {
  googleSignIn(_dto: GoogleAuthDto) {
    throw new NotImplementedException("Google OAuth adapter is intentionally stubbed for future admin access.");
  }
}
