import { UnitRepository } from '@domain/repositories/unit.repository';
import { Injectable } from '@nestjs/common';
import { UnitNotFound } from '@useCases/errors/UnitNotFound';

@Injectable()
export class DeleteUnitUseCase {
    constructor(private repository: UnitRepository) {}

    async execute(id: string) {
        const place = await this.repository.findById(id);
        if (place) {
            return this.repository.delete(id);
        } else {
            throw new UnitNotFound();
        }
    }
}
