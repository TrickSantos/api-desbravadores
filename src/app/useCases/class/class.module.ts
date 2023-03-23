import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { CreateClassUseCase } from './create';
import { DeleteClassUseCase } from './delete';
import { FindClassByIdUseCase } from './findById';
import { ListAllClassesUseCase } from './listAll';
import { UpdateClassUseCase } from './update';

@Module({
    imports: [DatabaseModule],
    providers: [
        CreateClassUseCase,
        DeleteClassUseCase,
        FindClassByIdUseCase,
        ListAllClassesUseCase,
        UpdateClassUseCase,
    ],
    exports: [
        CreateClassUseCase,
        DeleteClassUseCase,
        FindClassByIdUseCase,
        ListAllClassesUseCase,
        UpdateClassUseCase,
    ],
})
export class ClassUseCaseModule {}
