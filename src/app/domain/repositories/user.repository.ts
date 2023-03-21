import { User } from '@domain/entities/user/user';

type AddRoleDTO = {
    userId: string;
    roleId: string;
};

export abstract class UserRepository {
    abstract create(user: User): Promise<void>;
    abstract update(user: User): Promise<void>;
    abstract delete(id: string): Promise<void>;
    abstract findById(id: string): Promise<User>;
    abstract findAll(): Promise<User[]>;
    abstract findByEmail(email: string): Promise<User>;
    abstract addRole(payload: AddRoleDTO): Promise<void>;
    abstract removeRole(payload: AddRoleDTO): Promise<void>;
}
