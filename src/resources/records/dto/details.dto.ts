import { ApiProperty } from '@nestjs/swagger';

// todo: comments
export class DetailsDto {
  @ApiProperty({ required: true, nullable: false })
  key: string;
  @ApiProperty({ required: true, nullable: false })
  createdAt: Date;
  @ApiProperty({ required: true, nullable: false, format: 'integer' })
  totalCount: number;
}
