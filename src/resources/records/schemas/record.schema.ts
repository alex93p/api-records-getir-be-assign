import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type RecordDocument = Record & Document;

/**
 * schema collection in the database
 */
@Schema()
export class Record {
  @Prop()
  key: string;

  @Prop()
  value: string;

  @Prop()
  createdAt: Date;

  @Prop([Number])
  count: number[];
}

export const RecordSchema = SchemaFactory.createForClass(Record);
