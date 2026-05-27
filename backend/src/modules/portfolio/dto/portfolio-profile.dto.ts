import { ApiProperty } from "@nestjs/swagger";

export class PortfolioProfileDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  headline: string;

  @ApiProperty()
  positioning: string;

  @ApiProperty()
  summary: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  linkedinUrl: string;

  @ApiProperty()
  resumeUrl: string;
}
