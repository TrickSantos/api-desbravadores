import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreateUserUseCase } from '@useCases/user/create';
import { DeleteUserUseCase } from '@useCases/user/delete';
import { FindUserByIdUseCase } from '@useCases/user/findById';
import { ListAllUsersUseCase } from '@useCases/user/listAll';
import { UpdateUserUseCase } from '@useCases/user/update';
import { CreateUserDTO } from '../dtos/user/create.dto';
import { UpdateUserDto } from '../dtos/user/update.dto';

@Controller('users')
export class UsersController {
    constructor(
        private createUser: CreateUserUseCase,
        private listAllUsers: ListAllUsersUseCase,
        private findUserById: FindUserByIdUseCase,
        private updateUser: UpdateUserUseCase,
        private deleteUser: DeleteUserUseCase,
    ) {}

    @Get()
    async listAll() {
        const users = await this.listAllUsers.execute();
        return users.map((user) => user.toJSON());
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        const user = await this.findUserById.execute(id);
        return user.toJSON();
    }

    @Post()
    async create(@Body() body: CreateUserDTO) {
        await this.createUser.execute({
            name: body.name,
            password: body.password,
            email: body.email,
            birthday: body.birthday,
            clubId: body.clubId,
            gender: body.gender,
        });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: UpdateUserDto) {
        await this.updateUser.execute({
            id,
            ...body,
        });
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.deleteUser.execute(id);
    }
}
