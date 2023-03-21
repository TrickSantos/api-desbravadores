import { Permission } from '@domain/entities/user/permission/permission';

type AddToUserDTO = {
    userId: string;
    permissionId: string;
};
export abstract class PermissionRepository {
    abstract create(permission: Permission): Promise<void>;
    abstract update(permission: Permission): Promise<void>;
    abstract delete(id: string): Promise<void>;
    abstract findById(id: string): Promise<Permission>;
    abstract findAll(): Promise<Permission[]>;
    abstract addToUser(payload: AddToUserDTO): Promise<void>;
    abstract removeFromUser(payload: AddToUserDTO): Promise<void>;
}
