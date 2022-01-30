import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/shared/domain/models/user.schema';
import { CreateUserDto } from 'src/shared/dto/users/create-user.dto';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) {}

    async register(userData: CreateUserDto) {
        return await this.userModel.create(userData);
    }

    async findOne(userEmail) {
        return await this.userModel.findOne({email: userEmail});
    }
}
