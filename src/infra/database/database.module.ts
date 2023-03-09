import { ClassRepository } from '@domain/repositories/class.repository';
import { ClubRepository } from '@domain/repositories/club.repository';
import { UnitRepository } from '@domain/repositories/unit.repository';
import { UserRepository } from '@domain/repositories/user.repository';
import { Module } from '@nestjs/common';
import { PrismaClassRepository } from './prisma/class.repository';
import { PrismaClubRepository } from './prisma/club.repository';
import { PrismaUnitRepository } from './prisma/unit.repository';
import { PrismaUserRepository } from './prisma/user.repository';

@Module({
    providers: [
        {
            provide: ClubRepository,
            useClass: PrismaClubRepository,
        },
        {
            provide: UserRepository,
            useClass: PrismaUserRepository,
        },
        {
            provide: UnitRepository,
            useClass: PrismaUnitRepository,
        },
        {
            provide: ClassRepository,
            useClass: PrismaClassRepository,
        },
    ],
    exports: [ClubRepository, UserRepository, UnitRepository],
})
export class DatabaseModule {}
