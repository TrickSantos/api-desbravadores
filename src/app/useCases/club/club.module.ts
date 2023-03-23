import { DatabaseModule } from '@infra/database/database.module';
import { Module } from '@nestjs/common';
import { CreateClubUseCase } from './create';
import { DeleteClub } from './delete';
import { FindClubById } from './findById';
import { ListAllClubs } from './listAll';
import { UpdateClub } from './update';

@Module({
    imports: [DatabaseModule],
    providers: [
        CreateClubUseCase,
        ListAllClubs,
        FindClubById,
        UpdateClub,
        DeleteClub,
    ],
    exports: [
        CreateClubUseCase,
        ListAllClubs,
        FindClubById,
        UpdateClub,
        DeleteClub,
    ],
})
export class ClubUseCaseModule {}
