import { createZodDto } from '@anatine/zod-nestjs';
import { CreateClubSchema } from './create.dto';

export class UpdateClubDTO extends createZodDto(CreateClubSchema.partial()) {}
