import { Replace } from '@helpers/replace';
import { randomUUID } from 'crypto';
import { ChallengeUnitUpload } from './uploads';

type ChallengeUnitProps = {
    challengeId: string;
    unitId: string;
    uploads?: ChallengeUnitUpload[];
    isCompleted: boolean;
    createdAt: Date;
    updatedAt: Date;
};

export class ChallengeUnit {
    private _id: string;
    private props: ChallengeUnitProps;

    constructor(
        props: Replace<
            ChallengeUnitProps,
            {
                uploads?: ChallengeUnitUpload[];
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
            uploads: props.uploads || [],
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

    get unitId(): string {
        return this.props.unitId;
    }

    get isCompleted(): boolean {
        return this.props.isCompleted;
    }

    get uploads(): ChallengeUnitUpload[] {
        return this.props.uploads;
    }

    get createdAt(): Date {
        return this.props.createdAt;
    }

    get updatedAt(): Date {
        return this.props.updatedAt;
    }

    public update(props: Partial<ChallengeUnitProps>): void {
        this.props = {
            ...this.props,
            ...props,
            updatedAt: new Date(),
        };
    }

    public complete(): void {
        this.update({
            isCompleted: true,
        });
    }

    public uncomplete(): void {
        this.update({
            isCompleted: false,
        });
    }

    public toJSON() {
        return {
            id: this.id,
            challengeId: this.challengeId,
            unitId: this.unitId,
            uploads: this.uploads.map((upload) => upload.toJSON()),
            isCompleted: this.isCompleted,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    }
}
