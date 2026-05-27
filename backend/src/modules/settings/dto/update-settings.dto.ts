import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsIn, IsOptional, IsString } from "class-validator";

export class UpdateSettingsDto {
  @ApiPropertyOptional({ enum: ["LIGHT", "DARK", "SYSTEM"] })
  @IsOptional()
  @IsIn(["LIGHT", "DARK", "SYSTEM"])
  theme?: "LIGHT" | "DARK" | "SYSTEM";

  @ApiPropertyOptional({ example: "Asia/Kolkata" })
  @IsOptional()
  @IsString()
  timezone?: string;
}
