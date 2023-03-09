import { Club } from '@domain/entities/club/club';

export abstract class ClubRepository {
    abstract create(club: Club): Promise<void>;
    abstract update(club: Club): Promise<void>;
    abstract delete(id: string): Promise<void>;
    abstract findById(id: string): Promise<Club>;
    abstract findAll(): Promise<Club[]>;
}
