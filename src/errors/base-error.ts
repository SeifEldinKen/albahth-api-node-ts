export default class BaseError extends Error {
  constructor(
    public readonly errorName: string,
    public readonly httpStatusCode: number,
    public readonly message: string,
    public readonly isOperational?: boolean,
  ) {
    super(message);

    Object.setPrototypeOf(this, new.target.prototype);
    Error.captureStackTrace(this);
  }
}
