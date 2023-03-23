import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { AddPermissionUseCase } from './addPermission';
import { CreateRoleUseCase } from './create';
import { DeleteRoleUseCase } from './delete';
import { FindRoleByIdUseCase } from './findById';
import { ListAllRolesUseCase } from './listAll';
import { RemovePermissionUseCase } from './removePermission';
import { UpdateRoleUseCase } from './update';

@Module({
    imports: [DatabaseModule],
    providers: [
        CreateRoleUseCase,
        DeleteRoleUseCase,
        FindRoleByIdUseCase,
        ListAllRolesUseCase,
        UpdateRoleUseCase,
        AddPermissionUseCase,
        RemovePermissionUseCase,
    ],
    exports: [
        CreateRoleUseCase,
        DeleteRoleUseCase,
        FindRoleByIdUseCase,
        ListAllRolesUseCase,
        UpdateRoleUseCase,
        AddPermissionUseCase,
        RemovePermissionUseCase,
    ],
})
export class RoleUseCaseModule {}
