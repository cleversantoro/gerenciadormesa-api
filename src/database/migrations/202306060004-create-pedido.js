
'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Pedidos', {
      id: { allowNull: false, autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
      status: { type: Sequelize.STRING },
      data_hora: { type: Sequelize.DATE },
      mesaId: {
        type: Sequelize.INTEGER,
        references: { model: 'Mesas', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      atendenteId: {
        type: Sequelize.INTEGER,
        references: { model: 'Atendentes', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
      },
      createdAt: { allowNull: false, type: Sequelize.DATE },
      updatedAt: { allowNull: false, type: Sequelize.DATE }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Pedidos');
  }
};
