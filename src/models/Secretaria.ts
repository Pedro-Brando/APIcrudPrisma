import { Prisma } from '@prisma/client';

export const Paciente: Prisma.Model<Secretaria> = {
  name: 'Secretaria',
  properties: {
    nome: 'string',
    RG: 'int',
  },
};