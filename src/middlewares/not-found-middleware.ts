import { NextFunction, Request, Response } from 'express';
import { NotFoundError } from '../errors';

const notFoundErrorMiddleware = (
  request: Request,
  _response: Response,
  next: NextFunction,
) => {
  next(
    new NotFoundError(
      `Sorry, this link is not available: ${request.originalUrl}`,
    ),
  );
};

export default notFoundErrorMiddleware;
