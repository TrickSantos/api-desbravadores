import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Put,
} from '@nestjs/common';
import { CreateClubUseCase } from '@useCases/club/create';
import { DeleteClub } from '@useCases/club/delete';
import { FindClubById } from '@useCases/club/findById';
import { ListAllClubs } from '@useCases/club/listAll';
import { UpdateClub } from '@useCases/club/update';
import { CreateClubDTO } from '../dtos/club/create.dto';
import { UpdateClubDTO } from '../dtos/club/update.dto';

@Controller('clubs')
export class ClubsController {
    constructor(
        private createClub: CreateClubUseCase,
        private listAllClubs: ListAllClubs,
        private findByIdClub: FindClubById,
        private updateClub: UpdateClub,
        private deleteClub: DeleteClub,
    ) {}

    @Get()
    async listAll() {
        const clubs = await this.listAllClubs.execute();
        return clubs.map((club) => club.toJSON());
    }

    @Get(':id')
    async findById(@Param('id') id: string) {
        const club = await this.findByIdClub.execute(id);
        return club.toJSON();
    }

    @Post()
    async create(@Body() body: CreateClubDTO) {
        await this.createClub.execute({
            name: body.name,
            logo: body.logo,
            association: body.association,
            city: body.city,
            fundation: body.fundation,
            state: body.state,
        });
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() body: UpdateClubDTO) {
        await this.updateClub.execute({
            id,
            ...body,
        });
    }

    @Delete(':id')
    async delete(@Param('id') id: string) {
        await this.deleteClub.execute(id);
    }
}
