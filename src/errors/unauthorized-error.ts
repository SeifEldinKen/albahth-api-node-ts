import { ERROR_NAMES, HTTP_STATUS_CODE } from '../constants/index';
import { BaseError } from './index';

export default class UnauthorizedError extends BaseError {
  constructor(message: string) {
    super(ERROR_NAMES.AUTHORIZE, HTTP_STATUS_CODE.UNAUTHORIZED, message, true);
  }
}
