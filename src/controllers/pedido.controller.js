const { Pedido, ItemPedido, Produto } = require('../models');

module.exports = {
  // POST /api/pedidos
  async criar(req, res) {
    const { mesaId, atendenteId, itens } = req.body;

    if (!mesaId || !atendenteId || !Array.isArray(itens) || itens.length === 0) {
      return res.status(400).json({ error: 'Dados inválidos para criar pedido.' });
    }

    try {
      // Cria o pedido principal
      const pedido = await Pedido.create({
        mesaId,
        atendenteId,
        status: 'pendente',
        data_hora: new Date()
      });

      // Cria os itens do pedido
      const itensCriados = await Promise.all(itens.map(async item => {
        return await ItemPedido.create({
          pedidoId: pedido.id,
          produtoId: item.produtoId,
          quantidade: item.quantidade,
          obs: item.obs || null
        });
      }));

      res.status(201).json({
        pedido,
        itens: itensCriados
      });
    } catch (err) {
      res.status(500).json({ error: 'Erro ao criar pedido.', details: err.message });
    }
  },

  // GET /api/pedidos/:mesaId
  async porMesa(req, res) {
    const { mesaId } = req.params;

    try {
      const pedidos = await Pedido.findAll({
        where: { mesaId },
        include: [
          {
            model: ItemPedido,
            as: 'itens',
            include: [
              { model: Produto, as: 'produto' }
            ]
          }
        ],
        order: [['data_hora', 'DESC']]
      });

      res.json(pedidos);
    } catch (err) {
      res.status(500).json({ error: 'Erro ao buscar pedidos.', details: err.message });
    }
  }
};
