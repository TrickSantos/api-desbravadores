import { createZodDto } from '@anatine/zod-nestjs';
import { CreateReuniaoSchema } from './create.dto';

export class UpdateReuniaoDTO extends createZodDto(
    CreateReuniaoSchema.partial(),
) {}
