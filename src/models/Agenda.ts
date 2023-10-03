import { Prisma } from '@prisma/client';

export const Paciente: Prisma.Model<Agenda> = {
  name: 'Consulta',
  properties: {
    data: 'date',
    nomePcnt: 'string',
  },
};