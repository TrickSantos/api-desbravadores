import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CompleteChallengeUnitUseCase } from '@useCases/challenge/unit/completeChallenge';
import { DeleteChallengeUnitUseCase } from '@useCases/challenge/unit/delete';
import { FindChallengeUnitByChallengeIdUseCase } from '@useCases/challenge/unit/findByChallengeId';
import { FindChallengeUnitByChallengeIdAndUnitIdUseCase } from '@useCases/challenge/unit/findByChallengeIdAndUnitId';
import { FindChallengeUnitByIdUseCase } from '@useCases/challenge/unit/findById';
import { ListAllChallengeUnitUseCase } from '@useCases/challenge/unit/listAll';
import { UpdateChallengeUnitUseCase } from '@useCases/challenge/unit/update';
import { CreateChallengeUnitDTO } from '../dtos/challengeUnit/create.dto';

@Controller('challenge/units')
export class ChallengeUnitsController {
    constructor(
        private completeChallengeUnit: CompleteChallengeUnitUseCase,
        private listAllChallengeUnits: ListAllChallengeUnitUseCase,
        private findByIdChallengeUnit: FindChallengeUnitByIdUseCase,
        private findChallengeUnitByChallengeIdAndUnitId: FindChallengeUnitByChallengeIdAndUnitIdUseCase,
        private findChallengeUnitByChallengeId: FindChallengeUnitByChallengeIdUseCase,
        private updateChallengeUnit: UpdateChallengeUnitUseCase,
        private deleteChallengeUnit: DeleteChallengeUnitUseCase,
    ) {}

    @Get()
    async listAll() {
        const challengeUnits = await this.listAllChallengeUnits.execute();
        return challengeUnits.map((challengeUnit) => challengeUnit.toJSON());
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        const challengeUnit = await this.findByIdChallengeUnit.execute(id);
        return challengeUnit.toJSON();
    }

    @Get('challenge/units/:challengeId')
    async findByChallengeId(@Param('challengeId') challengeId: string) {
        const challengeUnit = await this.findChallengeUnitByChallengeId.execute(
            challengeId,
        );
        return challengeUnit.map((unit) => unit.toJSON());
    }

    @Get('challenge/units/:challengeId/:unitId')
    async findByChallengeIdAndUnitId(
        @Param('challengeId') challengeId: string,
        @Param('unitId') unitId: string,
    ) {
        const challengeUnit =
            await this.findChallengeUnitByChallengeIdAndUnitId.execute({
                challengeId,
                unitId,
            });
        return challengeUnit.toJSON();
    }

    @Post()
    async create(@Body() body: CreateChallengeUnitDTO) {
        await this.completeChallengeUnit.execute({
            challengeId: body.challengeId,
            unitId: body.unitId,
            uploads: body.uploads.map((upload) => ({
                description: upload.description,
                url: upload.url,
            })),
        });
    }

    @Put(':id')
    async update(
        @Param('id') id: string,
        @Body() body: CreateChallengeUnitDTO,
    ) {
        await this.updateChallengeUnit.execute({
            id,
            challengeId: body.challengeId,
            unitId: body.unitId,
            uploads: body.uploads.map((upload) => ({
                description: upload.description,
                url: upload.url,
            })),
        });
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.deleteChallengeUnit.execute(id);
    }
}
