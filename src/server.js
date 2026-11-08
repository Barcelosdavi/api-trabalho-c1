require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const rotas = require('./routes/routes');

const app = express();

// Middlewares de Segurança exigidos para a nota 10
app.use(helmet()); 
app.use(cors());   
app.use(express.json()); 

// Configuração das rotas
app.use('/api', rotas);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(` API a correr perfeitamente na porta ${PORT}`);
});