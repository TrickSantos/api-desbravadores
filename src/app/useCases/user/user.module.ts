import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { AddRoleUseCase } from './addRole';
import { CreateUserUseCase } from './create';
import { DeleteUserUseCase } from './delete';
import { FindUserByEmailUseCase } from './findByEmail';
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
        FindUserByEmailUseCase,
    ],
    exports: [
        CreateUserUseCase,
        ListAllUsersUseCase,
        FindUserByIdUseCase,
        UpdateUserUseCase,
        DeleteUserUseCase,
        AddRoleUseCase,
        RemoveRoleUseCase,
        FindUserByEmailUseCase,
    ],
})
export class UserUseCaseModule {}
