import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  BadRequestException,
} from '@nestjs/common';
import { Schema } from 'joi';

@Injectable()
export class JoiValidationPipe implements PipeTransform {
  constructor(private schema: Schema) {}

  /**
   * generic validation pipe for input dto used into controllers
   * if validation fails it will throw an error
   * and returns a 400 http status code to the client
   * @param value
   * @param metadata
   */
  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = this.schema.validate(value);
    if (error)
      throw new BadRequestException({
        code: 400,
        msg: error.details[0].message,
        error: error.details[0],
      });
    return value;
  }
}
