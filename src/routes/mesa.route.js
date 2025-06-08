const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const MesaController = require('../controllers/mesa.controller');

// Lista todas as mesas
router.get('/', MesaController.listar);

// Abre uma nova mesa ou reabre uma existente
router.post('/', authMiddleware, MesaController.abrir);

// Fecha uma mesa
router.post('/:id/fechar', MesaController.fechar);

module.exports = router;
