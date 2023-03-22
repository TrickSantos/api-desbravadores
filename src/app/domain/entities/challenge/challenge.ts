import { Replace } from '@helpers/replace';
import { randomUUID } from 'node:crypto';

type ChallengeProps = {
    name: string;
    description: string;
    cover: string;
    point: number;
    category: ChallengeCategory;
    type: ChallengeType;
    isActive: boolean;
    createdAt: Date;
    updatedAt: Date;
};

export enum ChallengeType {
    INDIVIDUAL = 'INDIVIDUAL',
    EQUIPE = 'EQUIPE',
}

export enum ChallengeCategory {
    PRESENCA = 'PRESENCA',
    CLASSE = 'CLASSE',
    PARTICIPACAO = 'PARTICIPACAO',
    ESPIRITUALIDADE = 'ESPIRITUALIDADE',
    SOCIAL = 'SOCIAL',
}

export class Challenge {
    private _id: string;
    private props: ChallengeProps;

    constructor(
        props: Replace<
            ChallengeProps,
            {
                isActive?: boolean;
                createdAt?: Date;
                updatedAt?: Date;
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
        };
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this.props.name;
    }

    get description(): string {
        return this.props.description;
    }

    get cover(): string {
        return this.props.cover;
    }

    get point(): number {
        return this.props.point;
    }

    get category(): ChallengeCategory {
        return this.props.category;
    }

    get type(): ChallengeType {
        return this.props.type;
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

    public update(props: Partial<ChallengeProps>): void {
        this.props = {
            ...this.props,
            ...props,
            updatedAt: new Date(),
        };
    }

    public toJSON() {
        return {
            id: this._id,
            name: this.props.name,
            description: this.props.description,
            cover: this.props.cover,
            point: this.props.point,
            category: this.props.category,
            type: this.props.type,
            isActive: this.props.isActive,
            createdAt: this.props.createdAt,
            updatedAt: this.props.updatedAt,
        };
    }
}
