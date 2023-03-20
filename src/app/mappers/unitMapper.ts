import { Unit } from '@domain/entities/unit/unit';
import { User } from '@domain/entities/user/user';
import { Unit as UnitPrisma, User as UserPrisma } from '@prisma/client';

type Input = UnitPrisma & {
    members?: UserPrisma[];
};

class UnitMapper {
    toClass(data: Input): Unit {
        const members = data.members?.map(
            (member) => new User(member, member.id),
        );

        return new Unit(
            {
                name: data.name,
                logo: data.logo,
                isActive: data.isActive,
                clubId: data.clubId,
                members,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt,
            },
            data.id,
        );
    }
}

export default new UnitMapper();
