import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { RecordsModule } from './resources/records/records.module';
import env from './env/env';

/**
 * loads all modules, controllers and providers in the application
 * and provides the connection to the database
 */
@Module({
  imports: [MongooseModule.forRoot(env.MONGODB), RecordsModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
