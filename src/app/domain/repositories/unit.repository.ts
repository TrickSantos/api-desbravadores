import { Unit } from '@domain/entities/unit/unit';

export abstract class UnitRepository {
    abstract create(unit: Unit): Promise<void>;
    abstract update(unit: Unit): Promise<void>;
    abstract delete(id: string): Promise<void>;
    abstract findById(id: string): Promise<Unit>;
    abstract findAll(): Promise<Unit[]>;
}
