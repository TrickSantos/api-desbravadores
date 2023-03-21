import { PermissionRepository } from '@domain/repositories/permission.repository';
import { UserRepository } from '@domain/repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { PermissionNotFound } from '@useCases/errors/PermissionNotFound';
import { UserNotFound } from '@useCases/errors/UserNotFound';

type AddToUserDTO = {
    userId: string;
    permissionId: string;
};

@Injectable()
export class AddToUserUseCase {
    constructor(
        private permissionRepository: PermissionRepository,
        private userRepository: UserRepository,
    ) {}

    async execute({ userId, permissionId }: AddToUserDTO) {
        const user = await this.userRepository.findById(userId);

        if (!user) {
            throw new UserNotFound();
        }

        const permission = await this.permissionRepository.findById(
            permissionId,
        );

        if (!permission) {
            throw new PermissionNotFound();
        }

        await this.permissionRepository.addToUser({ userId, permissionId });
    }
}
