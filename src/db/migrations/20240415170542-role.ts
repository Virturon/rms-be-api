import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  async up(queryInterface: QueryInterface) {
    await queryInterface.createTable('roles', {
      id: {
        type: DataTypes.BIGINT,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      role: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      scopeId: {
        type: DataTypes.BIGINT,
        references: {
          model: 'scopes',
          key: 'id',
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    });
  },

  async down(queryInterface: QueryInterface) {
    await queryInterface.dropTable('roles');
  },
};
