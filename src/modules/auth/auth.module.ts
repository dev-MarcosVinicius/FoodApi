import { Module } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from '../../shared/domain/strategy/auth.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/shared/domain/models/user.schema';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
