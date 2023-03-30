import { createZodDto } from '@anatine/zod-nestjs';
import z from 'zod';

export const CreateChallengeUnitSchema = z.object({
    challengeId: z.string({ required_error: 'ChallengeId is required' }),
    unitId: z.string({ required_error: 'UnitId is required' }),
    uploads: z.array(
        z.object({
            url: z.string({ required_error: 'Url is required' }).url(),
            description: z.string().optional(),
        }),
    ),
});

export class CreateChallengeUnitDTO extends createZodDto(
    CreateChallengeUnitSchema,
) {}
