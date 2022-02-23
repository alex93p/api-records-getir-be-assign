import { ApiProperty } from '@nestjs/swagger';

/**
 * data transfer object input used for search
 */
export class SearchDto {
  @ApiProperty({ required: true, nullable: false, format: 'date' })
  startDate: Date;
  @ApiProperty({ required: true, nullable: false, format: 'date' })
  endDate: Date;
  @ApiProperty({ required: true, nullable: false, format: 'integer' })
  minCount: number;
  @ApiProperty({ required: true, nullable: false, format: 'integer' })
  maxCount: number;
}
