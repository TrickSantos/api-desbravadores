import { Unit } from '@domain/entities/unit/unit';
import { UnitRepository } from '@domain/repositories/unit.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class ListAllUnitsUseCase {
    constructor(private repository: UnitRepository) {}

    async execute(): Promise<Unit[]> {
        return this.repository.findAll();
    }
}
