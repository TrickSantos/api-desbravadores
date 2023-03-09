import { Unit } from '@domain/entities/unit/unit';
import { UnitRepository } from '@domain/repositories/unit.repository';
import { Injectable } from '@nestjs/common';

type CreateUnitDTO = {
    name: string;
    logo: string;
    clubId: string;
};

@Injectable()
export class CreateUnitUseCase {
    constructor(private repository: UnitRepository) {}

    async execute(data: CreateUnitDTO): Promise<void> {
        const place = new Unit(data);

        return this.repository.create(place);
    }
}
