const express = require('express');
const router = express.Router();
const mesaRoutes = require('./mesa.route');
const pedidoRoutes = require('./pedido.route');
const produtoRoutes = require('./produto.route');
const atendenteRoutes = require('./atendente.route');

router.use('/mesas', mesaRoutes);
router.use('/pedidos', pedidoRoutes);
router.use('/produtos', produtoRoutes);
router.use('/atendentes', atendenteRoutes);

module.exports = router;
