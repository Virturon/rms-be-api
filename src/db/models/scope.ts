import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

import { sequelize } from '../config';

class Scope extends Model<
  InferAttributes<Scope>,
  InferCreationAttributes<Scope>
> {
  declare id: CreationOptional<bigint>;
  declare scopes: string[];
  declare createdAt: CreationOptional<Date>;
  declare updatedAt: CreationOptional<Date>;
}

Scope.init(
  {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    scopes: {
      type: DataTypes.ENUM('READ', 'WRITE'),
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
    tableName: 'scopes',
    hooks: {
      afterUpdate: data => {
        data.updatedAt = new Date();
      },
    },
  },
);

export default Scope;
