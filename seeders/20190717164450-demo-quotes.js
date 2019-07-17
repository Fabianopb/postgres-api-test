'use strict';

const date = new Date();

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Quotes', [
      {
        quote: 'Be yourself; everyone else is already taken.',
        author: 'Oscar Wilde',
        createdAt: date,
        updatedAt: date
      },
      {
        quote: 'A room without books is like a body without a soul.',
        author: 'Marcus Tullius Cicero',
        createdAt: date,
        updatedAt: date
      }
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Quotes', null, {});
  }
};
