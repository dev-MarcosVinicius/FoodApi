import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    findOne(username) {
        return {id: 1, password: "Marcos"}
    }
}
