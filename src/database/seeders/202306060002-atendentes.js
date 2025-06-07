
'use strict';
const bcrypt = require('bcryptjs');

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Atendentes', [
      {
        nome: 'João',
        login: 'joao',
        senha_hash: await bcrypt.hash('123456', 8),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Maria',
        login: 'maria',
        senha_hash: await bcrypt.hash('654321', 8),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Atendentes', null, {});
  }
};
