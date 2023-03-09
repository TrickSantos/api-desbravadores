import { UnitRepository } from '@domain/repositories/unit.repository';
import { Injectable } from '@nestjs/common';
import { UnitNotFound } from '@useCases/errors/UnitNotFound';

type UpdateUnitDTO = {
    id: string;
    name?: string;
    logo?: string;
    clubId?: string;
};

@Injectable()
export class UpdateUnitUseCase {
    constructor(private repository: UnitRepository) {}

    async execute(data: UpdateUnitDTO) {
        const user = await this.repository.findById(data.id);
        if (user) {
            user.update({
                ...data,
            });
            return this.repository.update(user);
        } else {
            throw new UnitNotFound();
        }
    }
}
