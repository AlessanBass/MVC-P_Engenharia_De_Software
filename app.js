const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();

// Configuração do MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'universidade'
});

// Conectar ao MySQL
db.connect(err => {
  if (err) {
    console.log('Erro ao conectar ao MySQL: ' + err.message);
  } else {
    console.log('Conectado ao MySQL');
  }
});

// Configuração do Express
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rotas
app.get('/', (req, res) => {
  db.query('SELECT * FROM aluno', (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render('index', { alunos: result });
    }
  });
});

app.get('/add', (req, res) => {
  res.render('add');
});

app.post('/add', (req, res) => {
  const { nome, matricula, universidade } = req.body;
  db.query(
    'INSERT INTO aluno (nome, matricula, universidade) VALUES (?, ?, ?)',
    [nome, matricula, universidade],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
    }
  );
});

app.get('/edit/:id', (req, res) => {
  const alunoId = req.params.id;
  db.query('SELECT * FROM aluno WHERE id = ?', [alunoId], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.render('edit', { aluno: result[0] });
    }
  });
});

app.post('/edit/:id', (req, res) => {
  const alunoId = req.params.id;
  const { nome, matricula, universidade } = req.body;
  db.query(
    'UPDATE aluno SET nome=?, matricula=?, universidade=? WHERE id=?',
    [nome, matricula, universidade, alunoId],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
    }
  );
});

app.get('/delete/:id', (req, res) => {
  const alunoId = req.params.id;
  db.query('DELETE FROM aluno WHERE id = ?', [alunoId], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.redirect('/');
    }
  });
});

// Inicia o servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
