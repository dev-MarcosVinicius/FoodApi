import * as bcrypt from 'bcrypt';

export class CryptoUtil {
    constructor() {}

    async encrypt(password: string, saltOrRounds: number = 10) {
        return await bcrypt.hash(password, saltOrRounds);
    }

    async compare(password: string, hash: string) {
        return await bcrypt.compare(password, hash);
    }
}