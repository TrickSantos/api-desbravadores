import { Role } from '@domain/entities/user/role/role';
import { RoleRepository } from '@domain/repositories/role.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllRolesUseCase {
    constructor(private placeRepository: RoleRepository) {}

    async execute(): Promise<Role[]> {
        return this.placeRepository.findAll();
    }
}
