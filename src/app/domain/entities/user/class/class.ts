import { randomUUID } from 'node:crypto';

export type ClassProps = {
    name: string;
};

export class Class implements ClassProps {
    private _id: string;
    private props: ClassProps;

    constructor(props: ClassProps, id?: string) {
        this._id = id || randomUUID();
        this.props = {
            ...props,
        };
    }

    get id(): string {
        return this._id;
    }

    get name(): string {
        return this.props.name;
    }

    public update(props: Partial<ClassProps>): void {
        this.props = {
            ...this.props,
            ...props,
        };
    }

    public toJSON() {
        return {
            id: this.id,
            name: this.name,
        };
    }
}
