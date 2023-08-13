import express, { Application, Request, Response } from 'express';
import compression from 'compression';
import Controller from '../src/controllers/base-controller';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import cors from 'cors';
import hpp from 'hpp';

export default class Server {
  public express: Application;
  public port: number;

  public BASE_URL: string = '/api/v1';
  private GOLDEN_ROUTER: string = '/1.618';

  constructor(controllers: Controller[], port: number) {
    this.express = express();
    this.port = port;

    this.initializeDatabaseConnection();

    this.initializeMiddleware();
    this.initializeControllers(controllers);
    this.initGoldenRoute();

    this.initializeErrorHandling();
  }

  /* middlewares */
  private initializeMiddleware = (): void => {
    this.express.use(cors());

    this.express.use(
      rateLimit({
        max: 100,
        windowMs: 15 * 60 * 1000, // 15 min
      }),
    );

    this.express.use(
      compression({
        filter: (req, res) => {
          return !req.headers?.['x-no-compression']
            ? false
            : compression.filter(req, res);
        },
      }),
    );

    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: false }));
    this.express.use(helmet());
    this.express.use(hpp());
  };

  /* endpoints */
  private initializeControllers = (controllers: Array<Controller>): void => {
    if (controllers.length > 0) {
      this.express.use(
        this.BASE_URL,
        controllers.map((controller) => controller.router),
      );
    }
  };

  private initGoldenRoute = () => {
    this.express.get(
      `${this.GOLDEN_ROUTER}`,
      async (request: Request, response: Response) => {
        response.status(200).json({
          message: 'Hello, World! ⭐',
        });
      },
    );
  };

  private initializeErrorHandling = (): void => {};

  private initializeDatabaseConnection = (): void => {};

  public listen = (): void => {
    this.express.listen(this.port, () => {
      console.log(
        `server is running on: http://localhost:${this.port}${this.GOLDEN_ROUTER}`,
      );
    });
  };
}
