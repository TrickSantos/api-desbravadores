import { Permission } from '@domain/entities/user/permission/permission';
import { PermissionRepository } from '@domain/repositories/permission.repository';
import { Injectable } from '@nestjs/common';
import { PermissionNotFound } from '@useCases/errors/PermissionNotFound';

@Injectable()
export class FindPermissionByIdUseCase {
    constructor(private readonly repository: PermissionRepository) {}

    async execute(id: string): Promise<Permission> {
        const found = await this.repository.findById(id);
        if (found) {
            return found;
        } else {
            throw new PermissionNotFound();
        }
    }
}
