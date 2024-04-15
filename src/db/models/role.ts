import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from 'sequelize';

import { sequelize } from '../config';

import Scope from './scope';

class Role extends Model<InferAttributes<Role>, InferCreationAttributes<Role>> {
  declare id: CreationOptional<bigint>;
  declare role: string;
  declare scopeId: bigint;
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Role.init(
  {
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
  },
  {
    sequelize,
    tableName: 'roles',
    hooks: {
      afterUpdate: data => {
        data.updatedAt = new Date();
      },
    },
  },
);

Role.hasMany(Scope, {
  as: 'scopes',
  foreignKey: 'scopeId',
});
export default Role;
