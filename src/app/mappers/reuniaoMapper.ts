import { Presenca } from '@domain/entities/challenge/presenca/presenca';
import { Reuniao } from '@domain/entities/challenge/presenca/reuniao';
import { Reunion, Presenca as PresencaPrisma } from '@prisma/client';

type Input = Reunion & {
    presencas?: PresencaPrisma[];
};

class ReuniaoMapper {
    toClass(data: Input): Reuniao {
        const presencas = data.presencas?.map(
            (presente) => new Presenca(presente, presente.id),
        );

        return new Reuniao(
            {
                clubId: data.clubId,
                name: data.name,
                date: data.date,
                isActive: data.isActive,
                description: data.description,
                presencas,
                createdAt: data.createdAt,
                updatedAt: data.updatedAt,
            },
            data.id,
        );
    }
}

export default new ReuniaoMapper();
