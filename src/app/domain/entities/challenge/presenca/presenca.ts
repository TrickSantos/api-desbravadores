import { Replace } from '@helpers/replace';
import { randomUUID } from 'node:crypto';

type PresencaProps = {
    userId: string;
    reunionId: string;
    date: Date;
    potualidade: boolean;
    biblia: boolean;
    caderno: boolean;
    lenco: boolean;
    vestuario: boolean;
    createdAt: Date;
    updatedAt: Date;
};

export class Presenca {
    private _id: string;
    private props: PresencaProps;

    constructor(
        props: Replace<
            PresencaProps,
            {
                createdAt?: Date;
                updatedAt?: Date;
            }
        >,
        id?: string,
    ) {
        this._id = id || randomUUID();
        this.props = {
            ...props,
            createdAt: props.createdAt || new Date(),
            updatedAt: props.updatedAt || new Date(),
        };
    }

    get id(): string {
        return this._id;
    }

    get userId(): string {
        return this.props.userId;
    }

    get reunionId(): string {
        return this.props.reunionId;
    }

    get date(): Date {
        return this.props.date;
    }

    get potualidade(): boolean {
        return this.props.potualidade;
    }

    get biblia(): boolean {
        return this.props.biblia;
    }

    get caderno(): boolean {
        return this.props.caderno;
    }

    get lenco(): boolean {
        return this.props.lenco;
    }

    get vestuario(): boolean {
        return this.props.vestuario;
    }

    get createdAt(): Date {
        return this.props.createdAt;
    }

    get updatedAt(): Date {
        return this.props.updatedAt;
    }

    public update(props: Partial<PresencaProps>) {
        this.props = {
            ...this.props,
            ...props,
            updatedAt: new Date(),
        };
    }

    public toJSON() {
        return {
            id: this.id,
            userId: this.userId,
            reunionId: this.reunionId,
            date: this.date,
            potualidade: this.potualidade,
            biblia: this.biblia,
            caderno: this.caderno,
            lenco: this.lenco,
            vestuario: this.vestuario,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
}
