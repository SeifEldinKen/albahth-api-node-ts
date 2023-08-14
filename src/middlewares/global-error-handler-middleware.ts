import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { BaseError } from '../errors';

// -->> catch all errors and format and report to logger
const globalErrorHandlerMiddleware: ErrorRequestHandler = (
  error: BaseError,
  request: Request,
  response: Response,
  _next: NextFunction,
) => {
  response.status(error.httpStatusCode || 500).json({
    name: error.name,
    statusCode: error.httpStatusCode,
    error: {
      message: error.message,
      isOperational: error.isOperational,
      stack: error.stack,
    },
  });
};

export default globalErrorHandlerMiddleware;
