import { Module } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';
import { UsersController } from '../../controllers/users/users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/shared/domain/models/user.schema';
import { CryptoUtil } from 'src/shared/util/crypto.util';

@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService, CryptoUtil]
})
export class UsersModule {}
