const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

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

  const alunoModel = {};

  //Pega todos os alunos
  alunoModel.getAllAlunos = (req, res) => {
    db.query('SELECT * FROM aluno', (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.render('index', { alunos: result });
      }
    });
  };

  //Adicionar novo aluno
  alunoModel.addNewAluno = (req, res) => {
    res.render('add');
  };

  //Adicionar Novo Aluno Router
  alunoModel.addNewAlunoRouter = (req, res) => {
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
  };

  //Edicção
  alunoModel.editAluno = (req, res) => {
    const alunoId = req.params.id;
    db.query('SELECT * FROM aluno WHERE id = ?', [alunoId], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.render('edit', { aluno: result[0] });
      }
    });
  };

  //Edit aluno full
  alunoModel.editAlunoFinalizado = (req, res) => {
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
  };

  //Delete
  alunoModel.deleteAluno = (req, res) => {
    const alunoId = req.params.id;
    db.query('DELETE FROM aluno WHERE id = ?', [alunoId], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect('/');
      }
    });
  };


  module.exports = alunoModel;
