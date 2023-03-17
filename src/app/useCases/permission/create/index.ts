import { Permission } from '@domain/entities/user/permission/permission';
import { PermissionRepository } from '@domain/repositories/permission.repository';
import { Injectable } from '@nestjs/common';

type CreatePermissionDTO = {
    name: string;
};

@Injectable()
export class CreatePermissionUseCase {
    constructor(private repository: PermissionRepository) {}

    async execute(data: CreatePermissionDTO): Promise<void> {
        const category = new Permission(data);

        return this.repository.create(category);
    }
}
