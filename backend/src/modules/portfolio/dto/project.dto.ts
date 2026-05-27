import { ApiProperty } from "@nestjs/swagger";

export class ProjectDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  slug: string;

  @ApiProperty()
  problem: string;

  @ApiProperty()
  solution: string;

  @ApiProperty({ type: [String] })
  tools: string[];

  @ApiProperty()
  outcome: string;
}
