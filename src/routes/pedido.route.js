
const express = require('express');
const router = express.Router();
const PedidoController = require('../controllers/pedido.controller');

router.post('/', PedidoController.criar);
router.get('/:mesaId', PedidoController.porMesa);

module.exports = router;
