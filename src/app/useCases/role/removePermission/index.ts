import { PermissionRepository } from '@domain/repositories/permission.repository';
import { RoleRepository } from '@domain/repositories/role.repository';
import { Injectable } from '@nestjs/common';
import { PermissionNotFound } from '@useCases/errors/PermissionNotFound';
import { RoleNotFound } from '@useCases/errors/RoleNotFound';

type RemovePermissionDTO = {
    roleId: string;
    permissionId: string;
};

@Injectable()
export class RemovePermissionUseCase {
    constructor(
        private readonly roleRepository: RoleRepository,
        private readonly permissionRepository: PermissionRepository,
    ) {}

    async execute({ roleId, permissionId }: RemovePermissionDTO) {
        const role = await this.roleRepository.findById(roleId);

        if (!role) {
            throw new RoleNotFound();
        }

        const permission = await this.permissionRepository.findById(
            permissionId,
        );

        if (!permission) {
            throw new PermissionNotFound();
        }

        await this.roleRepository.removePermission({
            permissionId,
            roleId,
        });
    }
}
