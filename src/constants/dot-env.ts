import dotenv from 'dotenv';
dotenv.config();

const {
  DATABASE_HOST,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_NAME,
} = process.env;

export const ENV = Object.freeze({
  SEQUELIZE: {
    DATABASE: DATABASE_NAME,
    PASSWORD: DATABASE_PASSWORD,
    USERNAME: DATABASE_USERNAME,
    HOST: DATABASE_HOST,
    PROT: DATABASE_PORT,
    DIALECT: '',
  },
});
