import { createZodDto } from '@anatine/zod-nestjs';
import { CreateChallengeSchema } from './create.dto';

export class UpdateChallengeDTO extends createZodDto(
    CreateChallengeSchema.partial(),
) {}
