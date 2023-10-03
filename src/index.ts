// src/index.ts
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

import express from 'express';
import bodyParser from 'body-parser';

import pacienteRoutes from './routes/paciente';
import secretariaRoutes from './routes/secretaria';
import consultaRoutes from './routes/consulta';
import agendaRoutes from './routes/agenda';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.use('/pacientes', pacienteRoutes);
app.use('/secretaria', secretariaRoutes);
app.use('/consulta', consultaRoutes);
app.use('/agenda', agendaRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});