import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    register(username) {
        return {id: 1, password: "Marcos"}
    }

    findOne(username) {
        return {id: 1, password: "Marcos"}
    }
}
