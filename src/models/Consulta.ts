import { Prisma } from '@prisma/client';

export const Paciente: Prisma.Model<Consulta> = {
  name: 'Consulta',
  properties: {
    data: 'date',
    nomePcnte: 'string',
    nomeDents: 'string',
  },
};