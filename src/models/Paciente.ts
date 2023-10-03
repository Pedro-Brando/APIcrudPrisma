import { Prisma } from '@prisma/client';

export const Paciente: Prisma.Model<Paciente> = {
  name: 'Paciente',
  properties: {
    nomePcnte: 'string',
    senha: 'int',
    usuario: 'string',
  },
};