import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { BadRequestError, BaseError, UnauthorizedError } from '../errors';
import { ENV } from '../config';

// -->> catch all errors and format and report to logger
const globalErrorHandlerMiddleware: ErrorRequestHandler = (
  error: BaseError,
  request: Request,
  response: Response,
  _next: NextFunction,
) => {
  // --> wrong jwt error
  if (error.name === 'TokenExpiredError') {
    error = new BadRequestError('Expired token, please try again letter!');
  }

  if (error.name === 'JsonWebTokenError') {
    error = new UnauthorizedError('Invalid token, please try again letter!');
  }

  if (error.name === 'JsonWebToken') {
    //
  }

  if (error.name === 'SyntaxError') {
    error = new BadRequestError(error.message);
  }

  response.status(error.httpStatusCode || 500).json({
    name: error.name,
    statusCode: error.httpStatusCode,
    error: {
      message: error.message,
      isOperational: error.isOperational,
      stack: ENV.nodeEnv === 'development' ? error.stack : undefined,
    },
  });
};

export default globalErrorHandlerMiddleware;
