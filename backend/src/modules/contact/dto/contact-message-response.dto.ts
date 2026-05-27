import { ApiProperty } from "@nestjs/swagger";

export class ContactMessageResponseDto {
  @ApiProperty()
  id: string;

  @ApiProperty({ enum: ["NEW", "READ", "ARCHIVED"] })
  status: "NEW" | "READ" | "ARCHIVED";

  @ApiProperty()
  createdAt: string;
}
