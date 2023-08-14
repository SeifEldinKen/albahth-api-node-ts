import { ERROR_TYPES, HTTP_STATUS_CODE } from '../constants';
import BaseError from './base-error';

export default class ApiError extends BaseError {
  constructor(message: string) {
    super(
      ERROR_TYPES.INTERNAL_SERVER_ERROR,
      HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR,
      message,
      true,
    );
  }
}
