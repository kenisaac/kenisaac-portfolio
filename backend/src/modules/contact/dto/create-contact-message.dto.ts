import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateContactMessageDto {
  @ApiProperty({ example: "Jane Recruiter" })
  @IsNotEmpty()
  name: string;

  @ApiProperty({ example: "jane@example.com" })
  @IsEmail()
  email: string;

  @ApiProperty({ example: "Lead SDET opportunity" })
  @IsNotEmpty()
  subject: string;

  @ApiProperty({ minLength: 20 })
  @IsNotEmpty()
  @MinLength(20)
  message: string;
}
