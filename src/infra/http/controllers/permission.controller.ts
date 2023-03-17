import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreatePermissionUseCase } from '@useCases/permission/create';
import { DeletePermissionUseCase } from '@useCases/permission/delete';
import { FindPermissionByIdUseCase } from '@useCases/permission/findById';
import { ListAllPermissionsUseCase } from '@useCases/permission/listAll';
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
}
