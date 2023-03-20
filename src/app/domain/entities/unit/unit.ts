import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/replace';
import { Club } from '../club/club';
import { User } from '../user/user';

export interface UnitProps {
    name: string;
    logo: string;
    isActive: boolean;
    clubId: string;
    clube?: Club;
    members?: User[];
    createdAt: Date | null;
    updatedAt: Date;
}

export class Unit implements UnitProps {
    private _id: string;
    private props: UnitProps;

    constructor(
        props: Replace<
            UnitProps,
            { createdAt?: Date; updatedAt?: Date; isActive?: boolean }
        >,
        id?: string,
    ) {
        this._id = id || randomUUID();
        this.props = {
            ...props,
            isActive: props.isActive || true,
            members: props.members || [],
            createdAt: props.createdAt || new Date(),
            updatedAt: props.updatedAt || new Date(),
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

    get logo(): string {
        return this.props.logo;
    }

    get members(): User[] {
        return this.props.members;
    }

    get isActive(): boolean {
        return this.props.isActive;
    }

    get createdAt(): Date | null {
        return this.props.createdAt;
    }

    get updatedAt(): Date {
        return this.props.updatedAt;
    }

    public update(props: Partial<UnitProps>): void {
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
            logo: this.logo,
            members: this.members.map((member) => member.toJSON()),
            isActive: this.isActive,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
}
