import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/shared/domain/models/user.schema';

@Injectable()
export class UsersService {
    constructor(
        @InjectModel(User.name) private userModel: Model<UserDocument>
    ) {}

    async register(username) {
        return await this.userModel.create(username);
    }

    findOne(username) {
        return {id: 1, password: "Marcos"}
    }
}
