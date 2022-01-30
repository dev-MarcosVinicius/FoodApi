import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('')
  register(@Body() Body) {
    return this.usersService.register(Body);
  }
}
