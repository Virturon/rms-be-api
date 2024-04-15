import { QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('scopes', [
      {
        id: 1,
        scopes: 'WRITE',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        scopes: 'READ',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('scopes', {});
  },
};
