import { UnitRepository } from '@domain/repositories/unit.repository';
import { UserRepository } from '@domain/repositories/user.repository';
import { Injectable } from '@nestjs/common';
import { UnitNotFound } from '@useCases/errors/UnitNotFound';
import { UserNotFound } from '@useCases/errors/UserNotFound';

type RemoveMemberDTO = {
    unitId: string;
    memberId: string;
};

@Injectable()
export class RemoveMemberFromUnitUseCase {
    constructor(
        private unitrepository: UnitRepository,
        private userRepository: UserRepository,
    ) {}

    async execute(payload: RemoveMemberDTO): Promise<void> {
        const member = await this.userRepository.findById(payload.memberId);
        if (!member) {
            throw new UserNotFound();
        }

        const unit = await this.unitrepository.findById(payload.unitId);
        if (!unit) {
            throw new UnitNotFound();
        }

        return this.unitrepository.removeMember(payload);
    }
}
