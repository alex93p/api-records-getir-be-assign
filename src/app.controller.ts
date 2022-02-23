import { Controller, Get } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation, ApiTags,
} from '@nestjs/swagger';

/**
 * app controller for just health check purpose
 * exposes only one method GET on "/"
 */
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
