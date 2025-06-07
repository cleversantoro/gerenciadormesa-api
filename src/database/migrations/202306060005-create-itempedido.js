
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ItemPedidos', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      quantidade: { type: Sequelize.INTEGER },
      obs: { type: Sequelize.STRING },
      pedidoId: {
        type: Sequelize.INTEGER,
        references: { model: 'Pedidos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      produtoId: {
        type: Sequelize.INTEGER,
        references: { model: 'Produtos', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ItemPedidos');
  }
};
