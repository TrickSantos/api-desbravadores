import { Replace } from '@helpers/replace';
import { randomUUID } from 'node:crypto';
import { ChallengeUserUpload } from './uploads';

type ChallengeUserProps = {
    challengeId: string;
    userId: string;
    isCompleted: boolean;
    uploads: ChallengeUserUpload[];
    createdAt: Date;
    updatedAt: Date;
};

export class ChallengeUser {
    private _id: string;
    private props: ChallengeUserProps;

    constructor(
        props: Replace<
            ChallengeUserProps,
            {
                isCompleted?: boolean;
                createdAt?: Date;
                updatedAt?: Date;
            }
        >,
        id?: string,
    ) {
        this._id = id || randomUUID();
        this.props = {
            ...props,
            isCompleted: props.isCompleted || false,
            createdAt: props.createdAt || new Date(),
            updatedAt: props.updatedAt || new Date(),
        };
    }

    get id(): string {
        return this._id;
    }

    get challengeId(): string {
        return this.props.challengeId;
    }

    get userId(): string {
        return this.props.userId;
    }

    get isCompleted(): boolean {
        return this.props.isCompleted;
    }

    get uploads(): ChallengeUserUpload[] {
        return this.props.uploads;
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
            challengeId: this.challengeId,
            userId: this.userId,
            isCompleted: this.isCompleted,
            uploads: this.uploads.map((upload) => upload.toJSON()),
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
}
