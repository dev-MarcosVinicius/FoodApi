import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/shared/domain/models/user.schema';
import { CreateUserDto } from 'src/shared/dto/users/create-user.dto';
import { CryptoUtil } from 'src/shared/util/crypto.util';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>,
        private cryptoUtil: CryptoUtil
    ) {}

    async register(userData: CreateUserDto) {
        return await this.userModel.create({
            ...userData,
            password: await this.cryptoUtil.encrypt(userData.password)
        });
    }

    async findOne(userEmail: string, projection = {}) {
        return await this.userModel.findOne({email: userEmail}, projection);
    }
}
