const express = require('express');
const router = express.Router();
const alunoModel = require('../models/alunoModel');

router.get('/', alunoModel.getAllAlunos);
router.get('/add', alunoModel.addNewAluno);
router.post('/add', alunoModel.addNewAlunoRouter);
router.get('/edit/:id', alunoModel.editAluno);
router.post('/edit/:id', alunoModel.editAlunoFinalizado);
router.get('/delete/:id', alunoModel.deleteAluno);


module.exports = router;