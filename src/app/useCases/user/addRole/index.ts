import { RoleRepository } from '@domain/repositories/role.repository';
import { UserRepository } from '@domain/repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { RoleNotFound } from '@useCases/errors/RoleNotFound';
import { UserNotFound } from '@useCases/errors/UserNotFound';

type AddRoleDTO = {
    userId: string;
    roleId: string;
};

@Injectable()
export class AddRoleUseCase {
    constructor(
        private userRepository: UserRepository,
        private roleRepository: RoleRepository,
    ) {}

    async execute({ roleId, userId }: AddRoleDTO) {
        const user = await this.userRepository.findById(userId);

        if (!user) {
            throw new UserNotFound();
        }

        const role = await this.roleRepository.findById(roleId);

        if (!role) {
            throw new RoleNotFound();
        }

        await this.userRepository.addRole({ userId, roleId });
    }
}
