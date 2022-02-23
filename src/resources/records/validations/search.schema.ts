import Joi from 'joi';
import { SearchDto } from '../dto/search.dto';

// todo: comments
export const searchSchema = Joi.object<SearchDto>({
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  minCount: Joi.number().integer().required(),
  maxCount: Joi.number().integer().required(),
}).unknown(true);
