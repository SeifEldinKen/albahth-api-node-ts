import { QueryTypes, Sequelize } from 'sequelize';
import { UUID_EXTENSION, USER_TABLE } from '../database';
import { ENV } from '../config';

export default class DB {
  static connection = async () => {
    let sequelize: Sequelize | null = null;

    try {
      const { DATABASE, USERNAME, PASSWORD, HOST, DIALECT } = ENV.SEQUELIZE;

      sequelize = new Sequelize(DATABASE!, USERNAME!, PASSWORD, {
        host: HOST,
        dialect: DIALECT,
        logging: false,
      });

      await sequelize.authenticate();

      console.log('Connected database');
    } catch (error) {
      sequelize = null;
      throw new Error(
        `Error connection to database: ${(error as Error).message}`,
      );
    }

    return sequelize;
  };

  static close = async (sequelize: Sequelize | null) => {
    await sequelize?.close();
  };

  static init = async () => {
    let sequelize: Sequelize | null = null;

    try {
      sequelize = await this.connection();

      const tables = [UUID_EXTENSION, USER_TABLE];

      if (!sequelize) {
        throw Error;
      }

      await tables.forEach(async (table) => {
        await sequelize?.query(table, {
          logging: false,
          type: QueryTypes.INSERT,
        });
      });
    } catch (error) {
      return false;
    } finally {
      await this.close(sequelize);
    }

    return true;
  };
}
