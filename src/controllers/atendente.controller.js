const { Atendente } = require('../models');
const bcrypt = require('bcryptjs');

module.exports = {
  // GET /api/atendentes
  async listar(req, res) {
    try {
      const atendentes = await Atendente.findAll({
        attributes: ['id', 'nome', 'login']
      });
      res.json(atendentes);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar atendentes.', details: err.message });
    }
  },

  // POST /api/atendentes
  async criar(req, res) {
    const { nome, login, senha } = req.body;

    if (!nome || !login || !senha) {
      return res.status(400).json({ error: 'Nome, login e senha são obrigatórios.' });
    }

    try {
      const senha_hash = await bcrypt.hash(senha, 8);
      const atendente = await Atendente.create({ nome, login, senha_hash });
      res.status(201).json({ id: atendente.id, nome, login });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar atendente.', details: err.message });
    }
  },

  // PUT /api/atendentes/:id
  async atualizar(req, res) {
    const { id } = req.params;
    const { nome, login, senha } = req.body;

    try {
      const atendente = await Atendente.findByPk(id);
      if (!atendente) return res.status(404).json({ error: 'Atendente não encontrado.' });

      const senha_hash = senha ? await bcrypt.hash(senha, 8) : atendente.senha_hash;

      await atendente.update({ nome, login, senha_hash });
      res.json({ id: atendente.id, nome, login });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao atualizar atendente.', details: err.message });
    }
  },

  // DELETE /api/atendentes/:id
  async remover(req, res) {
    const { id } = req.params;

    try {
      const atendente = await Atendente.findByPk(id);
      if (!atendente) return res.status(404).json({ error: 'Atendente não encontrado.' });

      await atendente.destroy();
      res.json({ message: 'Atendente removido com sucesso.' });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao remover atendente.', details: err.message });
    }
  }
};
