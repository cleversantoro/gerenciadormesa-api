// Produto.js - gerado automaticamente
module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define("Produto", {
    nome: { type: DataTypes.STRING, allowNull: false },
    preco: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
    categoria: { type: DataTypes.STRING, allowNull: false }
  });

  Produto.associate = models => {
    Produto.hasMany(models.ItemPedido, { foreignKey: 'produtoId', as: 'itens' });
  };

  return Produto;
};
