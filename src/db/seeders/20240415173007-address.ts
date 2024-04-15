import { QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('addresses', [
      {
        id: 1,
        houseName: 'XXX',
        street: 'YYY',
        city: 'Daravi',
        state: 'Delhi',
        zipCode: '78233',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 2,
        houseName: 'XXXA',
        street: 'YYYB',
        city: 'Davi',
        state: 'Kash',
        zipCode: '782332',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('addresses', {});
  },
};
