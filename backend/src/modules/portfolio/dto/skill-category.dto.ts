import { ApiProperty } from "@nestjs/swagger";

export class SkillCategoryDto {
  @ApiProperty()
  name: string;

  @ApiProperty({ type: [String] })
  skills: string[];
}
