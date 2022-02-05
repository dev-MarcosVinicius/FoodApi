import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { CryptoUtil } from 'src/shared/util/crypto.util';
import { userLogin, UserProps } from 'src/shared/types/user.type';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private cryptoUtil: CryptoUtil
  ) {}

  async validateUser(email: string, password: string): Promise<boolean> {
    const user = await this.usersService.findOne(email);

    return this.cryptoUtil.compare(password, user.password);
  }

  async login(userData: userLogin): Promise<UserProps> {
    const user = await this.usersService.findOne(userData.email, {
      id: 1,
      fullName: 1,
      email: 1,
      celPhone: 1,
      addres: 1,
      number: 1
    });

    if (!user) throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);

    return user;
  }
}