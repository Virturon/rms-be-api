import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('users', {
      id: {
        type: DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      password: DataTypes.STRING,
      phoneNumber: {
        type: DataTypes.STRING,
        unique: true,
      },
      birthday: DataTypes.STRING,
      gender: DataTypes.STRING,
      roleId: {
        type: DataTypes.BIGINT,
        allowNull: false,
        references: {
          model: 'roles',
          key: 'id',
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createdAt: { type: DataTypes.DATE, defaultValue: () => new Date() },
      updatedAt: { type: DataTypes.DATE, defaultValue: () => new Date() },
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('users');
  },
};
