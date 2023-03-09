import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { CreateClubUseCase } from '@useCases/club/create';
import { DeleteClub } from '@useCases/club/delete';
import { FindClubById } from '@useCases/club/findById';
import { ListAllClubs } from '@useCases/club/listAll';
import { UpdateClub } from '@useCases/club/update';
import { CreateUnitUseCase } from '@useCases/unit/create';
import { DeleteUnitUseCase } from '@useCases/unit/delete';
import { FindUnitByIdUseCase } from '@useCases/unit/findById';
import { ListAllUnitsUseCase } from '@useCases/unit/listAll';
import { UpdateUnitUseCase } from '@useCases/unit/update';
import { CreateUserUseCase } from '@useCases/user/create';
import { DeleteUserUseCase } from '@useCases/user/delete';
import { FindUserByIdUseCase } from '@useCases/user/findById';
import { ListAllUsersUseCase } from '@useCases/user/listAll';
import { UpdateUserUseCase } from '@useCases/user/update';
import { ClubsController } from './controllers/club.controller';
import { UnitsController } from './controllers/unit.controller';
import { UsersController } from './controllers/users.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [ClubsController, UsersController, UnitsController],
    providers: [
        CreateClubUseCase,
        ListAllClubs,
        FindClubById,
        UpdateClub,
        DeleteClub,
        CreateUserUseCase,
        ListAllUsersUseCase,
        FindUserByIdUseCase,
        UpdateUserUseCase,
        DeleteUserUseCase,
        CreateUnitUseCase,
        ListAllUnitsUseCase,
        FindUnitByIdUseCase,
        UpdateUnitUseCase,
        DeleteUnitUseCase,
    ],
})
export class HttpModule {}
