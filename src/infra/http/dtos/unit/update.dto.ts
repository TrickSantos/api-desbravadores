import { createZodDto } from '@anatine/zod-nestjs';
import { CreateUnitSchema } from './create.dto';

export class UpdateUnitDTO extends createZodDto(CreateUnitSchema.partial()) {}
