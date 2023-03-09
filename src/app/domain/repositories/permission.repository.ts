import { Permission } from '@domain/entities/user/permission/permission';

export abstract class PermissionRepository {
    abstract create(permission: Permission): Promise<void>;
    abstract update(permission: Permission): Promise<void>;
    abstract delete(permission: Permission): Promise<void>;
    abstract findById(id: string): Promise<Permission>;
    abstract findAll(): Promise<Permission[]>;
}