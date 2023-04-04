import { Replace } from '@helpers/replace';
import { randomUUID } from 'node:crypto';
import { Presenca } from './presenca';

export type ReuniaoProps = {
    name: string;
    clubId: string;
    description: string;
    date: Date;
    isActive: boolean;
    presencas: Presenca[];
    createdAt: Date;
    updatedAt: Date;
};

export class Reuniao {
    private _id: string;
    private props: ReuniaoProps;

    constructor(
        props: Replace<
            ReuniaoProps,
            {
                presencas?: Presenca[];
                createdAt?: Date;
                updatedAt?: Date;
            }
        >,
        id?: string,
    ) {
        this._id = id || randomUUID();
        this.props = {
            ...props,
            presencas: props.presencas || [],
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

    get description(): string {
        return this.props.description;
    }

    get date(): Date {
        return this.props.date;
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

    get presencas(): Presenca[] {
        return this.props.presencas;
    }

    public update(props: Partial<ReuniaoProps>): void {
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
            description: this.description,
            date: this.date,
            presencas: this.presencas.map((user) => user.toJSON()),
            isActive: this.isActive,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
}
