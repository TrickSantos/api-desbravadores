import { Replace } from '@helpers/replace';
import { randomUUID } from 'node:crypto';

type ChallengeUserUploadProps = {
    challengeUserId: string;
    url: string;
    description?: string;
    createdAt: Date;
    updatedAt: Date;
};

export class ChallengeUserUpload {
    private _id: string;
    private props: ChallengeUserUploadProps;

    constructor(
        props: Replace<
            ChallengeUserUploadProps,
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

    get challengeUserId(): string {
        return this.props.challengeUserId;
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
            challengeUserId: this.challengeUserId,
            url: this.url,
            description: this.description,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
}
