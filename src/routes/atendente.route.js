const express = require('express');
const router = express.Router();
const AtendenteController = require('../controllers/atendente.controller');

// Lista todos os atendentes
router.get('/', AtendenteController.listar);

// Cadastra um novo atendente
router.post('/', AtendenteController.criar);

// Atualiza um atendente existente
router.put('/:id', AtendenteController.atualizar);

// Remove um atendente
router.delete('/:id', AtendenteController.remover);

module.exports = router;
