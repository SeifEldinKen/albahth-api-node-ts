import Controller from '../src/controllers/base-controller';
import Server from '../src/server';
import { ENV } from './config';

/* All Controllers */
const getControllers = (): Controller[] => {
  return [];
};

(async () => {
  // -->> 1) create server
  const server: Server = new Server(getControllers(), ENV.port);

  // -->> 2) start server
  server.listen();
})();
