import Controller from '../src/controllers/base-controller';
import Server from '../src/server';
import envConfig from './config/dot-env';

/* All Controllers */
const getControllers = (): Controller[] => {
  return [];
};

(async () => {
  // -->> 1) create server
  const server: Server = new Server(getControllers(), envConfig.port);

  // -->> 2) start server
  server.listen();
})();
