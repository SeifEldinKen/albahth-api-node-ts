import { NextFunction, Request, Response, Router } from 'express';

export default interface BaseController {
  path: string;
  router: Router;

  /* POST */
  create(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void>;

  /* GET */
  getAll(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void>;

  getById(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void>;

  /* UPDATE */
  updateById(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void>;

  /* DELETE */
  deleteById(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void>;

  deleteAll(
    request: Request,
    response: Response,
    next: NextFunction,
  ): Promise<void>;
}
