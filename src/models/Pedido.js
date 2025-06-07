// Pedido.js - gerado automaticamente
module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define("Pedido", {
    status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'pendente' },
    data_hora: { type: DataTypes.DATE, allowNull: false }
  });

  Pedido.associate = models => {
    Pedido.belongsTo(models.Mesa, { foreignKey: 'mesaId', as: 'mesa' });
    Pedido.belongsTo(models.Atendente, { foreignKey: 'atendenteId', as: 'atendente' });
    Pedido.hasMany(models.ItemPedido, { foreignKey: 'pedidoId', as: 'itens' });
  };

  return Pedido;
};
