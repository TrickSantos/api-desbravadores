import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { AddRoleUseCase } from './addRole';
import { CreateUserUseCase } from './create';
import { DeleteUserUseCase } from './delete';
import { FindUserByIdUseCase } from './findById';
import { ListAllUsersUseCase } from './listAll';
import { RemoveRoleUseCase } from './removeRole';
import { UpdateUserUseCase } from './update';

@Module({
    imports: [DatabaseModule],
    providers: [
        CreateUserUseCase,
        ListAllUsersUseCase,
        FindUserByIdUseCase,
        UpdateUserUseCase,
        DeleteUserUseCase,
        AddRoleUseCase,
        RemoveRoleUseCase,
    ],
    exports: [
        CreateUserUseCase,
        ListAllUsersUseCase,
        FindUserByIdUseCase,
        UpdateUserUseCase,
        DeleteUserUseCase,
        AddRoleUseCase,
        RemoveRoleUseCase,
    ],
})
export class UserUseCaseModule {}
