import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../services/app.service';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot('mongodb://food-db:food-db@mongo-db:27017/food-db?authSource=admin')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
