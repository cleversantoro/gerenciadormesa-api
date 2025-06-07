const { Mesa } = require('../models');

module.exports = {
  // GET /api/mesas
  async listar(req, res) {
    try {
      const mesas = await Mesa.findAll({ order: [['numero', 'ASC']] });
      res.status(200).json(mesas);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao listar mesas', details: err.message });
    }
  },

  // POST /api/mesas
  async abrir(req, res) {
    const { numero } = req.body;

    try {
      let mesa = await Mesa.findOne({ where: { numero } });

      if (mesa) {
        if (mesa.status === 'ocupada') {
          return res.status(400).json({ error: 'Mesa já está ocupada' });
        }

        await mesa.update({
          status: 'ocupada',
          horario_abertura: new Date(),
          horario_fechamento: null
        });

        return res.json(mesa);
      }

      mesa = await Mesa.create({
        numero,
        status: 'ocupada',
        horario_abertura: new Date()
      });

      return res.status(201).json(mesa);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao abrir mesa', details: err.message });
    }
  },

  // POST /api/mesas/:id/fechar
  async fechar(req, res) {
    const { id } = req.params;

    try {
      const mesa = await Mesa.findByPk(id);

      if (!mesa) {
        return res.status(404).json({ error: 'Mesa não encontrada' });
      }

      if (mesa.status === 'livre') {
        return res.status(400).json({ error: 'Mesa já está livre' });
      }

      await mesa.update({
        status: 'livre',
        horario_fechamento: new Date()
      });

      res.status(200).json({ message: 'Mesa fechada com sucesso' });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao fechar mesa', details: err.message });
    }
  }
};
