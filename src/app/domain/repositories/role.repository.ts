import { Role } from '@domain/entities/user/role/role';

type AddPermissionDTO = {
    roleId: string;
    permissionId: string;
};
export abstract class RoleRepository {
    abstract create(role: Role): Promise<void>;
    abstract update(role: Role): Promise<void>;
    abstract delete(id: string): Promise<void>;
    abstract findById(id: string): Promise<Role>;
    abstract findAll(): Promise<Role[]>;
    abstract addPermission(payload: AddPermissionDTO): Promise<void>;
    abstract removePermission(payload: AddPermissionDTO): Promise<void>;
}
