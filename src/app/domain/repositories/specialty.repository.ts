import { Specialty } from '@domain/entities/user/specialty/specialty';

export abstract class SpecialtyRepository {
    abstract create(specialty: Specialty): Promise<void>;
    abstract update(specialty: Specialty): Promise<void>;
    abstract delete(id: string): Promise<void>;
    abstract findById(id: string): Promise<Specialty>;
    abstract findAll(): Promise<Specialty[]>;
}
