module.exports = (sequelize, DataTypes) => {
  const ItemPedido = sequelize.define("ItemPedido", {
    quantidade: { type: DataTypes.INTEGER, allowNull: false },
    obs: { type: DataTypes.STRING, allowNull: true }
  });

  ItemPedido.associate = models => {
    ItemPedido.belongsTo(models.Pedido, { foreignKey: 'pedidoId', as: 'pedido' });
    ItemPedido.belongsTo(models.Produto, { foreignKey: 'produtoId', as: 'produto' });
  };

  return ItemPedido;
};
