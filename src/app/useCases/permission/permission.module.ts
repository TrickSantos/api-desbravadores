import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { AddToUserUseCase } from './addToUser';
import { CreatePermissionUseCase } from './create';
import { DeletePermissionUseCase } from './delete';
import { FindPermissionByIdUseCase } from './findById';
import { ListAllPermissionsUseCase } from './listAll';
import { RemoveFromUserUseCase } from './removeFromUser';
import { UpdatePermissionUseCase } from './update';

@Module({
    imports: [DatabaseModule],
    providers: [
        CreatePermissionUseCase,
        DeletePermissionUseCase,
        FindPermissionByIdUseCase,
        ListAllPermissionsUseCase,
        UpdatePermissionUseCase,
        AddToUserUseCase,
        RemoveFromUserUseCase,
    ],
    exports: [
        CreatePermissionUseCase,
        DeletePermissionUseCase,
        FindPermissionByIdUseCase,
        ListAllPermissionsUseCase,
        UpdatePermissionUseCase,
        AddToUserUseCase,
        RemoveFromUserUseCase,
    ],
})
export class PermissionUseCaseModule {}
