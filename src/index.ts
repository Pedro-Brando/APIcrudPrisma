const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para processar dados JSON no corpo da requisição
app.use(bodyParser.json());

// Importe as rotas para cada entidade
const pacienteRoutes = require('./src/routes/PacienteRoutes');
const secretariaRoutes = require('./src/routes/SecretariaRoutes');
const consultaRoutes = require('./src/routes/ConsultaRoutes');
const agendaRoutes = require('./src/routes/AgendaRoutes');

// Use as rotas com seus respectivos prefixos
app.use('/pacientes', pacienteRoutes);
app.use('/secretarias', secretariaRoutes);
app.use('/consultas', consultaRoutes);
app.use('/agenda', agendaRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});