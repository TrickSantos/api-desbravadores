import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { AddToUserUseCase } from '@useCases/permission/addToUser';
import { CreatePermissionUseCase } from '@useCases/permission/create';
import { DeletePermissionUseCase } from '@useCases/permission/delete';
import { FindPermissionByIdUseCase } from '@useCases/permission/findById';
import { ListAllPermissionsUseCase } from '@useCases/permission/listAll';
import { RemoveFromUserUseCase } from '@useCases/permission/removeFromUser';
import { UpdatePermissionUseCase } from '@useCases/permission/update';
import { CreatePermissionDTO } from '../dtos/permission/create.dto';
import { UpdatePermissionDTO } from '../dtos/permission/update.dto';

@Controller('permissions')
export class PermissionsController {
    constructor(
        private createPermission: CreatePermissionUseCase,
        private listAllPermissions: ListAllPermissionsUseCase,
        private findByIdPermission: FindPermissionByIdUseCase,
        private updatePermission: UpdatePermissionUseCase,
        private deletePermission: DeletePermissionUseCase,
        private addPermissionToUser: AddToUserUseCase,
        private removePermissionFromUser: RemoveFromUserUseCase,
    ) {}

    @Get()
    async listAll() {
        const clubs = await this.listAllPermissions.execute();
        return clubs.map((club) => club.toJSON());
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        const club = await this.findByIdPermission.execute(id);
        return club.toJSON();
    }

    @Post()
    async create(@Body() body: CreatePermissionDTO) {
        await this.createPermission.execute({
            name: body.name,
        });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: UpdatePermissionDTO) {
        await this.updatePermission.execute({
            id,
            ...body,
        });
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.deletePermission.execute(id);
    }

    @Post(':userId/permissions/:permissionId')
    async addPermission(
        @Param('userId') userId: string,
        @Param('permissionId') permissionId: string,
    ) {
        await this.addPermissionToUser.execute({
            permissionId,
            userId,
        });
    }

    @Delete(':userId/permissions/:permissionId')
    async removePermission(
        @Param('userId') userId: string,
        @Param('permissionId') permissionId: string,
    ) {
        await this.removePermissionFromUser.execute({
            permissionId,
            userId,
        });
    }
}
