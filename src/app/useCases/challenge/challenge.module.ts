import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { CreateChallengeUseCase } from './create';
import { DeleteChallengeUseCase } from './delete';
import { FindChallengeByCategoryUseCase } from './findByCategory';
import { FindChallengeByCategoryAndTypeUseCase } from './findByCategoryAndType';
import { FindChallengeByIdUseCase } from './findById';
import { FindChallengeByTypeUseCase } from './findByType';
import { ListAllChallengesUseCase } from './listAll';
import { CompleteChallengeUnitUseCase } from './unit/completeChallenge';
import { DeleteChallengeUnitUseCase } from './unit/delete';
import { FindChallengeUnitByChallengeIdUseCase } from './unit/findByChallengeId';
import { FindChallengeUnitByChallengeIdAndUnitIdUseCase } from './unit/findByChallengeIdAndUnitId';
import { FindChallengeUnitByIdUseCase } from './unit/findById';
import { ListAllChallengeUnitUseCase } from './unit/listAll';
import { UpdateChallengeUnitUseCase } from './unit/update';
import { UpdateChallengeUseCase } from './update';
import { CompleteChallengeUserUseCase } from './user/completeChallenge';
import { DeleteChallengeUserUseCase } from './user/delete';
import { FindChallengeUserByChallengeIdUseCase } from './user/findByChallengeId';
import { FindChallengeUserByChallengeIdAndUserIdUseCase } from './user/findByChallengeIdAndUserId';
import { FindChallengeUserByIdUseCase } from './user/findById';
import { FindChallangeUserByUserIdUseCase } from './user/findByUserId';
import { ListAllChallengeUserUseCase } from './user/listAll';
import { UpdateChallengeUserUseCase } from './user/update';

@Module({
    imports: [DatabaseModule],
    providers: [
        CreateChallengeUseCase,
        DeleteChallengeUseCase,
        FindChallengeByCategoryUseCase,
        FindChallengeByCategoryAndTypeUseCase,
        FindChallengeByIdUseCase,
        FindChallengeByTypeUseCase,
        ListAllChallengesUseCase,
        UpdateChallengeUseCase,
        CompleteChallengeUnitUseCase,
        DeleteChallengeUnitUseCase,
        FindChallengeUnitByIdUseCase,
        FindChallengeUnitByChallengeIdUseCase,
        FindChallengeUnitByChallengeIdAndUnitIdUseCase,
        ListAllChallengeUnitUseCase,
        UpdateChallengeUnitUseCase,
        CompleteChallengeUserUseCase,
        DeleteChallengeUserUseCase,
        FindChallengeUserByChallengeIdUseCase,
        FindChallengeUserByChallengeIdAndUserIdUseCase,
        FindChallengeUserByIdUseCase,
        FindChallangeUserByUserIdUseCase,
        ListAllChallengeUserUseCase,
        UpdateChallengeUserUseCase,
    ],
    exports: [
        CreateChallengeUseCase,
        DeleteChallengeUseCase,
        FindChallengeByCategoryUseCase,
        FindChallengeByCategoryAndTypeUseCase,
        FindChallengeByIdUseCase,
        FindChallengeByTypeUseCase,
        ListAllChallengesUseCase,
        UpdateChallengeUseCase,
        CompleteChallengeUnitUseCase,
        DeleteChallengeUnitUseCase,
        FindChallengeUnitByIdUseCase,
        FindChallengeUnitByChallengeIdUseCase,
        FindChallengeUnitByChallengeIdAndUnitIdUseCase,
        ListAllChallengeUnitUseCase,
        UpdateChallengeUnitUseCase,
        CompleteChallengeUserUseCase,
        DeleteChallengeUserUseCase,
        FindChallengeUserByChallengeIdUseCase,
        FindChallengeUserByChallengeIdAndUserIdUseCase,
        FindChallengeUserByIdUseCase,
        FindChallangeUserByUserIdUseCase,
        ListAllChallengeUserUseCase,
        UpdateChallengeUserUseCase,
    ],
})
export class ChallengeUseCaseModule {}
