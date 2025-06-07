// Atendente.js - gerado automaticamente
module.exports = (sequelize, DataTypes) => {
  const Atendente = sequelize.define("Atendente", {
    nome: { type: DataTypes.STRING, allowNull: false },
    login: { type: DataTypes.STRING, allowNull: false, unique: true },
    senha_hash: { type: DataTypes.STRING, allowNull: false }
  });

  Atendente.associate = models => {
    Atendente.hasMany(models.Pedido, { foreignKey: 'atendenteId', as: 'pedidos' });
  };

  return Atendente;
};
