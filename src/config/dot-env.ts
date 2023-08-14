import dotenv from 'dotenv';
dotenv.config();

const {
  PORT,
  NODE_ENV,
  DATABASE_HOST,
  DATABASE_USERNAME,
  DATABASE_PASSWORD,
  DATABASE_PORT,
  DATABASE_NAME,
  DATABASE_TEST_NAME,
  PEPPER_PASSWORD,
  SALE_ROUND_PASSWORD,
  TOKEN_SECRET,
  TOKEN_EXPIRED,
  EMAIL_HOST,
  EMAIL_PROT,
  EMAIL_USER,
  EMAIL_PASSWORD,
} = process.env;

export = {
  databaseHost: DATABASE_HOST,
  databaseUsername: DATABASE_USERNAME,
  databasePassword: DATABASE_PASSWORD,
  databasePort: Number(DATABASE_PORT),
  databaseName: DATABASE_NAME,
  databaseTestName: DATABASE_TEST_NAME,
  nodeEnv: NODE_ENV,
  port: Number(PORT),
  pepperPassword: PEPPER_PASSWORD,
  saltRoundPassword: SALE_ROUND_PASSWORD,
  tokenSecret: TOKEN_SECRET,
  tokenExpired: TOKEN_EXPIRED,
  emailHost: EMAIL_HOST,
  emailPort: EMAIL_PROT,
  emailUser: EMAIL_USER,
  emailPassword: EMAIL_PASSWORD,
};
