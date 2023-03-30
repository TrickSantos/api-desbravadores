import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { ClassesController } from './controllers/class.controller';
import { ClubsController } from './controllers/club.controller';
import { PermissionsController } from './controllers/permission.controller';
import { RolesController } from './controllers/role.controller';
import { SpecialtiesController } from './controllers/specialty.controller';
import { UnitsController } from './controllers/unit.controller';
import { PermissionUseCaseModule } from '@useCases/permission/permission.module';
import { ClassUseCaseModule } from '@useCases/class/class.module';
import { ClubUseCaseModule } from '@useCases/club/club.module';
import { RoleUseCaseModule } from '@useCases/role/role.module';
import { SpecialtyUseCaseModule } from '@useCases/specialty/specialty.module';
import { UserUseCaseModule } from '@useCases/user/user.module';
import { UnitUseCaseModule } from '@useCases/unit/unit.module';
import { ChallengeUseCaseModule } from '@useCases/challenge/challenge.module';
import { ChallengesController } from './controllers/challenge.controller';
import { ChallengeUnitsController } from './controllers/challengeUnit.controller';
import { AuthenticationModule } from '@infra/authentication/authentication.module';
import { AuthController } from './controllers/auth.controller';

@Module({
    imports: [
        ChallengeUseCaseModule,
        ClassUseCaseModule,
        ClubUseCaseModule,
        PermissionUseCaseModule,
        RoleUseCaseModule,
        SpecialtyUseCaseModule,
        UnitUseCaseModule,
        UserUseCaseModule,
        AuthenticationModule,
    ],
    controllers: [
        AuthController,
        ChallengesController,
        ChallengeUnitsController,
        ClassesController,
        ClubsController,
        UsersController,
        UnitsController,
        PermissionsController,
        RolesController,
        SpecialtiesController,
    ],
})
export class HttpModule {}
