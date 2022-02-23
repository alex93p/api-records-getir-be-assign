import Joi from 'joi';
import { SearchDto } from '../dto/search.dto';

/**
 * validation schema for search input dto used in controller
 */
export const searchSchema = Joi.object<SearchDto>({
  startDate: Joi.date().required(),
  endDate: Joi.date().required(),
  minCount: Joi.number().integer().required(),
  maxCount: Joi.number().integer().required(),
}).unknown(true);
