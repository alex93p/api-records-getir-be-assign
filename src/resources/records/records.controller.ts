import {
  Body,
  Controller,
  HttpCode,
  InternalServerErrorException,
  Post,
} from '@nestjs/common';
import { RecordsService, SERVICE_CODE } from './records.service';
import { JoiValidationPipe } from '../../pipes/validations/validation.pipe';
import { searchSchema } from './validations/search.schema';
import { SearchDto } from './dto/search.dto';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import {
  BadRequestResponse,
  InternalServerErrorResponse,
  Ok,
} from './docs/openapi.docs';

@Controller()
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  /**
   * method POST "/" in order to perform a query search
   * uses validation pipe for input
   * if validation fails return a bad request response as defined in validation pipe
   * than calls the service to resolve the request
   * finally swithes to service code response to give back the correct response to the client
   * if successes then return 200 http status code with records
   * if fails then return 500 http status code with the error
   */
  @ApiTags('search records')
  @ApiOperation({ description: 'Query data records' })
  @ApiBody({ type: SearchDto })
  @ApiOkResponse({ type: Ok })
  @ApiBadRequestResponse({ type: BadRequestResponse })
  @ApiInternalServerErrorResponse({ type: InternalServerErrorResponse })
  @HttpCode(200)
  @Post()
  async search(
    @Body(new JoiValidationPipe(searchSchema)) searchDto: SearchDto,
  ) {
    const { code, data } = await this.recordsService.search(searchDto);
    switch (code) {
      case SERVICE_CODE.OK:
        return {
          code: 0,
          msg: 'success',
          records: data,
        };
      case SERVICE_CODE.QUERY_ERROR:
        throw new InternalServerErrorException({
          code: 500,
          msg: 'Internal server error',
          error: data,
        });
    }
  }
}
