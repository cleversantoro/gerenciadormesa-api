module.exports = (sequelize, DataTypes) => {
  const Mesa = sequelize.define("Mesa", {
    numero: { type: DataTypes.INTEGER, allowNull: false, unique: true },
    status: { type: DataTypes.STRING, allowNull: false, defaultValue: 'livre' },// valores possíveis: 'livre', 'ocupada', 'fechada'
    horario_abertura: { type: DataTypes.DATE, allowNull: true },
    horario_fechamento: { type: DataTypes.DATE, allowNull: true }
  });

  Mesa.associate = models => {
    Mesa.hasMany(models.Pedido, { foreignKey: 'mesaId', as: 'pedidos' });
  };

  return Mesa;
};
