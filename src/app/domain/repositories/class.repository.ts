import { Class } from '@domain/entities/user/class/class';

export abstract class ClassRepository {
    abstract create(classe: Class): Promise<void>;
    abstract update(classe: Class): Promise<void>;
    abstract delete(id: string): Promise<void>;
    abstract findById(id: string): Promise<Class>;
    abstract findAll(): Promise<Class[]>;
}
