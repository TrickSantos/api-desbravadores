import { AuthService } from '@infra/authentication/authentication.service';
import { LocalAuthGuard } from '@infra/authentication/guards/local.guard';
import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { LoginDTO } from '../dtos/auth/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    signIn(@Body() signInDto: LoginDTO) {
        return this.authService.validate(signInDto.email, signInDto.password);
    }
}
