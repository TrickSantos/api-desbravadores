import { randomUUID } from 'node:crypto';
import { Replace } from 'src/helpers/replace';
import { Unit } from '../unit/unit';

export interface ClubProps {
    name: string;
    logo: string;
    isActive: boolean;
    fundation: Date;
    city: string;
    state: string;
    association: string;
    unidades?: Unit[];
    createdAt: Date | null;
    updatedAt: Date;
}

export class Club implements ClubProps {
    private _id: string;
    private props: ClubProps;

    constructor(
        props: Replace<
            ClubProps,
            { createdAt?: Date; updatedAt?: Date; isActive?: boolean }
        >,
        id?: string,
    ) {
        this._id = id || randomUUID();
        this.props = {
            ...props,
            isActive: props.isActive || true,
            unidades: props.unidades || [],
            createdAt: props.createdAt || new Date(),
            updatedAt: props.updatedAt || new Date(),
        };
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this.props.name;
    }

    get logo(): string {
        return this.props.logo;
    }

    get fundation(): Date {
        return this.props.fundation;
    }

    get city(): string {
        return this.props.city;
    }

    get state(): string {
        return this.props.state;
    }

    get association(): string {
        return this.props.association;
    }

    get unidades(): Unit[] {
        return this.props.unidades;
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

    public update(props: Partial<ClubProps>): void {
        this.props = {
            ...this.props,
            ...props,
            updatedAt: new Date(),
        };
    }

    public toJSON() {
        return {
            id: this.id,
            name: this.name,
            logo: this.logo,
            fundacao: this.fundation,
            cidade: this.city,
            estado: this.state,
            associacao: this.association,
            isActive: this.isActive,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
}
