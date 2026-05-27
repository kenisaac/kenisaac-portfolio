import { ApiProperty } from "@nestjs/swagger";

export class ExperienceDto {
  @ApiProperty()
  company: string;

  @ApiProperty()
  role: string;

  @ApiProperty()
  period: string;

  @ApiProperty({ required: false })
  location?: string;

  @ApiProperty()
  summary: string;

  @ApiProperty({ type: [String] })
  bullets: string[];
}
