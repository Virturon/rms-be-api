import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from 'sequelize';

import { sequelize } from '../config';

import Address from './address';
import Role from './role';

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  declare id: CreationOptional<bigint>;
  declare name: string;
  declare email: CreationOptional<string>;
  declare password: CreationOptional<string>;
  declare phoneNumber: CreationOptional<string>;
  declare birthday: CreationOptional<string>;
  declare gender: CreationOptional<string>;
  declare roleId: CreationOptional<bigint>;
  declare address: CreationOptional<bigint>;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

User.init(
  {
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
    phoneNumber: DataTypes.STRING,
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
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'addresses',
        key: 'id',
      },
    },
    createdAt: { type: DataTypes.DATE, defaultValue: new Date() },
    updatedAt: { type: DataTypes.DATE, defaultValue: new Date() },
  },

  {
    sequelize,
    tableName: 'users',
    hooks: {
      afterUpdate: data => {
        data.updatedAt = new Date();
      },
    },
  },
);

User.belongsTo(Role, {
  as: 'roles',
  foreignKey: 'roleId',
});

User.belongsTo(Address, {
  as: 'addresses',
  foreignKey: 'address',
});

export default User;
