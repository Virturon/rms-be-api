import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();

const { DB_USERNAME, DB_PASSWORD, DB_NAME, DB_HOST } = process.env;

export const sequelize = new Sequelize(
  DB_NAME ?? '',
  DB_USERNAME ?? '',
  DB_PASSWORD,
  {
    host: DB_HOST,
    dialect: 'postgres',
  },
);

export const initiateConnection = () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connected to DB');
    })
    .catch(err => {
      console.log('Error connecting DB', err);
    });
};
