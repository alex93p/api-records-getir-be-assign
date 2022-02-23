import { Controller, Get } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation, ApiTags,
} from '@nestjs/swagger';

// todo: comments
@Controller()
export class AppController {
  @ApiTags('health check')
  @ApiOperation({ description: 'Health check' })
  @ApiOkResponse()
  @ApiInternalServerErrorResponse()
  @Get()
  healthCheck(): string {
    return 'Ok';
  }
}
