import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { CreateClassUseCase } from '@useCases/class/create';
import { DeleteClassUseCase } from '@useCases/class/delete';
import { FindClassByIdUseCase } from '@useCases/class/findById';
import { ListAllClassesUseCase } from '@useCases/class/listAll';
import { UpdateClassUseCase } from '@useCases/class/update';
import { CreateClubUseCase } from '@useCases/club/create';
import { DeleteClub } from '@useCases/club/delete';
import { FindClubById } from '@useCases/club/findById';
import { ListAllClubs } from '@useCases/club/listAll';
import { UpdateClub } from '@useCases/club/update';
import { CreatePermissionUseCase } from '@useCases/permission/create';
import { DeletePermissionUseCase } from '@useCases/permission/delete';
import { FindPermissionByIdUseCase } from '@useCases/permission/findById';
import { ListAllPermissionsUseCase } from '@useCases/permission/listAll';
import { UpdatePermissionUseCase } from '@useCases/permission/update';
import { CreateRoleUseCase } from '@useCases/role/create';
import { DeleteRoleUseCase } from '@useCases/role/delete';
import { FindRoleByIdUseCase } from '@useCases/role/findById';
import { ListAllRolesUseCase } from '@useCases/role/listAll';
import { UpdateRoleUseCase } from '@useCases/role/update';
import { CreateSpecialtyUseCase } from '@useCases/specialty/create';
import { DeleteSpecialtyUseCase } from '@useCases/specialty/delete';
import { FindSpecialtyByIdUseCase } from '@useCases/specialty/findById';
import { ListAllSpecialtiesUseCase } from '@useCases/specialty/listAll';
import { UpdateSpecialtyUseCase } from '@useCases/specialty/update';
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
import { ClassesController } from './controllers/class.controller';
import { ClubsController } from './controllers/club.controller';
import { PermissionsController } from './controllers/permission.controller';
import { RolesController } from './controllers/role.controller';
import { SpecialtiesController } from './controllers/specialty.controller';
import { UnitsController } from './controllers/unit.controller';
import { UsersController } from './controllers/users.controller';

@Module({
    imports: [DatabaseModule],
    controllers: [
        ClassesController,
        ClubsController,
        UsersController,
        UnitsController,
        PermissionsController,
        RolesController,
        SpecialtiesController,
    ],
    providers: [
        CreateClassUseCase,
        DeleteClassUseCase,
        FindClassByIdUseCase,
        ListAllClassesUseCase,
        UpdateClassUseCase,
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
        CreateSpecialtyUseCase,
        DeleteSpecialtyUseCase,
        FindSpecialtyByIdUseCase,
        ListAllSpecialtiesUseCase,
        UpdateSpecialtyUseCase,
        CreateRoleUseCase,
        DeleteRoleUseCase,
        FindRoleByIdUseCase,
        ListAllRolesUseCase,
        UpdateRoleUseCase,
        CreatePermissionUseCase,
        DeletePermissionUseCase,
        FindPermissionByIdUseCase,
        ListAllPermissionsUseCase,
        UpdatePermissionUseCase,
    ],
})
export class HttpModule {}
