import dotenv from 'dotenv';
import { Dialect } from 'sequelize';
dotenv.config();

const {
  DATABASE_HOST,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_NAME,
  DATABASE_TEST_NAME,
  DIALECT,
  PORT,
  NODE_ENV,
  PEPPER_PASSWORD,
  SALE_ROUND_PASSWORD,
  TOKEN_SECRET,
  TOKEN_EXPIRED,
} = process.env;

export const ENV = Object.freeze({
  SEQUELIZE: {
    DATABASE: DATABASE_NAME,
    PASSWORD: DATABASE_PASSWORD,
    USERNAME: DATABASE_USERNAME,
    HOST: DATABASE_HOST,
    PROT: DATABASE_PORT,
    DIALECT: DIALECT as Dialect,
  },
  nodeEnv: NODE_ENV,
  port: Number(PORT),
  pepperPassword: PEPPER_PASSWORD,
  saltRoundPassword: SALE_ROUND_PASSWORD,
  tokenSecret: TOKEN_SECRET,
  tokenExpired: TOKEN_EXPIRED,
});
