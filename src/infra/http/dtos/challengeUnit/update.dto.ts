import { createZodDto } from '@anatine/zod-nestjs';
import { CreateChallengeUnitSchema } from './create.dto';

export class UpdateChallengeUnitDTO extends createZodDto(
    CreateChallengeUnitSchema.partial(),
) {}
