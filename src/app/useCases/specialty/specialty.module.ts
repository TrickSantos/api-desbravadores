import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { CreateSpecialtyUseCase } from './create';
import { DeleteSpecialtyUseCase } from './delete';
import { FindSpecialtyByIdUseCase } from './findById';
import { ListAllSpecialtiesUseCase } from './listAll';
import { UpdateSpecialtyUseCase } from './update';

@Module({
    imports: [DatabaseModule],
    providers: [
        CreateSpecialtyUseCase,
        DeleteSpecialtyUseCase,
        FindSpecialtyByIdUseCase,
        ListAllSpecialtiesUseCase,
        UpdateSpecialtyUseCase,
    ],
    exports: [
        CreateSpecialtyUseCase,
        DeleteSpecialtyUseCase,
        FindSpecialtyByIdUseCase,
        ListAllSpecialtiesUseCase,
        UpdateSpecialtyUseCase,
    ],
})
export class SpecialtyUseCaseModule {}
