import { ApiProperty } from '@nestjs/swagger';
import { DetailsDto } from '../dto/details.dto';

export class Ok {
  @ApiProperty({ enum: [200] })
  code: 200;
  @ApiProperty()
  msg: string;
  @ApiProperty({ type: DetailsDto, isArray: true })
  records: DetailsDto[];
}

class Context {
  @ApiProperty({ description: 'Child error', example: 'abc' })
  child: string;
  @ApiProperty({ description: 'Label error', example: 'data.abs' })
  label: string;
  @ApiProperty({ description: 'value error', example: '' })
  value: string;
  @ApiProperty({ description: 'Key error', example: 'abc' })
  key: string;
}
class Error {
  @ApiProperty({
    description: 'Error message',
    example: '"data.abs" is not allowed',
  })
  message: string;
  @ApiProperty({
    description: 'Error path',
    isArray: true,
    example: ['data', 'abc'],
  })
  path: string[];
  @ApiProperty({ description: 'Error type', example: 'object.unknown' })
  type: string;
  @ApiProperty({ description: 'Error context', type: Context })
  context: Context;
}
class BadRequest {
  @ApiProperty({ enum: [400] })
  statusCode: 400;
  @ApiProperty({ description: 'Description error schema', type: Error })
  response: Error;
  @ApiProperty({ example: '2022-02-23T23:25:46.804Z' })
  timestamp: Date;
  @ApiProperty({ example: '/records' })
  path: string;
}
export class BadRequestResponse {
  @ApiProperty({ enum: [400] })
  code: 400;
  @ApiProperty()
  msg: string;
  @ApiProperty({ type: BadRequest })
  error: BadRequest;
}

export class InternalServerErrorResponse {
  @ApiProperty({ enum: [500] })
  code: 500;
  @ApiProperty()
  msg: string;
  @ApiProperty()
  error: string;
}
