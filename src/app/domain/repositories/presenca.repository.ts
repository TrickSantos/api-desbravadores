import { Presenca } from '@domain/entities/challenge/presenca/presenca';

export abstract class PresencaRepository {
    abstract create(presenca: Presenca): Promise<void>;
    abstract update(presenca: Presenca): Promise<void>;
    abstract delete(id: string): Promise<void>;
    abstract findById(id: string): Promise<Presenca>;
    abstract findAll(): Promise<Presenca[]>;
}
