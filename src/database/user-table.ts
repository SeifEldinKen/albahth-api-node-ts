import { TABLE_NAMES, COLUMN_NAMES_IN, Gender, Role } from '../constants';

export const USER_TABLE = `CREATE TABLE IF NOT EXISTS ${TABLE_NAMES.users} (
  ${COLUMN_NAMES_IN.userTable.id} UUID PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),
  ${COLUMN_NAMES_IN.userTable.email} VARCHAR(254) UNIQUE NOT NULL,
  ${COLUMN_NAMES_IN.userTable.emailVerified} BOOLEAN NOT NULL DEFAULT FALSE,
  ${COLUMN_NAMES_IN.userTable.name} VARCHAR(32) NOT NULL,
  ${COLUMN_NAMES_IN.userTable.phoneNumber} VARCHAR(20) UNIQUE,
  ${COLUMN_NAMES_IN.userTable.phoneNumberVerified} BOOLEAN NOT NULL DEFAULT FALSE,
  ${COLUMN_NAMES_IN.userTable.passwordHash} VARCHAR NOT NULL,
  ${COLUMN_NAMES_IN.userTable.passwordChangedAt} TIMESTAMP DEFAULT NULL,
  ${COLUMN_NAMES_IN.userTable.passwordRestCodeHash} VARCHAR DEFAULT NULL,
  ${COLUMN_NAMES_IN.userTable.passwordResetCodeExpired} TIMESTAMP DEFAULT NULL,
  ${COLUMN_NAMES_IN.userTable.passwordResetCodeVerified} VARCHAR DEFAULT NULL,
  ${COLUMN_NAMES_IN.userTable.gender} VARCHAR(6) CHECK (
    ${COLUMN_NAMES_IN.userTable.gender} IN ('${Gender.MALE}', '${Gender.FEMALE}')
  ) NOT NULL,
  ${COLUMN_NAMES_IN.userTable.imageProfilePath} VARCHAR,
  ${COLUMN_NAMES_IN.userTable.role} VARCHAR(16) CHECK (
    ${COLUMN_NAMES_IN.userTable.role} IN ('${Role.USER}', '${Role.ADMIN}')
  ) NOT NULL DEFAULT ${Role.USER},
  ${COLUMN_NAMES_IN.userTable.status} BOOLEAN NOT NULL DEFAULT TRUE,
  ${COLUMN_NAMES_IN.userTable.createdAt} TIMESTAMP NOT NULL DEFAULT NOW(),
  ${COLUMN_NAMES_IN.userTable.updatedAt} TIMESTAMP NOT NULL
);`;
