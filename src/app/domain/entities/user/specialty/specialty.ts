import { randomUUID } from 'node:crypto';

type SpecialtyProps = {
    name: string;
    category: string;
};

export class Specialty implements SpecialtyProps {
    private _id: string;
    private props: SpecialtyProps;

    constructor(props: SpecialtyProps, id?: string) {
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

    get category(): string {
        return this.props.category;
    }

    public update(props: Partial<SpecialtyProps>): void {
        this.props = {
            ...this.props,
            ...props,
        };
    }

    public toJSON() {
        return {
            id: this.id,
            name: this.name,
            category: this.category,
        };
    }
}
