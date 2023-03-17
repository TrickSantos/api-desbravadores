import { Permission } from '@domain/entities/user/permission/permission';
import { PermissionRepository } from '@domain/repositories/permission.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllPermissionsUseCase {
    constructor(private placeRepository: PermissionRepository) {}

    async execute(): Promise<Permission[]> {
        return this.placeRepository.findAll();
    }
}
