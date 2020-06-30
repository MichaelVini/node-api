const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
const cors = require('cors');

// Inicia o app
const app = express();

//Permitir o envio de dados para aplicalçao em formato de json
app.use(express.json());
// Permitir que outros endereços acessem a api
app.use(cors());

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true,
useUnifiedTopology: true
});
requireDir('./src/models');

//Rotas
app.use('/api', require("./src/routes"));
app.listen(3001);