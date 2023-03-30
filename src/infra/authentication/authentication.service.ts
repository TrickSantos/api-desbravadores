import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { FindUserByEmailUseCase } from '@useCases/user/findByEmail';
import { compare } from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private findUser: FindUserByEmailUseCase,
        private jwtService: JwtService,
    ) {}

    async validate(email: string, pass: string): Promise<any> {
        const user = await this.findUser.execute(email);

        const isPasswordValid = await compare(pass, user.password);

        if (!isPasswordValid) throw new UnauthorizedException();

        const payload = { email: user.email, sub: user.id };
        return {
            token: this.jwtService.sign(payload),
            user: user.toJSON(),
        };
    }

    async login(email: string) {
        const user = await this.findUser.execute(email);
        const payload = { email: user.email, sub: user.id };
        return {
            token: this.jwtService.sign(payload),
            user: user.toJSON(),
        };
    }
}
