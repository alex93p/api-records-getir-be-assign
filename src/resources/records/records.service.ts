import { Injectable } from '@nestjs/common';
import { SearchDto } from './dto/search.dto';
import { DetailsDto } from './dto/details.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RecordDocument, Record } from './schemas/record.schema';

export enum SERVICE_CODE {
  OK,
  QUERY_ERROR,
}

@Injectable()
export class RecordsService {
  constructor(
    @InjectModel(Record.name) private recordModel: Model<RecordDocument>,
  ) {}

  /**
   * perform a query on database matching the criteria passed from the client
   * then project the results to be compliant with the api specification
   * if fails returns the specific error
   * @param criteria
   */
  async search(
    criteria: SearchDto,
  ): Promise<
    ServiceResponse<DetailsDto[], SERVICE_CODE.OK | SERVICE_CODE.QUERY_ERROR>
  > {
    try {
      const records = await this.recordModel
        .aggregate()
        .match({
          createdAt: {
            $gte: new Date(criteria.startDate),
            $lte: new Date(criteria.endDate),
          },
        })
        .project({
          key: '$key',
          createdAt: '$createdAt',
          totalCount: { $sum: '$counts' },
        })
        .match({
          totalCount: {
            $gte: criteria.minCount,
            $lte: criteria.maxCount,
          },
        })
        .exec();
      return {
        code: SERVICE_CODE.OK,
        data: records,
      };
    } catch (e) {
      console.error(e);
      return {
        code: SERVICE_CODE.QUERY_ERROR,
        data: e.message || e || 'unknown',
      };
    }
  }
}
