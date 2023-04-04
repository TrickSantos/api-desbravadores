import { createZodDto } from '@anatine/zod-nestjs';
import { CreatePresencaSchema } from './create.dto';

export class UpdatePresencaDTO extends createZodDto(
    CreatePresencaSchema.partial(),
) {}
