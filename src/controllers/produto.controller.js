const { Produto } = require('../models');

module.exports = {
  // GET /api/produtos
  async listar(req, res) {
    try {
      const produtos = await Produto.findAll({ order: [['nome', 'ASC']] });
      res.json(produtos);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar produtos.', details: err.message });
    }
  },

  // POST /api/produtos
  async criar(req, res) {
    const { nome, preco, categoria } = req.body;

    if (!nome || !preco || !categoria) {
      return res.status(400).json({ error: 'Preencha todos os campos obrigatórios.' });
    }

    try {
      const produto = await Produto.create({ nome, preco, categoria });
      res.status(201).json(produto);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar produto.', details: err.message });
    }
  },

  // PUT /api/produtos/:id
  async atualizar(req, res) {
    const { id } = req.params;
    const { nome, preco, categoria } = req.body;

    try {
      const produto = await Produto.findByPk(id);
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado.' });
      }

      await produto.update({ nome, preco, categoria });
      res.json(produto);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao atualizar produto.', details: err.message });
    }
  },

  // DELETE /api/produtos/:id
  async remover(req, res) {
    const { id } = req.params;

    try {
      const produto = await Produto.findByPk(id);
      if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado.' });
      }

      await produto.destroy();
      res.json({ message: 'Produto removido com sucesso.' });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao remover produto.', details: err.message });
    }
  }
};
