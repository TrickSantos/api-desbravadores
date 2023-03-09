import { Unit } from '@domain/entities/unit/unit';
import { UnitRepository } from '@domain/repositories/unit.repository';
import { Injectable } from '@nestjs/common';
import { UnitNotFound } from '@useCases/errors/UnitNotFound';

@Injectable()
export class FindUnitByIdUseCase {
    constructor(private readonly repository: UnitRepository) {}

    async execute(id: string): Promise<Unit> {
        const unit = await this.repository.findById(id);
        if (unit) {
            return unit;
        } else {
            throw new UnitNotFound();
        }
    }
}
