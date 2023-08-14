import { HTTP_STATUS_CODE, ERROR_TYPES } from '../constants';
import { BaseError } from './index';

export default class NotFoundError extends BaseError {
  constructor(message: string) {
    super(ERROR_TYPES.NOT_FOUND, HTTP_STATUS_CODE.NOT_FOUND, message, true);
  }
}
