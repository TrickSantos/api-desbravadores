import { Replace } from '@helpers/replace';
import { randomUUID } from 'node:crypto';

type ChallengeUnitUploadProps = {
    challengeUnitId: string;
    url: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
};

export class ChallengeUnitUpload {
    private _id: string;
    private props: ChallengeUnitUploadProps;

    constructor(
        props: Replace<
            ChallengeUnitUploadProps,
            {
                description?: string;
                createdAt?: Date;
                updatedAt?: Date;
            }
        >,
        id?: string,
    ) {
        this._id = id || randomUUID();
        this.props = {
            ...props,
            description: props.description || '',
            createdAt: props.createdAt || new Date(),
            updatedAt: props.updatedAt || new Date(),
        };
    }

    get id(): string {
        return this._id;
    }

    get challengeUnitId(): string {
        return this.props.challengeUnitId;
    }

    get url(): string {
        return this.props.url;
    }

    get description(): string {
        return this.props.description;
    }

    get createdAt(): Date {
        return this.props.createdAt;
    }

    get updatedAt(): Date {
        return this.props.updatedAt;
    }

    public toJSON() {
        return {
            id: this.id,
            challengeUnitId: this.challengeUnitId,
            url: this.url,
            description: this.description,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
}
