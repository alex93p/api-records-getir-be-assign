import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordsModule } from './resources/records/records.module';
import env from './env/env';

// todo: comments
@Module({
  imports: [MongooseModule.forRoot(env.MONGODB), RecordsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
