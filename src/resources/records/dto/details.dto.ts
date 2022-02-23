import { ApiProperty } from '@nestjs/swagger';

/**
 * data transfer object returned to the client
 */
export class DetailsDto {
  @ApiProperty({ required: true, nullable: false })
  key: string;
  @ApiProperty({ required: true, nullable: false })
  createdAt: Date;
  @ApiProperty({ required: true, nullable: false, format: 'integer' })
  totalCount: number;
}
