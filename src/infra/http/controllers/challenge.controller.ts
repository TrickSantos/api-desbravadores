import {
    ChallengeCategory,
    ChallengeType,
} from '@domain/entities/challenge/challenge';
import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreateChallengeUseCase } from '@useCases/challenge/create';
import { DeleteChallengeUseCase } from '@useCases/challenge/delete';
import { FindChallengeByIdUseCase } from '@useCases/challenge/findById';
import { ListAllChallengesUseCase } from '@useCases/challenge/listAll';
import { UpdateChallengeUseCase } from '@useCases/challenge/update';
import { CreateChallengeDTO } from '../dtos/challenge/create.dto';
import { UpdateChallengeDTO } from '../dtos/challenge/update.dto';

@Controller('challenges')
export class ChallengesController {
    constructor(
        private createChallenge: CreateChallengeUseCase,
        private listAllChallenges: ListAllChallengesUseCase,
        private findByIdChallenge: FindChallengeByIdUseCase,
        private updateChallenge: UpdateChallengeUseCase,
        private deleteChallenge: DeleteChallengeUseCase,
    ) {}

    @Get()
    async listAll() {
        const clubs = await this.listAllChallenges.execute();
        return clubs.map((club) => club.toJSON());
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        const club = await this.findByIdChallenge.execute(id);
        return club.toJSON();
    }

    @Post()
    async create(@Body() body: CreateChallengeDTO) {
        await this.createChallenge.execute({
            name: body.name,
            category: ChallengeCategory[body.category],
            cover: body.cover,
            description: body.description,
            point: body.point,
            type: ChallengeType[body.type],
        });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: UpdateChallengeDTO) {
        await this.updateChallenge.execute({
            id,
            ...body,
            category: ChallengeCategory[body.category],
            type: ChallengeType[body.type],
        });
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.deleteChallenge.execute(id);
    }
}
