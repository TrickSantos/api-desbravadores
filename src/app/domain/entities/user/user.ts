import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/replace';
import { Class } from './class/class';
import { Contact } from './contact/contact';
import { Permission } from './permission/permission';
import { Role } from './role/role';
import { Specialty } from './specialty/specialty';

export type UserProps = {
    clubId: string;
    name: string;
    password: string;
    email: string;
    birthday: Date;
    gender: string;
    isActive: boolean;
    permissions: Permission[];
    roles: Role[];
    contact?: Contact[];
    classes?: Class[];
    specialties?: Specialty[];
    createdAt: Date;
    updatedAt: Date;
};

export class User implements UserProps {
    private _id: string;
    private props: UserProps;

    constructor(
        props: Replace<
            UserProps,
            {
                isActive?: boolean;
                createdAt?: Date;
                updatedAt?: Date;
                permissions?: Permission[];
                roles?: Role[];
            }
        >,
        id?: string,
    ) {
        this._id = id || randomUUID();
        this.props = {
            ...props,
            isActive: props.isActive || true,
            createdAt: props.createdAt || new Date(),
            updatedAt: props.updatedAt || new Date(),
            permissions: props.permissions || [],
            contact: props.contact || [],
            roles: props.roles || [],
            classes: props.classes || [],
            specialties: props.specialties || [],
        };
    }

    get id(): string {
        return this._id;
    }

    get clubId(): string {
        return this.props.clubId;
    }

    get name(): string {
        return this.props.name;
    }

    get email(): string {
        return this.props.email;
    }

    get password(): string {
        return this.props.password;
    }

    get birthday(): Date {
        return this.props.birthday;
    }

    get gender(): string {
        return this.props.gender;
    }

    get permissions(): Permission[] {
        return this.props.permissions;
    }

    get roles(): Role[] {
        return this.props.roles;
    }

    get contact(): Contact[] {
        return this.props.contact;
    }

    get classes(): Class[] {
        return this.props.classes;
    }

    get specialties(): Specialty[] {
        return this.props.specialties;
    }

    get isActive(): boolean {
        return this.props.isActive;
    }

    get createdAt(): Date {
        return this.props.createdAt;
    }

    get updatedAt(): Date {
        return this.props.updatedAt;
    }

    public update(props: Partial<UserProps>): void {
        this.props = {
            ...this.props,
            ...props,
            updatedAt: new Date(),
        };
    }

    public toJSON() {
        return {
            id: this.id,
            clubId: this.clubId,
            name: this.name,
            email: this.email,
            gender: this.gender,
            birthday: this.birthday,
            permissions: this.permissions,
            roles: this.roles,
            classes: this.classes,
            specialties: this.specialties,
            contact: this.contact,
            isActive: this.isActive,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
}
