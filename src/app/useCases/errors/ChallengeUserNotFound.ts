export class ChallengeUserNotFound extends Error {
    constructor() {
        super('User response for this Challenge is not found');
    }
}
