import { HTTP_STATUS_CODE, ERROR_NAMES } from '../constants';
import { BaseError } from './index';

export default class NotFoundError extends BaseError {
  constructor(message: string) {
    super(ERROR_NAMES.NOT_FOUND, HTTP_STATUS_CODE.NOT_FOUND, message, true);
  }
}
