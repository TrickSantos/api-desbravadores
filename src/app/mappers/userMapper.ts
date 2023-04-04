import { Presenca } from '@domain/entities/challenge/presenca/presenca';
import { Class } from '@domain/entities/user/class/class';
import { Contact } from '@domain/entities/user/contact/contact';
import { Permission } from '@domain/entities/user/permission/permission';
import { Role } from '@domain/entities/user/role/role';
import { Specialty } from '@domain/entities/user/specialty/specialty';
import { User } from '@domain/entities/user/user';
import {
    User as UserPrisma,
    Role as RolePrisma,
    Permission as PermissionPrisma,
    Class as ClassPrisma,
    Specialty as SpecialtyPrisma,
    Contact as ContactPrisma,
    Presenca as PresencaPrisma,
} from '@prisma/client';

type Input = UserPrisma & {
    roles?: RolePrisma[];
    permissions?: PermissionPrisma[];
    classes?: ClassPrisma[];
    specialties?: SpecialtyPrisma[];
    contacts?: ContactPrisma[];
    presencas?: PresencaPrisma[];
};

class UserMapper {
    toClass(data: Input): User {
        const roles = data.roles?.map((role) => new Role(role, role.id));
        const permissions = data.permissions?.map(
            (permission) => new Permission(permission, permission.id),
        );
        const classes = data.classes?.map(
            (classItem) => new Class(classItem, classItem.id),
        );
        const specialties = data.specialties?.map(
            (specialty) => new Specialty(specialty, specialty.id),
        );
        const contacts = data.contacts?.map(
            (contact) => new Contact(contact, contact.id),
        );

        const presencas = data.presencas?.map(
            (presenca) => new Presenca(presenca, presenca.id),
        );

        return new User(
            {
                name: data.name,
                email: data.email,
                password: data.password,
                birthday: data.birthday,
                clubId: data.clubId,
                gender: data.gender,
                isActive: data.isActive,
                roles,
                permissions,
                classes,
                specialties,
                contacts,
                presencas,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt,
            },
            data.id,
        );
    }
}

export default new UserMapper();
