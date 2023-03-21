import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { AddPermissionUseCase } from '@useCases/role/addPermission';
import { CreateRoleUseCase } from '@useCases/role/create';
import { DeleteRoleUseCase } from '@useCases/role/delete';
import { FindRoleByIdUseCase } from '@useCases/role/findById';
import { ListAllRolesUseCase } from '@useCases/role/listAll';
import { RemovePermissionUseCase } from '@useCases/role/removePermission';
import { UpdateRoleUseCase } from '@useCases/role/update';
import { CreateRoleDTO } from '../dtos/role/create.dto';
import { UpdateRoleDTO } from '../dtos/role/update.dto';

@Controller('roles')
export class RolesController {
    constructor(
        private createRole: CreateRoleUseCase,
        private listAllRoles: ListAllRolesUseCase,
        private findByIdRole: FindRoleByIdUseCase,
        private updateRole: UpdateRoleUseCase,
        private deleteRole: DeleteRoleUseCase,
        private addPermissionToRole: AddPermissionUseCase,
        private removePermissionFromRole: RemovePermissionUseCase,
    ) {}

    @Get()
    async listAll() {
        const clubs = await this.listAllRoles.execute();
        return clubs.map((club) => club.toJSON());
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        const club = await this.findByIdRole.execute(id);
        return club.toJSON();
    }

    @Post()
    async create(@Body() body: CreateRoleDTO) {
        await this.createRole.execute({
            name: body.name,
        });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: UpdateRoleDTO) {
        await this.updateRole.execute({
            id,
            ...body,
        });
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.deleteRole.execute(id);
    }

    @Post(':roleId/permissions/:permissionId')
    async addPermission(
        @Param('roleId') roleId: string,
        @Param('permissionId') permissionId: string,
    ) {
        await this.addPermissionToRole.execute({ roleId, permissionId });
    }

    @Delete(':roleId/permissions/:permissionId')
    async removePermission(
        @Param('roleId') roleId: string,
        @Param('permissionId') permissionId: string,
    ) {
        await this.removePermissionFromRole.execute({ roleId, permissionId });
    }
}
