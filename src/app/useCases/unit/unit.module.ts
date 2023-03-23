import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { AddMemberToUnitUseCase } from './addMember';
import { CreateUnitUseCase } from './create';
import { DeleteUnitUseCase } from './delete';
import { FindUnitByIdUseCase } from './findById';
import { ListAllUnitsUseCase } from './listAll';
import { RemoveMemberFromUnitUseCase } from './removeMember';
import { UpdateUnitUseCase } from './update';

@Module({
    imports: [DatabaseModule],
    providers: [
        CreateUnitUseCase,
        ListAllUnitsUseCase,
        FindUnitByIdUseCase,
        UpdateUnitUseCase,
        DeleteUnitUseCase,
        AddMemberToUnitUseCase,
        RemoveMemberFromUnitUseCase,
    ],
    exports: [
        CreateUnitUseCase,
        ListAllUnitsUseCase,
        FindUnitByIdUseCase,
        UpdateUnitUseCase,
        DeleteUnitUseCase,
        AddMemberToUnitUseCase,
        RemoveMemberFromUnitUseCase,
    ],
})
export class UnitUseCaseModule {}
