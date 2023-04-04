import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { CreateReuniaoUseCase } from './create';
import { DeleteReuniaoUseCase } from './delete';
import { FindReuniaoByIdUseCase } from './findById';
import { ListAllReuniaoUseCase } from './listAll';
import { UpdateReuniaoUseCase } from './update';

@Module({
    imports: [DatabaseModule],
    providers: [
        CreateReuniaoUseCase,
        DeleteReuniaoUseCase,
        FindReuniaoByIdUseCase,
        ListAllReuniaoUseCase,
        UpdateReuniaoUseCase,
    ],
    exports: [
        CreateReuniaoUseCase,
        DeleteReuniaoUseCase,
        FindReuniaoByIdUseCase,
        ListAllReuniaoUseCase,
        UpdateReuniaoUseCase,
    ],
})
export class ReuniaoUseCaseModule {}
