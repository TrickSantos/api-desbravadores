import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UserUseCaseModule } from '@useCases/user/user.module';
import { AuthService } from './authentication.service';
import { JwtStrategy } from './strategy/jwt.strategy';
import { LocalStrategy } from './strategy/local.strategy';

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: 'clubeSirius_secret',
            signOptions: { expiresIn: '3d' },
        }),
        UserUseCaseModule,
    ],
    providers: [AuthService, LocalStrategy, JwtStrategy],
    exports: [AuthService],
})
export class AuthenticationModule {}
