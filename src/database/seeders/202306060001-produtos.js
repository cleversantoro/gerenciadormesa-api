
'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Produtos', [
      { nome: 'Coca-Cola', preco: 6.00, categoria: 'Bebidas', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Heineken', preco: 9.00, categoria: 'Bebidas', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'X-Burger', preco: 15.00, categoria: 'Lanches', createdAt: new Date(), updatedAt: new Date() },
      { nome: 'Pizza Calabresa', preco: 35.00, categoria: 'Pizzas', createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Produtos', null, {});
  }
};
