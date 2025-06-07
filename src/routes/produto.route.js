const express = require('express');
const router = express.Router();
const ProdutoController = require('../controllers/produto.controller');

// Lista todos os produtos
router.get('/', ProdutoController.listar);

// Cadastra um novo produto
router.post('/', ProdutoController.criar);

// Atualiza um produto existente
router.put('/:id', ProdutoController.atualizar);

// Remove um produto do cardápio
router.delete('/:id', ProdutoController.remover);

module.exports = router;
