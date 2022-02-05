import { Module } from '@nestjs/common';
import { AuthService } from '../../services/auth/auth.service';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { AuthStrategy } from '../../shared/domain/strategy/auth.strategy';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/shared/domain/models/user.schema';
import { AuthController } from 'src/controllers/auth/auth.controller';
import { UsersService } from 'src/services/users/users.service';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { CryptoUtil } from 'src/shared/util/crypto.util';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    PassportModule.register({
      defaultStrategy: 'jwt',
    }),
    JwtModule.register({
      secret: '1234ed23t',
      signOptions: {
        expiresIn: '2 days',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    AuthStrategy,
    UsersService,
    CryptoUtil
  ],
  exports: [JwtModule]
})
export class AuthModule {}
