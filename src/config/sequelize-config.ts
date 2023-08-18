import { Sequelize } from 'sequelize';
import { ENV } from '../config';

const { DATABASE, USERNAME, PASSWORD, HOST, DIALECT } = ENV.SEQUELIZE;

export const sequelizeConfig = new Sequelize(DATABASE!, USERNAME!, PASSWORD, {
  host: HOST,
  dialect: DIALECT,
});
