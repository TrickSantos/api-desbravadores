import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { CreatePresencaUseCase } from './create';
import { DeletePresencaUseCase } from './delete';
import { FindPresencaByIdUseCase } from './findById';
import { ListAllPresencasUseCase } from './listAll';
import { UpdatePresencaUseCase } from './update';

@Module({
    imports: [DatabaseModule],
    providers: [
        CreatePresencaUseCase,
        DeletePresencaUseCase,
        FindPresencaByIdUseCase,
        ListAllPresencasUseCase,
        UpdatePresencaUseCase,
    ],
    exports: [
        CreatePresencaUseCase,
        DeletePresencaUseCase,
        FindPresencaByIdUseCase,
        ListAllPresencasUseCase,
        UpdatePresencaUseCase,
    ],
})
export class PresencaUseCaseModule {}
