import { Reuniao } from '@domain/entities/challenge/presenca/reuniao';

export abstract class ReuniaoRepository {
    abstract create(classe: Reuniao): Promise<void>;
    abstract update(classe: Reuniao): Promise<void>;
    abstract delete(id: string): Promise<void>;
    abstract findById(id: string): Promise<Reuniao>;
    abstract findAll(): Promise<Reuniao[]>;
}
