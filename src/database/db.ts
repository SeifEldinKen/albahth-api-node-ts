import { Sequelize } from 'sequelize';
import { ENV } from '../config';

export default class DB {
  static connection = async (): Promise<Sequelize | null> => {
    let sequelize: Sequelize | null = null;

    try {
      sequelize = new Sequelize(
        ENV.SEQUELIZE.DATABASE!,
        ENV.SEQUELIZE.USERNAME!,
        ENV.SEQUELIZE.PASSWORD,
        {
          host: ENV.SEQUELIZE.HOST,
          dialect: ENV.SEQUELIZE.DIALECT,
        },
      );

      await sequelize.authenticate();

      console.log('Connected database');

      return sequelize;
    } catch (error) {
      console.log(`Connection Error: ${error}`);
      return null;
    }
  };

  static close = async (sequelize: Sequelize | null) => {
    await sequelize?.close();
  };
}
