export class ChallengeUnitNotFound extends Error {
    constructor() {
        super('Unit response for this Challenge is not found');
    }
}
