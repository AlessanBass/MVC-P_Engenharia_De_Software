const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

// Configuração do Express
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rotas
const alunoController = require('./controllers/alunoController');
app.use('/', alunoController);


// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
