import { ERROR_TYPES, HTTP_STATUS_CODE } from '../constants';
import { BaseError } from './index';

export default class BadRequestError extends BaseError {
  constructor(message: string) {
    super(ERROR_TYPES.BAD_REQUEST, HTTP_STATUS_CODE.BAD_REQUEST, message, true);
  }
}
