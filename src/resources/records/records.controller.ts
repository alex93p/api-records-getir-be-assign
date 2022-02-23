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

// todo: comments
@Controller()
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

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
