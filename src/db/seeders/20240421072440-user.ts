import { QueryInterface } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        id: 1,
        name: 'John Doe',
        email: 'John@gmail.com',
        roleId: 1,
      },
      {
        id: 2,
        name: 'christopher',
        phoneNumber: '12345456',
        roleId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.bulkDelete('users', {});
  },
};
